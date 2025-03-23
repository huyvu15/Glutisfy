import { X, Instagram, Twitter, Facebook, ArrowRight, Mail, Globe, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const socialLinks = [
    { icon: <Twitter size={24} />, href: "#", label: "Twitter" },
    { icon: <X size={24} />, href: "#", label: "X" },
    { icon: <Instagram size={24} />, href: "#", label: "Instagram" },
    { icon: <Facebook size={24} />, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="w-full bg-[#0A0F1F] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="text-left">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-[#4169E1] via-[#00CED1] to-purple-500 text-transparent bg-clip-text">
            Glutisify
          </h3>
          <p className="text-[#B0B7D1] text-lg leading-relaxed mt-4">
            Building the future of digital identity management.
          </p>
          <div className="flex gap-6 mt-6">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="text-[#B0B7D1] hover:text-white transition">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Stay Connected</h3>
          <p className="text-[#B0B7D1] text-lg">Get updates and early access to new features.</p>
          <div className="flex items-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-[#1A1F3F] border border-[#4169E1] rounded-lg px-4 py-3 text-white focus:outline-none"
            />
            <button className="bg-[#4169E1] px-6 py-3 rounded-lg font-bold hover:bg-[#00CED1] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-12 border-t border-[#4169E1] pt-6 flex flex-col md:flex-row justify-between items-center text-[#B0B7D1]">
        <p>© {currentYear} Glutisify. All rights reserved.</p>
        <div className="flex gap-6">
          {['Terms', 'Privacy', 'Support'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
// import { X, Instagram, Twitter, Facebook, ArrowRight, Mail, Globe, Sparkles } from 'lucide-react';
// import { useState } from 'react';

// export default function Footer() {
//   const currentYear = new Date().getFullYear();
//   const [email, setEmail] = useState('');
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   const socialLinks = [
//     { 
//       icon: <Twitter size={32} />, 
//       href: "#", 
//       label: "Twitter",
//       hoverColor: "hover:text-[#1DA1F2]",
//       bgColor: "group-hover:bg-[#1DA1F2]"
//     },
//     { 
//       icon: <X size={32} />, 
//       href: "#", 
//       label: "X",
//       hoverColor: "hover:text-zinc-100",
//       bgColor: "group-hover:bg-zinc-100"
//     },
//     { 
//       icon: <Instagram size={32} />, 
//       href: "#", 
//       label: "Instagram",
//       hoverColor: "hover:text-[#E4405F]",
//       bgColor: "group-hover:bg-[#E4405F]"
//     },
//     { 
//       icon: <Facebook size={32} />, 
//       href: "#", 
//       label: "Facebook",
//       hoverColor: "hover:text-[#1877F2]",
//       bgColor: "group-hover:bg-[#1877F2]"
//     }
//   ];

//   return (
//     <div className="w-full">
//       {/* Enhanced CTA Section */}
//       <div className="w-full relative overflow-hidden bg-[#0A0F1F]">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F3F]/80 via-[#0A0F1F] to-[#0A0F1F]"></div>
        
//         {/* Enhanced Animated Background */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-1/4 w-[32rem] h-[32rem] bg-[#4169E1] rounded-full mix-blend-screen filter blur-[160px] animate-pulse"></div>
//           <div className="absolute top-40 right-1/4 w-[32rem] h-[32rem] bg-[#00CED1] rounded-full mix-blend-screen filter blur-[160px] animate-pulse delay-700"></div>
//           <div className="absolute bottom-20 left-1/3 w-[24rem] h-[24rem] bg-purple-500 rounded-full mix-blend-screen filter blur-[140px] animate-pulse delay-500"></div>
//         </div>

//         <div className="relative">
//           <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4169E1] to-transparent opacity-50"></div>

//           <div className="py-48 px-4 max-w-7xl mx-auto">
//             <div className="text-center space-y-16">
//               <div className="inline-block animate-float">
//                 <div className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A1F3F]/80 border border-[#4169E1]/30 backdrop-blur-xl shadow-lg shadow-[#4169E1]/10">
//                   <Sparkles className="w-6 h-6 text-[#4169E1] animate-pulse" />
//                   <span className="text-[#E0E7FF] font-semibold text-lg">Premium Experience</span>
//                 </div>
//               </div>

//               <div className="relative">
//                 <h1 className="text-8xl md:text-[10rem] font-black text-white leading-tight tracking-tight">
//                   Digital Identity
//                   <br />
//                   <span className="bg-gradient-to-r from-[#4169E1] via-[#00CED1] to-[#4169E1] text-transparent bg-clip-text animate-gradient-x">
//                     Reimagined
//                   </span>
//                 </h1>
//                 <div className="absolute -inset-x-8 -inset-y-8 bg-gradient-to-r from-[#4169E1] to-[#00CED1] opacity-10 blur-[100px] -z-10"></div>
//               </div>

//               <p className="text-[#B0B7D1] text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-light">
//                 Experience the future of digital presence with our innovative platform.
//                 Join the elite community of digital pioneers.
//               </p>

//               <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
//                 <button 
//                   className="group relative px-14 py-7 rounded-2xl overflow-hidden bg-gradient-to-r from-[#4169E1] to-[#00CED1] shadow-lg shadow-[#4169E1]/20 hover:shadow-xl hover:shadow-[#4169E1]/30 transition-all duration-500"
//                   onMouseMove={handleMouseMove}
//                 >
//                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
//                   <span className="relative z-10 flex items-center gap-4 text-white font-bold text-2xl">
//                     Get Started
//                     <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
//                   </span>
//                 </button>

//                 <button className="group px-14 py-7 rounded-2xl font-bold text-2xl border-2 border-[#4169E1]/30 text-black 
//                   bg-white hover:bg-[#1A1F3F] hover:border-[#4169E1] hover:text-white transition-all duration-300 flex items-center gap-4 backdrop-blur-xl">
//                   <Globe className="w-7 h-7" />
//                   Explore Demo
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Newsletter Section */}
//       <div className="relative max-w-6xl mx-auto px-6 -mt-40 mb-32">
//         <div className="relative bg-[#1A1F3F]/90 backdrop-blur-2xl rounded-3xl p-20 border border-[#4169E1]/30 overflow-hidden shadow-xl shadow-[#4169E1]/10">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#4169E1]/10 to-[#00CED1]/10"></div>
          
//           <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
//             <div className="space-y-8">
//               <h3 className="text-5xl font-bold text-white leading-tight">
//                 Stay Connected
//               </h3>
//               <p className="text-[#B0B7D1] text-2xl leading-relaxed font-light">
//                 Get exclusive updates and early access to new features.
//                 Be the first to experience innovation.
//               </p>
//             </div>
//             <div className="space-y-8">
//               <input 
//                 type="email" 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="w-full bg-[#0A0F1F]/70 border-2 border-[#4169E1]/30 rounded-xl px-8 py-5 text-xl text-white 
//                   placeholder-[#B0B7D1]/50 focus:outline-none focus:border-[#4169E1] focus:ring-4 
//                   focus:ring-[#4169E1]/20 transition-all duration-300"
//               />
//               <button className="w-full bg-gradient-to-r from-[#4169E1] to-[#00CED1] text-white rounded-xl 
//                 px-8 py-5 font-semibold text-xl hover:opacity-90 transform hover:-translate-y-1 hover:shadow-lg 
//                 hover:shadow-[#4169E1]/25 transition-all duration-300 flex items-center justify-center gap-4">
//                 <Mail className="w-6 h-6" />
//                 <span>Subscribe Now</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Footer */}
//       <footer className="w-full bg-[#0A0F1F] relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F3F]/50 to-[#0A0F1F]"></div>
        
//         <div className="max-w-7xl mx-auto px-6 relative">
//           <div className="py-32 grid grid-cols-1 md:grid-cols-4 gap-20 border-b border-[#4169E1]/20">
//             <div className="space-y-10">
//               <h3 className="text-4xl font-bold bg-gradient-to-r from-[#4169E1] via-[#00CED1] to-purple-500 text-transparent bg-clip-text">
//                 Glutisify
//               </h3>
//               <p className="text-[#B0B7D1] text-xl leading-relaxed">
//                 Building the future of digital identity management.
//                 Join us in revolutionizing online presence.
//               </p>
//               <div className="flex gap-8">
//                 {socialLinks.map((social) => (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     className="group relative"
//                     aria-label={social.label}
//                   >
//                     <div className="absolute inset-0 bg-white/0 rounded-lg -m-2 transition-colors duration-300"></div>
//                     <div className={`text-[#B0B7D1] ${social.hoverColor} transform transition-all duration-300 group-hover:scale-110`}>
//                       {social.icon}
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
            
//             {['Platform', 'Resources', 'Company'].map((section) => (
//               <div key={section} className="space-y-10">
//                 <h3 className="text-3xl font-bold text-white">{section}</h3>
//                 <ul className="space-y-8">
//                   {[1, 2, 3, 4].map((item) => (
//                     <li key={item}>
//                       <a href="#" className="group text-[#B0B7D1] hover:text-white text-lg flex items-center">
//                         <span className="relative overflow-hidden">
//                           <span className="relative inline-block transform group-hover:translate-x-3 transition-transform duration-300">
//                             {`${section} Link ${item}`}
//                           </span>
//                           <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#4169E1] to-[#00CED1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//                         </span>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
          
//           <div className="py-16 flex flex-col md:flex-row justify-between items-center gap-10">
//             <div className="text-[#B0B7D1] text-xl">
//               © {currentYear}{' '}
//               <span className="text-[#4169E1] font-semibold">Glutisify</span>
//               . All rights reserved.
//             </div>
            
//             <div className="flex items-center gap-16">
//               {['Terms', 'Privacy', 'Support'].map((item) => (
//                 <a key={item} href="#" 
//                   className="text-xl text-[#B0B7D1] hover:text-white relative group overflow-hidden">
//                   <span className="relative inline-block">
//                     <span className="relative inline-block transform group-hover:translate-y-[-2px] transition-transform duration-300">
//                       {item}
//                     </span>
//                     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#4169E1] to-[#00CED1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }