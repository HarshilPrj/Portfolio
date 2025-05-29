import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ThemeProvider } from "next-themes";

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${lato.variable} antialiased`}>
                <ThemeProvider attribute={"class"} enableSystem defaultTheme="system">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
