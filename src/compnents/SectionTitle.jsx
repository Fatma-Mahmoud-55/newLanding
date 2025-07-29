import React from 'react';

export default function SectionTitle({ subTitle, title, className = '' }) {
  return (
    <div className={`max-w-4xl mx-auto text-center ${className}`}>
      {/* Subtitle with fade-in animation */}
      {subTitle && (
        <h3 className="text-sm md:text-base font-medium tracking-wider uppercase text-[#6B137F] mb-3 md:mb-4 animate-fadeIn">
          {subTitle}
        </h3>
      )}
      
      {/* Main title with slide-in animation */}
      {title && (
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight animate-fadeIn">
          {title}
        </h1>
      )}
      
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}