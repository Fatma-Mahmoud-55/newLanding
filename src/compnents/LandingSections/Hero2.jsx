"use client"
import React, { useState } from 'react';
import axios from 'axios';

// Rate limiting variables (in-memory storage)
let lastRequestTime = 0;
const RATE_LIMIT_DURATION = 1 * 60 * 1000; // 1 minute in milliseconds

export default function Hero2() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const [rateLimitMessage, setRateLimitMessage] = useState('');

    const checkRateLimit = () => {
        const currentTime = Date.now();
        const timeSinceLastRequest = currentTime - lastRequestTime;

        if (lastRequestTime > 0 && timeSinceLastRequest < RATE_LIMIT_DURATION) {
            const remainingTime = RATE_LIMIT_DURATION - timeSinceLastRequest;
            const remainingMinutes = Math.ceil(remainingTime / (60 * 1000));
            return {
                allowed: false,
                remainingMinutes
            };
        }

        return { allowed: true };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setRateLimitMessage('');

        const rateLimitCheck = checkRateLimit();
        if (!rateLimitCheck.allowed) {
            setRateLimitMessage(`Please wait ${rateLimitCheck.remainingMinutes} more minute(s) before trying again.`);
            return;
        }

        setIsLoading(true);
        lastRequestTime = Date.now();

        try {
            await axios.post('https://contact.terzoo.com/api/whitelist/store', {
                email: email
            });
            setIsSuccess(true);
            setTimeout(() => {
                setIsModalOpen(false);
                setIsSuccess(false);
                setEmail('');
            }, 4000);
        } catch (err) {
            setError(err.response?.data?.errors?.email?.[0] || 'Something went wrong.');
        } finally {
            setIsLoading(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEmail('');
        setError('');
        setIsSuccess(false);
        setRateLimitMessage('');
    };

    return (
        <>
            <section id='home'
                     className="relative min-h-screen flex flex-col items-center pt-20 md:pt-44  border border-none rounded-b-[50px]  overflow-hidden">


                {/* Text Content */}
                <div className="max-w-5xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                        Intelligent wealth. Built for you.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        An AI-powered ethical wealth platform, built to deliver effortless, stress-free financial
                        freedom.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-black text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            Join the waitlist
                        </button>
                        <p className="text-sm text-gray-500">
                            Early access. Your freedom's waiting.
                        </p>
                    </div>
                </div>
                <div
                    className="absolute top-4/5 left-1/2 -translate-x-1/2 -translate-y-1/2
        md:w-8/12 w-11/12 h-[900px]
        bg-gradient-to-r from-[#6719BC] to-[#6719BC]  to-[#9F80FF]
        rounded-full blur-3xl opacity-50 scale-120"
                ></div>
                {/* Mockup Image */}
                <div className="mt-12 relative w-full flex justify-center">
                    {/* Purple Glow Div */}


                    {/* Image */}
                    <img
                        src="/newHeroImage.png"
                        alt="Finc App Dashboard"
                        className="relative h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)] z-10"
                        style={{maxHeight: '60vh'}}
                    />

                </div>

            </section>

            {/* Modal - Reused logic from your provided code */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={closeModal}></div>

                    <div
                        className="relative bg-white rounded-[32px] shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300">
                        <button onClick={closeModal} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-100 flex items-center justify-center">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h3>
                            <p className="text-gray-600 mb-8">Be among the first to experience Egypt's first AI-powered investing platform.</p>

                            {!isSuccess ? (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                        required
                                    />
                                    {error && <p className="text-red-500 text-sm">{error}</p>}
                                    {rateLimitMessage && <p className="text-orange-500 text-sm">{rateLimitMessage}</p>}

                                    <button
                                        disabled={isLoading}
                                        className="w-full py-4 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? "Joining..." : "Join Waitlist"}
                                    </button>
                                </form>
                            ) : (
                                <div className="py-4 text-green-600 font-semibold">
                                    Welcome aboard! 🎉 We'll be in touch soon.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}