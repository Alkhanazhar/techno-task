"use client";

import {
  Cpu,
  Brain,
  PenTool,
  Code2,
  ServerCog,
  WandSparkles,
} from "lucide-react";
import StatsCart from "./StatsCart";

const logos = [
  { icon: Cpu, label: "10Web" },
  { icon: Brain, label: "Typewise" },
  { icon: PenTool, label: "Lavender" },
  { icon: WandSparkles, label: "Writesonic" },
  { icon: Code2, label: "10Web" },
  { icon: ServerCog, label: "Typewise" },
];

const Customers = () => {
  return (
    <section className="w-full md:mt-26 -mt-4 pt-2 pb-8 text-white text-center">
       <h2 className="text-gray-200 md:text-xl text-sm mb-6 font-medium tracking-wide">
        Already chosen by the leaders
      </h2>

      {/* <div className="grid md:grid-cols-6 grid-cols-3 flex-row justify-center items-center md:gap-10 gap-3  max-w-5xl mx-auto">
        {logos.map((logo, index) => {
          const Icon = logo.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 min-w-[120px] justify-center"
            >
              <Icon className="md:w-6 md:h-6 w-4 h-4 text-purple-400" />
              <span className="md:text-sm text-xs font-semibold text-white">
                {logo.label}
              </span>
            </div>
          );
        })}
      </div> */}
<StatsCart />
     
    </section>
  );
};

export default Customers;

