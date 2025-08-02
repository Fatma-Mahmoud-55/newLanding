import React, { useState, useEffect } from 'react';

const PortfolioInsights = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-end justify-center overflow-hidden">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8 items-end">
        
        {/* Left Side - Images */}
        <div className={`relative sm:px-0 px-4 h-full flex items-end order-2 md:order-1 md:pt-0 pt-10 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        }`}>
          {/* Background image */}
          <div className="relative group">
            <img 
              src='/AiBg.png' 
              alt="AiBg" 
              className="object-contain transform transition-all duration-700 ease-out hover:scale-105 animate-pulse"
              style={{
                animationDelay: '0.5s',
                animationDuration: '3s',
                animationIterationCount: 'infinite'
              }}
            />
          </div>
           
          {/* Foreground Image Container - Centered on background */}
          <div className={`absolute inset-0 flex items-end justify-center transition-all duration-1200 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '0.3s' }}>
            <img 
              src='/iphone2.png' 
              alt="iphone2" 
              className="w-full h-full object-contain transform transition-all duration-500 ease-out hover:scale-110 hover:-rotate-2 hover:translate-y-2"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={`space-y-6 md:px-4 px-2 py-12 order-1 md:order-2 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}>
          
          {/* Icon */}
          <div className={`mb-6 transition-all duration-800 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '0.2s' }}>
            <div className="rounded-2xl flex items-center justify-center md:justify-start">
              <img 
                src='/Peace.png' 
                alt="fincImg" 
                className="w-20 h-20 object-contain transform transition-all duration-300 ease-out hover:scale-125 hover:-rotate-12 hover:drop-shadow-lg cursor-pointer"
              />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className={`text-4xl lg:text-5xl md:text-start text-center text-gray-900 leading-tight  transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '0.4s' }}>
            <span className="transition-colors duration-300">Know when to act</span>
            <br />
            <span className=" transition-colors duration-300">or relax.</span>
          </h1>
          
          {/* Description */}
          <div className={`space-y-4 text-gray-600 text-lg md:text-start text-center leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '0.6s' }}>
            <p className="font-medium transition-all duration-300 hover:text-gray-800 hover:scale-105 transform cursor-default">
              Cut through the noise.
            </p>
            <p className="transition-all duration-300 hover:text-gray-800 cursor-default leading-loose">
              Our smart insights show you what's happening and what matters to you so you're always in control.
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating Elements for Extra Visual Appeal */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating dots */}
        <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full transition-all duration-1000 ${
          isVisible ? 'opacity-30 animate-bounce' : 'opacity-0'
        }`} style={{ 
          animationDelay: '1s',
          animationDuration: '3s',
          animationIterationCount: 'infinite'
        }}></div>
        
        <div className={`absolute top-3/4 right-1/3 w-3 h-3 bg-green-400 rounded-full transition-all duration-1000 ${
          isVisible ? 'opacity-20 animate-pulse' : 'opacity-0'
        }`} style={{ 
          animationDelay: '1.5s',
          animationDuration: '4s',
          animationIterationCount: 'infinite'
        }}></div>
        
        <div className={`absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full transition-all duration-1000 ${
          isVisible ? 'opacity-40 animate-ping' : 'opacity-0'
        }`} style={{ 
          animationDelay: '2s',
          animationDuration: '2s',
          animationIterationCount: 'infinite'
        }}></div>
      </div>
    </div>
  );
};

export default PortfolioInsights;