import { FaUsers } from "react-icons/fa";

const services = [
    {
        title: "App Design",
        description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
    },
    {
        title: "App Design",
        description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
    },
    {
        title: "App Design",
        description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
    },
    {
        title: "App Design",
        description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
    },
    {
        title: "App Design",
        description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
    },
    {
        title: "App Design",
        description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
    },
];

export default function Services() {
    return (
        <div className="dark:bg-[#0D0D0D] text-white  px-4" id="service_layout">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-4 dark:text-white text-black">Services</h2>
                <p className="text-gray-400 mb-12">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="dark:bg-[#1A1A1A] p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
                            <div className="flex justify-center mb-4">
                                <FaUsers className="text-orange-500 text-4xl" />
                            </div>
                            <h3 className="text-orange-500 font-semibold text-lg mb-2">{service.title}</h3>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
