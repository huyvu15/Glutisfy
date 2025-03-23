import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight, Menu, Star } from 'lucide-react';


const Home = () => {
  return (
    // <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 overflow-hidden">

      {/* Navigation */}
      <nav className="w-full mx-auto px-4 sm:px-6 py-4 fixed top-0 left-0 z-10 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">

      
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 lg:ml-20">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Glutisfy
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#home" className="text-sm xl:text-xl text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#benefits" className="text-sm xl:text-xl text-gray-600 hover:text-gray-900 transition-colors">Benefits</a>
            <a href="#about" className="text-sm xl:text-xl text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#mint" className="text-sm xl:text-xl text-gray-600 hover:text-gray-900 transition-colors">Mint</a>
            <a href="#testimonials" className="text-sm xl:text-xl text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
            <a href="#faqs" className="text-sm xl:text-xl text-gray-600 hover:text-gray-900 transition-colors">FAQs</a>
          </div>

          {/* CTA Button */}
          <button className="hidden lg:block px-4 xl:px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm xl:text-base font-medium hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300">
            Claim Your Link
          </button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full w-full mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-12 sm:pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          {/* <div className="lg:w-6/12 max-w-xl lg:max-w-none ml-6 sm:ml-2"> */}
          <div className="flex-1 ml-10 lg:ml-20 xl:ml-32">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Your Digital Identity, 
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Unified & Beautiful
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              One link to showcase all your social media profiles, content, and achievements. Make your online presence more professional and engaging than ever before.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm sm:text-base font-medium hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300">
                Get Started — It's Free
              </button>
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-700 rounded-full text-sm sm:text-base font-medium hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 border border-gray-200">
                Watch Demo ▶
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 sm:border-4 border-white shadow-sm"
                    style={{
                      backgroundImage: `url('/api/placeholder/40/40')`,
                      backgroundSize: 'cover'
                    }}
                  />
                ))}
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-gray-900">12,000+</div>
                <div className="text-sm sm:text-base text-gray-600">Active Users</div>
              </div>
              <div className="hidden sm:block w-px h-8 sm:h-10 bg-gray-200"></div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm sm:text-base text-gray-600">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Preview Cards */}
          <div className="lg:w-6/12 relative w-full max-w-lg lg:max-w-none mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl transform rotate-3 scale-95 blur-xl"></div>

            {/* Main Preview Card */}
            <div className="relative bg-white rounded-3xl shadow-lg p-4 sm:p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-bold">Your Social Dashboard</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-400"></div>
                </div>
              </div>

              {/* Profile Grid */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div 
                    key={i}
                    className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md"
                    style={{
                      backgroundImage: `url('/api/placeholder/80/80')`,
                      backgroundSize: 'cover'
                    }}
                  />
                ))}
              </div>

              {/* Stats Row */}
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

            {/* Floating Card */}
            <div className="absolute top-6 -right-4 sm:-right-8 bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 transform -rotate-3">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md"
                  style={{
                    backgroundImage: `url('/api/placeholder/48/48')`,
                    backgroundSize: 'cover'
                  }}
                />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Sarah Parker</h4>
                  <p className="text-xs sm:text-sm text-gray-600">@sarahcreates</p>
                </div>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <button className="w-full py-1.5 sm:py-2 px-2 sm:px-3 bg-gray-50 rounded-lg sm:rounded-xl flex items-center justify-between hover:bg-gray-100 transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-400 rounded-full"></span>
                    <span className="text-xs sm:text-sm">Twitter</span>
                  </span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="w-full py-1.5 sm:py-2 px-2 sm:px-3 bg-gray-50 rounded-lg sm:rounded-xl flex items-center justify-between hover:bg-gray-100 transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></span>
                    <span className="text-xs sm:text-sm">Instagram</span>
                  </span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;