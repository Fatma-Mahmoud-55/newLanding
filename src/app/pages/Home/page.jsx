import React from 'react';
import Hero from '../../../compnents/LandingSections/Hero'; // Fixed "compnents" typo
import SectionSix from '../../../compnents/LandingSections/SectionSix'; // Fixed "compnents" typo
import SectionFive from '../../../compnents/LandingSections/SectionFive'; // Fixed "compnents" typo
import SectionSixV2 from '../../../compnents/LandingSections/SectionSixV2'; // Fixed "compnents" typo
import SectionsContainerOne from '../../../compnents/LandingSections/SectionsContainerOne'; // Fixed "compnents" typo
import SectionsContainerTwo from '../../../compnents/LandingSections/SectionsContainerTwo'; // Fixed "compnents" typo

export default function Page() {  // Changed to default export and PascalCase
  return (
    <>
    <div className="w-full">
       <Hero />
       <SectionsContainerOne />
       <SectionsContainerTwo />
       <SectionSix />
       
       {/* <SectionSixV2 /> */}
      </div>
    </>
  );
}