"use client";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

export default function Layout() {
    return (
        <main className="min-h-screen text-white dark:bg-[#111111] bg-white">
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
