"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from "@/compnents/SectionTitle";

const steps = [
    {
        number: 1,
        title: "Tell us what matters to you.",
        description: "Your goals. Your dreams. Your future. We'll take it from there.",
        isFilled: false,
    },
    {
        number: 2,
        title: "Get a personalized portfolio",
        description: "Whether it's a trip to Spain or building long-term wealth, finc creates a portfolio just for you.",
        isFilled: true,
    },
    {
        number: 3,
        title: "Invest ethically. Grow confidently.",
        description: "Our portfolios are clean, values-aligned and have outperformed traditional investments in many markets.",
        isFilled: false,
    },
    {
        number: 4,
        title: "Hands-off. Worry-free. Always working.",
        description: "You set the amount and frequency. We handle the rest with secure, transparent AI built for smarter investing.",
        isFilled: true,
    },
];

export default function StepperSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
        });
    }, []);

    return (
        <section className="bg-white md:py-20 py-5 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4">
                <div data-aos="fade-up">
                    <SectionTitle
                        title="Let your money work - automatically"
                    />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">

                    {/* Left: Phone Image Container */}
                    <div
                        className="flex justify-center lg:justify-start px-8 md:px-0"
                        data-aos="fade-right"
                    >
                        {/*
                            Removed aspect-[4/5] and fill.
                            Set a max-width and let the image height adjust automatically
                        */}
                        <div className="w-full max-w-[500px]">
                            <Image
                                src="/newMobImg.svg"
                                alt="finc app interface"
                                width={800}    // Original image width
                                height={1000}  // Original image height (maintains 4:5 ratio)
                                className="w-full md:h-[90vh] h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right: Vertical Stepper */}
                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex items-stretch gap-6 md:gap-8 group"
                                data-aos="fade-left"
                                data-aos-delay={index * 200}
                            >
                                {/* Left Column: Number and Dashed Line */}
                                <div className="flex flex-col items-center">
                                    <div className={`
                                        flex-shrink-0 w-12 h-12 md:w-14 md:h-14 
                                        flex items-center justify-center 
                                        rounded-md text-xl font-bold border-2
                                        ${step.isFilled
                                        ? 'bg-[#5B21B6] border-[#5B21B6] text-white'
                                        : 'bg-white border-[#5B21B6] text-[#5B21B6]'
                                    }
                                    `}>
                                        {step.number}
                                    </div>

                                    {index !== steps.length - 1 && (
                                        <div className="w-0 h-full border-l-2 border-dashed border-gray-300"></div>
                                    )}
                                </div>

                                {/* Right Column: Step Text Content */}
                                <div className={`flex-1 pt-1 md:pt-2 ${index !== steps.length - 1 ? 'pb-12 md:pb-16' : ''}`}>
                                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3 leading-snug">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}