"use client";

import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const pricingTiers = [
  {
    name: "CRM OS",
    price: "$500",
    status: "left",
    description: "CRM Set-up, 100% done-for-you, custom and fully integrated",
    features: [
      { text: "Simple lead filters and stages" },
      { text: "Leads automatically added" },
      { text: "Follow-up system" },
      { text: "Mass email system" },
      { text: "Central KPI dashboard" },
      { text: "Training and adoption" },
      { text: "Free B2B growth masterclass" },
      { text: "Free cold email course" },
      { text: "Free LinkedIn sales course" },
      { text: "Free Meta Ads course" },
      { text: "Free SEO and Google Ads course" },
      { text: "You own everything 100%" },
      { text: "1-2 week implementation" },
    ],
  },
  {
    name: "Sales OS",
    price: "$2,950",
    status: "top",
    description:
      "CRM + AI Automated Sales Process\n100% done-for-you, custom and fully integrated",
    features: [
      { text: "Sales process audit" },
      { text: "AI appt setter (two-way SMS & Email)" },
      { text: "Speed-to-lead system" },
      { text: "Automated follow-up" },
      { text: "Automated proposals and signatures" },
      { text: "Integrated payments" },
      { text: "Automated notifications" },
      { text: "AI call recording and summaries" },
      { text: "Automated scheduling" },
      { text: "Form creation" },
      { text: "Appointment reminders" },
      { text: "You own everything 100%" },
      { text: "4 week implementation" },
    ],
  },
  {
    name: "Full Scale OS",
    price: "$5,950",
    status: "right",
    description:
      "CRM + AI Automated Sales Process\n100% done-for-you, custom and fully integrated",
    features: [
      { text: "Project Management tool set-up" },
      { text: "Standardized task management" },
      { text: "Automated hand-offs" },
      { text: "Accountability systems" },
      { text: "Form creation" },
      { text: "Automated onboarding" },
      { text: "Deadline reminders" },
      { text: "Automated approvals" },
      { text: "Workflow automation" },
      { text: "Centralized documents and assets" },
      { text: "Quality assurance system" },
      { text: "You own everything 100%" },
      { text: "8 week implementation" },
    ],
  },
];

export default function PricingPlans() {
  return (
    <div className="bg-[#f9f4e8] text-[#1f1f1f] py-[90px] px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold sm:text-[3rem]">
            <span className="text-red-500">Pricing</span> plans
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Because our service is custom, pricing may vary due to extras like
            migrations. We have no hidden fees, but you must pay for the CRM and
            other tools directly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={
                tier.status === "top"
                  ? {
                      hidden: {
                        opacity: 0,
                        y: 80,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1.2 },
                      },
                    }
                  : ""
              }
              key={tier.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="text-center">
                  <div className="text-blue-600 font-semibold mb-4">
                    {tier.name}
                  </div>
                  <div className="text-4xl font-bold">{tier.price}</div>
                </div>
                <p className="text-center text-sm mt-4">{tier.description}</p>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div className="font-medium">This Plan Includes:</div>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="p-6 border-t border-gray-200">
                <Link to={"/contact"}>
                  <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 font-medium">
                    Get Started
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
