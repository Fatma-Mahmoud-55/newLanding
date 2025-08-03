"use client"
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionTitle from "../SectionTitle";


const SectionFive = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  const faqData = [
    {
      question: "🧠 Do I need to know anything about investing?",
      answer: (
        <div className="space-y-3">
          <p className="opacity-90">Not at all — that's exactly what finc is here for.</p>
          <p className="opacity-90">Whether you want to:</p>
          <p className="opacity-90">Let us handle everything with fully automated, expertly managed portfolios, or</p>
          <p className="opacity-90">Take the lead yourself using smart tools, clear insights, and expert guidance or both — finc adapts to you.</p>
          <p className="opacity-90">We simplify the complex. No finance degree. No confusing charts. No stress. Just intelligent investing - your way.</p>
        </div>
      )
    },
    {
      question: "💰 How much money do I need to start?",
      answer: (
        <div className="space-y-3">
          <p className="opacity-90">You can start investing with finc with as little as $1. There's no minimum balance required to get started.</p>
          <p className="opacity-90">Our platform is designed to be accessible to everyone, whether you're just beginning your investment journey or you're an experienced investor.</p>
        </div>
      )
    },
    {
      question: "📉 What happens if the market drops?",
      answer: (
        <div className="space-y-3">
          <p className="opacity-90">Market fluctuations are normal and expected in investing. When markets drop, finc's automated systems are designed to help protect your investments through diversification and smart rebalancing.</p>
          <p className="opacity-90">Our algorithms continuously monitor your portfolio and make adjustments as needed to help minimize risk during market downturns.</p>
        </div>
      )
    },
    {
      question: "🕊 Can I withdraw anytime?",
      answer: (
        <div className="space-y-3">
          <p className="opacity-90">Yes, you have full access to your money. You can withdraw your funds at any time without penalties from finc.</p>
          <p className="opacity-90">Withdrawals are typically processed within 1-3 business days, depending on your bank and the withdrawal method you choose.</p>
        </div>
      )
    },
    {
      question: "💸 How does finc make money?",
      answer: (
        <div className="space-y-3">
          <p className="opacity-90">finc charges a transparent, low management fee based on your account balance. There are no hidden fees or commissions.</p>
          <p className="opacity-90">Our fee structure is designed to align our interests with yours - we only succeed when your investments grow.</p>
        </div>
      )
    },
    {
      question: "🔐 Is finc safe to use?",
      answer: (
        <div className="space-y-3">
          <p className="opacity-90">Yes, finc prioritizes your security. We use bank-level encryption and security measures to protect your personal and financial information.</p>
          <p className="opacity-90">Your investments are held by regulated custodians and are protected by SIPC insurance up to $500,000.</p>
        </div>
      )
    },
    {
      question: "🤖 Is this all AI? No humans in the process?",
      answer: (
        <div className="space-y-3">
          <p className="opacity-90">While finc leverages advanced AI technology for portfolio management and optimization, we also have human experts overseeing the process.</p>
          <p className="opacity-90">Our team of financial professionals monitors the AI systems and is available to provide support when you need it.</p>
        </div>
      )
    },
    {
      question: "📲 When can I get access?",
      answer: (
        <div className="space-y-3">
          <p className="opacity-90">You can sign up for finc today! Once you complete the registration process, you'll have immediate access to start investing.</p>
          <p className="opacity-90">The onboarding process typically takes just a few minutes to complete.</p>
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
        rootMargin: '0px 0px -50px 0px'
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

  return (<>
        <div className="w-full py-8 bg-gradient-to-b from-purple-900 to-white opacity-20"></div>
    <div className="max-w-5xl mx-auto p-6  min-h-screen">
      
      {/* Header */}
      <SectionTitle
               subTitle="QUESTIONS AND ANSWERS PROVIDED BELOW"
               title="FAQ - got questions?"
             />

      <div className="space-y-2 mt-10 ">
        {faqData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
            className={`transform transition-all duration-700 ease-out ${
              visibleItems.has(index)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div className="bg-white rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full px-6 py-5 text-left font-medium hover:bg-gray-50  transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-gradient-to-r from-[#7F5AF0] via-[#9F80FF] to-[#CBB7FF] text-white shadow-sm' 
                    : 'text-gray-900 group-hover:bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="md:text-base text-sm font-semibold pr-4">{item.question}</span>
                  <div className={`transform transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                  }`}>
                    <ChevronDown 
                      className={`w-5 h-5 transition-colors duration-300 ${
                        openIndex === index ? 'text-white' : 'text-gray-500'
                      }`}
                    />
                  </div>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className={`px-6 pb-6 transition-all duration-300   pt-5 ${
                  openIndex === index ? 'bg-gradient-to-r from-[#7F5AF0] via-[#9F80FF] to-[#CBB7FF] text-white' : ''
                }`}>
                  <div className={`md:text-sm text-xs leading-relaxed transform transition-all duration-500 ${
                    openIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}>
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  </>);
};

export default SectionFive;