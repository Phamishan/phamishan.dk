import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Hjem | Phamishan",
    description: "Phamishans personlige hjemmeside",
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
        <html lang="da">
            <body className={`${spaceGrotesk.className} antialiased`} suppressHydrationWarning>{children}</body>
        </html>
    );
}
