"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Starfield from "react-starfield";
//import MouseGlow from "../components/mouseGlow";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "../components/projectModal";

interface Project {
    name: string;
    image: string;
    images?: string[];
    description: string;
    technology: string;
    type: string;
    downloadUrl?: string;
}

const projectsData: Record<string, Project> = {
    phamibot: {
        name: "PhamiBot",
        image: "/assets/phamibot.png",
        type: "Discord bot",
        technology: "JavaScript",
        description: "En robot lavet til social-platformen Discord, som tilbyder forskellige funktioner mine venner og jeg bruger, såsom tjekke spil statistikker, sende sjove billeder og meget mere. \n\nLavet i JavaScript med hjælp af discord.js biblioteket.",
    },
    phamijam_desktop: {
        name: "PhamiJam - Desktop",
        image: "/assets/phamijam-desktop.png",
        type: "Musikafspiller",
        technology: "Flutter",
        description: "En musikafspiller lavet til Windows Desktop, som skal fungere som en erstatning for Spotify og lignende tjenester. \n\nLavet i Flutter.",
        downloadUrl: "https://github.com/Phamishan/PhamiJam-Desktop/releases/latest/download/phamijam_setup.exe",
    },
    phamijam_mobile: {
        name: "PhamiJam - Mobile",
        image: "/assets/phamijam-mobile.png",
        type: "Musikafspiller",
        technology: "Flutter",
        description: "En musikafspiller lavet til mobil, som skal fungere som en erstatning for Spotify og lignende tjenester. \n\nLavet i Flutter for at kunne køre på både iOS og Android enheder med en enkelt kodebase.",
    },
    phamiapex: {
        name: "PhamiApex",
        image: "/assets/phamiapex.png",
        type: "Spil statistik tjekker",
        technology: "Next.js",
        description: "En hjemmeside til at tjekke spil statistikker for spillet Apex Legends. Den henter data fra offentlige API'er og viser spillerens præstationer, kamphistorik og rangering på en brugervenlig måde.\n\nLavet i Next.js med TypeScript.",
    },
    phamivalo: {
        name: "PhamiValo",
        image: "/assets/phamivalo.png",
        type: "Spil statistik tjekker",
        technology: "Flutter",
        description: "PhamiValo er en mobilapplikation til at tjekke spil statistikker for spillet VALORANT. Den tilbyder at følge spillerpræstationer, kamphistorik og rangeringer.\n\nLavet i Flutter for at kunne køre på både iOS og Android enheder med en enkelt kodebase.",
    },
    phamishandk: {
        name: "Phamishan.dk",
        image: "/assets/phamishan.dk.png",
        type: "Personlig hjemmeside",
        technology: "Next.js",
        description: "Min personlige hjemmeside, hvor jeg præsenterer mine projekter og kompetencer.\n\nLavet i Next.js med TypeScript og Tailwind CSS.",
    },
};

