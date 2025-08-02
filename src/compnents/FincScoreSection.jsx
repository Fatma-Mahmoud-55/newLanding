import React from 'react';

const FincScoreSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#7F5AF0] via-[#9F80FF] to-[#CBB7FF] rounded-2xl p-8 text-white h-full">
      {/* Placeholder for image - you can replace this div with your image */}
      <div className="mb-6">
        <div className="  rounded-2xl flex items-center justify-center md:justify-start ">
          {/* Image placeholder - replace with your actual image */}
                 <img 
                src='/fincImg.png' 
                alt="fincImg" 
                className="w-26 h-26 object-contain transform group-hover:scale-110 hover:-rotate-12 transition-transform duration-300"
              />
        </div>
      </div>
      
      {/* Main heading */}
      <h2 className="text-2xl md:text-4xl font-normal mb-6 ">
        Your finc Score = a stock's health check
      </h2>
      
      {/* Description text */}
      <div className="space-y-3 text-purple-100">
        <p className="text-lg l">
          Think of it like a fitness tracker but for stocks.
        </p>
        <p className="text-lg l">
          We analyze key signals so you know exactly where a stock stands before making a move.
        </p>
      </div>
    </div>
  );
};

export default FincScoreSection;