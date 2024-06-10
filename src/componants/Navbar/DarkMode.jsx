import React, { useState, useEffect } from 'react';
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const element = document.documentElement;
        const isDark = theme === "dark";
        element.classList.toggle("dark", isDark);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));

    return (
        <img
            src={theme === "light" ? LightButton : DarkButton}
            alt={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
            onClick={toggleTheme}
            className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)] transition-all duration-300 absolute right-0 top-3 z-10"
        />
    );
};

export default DarkMode;

