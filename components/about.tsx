"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        👋 Hello! 🧑‍🎓 I'm a front-end developer with a background in civil
        engineering. I graduated re:coded's front-end web development bootcamp.
      </p>

      <p className="mb-3">
        📚 After working as a field engineer for 2 years, I discovered my
        passion for coding while working on a personal project. I found coding
        to be fun and enjoyable due to my love for problem-solving, and I have
        since been working hard to improve my skills. I've learned programming
        languages such as ReactJS and NextJs, and gained experience with
        React-Redux through various training programs and self-study.
      </p>

      <p className="mb-3">
        🎯 I keep myself mentally and physically fit by reading books and
        exercising regularly. As someone with high self-awareness, my goal is to
        work for a productive and socially responsible company in the future.
      </p>
    </motion.section>
  );
}
