"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from "@/compnents/SectionTitle";

export default function PoweredBy() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            disable: 'mobile',
        });
    }, []);

    return (
        // overflow-x-hidden prevents horizontal scrollbars from the negative margin
        <section className="bg-white py-20 overflow-x-hidden">
            <div className="mx-auto max-w-7xl px-4 md:px-6">

                {/* Branding & Main Title Section */}
                <div data-aos="fade-up" className="flex flex-col items-center mb-16 md:mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-xl md:text-2xl font-semibold text-gray-500">
                            Powered by
                        </span>
                        <Image
                            src="/PoweredBy.svg"
                            alt="Partner Logo"
                            width={160}
                            height={60}
                            className="sm:w-28 md:w-40 w-20 h-auto object-contain"
                        />
                    </div>

                    <SectionTitle
                        title={
                            <>
                                You were never the problem. <br className="hidden sm:block" />
                                <span className="text-black">The system was.</span>
                            </>
                        }
                    />
                </div>

                {/* Content Section: Grid Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">

                    {/* Left: Text Content */}
                    <div
                        className="order-1 text-center lg:text-left"
                        data-aos="fade-right"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                            finc flips the script
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
                            We built a platform that works for you.
                            No stress. No pressure. Just intelligent,
                            automated investing that finally makes sense.
                        </p>
                    </div>

                    {/* Right: Image Container */}
                    <div
                        className="order-2 flex justify-end"
                        data-aos="fade-left"
                    >
                        {/*
                          Breakout Logic:
                          - On mobile: -mr-4 negates the px-4 padding.
                          - On tablet (md): -mr-6 negates the px-6 padding.
                          - On large screens: -mr-[calc((100vw-1280px)/2+1.5rem)]
                            calculates the margin outside the 7xl (1280px) container + padding.
                        */}
                        <div className="relative w-full flex justify-end
                                      -mr-4 md:-mr-6
                                      lg:-mr-[calc((100vw-1280px)/2+1.5rem)]">
                            <Image
                                src="/PoweredByMobile.svg"
                                alt="finc app interface"
                                width={900}
                                height={600}
                                priority
                                // Removed max-h constraint on mobile to let it fill the width,
                                // and used object-right to ensure it sticks to the edge.
                                className="w-full h-auto max-w-[500px] md:max-w-none object-contain object-right"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}