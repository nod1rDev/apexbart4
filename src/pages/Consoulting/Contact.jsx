import React, { useState } from "react";
import { Clock, Calendar, Globe } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { DatePickerr } from "./components/DatePicker";

import Header from "../../Components/Header";

import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import { POST } from "../../API/database";
function Contact() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    website: "",
    headcount: "",
    referral: "",
    details: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const backButton = () => {
    if (time && selectedDate) {
      setFormVisible(false);
      setTime("");
    } else if (selectedDate) {
      setSelectedDate(null);
    }
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const putData = await POST(
      {
        name: FormData.name,
        email: formData.email,
        company_name: formData.companyName,
        website: formData.website,
        head_count: FormData.headcount,
        referral: formData.referral,
        details: formData.details,
        phone: formData.phone,
        date: selectedDate ? formatDate(selectedDate) : "",
        time: time,
      },
      "contact"
    );

    console.log(putData);
  };

  const renderTimeButtons = () => {
    const times = ["09:00", "12:00", "15:00", "18:00"];
    return (
      <div className=" max-w-[40%] ">
        <label className="flex font-medium   mb-2">Select Time *</label>
        <div className="flex gap-2 max-w-[100%] flex-wrap">
          {times.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTime(t);
                setFormVisible(true);
              }}
              className={`py-2 px-4 rounded-lg ${
                time === t ? "bg-[#4f46e5] text-white" : "bg-gray-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const location = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-[#f9f4e8] text-[#1f1f1f]  ">
        <Header />

        <button
          onClick={() => {
            location(-1);
          }}
          className={`flex items-center text-[26px] ml-[100px] text-blue-600 my-8 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[36px] h-[36px] mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Back
        </button>
        <div className="text-center  my-8">
          <h1 className="text-3xl font-bold">
            Book your free <span className="text-blue-600">consultation</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Learn how we help companies skyrocket productivity through custom
            automations and systems
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid bg-white shadow-lg md:grid-cols-2 gap-8">
          {/* Left Panel - Company Info */}
          <div className=" border-r border-b-black p-6">
            <button
              onClick={backButton}
              className={`${
                selectedDate ? "flex" : "hidden"
              } items-center text-blue-600 mb-4 `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              Back
            </button>

            {/* Header */}
            <div className="flex items-center mb-6">
              <img
                src="/logo.png" // Replace with actual logo URL
                alt="Axe Automation Logo"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">ApexBart Solution</h2>
              </div>
            </div>

            {/* Appointment Details */}
            <div>
              <h3 className="text-xl font-bold mb-2">
                Automation Discovery Call
              </h3>
              <div className="flex items-center text-gray-600 text-sm mb-2">
                <Clock className="w-4 h-4 mr-2" />
                30 min
              </div>
              <div className="flex items-center text-gray-600 text-sm mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                02:00 - 02:30, Thursday, January 9, 2025
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Globe className="w-4 h-4 mr-2" />
                Uzbekistan Time
              </div>
            </div>

            {/* Description */}
            <div className="mt-4">
              <p className="text-gray-800 text-sm font-medium mb-2">
                If you are looking to:
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>Scale your company with automations and systems</li>
                <li>Reduce your workload</li>
                <li>Improve your margins</li>
              </ul>
            </div>
          </div>

          {/* Right Panel - Booking Form */}
          <div className=" rounded-lg py-6 px-4 ">
            {!formVisible ? (
              <div className=" flex  w-full ">
                <div className={`${selectedDate ? "w-[59%]" : "w-[90%]"}`}>
                  <DatePickerr
                    currentDate={currentDate}
                    setCurrentDate={setCurrentDate}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                </div>
                {selectedDate && renderTimeButtons()}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-[90%]">
                <div>
                  <label className="block font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Your Website</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">
                    What is your company headcount? *
                  </label>
                  <select
                    name="headcount"
                    value={formData.headcount}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                  >
                    <option value="">Select...</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-2">
                    How did you hear about us? *
                  </label>
                  <input
                    type="text"
                    name="referral"
                    value={formData.referral}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">
                    Please share details on what you want to automate
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg p-2"
                  ></textarea>
                </div>
                <div>
                  <label className="block font-medium mb-2">Phone *</label>
                  <PhoneInput
                    country={"uz"}
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                    inputClass="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4f46e5] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#3b38b0]"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
