import React from "react";
const variantStyles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  outlinePrimary: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  outlineGray:
    "border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
  ghost: "bg-transparent text-gray-400 text-sm",
};

const Button = ({
  label,
  icon,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}) => {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded transition font-medium";
  const finalClass = `${base} ${variantStyles[variant] || ""} ${className}`;

  return (
    <button type={type} className={finalClass} onClick={onClick}>
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default Button;
