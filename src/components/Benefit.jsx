import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, BarChart3, Users2, Globe, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Quick Setup",
      description: "Get your professional profile up and running in minutes"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Reach",
      description: "Connect with your audience across all social platforms"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics",
      description: "Track performance with detailed insights and metrics"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Community",
      description: "Join a network of creators and grow together"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Presence",
      description: "Reach audiences worldwide with multilingual support"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade protection for your digital presence"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-rose-50" id="benefits">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Unlock Your Digital
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent"> Potential</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your online presence with our powerful features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center text-white">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Start Growing Your
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent"> Audience Today</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { value: "500K+", label: "Active Users" },
                  { value: "10M+", label: "Monthly Views" },
                  { value: "95%", label: "Satisfaction Rate" },
                  { value: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-medium shadow-lg"
              >
                Get Started Free
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;