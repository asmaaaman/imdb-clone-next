"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeChanges = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div>
      {mounted && (
        <div>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="text-xl p-2 hover:text-yellow-400 transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <MdLightMode className="tex-xl cursor-pointer hover:text-amber-500" />
            ) : (
              <MdDarkMode className="tex-xl cursor-pointer hover:text-amber-500" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeChanges;
