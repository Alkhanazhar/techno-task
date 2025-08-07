"use client";

import React, { useState, useEffect } from "react";
import {
  Brain,
  MessageSquare,
  Volume2,
  ClipboardCheck,
  Bell,
  Zap,
  BarChart3,
  Shield,
  Globe,
  Heart,
  Mic,
  TrendingUp,
} from "lucide-react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Language Detection",
      subtitle: "Multi-Language Support",
      description:
        "Automatically detect and analyze conversations in 40+ languages with 99.8% accuracy. Real-time language switching and seamless multilingual support.",
      stats: "40+",
      statsLabel: "Languages Supported",
      color: "from-[#C068D1] to-[#3224AF]",
      delay: 0,
    },
    {
      icon: Heart,
      title: "Emotion Analysis",
      subtitle: "Advanced Sentiment AI",
      description:
        "Deep emotional intelligence that understands context, tone, and sentiment. Track customer satisfaction and agent performance in real-time.",
      stats: "95%",
      statsLabel: "Emotion Accuracy",
      color: "from-[#C068D1] to-[#3224AF]",
      delay: 0.1,
    },
    {
      icon: Volume2,
      title: "Silence Detection",
      subtitle: "Smart Pause Analysis",
      description:
        "Intelligent detection of awkward silences, hold times, and conversation gaps. Optimize call flow and reduce customer frustration.",
      stats: "0.5s",
      statsLabel: "Detection Speed",
      color: "from-[#C068D1] to-[#3224AF]",
      delay: 0.2,
    },
    {
      icon: ClipboardCheck,
      title: "QA Scoring",
      subtitle: "Automated Quality Assurance",
      description:
        "Comprehensive call scoring based on compliance, script adherence, and customer satisfaction metrics. Real-time feedback for agents.",
      stats: "100%",
      statsLabel: "Call Coverage",
      color: "from-[#C068D1] to-[#3224AF]",
      delay: 0.3,
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      subtitle: "Instant Notifications",
      description:
        "Immediate alerts for compliance violations, escalation triggers, and quality issues. Keep your team informed and responsive.",
      stats: "<1s",
      statsLabel: "Alert Speed",
      color: "from-[#C068D1] to-[#3224AF]",
      delay: 0.4,
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      subtitle: "Deep Insights Dashboard",
      description:
        "Comprehensive analytics and reporting with customizable dashboards. Track KPIs, trends, and performance metrics across all channels.",
      stats: "24/7",
      statsLabel: "Monitoring",
      color: "from-[#C068D1] to-[#3224AF]",
      delay: 0.5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#060606] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-18">
        {/* Header Section */}
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full px-6 py-2 mb-6 border border-purple-500/30">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">AI-Powered Features</span>
          </div> */}

          <h1 className="text-3xl lg:text-5xl font-light mb-4">
            Why leading brands trust us to
            <br />
            deliver smart{" "}
            <span className="bg-gradient-to-r font-semibold to-[#B462CE] from-[#3F2AB2] bg-clip-text text-transparent">
              AI solutions
            </span>
          </h1>

          <p className="text-lg font-normal text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Advanced conversation intelligence that transforms every customer
            interaction into actionable insights
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index;

            return (
              <div
                key={index}
                className={`group relative p-6 lg:p-8 rounded-2xl border transition-all duration-700 cursor-pointer
                  ${
                    isActive
                      ? "border-purple-500/50 border-2 scale-105"
                      : "border-gray-800 bg-gray-900/50 hover:border-gray-700"
                  }
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
                style={{ transitionDelay: `${feature.delay}s` }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                {/* Gradient Background Overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="flex flex-row justify-between items-center">
                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${feature.color} p-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Stats */}
                  <div className="mb-4">
                    <div
                      className={`text-3xl text-end lg:text-4xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent`}
                    >
                      {feature.stats}
                    </div>

                    <div className="text-sm text-gray-400 font-medium">
                      {feature.statsLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium text-purple-300 mb-3">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        {/* <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-3xl p-8 lg:p-12 border border-gray-700 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Ready to transform your conversations?
                </h3>
                <p className="text-gray-300 text-lg">
                  Join 500+ companies already using Convoze to enhance their customer experience
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <div className="flex items-center gap-2">
                    <span className="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded-full">FREE</span>
                    <span>Get Free Quote</span>
                  </div>
                </button>
                
                <button className="border border-gray-600 hover:border-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-purple-600/10">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full animate-pulse opacity-40 delay-1000"></div>
        {/* <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse opacity-50 delay-500"></div> */}
      </div>
    </div>
  );
};

export default Features;
