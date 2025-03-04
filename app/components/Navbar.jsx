"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useDarkMode } from "../../app/context/DarkModeContext"; // Import DarkMode Hook

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const pathname = usePathname();
  const { isDarkMode, setIsDarkMode } = useDarkMode(); // Get dark mode state from context

  // Ensure dark mode persists across pages
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to determine link href
  const getLinkHref = (anchor) => {
    return pathname === "/" ? `#${anchor}` : `/#${anchor}`;
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="Header Background" className="w-full" priority />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""
        }`}
      >
        <Link href="/">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </Link>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li className="font-Ovo"><Link href={getLinkHref("top")}>Home</Link></li>
          <li className="font-Ovo"><Link href={getLinkHref("about")}>About Me</Link></li>
          <li className="font-Ovo"><Link href={getLinkHref("services")}>Services</Link></li>
          <li className="font-Ovo"><Link href={getLinkHref("work")}>My Work</Link></li>
          <li className="font-Ovo"><Link href={getLinkHref("contact")}>Contact me</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6" />
          </button>
          <Link href={getLinkHref("contact")}>
            <div className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50">
              Contact
              <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="arrow-icon" className="w-3" />
            </div>
          </Link>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-5 cursor-pointer" />
          </div>
          <li><Link href={getLinkHref("top")}><span className="font-Ovo cursor-pointer" onClick={closeMenu}>Home</span></Link></li>
          <li><Link href={getLinkHref("about")}><span className="font-Ovo cursor-pointer" onClick={closeMenu}>About Me</span></Link></li>
          <li><Link href={getLinkHref("services")}><span className="font-Ovo cursor-pointer" onClick={closeMenu}>Services</span></Link></li>
          <li><Link href={getLinkHref("work")}><span className="font-Ovo cursor-pointer" onClick={closeMenu}>My Work</span></Link></li>
          <li><Link href={getLinkHref("contact")}><span className="font-Ovo cursor-pointer" onClick={closeMenu}>Contact Me</span></Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
