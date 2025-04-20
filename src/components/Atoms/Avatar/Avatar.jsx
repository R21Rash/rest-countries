import { useState, useEffect } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { logoutUser } from "../../../services/auth-service";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";

const AvatarMenu = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    navigate("/");
  };

  const getInitial = () => {
    if (!user?.email) return "U";
    return user.email.charAt(0).toUpperCase();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2"
      >
        {/* Always show letter avatar */}
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold border-2 border-white">
          {getInitial()}
        </div>

        <span className="hidden sm:block font-medium">
          {user?.displayName || user?.email?.split("@")[0] || "User"}
        </span>
        {open ? <CaretUp size={16} /> : <CaretDown size={16} />}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg border rounded z-50">
          <div className="px-4 py-2 text-sm">
            <p className="font-semibold text-gray-800">
              {user?.displayName || "Anonymous User"}
            </p>
            <p className="text-gray-500">{user?.email || "No email found"}</p>
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
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
              onClick={handleLogout}
            >
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
