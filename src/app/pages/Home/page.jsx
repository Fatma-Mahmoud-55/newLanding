import React from 'react';
import Hero from '../../../compnents/LandingSections/Hero'; // Fixed "compnents" typo
import SectionOne from '../../../compnents/LandingSections/SectionOne'; // Fixed "compnents" typo
import SectionsContainerOne from '../../../compnents/LandingSections/SectionsContainerOne'; // Fixed "compnents" typo

export default function Page() {  // Changed to default export and PascalCase
  return (
    <>
    <div className="w-full">
       <Hero />
       <SectionsContainerOne />
      </div>
    </>
  );
}