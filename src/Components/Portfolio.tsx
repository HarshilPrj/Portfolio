"use client";

import Image from "next/image";

const projects = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    name: "Name Project",
    category: "Categories",
    image: "/portfolio.png",
}));

export default function Portfolio() {
    return (
        <section className="dark:bg-black py-12 px-4 sm:px-6 lg:px-12 dark:text-white text-black" id="portfolio">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg">
                            <div className="relative w-full h-64">
                                <Image src={project.image} alt={project.name} fill className="object-cover" />
                            </div>
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
