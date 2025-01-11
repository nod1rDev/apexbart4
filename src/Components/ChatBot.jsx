import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello, how can I assist you?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

      const response = await fetch(
        `https://api.openai.com/v1/assistants/interactions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
            "OpenAI-Beta": "assistants=v2",
          },
          body: JSON.stringify({
            input: {
              message_type: "text",
              text: input,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error Details:", errorDetails);
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();
      const botMessage = {
        sender: "bot",
        text: data.output.text.trim(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "An error occurred. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-6 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4  py-4 md:px-[5vh] md:py-[3vh] bg-gray-900  text-white rounded-full shadow-lg  hover:bg-gray-700  glowing-effect  transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle size={32} />
            <span className="font-bold text-[32px] hidden md:block">Chat</span>
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col w-[350px] md:w-[380px] h-[350px] md:h-[600px] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-gray-700 p-4 bg-gray-800 text-white">
              <div className="flex items-center   gap-3">
                <img
                  src="/logo.png"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold text-lg">ApexBart</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </motion.button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-gray-800">
              <AnimatePresence initial={false}>
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    } mb-4`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        msg.sender === "user"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-300 text-gray-900 shadow-md"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <div className="flex gap-2">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  ref={inputRef}
                  type="text"
                  className="flex-1 px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors disabled:bg-gray-500"
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
