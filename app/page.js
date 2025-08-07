"use client"

import Container from "@/components/container";
import BookDemo from "@/components/hero/BookDemo";
import Customers from "@/components/hero/Customers";
import Faq from "@/components/hero/Faq";
import FeaturesCart from "@/components/hero/FeaturesCart";
import Hero from "@/components/hero/hero";
import { Industries } from "@/components/hero/Industries";
import SolutionCarts from "@/components/hero/SolutionCarts";
import StatsCart from "@/components/hero/StatsCart";
import { Timelinecomp } from "@/components/hero/TimelineComp";
import TimelineJourney from "@/components/hero/TimelineJourny";
import WhatCustomerSays from "@/components/hero/WhatCustomerSays";
import WhyConvoze from "@/components/hero/WhyConvoze";
import WhyTrustUs from "@/components/hero/WhyTrustUs";
import Orb from "@/components/org";
import ContactUs from "@/components/Pages/ContactUs";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function Home() {
  const lenisRef = useRef(null);

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


  return (
    <motion.div ref={lenisRef} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
        <Hero />

      {/* <Customers/> */}
      {/* <Container className={" justify-between"}>

        <StatsCart />
      </Container> */}

      <WhyConvoze />
      <Container className={" justify-between"}>

        <FeaturesCart />

      </Container>
      {/* <Timelinecomp/> */}

      <TimelineJourney />


      <Container className={" justify-between"}>

        <SolutionCarts />



      </Container>

      <WhyTrustUs />




      <Container className={" justify-between"}>

        <Industries />




      </Container>
      <Container className={" justify-between"}>

        <WhatCustomerSays />



      </Container>
      <Container className={" justify-between"}>

        <BookDemo />



      </Container>
      <Container className={" justify-between"}>

        <Faq />


      </Container>
      <Container className={" justify-between"}>


<ContactUs />
</Container>

    </motion.div>
  );
}
