import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden border-b lg:rounded-b-[50px] md:rounded-b-[30px] rounded-b-[25px]" style={{ background: 'linear-gradient(to bottom right, #2E0D47,#2E0D47,#2E0D47 #4C1D95, #7C3AED)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(46, 13, 71, 0.5), transparent)' }}></div>
        
        {/* Floating orbs */}
        <div className="absolute top-0 left-5 w-80 h-80 rounded-full blur-xl animate-pulse" style={{  background: 'rgba(244, 114, 182, 0.15)' }}></div>
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full blur-2xl animate-bounce" style={{ background: 'rgba(244, 114, 182, 0.15)', animationDuration: '3s' }}></div>
        <div className="absolute bottom-1  right-1/4 w-90 h-90  rounded-full blur-2xl animate-bounce   " 
     style={{ background: 'rgba(244, 114, 182, 0.15)', animationDuration: '3s' }}></div>
             <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full blur-lg animate-pulse" style={{ background: 'rgba(196, 181, 253, 0.25)', animationDelay: '1s' }}></div>
        
       
      </div>

      {/* Content container */}
      <div className="relative z-10   px-4 sm:px-6 lg:px-8 md:pt-0 pt-32 h-full flex justify-end items-end">
        <div className="grid lg:grid-cols-2 items-end w-full ">
          {/* Left content */}
                <div className="text-white animate-fade-in flex flex-col justify-center lg:pb-20 pb-8 lg:justify-start text-center lg:text-left">
            <div className="space-y-4 mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block animate-slide-in-left">Invest smarter.</span>
                <span className="block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>Stress less.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                  Be a fincr.
                </span>
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-purple-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              You don't need to be an expert to build wealth. 
              With Egypt's first AI-powered investing - finc makes growing 
              your money simple, easy and worry-free.
            </p>
            
            <div className="animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 active:scale-95 mx-auto lg:mx-0 block lg:inline-block">
                <span className="relative z-10 text-white">Join the waitlist</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <p className="text-xs sm:text-sm text-purple-200 mt-4 animate-fade-in text-center lg:text-left" style={{ animationDelay: '1s' }}>
                Early access. Limited spots. Your future's waiting.
              </p>
            </div>
          </div>
          
          {/* Right content - mobile mockup image */}
          <div className="flex justify-center items-center animate-slide-in-right h-full" style={{ animationDelay: '0.5s' }}>
            <div className="relative h-full lg:w-full md:w-[50%] w-[70%] !pb-0 flex items-end justify-center">
              <img 
                src="/Mockup.png" 
                alt="Finc mobile app mockup" 
                className="h-full  lg:pt-40 pt-0 w-auto object-contain drop-shadow-2xl"
                style={{ maxHeight: '100vh' }}
              />
              {/* Optional glow effect behind the image */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-30" style={{ 
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)'
              }}></div>
            </div>
          </div>
        </div>
      </div>

   
      
      {/* Inline styles for custom animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideInLeft {
            from { 
              opacity: 0; 
              transform: translateX(-50px); 
            }
            to { 
              opacity: 1; 
              transform: translateX(0); 
            }
          }
          
          @keyframes slideInRight {
            from { 
              opacity: 0; 
              transform: translateX(50px); 
            }
            to { 
              opacity: 1; 
              transform: translateX(0); 
            }
          }
          
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          
          .animate-slide-in-left {
            animation: slideInLeft 0.8s ease-out forwards;
            opacity: 0;
          }
          
          .animate-slide-in-right {
            animation: slideInRight 0.8s ease-out forwards;
            opacity: 0;
          }
        `
      }} />
    </div>
  );
}