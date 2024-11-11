// src/components/Navbar.tsx
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { navLinks } from "./constants";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-black p-4 sm:pl-8 sm:pr-32 shadow-md relative">
      <div>
        <img src={Logo} alt="Logo" className="h-7 sm:h-20" />
      </div>
      <div className="hidden sm:flex space-x-10 text-2xl text-white font-normal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-primary">
            {link.title}
          </a>
        ))}
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
      {isOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-black text-white space-y-5 py-2 px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 px-4 hover:bg-primary rounded-md"
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
