import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
export function ServiceCard({ service }) {
  return (
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
      className="group bg-[#fcf8f1] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
      </div>
      <div className="p-6">
        <h3 className="text-[#1f1f1f] text-xl font-bold mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{service.overview}</p>
        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          Learn More{" "}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
