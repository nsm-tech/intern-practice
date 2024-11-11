import React from "react";
import Logo from "../assets/footer.png";
import FB from "../assets/fb.png";
import YT from "../assets/yt.png";
import IG from "../assets/ig.png";
import Tiktok from "../assets/tiktok.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-8 ">
      <div className="container mx-auto">
        {/* Bagian Logo dan Redesign */}
        <div className="flex flex-col md:flex-row md:justify-between justify-start items-center mb-6">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl font-bold hover:text-blue-200">
              <img src={Logo} alt="Logo" className="sm:h-20 h-14 w-auto" />
            </a>
          </div>

          <div className="flex font-bold text-lg sm:text-2xl">
            <a href="/" className="hover:text-blue-200">
              Redesign by SolvoStudio
            </a>
          </div>
        </div>

        {/* Bagian Menu Footer */}
        <div className="flex flex-col md:flex-row justify-start items-start space-y-6 md:space-y-0 md:space-x-12 mb-6">
          <div className="flex flex-col items-start">
            <a
              href="/"
              className="font-bodoni text-primary text-3xl font-normal"
            >
              More Info
            </a>
            <div className="flex flex-col mt-2 space-y-2 text-lg text-black">
              <a href="/about" className="hover:text-blue-200">
                About Us
              </a>
              <a href="/location" className="hover:text-blue-200">
                Location
              </a>
              <a href="/menu" className="hover:text-blue-200">
                Menu
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <a
              href="/"
              className="font-bodoni text-primary text-3xl font-normal"
            >
              Policy
            </a>
            <div className="flex flex-col mt-2 space-y-2 text-lg text-black">
              <a href="/terms" className="hover:text-blue-200">
                Terms of Service
              </a>
              <a href="/privacy" className="hover:text-blue-200">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <a
              href="/"
              className="font-bodoni text-primary text-3xl font-normal"
            >
              Contact Us
            </a>
            <div className="flex flex-col mt-2 space-y-2 text-lg text-black">
              <a
                href="mailto:KintanBuf@Kin.com"
                className="hover:text-blue-200"
              >
                KintanBuf@Kin.com
              </a>
              <a href="/franchise" className="hover:text-blue-200">
                Franchise
              </a>
            </div>
          </div>
        </div>

        {/* Bagian Ikon Media Sosial */}
        <div className="flex justify-start sm:justify-end space-x-2 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={FB}
              alt="Facebook"
              className="h-10 w-10 hover:opacity-75"
            />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={YT}
              alt="YouTube"
              className="h-10 w-10 hover:opacity-75"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={IG}
              alt="Instagram"
              className="h-10 w-10 hover:opacity-75"
            />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Tiktok}
              alt="TikTok"
              className="h-10 w-10 hover:opacity-75"
            />
          </a>
        </div>

        {/* Hak Cipta */}
        <div className="text-start text-black font-bold text-base mt-6">
          Copyright ©️ 2023 SolvoStudio, All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
