"use client"
import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from "../../SectionTitle";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FincScoreSection from "@/compnents/FincScoreSection";
import MediaCard from "@/compnents/LandingSections/NewSections/MediaCard";
import ChartSection from "@/compnents/LandingSections/NewSections/ChartSection";

export default function MediaSection() {
    const [headerVisible, setHeaderVisible] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            disable: 'mobile'
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setHeaderVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        return () => {
            if (headerRef.current) observer.unobserve(headerRef.current);
        };
    }, []);

    return (
        <section className="relative w-full overflow-x-hidden bg-white lg:rounded-t-[50px] md:rounded-t-[30px] rounded-t-[25px] border-t border-gray-100 py-12 md:py-20 lg:py-24">

            {/* Background Decorative Blobs - Desktop only */}
            <div className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 -left-12 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 1. Header Section */}
                <div
                    ref={headerRef}
                    className={`w-full mb-10 md:mb-16 transition-all duration-1000 ease-out ${
                        headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <SectionTitle
                        subTitle=""
                        title="Take the lead - with the right tools"
                    />
                </div>

                {/* 2. Top Grid: Chart and Brands */}
                {/* IMPROVEMENT: Changed to flex-col on mobile and md:flex-row for desktop */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-5 mb-8 md:mb-12">
                    <div data-aos="fade-up" data-aos-delay="100" className="w-full md:w-7/12">
                        <ChartSection />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className="w-full md:w-5/12">
                        <MediaCard />
                    </div>
                </div>

                {/* 3. Bottom Grid: Description Box and Phones */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-44 items-center">

                    {/* Left/Bottom: Styled Purple Card */}
                    {/* IMPROVEMENT: Adjusted padding for mobile (py-10 px-6) vs desktop */}
                    <div data-aos="fade-right" className="order-2 lg:order-1 h-full flex flex-col justify-center">
                        <div className="h-full py-10  md:py-16  lg:py-20  text-white relative overflow-hidden group ">
                            {/* Decorative inner light */}
                            {/*<div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all duration-700"></div>*/}
                            {/*<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-400 opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all duration-700"></div>*/}

                            <div className="relative z-10">
                                <FincScoreSection
                                    icon={false}
                                    title="fincr - your smart money buddy"
                                    desc="Ask anything. Learn everything. No confusion. No complexity. Just answers you actually understand and trust."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right/Top: The Two Phones Image */}
                    {/* IMPROVEMENT: Scaled sizing for better mobile centering */}
                    <div data-aos="fade-left" className="order-1 lg:order-2 flex justify-center items-center">
                        <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] transition-transform duration-500 hover:scale-105">
                            <Image
                                src="/2iphones.png"
                                alt="fincr app interface"
                                width={1100}
                                height={1100}
                                priority
                                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob { animation: blob 10s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
            `}</style>
        </section>
    );
}