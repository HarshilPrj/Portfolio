import { FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="dark:bg-[#1a1a1a] dark:text-white text-black py-6 px-4" id="contact_me">
            <div className="max-w-6xl mx-auto text-center space-y-6">
                {/* Logo */}
                <div className="text-orange-500 font-bold text-xl">Contact Me</div>

                {/* Contact Details */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm dark:text-gray-300">
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-sm" />
                        <span>prajapatiharshil625@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-sm" />
                        <span>+91 9824131485</span>
                    </div>
                    <div
                        className="lex items-center gap-2 cursor-pointer"
                        onClick={() => window.open("https://www.linkedin.com/in/harshil-prajapati-softdev/")}
                    >
                        <FaLinkedinIn />
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-4 w-full max-w-md mx-auto" />

                {/* Credit */}
                <p className="text-xs text-gray-500">Copyright © 2025. All rights reserved.</p>
            </div>
        </footer>
    );
}
