import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function DatePickerr({
  currentDate,
  setCurrentDate,
  selectedDate,
  setSelectedDate,
}) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // O'zbekiston vaqti (UTC+5) uchun vaqt zonasini sozlash
      const uzbekistanTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Tashkent" })
      );
      const formattedTime = uzbekistanTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formattedTime);
    };

    // Har soniyada vaqtni yangilash
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Cleanup qilish
    return () => clearInterval(interval);
  }, []);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];
    // Adjust for Monday as first day of week
    const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date) => {
    return selectedDate?.toDateString() === date.toDateString();
  };

  return (
    <div className="w-[100%] bg-white rounded-lg  p-4">
      <h2 className="text-lg font-semibold mb-4">Select a Date & Time</h2>

      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigateMonth("prev")}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <span className="text-sm font-medium">
          {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>

        <button
          onClick={() => navigateMonth("next")}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {DAYS.map((day) => (
          <div
            key={day}
            className="text-xs text-center text-gray-500 font-medium py-2"
          >
            {day}
          </div>
        ))}

        {getDaysInMonth(currentDate).map((date, index) => (
          <div key={index} className="aspect-square">
            {date && (
              <button
                onClick={() => setSelectedDate(date)}
                className={`
                  w-full h-full flex items-center justify-center text-sm rounded-full
                  ${isToday(date) ? "" : ""}
                  ${
                    isSelected(date)
                      ? "bg-blue-100 text-blue-600"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                {date.getDate()}
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex items-center text-sm text-gray-600">
          <Globe className="w-4 h-4 mr-2" />
          <span>Time zone</span>
        </div>
        <div className="mt-1 text-sm font-medium">Uzbekistan Time ({time})</div>
      </div>
    </div>
  );
}
