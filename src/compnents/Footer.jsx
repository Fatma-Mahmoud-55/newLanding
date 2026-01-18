import React from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
      <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout (lg and above) */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-6">
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

              <div className="flex items-center gap-8">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Terms of use</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Privacy Policy</a>
              </div>

              {/* Social media - Desktop */}
              <div className="flex items-center gap-3">
                <a
                    href="https://www.instagram.com/fincwealth?igsh=MWhla3o0YnBoNzNsbw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 flex items-center justify-center"
                    aria-label="Instagram"
                >
                  {/* Updated Background Color */}
                  <div className="absolute inset-0 w-10 h-10 bg-[#D1E4FF] rounded-full transition-all duration-300 group-hover:scale-110"></div>
                  {/* Updated Icon Color */}
                  <RiInstagramFill size={20} className="relative z-10 text-[#3B82F6] group-hover:scale-110 transition-transform duration-300" />
                </a>

                <a
                    href="https://www.tiktok.com/@fincfinancials?_t=ZS-8yZYfomKs3M&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 flex items-center justify-center"
                    aria-label="TikTok"
                >
                  <div className="absolute inset-0 w-10 h-10 bg-[#D1E4FF] rounded-full transition-all duration-300 group-hover:scale-110"></div>
                  <FaTiktok size={20} className="relative z-10 text-[#3B82F6] group-hover:scale-110 transition-transform duration-300" />
                </a>

                <a
                    href="https://www.linkedin.com/company/fincwealth/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 flex items-center justify-center"
                    aria-label="LinkedIn"
                >
                  <div className="absolute inset-0 w-10 h-10 bg-[#D1E4FF] rounded-full transition-all duration-300 group-hover:scale-110"></div>
                  <FaLinkedinIn size={20} className="relative z-10 text-[#3B82F6] group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">©2025 Finc. All rights reserved</span>
              <a href="mailto:info@finc.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">info@finc.com</a>
            </div>
          </div>

          {/* Mobile/Tablet Layout (below lg) */}
          <div className="block lg:hidden">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex-shrink-0">
                  <a href="/" className="group inline-flex items-center">
                    <img
                        src='/black-logo.png'
                        alt="finc logo"
                        className="w-10 h-10 object-contain transform group-hover:scale-110 hover:-rotate-12 transition-transform duration-300"
                    />
                    <span className="ml-3 text-3xl font-light tracking-wide text-black">finc</span>
                  </a>
                </div>

                {/* Social media - Mobile */}
                <div className="flex items-center gap-3">
                  <a
                      href="https://www.instagram.com/fincwealth?igsh=MWhla3o0YnBoNzNsbw%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-10 h-10 flex items-center justify-center"
                  >
                    <div className="absolute inset-0 w-10 h-10 bg-[#D1E4FF] rounded-full transition-all duration-300 group-hover:scale-110"></div>
                    <RiInstagramFill size={20} className="relative z-10 text-[#3B82F6] group-hover:scale-110 transition-transform duration-300" />
                  </a>

                  <a
                      href="https://www.tiktok.com/@fincfinancials?_t=ZS-8yZYfomKs3M&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-10 h-10 flex items-center justify-center"
                  >
                    <div className="absolute inset-0 w-10 h-10 bg-[#D1E4FF] rounded-full transition-all duration-300 group-hover:scale-110"></div>
                    <FaTiktok size={20} className="relative z-10 text-[#3B82F6] group-hover:scale-110 transition-transform duration-300" />
                  </a>

                  <a
                      href="https://www.linkedin.com/company/fincwealth/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-10 h-10 flex items-center justify-center"
                  >
                    <div className="absolute inset-0 w-10 h-10 bg-[#D1E4FF] rounded-full transition-all duration-300 group-hover:scale-110"></div>
                    <FaLinkedinIn size={20} className="relative z-10 text-[#3B82F6] group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Terms of use</a>
              </div>
              <div className="flex items-center justify-between">
                <a href="mailto:info@finc.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">info@finc.com</a>
                <span className="text-sm text-gray-500">©2025 Finc. All rights reserved</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;