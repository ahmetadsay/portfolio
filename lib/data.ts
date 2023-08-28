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
    title: "Re:coded Bootcamp",
    location: "Turkey",
    description:
    "Completing a 4.5-month immersive web development bootcamp, with 300+ hours of curricula and project-based learning.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-present",
  },
  {
    title: "Kodluyoruz Bootcamp",
    location: "Turkey",
    description:
      "Kodluyoruz bootcamp is one of the most effective bootcamps in Turkey with a high-paced, intensive program and an acceptance rate of around 5-6% with a total of 5 different projects including the final project.",
      icon: React.createElement(LuGraduationCap),
    date: "2022",
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
