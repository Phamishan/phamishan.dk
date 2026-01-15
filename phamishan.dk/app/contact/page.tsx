import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Home() {
    return (
        <>
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

                <div className="hero-content flex-col lg:flex-row-reverse gap-16 max-w-6xl">
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold mb-6">Kontakt mig</h1>
                        <p className="text-lg mb-4">Har du et spørgsmål eller noget der kunne være interessant at tale om? Kontakt mig via. en af de nedenstående måder, så vender jeg tilbage hurtigst muligt!</p>

                        <div className="divider"></div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Find mig her:</h2>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:phamishan@phamishan.dk" className="btn btn-outline btn-lg justify-start gap-3">
                                    <MdEmail size={24} />
                                    phamishan@phamishan.dk
                                </a>
                                <a href="https://www.linkedin.com/in/phamishan/" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg justify-start gap-3">
                                    <FaLinkedin size={24} />
                                    LinkedIn
                                </a>
                                <a href="https://github.com/Phamishan" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg justify-start gap-3">
                                    <FaGithub size={24} />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
