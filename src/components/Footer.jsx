// import { X, Instagram, Twitter, Facebook, ArrowRight, Mail, Globe, Sparkles } from 'lucide-react';
import { X, Instagram, Twitter, Facebook, ArrowRight, Mail, Globe, Sparkles, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const socialLinks = [
    { 
      icon: <Twitter size={32} />, 
      href: "#", 
      label: "Twitter",
      gradient: "from-blue-400 to-blue-600"
    },
    { 
      icon: <X size={32} />, 
      href: "#", 
      label: "X",
      gradient: "from-gray-100 to-gray-300"
    },
    { 
      icon: <Instagram size={32} />, 
      href: "#", 
      label: "Instagram",
      gradient: "from-pink-500 via-purple-500 to-orange-500"
    },
    { 
      icon: <Facebook size={32} />, 
      href: "#", 
      label: "Facebook",
      gradient: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <div className="w-full">
      {/* Premium CTA Section */}
      <div className="w-full bg-black relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-950 opacity-80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(0,0,0,0))]"></div>
        </div>
        
        {/* 3D Grid Effect */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 2px, transparent 0)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(1000px) rotateX(30deg) scale(2)',
          transformOrigin: 'center center',
          opacity: 0.3
        }}></div>

        <div className="relative">
          {/* Top Decorative Bar */}
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          <div className="py-40 px-4 max-w-7xl mx-auto">
            <div className="text-center space-y-12">
              {/* Premium Badge */}
              <div className="inline-block animate-float">
                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <span className="text-white/90 font-medium">Premium Experience</span>
                </div>
              </div>

              {/* Main Heading with 3D Effect */}
              <div className="relative">
                <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 leading-tight">
                  Future of Digital
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text animate-gradient-x">
                    Identity
                  </span>
                </h1>
                <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl -z-10"></div>
              </div>

              <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                Join the elite community of Web3 innovators and experience the next 
                generation of digital presence management.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                {/* Primary CTA Button */}
                <button
                    className="group relative px-12 py-6 rounded-2xl overflow-hidden 
                              bg-gradient-to-r from-purple-700 via-purple-600 to-blue-500 
                              text-white font-bold text-xl border-2 border-transparent 
                              hover:bg-white hover:text-purple-900 hover:border-purple-500 transition-all duration-300"
                    onMouseMove={handleMouseMove}
                  >
                    {/* Hiệu ứng gradient hover */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 
                                group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        mask: `radial-gradient(80px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                        WebkitMask: `radial-gradient(80px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                      }}
                    ></div>

                    {/* Nội dung nút */}
                    <span className="relative z-10 flex items-center gap-3">
                      Get Started
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>

                {/* Secondary CTA Button */}
                <button className="group px-12 py-6 rounded-2xl font-bold text-xl border-2 border-white/20 text-black
                                  hover:bg-white/10 hover:text-white backdrop-blur-xl transition-all duration-300 flex  items-center gap-3">
                  <Globe className="w-6 h-6" />
                  Explore Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Newsletter Section */}
      <div className="relative max-w-6xl mx-auto px-6 -mt-32 mb-24">
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-16 border border-white/10 shadow-2xl overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-30"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 2px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}></div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Join Our Newsletter
              </h3>
              <p className="text-gray-400 text-xl leading-relaxed">
                Get exclusive updates about new features, early access to beta releases, 
                and special offers directly to your inbox.
              </p>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white 
                    placeholder-white/30 focus:outline-none focus:border-purple-500 focus:ring-2 
                    focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl 
                px-8 py-4 font-semibold hover:opacity-90 transform hover:-translate-y-1 hover:shadow-lg 
                hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-3">
                <Mail className="w-5 h-5" />
                <span>Subscribe Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="w-full bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 to-black"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Main Footer Content */}
          <div className="py-24 grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/10">
            {/* Brand Section */}
            <div className="space-y-8">
              <h3 className="font-bold text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Glutisify
              </h3>
              <p className="text-[#B0B7D1] text-xl leading-relaxed">
                Revolutionizing digital identity management in the Web3 era. Join us in 
                building the future of online presence.
              </p>
              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group relative"
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 
                      rounded-lg blur transition-all duration-300 group-hover:opacity-70 opacity-0">
                    </div>
                    <div className="relative p-2 text-white/70 hover:text-white transform 
                      hover:-translate-y-1 transition-all duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Footer Links Sections */}
            {['Platform', 'Resources', 'Company'].map((section) => (
              <div key={section} className="space-y-8">
                <h3 className="font-bold text-2xl text-white">{section}</h3>
                <ul className="space-y-6">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item}>
                      <a href="#" className="group text-white/70 hover:text-white text-lg flex items-center">
                      <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        <span className="relative">
                          <span className="relative inline-block transform group-hover:translate-x-2 transition-transform duration-300">
                            {`${section} Link ${item}`}
                          </span>
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r 
                            from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Bottom Bar */}
          <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white/50 text-lg">
              © {currentYear}{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-semibold">
                Glutisify
              </span>
              . All rights reserved.
            </div>
            
            <div className="flex items-center gap-12">
              {['Terms', 'Privacy', 'Support'].map((item) => (
                <a key={item} href="#" 
                  className="text-lg text-white/50 hover:text-white relative group">
                  <span className="relative">
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r 
                      from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300">
                    </span>
                    {item}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}