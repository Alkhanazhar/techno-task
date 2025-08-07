import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const TimelineJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isTimelineComplete, setIsTimelineComplete] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(new Set()); // Track which steps should be visible
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const circleRef = useRef(null);
  const timelineRef = useRef(null);
  const [contentPositions, setContentPositions] = useState([]);

  // const data = [

  //   {
  //     stepLabel: "2022 - Manual Quality Auditing Systems",
  //     content: `Manual QA tools used to review calls.
  // Experienced inefficiencies in traditional call center QA.
  // No automation or transcription - audits were not uniform.
  // Realized the need for scalable QA automation and better call quality monitoring.`
  //   },
  //   {
  //     stepLabel: "2023 - Quality Management System",
  //     content: `Built a simple multilingual QA system allowing sound uploads.
  // Could review only 2-5% of support calls manually.
  // Did not provide real-time tracking and benchmarking of agents.
  // It emphasized the importance of AI-powered call review tools.`
  //   },
  //   {
  //     stepLabel: "2024 - Convoze Speech Analytics",
  //     content: `Integrated real-time speech-to-text and emotion detection.
  // Added call summaries, silence indicators, and talk ratio.
  // Established the basis of the speech analytics application and AI call evaluation.`
  //   },
  //   {
  //     stepLabel: "2025 - Convoze Conversational Analytics",
  //     content: `Automatic call-reviewing increased to 100%.
  // AI coaching reports are customized and provided to agents.
  // CX and compliance – real-time alerts.
  // Grew to be a complete conversation analytics platform.
  // Fully replaced manual QA with AI-powered call QA software.
  // Extended support to emails and chats for full omnichannel quality monitoring.`
  //   }
  // ];

  const data = [
    {
      stepLabel: "2022 – Manual Quality Auditing Systems",
      content: [
        "Manual QA tools used to review calls",
        "Experienced inefficiencies in traditional call center QA",
        // "No automation or transcription - audits were not uniform",
        // "Realized the need for scalable QA automation and better call quality monitoring"
      ],
    },
    {
      stepLabel: "2023 – Quality Management System",
      content: [
        "Built a simple multilingual QA system allowing sound uploads",
        "Could review only 2-5% of support calls manually",
        "Did not provide real-time tracking and benchmarking of agents",
        // "It emphasized the importance of AI-powered call review tools"
      ],
    },
    {
      stepLabel: "2024 – Convoze Speech Analytics",
      content: [
        "Integrated real-time speech-to-text and emotion detection",
        "Added call summaries, silence indicators, and talk ratio",
        "Established the basis of the speech analytics application and AI call evaluation",
      ],
    },
    {
      stepLabel: "2025 – Convoze Conversational Analytics",
      content: [
        "Automatic call-reviewing increased to 100%",
        "AI coaching reports are customized and provided to agents",
        // "CX and compliance – real-time alerts",
        "Grew to be a complete conversation analytics platform",
        // "Fully replaced manual QA with AI-powered call QA software",
        "Extended support to emails and chats for full omnichannel quality monitoring",
      ],
    },
  ];

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // Transform scroll progress to timeline progress
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Listen to scroll progress changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = Math.max(0, Math.min(1, latest));
    const newActiveStep = Math.floor(progress * data.length);
    const clampedStep = Math.min(newActiveStep, data.length - 1);

    setActiveStep(clampedStep);

    // Add current step to visible steps (once visible, stays visible)
    setVisibleSteps((prev) => {
      const newSet = new Set(prev);
      // Only add the current active step (one by one progression)
      newSet.add(clampedStep);
      return newSet;
    });

    // Check if timeline is complete
    const complete = progress >= 0.95; // 95% completion threshold
    setIsTimelineComplete(complete);

    // When complete, show all steps
    if (complete) {
      setVisibleSteps(new Set(data.map((_, i) => i)));
    }
  });

  // Handle scroll locking when timeline is not complete
  useEffect(() => {
    const handleScroll = (e) => {
      if (!timelineRef.current || isTimelineComplete) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineBottom = timelineRect.bottom;
      const windowHeight = window.innerHeight;
      const scrollingDown = e.deltaY > 0;

      // If user tries to scroll past the timeline before completion
      if (scrollingDown && timelineTop < -100 && !isTimelineComplete) {
        e.preventDefault();
        // Keep the timeline in view
        timelineRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }

      // If user tries to scroll up past the timeline start
      if (!scrollingDown && timelineBottom > windowHeight + 100) {
        e.preventDefault();
        timelineRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Only add scroll lock when timeline is not complete
    if (!isTimelineComplete) {
      window.addEventListener("wheel", handleScroll, { passive: false });
      window.addEventListener("touchmove", handleScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [isTimelineComplete]);

  // Update SVG circle position based on line progress
  useMotionValueEvent(lineProgress, "change", (latest) => {
    if (!pathRef.current || !circleRef.current) return;

    const pathLength = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(latest * pathLength);

    circleRef.current.setAttribute("cx", point.x);
    circleRef.current.setAttribute("cy", point.y);
  });

  useEffect(() => {
    if (!pathRef.current) return;

    const pathLength = pathRef.current.getTotalLength();
    const totalSentences = data.reduce(
      (acc, step) => acc + step.content.length,
      0
    );
    const spacing = pathLength / (totalSentences + 1);

    let sentenceIndex = 1;
    const positions = [];

    data.forEach((step, stepIndex) => {
      step.content.forEach((sentence, sentenceIdx) => {
        const lengthAt = spacing * sentenceIndex;
        const point = pathRef.current.getPointAtLength(lengthAt);
        positions.push({
          x: point.x,
          y: point.y,
          sentence,
          stepIndex,
          sentenceIdx,
        });
        sentenceIndex++;
      });
    });

    setContentPositions(positions);
  }, [data]);

  return (
    <motion.div
      ref={containerRef}
      className="relative h-[250vh] py-14 bg-slate-200"
    >
      {/* Sticky timeline */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bgPattern.png"
          alt="Background Pattern"
          className="w-screen h-full object-cover opacity-15 rotate-90 !z-0"
        />
      </div>

      <motion.div
        ref={timelineRef}
        className="sticky top-0 left-0 w-full h-screen  px-4 z-30 "
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center md:-mt-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-b pb-16 pt-10">
              Our Journey
            </h2>
          </div>

          <div ref={containerRef} className="relative py-10 pt-24">
            {/* Main timeline container */}
            <div className="relative h-[400px]">
              <svg
                className="absolute inset-0 w-full h-full z-10"
                viewBox="0 0 1000 400"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <pattern
                    id="zigzagDots"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="5" cy="5" r="1.5" fill="#d1d5db" />
                  </pattern>
                  <pattern
                    id="activeZigzagDots"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="5" cy="5" r="1.5" fill="#9333ea" />
                  </pattern>
                </defs>

                {/* Static dotted path */}
                <path
                  d="M 50 100 L 250 300 L 450 100 L 650 300 L 850 100 L 950 "
                  stroke="url(#zigzagDots)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />

                {/* Active progress path */}
                <motion.path
                  ref={pathRef}
                  d="M 50 100 L 250 300 L 450 100 L 650 300 L 850 100 L 950 "
                  stroke="url(#activeZigzagDots)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="2000"
                  style={{
                    strokeDashoffset: useTransform(
                      lineProgress,
                      [0, 1],
                      [2000, 0]
                    ),
                  }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />

                {/* Single moving circle indicator */}
                <motion.circle
                  ref={circleRef}
                  r="18"
                  fill="#9333ea"
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(147, 51, 234, 0.8))",
                    scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
                  }}
                  animate={{
                    scale: isTimelineComplete ? [1.2, 1.4, 1.2] : 1.2,
                  }}
                  transition={{
                    scale: isTimelineComplete
                      ? {
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : { duration: 0.1 },
                  }}
                />

                {/* Completion celebration effect */}
                {isTimelineComplete && (
                  <motion.circle
                    cx={circleRef.current?.getAttribute("cx") || 950}
                    cy={circleRef.current?.getAttribute("cy") || 200}
                    r="0"
                    fill="rgba(147, 51, 234, 0.3)"
                    animate={{
                      r: [0, 50, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
              </svg>

              {/* Timeline step content cards */}
              {data.map((step, index) => {
                const isActive = activeStep === index;
                const isPast = activeStep > index;
                const isVisible = visibleSteps.has(index);

                const positions = [
                  { x: "5%", y: "35%" },
                  { x: "25%", y: "75%" },
                  { x: "45%", y: "25%" },
                  { x: "95%", y: "-35%" },
                ];
                const position = positions[index];

                return (
                  <div
                    key={index}
                    className="absolute z-20 scale-90"
                    style={{
                      left: position.x,
                      top: position.y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Step indicator dot */}
                    <motion.div
                      className={`w-4 h-4 rounded-full border-2 z-30 ${
                        isPast
                          ? "bg-purple-500 border-purple-500"
                          : isActive
                          ? "bg-purple-500 border-purple-500"
                          : "bg-gray-200 border-gray-300"
                      }`}
                      animate={{
                        scale: isActive ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        scale: isActive
                          ? {
                              duration: 0.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }
                          : { duration: 0.1 },
                      }}
                    />

                    {/* Content card - stays visible once shown */}
                    <motion.div
                      className={`
                        absolute left-1/2 transform -translate-x-1/2
                        w-72 z-30
                        ${index % 2 === 0 ? "bottom-4" : "top-4"}
                      `}
                      initial={{
                        opacity: 0,
                        y: index % 2 === 0 ? 20 : -20,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: isVisible ? 1 : 0,
                        y: isVisible ? 0 : index % 2 === 0 ? 20 : -20,
                        scale: isVisible ? 1 : 0.8,
                        filter: isPast
                          ? "blur(0px)"
                          : isActive
                          ? "blur(0px)"
                          : "blur(6px)", // <--- add this
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      style={{ willChange: "filter, opacity, transform" }} // improve rendering
                    >
                      <motion.div
                        className={`
    bg-white rounded-lg p-4 shadow-xl border-2 transition-all duration-200
    ${
      isActive
        ? " bg-gradient-to-r from-[#C068D1] to-[#3224AF] border-purple-600  scale-100"
        : isPast
        ? "border-green-400 bg-green-50"
        : "border-gray-300 bg-gray-50"
    }
  `}
                        animate={{
                          scale: isActive ? 1.05 : 1,
                          borderColor: isActive
                            ? "#9333ea"
                            : isPast
                            ? "#C068D1"
                            : "#d1d5db",
                        }}
                        transition={{ duration: 0.15 }}
                      >
                        <div
                          className={`text-xs font-semibold mb-2 ${
                            isActive
                              ? "text-purple-100"
                              : isPast
                              ? "text-[#9333ea]"
                              : "text-gray-600"
                          }`}
                        >
                          {step.stepLabel}
                        </div>
                        <p
                          className={`text-xs leading-relaxed transition-1 ${
                            isActive ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {step.content.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </p>

                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity }}
                          />
                        )}

                        {/* Completed indicator */}
                        {isPast && !isActive && (
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#9333ea] rounded-full flex items-center justify-center">
                            <svg
                              className="w-2 h-2 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress indicator */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineJourney;
