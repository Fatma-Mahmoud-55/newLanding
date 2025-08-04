"use client"
import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

export default function SectionsContainerOne() {
  return (
    <>
      <div className=' w-full   overflow-x-hidden'>
        {/* Background gradient div positioned absolutely behind content */}
        <div className="absolute md:w-72 w-20 md:h-32 h-40 -left-10 -top-10 -z-10 bg-gradient-to-r from-[#7F5AF0] to-[#9F80FF] rounded-full blur-3xl opacity-50 scale-120 md:p-40 p-32"></div>
        
        {/* Content with higher z-index to appear in front */}
        <div className="relative overflow-x-hidden z-10">
          <SectionOne/>
        <div className="relative z-10" id="how-it-works">
             <section  >
          <SectionTwo/>
                </section>
        </div>
          
                    
          <div className="absolute md:w-80  w-40 h-96 md:p-40 p-12 -left-32 top-[45rem] -z-10 bg-gradient-to-r from-[#7F5AF0] to-[#9F80FF] rounded-full blur-3xl opacity-50 scale-120"></div>
          <div className="absolute md:w-60 w-40 h-[900px] md:p-40 p-12 top-1/4 right-0 -z-10 bg-gradient-to-r from-[#7F5AF0] to-[#9F80FF] rounded-full blur-3xl opacity-50 scale-120"></div>
        </div>
        
        <div className="relative z-10" id="features">
  <img 
    src='/fincSVG.svg' 
    alt="fincImg" 
    style={{
      animation: 'spin 30s linear infinite'
    }}
    className="md:w-60 md:h-60 sm:h-52 sm:w-52 h-44 w-44 z-[60] -top-[6.25rem] -left-[7.5rem] absolute object-contain animate-spin"
  />
  <section>
    <SectionThree/>
  </section>
</div>
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




// <div className="relative z-10" id="features">
//   <img 
//     src='/fincSVG.svg' 
//     alt="fincImg" 
//     style={{
//       animation: 'spin 30s linear infinite'
//     }}
//     className="md:w-60 md:h-60 sm:h-52 sm:w-52 h-44 w-44 z-[60] -top-[6.25rem] -left-[7.5rem] absolute object-contain animate-spin"
//   />
//   <section>
//     <SectionThree/>
//   </section>
// </div>