"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Height of your fixed navbar
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation clicks
  const handleNavClick = (e, href, sectionId) => {
    // If it's a section link (starts with #), prevent default and scroll
    if (sectionId) {
      e.preventDefault();
      scrollToSection(sectionId);
      setIsOpen(false); // Close mobile menu after navigation
    }
    // For external routes, let the default behavior happen
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  // Updated navigation items with section IDs for smooth scrolling
  const navigationItems = [
    { name: 'Home', href: '#home', sectionId: 'home' },
    { name: 'How it works', href: '#how-it-works', sectionId: 'how-it-works' },
    { name: 'Features', href: '#features', sectionId: 'features' },
    { name: 'FAQ', href: '#faq', sectionId: 'faq' },
  ];

  return (<>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
    ${
      isOpen ? 'bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/30'  : ''
    }
    ${
      isScrolled 
        ? 'bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/30' 
        : 'md:bg-transparent '
    } `}>
      <nav className="mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="group"
              onClick={(e) => handleNavClick(e, '#home', 'home')}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src='/Vector.png' 
                    alt="finc logo" 
                    className="w-10 h-10 object-contain transform group-hover:scale-110 hover:-rotate-12 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.sectionId)}
                className="relative text-gray-100 hover:text-gray-400 font-light tracking-wide transition-colors duration-300 group cursor-pointer"
                style={{ '--index': index }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-500 ease-out"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-100 hover:text-gray-300 transition-colors duration-200"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1' : ''
                }`}></span>
                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute top-4.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen 
            ? 'max-h-screen opacity-100 ' 
            : 'max-h-0 opacity-0' 
        }`}>
          <div className="py-6 space-y-1">
            {navigationItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.sectionId)}
                className="block px-4 py-4 text-lg font-light text-gray-100 hover:text-gray-300 transition-all duration-300 transform hover:translate-x-2 cursor-pointer"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isOpen ? 'slideInLeft 0.5s ease-out forwards' : 'none'
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  </>);
};

export default Header;