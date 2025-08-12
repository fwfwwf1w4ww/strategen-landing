import React from 'react';
import { motion } from 'framer-motion';

export default function StrategenLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#323053] via-[#2a2845] to-[#1f1d35] text-white font-sans overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#C0CF2E] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#97A036] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <header className="relative max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C0CF2E] to-[#97A036] flex items-center justify-center font-bold text-[#323053] shadow-lg">
            <span className="text-xl">S</span>
          </div>
          <h1 className="font-bold text-xl bg-gradient-to-r from-[#C0CF2E] to-[#97A036] bg-clip-text text-transparent">Strategen</h1>
        </motion.div>
        <motion.nav 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex gap-8 text-gray-200"
        >
          <a href="#services" className="hover:text-[#C0CF2E] transition-colors duration-300 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C0CF2E] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#work" className="hover:text-[#C0CF2E] transition-colors duration-300 relative group">
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C0CF2E] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-[#C0CF2E] transition-colors duration-300 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C0CF2E] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="bg-gradient-to-r from-[#97A036] to-[#C0CF2E] text-[#323053] px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">Get a Quote</a>
        </motion.nav>
      </header>

      {/* Hero */}
      <main className="relative max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-12 items-center py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-[#C0CF2E]/10 border border-[#C0CF2E]/30 rounded-full text-[#C0CF2E] text-sm font-medium">
              🚀 Gen Z Marketing Agency
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-[#C0CF2E] via-[#97A036] to-[#C0CF2E] bg-clip-text text-transparent">
                Digital marketing
              </span>
              <br />
              <span className="text-white">for brands that</span>
              <br />
              <span className="bg-gradient-to-r from-[#C0CF2E] to-[#97A036] bg-clip-text text-transparent">
                want to stand out
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              At Strategen, we create viral campaigns, impactful designs, and growth strategies to turn your audience into loyal customers.
            </p>
            <div className="flex gap-4 pt-4">
              <motion.a 
                href="#contact" 
                className="bg-gradient-to-r from-[#C0CF2E] to-[#97A036] text-[#323053] px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Work with us
                <span className="text-lg">→</span>
              </motion.a>
              <motion.a 
                href="#services" 
                className="border-2 border-[#C0CF2E] text-[#C0CF2E] px-8 py-4 rounded-full hover:bg-[#C0CF2E] hover:text-[#323053] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }} 
            animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#505650] to-[#677D3D] p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C0CF2E]/20 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80" 
                alt="marketing" 
                className="w-full h-80 object-cover rounded-2xl relative z-10" 
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4 z-20">
                <p className="text-white text-sm font-medium">Viral campaigns that convert</p>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#C0CF2E] rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#97A036] rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-[#C0CF2E] mb-4">Our Services</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We offer comprehensive digital marketing solutions tailored for the modern brand
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Social Media Growth', 
                desc: 'We help you grow and engage your audience with platform-specific strategies that drive real results.',
                icon: '📈',
                color: 'from-[#C0CF2E] to-[#97A036]'
              },
              { 
                title: 'Creative Campaigns', 
                desc: 'Designing campaigns that grab attention and convert with cutting-edge creative strategies.',
                icon: '🎨',
                color: 'from-[#97A036] to-[#C0CF2E]'
              },
              { 
                title: 'Performance Marketing', 
                desc: 'Optimized ads, funnels, and retargeting to maximize ROI and drive sustainable growth.',
                icon: '⚡',
                color: 'from-[#C0CF2E] to-[#97A036]'
              },
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-[#505650] to-[#677D3D] p-8 rounded-2xl hover:bg-gradient-to-br hover:from-[#677D3D] hover:to-[#505650] transition-all duration-500 border border-[#C0CF2E]/20 hover:border-[#C0CF2E]/40 hover:shadow-2xl hover:shadow-[#C0CF2E]/10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-[#C0CF2E] group-hover:text-white transition-colors duration-300">{service.title}</h4>
                  <p className="text-gray-200 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#677D3D] via-[#97A036] to-[#C0CF2E] p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">About Us</h3>
                <p className="text-lg max-w-4xl leading-relaxed">
                  Strategen is a Gen Z-focused marketing agency that blends creativity and data to build lasting brand-audience relationships. 
                  Our team thrives on cultural trends, innovation, and measurable results that drive real business growth.
                </p>
                <div className="mt-8 flex gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-sm opacity-80">Campaigns Launched</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">2M+</div>
                    <div className="text-sm opacity-80">Audience Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-sm opacity-80">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-[#C0CF2E] mb-4">Get in Touch</h3>
            <p className="text-gray-300 text-lg">Ready to transform your brand? Let's start the conversation.</p>
          </motion.div>
          <motion.form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            className="grid gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                name="name" 
                placeholder="Your Name" 
                className="bg-[#505650] px-6 py-4 rounded-xl text-white outline-none border border-[#C0CF2E]/20 focus:border-[#C0CF2E] focus:ring-2 focus:ring-[#C0CF2E]/20 transition-all duration-300" 
                required 
              />
              <input 
                name="email" 
                type="email" 
                placeholder="Your Email" 
                className="bg-[#505650] px-6 py-4 rounded-xl text-white outline-none border border-[#C0CF2E]/20 focus:border-[#C0CF2E] focus:ring-2 focus:ring-[#C0CF2E]/20 transition-all duration-300" 
                required 
              />
            </div>
            <textarea 
              name="message" 
              placeholder="Tell us about your project..." 
              className="bg-[#505650] px-6 py-4 rounded-xl text-white outline-none border border-[#C0CF2E]/20 focus:border-[#C0CF2E] focus:ring-2 focus:ring-[#C0CF2E]/20 transition-all duration-300 min-h-[140px] resize-none" 
              required 
            />
            <motion.button 
              type="submit" 
              className="bg-gradient-to-r from-[#C0CF2E] to-[#97A036] text-[#323053] px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-[#505650] text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C0CF2E] to-[#97A036] flex items-center justify-center font-bold text-[#323053] text-sm">
                S
              </div>
              <span>© {new Date().getFullYear()} Strategen. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#C0CF2E] transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-[#C0CF2E] transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-[#C0CF2E] transition-colors duration-300">Instagram</a>
              <a href="#" className="hover:text-[#C0CF2E] transition-colors duration-300">LinkedIn</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
