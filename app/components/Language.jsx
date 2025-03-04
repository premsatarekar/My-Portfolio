"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; 
// import Footer from "../components/Footer";
import LanguageSkills from "../components/LanguageSkills";

export default function LanguagePage() {
  return (
    <>
      <Navbar />
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
      {/* <Footer /> */}
    </>
  );
}
