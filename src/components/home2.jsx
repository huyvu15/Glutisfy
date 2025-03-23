import React from 'react';
import { motion } from 'framer-motion';

const Home2 = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Nav */}
      <nav className="w-full mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Glutisify
            </span>
          </div>

          <div className="hidden text-2xl lg:flex items-center space-x-8">
            {['Home', 'Benefits', 'About', 'Mint', 'Testimonials', 'FAQs'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Get Started
          </motion.button>

          <button className="lg:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="container mx-auto px-6 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12"
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Digital World,
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Beautifully Connected
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our AI platform aggregates social media data, revealing online activity. Showcase content, understand behavior, and gain insights with one tool.
            </p>

            <div className="flex gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-xl hover:shadow-2xl transition-shadow"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-700 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                Watch Demo ▶
              </motion.button>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center">
              <div className="flex -space-x-3">
                {[
                  '/images/ava5.jpg',
                  '/images/ava2.png',
                  '/images/ava3.jpg',
                  '/images/ava4.jpg'
                ].map((imageUrl, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full border-4 border-white shadow-lg"
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: 'cover'
                    }}
                  />
                ))}
              </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">15,000+</div>
                  <div className="text-gray-600">Happy Users</div>
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-7/12 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl transform rotate-6 scale-95 blur-2xl"></div>
          
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold">Your Social Universe</h3>
                <div className="flex items-center gap-2">
                  {['bg-red-400', 'bg-yellow-400', 'bg-green-400'].map((color, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${color}`}></div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                '/images/t.jpeg',
                '/images/4.jpg',
                '/images/2.jpg',
                '/images/X.jpg',
                '/images/6.jpg',
                '/images/8.jpg',
                '/images/iii.jpg',
                '/images/fff.webp',
              ].map((imageUrl, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-lg cursor-pointer"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover'
                  }}
                />
              ))}
            </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Total Reach', value: '5.2M', color: 'from-violet-600 to-fuchsia-600' },
                  { label: 'Engagement', value: '96%', color: 'from-fuchsia-600 to-rose-600' },
                  { label: 'Platforms', value: '20+', color: 'from-rose-600 to-orange-600' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20"
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 transform -rotate-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-14 h-14 rounded-full shadow-lg"
                  style={{
                    backgroundImage: `url('/images/ava.jpg')`,
                    backgroundSize: 'cover'
                  }}
                />
                <div>
                  <h4 className="font-bold">Alex Chen</h4>
                  <p className="text-gray-600">@alexcreates</p>
                </div>
              </div>
              
              {['Twitter', 'Instagram'].map((platform, i) => (
                <motion.button
                  key={platform}
                  whileHover={{ scale: 1.02 }}
                  className="w-full py-3 px-4 bg-gray-50 rounded-xl flex items-center justify-between mb-2 hover:bg-gray-100 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-4 h-4 rounded-full ${i === 0 ? 'bg-blue-400' : 'bg-gradient-to-br from-purple-400 to-pink-400'}`}></span>
                    <span>{platform}</span>
                  </span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home2;