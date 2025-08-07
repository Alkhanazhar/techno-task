"use client";

import { Carousel } from "./Carousel";

export function Industries() {
  const slideData = [
    {
      title: "Healthcare & Insurance",
      button: "See use cases",
      description: "Ensure compliance and capture patient sentiment",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "BPOs & Call Centers",
      button: "See use cases",
      description: "Automate QA and coach agents faster",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Banking & Finance",
      button: "See use cases",
      description: "Flag risks, track disclosures, stay audit-ready",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "E-commerce & D2C",
      button: "See use cases",
      description: "Understand customer issues and improve support",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "SaaS & Tech",
      button: "See use cases",
      description: "Catch churn signals and boost onboarding success",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full  py-24">
      <div className="text-center mb-5 md:mb-6">
        <h2 className="text-2xl md:text-4xl font-medium md:mb-4 mb-2 text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
          Who <span className=" font-normal text-white"> It's For</span>
        </h2>
        <p className="text-gray-300 font-light text-base md:text-xl max-w-4xl mx-auto">
          Built for Teams Where Conversations Drive Business Convoze is trusted
          by fast-moving teams using call center quality assurance software in:
        </p>
      </div>
      <Carousel slides={slideData} />
    </div>
  );
}
