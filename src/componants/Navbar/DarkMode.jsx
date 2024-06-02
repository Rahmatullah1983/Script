
import React from 'react'
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem
            ("theme") : "light"
    )
    React.useEffect(() => {
        const element = document.documentElement;

        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };


    return (

        <div>

            <img
                src={theme === "light" ? LightButton : DarkButton}
                alt={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                onClick={toggleTheme}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)] transition-all duration-300 absolute right-0 top-3 z-10`}
            />
        </div>



    )
}

export default DarkMode
