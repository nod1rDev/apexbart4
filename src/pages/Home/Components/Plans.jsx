"use client";

import { Check } from "lucide-react";
import { Link } from "react-router-dom";
const PricingTier = ({ name, price, features, isPopular = false }) => (
  <div
    className={`bg-white p-8  rounded-lg flex flex-col justify-between shadow-lg ${
      isPopular ? "border-2 border-[#1f1f1f]" : ""
    }`}
  >
    {isPopular && (
      <span className="bg-[#1f1f1f] max-w-[150px] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
       The Most Famous
      </span>
    )}
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <p className="text-4xl font-bold mb-6">
      {price} <span className="text-xl font-normal">/ month</span>
    </p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="mr-2 h-5 w-5 text-green-500" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link to="/contact">
      <button className="w-full bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-300">
       Get Start
      </button>
    </Link>
  </div>
);
const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    features: ["Limited AI queries", "Basic models", "Community support"],
  },
  {
    name: "Starter",
    price: "$9.99",
    features: ["100 AI queries", "Basic models", "24/7 support"],
  },
  {
    name: "Professional",
    price: "$29.99",
    features: [
      "Unlimited AI queries",
      "All models",
      "Dedicated API access",
      "Priority support",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Tailored solutions",
      "Custom models",
      "24/7 support",
      "Dedicated account manager",
    ],
  },
];

export default function PricingPlans() {
  return (
    <div className="bg-[#f9f4e8] text-[#1f1f1f] py-[90px] px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold font-seaction sm:text-[3rem]">
            <span className="text-red-500">Pricing</span> plans
          </h2>
          <p className="max-w-2xl mx-auto font-italian text-lg">
            Because our service is custom, pricing may vary due to extras like
            migrations. We have no hidden fees, but you must pay for the CRM and
            other tools directly.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </div>
  );
}
