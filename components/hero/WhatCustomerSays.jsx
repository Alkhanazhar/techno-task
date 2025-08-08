"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    name: "Jenny W",
    company: "Fintech Startup",
    quote:
      "Working with this team we game-changer. The AI-enhanced they delivered helped reduce bounce rates by 40% engagement like never before.",
    image: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with your image
  },
  {
    name: "David R",
    company: "Healthcare AI",
    quote:
      "Amazing team with real innovation. Their solutions helped us streamline our digital interfaces and personalize our user journeys better than ever.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function WhatCustomerSays() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-tl to-[#21082b] from-[#27022e] text-white md:px-8 px-3 py-24">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-light leading-tight">
          What Our{" "}
          <span className="font-semibold bg-gradient-to-r to-[#B462CE] from-[#3F2AB2] text-transparent bg-clip-text">
            Customers are Saying
          </span>
        </h2>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-[#0B0B1F] to-[#1B012A] rounded-2xl p-4 md:p-12 flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden">
          {/* Left Content */}
          <div className="flex-1 z-10">
            <h3 className="text-xl md:text-3xl font-light leading-snug mb-3">
              Powering innovation with <br className="md:block hidden" />
              data-driven{" "}
              <span className="text-purple-500 font-semibold">design</span>
            </h3>
            <p className="text-gray-400 md:mb-6 mb-4 text-sm md:text-base max-w-md">
              Crafting intuitive, user-first interfaces by intelligence for
              smarter, faster, and more personalized digital artificial
              intelligence experiences.
            </p>
            <div className="flex gap-10">
              <div>
                <h4 className="text-purple-500 md:text-2xl text-xl font-bold">
                  200+
                </h4>
                <p className="text-sm text-white mt-1">Projects Successfully</p>
              </div>
              <div>
                <h4 className="text-purple-500 md:text-2xl text-xl font-bold">
                  600+
                </h4>
                <p className="text-sm text-white mt-1">Projects Successfully</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="relative w-full max-w-lg py-10 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.8, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#3F2AB2] md:ml-10 ml-0   via-[#9333ea] to-[#B462CE]  text-white p-6 rounded-xl max-w-sm z-10 shadow-xl"
              >
                <div className="flex items-center mb-4 gap-3">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-semibold">
                      {testimonials[index].name}
                    </h5>
                    <p className="text-sm">{testimonials[index].company}</p>
                  </div>
                  <span className="ml-auto text-lg font-bold">
                    <QuoteIcon />
                  </span>
                </div>
                <p className="text-sm mt-6 leading-relaxed">
                  "{testimonials[index].quote}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Background Skewed Card */}
            <div className="absolute -top-16 inset-0 md:flex hidden justify-center items-center -z-10">
              <div className="bg-black opacity-30 w-[30vw] h-[50vh] mr-30 rounded-xl transform -rotate-[12deg] shadow-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
