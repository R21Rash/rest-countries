import { House, GlobeHemisphereWest, Info, Phone } from "@phosphor-icons/react";
import AvatarMenu from "../../Atoms/Avatar/Avatar";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-3 border-b bg-white shadow-sm dark:bg-brand-dark dark:text-white transition-colors duration-300">
      {/* Left: Logo */}
      <div
        className="text-xl font-bold tracking-tight text-gray-800 dark:text-white"
        style={{ fontFamily: "'Poppins ', cursive" }}
      >
        🌍 REST Countries
      </div>

      {/* Center: Nav */}
      <nav className="flex gap-10 items-center text-gray-600 dark:text-gray-300 text-[22px]">
        <a
          href="/"
          title="Home"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-all p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <House weight="regular" />
        </a>
        <a
          href="/countries"
          title="Countries"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-all p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <GlobeHemisphereWest weight="regular" />
        </a>
        <a
          href="/about"
          title="About"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-all p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Info weight="regular" />
        </a>
        <a
          href="/contact"
          title="Contact"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-all p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Phone weight="regular" />
        </a>
      </nav>

      {/* Right: Avatar */}
      <div className="ml-4">
        <AvatarMenu />
      </div>
    </header>
  );
};

export default Header;
