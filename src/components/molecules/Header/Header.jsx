import { NavLink } from "react-router-dom";
import {
  House,
  GlobeHemisphereWest,
  Info,
  Phone,
  Heart,
} from "@phosphor-icons/react";
import AvatarMenu from "../../Atoms/Avatar/Avatar";
import Logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-3 border-b bg-white shadow-sm dark:bg-brand-dark dark:text-white transition-colors duration-300">
      {/* Left: Logo */}
      <div
        className="text-xl flex  flex-row  font-bold tracking-tight text-gray-800 dark:text-white"
        style={{ fontFamily: "'Poppins', cursive" }}
      >
        <img
          src={Logo} // Replace with your image path
          alt="Logo"
          className="w-6 h-6 object-contain"
        />{" "}
        REST Countries
      </div>

      {/* Center: Nav */}
      <nav className="flex gap-10 items-center text-gray-600 dark:text-gray-300 text-[22px]">
        <NavLink
          to="/HomePage"
          title="Home"
          className={({ isActive }) =>
            `transition-all p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
              isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300"
            }`
          }
        >
          <House weight="regular" />
        </NavLink>

        <NavLink
          to="/favourites"
          title="Favourites"
          className={({ isActive }) =>
            `transition-all p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
              isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300"
            }`
          }
        >
          <Heart weight="regular" />
        </NavLink>

        <NavLink
          to="/contact"
          title="Contact"
          className={({ isActive }) =>
            `transition-all p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
              isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300"
            }`
          }
        >
          <Phone weight="regular" />
        </NavLink>
      </nav>

      {/* Right: Avatar */}
      <div className="ml-4">
        <AvatarMenu />
      </div>
    </header>
  );
};

export default Header;
