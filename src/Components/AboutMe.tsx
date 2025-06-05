"use client";
import { FaNodeJs, FaRegFilePdf, FaReact, FaAws } from "react-icons/fa";
import { SiPostgresql, SiNestjs, SiMongodb, SiRazorpay, SiSocketdotio } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import Image from "next/image";

export default function AboutMe() {
    const experiencesData = [
        {
            role: "Software Developer",
            company: "Mighty Ventures",
            duration: "September 2024 - Precent",
        },
        {
            role: "Junior Software Developer",
            company: "Tridhya Tech",
            duration: "May 2022 - September 2024",
        },
    ];

    const educationData = [
        {
            deggre: "MSC (CA & IT)",
            college: "Ganpat University",
        },
        {
            deggre: "BSC (CA & IT)",
            college: "Hemchandracharya North Gujarat University",
        },
    ];

    return (
        <section className="dark:bg-[#111111] text-white" id="about_me">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Image Section */}
                <div className="flex justify-center">
                    <div className="w-full max-w-lg">
                        <Image src="/svg/HeroImage.svg" alt="About Me" width={500} height={500} className="w-full object-cover" />
                    </div>
                </div>
                {/* Text Section */}
                <div>
                    <h2 className="text-3xl font-bold mb-2 dark:text-white text-black">About Me</h2>
                    <p className="text-orange-500 mb-6">User Interface And User Experience</p>
                    <p className="dark:text-gray-300 mb-6 leading-relaxed text-justify text-black">
                        Passionate MERN Stack developer with over <b>3+ year</b> of experience building scalable web applications and RESTful APIs. Proficient
                        in JavaScript, Express, Nest js and MongoDB, with a strong focus on clean, maintainable code and performance optimization. Dedicated to
                        continuous learning and eager to contribute to innovative projects within collaborative, fast-paced teams.
                    </p>
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

            {/* Experience Section */}
            <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6 dark:text-white text-black">Education</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {educationData.map((item, index) => (
                        <div className="dark:bg-[#1c1c1c] rounded-lg p-5 shadow-md hover:shadow-orange-500/40 transition duration-300" key={index}>
                            <h4 className="text-lg font-semibold dark:text-white text-black">{item?.deggre}</h4>
                            <p className="text-orange-400 text-sm">{item?.college}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Experience Section */}
            <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6 dark:text-white text-black">Experience</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiencesData.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6 dark:text-white text-black">Skills</h3>
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
                    <SkillCard Icon={FaNodeJs} label="Node Js" className={"fade-up-left"} />
                    <SkillCard Icon={SiNestjs} label="Nest Js" className={"fade-down-left"} />
                    <SkillCard Icon={FaReact} label="React Js" className={"fade-down-left"} />
                    <SkillCard Icon={RiNextjsLine} label="Next Js" className={"fade-up-left"} />
                    <SkillCard Icon={RiTailwindCssFill} label="Tailwind CSS" className={"fade-down-left"} />
                    <SkillCard Icon={SiPostgresql} label="Postgresql" className={"fade-up-left"} />
                    <SkillCard Icon={SiMongodb} label="Mongoose" className={"fade-down-left"} />
                    <SkillCard Icon={FaAws} label="AWS" className={"fade-up-left"} />
                    <SkillCard Icon={SiRazorpay} label="Razorpay" className={"fade-down-left"} />
                    <SkillCard Icon={SiSocketdotio} label="Socket.io " className={"fade-up-left"} />
                </div>
            </div>
        </section>
    );
}

interface SkillCardProps {
    label: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
    className: string;
}

interface ExperienceCardProps {
    role: string;
    company: string;
    duration: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ label, Icon, className }) => {
    return (
        <div className={`flex flex-col items-center dark:bg-[#1c1c1c] p-4 rounded-lg shadow hover:scale-105 transition duration-300`} data-aos={className}>
            <Icon className="text-3xl text-orange-500 mb-2" />
            <h4 className="dark:text-white text-black font-semibold">{label}</h4>
        </div>
    );
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ role, company, duration }) => {
    return (
        <div className="dark:bg-[#1c1c1c] rounded-lg p-5 shadow-md hover:shadow-orange-500/40 transition duration-300">
            <h4 className="text-lg font-semibold dark:text-white text-black">{role}</h4>
            <p className="text-orange-400 text-sm">{company}</p>
            <p className="dark:text-gray-400 text-black text-xs mb-2">{duration}</p>
        </div>
    );
};
