"use client";
import React, { useEffect, useRef } from "react";
import Orb from "../org";
import { cn } from "./lib/utils";
import Customers from "./Customers";
import { BarChart, Cpu, LineChart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const videoRef = useRef(null);

  const stats = [
    {
      value: "100%",
      label: "Call Reviews",
      icon: BarChart,
    },
    {
      value: "60%",
      label: "less time on manual QA",
      icon: Cpu,
    },
    {
      value: "35%",
      label: "Increase in CSAT",
      icon: TrendingUp,
    },
    {
      value: "2X",
      label: "Coaching Efficiency",
      icon: LineChart,
    },
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Adjust the speed here (0.5 = half speed, 2 = double speed)
    }
  }, []);

  return (
    <div className="relative -mt-12 ">
      {/* Top gradient (light to transparent) */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#060606] to-transparent z-10 pointer-events-none" />

      {/* Bottom gradient (light to transparent) */}
      {/* <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#060606] to-transparent z-10 pointer-events-none" /> */}

      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:50px_50px] select-none opacity-70",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Half Circle Overlay with mask */}

      {/* Orb + Hero Content */}
      <div className="w-full  relative flex items-start justify-between gap-4 ">
        {/* Orb */}

        {/* Video with Overlay */}
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover blur-xs"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Blur Overlay */}
        </div>
        <div className="absolute inset-0 backdrop-brightness-100 bg-black/70 z-10" />

        {/* Text Content */}
        <div className="absolute z-20 text-center md:mt-16 mt-8 w-full px-2 md:px-7">
          <h1 className="text-lg drop-shadow-2xl md:mt-22 mt-14 md:text-[38px] md:px-0 px-4 font-medium text-white leading-tight">
            97% of customer support conversations{" "}
            <br className="hidden md:block" />{" "}
            <span className=" bg-gradient-to-r from-[#B462CE] via-[#c893d8] to-[#3F2AB2] text-transparent bg-clip-text">
              go unheard.{" "}
            </span>{" "}
            Only 3% get reviewed
          </h1>

          <p className="text-gray-200 text-xs md:text-[16px] mt-6 font-normal max-w-[650px] mx-auto">
            Convoze AI analyses 100% of calls, flags compliance risks & delivers
            actionable insights to CX, QA & compliance teams reducing churn,
            cutting review time <br className="md:block hidden" /> & driving
            smarter decisions in real time.
          </p>

          <div className="md:mt-4 mt-4 font-light md:text-[15px] text-xs flex flex-row justify-center items-center gap-2 md:gap-4">
            <button className="bg-white cursor-pointer text-purple-800 border md:border-none border-purple-500 md:px-3.5 px-3 md:py-2.5 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
              Book a Demo
            </button>
            <button className="bg-gradient-to-r from-[#C068D1] to-[#3224AF]  cursor-pointer text-white md:px-4 px-3 md:py-3 py-2 rounded-full font-normal hover:opacity-90 transition-all duration-300">
              See How It Works
            </button>
          </div>
          <section className="w-full md:mt-20 -mt-4 pt-2 pb-8 text-white text-center">
            <h2 className="text-gray-200 md:text-xl text-sm mb-6 font-medium tracking-wide">
              Our numbers speak for themselves
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-5xl mx-auto">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="relative  bg-gradient-to-br  to-[#371d3e] from-[#3F2AB2] rounded-2xl px-6 py-8 pt-8 text-center transition duration-300 shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="absolute top-4 right-4">
                    <div className="md:w-17 md:h-17 w-14 h-14 rounded-full bg-none flex items-center justify-center shadow-md">
                      <item.icon className="md:w-10 md:h-10 w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="text-3xl text-start font-normal text-white mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm mt-4 text-start text-gray-300">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          {/* <div className="w-full mt-8 md:mt-6 px-4 md:px-7 z-20">
            <Customers />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
