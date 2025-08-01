'use client';

import React from 'react';

export default function SectionSixV2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="relative z-20 space-y-10">
            {/* Main Headline */}
            <div className="relative">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-8">
                Ready to
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  grow?
                </span>
              </h1>
              
              {/* Decorative accent */}
              <div className="absolute -left-4 top-0 w-2 h-24 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            
            {/* Investment Card */}
            <div className="relative transform hover:scale-105 transition-all duration-500">
              {/* Card shadow/glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 transform scale-105"></div>
              
              {/* Main card */}
              <div className="relative z-10 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-10 text-white shadow-2xl">
                <div className="max-w-lg">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                    Invest in your future your way
                  </h2>
                  <p className="text-purple-100 leading-relaxed mb-8 text-lg">
                    Join thousands of smart investors who are growing their wealth with our intelligent investment platform. Start with as little as $1 and watch your money work harder for you.
                  </p>
                  
                  {/* Email input with enhanced styling */}
                  <div className="relative">
                    <div className="flex bg-white/95 backdrop-blur-sm rounded-full  shadow-xl border border-white/20">
                      <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 px-6 py-4 focus:outline-none font-medium"
                      />
                      <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold px-8  rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
                        Join waitlist
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Floating stats or badges */}
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hidden lg:block">
                  <div className="text-center">
                    <div className="text-2xl font-bold">10K+</div>
                    <div className="text-sm text-purple-200">Active Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Phone Section */}
          <div className="relative z-30 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone image with enhanced effects */}
              <div className="relative transform hover:rotate-6 transition-all duration-700 hover:scale-110">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-[3rem] blur-2xl transform scale-110"></div>
                
                {/* Phone container */}
                <div className="relative z-10">
                  <img 
                    src="/sectionSixImg.png" 
                    alt="Investment app on iPhone" 
                    className="w-80 lg:w-96 h-auto transform rotate-12 drop-shadow-2xl relative z-20"
                  />
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -left-8 top-16 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-80 animate-pulse shadow-lg"></div>
              <div className="absolute -right-6 bottom-24 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-70 animate-bounce shadow-lg"></div>
              <div className="absolute left-4 bottom-8 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-60 animate-ping shadow-md"></div>
              
              {/* Floating UI elements */}
              <div className="absolute -left-12 top-32 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 animate-float hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-sm font-semibold text-gray-700">+$2,450 today</div>
                </div>
              </div>
              
              <div className="absolute -right-8 top-48 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 animate-float-delayed hidden lg:block">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">12.5%</div>
                  <div className="text-xs text-gray-600">Monthly Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  );
}