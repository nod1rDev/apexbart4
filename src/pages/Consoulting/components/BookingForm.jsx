import React, { useState } from "react";

export const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateClick = (date) => setSelectedDate(date);
  const handleTimeClick = (time) => setSelectedTime(time);

  const availableDates = ["2025-01-08", "2025-01-09", "2025-01-10"];
  const availableTimes = ["00:00", "02:00", "19:00", "19:30", "20:00", "20:30", "21:00"];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select a Date & Time</h2>
      <div className="grid grid-cols-7 gap-2 mb-6">
        {availableDates.map((date) => (
          <button
            key={date}
            onClick={() => handleDateClick(date)}
            className={`py-2 px-4 rounded-lg text-sm ${
              selectedDate === date ? "bg-[#4f46e5] text-white" : "bg-gray-100"
            }`}
          >
            {new Date(date).toLocaleDateString("en-US", { weekday: "short", day: "numeric" })}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {availableTimes.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeClick(time)}
            className={`py-2 px-4 rounded-lg text-sm ${
              selectedTime === time ? "bg-[#4f46e5] text-white" : "bg-gray-100"
            }`}
          >
            {time}
          </button>
        ))}
      </div>
      {selectedDate && selectedTime && (
        <div className="mt-6">
          <p className="text-gray-700">
            You selected <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>
          </p>
          <button className="mt-4 bg-[#4f46e5] text-white py-2 px-6 rounded-lg">
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
};
