import { useState } from "react";
import { NavLink } from "react-router-dom";
import { House, Phone, Heart, List, X } from "@phosphor-icons/react";
import AvatarMenu from "../../Atoms/Avatar/Avatar";
import Logo from "../../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full px-6 py-3 border-b bg-white shadow-sm dark:bg-brand-dark dark:text-white transition-colors duration-300">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <div
          className="text-xl flex items-center gap-2 font-bold tracking-tight text-gray-800 dark:text-white"
          style={{ fontFamily: "'Poppins', cursive" }}
        >
          <img src={Logo} alt="Logo" className="w-6 h-6 object-contain" />
          REST Countries
        </div>

        {/* Center: Nav (Desktop only) */}
        <nav className="hidden md:flex items-center gap-10 text-gray-600 dark:text-gray-300 text-[22px]">
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

        {/* Right: Avatar + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Avatar - always visible on desktop, inside mobile nav otherwise */}
          <div className="hidden md:block">
            <AvatarMenu />
          </div>

          {/* Hamburger Button - only mobile */}
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="flex flex-col mt-4 gap-4 md:hidden text-gray-600 dark:text-gray-300 text-[22px]">
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
          {/* Mobile Avatar */}
          <div className="block mt-2">
            <AvatarMenu />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
