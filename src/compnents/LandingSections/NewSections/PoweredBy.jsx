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
        });
    }, []);

    return (
        <section className="bg-white py-16 md:pb-24 pt-16 overflow-hidden">
            <div className="container mx-auto ">

                {/* Top: Powered By Logo */}
                <div
                    className="flex flex-row items-center justify-center gap-10 mb-16 md:mb-24"
                    data-aos="fade-down"
                >
                    <h3 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
                        Powered by
                    </h3>
                    <div className="relative w-12 h-12 md:w-24 md:h-24">
                        <Image
                            src="/PoweredBy.svg"
                            alt="Partner Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Center: Main Headline */}
                <div
                    className="text-center mb-24 md:mb-40"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-black leading-[1.1] max-w-5xl mx-auto tracking-tight">
                        You were never the problem. <br className="hidden md:block" />
                        The system was.
                    </h2>
                </div>

                {/* Bottom Section: Split Content */}
                <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-0">

                    {/* Left: Text Content */}
                    <div className="lg:pl-12">
                        <div data-aos="fade-right" data-aos-delay="400">
                            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
                                finc flips the script
                            </h2>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="600">
                            <p className="text-lg md:text-xl text-gray-700 max-w-md leading-relaxed font-medium">
                                We built a platform that works for you. <br />
                                No stress. No pressure. Just intelligent, <br />
                                automated investing that finally makes sense.
                            </p>
                        </div>
                    </div>

                    {/* Right: Phone Image (Bleeding off edge) */}
                    <div className=" flex justify-end lg:mr-[-10%]"
                        data-aos="fade-left"
                        data-aos-delay="800"
                    >
                        <div className=" w-full aspect-[5/3] max-w-[700px]">
                            <Image
                                src="/PoweredByMobile.svg"
                                alt="finc app interface"
                                fill
                                priority
                                className="object-contain object-right transform scale-110 md:scale-125"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}