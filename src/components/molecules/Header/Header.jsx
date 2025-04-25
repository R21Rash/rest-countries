import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { House, Phone, Heart, List, X, SignIn } from "@phosphor-icons/react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";
import AvatarMenu from "../../Atoms/Avatar/Avatar";
import Button from "../../Atoms/Button/Button";
import Logo from "../../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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

        {/* Center: Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-10 text-gray-600 dark:text-gray-300 text-[22px]">
          <NavLink
            to="/"
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

        {/* Right: Avatar or Login */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="hidden md:block">
              <AvatarMenu />
            </div>
          ) : (
            <div className="hidden md:flex">
              <Button
                onClick={() => navigate("/auth")}
                variant="outlineGray"
                label="Login"
                icon={<SignIn size={20} />}
              />
            </div>
          )}

          {/* Hamburger (Mobile) */}
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="flex flex-col mt-4 gap-4 md:hidden text-gray-600 dark:text-gray-300 text-[22px]">
          <NavLink
            to="/"
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

          {/* Mobile Login or Avatar */}
          <div className="block mt-4">
            {user ? (
              <AvatarMenu />
            ) : (
              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => navigate("/auth")}
                  variant="outlineGray"
                  label="Login"
                  icon={<SignIn size={20} />}
                />
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
