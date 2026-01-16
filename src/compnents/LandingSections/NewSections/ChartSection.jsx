import React from 'react';

const ChartSection = () => {
    return (
        <div className=" w-full bg-white border border-purple-50 rounded-[2rem] p-8 shadow-sm overflow-hidden relative h-full flex flex-col justify-between">
            {/* Header Section */}
            <div className="flex justify-between items-start">
                <h2 className="text-[2.5rem] font-medium leading-tight text-gray-900 tracking-tight">
                    Know when to <br /> act or relax.
                </h2>

                {/* Icon Box */}
                <div className="bg-gray-100 p-2 rounded-xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                        <line x1="18" y1="20" x2="18" y2="0" />
                        <line x1="12" y1="20" x2="12" y2="0" />
                        <line x1="6" y1="20" x2="6" y2="0" />
                    </svg>
                </div>
            </div>

            {/* Wave Chart Section */}
            <div className="absolute bottom-0 left-0 w-full leading-[0]">
                <svg
                    viewBox="0 0 500 200"
                    preserveAspectRatio="none"
                    className="w-full h-82"
                >
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* The Fill Area */}
                    <path
                        d="M0,100
               C50,120 70,140 100,120
               C130,100 150,50 180,50
               C210,50 220,160 250,160
               C280,160 310,50 340,50
               C370,50 380,100 400,100
               C430,100 460,150 500,50
               L500,200 L0,200 Z"
                        fill="url(#chartGradient)"
                    />

                    {/* The Stroke Line */}
                    <path
                        d="M0,100
               C50,120 70,140 100,120
               C130,100 150,50 180,50
               C210,50 220,160 250,160
               C280,160 310,50 340,50
               C370,50 380,100 400,100
               C430,100 460,150 500,50"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default ChartSection;