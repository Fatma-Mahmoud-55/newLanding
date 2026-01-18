"use client"
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionTitle from "../../SectionTitle";


const SectionFive2 = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [visibleItems, setVisibleItems] = useState(new Set());
    const itemRefs = useRef([]);

    const faqData = [
        {
            question: "🧠 Do I need to know anything about investing?",
            answer: (
                <div className="space-y-1">
                    <p className="opacity-90">Not at all! That’s exactly what finc is here for.</p>
                    <p className="opacity-90">Whether you want to:</p>
                    <p className="opacity-90">Let us handle everything with fully automated, expertly managed portfolios, executed by our licensed partner .</p>
                    <p className="opacity-90">Take the lead yourself using smart tools, clear insights, and expert guidance or
                        both - finc adapts to you.</p>
                    <p className="opacity-90">We simplify the complex. No finance degree. No confusing charts. No stress.
                        Just intelligent investing, your way.</p>
                </div>
            )
        },
        {
            question: "💰 How much money do I need to start?",
            answer: (
                <div className="space-y-1">


                    <p className="opacity-90"></p>
                    <p className="opacity-90">You can start with just EGP 500 in your automated portfolio - fully managed by finc’s advanced algorithms, AI models and financial experts.</p>
                    <p className="opacity-90">We also offer multiple tiers based on how involved you want to be.</p>
                    <p className="opacity-90">Every tier includes smart, automated investing powered by our algorithms and tailored to your goals.</p>
                    <p className="opacity-90">From Beginner (free) for market access and insights, to Growth for a mix of automation,   tailored advice and strong support tools like fincr score, all the way to Wealth+ - built for those who want powerful advanced tools to research, build, and manage portfolios on their own.</p>




                </div>
            )
        },
        {
            question: "📉 What happens if the market drops?",
            answer: (
                <div className="space-y-1">
                    <p className="opacity-90">We’ve got your back.</p>
                    <p className="opacity-90">finc diversifies your portfolio and adjusts based on your risk profile - automatically.</p>
                    <p className="opacity-90">It’s like having a money brain that doesn’t panic.</p>
                </div>
            )
        },
        {
            question: "🕊 Can I withdraw anytime?",
            answer: (
                <div className="space-y-1">
                    <p className="opacity-90"> Absolutely. </p>
                    <p className="opacity-90">It’s your money. Take it out whenever you want — no lock-ins, no exit fees, no guilt trips.</p>
                </div>
            )
        },
        {
            question: "💸 How does finc make money?",
            answer: (
                <div className="space-y-1">
                    <p className="opacity-90">We believe in radical transparency. </p>
                    <p className="opacity-90">
                        finc charges only transaction fees and a small management fee on the money you let us manage for you (for every EGP20k we manage - we take EGP200 annually) — and that’s it. <br/>Shared with Licensed AMC</p>
                    <p className="opacity-90">We also offer three clear subscription tiers with extra features to empower you to go deeper, track smarter, and even manage your own portfolio(s) if you want to.</p>
                    <p className="opacity-90">


                        No hidden fees.<br/>
                        No commissions.<br/>
                        No funny business.
                    </p>

                </div>
            )
        },
        {
            question: "🔐 Is finc safe to use?",
            answer: (
                <div className="space-y-1">
                    <p className="opacity-90">
                        Yes.<br/>
                        We use bank-grade encryption, secure servers, and strict regulatory compliance to keep your data and funds safe. We're also working closely with regulators in Egypt to stay fully transparent and compliant.
                    </p>
                </div>
            )
        },
        {
            question: "🤖 Is this all AI? No humans in the process?",
            answer: (
                <div className="space-y-1">

                    <p className="opacity-90">
                        Not at all.<br/>
                        finc uses AI to empower you - and our team - not replace anyone. <br/> Think: smarter decisions, less guesswork, better outcomes.
                    </p>
                    <p className="opacity-90">
                        Behind the tech, we’ve got real industry experts and investment professionals making sure everything stays sharp, safe, and aligned with your goals.
                    </p>
                    <p className="opacity-90">
                        You stay in control. We just make it easier... Much easier.
                    </p>
                </div>
            )
        },
        {
            question: "📲 When can I get access?",
            answer: (
                <div className="space-y-1">
                    <p className="opacity-90">
                        We’re launching soon and waitlist members get early access!
                    </p>
                    <p className="opacity-90">
                        Join now to unlock early access, special perks, and updates as we roll out. <br/> Spots are limited, but your future isn’t.
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
        <div className="max-w-5xl mx-auto p-6 mt-6  min-h-screen">

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
                                        ? 'bg-gradient-to-r from-[#7F5AF0] via-[#9F80FF] to-[#CBB7FF] text-white'
                                        : 'text-gray-900 group-hover:bg-gray-50'
                                }`}
                            >
                                <div className="flex justify-between items-center">
                                    <span className="md:text-base text-md font-semibold pr-4">{item.question}</span>
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
                                <div className={`px-6 pb-6 transition-all duration-300  -mt-3 ${
                                    openIndex === index ? 'bg-gradient-to-r from-[#7F5AF0] via-[#9F80FF] to-[#CBB7FF] text-white' : ''
                                }`}>
                                    <div className={`md:text-sm text-xs leading-relaxed transform pt-4 transition-all duration-500 ${
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

export default SectionFive2;