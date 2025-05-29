"use client";

import { useState } from "react";

const filters = ["All", "Website Design", "App Mobile Design", "App Desktop", "Branding"];

const projects = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    name: "Name Project",
    category: "Categories",
    image: "/portfolio.png",
}));

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <section className="bg-black py-12 px-4 sm:px-6 lg:px-12 text-white" id="portfolio">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg">
                            <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{project.name}</h3>
                                <p className="text-sm text-gray-400">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
