import React from 'react';
import Hero2 from '../../../compnents/LandingSections/Hero2'; // Fixed "compnents" typo
import SectionSix from '../../../compnents/LandingSections/SectionSix'; // Fixed "compnents" typo
import SectionFive from '../../../compnents/LandingSections/SectionFive'; // Fixed "compnents" typo
import SectionSixV2 from '../../../compnents/LandingSections/SectionSixV2'; // Fixed "compnents" typo
import SectionsContainerOne from '../../../compnents/LandingSections/SectionsContainerOne'; // Fixed "compnents" typo
import SectionsContainerTwo from '../../../compnents/LandingSections/SectionsContainerTwo';
import NewSectionsContainerOne from "@/compnents/LandingSections/NewSectionsContainerOne";
import NewSectionsContainerTwo from "@/compnents/LandingSections/NewSectionsContainerTwo"; // Fixed "compnents" typo

export default function Page() {  // Changed to default export and PascalCase
  return (
    <>
    <div className="w-full">
       <Hero2/>
               {/*<div className="absolute md:w-72 w-20 md:h-32 h-40 -left-20 -bottom-70 -z-10 bg-gradient-to-r from-[#7F5AF0] to-[#9F80FF] rounded-full blur-3xl opacity-50 scale-120 md:p-40 p-32"></div>*/}

        <NewSectionsContainerOne/>
        <NewSectionsContainerTwo/>
       {/*<SectionsContainerOne />*/}
       {/*<SectionsContainerTwo />*/}
       <SectionSix />
       
       {/* <SectionSixV2 /> */}
      </div>
    </>
  );
}