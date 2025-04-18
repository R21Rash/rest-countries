import { useState } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react"; // Make sure you have this package installed

const AvatarMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2"
      >
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User avatar"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
        <span className="hidden sm:block font-medium">Musharof</span>
        {open ? <CaretUp size={16} /> : <CaretDown size={16} />}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg border rounded z-50">
          <div className="px-4 py-2 text-sm">
            <p className="font-semibold text-gray-800">Musharof Chowdhury</p>
            <p className="text-gray-500">randomuser@pinjoo.com</p>
          </div>
          <hr />
          <ul className="text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Edit Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Account Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Support
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
