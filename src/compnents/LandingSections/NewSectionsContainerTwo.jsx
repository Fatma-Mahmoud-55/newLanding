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
        /* 1. Added relative and overflow-x-hidden to the absolute outer wrapper */
        <div className='relative w-full '>

            <MediaSection/>

            {/* 2. Standardized this wrapper to match typical page constraints */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">

                    {/* 3. Changed md:w-fit to md:flex-1 to ensure equal width and prevent overflow */}
                    <div className="w-full md:flex-1 h-auto border border-gray-200 rounded-2xl bg-white animate-scale delay-300 overflow-hidden">
                        <RealTime/>
                    </div>

                    <div className="w-full md:flex-1 h-auto border border-gray-200 rounded-2xl bg-white animate-scale delay-400 overflow-hidden">
                        <Advice/>
                    </div>

                </div>
            </div>

            <SectionFive2/>

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

                /* Ensure scaling doesn't cause layout shifts */
                .animate-scale {
                    transition: transform 0.3s ease-out;
                }
            `}</style>
        </div>
    )
}