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
        <section className="bg-[#111111] text-white py-16 px-4 sm:px-6 lg:px-20" id="about_me">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Image Section */}
                <div className="flex justify-center">
                    <div className="w-full max-w-sm">
                        <Image src="/about.png" alt="About Me" width={400} height={300} className="rounded-lg w-full object-cover" />
                    </div>
                </div>
                {/* Text Section */}
                <div>
                    <h2 className="text-3xl font-bold mb-2">About Me</h2>
                    <p className="text-orange-500 mb-6">User Interface And User Experience And Also Video Editing</p>
                    <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                        Passionate MERN Stack developer with over <b>3+ Year</b> of experience building scalable web applications and RESTful APIs. Proficient
                        in JavaScript, Express, Nest js and MongoDB, with a strong focus on clean, maintainable code and performance optimization. Dedicated to
                        continuous learning and eager to contribute to innovative projects within collaborative, fast-paced teams.
                    </p>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 flex items-center gap-2">
                        <FaRegFilePdf /> Download CV
                    </button>
                </div>
            </div>

            {/* Experience Section */}
            <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6">Education</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {educationData.map((item, index) => (
                        <div className="bg-[#1c1c1c] rounded-lg p-5 shadow-md hover:shadow-orange-500/40 transition duration-300" key={index}>
                            <h4 className="text-lg font-semibold text-white">{item?.deggre}</h4>
                            <p className="text-orange-400 text-sm">{item?.college}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Experience Section */}
            <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6">Experience</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiencesData.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6">Skills</h3>
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
                    <SkillCard Icon={FaNodeJs} label="Node Js" percent={80} />
                    <SkillCard Icon={SiNestjs} label="Nest Js" percent={70} />
                    <SkillCard Icon={FaReact} label="React Js" percent={60} />
                    <SkillCard Icon={RiNextjsLine} label="Next Js" percent={60} />
                    <SkillCard Icon={RiTailwindCssFill} label="Tailwind CSS" percent={50} />
                    <SkillCard Icon={SiPostgresql} label="Postgresql" percent={60} />
                    <SkillCard Icon={SiMongodb} label="Mongoose" percent={60} />
                    <SkillCard Icon={FaAws} label="AWS" percent={50} />
                    <SkillCard Icon={SiRazorpay} label="Razorpay" percent={50} />
                    <SkillCard Icon={SiSocketdotio} label="Socket.io  " percent={50} />
                </div>
            </div>
        </section>
    );
}

interface SkillCardProps {
    percent: number;
    label: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
}
interface ExperienceCardProps {
    role: string;
    company: string;
    duration: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ label, Icon }) => {
    return (
        <div className="flex flex-col items-center bg-[#1c1c1c] p-4 rounded-lg shadow hover:scale-105 transition duration-300">
            <Icon className="text-3xl text-orange-500 mb-2" />
            <h4 className="text-white font-semibold">{label}</h4>
            {/* <p className="text-sm text-gray-400">{percent}%</p> */}
        </div>
    );
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ role, company, duration }) => {
    return (
        <div className="bg-[#1c1c1c] rounded-lg p-5 shadow-md hover:shadow-orange-500/40 transition duration-300">
            <h4 className="text-lg font-semibold text-white">{role}</h4>
            <p className="text-orange-400 text-sm">{company}</p>
            <p className="text-gray-400 text-xs mb-2">{duration}</p>
        </div>
    );
};
