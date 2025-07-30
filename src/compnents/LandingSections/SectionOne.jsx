"use client"
import React, { useEffect, useState } from 'react';
import SectionTitle from "../SectionTitle";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SectionOne() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);


  return (
    <section className="min-h-screen pt-32 relative overflow-hidden w-full"> 
      {/* Small text above main heading */}

      <div className="w-full">
        <SectionTitle 
          subTitle="IT WASN'T YOUR FAULT — UNTIL NOW" 
          title="You were never the problem. The system was." 
        
        />
      </div>

      <div className=" w-full mx-auto relative md:pl-12 pl-0  z-10">
        <div className="grid lg:grid-cols-2 w-[100%]  gap-16 items-center min-h-screen py-16">

          {/* Left Content */}
          <div className={`space-y-12  md:px-0 px-5 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          }`}>

            {/* Subheading */}
            <div className={`transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-8 leading-tight"
              >
                finc flips the script
              </motion.h2>
            </div>

            {/* Description */}
            <div className={`transform transition-all duration-1000 delay-900 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <p className="text-lg sm:text-xl leading-relaxed max-w-md font-medium">
                We built a platform that works for you — not for banks, brokers, or algorithms. Simple, transparent, and genuinely automated investing that finally makes sense.
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`relative transform transition-all duration-1200 delay-600 ${
            isVisible ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-4 opacity-0'
          }`}>

            {/* Hand holding phone animation wrapper */}
            <div className="w-full h-full">
              {/* Image container with no padding or margin */}
               <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                  <Image
                    src="/sectionOneImg.png"
                    alt="Hand holding phone with finc app"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'right' }}
                    className="animate-float"
                    priority
                  />
                </div>

{/* 
               <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                <Image
                  src="/sectionOneImg.png"
                  alt="Hand holding phone with finc app"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center lg:right"
                  className="animate-float"
                  priority
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-600/10 to-transparent"></div> */}

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
    </section>
  );
}