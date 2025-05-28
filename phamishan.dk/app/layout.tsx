import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Home | Phamishan",
    description: "Phamishan's personal website",
};

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${spaceGrotesk.className} antialiased`}>{children}</body>
        </html>
    );
}
