"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const educationData = [
  {
    id: 1,
    image: "/images/college_logo.png",
    institution:
      "BLDEA’s V.P Dr. P.G. Halakatti College of Engineering and Technology",
    year: "2024",
    degree: "B.E in Electronics and Communication",
    University: "VTU (Visvesvaraya Technological University)",
    location: "Vijayapura, Karnataka",
    score: "CGPA: 7.6",
    icon: "🎓",
    link: "https://www.bldeacet.ac.in/", // Added link property
  },
  {
    id: 2,
    image: "/images/pu_college_logo.png",
    institution: "RKM PU Science College, Vijayapura",
    year: "2020",
    degree: "KSEEB (Class XII)",
    location: "Vijayapura, Karnataka",
    score: "Aggregate: 76.28%",
    icon: "📘",
    link: "https://www.facebook.com/100064124943956/photos/",
  },
  {
    id: 3,
    image: "/images/high_school_logo.png",
    institution: "RABINDRANATH TAGORE HIGH SCHOOL, Vijayapura",
    year: "2018",
    degree: "KSEEB (Class X)",
    location: "Vijayapura, Karnataka",
    score: "Aggregate: 85.28%",
    icon: "🏫",
    link: "https://www.instagram.com/srt_school/",
  },
];

const EducationTimeline = () => {
  return (
    <div className="py-16 px-6 bg-white text-black dark:bg-[#11001F] dark:text-white">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10 mt-10">
        Education Timeline
      </h2>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        {/* <div className="absolute left-1/2 w-1 bg-blue-400 dark:bg-white h-full transform -translate-x-1/2"></div> */}

        {/* <div className="absolute left-1.5 sm:left-1/2 w-1 bg-blue-400 dark:bg-white h-full sm:transform sm:-translate-x-1/2"></div> */}

        <motion.div
          className="absolute left-1.5 sm:left-1/2 w-1 bg-blue-400 dark:bg-white sm:transform sm:-translate-x-1/2"
          initial={{ height: 0 }} // Starts from height 0 (invisible)
          animate={{ height: "100%" }} // Expands to full height
          transition={{ duration: 2.5, ease: "easeInOut" }} // Smooth animation
        />

        {/* Timeline Items */}
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex items-center w-full mb-10 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Icon Marker with correct education icons */}

            {/* trial 1 */}
            {/* <div className="absolute left-1/2 w-12 h-12 bg-blue-500 text-white flex items-center justify-center text-2xl font-bold rounded-full transform -translate-x-1/2 border-4 border-blue-500 dark:border-white">
              {edu.icon}
            </div> */}

            {/* trial 2 */}
            {/* <div className="absolute left-0 sm:left-1/2 w-12 h-12 bg-blue-500 text-white flex items-center justify-center text-2xl font-bold rounded-full transform translate-x-0 sm:-translate-x-1/2 border-4 border-blue-500 dark:border-white">
              {edu.icon}
            </div> */}

            {/* trial 3 */}
            <div className="absolute left-2 sm:left-1/2 w-12 h-12 bg-blue-500 text-white flex items-center justify-center text-xl font-bold rounded-full transform -translate-x-1/2 border-4 border-blue-500 dark:border-white">
              {edu.icon}
            </div>

            {/* Arrow pointing to the circle on vertical bar */}

            {/* 1st */}
            {/* <div
              className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-solid ${
                index % 2 === 0
                  ? "border-l-[15px] border-l-blue-500 dark:border-l-white border-y-[10px] border-y-transparent left-[calc(46%-10px)]"
                  : "border-r-[15px] border-r-blue-500 dark:border-r-white border-y-[10px] border-y-transparent right-[calc(46%-10px)]"
              }`}
            ></div> */}

            {/* Mobile Arrow: Always attached to the left side of the card, pointing left */}
            <div
              className="absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-solid 
             border-r-[15px] border-r-blue-500 dark:border-r-white 
             border-y-[10px] border-y-transparent left-[12%] sm:hidden"
            ></div>

            {/* Desktop Arrow: Alternating based on index */}
            <div
              className={`hidden sm:block absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-solid ${
                index % 2 === 0
                  ? "border-l-[15px] border-l-blue-500 dark:border-l-white border-y-[10px] border-y-transparent left-[calc(46%-10px)]"
                  : "border-r-[15px] border-r-blue-500 dark:border-r-white border-y-[10px] border-y-transparent right-[calc(46%-10px)]"
              }`}
            ></div>

            {/* Timeline Card */}
            <div className="relative w-[85%] sm:w-[45%] ml-auto sm:ml-0 bg-white text-black dark:bg-[#11001F] dark:text-white shadow-lg rounded-lg p-5 border border-black dark:border-white">
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{edu.institution}</h3>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    {edu.year}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {edu.degree}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {edu.University}
              </p>
              <p className="text-gray-500 dark:text-gray-400">{edu.location}</p>
              <p className="text-gray-900 dark:text-gray-200 font-semibold">
                {edu.score}
              </p>
              <button
                onClick={() => edu.link && window.open(edu.link, "_blank")}
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
