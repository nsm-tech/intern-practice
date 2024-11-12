import React from "react";
import {
  NAV_LINKS,
  POLICY_LINKS,
  SOCIAL_LINKS,
  CONTACT_LINKS,
} from "./constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-8 pl-12 pr-8">
      <div className="flex flex-col md:flex-row md:justify-between justify-start items-center mb-6">
        <div className="mb-4 md:mb-0">
          <a href="/" className="text-2xl font-bold hover:text-blue-200">
            <img src="footer.png" alt="Logo" className="sm:h-20 h-14 w-auto" />
          </a>
        </div>
        <div className="flex font-bold text-lg sm:text-2xl">
          <a href="/" className="hover:text-blue-200">
            Redesign by Bynsm.io
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-start items-start space-y-6 md:space-y-0 md:space-x-12 mb-6">
        <div className="flex flex-col items-start">
          <a href="/" className="font-bodoni text-primary text-3xl font-normal">
            More Info
          </a>
          <div className="flex flex-col mt-2 space-y-2 text-lg text-black">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-200"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start">
          <a href="/" className="font-bodoni text-primary text-3xl font-normal">
            Policy
          </a>
          <div className="flex flex-col mt-2 space-y-2 text-lg text-black">
            {POLICY_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-200"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start">
          <a href="/" className="font-bodoni text-primary text-3xl font-normal">
            Contact Us
          </a>
          <div className="flex flex-col mt-2 space-y-2 text-lg text-black">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-200"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-start sm:justify-end space-x-2 mb-6">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={link.icon}
              alt="Social Icon"
              className="h-10 w-10 hover:opacity-75"
            />
          </a>
        ))}
      </div>

      <div className="text-start text-black font-bold text-base mt-6">
        Copyright ©️ 2024 Bynsm.io All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
