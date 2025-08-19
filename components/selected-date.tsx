"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendar } from "react-icons/fa";

import "react-datepicker/dist/react-datepicker.css";

const SelectedDate = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <div>
      <div className="flex items-center gap-x-2.5 font-semibold text-dark text-base mb-3">
        <FaCalendar />
        <span>Choose Date</span>
      </div>
      <DatePicker
        className="h-14 w-79 outline-none pl-7.5 rounded-full border-1 border-gray-200 hover:border-accent-hover focus:border-accent-hover font-secondary font-semibold text-base text-dark placeholder:text-dark"
        selected={startDate}
        onChange={(date) => setStartDate(date as Date)}
      />
    </div>
  );
};

export default SelectedDate;
