"use client"
import React from 'react';
import SectionOne from './SectionOne'; // Added missing 'from' keyword
import SectionTwo from './SectionTwo'; // Added missing 'from' keyword

export default function SectionsContainerOne() {
  return (
    <>
      <div className='relative'>
        <div className=" w-72 !h-32 inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[3rem] blur-3xl opacity-20 scale-125 animate-pulse"></div>
        <SectionOne/>
        <SectionTwo/>
                <div className="w-full py-8  bg-gradient-to-t from-purple-900 to-white  opacity-20    "></div>

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