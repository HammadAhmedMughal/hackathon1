import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="/"
            className="text-white text-xl font-semibold">
            Logo
          </a>
        </div>

        <div className="hidden md:flex space-x-4">
          <a
            href="/"
            className="text-white hover:text-gray-300">
            Home
          </a>
          <a
            href="/"
            className="text-white hover:text-gray-300">
            About
          </a>
          <a
            href="/"
            className="text-white hover:text-gray-300">
            Services
          </a>
          <a
            href="/"
            className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <a
            href="/"
            className="block text-white mb-2">
            Home
          </a>
          <a
            href="/"
            className="block text-white mb-2">
            About
          </a>
          <a
            href="/"
            className="block text-white mb-2">
            Services
          </a>
          <a
            href="/"
            className="block text-white">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
