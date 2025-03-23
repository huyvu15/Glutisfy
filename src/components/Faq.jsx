import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How does Glutisfy unify my digital presence?",
      answer: "We create a single, dynamic profile that pulls real-time content from multiple platforms. Connect your accounts once and showcase your entire digital narrative seamlessly.",
      category: "Integration"
    },
    {
      question: "What social platforms are supported?",
      answer: "We support major platforms including Instagram, Twitter, LinkedIn, TikTok, YouTube, Facebook, Pinterest, and Twitch. Our network is constantly expanding.",
      category: "Connectivity"
    },
    {
      question: "Can I control my content visibility?",
      answer: "Absolutely. Set granular privacy controls for each platform. Choose exactly what content appears, create custom views, and manage your digital identity with precision.",
      category: "Privacy"
    },
    {
      question: "Is my data secure?",
      answer: "We use bank-grade encryption, OAuth authentication, and never store your login credentials. Your data remains yours, with transparent, secure connections.",
      category: "Security"
    },
    {
      question: "What makes Glutisfy different?",
      answer: "Unlike traditional aggregators, we offer intelligent content curation, cross-platform analytics, and a beautiful, responsive digital portfolio that evolves with your online presence.",
      category: "Unique Value"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 flex justify-center items-center">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="text-left">
            <h2 className="text-5xl font-bold text-gray-900">
              Your Questions, <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Answered</span>
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Discover how Glutisfy transforms your digital identity into a powerful, unified narrative.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
                  <div 
                    className="flex items-center justify-between p-5 cursor-pointer group"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-2 rounded-xl">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-6 w-6 text-indigo-600"
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                          {faq.question}
                        </h3>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">
                          {faq.category}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: activeIndex === index ? 45 : 0 }}
                      className="text-2xl font-light text-gray-400 hover:text-indigo-600"
                    >
                      +
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 bg-gray-50"
                      >
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
