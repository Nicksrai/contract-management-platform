import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("darkMode") === "1"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("darkMode", "1");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("darkMode", "0");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="text-sm px-3 py-1.5 rounded border 
                 border-gray-300 dark:border-gray-700
                 text-gray-700 dark:text-gray-200
                 hover:bg-gray-100 dark:hover:bg-gray-800
                 transition"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
