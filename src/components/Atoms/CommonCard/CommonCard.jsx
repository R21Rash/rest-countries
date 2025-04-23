import React from "react";
const CommonCard = ({ children }) => {
  return (
    <div className="p-4 mb-6 bg-white border rounded shadow-md grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {children}
    </div>
  );
};

export default CommonCard;
