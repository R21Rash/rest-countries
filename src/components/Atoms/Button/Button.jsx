// components/Button/Button.jsx
const Button = ({ label, onClick, className }) => (
  <button
    className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
    onClick={onClick}
  >
    {label}
  </button>
);
export default Button;
