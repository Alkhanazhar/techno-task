"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Brain,
  Target,
  TrendingDown,
  AlertTriangle,
  Users,
  Clock,
  Zap,
  CheckCircle,
  Plus,
  Minus,
  Shield,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import Lenis from "lenis";
import { motion, useScroll, useTransform } from "framer-motion";

const Solutions = () => {
  const [activeSolution, setActiveSolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const lenisRef = useRef(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "101%"]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const problemSolutions = [
    {
      problemIcon: TrendingDown,
      solutionIcon: Target,
      problemTitle: "Poor Customer Satisfaction",
      solutionTitle: "AI-Powered Experience Enhancement",
      problem:
        "Companies struggle with declining CSAT scores, unresolved complaints, and increasing customer churn rates.",
      solution:
        "Our emotion analysis and sentiment tracking identify pain points in real-time, enabling proactive intervention and personalized responses.",
      benefits: [
        "85% improvement in CSAT",
        "40% reduction in churn",
        "Real-time sentiment monitoring",
      ],
      stats: "85%",
      statsLabel: "CSAT Improvement",
      delay: 0,
    },
    {
      problemIcon: AlertTriangle,
      solutionIcon: Shield,
      problemTitle: "Compliance & Quality Issues",
      solutionTitle: "Quality Assurance",
      problem:
        "Manual QA processes miss critical compliance violations, leading to regulatory risks and inconsistent service quality.",
      solution:
        "Automated QA scoring with 100% call coverage ensures compliance adherence and maintains consistent quality standards across all interactions.",
      benefits: [
        "100% call monitoring",
        "Zero compliance violations",
        "Automated reporting",
      ],
      stats: "100%",
      statsLabel: "Compliance Coverage",
      delay: 0.1,
    },
    {
      problemIcon: Clock,
      solutionIcon: Zap,
      problemTitle: "Inefficient Call Handling",
      solutionTitle: "Smart Conversation Flow",
      problem:
        "Long hold times, awkward silences, and inefficient call routing result in frustrated customers and reduced productivity.",
      solution:
        "AI-driven silence detection and real-time coaching optimize call flow, reduce handling time, and improve agent performance.",
      benefits: [
        "35% faster resolution",
        "Reduced silence time",
        "Optimized call routing",
      ],
      stats: "35%",
      statsLabel: "Faster Resolution",
      delay: 0.2,
    },
    {
      problemIcon: Users,
      solutionIcon: Brain,
      problemTitle: "Agent Performance Gaps",
      solutionTitle: "AI-Driven Agent Coaching",
      problem:
        "Inconsistent agent performance, lack of real-time feedback, and lengthy training cycles impact overall service quality.",
      solution:
        "Real-time performance analytics and AI coaching provide instant feedback, personalized training, and continuous improvement insights.",
      benefits: [
        "50% faster training",
        "Real-time coaching",
        "Performance optimization",
      ],
      stats: "50%",
      statsLabel: "Training Acceleration",
      delay: 0.3,
    },
    {
      problemIcon: BarChart3,
      solutionIcon: Target,
      problemTitle: "Limited Business Insights",
      solutionTitle: "Analytics Dashboard",
      problem:
        "Lack of actionable insights from customer interactions leads to missed opportunities and reactive decision-making.",
      solution:
        "Comprehensive analytics platform transforms conversations into strategic insights, enabling data-driven decisions and proactive improvements.",
      benefits: [
        "360° customer insights",
        "Predictive analytics",
        "Strategic reporting",
      ],
      stats: "360°",
      statsLabel: "Customer Insights",
      delay: 0.4,
    },
    {
      problemIcon: Lightbulb,
      solutionIcon: CheckCircle,
      problemTitle: "Scalability Challenges",
      solutionTitle: "Enterprise-Ready AI Platform",
      problem:
        "Growing businesses struggle to maintain quality and consistency as call volumes increase and teams expand globally.",
      solution:
        "Cloud-native AI platform scales seamlessly with your business, maintaining consistent quality across multiple channels and languages.",
      benefits: [
        "Unlimited scalability",
        "Multi-channel support",
        "Global deployment",
      ],
      stats: "∞",
      statsLabel: "Scalability",
      delay: 0.5,
    },
  ];

  return (
    <div
      ref={lenisRef}
      className="min-h-screen bg-[#060606] text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-2xl lg:text-5xl font-light mb-4">
            Transform challenges into
            <br />
            competitive{" "}
            <span className="bg-gradient-to-r font-bold from-[#3F2AB2] to-[#B462CE] bg-clip-text text-transparent">
              AI advantages
            </span>
          </h1>
          <p className="text-lg font-normal text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every business challenge is an opportunity for AI innovation.
            Discover how our intelligent solutions address your most pressing
            problems.
          </p>
        </div>

        <div className="relative mb-3" ref={targetRef}>
          <motion.div
            style={{ height }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-r from-[#3F2AB2] via-gray-500 to-[#B462CE] rounded-full hidden lg:block"
          />

          {problemSolutions.map((item, index) => {
            const ProblemIcon = item.problemIcon;
            const SolutionIcon = item.solutionIcon;
            const isActive = activeSolution === index;
            const isExpanded = expandedItem === index;

            return (
              <div
                key={index}
                className={`relative mb-16 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${item.delay}s` }}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[#3F2AB2] to-[#B462CE] rounded-full border-4 border-gray-900 z-10 hidden lg:block" />

                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Problem on Left */}
                  <div className="w-full p-4 lg:w-1/2 lg:text-right lg:pr-2">
                    <div className="relative p-4 rounded-3xl border-2 border-white/10 bg-[#0A0A0A] transition-all duration-500 hover:scale-105">
                      <div className="flex items-center gap-4 lg:flex-row-reverse mb-6">
                        <div className="w-11 h-10 rounded-xl bg-gradient-to-br from-[#3F2AB2] to-[#B462CE] p-3 shadow-xl">
                          <ProblemIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-orange-500 font-bold text-sm tracking-wider mb-1">
                            CHALLENGE
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {item.problemTitle}
                          </h3>
                        </div>
                      </div>
                      <p className="text-white leading-relaxed text-sm">
                        {item.problem}
                      </p>
                    </div>
                  </div>

                  {/* Solution on Right */}
                  <div className="w-full p-4 lg:w-1/2 lg:text-left lg:pl-2">
                    <div
                      className={`relative p-4 rounded-3xl border-2 border-white/10 bg-[#0A0A0A] transition-all duration-500 cursor-pointer ${
                        isActive
                          ? "shadow-2xl shadow-[#9933FF]/20 scale-105"
                          : "hover:border-[#B462CE]"
                      }`}
                      onMouseEnter={() => setActiveSolution(index)}
                      onClick={() => setExpandedItem(isExpanded ? null : index)}
                    >
                      <div className="relative">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-10 rounded-xl bg-gradient-to-br from-[#3F2AB2] to-[#B462CE] p-3 shadow-xl">
                              <SolutionIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-bold text-sm tracking-wider mb-1">
                                SOLUTION
                              </div>
                              <h3 className="text-xl font-bold text-white">
                                {item.solutionTitle}
                              </h3>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold bg-gradient-to-r from-[#3F2AB2] to-[#B462CE] bg-clip-text text-transparent">
                              {item.stats}
                            </div>
                            <div className="text-sm text-white font-medium">
                              {item.statsLabel}
                            </div>
                          </div>
                        </div>
                        <p className="text-white leading-relaxed text-sm mb-6">
                          {item.solution}
                        </p>
                        <div className="border-t border-[#B462CE] pt-6">
                          <button
                            className="flex items-center gap-2 text-white hover:text-[#B462CE] transition-colors mb-4"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedItem(isExpanded ? null : index);
                            }}
                          >
                            <span className="font-semibold">View Benefits</span>
                            {isExpanded ? (
                              <Minus className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-500 ${
                              isExpanded
                                ? "max-h-48 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="space-y-3">
                              {item.benefits.map((benefit, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-3"
                                >
                                  <CheckCircle className="w-5 h-5 text-white" />
                                  <span className="text-white">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Section - Hexagonal Layout */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Impact Across Industries
            </h3>
            <p className="text-xl text-gray-300">
              Measurable results that drive business transformation
            </p>
          </div>

          {/* Hexagonal Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-2">
            {[
              {
                value: "500+",
                label: "Companies Trust Us",
                color: "from-purple-500 to-blue-500",
              },
              {
                value: "10M+",
                label: "Conversations Analyzed",
                color: "from-blue-400 to-cyan-400",
              },
              {
                value: "99.8%",
                label: "Uptime Guarantee",
                color: "from-green-400 to-emerald-400",
              },
              {
                value: "<1s",
                label: "Response Time",
                color: "from-orange-400 to-red-400",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  {/* Hexagonal Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 transform rotate-12 rounded-3xl transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl flex items-center justify-center">
                    <div
                      className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </div>
                  </div>
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
