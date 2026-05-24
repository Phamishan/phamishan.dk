import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Starfield from "react-starfield";
//import MouseGlow from "../components/mouseGlow";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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

                <div className="card card-border border-neutral-content bg-base-200 w-250">
                    <div className="card-body">
                        <div className="flex justify-between mb-4">
                            <h2 className="card-title justify-start text-xl">Phamishan Packiaseelan</h2>
                            <div className="card-actions justify-end">
                                <div className="items-center flex gap-2">
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
                        <div className="flex gap-6 items-start">
                            <div className="flex-1">
                                <p className="text-lg mb-4">
                                    <span className="inline-block align-middle mr-2 pb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    Karup, Danmark
                                </p>
                                <p>Jeg er en målrettet og ung dreng, som altid stræber efter at lære mere og udvikle mine færdigheder inden for softwareudvikling.</p>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="relative w-40 h-40">{<Image src="/assets/phamishan.png" alt="Phamishan Packiaseelan" width={300} height={300} className="w-full h-full rounded-lg shadow-md object-cover" loading="eager" />}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex gap-8 w-full">
                        <div className="flex-1 flex justify-center">
                            <div className="text-3xl font-bold py-5">Uddannelse</div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="text-3xl font-bold py-5">Erhvervserfaring</div>
                        </div>
                    </div>

                    <div className="flex gap-8 w-full">
                        <div className="flex-1 flex justify-center">
                            <div className="card card-border border-neutral-content bg-base-200 w-121">
                                <div className="card-body">
                                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                                        <li>
                                            <hr className="bg-base-content" />
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="timeline-start mb-10 md:text-end">
                                                <time className="font-mono italic"> 2020 - 2026</time>
                                                <div className="text-lg font-black"> EUX - Datatekniker med speciale i programmering</div>
                                                Midtbyens Gymnasium, Mercantec
                                            </div>
                                            <hr className="bg-base-content" />
                                        </li>
                                        <li>
                                            <hr className="bg-base-content" />
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="timeline-end md:mb-10">
                                                <time className="font-mono italic">2010 - 2019</time>
                                                <div className="text-lg font-black">Folkeskole</div>
                                                Karup Skole
                                            </div>
                                            <hr className="bg-base-content" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="card card-border border-neutral-content bg-base-200 w-121">
                                <div className="card-body">
                                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                                        <li>
                                            <hr className="bg-base-content" />
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="timeline-start mb-10 md:text-end">
                                                <time className="font-mono italic"> 2021 - 2026</time>
                                                <div className="text-lg font-black"> Skoleoplæringscenter</div>
                                                På skoleoplæringscenteret har jeg både arbejdet alene og sammen med et team.
                                            </div>
                                            <hr className="bg-base-content" />
                                        </li>
                                        <li>
                                            <hr className="bg-base-content" />
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="timeline-start mb-10 md:text-end">
                                                <time className="font-mono italic">2025</time>
                                                <div className="text-lg font-black">Inventio.it (2 uger)</div>
                                                2 ugers praktik forløb hos Inventio.it, hvor jeg fik muligheden for at arbejde på en rigtig arbejdsplads og prøvede Application Language af i Microsoft Business Central.
                                            </div>
                                            <hr className="bg-base-content" />
                                        </li>
                                        <li>
                                            <hr className="bg-base-content" />
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="timeline-end md:mb-10">
                                                <time className="font-mono italic">2019 - 2021</time>
                                                <div className="text-lg font-black">FK Distribution</div>
                                                Reklameomdeler.
                                            </div>
                                            <hr className="bg-base-content" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Home">
                    <Starfield starCount={1000} starColor={[255, 255, 255]} speedFactor={0.05} backgroundColor="black" />
                </div>
            </main>
        </>
    );
}
