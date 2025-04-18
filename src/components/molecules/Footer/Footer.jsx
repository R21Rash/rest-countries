import React from "react";
const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-100 text-gray-600 text-sm border-t py-4 px-6 text-center">
      <p>&copy; {new Date().getFullYear()} REST Countries Explorer</p>
    </footer>
  );
};

export default Footer;
