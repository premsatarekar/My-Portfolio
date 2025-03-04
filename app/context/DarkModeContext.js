"use client";
import { createContext, useState, useEffect, useContext } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Fetch dark mode preference from localStorage before rendering
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("darkMode")) || false;
    }
    return false;
  });

  const [isLoaded, setIsLoaded] = useState(false); // Ensure theme is applied before rendering

  useEffect(() => {
    // Apply theme class to <html> immediately
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    setIsLoaded(true); // Set loaded state after applying theme
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Prevent rendering until theme is applied
  if (!isLoaded) return null;

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
