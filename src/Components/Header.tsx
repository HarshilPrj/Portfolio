import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [activeTab, setActiveTab] = useState("hero");

    const sections = ["hero", "service_layout", "about_me", "projects", "contact_me"];

    const handleTab = (id: string) => {
        setActiveTab(id);
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -190;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: id === "hero" ? 0 : y, behavior: "smooth" });
        }
    };

    const handleScroll = () => {
        for (const id of sections) {
            const section = document.getElementById(id);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 200 && rect.bottom >= 200) {
                    setActiveTab(id);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <header className="py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 dark:bg-black bg-white">
            <div className="container mx-auto flex justify-between items-center">
                <button className="md:hidden dark:text-white text-black">
                    <HiMenuAlt3 size={28} />
                </button>

                <h1 className="text-2xl font-bold text-white flex-grow text-center md:flex-grow-0 md:text-left" />

                <nav className="hidden md:flex items-center space-x-8">
                    {sections.map((sectionId) => {
                        const labelMap = {
                            hero: "Home",
                            service_layout: "Services",
                            about_me: "About me",
                            projects: "Projects",
                            contact_me: "Contact me",
                        };

                        return (
                            <button
                                key={sectionId}
                                className={`${
                                    activeTab === sectionId ? "text-orange-500" : "text-black dark:text-white"
                                } hover:text-orange-500 transition-colors cursor-pointer font-semibold`}
                                onClick={() => handleTab(sectionId)}
                            >
                                {labelMap[sectionId as keyof typeof labelMap]}
                            </button>
                        );
                    })}
                </nav>

                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
