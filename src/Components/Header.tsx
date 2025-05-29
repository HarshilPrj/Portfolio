import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

const Header = () => {
    const [activeTab, setActiveTab] = useState("hero");
    const { theme, setTheme } = useTheme();

    const handleTab = (id: string) => {
        setActiveTab(id);
        const section = document.getElementById(id);

        if (section) {
            const yOffset = -190;
            const rectTop = section.getBoundingClientRect().top;
            const pageYOffset = window.pageYOffset;
            const y = rectTop + pageYOffset + yOffset;

            window.scrollTo({
                top: id === "hero" ? rectTop : y,
                behavior: "smooth",
            });
        }
    };

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header className="py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 dark:bg-black bg-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Mobile Menu Button - visible on mobile, hidden on medium screens and up */}
                <button className="md:hidden text-white">
                    <HiMenuAlt3 size={28} />
                </button>

                {/* Logo - Text centered on mobile, left-aligned on desktop */}
                <h1 className="text-2xl font-bold text-white flex-grow text-center md:flex-grow-0 md:text-left">
                    <Link href="#">😎</Link>
                </h1>

                {/* Desktop Navigation - hidden on mobile, visible on medium screens and up */}
                <nav className="hidden md:flex items-center space-x-8">
                    <button
                        className={`${activeTab === "hero" ? "text-orange-500" : "text-white"} font-semibold cursor-pointer`}
                        onClick={() => handleTab("hero")}
                    >
                        Home
                    </button>
                    <button
                        className={`${
                            activeTab === "service_layout" ? "text-orange-500" : "text-white"
                        } hover:text-orange-500 transition-colors cursor-pointer`}
                        onClick={() => handleTab("service_layout")}
                    >
                        Services
                    </button>
                    <button
                        className={`${activeTab === "about_me" ? "text-orange-500" : "text-white"} hover:text-orange-500 transition-colors cursor-pointer`}
                        onClick={() => handleTab("about_me")}
                    >
                        About me
                    </button>
                    <button
                        className={`${activeTab === "portfolio" ? "text-orange-500" : "text-white"} hover:text-orange-500 transition-colors cursor-pointer`}
                        onClick={() => handleTab("portfolio")}
                    >
                        Portfolio
                    </button>
                    <button
                        className={`${activeTab === "contact_me" ? "text-orange-500" : "text-white"} hover:text-orange-500 transition-colors cursor-pointer`}
                        onClick={() => handleTab("contact_me")}
                    >
                        Contact me
                    </button>
                </nav>

                {/* Hire Me Button */}
                <button
                    className="bg-orange-500 text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors cursor-pointer"
                    onClick={handleTheme}
                >
                    {theme !== "dark" ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
                </button>
            </div>
        </header>
    );
};

export default Header;
