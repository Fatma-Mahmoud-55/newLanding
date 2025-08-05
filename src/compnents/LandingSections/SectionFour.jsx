import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import FincScoreSection from "../FincScoreSection";
import Advice from "../Advice";
import RealTime from "../RealTime";

const SectionFour = () => {
  const [isVisible, setIsVisible] = useState({
    main: false,
    phones: false,
    cards: false
  });
  
  const mainRef = useRef(null);
  const phonesRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          if (target === mainRef.current) {
            setIsVisible(prev => ({ ...prev, main: true }));
          } else if (target === phonesRef.current) {
            setIsVisible(prev => ({ ...prev, phones: true }));
          } else if (target === cardsRef.current) {
            setIsVisible(prev => ({ ...prev, cards: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    const refs = [mainRef, phonesRef, cardsRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="w-full min-h-screen relative ">
      {/* Background overlay */}
      <div className="absolute inset-0 w-full h-full bg-purple-900 opacity-20"></div>
      
      {/* Main content container */}
      <div className="relative z-10 w-full min-h-screen bg-white md:pb-32 pb-auto overflow-hidden lg:rounded-b-[50px] md:rounded-b-[30px] rounded-b-[25px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute md:-mr-60 mr-0 md:bottom-12 md:top-auto top-20 transform flex justify-end">
            <img 
              src="/ring.png" 
              alt="ring" 
              className="md:w-9/12 w-full animate-spin"
              style={{
                animation: 'spin 60s linear infinite'
              }}
            />
          </div>
        </div>
        
        {/* Content - Main Section */}
        <div 
          ref={mainRef}
          className={`relative z-20 max-w-7xl mx-auto p-4 grid md:grid-cols-2 md:gap-1 gap-4 h-full transition-all duration-1000 ease-out ${
            isVisible.main 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-12'
          }`}
        > 
          <div 
            className={`md:w-md w-full h-fit order-2 md:order-1 my-auto transition-all duration-1200 delay-200 ease-out ${
              isVisible.main 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-8'
            }`}
          >
            <FincScoreSection 
              icon={false}
              title="fincr - your smart money buddy"
              desc="Ask anything. Learn everything.No confusion. No complexity. Just answers you actually understand and trust."
            />            
          </div>
          
          <div 
            ref={phonesRef}
            className={`w-full h-full flex justify-center order-1 md:order-2 transition-all duration-1200 delay-400 ease-out ${
              isVisible.phones 
                ? 'opacity-100 transform translate-y-0 scale-100' 
                : 'opacity-0 transform translate-y-8 scale-95'
            }`}
          >
            <img 
              src="/2iphones.png" 
              alt="iphones" 
              className="h-[90%]"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div 
          ref={cardsRef}
          className="relative  z-20 max-w-7xl mx-auto p-4 flex md:flex-row flex-col md:gap-6 gap-5 h-fit justify-center"
        > 
          <div 
            className={`md:w-fit w-full h-auto col-span-1 border border-gray-200 rounded-2xl bg-white transition-all duration-1000 delay-200 ease-out ${
              isVisible.cards 
                ? 'opacity-100 transform translate-y-0 scale-100' 
                : 'opacity-0 transform translate-y-12 scale-95'
            }`}
          >
            <RealTime/>
          </div>
          
          <div 
            className={`h-auto md:w-fit w-full col-span-1 border border-gray-200 rounded-2xl bg-white transition-all duration-1000 delay-400 ease-out ${
              isVisible.cards 
                ? 'opacity-100 transform translate-y-0 scale-100' 
                : 'opacity-0 transform translate-y-12 scale-95'
            }`}
          >
            <Advice/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;