export default function Home() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            {/* <MouseGlow /> */}
            <main className="flex flex-col gap-[32px] row-start-2 items-center">
                <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="text-lg" href="/about">
                                        OM MIG
                                    </a>
                                </li>
                                <li>
                                    <a className="text-lg" href="/work">
                                        MIT ARBEJDE
                                    </a>
                                </li>
                                <li>
                                    <a className="text-lg" href="/contact">
                                        KONTAKT
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <Link className="text-xl font-bold ps-4" href="/">
                            Phamishan
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <a className="text-xl" href="/about">
                                    OM MIG
                                </a>
                            </li>
                            <li>
                                <a className="text-xl" href="/work">
                                    MIT ARBEJDE
                                </a>
                            </li>
                            <li>
                                <a className="text-xl" href="/contact">
                                    KONTAKT
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex gap-3">
                            <a href="mailto:phamishan@phamishan.dk" className="btn btn-ghost btn-circle">
                                <MdEmail size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/phamishan/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com/Phamishan" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle">
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex gap-8 w-full">
                        <div className="flex-1 flex justify-center">
                            <div className="text-2xl font-bold py-5">PhamiBot</div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="text-2xl font-bold py-5">PhamiJam - Desktop</div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="text-2xl font-bold py-5">PhamiJam - Mobile</div>
                        </div>
                    </div>

                    <div className="flex gap-8 w-full">
                        <div className="flex-1 flex justify-center">
                            <div className="card card-border border-neutral-content bg-base-200 w-100 h-100 hover:shadow-lg transition-shadow">
                                <div className="card-body">
                                    <div className="relative w-full h-48 shrink-0">
                                        <Image src="/assets/phamibot.png" alt="PhamiBot" fill className="object-contain cursor-pointer" onClick={() => setSelectedImage("/assets/phamibot.png")} />
                                    </div>
                                    <div>Discord bot</div>
                                    <div className="flex flex-row justify-between items-center">
                                        <div>Lavet i JavaScript</div>
                                        <button className="cursor-pointer btn btn-outline" onClick={() => setSelectedProject(projectsData.phamibot)}>
                                            Læs mere
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="card card-border border-neutral-content bg-base-200 w-100 h-100 hover:shadow-lg transition-shadow">
                                <div className="card-body">
                                    <div className="relative w-full h-48 shrink-0">
                                        <Image src="/assets/phamijam-desktop.png" alt="PhamiJam - Desktop" fill className="object-contain cursor-pointer" onClick={() => setSelectedImage("/assets/phamijam-desktop.png")} />
                                    </div>
                                    <div>Musikafspiller - Desktop App</div>
                                    <div className="flex flex-row justify-between items-center">
                                        <div>Lavet i Flutter</div>
                                        <button className="cursor-pointer btn btn-outline" onClick={() => setSelectedProject(projectsData.phamijam_desktop)}>
                                            Læs mere
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="card card-border border-neutral-content bg-base-200 w-100 h-100 hover:shadow-lg transition-shadow">
                                <div className="card-body">
                                    <div className="relative w-full h-48 shrink-0">
                                        <Image src="/assets/phamijam-mobile.png" alt="PhamiJam - Mobile" fill className="object-contain cursor-pointer" onClick={() => setSelectedImage("/assets/phamijam-mobile.png")} />
                                    </div>
                                    <div>Musikafspiller - Mobil App</div>
                                    <div className="flex flex-row justify-between items-center">
                                        <div>Lavet i Flutter</div>
                                        <button className="cursor-pointer btn btn-outline" onClick={() => setSelectedProject(projectsData.phamijam_mobile)}>
                                            Læs mere
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex gap-8 w-full">
                        <div className="flex-1 flex justify-center">
                            <div className="text-2xl font-bold py-5">PhamiApex</div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="text-2xl font-bold py-5">PhamiValo</div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="text-2xl font-bold py-5">Phamishan.dk</div>
                        </div>
                    </div>

                    <div className="flex gap-8 w-full">
                        <div className="flex-1 flex justify-center">
                            <div className="card card-border border-neutral-content bg-base-200 w-100 h-100 hover:shadow-lg transition-shadow">
                                <div className="card-body">
                                    <div className="relative w-full h-48 shrink-0">
                                        <Image src="/assets/phamiapex.png" alt="PhamiApex" fill className="object-contain cursor-pointer" onClick={() => setSelectedImage("/assets/phamiapex.png")} />
                                    </div>
                                    <div>Spil statistik tjekker</div>
                                    <div className="flex flex-row justify-between items-center">
                                        <div>Lavet i Next.js</div>
                                        <button className="cursor-pointer btn btn-outline" onClick={() => setSelectedProject(projectsData.phamiapex)}>
                                            Læs mere
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="card card-border border-neutral-content bg-base-200 w-100 h-100 hover:shadow-lg transition-shadow">
                                <div className="card-body">
                                    <div className="relative w-full h-48 shrink-0">
                                        <Image src="/assets/phamivalo.png" alt="PhamiValo" fill className="object-contain cursor-pointer" onClick={() => setSelectedImage("/assets/phamivalo.png")} />
                                    </div>
                                    <div>Spil statistik tjekker (andet spil + mobil version)</div>
                                    <div className="flex flex-row justify-between items-center">
                                        <div>Lavet i Flutter</div>
                                        <button className="cursor-pointer btn btn-outline" onClick={() => setSelectedProject(projectsData.phamivalo)}>
                                            Læs mere
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="card card-border border-neutral-content bg-base-200 w-100 h-100 hover:shadow-lg transition-shadow">
                                <div className="card-body">
                                    <div className="relative w-full h-48 shrink-0">
                                        <Image src="/assets/phamishan.dk.png" alt="Phamishan.dk" fill className="object-contain cursor-pointer" onClick={() => setSelectedImage("/assets/phamishan.dk.png")} />
                                    </div>
                                    <div>Personlig hjemmeside</div>
                                    <div className="flex flex-row justify-between items-center">
                                        <div>Lavet i Next.js</div>
                                        <button className="cursor-pointer btn btn-outline" onClick={() => setSelectedProject(projectsData.phamishandk)}>
                                            Læs mere
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Home">
                    <Starfield starCount={1000} starColor={[255, 255, 255]} speedFactor={0.05} backgroundColor="black" />
                </div>

                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
                        <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 btn btn-ghost btn-circle z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="bg-base-100 rounded-lg overflow-hidden">
                                <Image src={selectedImage} alt="Enlarged view" className="max-w-full max-h-[90vh] w-auto h-auto object-contain" width={1200} height={800} />
                            </div>
                        </div>
                    </div>
                )}

                <ProjectModal isOpen={selectedProject !== null} onClose={() => setSelectedProject(null)} project={selectedProject} />
            </main>
        </>
    );
}
