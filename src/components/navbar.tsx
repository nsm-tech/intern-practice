import React, { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className=" mx-auto container py-3 flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="/" className="hover:text-blue-200">
            <img src={Logo} alt="Logo" className="h-7 sm:h-20 w-auto" />
          </a>
        </div>
        <div className="hidden sm:flex space-x-10 text-2xl font-normal">
          <a href="/" className="hover:text-blue-200">
            Menu
          </a>
          <a href="/location" className="hover:text-blue-200">
            Location
          </a>
          <a href="/about" className="hover:text-blue-200">
            About Us
          </a>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className={`w-6 h-6 ${isOpen ? "text-primary" : "text-white"}`}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-black text-white py-2 px-8 space-y-5">
          <a href="/" className="block py-2 px-4 rounded-md hover:bg-primary">
            Menu
          </a>
          <a
            href="/location"
            className="block py-2 px-4 rounded-md hover:bg-primary"
          >
            Location
          </a>
          <a
            href="/about"
            className="block py-2 px-4 rounded-md  hover:bg-primary"
          >
            About Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
