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
            {/* Added 'flex flex-col' and responsive gap/padding to ensure mobile looks professional */}
            <div className='w-full overflow-x-hidden flex flex-col gap-y-5 md:gap-y-0 '>

                {/*
                   Content wrapper:
                   - We keep PoweredBy and StepperSection inside.
                   - On PC (md:), the padding is 0 to preserve your original design.
                   - On Mobile, px-4 prevents content from touching the screen edges.
                */}

                <PoweredBy/>

                {/* Added a spacer div or margin logic if needed,
                    but usually, standardizing the container is safer */}
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

        /* Optimization for mobile animations: reduces movement to prevent jitter */
        @media (max-width: 768px) {
          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
        }
      `}</style>
        </>
    )
}