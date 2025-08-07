"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "1. What services does your AI agency offer?",
    answer: "Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.",
  },
  {
    question: "2. Do I need a large amount of data to use AI?",
    answer:
      "Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.",
  },
  {
    question: "3. How long does it take to develop an AI solution?",
    answer: "Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.",
  },
  {
    question: "4. Is my data secure with you?",
    answer: "Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.",
  },
  {
    question: "5. Can you integrate AI into our existing systems?",
    answer: "Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // By default, open second one

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#060606] md:py-8 py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-start">
        {/* Left Column */}
        <div className="md:w-1/2 md:space-y-6 space-y-2">
          <h2 className="text-2xl md:text-4xl font-light text-white">
            Your AI questions, expertly{" "}
            <span className="bg-gradient-to-r to-[#B462CE] from-[#3F2AB2] text-transparent bg-clip-text font-semibold">
              answered here
            </span>
          </h2>

          <button className="md:mt-4 mt-1 px-6 py-2 rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white font-medium text-sm">
            View All Faqs
          </button>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="md:w-1/2 space-y-4 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0b0b1f] border border-white/10 rounded-lg p-4 transition-all duration-300"
            >
              <button
                className="flex items-center justify-between w-full text-left text-white font-medium"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && faq.answer && (
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
