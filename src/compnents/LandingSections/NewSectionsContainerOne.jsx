"use client"
import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import PoweredBy from "@/compnents/LandingSections/NewSections/PoweredBy";
import StepperSection from "@/compnents/LandingSections/NewSections/StepperSection";

export default function NewSectionsContainerOne() {
    return (
        <>
            <div className=' w-full   overflow-x-hidden'>
                {/* Background gradient div positioned absolutely behind content */}

                {/* Content with higher z-index to appear in front */}
                <PoweredBy/>
                <StepperSection/>
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



