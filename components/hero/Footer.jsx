import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 text-white py-10 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-10 relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-2">
              Let’s work{" "}
              <span className="font-semibold bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
                together!
              </span>
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-xl">
              Partner with us to create intelligent, impactful, and future-ready AI solutions together.
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#C068D1] cursor-pointer to-[#3224AF] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition">
            Let’s Work Together
          </button>
        </div>

        {/* Middle Info Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-10 relative z-10">
          {/* Logo + Brand */}
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-2 rounded-full">
              <span className="text-white text-2xl font-bold">💬</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Convoze</h3>
              <p className="text-xs text-white/60 mt-1">AI Speech Analytics Platform</p>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-semibold mb-2">Get In Touch</h4>
            <p className="text-sm text-white/70">+(00) - 123 456 789</p>
            <p className="text-sm text-white/70">info@domainname.com</p>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-2">Our Location</h4>
            <p className="text-sm text-white/70">123 Ayodhya Bypass Road</p>
            <p className="text-sm text-white/70">Bhopal, India</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-white/50 mt-6 relative z-10">
          Copyright © 2025 All Rights Reserved.
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-900 opacity-30 blur-3xl rounded-full -z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-900 opacity-30 blur-3xl rounded-full -z-0" />
    </footer>
  );
};

export default Footer;
