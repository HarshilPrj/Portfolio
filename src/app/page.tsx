"use client";
import AboutMe from "@/Components/AboutMe";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import Services from "@/Components/Services";
import Stats from "@/Components/Stats";

export default function Layout() {
    return (
        <main className="bg-[#111111] min-h-screen text-white">
            <Header />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:block !grid gap-20">
                    <Hero />
                    <Stats />
                    <Services />
                    <AboutMe />
                    <Portfolio />
                    {/* <ContactForm /> */}
                    <Footer />
                </div>
            </div>
        </main>
    );
}
