"use client"
import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

export default function SectionsContainerOne() {
  return (
    <>
      <div className='relative'>
        {/* Background gradient div positioned absolutely behind content */}
        <div className="absolute md:w-72 w-40 md:h-32 h-40 z-0 inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[3rem] blur-3xl opacity-20 scale-125 animate-pulse"></div>
        
        {/* Content with higher z-index to appear in front */}
        <div className="relative z-10">
          <SectionOne/>
          <SectionTwo/>
        <div className="relative z-10">
          <img 
                src='/fincSVG.svg' 
                alt="fincImg" 
              style={{
                animation: 'spin 30s linear infinite'
              }}
                className="md:w-60 md:h-60 sm:h-52 sm:w-52 h-44 w-44 z-[60] -top-25 -left-30  absolute object-contain  animate-spin "
              />
          <SectionThree/>
          </div>
        </div>
        {/* <div className="w-full py-8 bg-gradient-to-t from-purple-900 to-white opacity-20"></div> */}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-10px) translateX(5px);
          }
          66% {
            transform: translateY(5px) translateX(-3px);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}