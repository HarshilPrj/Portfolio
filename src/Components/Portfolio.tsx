"use client";

import Image from "next/image";

let projects = [
    { id: 1, name: "Event Bazaar ", client: "Indian", image: "/event.png" },
    { id: 2, name: "Iron Depot", client: "Canada", image: "/iron-depot.png" },
    { id: 3, name: "Solo Design Studio", client: "USA", image: "/portfolio.png" },
];

export default function Portfolio() {
    return (
        <section className="dark:bg-black dark:text-white text-black" id="projects">
            <div className="max-w-7xl mx-auto">
                <p className="text-3xl font-bold text-center mb-8">
                    Projects <span className="text-sm">(Top 3)</span>
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg">
                            <div className="relative w-full h-64">
                                <Image src={project.image} alt={project.name} fill className="object-center" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{project.name}</h3>
                                <p className="text-sm text-gray-400">{project.client} Based Project</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
