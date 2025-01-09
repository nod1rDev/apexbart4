import React, { useState } from "react";



const EnterDetails = ({ selectedDate, selectedTime }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    website: "",
    headcount: "",
    source: "",
    details: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleFormURL = "YOUR_GOOGLE_FORM_URL"; // Replace with your Google Form Action URL
    const formDataToSubmit = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formDataToSubmit,
      });
      alert("Details submitted successfully!");
    } catch (error) {
      alert("Error submitting the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
      <p className="text-gray-700">
        Date: <strong>{selectedDate}</strong>, Time: <strong>{selectedTime}</strong>
      </p>
      <input
        type="text"
        name="name"
        placeholder="Name *"
        required
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email *"
        required
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="website"
        placeholder="Your Website"
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="headcount"
        placeholder="What is your company headcount? *"
        required
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <textarea
        name="details"
        placeholder="Please share details on what you want to automate"
        rows={3}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number *"
        required
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-[#4f46e5] text-white py-2 px-6 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default EnterDetails;
