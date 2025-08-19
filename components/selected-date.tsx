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
        className="input"
        selected={startDate}
        onChange={(date) => setStartDate(date as Date)}
      />
    </div>
  );
};

export default SelectedDate;
