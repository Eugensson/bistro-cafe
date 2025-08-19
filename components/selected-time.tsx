import { useState } from "react";
import "react-clock/dist/Clock.css";
import { FaClock } from "react-icons/fa";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

const SelectedTime = () => {
  const [time, setTime] = useState("10:00");

  return (
    <div>
      <div className="flex items-center gap-x-2.5 font-semibold text-dark text-base mb-3">
        <FaClock />
        <span>Choose Time</span>
      </div>
      <TimePicker
        className="h-14 w-79 outline-none pl-7.5 rounded-full border-1 border-gray-200 hover:border-accent-hover focus:border-accent-hover font-secondary font-semibold text-base text-dark placeholder:text-dark"
        clearIcon={false}
        clockIcon={false}
        onChange={(time) => setTime(time as string)}
        value={time}
      />
    </div>
  );
};

export default SelectedTime;
