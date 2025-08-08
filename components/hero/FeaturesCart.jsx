"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Live Transcription",
    desc: "Instant, accurate transcripts of every conversation.",
  },
  {
    title: "Emotion & Intent Detection",
    desc: "Know if a customer is frustrated, satisfied or confused.",
  },
  {
    title: "Auto QA Scoring",
    desc: "Objective scores based on what was said—not who said it Compliance Phrase Alerts: Get notified when high-risk phrases appear.",
  },
  {
    title: "Smart Dashboards",
    desc: "Everything you need, all in one place.",
  },
];

const FeaturesCart = () => {
  return (
    <section className="w-full  text-white md:px-4 px-3 md:py-24 bg-gradient-to-tl to-[#21082b] from-[#27022e]">
      <div className="md:max-w-6xl max-w-7xl mx-auto text-center mb-6 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-medium md:mb-4 mb-2 text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
          What is <span className=" font-normal text-white"> Convoze?</span>
        </h2>
        <p className="text-gray-300 font-light text-base md:text-xl max-w-3xl mx-auto mb-3 md:mb-6">
          Your AI Assistant for <br className="md:hidden block" /> Every
          Customer Conversation
        </p>
        <p className="text-gray-400 font-light text-sm md:text-base md:max-w-6xl max-w-7xl mx-auto">
          Convoze is an AI-powered voice intelligence platform that helps you
          monitor, understand, and act on every one of your customers' calls —
          instantly and at scale. It’s not just another QA tool. It’s your
          real-time co-pilot for quality, compliance & performance.
        </p>
      </div>

      {/* Demo Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto w-full md:mb-12 mb-8 px-0 md:px-4"
      >
        <div className="w-full aspect-video scroll-smooth rounded-xl overflow-hidden shadow-lg border border-gray-800">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Convoze Product Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4 px-0 md:px-4">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl p-6 min-h-[180px] bg-gradient-to-br  to-[#371d3e] from-[#3F2AB2]  relative text-left border border-gray-800 transition duration-300 hover:shadow-[0_0_30px_#9333ea]/20"
           
          >
            <h3 className="text-white font-semibold text-[16px] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesCart;
