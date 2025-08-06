'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function MarketAccessSection() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
  
      
      <div className=" md:p-8 p-4">
        
        <div 
          ref={headerRef}
          className={`w-full transition-all duration-1000 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2   items-center">
              
              {/* Left Side - Content */}
              <div className="space-y-8 order-2 md:order-1">
                {/* Gradient Arrows */}
                <div className="flex  space-x-4 mb-8 mt-8 md:mt-0">
                   <img 
                src='/Arrow.png' 
                alt="arrows" 
                className="w-24 h-24 object-contain transform group-hover:scale-110 hover:-rotate-12 transition-transform duration-300"
              />
                </div>

                {/* Main Heading */}
                {/* text-xl md:text-2xl max-w-lg font-bold text-gray-900  */}
                <div>
                  <h1 className="text-3xl md:text-4xl    font-bold text-gray-900 leading-tight">
                    Access local &
                    <br />
                    global markets.
                  </h1>
                </div>

                {/* Subtext */}          

                <div className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-md ">
                  From local to global markets go big, stay small, or balance both. It's your call.
                </div>
              </div>

              {/* Right Side - Market Cards */}
              <div className="space-y-4 order-1 md:order-2">
                
                {/* EGX30 Card */}
                <div className="bg-gradient-to-br shadow-xl from-white to-[#D5C3E9B2]   rounded-2xl p-6  relative overflow-hidden">
                  {/* Wave Pattern */}
                  <div className="absolute bottom-0 right-0 opacity-20">
                    <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                      <path d="M0 30 Q15 10 30 30 T60 30 T90 30 T120 30 V60 H0 Z" fill="url(#gradient1)"/>
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4"/>
                          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">EGX30</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-lg font-semibold text-gray-700">2,800</span>
                          <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">+1.20%</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">EGP</div>
                        <div className="text-lg font-bold text-gray-900">34,450.00</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="font-medium">Momentum suggests</div>
                      <div>a short-term uptrend.</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Row - EGX70 and EGX100 */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  
                  {/* EGX70 Card */}
                  <div className="bg-gradient-to-br shadow-xl from-white via-[#D5C3E9B2] to-white rounded-2xl p-4  relative overflow-hidden">
                    {/* Wave Pattern */}
                    <div className="absolute bottom-0 right-0 opacity-20">
                      <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                        <path d="M0 20 Q10 5 20 20 T40 20 T60 20 T80 20 V40 H0 Z" fill="url(#gradient2)"/>
                        <defs>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4"/>
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-gray-900">EGX70</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-base font-semibold text-gray-700">2,800</span>
                          <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full">-0.75%</span>
                        </div>
                      </div>
                      <div className="text-center mb-3">
                        <div className="text-xs text-gray-500">EGP</div>
                        <div className="text-lg font-bold text-gray-900">32,067.12</div>
                      </div>
                      <div className="text-xs text-gray-600">
                        <div className="font-medium">Stable rise with</div>
                        <div>some volatility.</div>
                      </div>
                    </div>
                  </div>

                  {/* EGX100 Card */}
                  <div className="bg-gradient-to-br shadow-xl from-white to-[#F4C05F4D]   rounded-2xl p-4  relative overflow-hidden">
                    {/* Wave Pattern */}
                    <div className="absolute bottom-0 right-0 opacity-20">
                      <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                        <path d="M0 20 Q10 8 20 20 T40 20 T60 20 T80 20 V40 H0 Z" fill="url(#gradient3)"/>
                        <defs>
                          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4"/>
                            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-gray-900">EGX100</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-base font-semibold text-gray-700">4,200</span>
                          <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full">-0.80%</span>
                        </div>
                      </div>
                      <div className="text-center mb-3">
                        <div className="text-xs text-gray-500">EGP</div>
                        <div className="text-lg font-bold text-gray-900">12,445.24</div>
                      </div>
                      <div className="text-xs text-gray-600">
                        <div className="font-medium">Slight pullback,</div>
                        <div>recovery ahead.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}