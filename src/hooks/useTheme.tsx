import { useState, useEffect } from "react";

export const useTheme = () => {
  const [isLightMode, setIsLightMode] = useState(() => {
    // Check localStorage for saved theme preference, default to dark mode
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light";
  });

  useEffect(() => {
    // Apply theme class to document root
    if (isLightMode) {
      document.documentElement.classList.add('light');
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem("theme", "dark");
    }
  }, [isLightMode]);

  return { isLightMode, setIsLightMode };
};