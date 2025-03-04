"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define an array of skill data
const skillsData = [
  {
    id: 1,
    title: "HTML5",
    description: "Responsive design and modern layouts.",
    image: "/skillsicons/html.svg",
    percentage: 95,
  },
  {
    id: 2,
    title: "CSS",
    description: "Responsive design and modern layouts.",
    image: "/skillsicons/css.svg",
    percentage: 95,
  },
  {
    id: 3,
    title: "JavaScript",
    description: "Modern JavaScript for dynamic web apps.",
    image: "/skillsicons/javascript.svg",
    percentage: 85,
  },
  {
    id: 4,
    title: "MongoDB",
    description: "NoSQL database management.",
    image: "/skillsicons/mongodb.svg",
    percentage: 70,
  },
  {
    id: 5,
    title: "ExpressJS",
    description:
      "A minimal and flexible Node.js framework for building robust APIs and web applications.",
    image: "/skillsicons/express.svg",
    percentage: 90,
  },
  {
    id: 6,
    title: "React",
    description: "Building interactive UIs with React.",
    image: "/skillsicons/react.svg",
    percentage: 80,
  },
  {
    id: 7,
    title: "Next.js",
    description: "Server-side rendering and static generation.",
    image: "/skillsicons/next-js.svg",
    percentage: 80,
  },
  {
    id: 8,
    title: "Node.js",
    description: "Server-side development and APIs.",
    image: "/skillsicons/node.js.svg",
    percentage: 75,
  },
  {
    id: 9,
    title: "Python",
    description: "Data analysis, scripting, and web development.",
    image: "/skillsicons/python.svg",
    percentage: 90,
  },
  {
    id: 10,
    title: "Java",
    description:
      "A robust, object-oriented programming language used for building enterprise-scale applications.",
    image: "/skillsicons/java.svg",
    percentage: 95,
  },
  {
    id: 11,
    title: "Bootstrap",
    description:
      "A powerful CSS framework for responsive design and rapid UI development.",
    image: "/skillsicons/bootstrap.svg",
    percentage: 95,
  },
  {
    id: 12,
    title: "Git",
    description: "Version control and collaboration.",
    image: "/skillsicons/git.svg",
    percentage: 85,
  },
  {
    id: 13,
    title: "Redux",
    description:
      "A predictable state container for JavaScript apps, simplifying state management for large-scale applications.",
    image: "/skillsicons/redux.svg",
    percentage: 85,
  },
  {
    id: 14,
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework that speeds up UI development and allows for custom, responsive designs.",
    image: "/skillsicons/tailwindcss.svg",
    percentage: 90,
  },
  {
    id: 15,
    title: "GitHub",
    description:
      "A collaborative platform for version control and project management using Git.",
    image: "/skillsicons/github.svg",
    percentage: 95,
  },
  {
    id: 16,
    title: "C",
    description:
      "A powerful, low-level programming language for system and application development.",
    image: "/skillsicons/c-1.svg",
    percentage: 90,
  },
  {
    id: 17,
    title: "C++",
    description:
      "An extension of C with object-oriented features for high-performance applications.",
    image: "/skillsicons/cpp.svg",
    percentage: 85,
  },
];

const LanguageSkills = () => {
  return (
    <section className="py-12 px-8 bg-gray-50 dark:bg-[#11001F]">
      {/* Grid Layout: 1 column on small screens, 2 on medium, 3 on large */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill) => (
          <motion.div
            key={skill.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} // Use animate to trigger on mount
            transition={{ duration: 0.5, delay: skill.id * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Skill Icon */}
            <div className="relative w-20 h-20 mb-4">
              <Image
                src={skill.image}
                alt={skill.title}
                fill
                className="object-contain"
              />
            </div>
            
            {/* Skill Title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              {skill.title}
            </h3>
            
            {/* Skill Description */}
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-4">
              {skill.description}
            </p>
            
            {/* Animated Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
              <motion.div
                className="bg-blue-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
            
            {/* Percentage Text */}
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {skill.percentage}%
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LanguageSkills;
