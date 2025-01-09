import React from "react";
import { useParams, Link } from "react-router-dom";

import { ArrowLeft } from "lucide-react";

import Header from "../../Components/Header";
import { ServiceSection } from "./Components/ServiceSection";
import { services } from "../../utils";
import Headerr from "../../Components/Header2";
import Footer from "../../Components/Footer";

export function ServicePage() {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));

  if (!service) {
    return (
      <div className="min-h-screen bg-[#f9f4e8] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1f1f1f] mb-4">
            Service not found
          </h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f4e8]">
      <Headerr />
      <Header />
      <div className="container mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Services
        </Link>

        <div className="bg-[#f9f5ef] rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-72 md:h-96">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                {service.title}
              </h1>
            </div>
          </div>

          <div className="p-8">
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              {service.overview}
            </p>

            <ServiceSection
              title="Services Offered"
              items={service.Services_Offered}
            />
            <ServiceSection title="Benefits" items={service.Benefits} />
            <ServiceSection title="Success Stories" items={service.Examples} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
