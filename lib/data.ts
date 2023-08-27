import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hangman from "../public/hangman.jpg";
import Mudemy from "../public/Mudemy.png";
import netflix from "../public/netflix.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Hangman Game",
    description:
      "I worked as a student of re:coded bootcamp to build a hangman game. It has features like play again, fetching random words from API and game functionality.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    imageUrl: hangman,
  },
  {
    title: "Mudemy",
    description:
      "Its a clone of Udemy. It has features like login, register, enroll, search, filter, pagination, etc.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Redux-Toolkit",
      "Firebase",
      "Auth",
      "React-Hook-Form",
      "Swiper",
    ],
    imageUrl: Mudemy,
  },
  {
    title: "Netflix Clone",
    description:
      "Its a movie streaming app. Tmdb API is used to fetch movies and shows. It has features like  search, filter, pagination, etc. ",
    tags: ["HTML", "JavaScript", "Tailwind", "API"],
    imageUrl: netflix,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Firebase",
  "Redux",
  "Redux-Toolkit",
  "React-Hook-Form",
  "Swiper",
  "Clerk",
  

] as const;
