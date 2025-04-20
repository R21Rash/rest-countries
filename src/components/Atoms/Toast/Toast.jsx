// components/Atoms/Toast/Toast.jsx
import React, { useEffect } from "react";

const typeStyles = {
  success: "bg-green-500 text-white",
  warning: "bg-yellow-500 text-white",
  error: "bg-red-500 text-white",
};

const Toast = ({ type = "success", message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-md shadow-lg transition-all duration-300 ${typeStyles[type]}`}
    >
      {message}
    </div>
  );
};

export default Toast;
