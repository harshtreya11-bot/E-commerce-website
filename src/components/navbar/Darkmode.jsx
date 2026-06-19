import React, { useEffect } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const Darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative w-12 h-12">
      {/* Light button — shown in light mode, click to go dark */}
      <img
        src={LightButton}
        alt="Switch to dark mode"
        onClick={() => setTheme("dark")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
          transition-all duration-300 absolute top-0 right-0 z-10
          ${theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      />
      {/* Dark button — shown in dark mode, click to go light */}
      <img
        src={DarkButton}
        alt="Switch to light mode"
        onClick={() => setTheme("light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(255,255,255,0.7)]
          transition-all duration-300
          ${theme === "dark" ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
    </div>
  );
};

export default Darkmode;
