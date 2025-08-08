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
    <div className="w-full min-h-screen relative">
      {/* Background overlay */}
      <div className="absolute inset-0 w-full h-full bg-purple-900 opacity-20"></div>

      {/* Main content container */}
      <div className="relative z-10 w-full min-h-screen bg-white md:pb-32 pb-auto overflow-hidden md:rounded-b-[50px] rounded-b-[25px]">
        {/* Desktop Layout */}
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute md:-mr-60 mr-0 md:bottom-12 md:top-auto top-20 transform flex justify-end z-20">
            <img 
              src="/ring.png" 
              alt="ring" 
              className="md:w-9/12 w-full animate-spin"
              style={{
                animation: 'spin 60s linear infinite'
              }}
            />
          </div>
          
          {/* FincScoreSection behind the ring */}
          <div 
            className={`md:w-md w-full h-fit absolute top-1/4 lg:left-[25rem] left-[16rem] transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-1200 delay-200 ease-out ${
              isVisible.main 
                ? 'opacity-100 transform -translate-x-1/2 -translate-y-1/2' 
                : 'opacity-0 transform -translate-y-1/2 translate-x-8'
            }`}
          >
            <FincScoreSection 
              icon={false}
              title="fincr - your smart money buddy"
              desc="Ask anything. Learn everything.No confusion. No complexity. Just answers you actually understand and trust."
            />            
          </div>
        </div>
        
        {/* Desktop Content - Main Section */}
        <div 
          ref={mainRef}
          className="relative hidden md:block z-30 max-w-7xl mx-auto px-4 h-full pt-20"
        > 
          <div 
            ref={phonesRef}
            className={`w-full h-full flex justify-end transition-all duration-1200 delay-400 ease-out ${
              isVisible.phones 
                ? 'opacity-100 transform translate-y-0 scale-100' 
                : 'opacity-0 transform translate-y-8 scale-95'
            }`}
          >
            <img 
              src="/2iphones.png" 
              alt="iphones" 
              className="h-[80vh] max-h-[600px] w-auto object-contain"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="absolute inset-0 md:hidden block">
          <div className="absolute -mr-60 -top-14 transform flex justify-end">
            <img 
              src="/ring.png" 
              alt="ring" 
              className="w-full animate-spin"
              style={{
                animation: 'spin 60s linear infinite'
              }}
            />
          </div>
        </div>
        
        {/* Mobile Content - Main Section */}
        <div 
          className={`relative z-20 md:hidden max-w-7xl mx-auto p-4 grid grid-cols-1 gap-4 h-full transition-all duration-1000 ease-out ${
            isVisible.main 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-12'
          }`}
        > 
          <div 
            className={`w-full h-full flex justify-center transition-all duration-1200 delay-400 ease-out ${
              isVisible.phones 
                ? 'opacity-100 transform translate-y-0 scale-100' 
                : 'opacity-0 transform translate-y-8 scale-95'
            }`}
          >
            {/* Back iPhone with slide-in from left animation */}
            <img 
              src="/backIphone.png" 
              alt="back iphone" 
              className={`h-full w-44 -rotate-8 -mr-10 transition-all duration-1000 delay-600 ease-out ${
                isVisible.phones 
                  ? 'opacity-100 transform translate-x-0 -rotate-8' 
                  : 'opacity-0 transform -translate-x-16 rotate-12'
              }`}
            />
            
            {/* Front iPhone with slide-in from right animation */}
            <img 
              src="/frontIphone.png" 
              alt="front iphone" 
              className={`h-full w-44 rotate-10 -ml-12 transition-all duration-1000 delay-800 ease-out ${
                isVisible.phones 
                  ? 'opacity-100 transform translate-x-0 rotate-10' 
                  : 'opacity-0 transform translate-x-16 -rotate-12'
              }`}
            />
          </div>
               <div 
            className={`w-full h-fit my-auto transition-all duration-1200 delay-200 ease-out ${
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
        </div>

        {/* Cards Section */}
        <div 
          ref={cardsRef}
          className="relative z-20 max-w-7xl mx-auto p-4 flex md:flex-row flex-col md:gap-6 gap-5 h-fit justify-center"
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



// import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';
// import FincScoreSection from "../FincScoreSection";
// import Advice from "../Advice";
// import RealTime from "../RealTime";

// const SectionFour = () => {
//   const [isVisible, setIsVisible] = useState({
//     main: false,
//     phones: false,
//     cards: false
//   });
  
//   const mainRef = useRef(null);
//   const phonesRef = useRef(null);
//   const cardsRef = useRef(null);

//   useEffect(() => {
//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const target = entry.target;
//           if (target === mainRef.current) {
//             setIsVisible(prev => ({ ...prev, main: true }));
//           } else if (target === phonesRef.current) {
//             setIsVisible(prev => ({ ...prev, phones: true }));
//           } else if (target === cardsRef.current) {
//             setIsVisible(prev => ({ ...prev, cards: true }));
//           }
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, {
//       threshold: 0.2,
//       rootMargin: '0px 0px -50px 0px'
//     });

//     const refs = [mainRef, phonesRef, cardsRef];
//     refs.forEach(ref => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     return () => {
//       refs.forEach(ref => {
//         if (ref.current) {
//           observer.unobserve(ref.current);
//         }
//       });
//     };
//   }, []);

//   return (
//     <div className="w-full min-h-screen relative ">
//       {/* Background overlay */}
//       <div className="absolute inset-0 w-full h-full bg-purple-900 opacity-20"></div>
      
//       {/* Main content container */}
//       <div className="relative z-10 w-full min-h-screen bg-white md:pb-32 pb-auto overflow-hidden md:rounded-b-[50px] md:rounded-b-[30px] rounded-b-[25px]">
//         {/* Background Image */}
//         <div className="absolute inset-0 hidden md:block">
//           <div className="absolute md:-mr-60 mr-0 md:bottom-12 md:top-auto top-20 transform flex justify-end z-20">
//             <img 
//               src="/ring.png" 
//               alt="ring" 
//               className="md:w-9/12 w-full animate-spin"
//               style={{
//                 animation: 'spin 60s linear infinite'
//               }}
//             />
//           </div>
          
//           {/* FincScoreSection behind the ring */}
//           <div 
//             className={`md:w-md w-full h-fit absolute top-1/4 left-[25rem] transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-1200 delay-200 ease-out ${
//               isVisible.main 
//                 ? 'opacity-100 transform -translate-x-1/2 -translate-y-1/2' 
//                 : 'opacity-0 transform  -translate-y-1/2 translate-x-8'
//             }`}
//           >
//             <FincScoreSection 
//               icon={false}
//               title="fincr - your smart money buddy"
//               desc="Ask anything. Learn everything.No confusion. No complexity. Just answers you actually understand and trust."
//             />            
//           </div>
//         </div>
        
//         {/* Content - Main Section */}
//         <div 
//           ref={mainRef}
//           className={`relative z-30 max-w-7xl mx-auto p-4 grid md:grid-cols-2 md:gap-1 gap-4 h-full transition-all duration-1000 ease-out ${
//             isVisible.main 
//               ? 'opacity-100 transform translate-y-0' 
//               : 'opacity-0 transform translate-y-12'
//           }`}
//         > 
//           <div 
//             className={`md:w-md w-full h-fit order-2 md:order-1 my-auto transition-all duration-1200 delay-200 ease-out ${
//               isVisible.main 
//                 ? 'opacity-100 transform translate-x-0' 
//                 : 'opacity-0 transform -translate-x-8'
//             }`}
//           >
//             {/* This div is now empty as FincScoreSection moved to background */}
//           </div>
          
//           <div 
//             ref={phonesRef}
//             className={`w-full md:block hidden h-full flex justify-center order-1 md:order-2 transition-all duration-1200 delay-400 ease-out ${
//               isVisible.phones 
//                 ? 'opacity-100 transform translate-y-0 scale-100' 
//                 : 'opacity-0 transform translate-y-8 scale-95'
//             }`}
//           >
//             <img 
//               src="/2iphones.png" 
//               alt="iphones" 
//               className="h-[90%]"
//             />
//           </div>
//         </div>

//         {/* Cards Section */}
//         <div 
//           ref={cardsRef}
//           className="relative z-30 max-w-7xl mx-auto p-4 flex md:flex-row flex-col md:gap-6 gap-5 h-fit justify-center"
//         > 
//           <div 
//             className={`md:w-fit w-full h-auto col-span-1 border border-gray-200 rounded-2xl bg-white transition-all duration-1000 delay-200 ease-out ${
//               isVisible.cards 
//                 ? 'opacity-100 transform translate-y-0 scale-100' 
//                 : 'opacity-0 transform translate-y-12 scale-95'
//             }`}
//           >
//             <RealTime/>
//           </div>
          
//           <div 
//             className={`h-auto md:w-fit w-full col-span-1 border border-gray-200 rounded-2xl bg-white transition-all duration-1000 delay-400 ease-out ${
//               isVisible.cards 
//                 ? 'opacity-100 transform translate-y-0 scale-100' 
//                 : 'opacity-0 transform translate-y-12 scale-95'
//             }`}
//           >
//             <Advice/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionFour;