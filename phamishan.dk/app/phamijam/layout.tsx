import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "PhamiJam | Phamishan",
    description: "PhamiJam is a free music player for desktop and mobile.",
};

export default function PhamiJamLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
