"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors cursor-pointer" onClick={toggleTheme}>
            {theme !== "dark" ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
        </button>
    );
}
