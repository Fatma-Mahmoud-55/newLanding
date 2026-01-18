"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

// Rate limiting variables
let lastRequestTime = 0;
const RATE_LIMIT_DURATION = 1 * 60 * 1000;

export default function Hero2() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const currentTime = Date.now();
        if (lastRequestTime > 0 && (currentTime - lastRequestTime) < RATE_LIMIT_DURATION) {
            setError("Please wait a moment before trying again.");
            return;
        }

        setIsLoading(true);
        lastRequestTime = Date.now();
        try {
            await axios.post('https://contact.terzoo.com/api/whitelist/store', { email });
            setIsSuccess(true);
            setTimeout(() => { setIsModalOpen(false); setIsSuccess(false); setEmail(''); }, 3000);
        } catch (err) {
            setError(err.response?.data?.errors?.email?.[0] || 'Something went wrong.');
        } finally { setIsLoading(false); }
    };

    // Animation Variants
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    };

    const staggerContainer = {
        animate: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <section id='home' className="relative w-full bg-white py-2 md:py-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full min-h-[92vh] flex flex-col items-center pt-24 md:pt-40 overflow-hidden rounded-[3rem] md:rounded-[5rem]
                bg-[#fff]
                before:absolute before:inset-0 before:z-0
                before:bg-[radial-gradient(circle_at_50%_110%,_rgba(103,25,188,0.8)_0%,_rgba(159,128,255,0.5)_25%,_rgba(200,180,255,0.2)_50%,_transparent_80%)]"
            >

                {/* Animated Background Glows */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[100%] h-[60%] bg-[#6719BC] blur-[160px] rounded-full z-0"
                />

                {/* Content Layer */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="relative z-20 flex flex-col items-center text-center max-w-6xl mx-auto px-6"
                >
                    <motion.div variants={fadeInUp} className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#000] mb-8">
                        Intelligent wealth. Built for you.
                    </motion.div>

                    <motion.p variants={fadeInUp} className="text-lg md:text-[22px] text-gray-600 max-w-[600px] leading-relaxed font-medium mb-12">
                        An AI-powered ethical wealth platform, built to deliver effortless,
                        stress-free financial freedom.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6 mb-16">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                            className="bg-black text-white px-14 py-5 rounded-2xl font-bold text-lg hover:shadow-purple-200/50 hover:shadow-2xl hover:cursor-pointer transition-shadow duration-300 "
                        >
                            Join the waitlist
                        </motion.button>
                        <p className="text-md text-gray-600    tracking-widest">
                            Early access. Your freedom's waiting.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Phone Mockup Section */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="relative w-full flex justify-center mt-auto px-4"
                >
                    {/* Floating Animation for the Phone */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}

                        className="relative z-10 flex justify-center"
                    >
                        <img
                            src="/newHeroImage.png"
                            alt="Finc App Dashboard"
                            className="w-full max-w-[340px] md:max-w-[520px] md:mr-20 mr-5 h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Modal with AnimatePresence */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white rounded-[40px] shadow-2xl max-w-md w-full p-12 z-10"
                        >
                            <div className="text-center">
                                <h3 className="text-3xl font-black text-black mb-4">Join the Waitlist</h3>
                                <p className="text-gray-500 mb-10 font-medium">Be among the first to experience Egypt's first AI-powered investing platform.</p>

                                {!isSuccess ? (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email address"
                                            className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-purple-100 outline-none transition-all font-semibold"
                                            required
                                        />
                                        {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
                                        <motion.button
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={isLoading}
                                            className="w-full py-5 bg-black text-white font-black text-lg rounded-2xl hover:bg-gray-800 disabled:opacity-50 transition-all"
                                        >
                                            {isLoading ? "Joining..." : "Join Waitlist"}
                                        </motion.button>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ scale: 0.5 }}
                                        animate={{ scale: 1 }}
                                        className="py-6 text-purple-600 font-black text-2xl"
                                    >
                                        Welcome aboard! 🎉
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}