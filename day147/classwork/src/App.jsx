import React, { useState } from "react";
import { Moon, Sun, sunMoon } from "lucide-react";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const handleDarkMode = () => {
    setIsDark(!isDark);
    console.log(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="bg-blue-950">
      <p>Lomi</p>
      <div className="cursor-pointer relative">
      <sunMoon className="gray:hidden" onClick={() => document.documentElement.classList.add("gray")}></sunMoon>
      </div>
      <div onClick={handleDarkMode} className="cursor-pointer">
        <Moon size={30} className="absolute hidden dark:block" />
        <Sun size={30} className="dark:hidden" />
      </div>
    </div>
  );
}
