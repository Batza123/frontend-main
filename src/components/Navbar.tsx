import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTools, FaBars, FaTimes } from "react-icons/fa";
import { useCartStore } from "../store/cartStore";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  navVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, navVisible }) => {
  const totalItems = useCartStore((state) => state.totalItems);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 shadow-md transition-transform duration-300 ${
        navVisible ? "translate-y-0" : "-translate-y-full"
      } bg-gradient-to-r from-red-500 via-blue-500 to-purple-600 rounded-xl`}
    >
      <div className="flex justify-between items-center p-4 px-6 text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaTools className="text-white text-xl" />
          <Link to="/" className="text-2xl font-bold tracking-tight uppercase">
            <span className="text-red-300">Smart</span>
            <span className="text-blue-200">Fix</span>
          </Link>
        </div>

        {/* Right side (MOBILE ONLY) */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Cart Icon - visible only on mobile */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Hamburger Button */}
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Desktop nav + cart */}
        <div className="hidden lg:flex gap-6 items-center">
          <Link to="/sell-phone" className="hover:text-gray-300">Продай телефон</Link>
          <Link to="/services" className="hover:text-gray-300">Услуги</Link>
          <Link to="/parts" className="hover:text-gray-300">Части</Link>
          <Link to="/contact" className="hover:text-gray-300">Контакти</Link>
          <Link to="/cart" className="relative">
            <FaShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 text-white space-y-3 flex flex-col">
          <Link to="/sell-phone" className="hover:text-gray-300" onClick={toggleMenu}>Продай телефон</Link>
          <Link to="/services" className="hover:text-gray-300" onClick={toggleMenu}>Услуги</Link>
          <Link to="/parts" className="hover:text-gray-300" onClick={toggleMenu}>Части</Link>
          <Link to="/contact" className="hover:text-gray-300" onClick={toggleMenu}>Контакти</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
