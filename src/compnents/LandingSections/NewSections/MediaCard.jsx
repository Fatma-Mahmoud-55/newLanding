"use client";
import React from 'react';
import { motion } from 'framer-motion';

const MediaCard = () => {
    const logos = [
        '/we.jpg',
        '/elsewedy.jpg',
        '/juhaynaa.jpg',
        '/palmhills.jpg',
        '/internet.jpg',
    ];

    // Double the array for seamless looping
    const row1 = [...logos, ...logos,...logos, ...logos];
    const row2 = [...logos, ...logos,...logos, ...logos];

    return (
        <div className="relative overflow-hidden w-full h-[420px] bg-gradient-to-br from-[#7F5AF0] via-[#9F80FF] to-[#CBB7FF] rounded-2xl flex items-center justify-center">

            {/* Container that stacks rows horizontally */}
            <div className="flex flex-col gap-6 md:gap-6 transform -rotate-10 md:pt-44 pt-10 scale-110 select-none pointer-events-none">

                {/* Row 1 - Moving Right to Left */}
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-4"
                >
                    {row1.map((src, index) => (
                        <LogoCard key={`row1-${index}`} src={src} />
                    ))}
                </motion.div>

                {/* Row 2 - Moving Left to Right */}
                <motion.div
                    animate={{ x: [-1000, 0] }}
                    transition={{
                        duration: 55,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-4"
                >
                    {row2.map((src, index) => (
                        <LogoCard key={`row2-${index}`} src={src} />
                    ))}
                </motion.div>

                {/* Row 3 - Moving Right to Left (Optional extra row) */}
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 52,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-4 "
                >
                    {row1.map((src, index) => (
                        <LogoCard key={`row3-${index}`} src={src} />
                    ))}
                </motion.div>
            </div>

            {/* Side Overlays for smooth fading effect */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#7F5AF0] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#CBB7FF] to-transparent z-10" />
        </div>
    );
};

// Sub-component: Transparent, smaller, and rounded
const LogoCard = ({ src }) => (
    <div className="w-16  md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-xl border border-white/20">
        <img
            src={src}
            alt="Partner Logo"
            className="w-full h-full object-cover rounded-xl" // Use object-cover if you want the logo to fill the rounded square, or object-contain for full logo visibility
            onError={(e) => {
                e.target.src = "https://via.placeholder.com/150?text=Logo";
            }}
        />
    </div>
);

export default MediaCard;