import { ThemeProvider } from "next-themes";
import React from "react";

const Provider = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <div
        className="light:text-black dark:bg-red-400 dark:text-red-500
     min-h-screen select-none transition-colors duration-300"
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Provider;
