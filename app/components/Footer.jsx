"use client";
import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useDarkMode } from "../../app/context/DarkModeContext"; // ✅ Import DarkMode Hook

const Footer = () => {
  const { isDarkMode } = useDarkMode(); // ✅ Get dark mode state from context

  return (
    <div className="mt-20">
      <div className="text-center">
        {/* ✅ Corrected logo toggle using DarkMode context */}
        <Image 
          key={isDarkMode ? "dark-logo" : "light-logo"}
          src={isDarkMode ? assets.logo_dark : assets.logo} 
          alt="logo" 
          className="w-36 mx-auto mb-2" 
          priority 
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image 
            key={isDarkMode ? "dark-mail" : "light-mail"}
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
            alt="mail icon" 
            className="w-6" 
          /> 
          premsatarekar@gmail.com 
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Prem Satarekar. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/premsatarekar">GitHub</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/prem-satarekar">LinkedIn</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://x.com/prem_satarekar">Twitter</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
