import React from 'react';

// ===============================
// MAIN LANDING PAGE COMPONENT
// ===============================
export default function StrategenLanding() {
  return (
    <div className="bg-white text-gray-900">
      
      {/* ===============================
          HEADER / NAVIGATION BAR
          =============================== */}
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Strategen</h1>
        <nav className="space-x-4">
          <a href="#features" className="hover:text-gray-400">Features</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </nav>
      </header>

      {/* ===============================
          HERO SECTION (Main banner area)
          =============================== */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Empower Your Strategy</h2>
        <p className="text-lg mb-6">
          The ultimate toolkit for modern business growth.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Get Started
        </button>
      </section>

      {/* ===============================
          FEATURES SECTION
          =============================== */}
      <section id="features" className="py-16 px-8 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature Card 1 */}
          <div className="bg-white shadow p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Analytics Dashboard</h4>
            <p className="text-gray-600">Get real-time insights into your business performance.</p>
          </div>
          
          {/* Feature Card 2 */}
          <div className="bg-white shadow p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Team Collaboration</h4>
            <p className="text-gray-600">Work together seamlessly with built-in tools.</p>
          </div>
          
          {/* Feature Card 3 */}
          <div className="bg-white shadow p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Automation Tools</h4>
            <p className="text-gray-600">Automate repetitive tasks to save time and resources.</p>
          </div>

        </div>
      </section>

      {/* ===============================
          ABOUT SECTION
          =============================== */}
      <section id="about" className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-6">About Us</h3>
        <p className="max-w-3xl mx-auto text-center text-gray-600">
          Strategen helps businesses scale by providing cutting-edge tools for strategy, analytics, and team collaboration.
        </p>
      </section>

      {/* ===============================
          CONTACT SECTION
          =============================== */}
      <section id="contact" className="py-16 px-8 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-6">Get in Touch</h3>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 p-3 rounded-lg"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* ===============================
          FOOTER
          =============================== */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Strategen. All rights reserved.</p>
      </footer>

    </div>
  );
}
