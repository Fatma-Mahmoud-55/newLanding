"use client"
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const SectionFiveV2 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  const faqData = [
    {
      question: "Do I need to know anything about investing?",
      answer: (
        <div className="space-y-4">
          <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Not at all — that's exactly what finc is here for.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Whether you want to:
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Let us handle everything with fully automated, expertly managed portfolios, or
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Take the lead yourself using smart tools, clear insights, and expert guidance or both — finc adapts to you.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            We simplify the complex. No finance degree. No confusing charts. No stress. Just intelligent investing - your way.
          </p>
        </div>
      )
    },
    {
      question: "How much money do I need to start?",
      answer: (
        <div className="space-y-4">
          <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            You can start investing with finc with as little as $1. There's no minimum balance required to get started.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our platform is designed to be accessible to everyone, whether you're just beginning your investment journey or you're an experienced investor.
          </p>
        </div>
      )
    },
    {
      question: "What happens if the market drops?",
      answer: (
        <div className="space-y-4">
          <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Market fluctuations are normal and expected in investing. When markets drop, finc's automated systems are designed to help protect your investments through diversification and smart rebalancing.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our algorithms continuously monitor your portfolio and make adjustments as needed to help minimize risk during market downturns.
          </p>
        </div>
      )
    },
    {
      question: "Can I withdraw anytime?",
      answer: (
        <div className="space-y-4">
          <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Yes, you have full access to your money. You can withdraw your funds at any time without penalties from finc.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Withdrawals are typically processed within 1-3 business days, depending on your bank and the withdrawal method you choose.
          </p>
        </div>
      )
    },
    {
      question: "How does finc make money?",
      answer: (
        <div className="space-y-4">
          <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            finc charges a transparent, low management fee based on your account balance. There are no hidden fees or commissions.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our fee structure is designed to align our interests with yours - we only succeed when your investments grow.
          </p>
        </div>
      )
    },
    {
      question: "Is finc safe to use?",
      answer: (
        <div className="space-y-4">
          <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Yes, finc prioritizes your security. We use bank-level encryption and security measures to protect your personal and financial information.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your investments are held by regulated custodians and are protected by SIPC insurance up to $500,000.
          </p>
        </div>
      )
    },
    {
      question: "Is this all AI? No humans in the process?",
      answer: (
        <div className="space-y-4">
          <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            While finc leverages advanced AI technology for portfolio management and optimization, we also have human experts overseeing the process.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our team of financial professionals monitors the AI systems and is available to provide support when you need it.
          </p>
        </div>
      )
    },
    {
      question: "When can I get access?",
      answer: (
        <div className="space-y-4">
          <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            You can sign up for finc today! Once you complete the registration process, you'll have immediate access to start investing.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            The onboarding process typically takes just a few minutes to complete.
          </p>
        </div>
      )
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(139, 92, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in {
          animation: slideInFromLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse 2s infinite;
        }

        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(45deg, #8b5cf6, #a855f7, #c084fc);
          background-size: 300% 300%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .glass-morphism {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen">
        {/* Header with floating animation */}
        <div className="text-center mb-12 animate-float">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`glass-morphism rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-500 ${
                visibleItems.has(index) 
                  ? 'animate-slide-in' 
                  : 'opacity-0 translate-x-[-50px]'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full px-8 py-6 text-left font-semibold text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-500 ease-out group relative overflow-hidden ${
                  openIndex === index 
                    ? 'gradient-border text-white' 
                    : 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                }`}
              >
                {openIndex === index && (
                  <div className="absolute inset-0 shimmer-effect"></div>
                )}
                
                <div className="flex justify-between items-center relative z-10">
                  <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">
                    {item.question}
                  </span>
                  <div className={`relative ${openIndex === index ? 'animate-pulse-ring' : ''}`}>
                    <ChevronDown 
                      className={`w-6 h-6 transition-all duration-500 ease-out ${
                        openIndex === index 
                          ? 'transform rotate-180 scale-110' 
                          : 'group-hover:scale-110 group-hover:rotate-12'
                      }`}
                    />
                  </div>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-700 ease-out ${
                openIndex === index 
                  ? 'max-h-[500px] opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className={`px-8 pb-8 transition-all duration-500 ${
                  openIndex === index 
                    ? 'gradient-border text-white' 
                    : ''
                }`}>
                  <div className="text-base leading-relaxed relative">
                    {openIndex === index && (
                      <div className="absolute inset-0 shimmer-effect opacity-20"></div>
                    )}
                    <div className="relative z-10">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating elements for visual interest */}
        <div className="fixed top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="fixed top-40 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="fixed bottom-32 left-20 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </>
  );
};

export default SectionFiveV2;