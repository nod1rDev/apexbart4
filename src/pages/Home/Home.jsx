import Footer from "../../Components/Footer";
import FreeConsoulting from "./Components/FreeConsoulting";
import Header from "../../Components/Header";
import Headerr from "../../Components/Header2";
import { services } from "../../utils";
import { ServiceCard } from "../Service/Components/ServiceCard";
import Support from "./Components/Support";
import Vocansiya from "./Components/Vocansiya";
import { motion } from "framer-motion";
import ProjectShowcase from "./Components/Project";
import CommentSlider from "./Components/Comments";
import ChatBot from "../../Components/ChatBot";
import PricingPlans from "./Components/Plans";
import FAQSection from "./Components/FAQ";
function Home() {
  return (
    <>
      <div className="bg-[#f9f4e8] text-[#1f1f1f]  flex flex-col">
        <div
          style={{
            backgroundImage: `url("https://cdn.prod.website-files.com/6427c6c769d01c2f58037956/6427ce2ee23a16d26b372c45_bg-lines-axe.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
          }}
        >
          <Headerr />
          <Header />
          <Support />
        </div>
        <div className="max-w-[90%] mx-auto px-4 py-[70px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1 },
              },
            }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4"></div>
            <h2 className="text-3xl md:text-[5rem] font-bold text-[#1f1f1f] mb-4">
              Our <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
              Discover our comprehensive range of professional services designed
              to elevate your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1 },
                },
              }}
              className="group bg-[#fcf8f1] flex justify-between flex-col p-[32px] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <h1 className="text-[3rem] text-center font-bold">
                  Contact <span className="text-red-600">US</span>
                </h1>
                <p className="text-lg text-center text-[#555] mt-4 px-6">
                  We would love to hear from you! Whether you have a question,
                  feedback, feel free to reach out.
                </p>
                <p className="text-center text-[#555] mt-2">
                  Our team is here to help you with anything you need.
                </p>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="/contact"
                  className="inline-block py-3 px-6 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <CommentSlider />

        <Vocansiya />

        <ProjectShowcase />
        <PricingPlans />
        <FAQSection />
        <FreeConsoulting />
        <Footer />
        <ChatBot />
      </div>
    </>
  );
}

export default Home;
