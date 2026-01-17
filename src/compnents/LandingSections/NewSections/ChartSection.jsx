// import React from 'react';
// import { Area } from '@ant-design/plots';
// import { CgMenuLeft } from "react-icons/cg";
//
// const ChartSection = () => {
//     // Data points tuned to match the visual silhouette
//     const data = [
//         { x: 0, y: 50 },
//         { x: 10, y: 42 },
//         { x: 18, y: 60 },
//         { x: 25, y: 55 },
//         { x: 35, y: 95 },
//         { x: 45, y: 30 },
//         { x: 55, y: 70 },
//         { x: 62, y: 92 },
//         { x: 70, y: 60 },
//         { x: 80, y: 65 },
//         { x: 88, y: 45 },
//         { x: 95, y: 65 },
//         { x: 100, y: 85 },
//     ];
//
//     const config = {
//         data,
//         xField: 'x',
//         yField: 'y',
//         padding: 0,
//         appendPadding: [10, 0, 0, 0], // Top padding to prevent line clipping
//         autoFit: true,
//         shapeField: 'smooth',
//         // Hide axes and grid
//         axis: false,
//         tooltip: false,
//         // Scale synchronization
//         scale: {
//             x: { type: 'linear', expand: [0, 0] },
//             y: { nice: true },
//         },
//         // Fill style (Gradient)
//         style: {
//             fill: 'l(270) 0:#ffffff 1:#8B5CF6',
//             fillOpacity: 0.5,
//         },
//         // Top line style
//         line: {
//             style: {
//                 stroke: '#8B5CF6',
//                 lineWidth: 4,
//                 lineCap: 'round',
//             },
//         },
//         // Animation for smoothness
//         animate: { enter: { type: 'fadeIn', duration: 1000 } },
//     };
//
//     return (
//         <div className="w-full max-w-2xl bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm overflow-hidden relative h-[420px] flex flex-col justify-between">
//             {/* Header Section */}
//             <div className="flex justify-between items-start z-10">
//                 <h2 className="text-[2.6rem] font-medium leading-[1.1] text-gray-900 tracking-tight">
//                     Know when to <br /> act or relax.
//                 </h2>
//
//                 {/* Icon Box */}
//                 {/* Icon Box */}
//                 <div className="bg-gray-100 p-2 rounded-xl">
//                     <CgMenuLeft style={{ stroke: "currentColor", strokeWidth: "1.2" }} className="rotate-270 text-2xl font-bold"/>
//                 </div>
//             </div>
//
//             {/* Chart Section */}
//             <div className="absolute bottom-0 left-0 w-full h-[300px]">
//                 <Area {...config} />
//             </div>
//         </div>
//     );
// };
//
// export default ChartSection;
import React from 'react';
import { Area } from '@ant-design/plots';
import { CgMenuLeft } from "react-icons/cg";

const ChartSection = () => {
    const data = [
        { x: 0, y: 50 }, { x: 10, y: 42 }, { x: 18, y: 60 },
        { x: 25, y: 55 }, { x: 35, y: 95 }, { x: 45, y: 30 },
        { x: 55, y: 70 }, { x: 62, y: 92 }, { x: 70, y: 60 },
        { x: 80, y: 65 }, { x: 88, y: 45 }, { x: 95, y: 65 },
        { x: 100, y: 85 },
    ];

    const config = {
        data,
        xField: 'x',
        yField: 'y',
        padding: 0,
        appendPadding: [10, 0, 0, 0],
        autoFit: true,
        shapeField: 'smooth',
        axis: false,
        tooltip: false,
        scale: {
            x: { type: 'linear', expand: [0, 0] },
            y: { nice: true },
        },
        style: {
            fill: 'l(270) 0:#ffffff 1:#8B5CF6',
            fillOpacity: 0.5,
        },
        line: {
            style: {
                stroke: '#8B5CF6',
                lineWidth: 4,
                lineCap: 'round',
            },
        },
        animate: { enter: { type: 'fadeIn', duration: 1000 } },
    };

    return (
        <div className="
            w-full max-w-2xl
            bg-white border border-gray-100
            rounded-lg
            p-6 sm:p-8 md:p-10
            shadow-sm overflow-hidden relative
            min-h-[380px] md:h-[420px]
            flex flex-col justify-between
        ">
            {/* Header Section */}
            <div className="flex justify-between items-start z-20 relative">
                <h2 className="
                    text-2xl sm:text-3xl md:text-[2.6rem]
                    font-medium leading-[1.1]
                    text-gray-900 tracking-tight
                ">
                    Know when to <br className="hidden xs:block" /> act or relax.
                </h2>

                {/* Icon Box */}
                <div className="bg-gray-100 p-2 md:p-3 rounded-xl shrink-0 ml-4">
                    <CgMenuLeft
                        style={{ stroke: "currentColor", strokeWidth: "1.2" }}
                        className="rotate-270 text-xl md:text-2xl font-bold"
                    />
                </div>
            </div>

            {/* Chart Section - Responsive Height Container */}
            <div className="absolute bottom-0 left-0 w-full h-[60%] sm:h-[65%] md:h-[300px] h-[170px] z-10">
                <Area {...config} />
            </div>
        </div>
    );
};

export default ChartSection;