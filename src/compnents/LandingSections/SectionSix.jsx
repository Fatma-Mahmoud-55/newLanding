'use client';

import React from 'react';
import Image from 'next/image';
import img6 from './../../../public/sectionSixImg.png';

export default function SectionSix() {
  return (
    <div className="relative">
      {/* Background blur div - positioned behind the main container */}
      <div className="absolute inset-0 w-full h-full bg-purple-900 opacity-20 -z-10"></div>
      
      <div className="min-h-screen bg-white relative z-10 border-t border-white lg:rounded-t-[50px] md:rounded-t-[30px] rounded-t-[25px] flex items-center justify-center px-4 pb-4 lg:pt-32 pt-4 lg:pb-8 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="relative z-20 w-full">
                 {/* Large Headline */}
              <h1 className="text-6xl text-center md:text-start md:text-8xl xl:text-9xl font-black text-black leading-none mb-8 lg:mb-12">
                Ready to
                <br />
                grow?
              </h1>
             
              
              {/* Purple Card */}
              <div className="relative w-full">
                <div className="w-full bg-gradient-to-br from-[#7F5AF0] via-[#9F80FF] to-[#CBB7FF]  rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
                  {/* Background pattern/texture */}
                  <div className="absolute opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                  </div>
                  
                  <div className="relative z-10 sm:w-6/12 sm:pt-20 pt-1">
                  {/* Mobile phone image */}
                           <div className="sm:hidden flex justify-center">
              <div className="relative">
                {/* Phone Image */}
                <div className="relative transform hover:scale-105 hover:rotate-2 transition-all duration-500">
                   <div className="w-32 mx-auto">
            <Image 
              src={img6} 
                    alt="Investment app on iPhone" 
              className="w-full h-full object-contain  transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              width={800}
              height={300}
              priority
            />
          </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -left-6 top-20 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -right-4 bottom-32 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-70 animate-bounce"></div>
                <div className="absolute left-8 bottom-16 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-60 animate-ping"></div>
              </div>
            </div>
                  
                    <h2 className="text-xl lg:text-2xl font-bold mb-4">
                      Invest in your future your way
                    </h2>
                    <p className="text-purple-100 leading-relaxed mb-8 text-base lg:text-lg opacity-90">
                      Join thousands of smart investors who are growing their wealth with our intelligent investment platform. Start with as little as $1 and watch your money work harder for you.
                    </p>
                    
                    {/* Email input */}
                    <div className="flex bg-white rounded-full w-full shadow-lg">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="relative w-full bg-transparent text-gray-700 placeholder-gray-500 px-4 py-3 focus:outline-none font-medium text-sm"
                      />
                      <button className="right-0 absolute bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm whitespace-nowrap">
                        Join waitlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Phone Image */}
            <div className="absolute -bottom-7 z-30 right-0 hidden sm:flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Image */}
                <div className="relative transform hover:scale-105 hover:rotate-2 transition-all duration-500">
                   <div className="w-80 lg:w-[520px]">
            <Image 
              src={img6} 
                    alt="Investment app on iPhone" 
              className="w-full h-full object-contain  transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              width={800}
              height={300}
              priority
            />
          </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -left-1 top-32 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
                {/* <div className="absolute -right-4 bottom-32 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-70 animate-bounce"></div> */}
                <div className="absolute -right-4 bottom-32 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-70 animate-bounce"></div>
                <div className="absolute left-8 bottom-16 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-60 animate-ping"></div>
              </div>
            </div>
                
          </div>
        </div>
      </div>
    </div>
  );
}