"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <section className="bg-white py-12 md:py-24 overflow-hidden">
            <div className=" ml-10 pl-4 md:pl-6">

                {/* Top: Powered By Logo */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-16 md:mb-32"
                    data-aos="fade-down"
                >
                    <h3 className="text-3xl md:text-5xl font-bold text-black tracking-tight text-center">
                        Powered by
                    </h3>
                    <Image
                        src="/PoweredBy.svg"
                        alt="Partner Logo"
                        width={192}
                        height={80}
                        className="w-32 md:w-48 h-auto object-contain"
                    />
                </div>

                {/* Center: Main Headline */}
                <div
                    className="text-center mb-20 md:mb-40"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black leading-[1.1] max-w-5xl mx-auto tracking-tight px-2">
                        You were never the problem. <br className="hidden sm:block" />
                        <span className="text-gray-400 sm:text-black">The system was.</span>
                    </h2>
                </div>

                {/* Bottom Section: Split Content */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12 order-2 lg:order-1">
                        <div className='flex flex-col items-center justify-center'>
                            <div data-aos="fade-right" data-aos-delay="400">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl  text-black mb-6 ml-5">
                                    finc flips the script
                                </h2>
                            </div>
                            <div data-aos="fade-right" data-aos-delay="600">
                                <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
                                    We built a platform that works for you.
                                    No stress. No pressure. Just intelligent,
                                    automated investing that finally makes sense.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right: Phone Image Container */}
                    {/*
                        Logic to hit the screen border:
                        1. -mr-4 / -mr-6: Negates mobile container padding.
                        2. lg:-mr-[calc((100vw-100%)/2)]: Negates the "auto" margin of the centered container on desktop.
                    */}
                    <div
                        className="w-full lg:w-1/2 flex justify-end order-1 lg:order-2 -mr-4 md:-mr-6 lg:-mr-[calc((100vw-100%)/2)]"
                        data-aos="fade-left" data-aos-delay="800">
                        <Image
                            src="/PoweredByMobile.svg"
                            alt="finc app interface"
                            width={900}
                            height={600}
                            priority
                            className="w-auto h-auto max-w-none max-h-[400px] md:max-h-[500px] object-right"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}