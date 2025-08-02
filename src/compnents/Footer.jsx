import React from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row flex-r md:items-center md:justify-between gap-6">
          {/* Logo section */}
          <div className='flex items-center justify-center md:justify-start'>
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
          </div>
        
          
          {/* Combined links and social media section */}
          <div className="flex flex-col items-center md:flex-row gap-6 order-last md:order-none">
            {/* Links section */}
            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-6">
              <a 
                href="/terms" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50"
              >
                Terms of use
              </a>
              <a 
                href="/privacy" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50"
              >
                Privacy Policy
              </a>
              <a 
                href="mailto:info@finc.com" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50 md:hidden"
              >
                Contact: info@finc.com
              </a>
            </div>

            {/* Social media section */}
            <div className="flex items-center justify-center gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-10 h-10 flex items-center justify-center"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 w-10 h-10 bg-[#EAD4F066] rounded-full transition-all duration-300 group-hover:scale-110"></div>
                <RiInstagramFill size={20} className="relative z-10 text-[#915EB7] group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              <a 
                href="https://telegram.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-10 h-10 flex items-center justify-center"
                aria-label="Telegram"
              >
                <div className="absolute inset-0 w-10 h-10 bg-[#EAD4F066] rounded-full transition-all duration-300 group-hover:scale-110"></div>
                <FaTelegramPlane size={20} className="relative z-10 text-[#915EB7] group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-10 h-10 flex items-center justify-center"
                aria-label="Twitter"
              >
                <div className="absolute inset-0 w-10 h-10 bg-[#EAD4F066] rounded-full transition-all duration-300 group-hover:scale-110"></div>
                <FaTwitter size={20} className="relative z-10 text-[#915EB7] group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section - copyright and contact */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
          <span className="text-sm text-gray-500 text-center md:text-left">
            ©2025 Finc. All rights reserved
          </span>
          <div className="hidden md:block text-sm text-gray-600">
            <a href="mailto:info@finc.com" className="hover:text-gray-900 transition-colors">
              info@finc.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;