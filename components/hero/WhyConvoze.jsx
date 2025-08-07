import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  TrendingDown,
  Clock,
  Shield,
  Heart,
  DollarSign,
  Users,
  MessageSquare,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  BarChart,
  Phone,
  DiscIcon,
  Link,
  Unlink,
} from "lucide-react";

const WhyConvoze = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const [hoveredProblem, setHoveredProblem] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    // Auto-cycle through stats
    const interval = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const wastedStats = [
    {
      percentage: "95%",
      label: "Conversations Wasted",
      description: "In traditional contact centers",
      icon: MessageSquare,
    },
    {
      percentage: "<5%",
      label: "Calls Reviewed",
      description: "Through manual QA coverage",
      icon: Phone,
    },
    {
      percentage: "Timing Gap",
      label: "Delayed Coaching",
      description: "Agent feedback timing",
      icon: Clock,
    },
    {
      percentage: "Disconnect",
      label: "Customer Sentiment",
      description: "Is misunderstood or ignored",
      icon: Unlink,
    },
  ];

  const problems = [
    {
      icon: Shield,
      title: "Compliance Risks",
      description: "Go until escalation",
      impact: "Millions in fines",
      delay: 0,
    },
    {
      icon: TrendingDown,
      title: "Poor QA = Churn",
      description: "Drives customers away",
      impact: "40% higher churn",
      delay: 0.1,
    },
    {
      icon: Clock,
      title: "Delayed Feedback",
      description: "Kills team growth",
      impact: "50% slower development",
      delay: 0.2,
    },
    {
      icon: DollarSign,
      title: "Missed Compliance",
      description: "Breaches cost millions",
      impact: "Zero ROI on calls",
      delay: 0.3,
    },
  ];

  const salesData = [
    { percentage: "34%", label: "Call Back Later" },
    { percentage: "26%", label: "Expensive" },
    { percentage: "23%", label: "Competitor Mentions" },
    { percentage: "17%", label: "Discount Mentions" },
  ];

  return (
    <div className="min-h-screen py-24  relative w-full bg-slate-200 text-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bgPattern.png"
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-20 !z-0"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-6 lg:pt-8">
        {/* Header Section */}
        <div
          className={`text-center z-5 md:mb-10 mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-2xl lg:text-4xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
            Why
            <span className="font-normal text-black"> Convoze?</span>
          </h1>
          <p className="text-gray-800 mb-6">
            In traditional contact center setups, 95% of Conversations Are
            Wasted. Less than 5% of customer calls are reviewed
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 relaive">
          {/* Left Column - Wasted Stats */}
          <div className="lg:w-1/2 relaive">
            {/* <div className="mb-8">
             <h1 className="text-2xl lg:text-4xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
            Why
            <span className="font-normal text-white"> Convoze?</span>
          </h1>
              <p className="text-gray-400 mb-6">
                In traditional contact center setups, 95% of Conversations Are Wasted.
Less than 5% of customer calls are reviewed

              </p>
              <button className="text-purple-400 hover:text-purple-300 flex items-center">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div> */}

            {/* Wasted Stats */}
            <div className="space-y-5 p-2 bg-neutral-100 rounded-xl shadow-2xl relative z-10">
              {wastedStats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className="flex relative  items-center gap-3 p-2 hover:bg-slate-300 rounded-lg transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-8 h-8 text-white rounded-lg bg-gradient-to-tl to-[#B462CE] from-[#3F2AB2] p-2">
                      <Icon className="w-full h-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
                          {stat.percentage}
                        </span>
                        <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
                          {stat.label}
                        </span>
                      </div>
                      <p className="text-xs text-gray-800">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Problems */}
          <div className="lg:w-1/2 relaive ">
            {/* Sales Data Section */}
            {/* <div className="mb-4">
              <h3 className="text-lg font-medium text-white mb-4">Sales Objections</h3>
              <div className="grid grid-cols-4 gap-3">
                {salesData.map((item, index) => (
                  <div key={index} className="bg-gray-900/50 p-4 rounded-lg">
                    <div className="text-xl font-bold text-white">{item.percentage}</div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="bg-gradient-to-br from-purple-900/70 shadow-2xl to-indigo-900/70 backdrop-blur backdrop:opacity-50  p-4 rounded-2xl">
              <h2 className="text-2xl font-medium text-white mb-6">
                This isn't just inefficient — it's expensive
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {problems.map((problem, index) => {
                  const Icon = problem.icon;
                  const isHovered = hoveredProblem === index;

                  return (
                    <div
                      key={index}
                      className={`group transition-all duration-500 cursor-pointer
                        ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }
                      `}
                      style={{ transitionDelay: `${problem.delay + 0.5}s` }}
                      onMouseEnter={() => setHoveredProblem(index)}
                      onMouseLeave={() => setHoveredProblem(null)}
                    >
                      <div
                        className={`p-3 rounded-xl transition-all duration-300 border border-gray-800/50 
                        ${
                          isHovered
                            ? "bg-gray-800/70 scale-[1.02] shadow-lg"
                            : "bg-gray-900/50"
                        }
                      `}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-tl to-[#B462CE] from-[#3F2AB2] p-2 flex-shrink-0">
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">
                              {problem.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-2">
                              {problem.description}
                            </p>
                            <div className="text-purple-300 text-sm font-medium">
                              {problem.impact}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* <div className="mt-8 text-center">
                <p className="text-gray-300">
                  You're spending on conversations, but not learning from them.
                  <br />
                  That's where Convoze steps in.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyConvoze;
