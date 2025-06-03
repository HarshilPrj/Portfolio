import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import ClientWrapper from "./ClientWrapper"; // Adjust path if needed

const lato = Lato({
    variable: "--font-lato",
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
    style: ["normal", "italic"],
    fallback: ["lato", "sans-serif"],
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${lato.className}`}>
                <ThemeProvider>
                    <ClientWrapper>{children}</ClientWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
