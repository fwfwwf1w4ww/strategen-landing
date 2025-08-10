import React from 'react';
import { motion } from 'framer-motion';

export default function StrategenLanding() {
  return (
    <div className="min-h-screen bg-[#323053] text-white font-sans">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C0CF2E] flex items-center justify-center font-bold text-[#323053]">S</div>
          <h1 className="font-bold text-lg">Strategen</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-200">
          <a href="#services" className="hover:text-[#C0CF2E]">Services</a>
          <a href="#work" className="hover:text-[#C0CF2E]">Work</a>
          <a href="#about" className="hover:text-[#C0CF2E]">About</a>
          <a href="#contact" className="bg-[#97A036] text-[#323053] px-4 py-2 rounded-full hover:bg-[#C0CF2E]">Get a Quote</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-8 items-center py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#C0CF2E]">Digital marketing for brands that want to stand out</h2>
            <p className="mt-4 text-gray-300">At Strategen, we create viral campaigns, impactful designs, and growth strategies to turn your audience into loyal customers.</p>
            <div className="mt-6 flex gap-4">
              <a href="#contact" className="bg-[#C0CF2E] text-[#323053] px-6 py-3 rounded-full font-semibold hover:bg-[#97A036]">Work with us</a>
              <a href="#services" className="border border-[#C0CF2E] text-[#C0CF2E] px-6 py-3 rounded-full hover:bg-[#C0CF2E] hover:text-[#323053]">Our Services</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-[#505650]">
              <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=60" alt="marketing" className="w-full h-72 object-cover" />
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="py-16">
          <h3 className="text-2xl font-bold text-[#C0CF2E] mb-8">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Social Media Growth', desc: 'We help you grow and engage your audience with platform-specific strategies.' },
              { title: 'Creative Campaigns', desc: 'Designing campaigns that grab attention and convert.' },
              { title: 'Performance Marketing', desc: 'Optimized ads, funnels, and retargeting to maximize ROI.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-[#505650] p-6 rounded-xl hover:bg-[#677D3D] transition">
                <h4 className="font-semibold text-lg mb-2 text-[#C0CF2E]">{service.title}</h4>
                <p className="text-gray-200 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16">
          <div className="bg-[#677D3D] p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold text-[#C0CF2E]">About Us</h3>
            <p className="mt-4 max-w-3xl">Strategen is a Gen Z-focused marketing agency that blends creativity and data to build lasting brand-audience relationships. Our team thrives on cultural trends, innovation, and measurable results.</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <h3 className="text-2xl font-bold text-[#C0CF2E] mb-6">Get in Touch</h3>
          <form name="contact" method="POST" data-netlify="true" className="grid gap-4 max-w-xl">
            <input type="hidden" name="form-name" value="contact" />
            <input name="name" placeholder="Name" className="bg-[#505650] px-4 py-3 rounded-lg text-white outline-none" required />
            <input name="email" type="email" placeholder="Email" className="bg-[#505650] px-4 py-3 rounded-lg text-white outline-none" required />
            <textarea name="message" placeholder="Message" className="bg-[#505650] px-4 py-3 rounded-lg text-white outline-none min-h-[120px]" required />
            <button type="submit" className="bg-[#C0CF2E] text-[#323053] px-6 py-3 rounded-full font-semibold hover:bg-[#97A036]">Send Message</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-[#505650] text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Strategen. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#C0CF2E]">Privacy</a>
            <a href="#" className="hover:text-[#C0CF2E]">Terms</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
