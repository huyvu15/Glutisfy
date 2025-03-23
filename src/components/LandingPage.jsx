import React from 'react';
import { ChevronRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full"></div>
          <span className="font-semibold text-xl">Glutisify</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Benefits</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Mint</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Testimonials</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a>
        </div>
        
        <button className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600">
          Claim Your Link
        </button>
        
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              All Your Web3 Legacy, One Simple Link-in-bio
            </h1>
            <p className="text-gray-600 text-xl mb-8">
              Say hello to a unified link-in-bio for the Web3 community! Glutisify brings all your profiles together in one sleek page, making managing your digital identity simpler and cooler than ever.
            </p>
            <button className="bg-indigo-500 text-white px-8 py-3 rounded-full hover:bg-indigo-600 flex items-center gap-2">
              Claim Your Glutisify Link
              <ChevronRight size={20} />
            </button>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
              </div>
              <span className="text-gray-600">12,000+ users trusted Glutisify</span>
            </div>
          </div>
        {/* Right Content - Preview Cards */}
        <div className="lg:w-6/12 relative w-full max-w-lg lg:max-w-none mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl transform rotate-3 scale-95 blur-xl"></div>

            <div className="relative bg-white rounded-3xl shadow-lg p-4 sm:p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-bold">Your Social Dashboard</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-400"></div>
                </div>
              </div>

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

              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="text-base sm:text-xl font-bold text-gray-900">2.4M</div>
                  <div className="text-xs sm:text-sm text-gray-600">Total Followers</div>
                </div>
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="text-base sm:text-xl font-bold text-purple-600">85%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Engagement Rate</div>
                </div>
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="text-base sm:text-xl font-bold text-blue-600">12+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Platforms</div>
                </div>
              </div>
            </div>

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

export default LandingPage;