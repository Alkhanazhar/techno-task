import React from "react";

const trustData = [
  {
    title: "Plug & Play Integration",
    value: "15+",
    subtitle: "Years of AI-Driven Design",
    description:
      "Works with your existing systems instantly. No complicated setup. No dev team required.",
  },
  {
    title: "Multilingual & Region-Aware",
    value: "200+",
    subtitle: "Projects Successfully Delivered",
    description:
      "Understand intent, emotion, and context in native languages — tailored to each region.",
  },
  {
    title: "Built for Compliance",
    value: "95%",
    subtitle: "Client Satisfaction Rate",
    description:
      "Industry-grade phrase detection flags high-risk content in real time — not after it’s too late.",
  },
  {
    title: "Human Feedback Loop",
    value: "95%",
    subtitle: "Client Satisfaction Rate",
    description:
      "Give agents instant, actionable coaching — not weekly summaries.",
  },
];

export default function WhyTrustUs() {
  return (
    <section className="bg-gray-50 md:-mt-0 -mt-16 md:py-20 text-black px-4 py-6">
      <div className="max-w-6xl mx-auto text-center mb-6 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-light">
          Engineered for{" "}
          <span className="font-semibold bg-gradient-to-r to-[#B462CE] from-[#3F2AB2] text-transparent bg-clip-text">
            Impact
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-6 gap-4 max-w-6xl mx-auto">
        {trustData.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 bg-gradient-to-br from-[#0c0c2d] to-[#1b012a] hover:scale-105 transform transition-all duration-300"
          >
            <h4 className="text-white font-semibold text-[15px] mb-4">
              {item.title}
            </h4>
            {/* <div className="text-purple-400 text-3xl font-bold mb-1">
              {item.value}
            </div>
            <div className="text-gray-300 text-sm mb-4">{item.subtitle}</div> */}
            <div className="bg-black/40 p-4 rounded-xl text-sm text-gray-400 leading-relaxed">
              {item.description}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      {/* <div className="text-center mt-10 text-sm text-gray-300">
        <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs mr-2">
          Free
        </span>
        Let’s make something great work together.{" "}
        <span className="text-purple-400 font-semibold cursor-pointer hover:underline">
          Get Free Quote
        </span>
      </div> */}
    </section>
  );
}
