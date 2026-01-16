"use client"
import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from "../../SectionTitle"; // Adjust path as needed
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
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setHeaderVisible(true);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '100px' }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        return () => {
            if (headerRef.current) observer.unobserve(headerRef.current);
        };
    }, []);

    return (
        <section className="relative w-full overflow-hidden bg-white lg:rounded-t-[50px] md:rounded-t-[30px] rounded-t-[25px] border-t border-gray-100 py-16">

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* 1. Header Section - Using SectionTitle Component */}
                <div
                    ref={headerRef}
                    className={`w-full mb-12 transition-all duration-1000 ${
                        headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <SectionTitle
                        subTitle="" // Leave empty or add if needed
                        title="Take the lead - with the right tools"
                    />
                </div>

                {/* 2. Top Grid: Chart and Brands */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div data-aos="fade-up" data-aos-delay="200">
                        <ChartSection />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <MediaCard />
                    </div>
                </div>

                {/* 3. Bottom Grid: Description Box and Phones */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Styled Purple Card */}
                    <div data-aos="fade-right" className="h-full flex flex-col justify-center">
                        <div className=" h-full py-20 rounded-[30px] text-white relative overflow-hidden group">
                            {/* Decorative inner light */}
                            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>

                            <FincScoreSection
                                icon={false}
                                title="fincr - your smart money buddy"
                                desc="Ask anything. Learn everything. No confusion. No complexity. Just answers you actually understand and trust."
                            />
                        </div>
                    </div>

                    {/* Right: The Two Phones Image */}
                    <div data-aos="fade-left" className="flex justify-center">
                        <div className="relative w-full max-w-[550px]">
                            <Image
                                src="/2iphones.png"
                                alt="fincr app interface"
                                width={1100}
                                height={1100}
                                priority
                                className="w-full h-auto object-contain drop-shadow-2xl"
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
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
            `}</style>
        </section>
    );
}