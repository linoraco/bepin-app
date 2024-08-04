"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="relative">
      <DatePicker
        selected={startDate}
        onChange={(item) => setStartDate(item)}
        dateFormat="dd MMMM yyyy"
        className="input input-bordered w-full pl-10 pr-4 py-2 border rounded-sm text-black text-sm"
      />
      <div className="absolute inset-y-0 start-0 flex items-center pl-3.5 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-10h2v7H5V8Zm8 7h2V8h-2v7Zm-4-7h2v7h-2V8Z" />
        </svg>
      </div>
    </div>
  );
}
