"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <section className="bg-white py-20  overflow-hidden">
            <div className="container mx-auto max-w-7xl">

                {/* Main Headline */}
                <div
                    className="text-center mb-16 md:mb-24"
                    data-aos="fade-down"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-black leading-tight tracking-tight">
                        Let your money work - <br /> automatically
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Phone Image */}
                    <div
                        className=" flex justify-center lg:justify-start"
                        data-aos="fade-right"
                    >
                        <div className=" w-full max-w-[850px] aspect-[4/5]">
                            <Image
                                src="/newMobImg.svg"
                                alt="finc app interface"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right: Vertical Stepper */}
                    <div className="space-y-0"> {/* Changed space-y-12 to 0 to manage spacing via margins/padding inside the loop */}
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex items-stretch gap-6 md:gap-8 group"
                                data-aos="fade-left"
                                data-aos-delay={index * 200}
                            >
                                {/* Left Column: Number and Dashed Line */}
                                <div className="flex flex-col items-center">
                                    {/* Step Number Box */}
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

                                    {/* Vertical Dashed Line - Only show if not the last item */}
                                    {index !== steps.length - 1 && (
                                        <div className="w-0 h-full border-l-2 border-dashed border-gray-300 "></div>
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