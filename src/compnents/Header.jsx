"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, ShoppingBag, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDark(!isDark);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'How it works', href: '/how-work' },
    { name: 'Features', href: '/features' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (<>
    <div className={isDark ? 'dark' : ''}>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30' 
          : 'bg-transparent'
      } ${
        isOpen ? 'bg-white dark:bg-gray-900' : ''
      }`}>
        <nav className="mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img 
                      src='/Vector.png' 
                      alt="finc logo" 
                      className="w-10 h-10 object-contain transform group-hover:scale-110 hover:-rotate-12 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-3xl font-light tracking-wide text-gray-900 dark:text-white">
                    finc
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-light tracking-wide transition-colors duration-300 group"
                  style={{ '--index': index }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-500 ease-out"></span>
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* User */}
              <button className="p-2.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200">
                <User className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
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
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0'
          }`}>
            <div className="py-6 space-y-1">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-4 text-lg font-light text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 transform hover:translate-x-2"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen ? 'slideInLeft 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-6 px-4 space-y-4">
                <button className="flex items-center space-x-3 w-full p-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </button>
              </div>
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
    </div>
  </>);
};

export default Header;