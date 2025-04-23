import React from "react";
const FilterDropdown = ({ label, options = [], onChange, value }) => {
  const selectId = label.toLowerCase().replace(/\s+/g, "-") + "-select";
  return (
    <div className="w-full">
      <label
        htmlFor={selectId}
        className="block mb-2 text-base font-semibold text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          className="w-full appearance-none px-5 py-3 pr-10 border border-gray-300 text-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
