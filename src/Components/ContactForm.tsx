"use client";
import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        timeline: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", form);
    };

    return (
        <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12" id="contact_me">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Contact me</h2>
                <p className="text-center text-gray-400 mb-10">Cultivating Connections: Reach Out And Connect With Me</p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        className="bg-[#1e1e1e] text-white px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="bg-[#1e1e1e] text-white px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        className="bg-[#1e1e1e] text-white px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="bg-[#1e1e1e] text-white px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        <option value="">Service Of Interest</option>
                        <option value="web">Website Design</option>
                        <option value="app">App Development</option>
                        <option value="branding">Branding</option>
                    </select>
                    <input
                        type="text"
                        name="timeline"
                        placeholder="Timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className="bg-[#1e1e1e] text-white px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <textarea
                        name="message"
                        placeholder="Project Details..."
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="bg-[#1e1e1e] text-white px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-500 md:col-span-1"
                    />
                    <div className="md:col-span-2 text-right">
                        <button
                            type="submit"
                            className="border border-gray-400 text-white px-6 py-2 rounded hover:bg-orange-500 hover:border-orange-500 transition"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
