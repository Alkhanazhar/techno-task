"use client";;
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
   <div className="relative w-full bg-[#060606] md:pb-0 pb-4 px-0 md:px-4" ref={containerRef}>
  {/* Background image absolutely positioned */}
  <img
    src="/bgPattern.png"
    alt="Background Pattern"
    className="absolute inset-0 opacity-40 md:pr-10 w-full h-full object-cover z-0"
  />
  

      <div className="max-w-7xl relative text-center md:text-start mx-auto pt-10 px-2 md:px-8 lg:px-10">
        <h2 className="text-2xl font-light md:text-5xl md:mb-4 mb-2 text-white max-w-4xl">
          The Convoze {" "}
          <span className="bg-gradient-to-r  from-[#9333ea] to-[#6366f1] text-transparent bg-clip-text font-bold md:font-semibold">
              Journey
            </span>
        </h2>
        <p
          className="text-neutral-300 text-lg md:text-xl ">
          Those who have been working on Convoze for the past 4 years. <br className="md:hidden block"/> Here&apos;s
          a timeline of there journey.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-6 md:pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-20 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-neutral-200  border border-neutral-300  p-2" />
              </div>
              <h3
                className="hidden md:block md:pl-20 md:text-5xl font-bold text-neutral-500  ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-14 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-xl mb-1 mt-1 pl-1 text-left font-bold text-neutral-300 ">
                {item.title}
              </h3>
              <h3 className="md:text-base text-sm mb-1 text-left font-normal text-neutral-300 ">
                {item.content}{" "}
              </h3>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%]  via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};
