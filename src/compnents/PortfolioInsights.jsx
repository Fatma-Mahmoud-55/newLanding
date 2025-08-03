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
      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-1 items-end">
        
        {/* Left Side - Images */}
        <div className={`relative overflow-hidden order-1 md:order-1 w-full h-full mx-auto flex items-end justify-end transition-all duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        }`}>
          {/* Background image - with bottom positioning */}
          <div className="absolute inset-0 flex items-center justify-center lg:-bottom-110 md:-bottom-100 sm:-bottom-160 -bottom-60">
            <img 
              src='/ballll.png' 
              alt="AiBg" 
              className="w-full h-full object-contain transform transition-all duration-700 ease-out hover:scale-105"
              style={{
                animation: 'spin 40s linear infinite'
              }}
            />
          </div>
           
          {/* Foreground Image Container - Now positioned at bottom */}
          <div className={`relative z-10 w-full flex items-end justify-end transition-all duration-1200 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '0.3s' }}>
            <img 
              src='/iphone2.png' 
              alt="iphone2" 
              className="w-full lg:h-[500px] h-[50vh] object-contain transform transition-all duration-500 ease-out hover:scale-110 hover:-rotate-2 hover:translate-y-2"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={`space-y-6 px-6 md:w-md mx-auto px-2 md:pt-12 md:pb-12 pt-7 pb-5 order-2 md:order-2 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}>
          
          {/* Icon */}
          <div className={`mb-6 hidden md:block transition-all duration-800 ease-out ${
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
          <h1 className={`text-3xl lg:text-5xl font-semibold  text-gray-900 leading-tight transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '0.4s' }}>
            <span className="transition-colors duration-300">Know when to act</span>
            <br />
            <span className="transition-colors duration-300">or relax.</span>
          </h1>
          
          {/* Description */}
          <div className={`space-y-4 text-gray-600 text-lg  leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '0.6s' }}>
           
            <p className="">
              Cut through the noise.<br/>
              Our smart insights show you what's happening and what matters to you so you're always in control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInsights;







  {/* Left Side - Images */}
//         <div className='order-2 md:order-1'>
//  <div className={`relative sm:px-0 px-4 md:h-fit sm:h-[50%] h-fit  md:w-lg mx-auto flex items-end justify-end  md:pt-0 pt-10 transition-all duration-1000 ease-out ${
//           isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
//         }`}>
//           {/* Background image */}
//           <div className="relative  md:-bottom-45 -bottom-27 group">
//             <img 
//               src='/ballll.png' 
//               alt="AiBg" 
//               className="object-contain transform transition-all duration-700 ease-out hover:scale-105 animate-spin"
//               style={{
//                 animation: 'spin 40s linear infinite'
//               }}
//             />
//           </div>
           
//           {/* Foreground Image Container - Centered on background */}
//           <div className={`absolute lg:h-fit h-full px-10  pt-10 inset-0 flex items-end justify-center transition-all duration-1200 ease-out ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`} style={{ transitionDelay: '0.3s' }}>
//             <img 
//               src='/iphone2.png' 
//               alt="iphone2" 
//               className="w-full  object-contain transform transition-all duration-500 ease-out hover:scale-110 hover:-rotate-2 hover:translate-y-2"
//             />
//           </div>
//         </div>
//         </div>
       