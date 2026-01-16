"use client"
import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import PoweredBy from "@/compnents/LandingSections/NewSections/PoweredBy";
import StepperSection from "@/compnents/LandingSections/NewSections/StepperSection";
import RealTime from "@/compnents/RealTime";
import Advice from "@/compnents/Advice";
import SectionFive2 from "@/compnents/LandingSections/NewSections/SectionFive2";
import MediaSection from "@/compnents/LandingSections/NewSections/MediaSection";

export default function NewSectionsContainerTwo() {
    return (
        <>
            <div className=' w-full   overflow-x-hidden'>

                <PoweredBy/>
                {/*----------------------------------------------------------------*/}
                <StepperSection/>
                {/*----------------------------------------------------------------*/}
                <MediaSection/>
                {/*----------------------------------------------------------------*/}
                    <div className="relative z-20 w-full mx-auto p-4 flex md:flex-row flex-col md:gap-6 gap-5 h-fit justify-center">
                        <div
                            className="md:w-fit w-full h-auto col-span-1 border border-gray-200 rounded-2xl bg-white animate-scale delay-300">
                            <RealTime/>
                        </div>

                        <div
                            className="h-auto md:w-fit w-full col-span-1 border border-gray-200 rounded-2xl bg-white animate-scale delay-400">
                            <Advice/>
                        </div>
                    </div>
                {/*----------------------------------------------------------------*/}

                <SectionFive2/>
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



