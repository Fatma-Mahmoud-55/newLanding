'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import img6 from './../../../public/sectionSixImg.png';
import SectionTitle from "../SectionTitle";
import MarketAccessSection from "../MarketAccessSection";
import FincScoreSection from "../FincScoreSection";
import PortfolioInsights from "../PortfolioInsights";

export default function SectionThree() {
      const [headerVisible, setHeaderVisible] = useState(false);
      const headerRef = useRef(null);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setHeaderVisible(true);
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '100px'
          }
        );
    
        if (headerRef.current) {
          observer.observe(headerRef.current);
        }
    
        return () => {
          if (headerRef.current) {
            observer.unobserve(headerRef.current);
          }
        };
      }, []);
  return (
    <div className="relative ">
      {/* Background blur div - positioned behind the main container */}
      <div className="absolute inset-0 w-full h-10 bg-purple-900 opacity-20 "></div>
      
      <div className="min-h-screen  bg-white relative z-10 border-t border-white lg:rounded-t-[50px] md:rounded-t-[30px] rounded-t-[25px] px-4 pb-4 lg:pt-32 pt-20 lg:pb-8 lg:px-8">
  {/* Section Title */}
      <div 
        ref={headerRef}
        className={`w-full px-4 transition-all duration-1000 ${
          headerVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionTitle
          subTitle="FOR WHEN YOU WANT MORE CONTROL, WITHOUT THE CHAOS"
          title="Take the lead - with the right tools"
          
        />
      </div>

            {/* container */}
            <div className='max-w-7xl mx-auto md:px-6 px-2'>
                          <div className='rounded-xl   shadow-md border border-gray-100  '>

              <PortfolioInsights/>
              </div>
              <div className=' grid lg:grid-cols-3 gap-5    pb-16 relative mt-6'>
            <div className='rounded-xl lg:col-span-2 shadow-md border border-gray-100  md:py-10 py-5 '>
<MarketAccessSection/>
            </div>
            <div className='lg:col-span-1  h-full'>
<FincScoreSection/>
            </div>
            </div> 
            </div>
           


            </div>


    </div>
  );
}