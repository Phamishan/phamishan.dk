import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mit arbejde | Phamishan",
    description: "Phamishans personlige hjemmeside",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
