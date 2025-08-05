import { useState } from 'react';

export default function Advice() {
  const [inputValue, setInputValue] = useState('');

  const handleCardClick = (text) => {
    setInputValue(text);
  };

  return (
    // <div className="max-w-md mx-auto p-6 bg-white">
    <div className="max-w-lg w-full mx-auto md:p-6 p-3">
      <div className='w-full order-2 md:order-1'>
           {/* Main heading */}
      <h1 className="text-3xl  text-gray-900 mb-3 leading-tight">
        Get advice that actually makes sense
      </h1>

      {/* Subtitle */}
      <p className="text-gray-900  mb-1">
        Clear. Personalized. AI-powered.
      </p>

      {/* Description */}
      <p className="text-gray-600  text-sm mb-8 leading-relaxed">
        No jargon, just the next right move for you in plain English (or Arabic).
      </p>

      </div>
   
      {/* Try asking section */}
      <div className="mb-6 md:w-9/12 w-full  mx-auto order-1 md:order-2  ">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Try asking
        </h2>

        {/* Cards container */}
        <div className="grid grid-cols-2  sm:gap-3 gap-2 mb-4">
          {/* First card */}
          <button
            onClick={() => handleCardClick("Help me build my first investment portfolio")}
            className="p-3 rounded-2xl bg-gradient-to-br from-pink-200 via-purple-200 to-orange-200 text-left hover:scale-105 transition-transform duration-200 shadow-sm"
          >
            <div className="flex items-start mb-2">
              <span className="">
                <img src='/stars.png' alt='stars'/>
              </span>
            </div>
            <p className="text-gray-800 sm:text-sm  text-xs leading-snug">
              Help me build my first investment portfolio
            </p>
          </button>

          {/* Second card */}
          <button
            onClick={() => handleCardClick("What's a good strategy for long-term growth?")}
            className="p-3 rounded-2xl bg-gradient-to-br from-purple-200 via-purple-300 to-purple-200 text-left hover:scale-105 transition-transform duration-200 shadow-sm"
          >
            <div className="flex items-start mb-2">
              <span className="">
                                <img src='/stars.png' alt='stars'/>

              </span>
            </div>
            <p className="text-gray-800 sm:text-sm  text-xs  leading-snug">
              What's a good strategy for long-term growth?
            </p>
          </button>
        </div>

        {/* Input field */}
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything about investing..."
            className="w-full px-4 py-3 border border-[#D1A3DC] rounded-2xl text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}