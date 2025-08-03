"use client"
"use client"
import React, { useState } from 'react';
import axios from 'axios';

// Rate limiting variables (in-memory storage)
let lastRequestTime = 0;
const RATE_LIMIT_DURATION = 1 * 60 * 1000; // 3 minutes in milliseconds

export default function Hero() {
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

    // Check rate limit
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      setRateLimitMessage(`Please wait ${rateLimitCheck.remainingMinutes} more minute(s) before trying again.`);
      return;
    }

    setIsLoading(true);
    
    // Update last request time immediately when making the request
    lastRequestTime = Date.now();

    try {
      await axios.post('https://contact.terzoo.com/api/whitelist/store', {
        email: email
      }).then((res) => {
        setIsSuccess(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setIsSuccess(false);
          setEmail('');
        }, 4000);
      });
   
    } catch (err) {
      setError(err.response.data.errors.email[0]);
      // setError('Something went wrong. Please try again.');
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
      <div className="relative min-h-screen overflow-hidden border-b lg:rounded-b-[50px] md:rounded-b-[30px] rounded-b-[25px]" style={{ background: 'linear-gradient(to bottom right, #2E0D47, #4C1D95, #7C3AED)' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Main gradient overlay */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(46, 13, 71, 0.5), transparent)' }}></div>
          
          {/* Floating orbs */}
          <div className="absolute top-0 left-5 w-80 h-80 rounded-full blur-xl animate-pulse" style={{  background: 'rgba(244, 114, 182, 0.15)' }}></div>
          <div className="absolute top-40 right-20 w-48 h-48 rounded-full blur-2xl animate-bounce" style={{ background: 'rgba(244, 114, 182, 0.15)', animationDuration: '3s' }}></div>
          <div className="absolute bottom-1  right-1/4 w-90 h-90  rounded-full blur-2xl animate-bounce" 
       style={{ background: 'rgba(244, 114, 182, 0.15)', animationDuration: '3s' }}></div>
               <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full blur-lg animate-pulse" style={{ background: 'rgba(196, 181, 253, 0.25)', animationDelay: '1s' }}></div>
          
         
        </div>

        {/* Content container */}
        <div className="relative z-10   px-4 sm:px-6 lg:px-8 md:pt-0 pt-32 h-full flex justify-end items-end">
          <div className="grid lg:grid-cols-2 items-end w-full ">
            {/* Left content */}
                  <div className="text-white animate-fade-in flex flex-col justify-center lg:pb-20 pb-8 lg:justify-start text-center lg:text-left">
              <div className="space-y-4 mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block animate-slide-in-left">Invest smarter.</span>
                  <span className="block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>Stress less.</span>
                  <span className="block  bg-clip-text text-white animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                    Be a fincr.
                  </span>
                </h1>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-purple-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                You don't need to be an expert to build wealth. 
                With Egypt's first AI-powered investing - finc makes growing 
                your money simple, easy and worry-free.
              </p>
              
              <div className="animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 active:scale-95 mx-auto lg:mx-0 block lg:inline-block"
                >
                  <span className="relative z-10 text-white">Join the waitlist</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <p className="text-xs sm:text-sm text-purple-200 mt-4 animate-fade-in text-center lg:text-left" style={{ animationDelay: '1s' }}>
                  Early access. Limited spots. Your future's waiting.
                </p>
              </div>
            </div>
            
            {/* Right content - mobile mockup image */}
            <div className="flex justify-center items-center animate-slide-in-right h-full" style={{ animationDelay: '0.5s' }}>
              <div className="relative h-full lg:w-full md:w-[50%] w-[70%] !pb-0 flex items-end justify-center">
                <img 
                  src="/Mockup.png" 
                  alt="Finc mobile app mockup" 
                  className="h-full  lg:pt-40 pt-0 w-auto object-contain drop-shadow-2xl"
                  style={{ maxHeight: '100vh' }}
                />
                {/* Optional glow effect behind the image */}
                <div className="absolute inset-0 -z-10 blur-3xl opacity-30" style={{ 
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Inline styles for custom animations */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            
            @keyframes slideInLeft {
              from { 
                opacity: 0; 
                transform: translateX(-50px); 
              }
              to { 
                opacity: 1; 
                transform: translateX(0); 
              }
            }
            
            @keyframes slideInRight {
              from { 
                opacity: 0; 
                transform: translateX(50px); 
              }
              to { 
                opacity: 1; 
                transform: translateX(0); 
              }
            }

            @keyframes modalSlideIn {
              from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.9);
              }
              to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
              }
            }

            @keyframes backdropFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            
            .animate-fade-in {
              animation: fadeIn 1s ease-out forwards;
            }
            
            .animate-slide-in-left {
              animation: slideInLeft 0.8s ease-out forwards;
              opacity: 0;
            }
            
            .animate-slide-in-right {
              animation: slideInRight 0.8s ease-out forwards;
              opacity: 0;
            }

            .animate-modal-slide-in {
              animation: modalSlideIn 0.3s ease-out forwards;
            }

            .animate-backdrop-fade-in {
              animation: backdropFadeIn 0.3s ease-out forwards;
            }

            @keyframes spin {
              to { transform: rotate(360deg); }
            }

            .animate-spin {
              animation: spin 1s linear infinite;
            }

            @keyframes checkmark {
              0% { stroke-dashoffset: 16; }
              100% { stroke-dashoffset: 0; }
            }

            .animate-checkmark {
              animation: checkmark 0.6s ease-in-out forwards;
            }
          `
        }} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 backdrop-blur-sm animate-backdrop-fade-in"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-auto animate-modal-slide-in" style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}>
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 z-10"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="px-8 pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h3>
                <p className="text-gray-600">Be among the first to experience Egypt's first AI-powered investing platform.</p>
              </div>

              {/* Modal Body */}
              <div className="px-8 pb-8">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Enter your email address"
                        disabled={isLoading}
                      />
                    </div>

                    {error && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                        <p className="text-sm text-red-600">{error}</p>
                      </div>
                    )}

                    {rateLimitMessage && (
                      <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
                        <p className="text-sm text-orange-600">{rateLimitMessage}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading || !email}
                      className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Joining...</span>
                        </>
                      ) : (
                        <span>Join Waitlist</span>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      We'll notify you when we launch. No spam, ever.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7"
                          strokeDasharray="16"
                          className="animate-checkmark"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Welcome aboard! 🎉</h4>
                    <p className="text-gray-600">
                      You're now on the waitlist. We'll be in touch soon with exclusive early access.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}