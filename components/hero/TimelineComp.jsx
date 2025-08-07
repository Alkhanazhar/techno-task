import React from "react";
import { Timeline } from "./Timeline";

export function Timelinecomp() {
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <h1 className="mb-4 text-xl md:text-3xl pb-1 bg-gradient-to-r from-[#9333ea] to-[#6366f1] text-transparent bg-clip-text font-semibold">
            Manual Quality Auditing Systems
          </h1>
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg p-6 md:p-8 space-y-4">
            <ul className="list-disc text-white list-inside space-y-2">
              <li>Devised an internal contact center QA tool</li>
              <li>No transcription, no automation, simple workflows</li>
              <li>Resolved poorly effective manual call reviews</li>
              <li>Began streamlining QA with scalable automation</li>
            </ul>
          </div>
        </div>
      ),
    },

    {
      title: "2023",
      content: (
        <div>
          <h1 className="mb-4 text-xl md:text-3xl pb-1 bg-gradient-to-r  from-[#9333ea] to-[#6366f1] text-transparent bg-clip-text font-semibold">
            Quality Management System
          </h1>
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg p-6 md:p-8 space-y-4">
            <ul className="list-disc text-white list-inside space-y-2">
              <li>Supported sound uploads, cross-language reviews</li>
              <li>Only 2-5% of calls could be reviewed manually</li>
              <li>Inconsistent subjective evaluations</li>
              <li>Zero visibility on long calls and gaps in coaching</li>
              <li>
                Coaching was call-independent & Real-time missed compliance risk
              </li>
              <li>
                The variation in accents and languages decreased the precision
                of transcriptions
              </li>
              <li>Performance of agents is difficult to benchmark</li>
              <li>
                Inefficient QA Process Involves scaling of the QA process to
                large teams
              </li>
            </ul>
          </div>
        </div>
      ),
    },

    {
      title: "2024",
      content: (
        <div>
          <h1 className="mb-4 text-xl md:text-3xl pb-1 bg-gradient-to-r from-[#9333ea] to-[#6366f1] text-transparent bg-clip-text font-semibold">
            Convoze Speech Analytics
          </h1>
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg p-6 md:p-8 space-y-4">
          
            <ul className="list-disc text-white list-inside space-y-2">
              <li>
                Introduced the capabilities of real-time transcription and
                analyzing AI calls
              </li>
              <li>Added talk ratio, silence and emotional recognition</li>
              <li>Introduced call summary and compliance risk detection</li>
              <li>
                Automated to be a smart QA assistant to CX & compliance teams
              </li>
              <li>
                Establish the base of a comprehensive conversational
                intelligence platform
              </li>
            </ul>
          </div>
        </div>
      ),
    },

    {
      title: "2025",
      content: (
        <div>
          <h1 className="mb-4 text-xl md:text-3xl pb-1 bg-gradient-to-r from-[#9333ea] to-[#6366f1] text-transparent bg-clip-text font-semibold">
            Convoze Conversational Analytics
          </h1>
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg p-6 md:p-8 space-y-4">
            {/* <h3 className="text-xl font-bold text-white">
              Convoze 2.0 Highlights
            </h3> */}
            <ul className="list-disc text-white list-insidetext-gray-300 space-y-2">
              <li>
                <span className="font-medium text-white">
                  Full-blown product launch:
                </span>{" "}
                Convoze 2.0
              </li>
              <li>A 100 percent analysis of calls done automatically</li>
              <li>Individualized coaching checkups for each agent</li>
              <li>QA, CX, and compliance leader real-time alerts</li>
              <li>Plug-and-play compatibility with CRMs and dialers</li>
              <li>AI-driven call reviews instead of manual QA practices</li>
              <li>
                Most powerful AI customer support solution for contact centers
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
