import React from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col gap-6">
          {/* Top row: Logo and Social Media */}
          <div className="flex items-center justify-between">
            {/* Logo section */}
            <div className="flex-shrink-0">
              <a href="/" className="group inline-flex items-center">
                <img 
                  src='/black-logo.png' 
                  alt="finc logo" 
                  className="w-10 h-10 object-contain transform group-hover:scale-110 hover:-rotate-12 transition-transform duration-300"
                />
                <span className="ml-3 text-3xl font-light tracking-wide text-black">
                  finc
                </span>
              </a>
            </div>

            {/* Social media section */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/fincfinancials?igsh=MTZwbHd0dDlubDNycg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-10 h-10 flex items-center justify-center"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 w-10 h-10 bg-[#EAD4F066] rounded-full transition-all duration-300 group-hover:scale-110"></div>
                <RiInstagramFill size={20} className="relative z-10 text-[#915EB7] group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              <a 
                href="https://www.tiktok.com/@fincfinancials?_t=ZS-8yZYfomKs3M&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-10 h-10 flex items-center justify-center"
                aria-label="TikTok"
              >
                <div className="absolute inset-0 w-10 h-10 bg-[#EAD4F066] rounded-full transition-all duration-300 group-hover:scale-110"></div>
                <FaTiktok size={20} className="relative z-10 text-[#915EB7] group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/finc-financials-22851734a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-10 h-10 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 w-10 h-10 bg-[#EAD4F066] rounded-full transition-all duration-300 group-hover:scale-110"></div>
                <FaLinkedinIn size={20} className="relative z-10 text-[#915EB7] group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section - Links, Contact and Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-4">
          {/* Links row */}
          <div className="flex items-center justify-between">
            <a 
              href="#" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Terms of use
            </a>
          </div>
          
          {/* Contact and Copyright row */}
          <div className="flex items-center justify-between">
            <a 
              href="mailto:info@finc.com" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              info@finc.com
            </a>
            <span className="text-sm text-gray-500">
              ©2025 Finc. All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;