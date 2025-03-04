"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; // Ensure the correct relative path
import Footer from "../components/Footer";
import LanguageSkills from "../components/LanguageSkills";

export default function LanguagePage() {
  // Manage dark mode state here (or via a global context if you prefer)
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <motion.div
        className="pt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-bold text-center my-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Languages
        </motion.h1>
        <LanguageSkills />
      </motion.div>
      <Footer />
    </>
  );
}
