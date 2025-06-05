import Image from "next/image";
import { FaLinkedinIn, FaRegFilePdf } from "react-icons/fa";

const Home = () => {
    return (
        <section className="container mx-auto grid md:grid-cols-2 gap-5 items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id="hero">
            {/* --- Text & Buttons Content --- */}
            <div className="text-center md:text-left order-2 md:order-1 ">
                <p className="text-lg text-[#707070]">Hi I am</p>
                <p className="text-4xl lg:text-2xl font-bold text-[#959595] mt-2">Harshil Prajapati</p>
                <h3 className="text-4xl lg:text-5xl font-extrabold mt-2 tracking-wide bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-transparent bg-clip-text">
                    MERN Stack Developer
                </h3>

                {/* Action Buttons */}
                <div className="mt-8 flex justify-center md:justify-start space-x-4">
                    <button
                        onClick={() => window.open("https://www.linkedin.com/in/harshil-prajapati-softdev/")}
                        className="text-gray-400 hover:text-white border border-gray-600 rounded-full p-2 transition-colors cursor-pointer"
                    >
                        <FaLinkedinIn size={20} />
                    </button>
                    <a
                        href="/resume.pdf"
                        download="Harshil-CV.pdf"
                        className="bg-orange-500 text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors cursor-pointer flex gap-4 w-fit"
                    >
                        <FaRegFilePdf className="mt-1" />
                        Download CV
                    </a>
                </div>
            </div>

            {/* --- Image Content --- */}
            <div className="flex justify-center order-1 md:order-2">
                <div className="relative">
                    <Image src="/svg/AboutMe.svg" alt="Mahmood Fazile, UI/UX Designer" width={600} height={600} className="object-cover z-10" priority />
                </div>
            </div>
        </section>
    );
};

export default Home;
