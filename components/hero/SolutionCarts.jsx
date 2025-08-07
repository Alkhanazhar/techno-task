"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, UploadCloud, Brain, Waves } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Upload",
    step: "STEP 01",
    icon: UploadCloud,
    image: "step1.jpeg",
  },
  {
    id: 2,
    title: "Transcribe",
    step: "STEP 02",
    icon: Waves,
    image: "step2.jpeg",
  },
  {
    id: 3,
    title: "Analyze",
    step: "STEP 03",
    icon: Brain,
    image: "step3.jpeg",
  },
  {
    id: 4,
    title: "Insights",
    step: "STEP 04",
    icon: BarChart3,
    image: "step4.jpeg",
  },
];

export default function SolutionCarts() {
  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <section className="bg-gray-50 text-black py-24 px-4 md:px-10 md:4">
      <div className="text-center mt-6">
        <h2 className="text-2xl md:text-4xl font-semibold md:mb-4 mb-2 text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
          How{" "}
          <span className=" !font-light md:text-4xl text-xl text-black">
            {" "}
            Convoze Works
          </span>
        </h2>
        <p className="text-gray-900 font-light text-base md:text-xl max-w-4xl mx-auto">
          Convoze doesn’t just “listen” — it understands, evaluates, and guides
          your team at every moment, without interrupting their workflow.
        </p>

        {/* CTA Button */}
        <div className="md:mt-4 mt-3">
          <button className="bg-gradient-to-r cursor-pointer from-purple-500 to-blue-500 text-white md:px-6 md:py-3 px-3 py-1.5 rounded-full font-medium hover:opacity-90 transition duration-300">
            Try it yourself
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto md:mt-10 mt-6 flex flex-col md:flex-row md:gap-12 gap-4 items-start">
        {/* Left Side - scrollable on mobile */}
        <div className="space-y-0 md:space-y-6 md:max-w-[16rem] scrollbar-none w-full overflow-x-auto scrollbar-hide flex md:block md:gap-4 gap-2  md:pb-0">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              // whileHover={{ scale: 1.03 }}
              onClick={() => setActiveStep(step)}
              className={`min-w-[130px] md:min-w-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all scrollbar-hide duration-300 hover:scale-95 rounded-2xl md:px-5 px-3 md:py-4 py-3 border cursor-pointer  group ${
                activeStep.id === step.id
                  ? "border-purple-600 shadow-2xl bg-purple-600"
                  : "border-zinc-700"
              }`}
            >
              <div className="relative z-10 flex items-start gap-2 md:gap-4">
                <div className="bg-gradient-to-r hidden to-[#B462CE] from-[#3F2AB2] md:w-10 w-6 md:h-7 h-5 rounded-full md:flex items-center justify-center text-white">
                  <step.icon className="md:w-4 w-3 md:h-4 h-3" />
                </div>
                <div>
                  <h4
                    className={`md:text-sm text-[10px] text-gray-700 font-medium mb-1  ${
                      activeStep.id === step.id && "text-white"
                    }`}
                  >
                    {step.step}
                  </h4>
                  <h3
                    className={`md:text-lg text-sm font-semibold text-gray-800 mb-1 ${
                      activeStep.id === step.id && "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
                <div className="bg-gradient-to-r md:hidden to-[#B462CE] from-[#3F2AB2] md:w-10 w-6 md:h-7 h-5 rounded-full flex items-center justify-center text-white">
                  <step.icon className="md:w-4 w-3 md:h-4 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side for Desktop Only */}
        <div className="relative w-full flex-1 h-[440px] hidden md:block">
          {steps.map((step) => {
            const isActive = step.id === activeStep.id;
            return (
              <motion.img
                key={step.id}
                src={step.image}
                alt={step.title}
                className={`absolute inset-0 shadow-[0_3px_10px_rgb(0,0,0,0.4)] aspect-video w-full h-full object-fill rounded-2xl  transition-all duration-500 ${
                  isActive
                    ? "z-30 opacity-100 scale-105"
                    : "z-10 opacity-30 scale-[0.90]"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0.3 }}
                transition={{ duration: 0.5, delay: isActive ? 0.1 : 0 }}
              />
            );
          })}
        </div>
      </div>

      {/* Right Side Image on Mobile Only */}
      <div className="relative w-full flex-1 h-[300px] md:hidden -mt-10">
        {steps.map((step) => {
          const isActive = step.id === activeStep.id;
          return (
            <motion.img
              key={step.id}
              src={step.image}
              alt={step.title}
              className={`absolute inset-0 w-full h-full object-contain rounded-2xl shadow-lg transition-all duration-500 ${
                isActive
                  ? "z-30 opacity-100 scale-105"
                  : "z-10 opacity-30 scale-[0.90]"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0.3 }}
              transition={{ duration: 0.5, delay: isActive ? 0.1 : 0 }}
            />
          );
        })}
      </div>
    </section>
  );
}
