import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { goTo } from "./components/carousel";
import Starfield from "react-starfield";
//import MouseGlow from "./components/mouseGlow";
import Link from "next/link";
import Image from "next/image";

function calculateAge() {
    const birthDate = new Date(2004, 4, 3);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

export default function Home() {
    const age = calculateAge();
    return (
        <>
            {/* <MouseGlow /> */}
            <main className="flex flex-col gap-[32px] row-start-2 items-center">
                <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
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
                            <a
                                href="mailto:phamishan@phamishan.dk"
                                className="btn btn-ghost btn-circle"
                            >
                                <MdEmail size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/phamishan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost btn-circle"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://github.com/Phamishan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost btn-circle"
                            >
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card card-border border-neutral-content bg-base-200 w-250">
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h2 className="card-title justify-start text-xl">
                                Phamishan Packiaseelan
                            </h2>
                            <div className="card-actions justify-end">
                                <div className="items-center flex gap-2">
                                    <button className="btn btn-outline">
                                        <MdEmail />
                                    </button>
                                    <button className="btn btn-outline">
                                        <FaLinkedin />
                                    </button>
                                    <button className="btn btn-outline">
                                        <FaGithub />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p className="text-lg pb-5">
                            <span className="inline-block align-middle mr-2 pb-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            Karup, Denmark
                        </p>
                        <p id="short-description">
                            {age} år programmør.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center text-3xl font-bold py-5">
                    Personlige projekter
                </div>

                <div className="card card-border border-neutral-content bg-base-200 w-250">
                    <div className="card-body">
                        <div className="carousel w-full h-96">
                            <div
                                id="slide1"
                                className="carousel-item relative w-full flex items-center justify-center"
                            >
                                <Image
                                    src="/assets/phamibot.png"
                                    alt="PhamiBot"
                                    className="w-full h-full object-contain"
                                    width={800}
                                    height={400}
                                    loading="eager"
                                />
                                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                                    <h3 className="text-lg font-bold">PhamiBot</h3>
                                </div>
                                <a
                                    href="https://github.com/Phamishan/PhamiBot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded-lg transition-all duration-200 hover:bg-opacity-90"
                                >
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a onClick={goTo} href="#slide6" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a onClick={goTo} href="#slide2" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                            <div
                                id="slide2"
                                className="carousel-item relative w-full flex items-center justify-center"
                            >
                                <Image
                                    src="/assets/phamijam-desktop.png"
                                    alt="PhamiJam - Desktop"
                                    className="w-full h-full object-contain"
                                    width={800}
                                    height={400}
                                    loading="eager"
                                />
                                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                                    <h3 className="text-lg font-bold">PhamiJam - Desktop</h3>
                                </div>
                                <a
                                    href="https://github.com/Phamishan/PhamiJam-Desktop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded-lg transition-all duration-200 hover:bg-opacity-90"
                                >
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a onClick={goTo} href="#slide1" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a onClick={goTo} href="#slide3" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                            <div
                                id="slide3"
                                className="carousel-item relative w-full flex items-center justify-center"
                            >
                                <Image
                                    src="/assets/phamijam-mobile.png"
                                    alt="PhamiJam - Mobile"
                                    className="w-full h-full object-contain"
                                    width={800}
                                    height={400}
                                    loading="eager"
                                />
                                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                                    <h3 className="text-lg font-bold">PhamiJam - Mobile</h3>
                                </div>
                                <a
                                    href="https://github.com/Phamishan/PhamiJam-Mobile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded-lg transition-all duration-200 hover:bg-opacity-90"
                                >
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a onClick={goTo} href="#slide2" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a onClick={goTo} href="#slide4" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                            <div
                                id="slide4"
                                className="carousel-item relative w-full flex items-center justify-center"
                            >
                                <Image
                                    src="/assets/phamiapex.png"
                                    alt="PhamiApex"
                                    className="w-full h-full object-contain"
                                    width={800}
                                    height={400}
                                    loading="eager"
                                />
                                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                                    <h3 className="text-lg font-bold">PhamiApex</h3>
                                </div>
                                <a
                                    href="https://github.com/Phamishan/PhamiApex"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded-lg transition-all duration-200 hover:bg-opacity-90"
                                >
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a onClick={goTo} href="#slide3" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a onClick={goTo} href="#slide5" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                            <div
                                id="slide5"
                                className="carousel-item relative w-full flex items-center justify-center"
                            >
                                <Image
                                    src="/assets/phamivalo.png"
                                    alt="PhamiValo"
                                    className="w-full h-full object-contain"
                                    width={800}
                                    height={400}
                                    loading="eager"
                                />
                                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                                    <h3 className="text-lg font-bold">PhamiValo</h3>
                                </div>
                                <a
                                    href="https://github.com/Phamishan/PhamiValo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded-lg transition-all duration-200 hover:bg-opacity-90"
                                >
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a onClick={goTo} href="#slide4" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a onClick={goTo} href="#slide6" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                            <div
                                id="slide6"
                                className="carousel-item relative w-full flex items-center justify-center"
                            >
                                <Image
                                    src="/assets/phamishan.dk.png"
                                    alt="Phamishan.dk"
                                    className="w-full h-full object-contain"
                                    width={800}
                                    height={400}
                                    loading="eager"
                                />
                                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                                    <h3 className="text-lg font-bold">Phamishan.dk</h3>
                                </div>
                                <a
                                    href="https://github.com/Phamishan/Phamishan.dk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded-lg transition-all duration-200 hover:bg-opacity-90"
                                >
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a onClick={goTo} href="#slide5" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a onClick={goTo} href="#slide1" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center text-3xl font-bold py-5">
                    Teknologier
                </div>
                <div className="pb-8">
                    <div className="card card-border border-neutral-content bg-base-200 w-250 h-100">
                        <div className="card-body">
                            <div className="flex flex-wrap gap-4">
                                <div className="badge badge-outline">HTML</div>
                                <div className="badge badge-outline">CSS</div>
                                <div className="badge badge-outline">JavaScript</div>
                                <div className="badge badge-outline">Node.js</div>
                                <div className="badge badge-outline">C#</div>
                                <div className="badge badge-outline">MySQL</div>
                                <div className="badge badge-outline">Flutter / Dart</div>
                                <div className="badge badge-outline">Next.js</div>
                                <div className="badge badge-outline">React</div>
                                <div className="badge badge-outline">TypeScript</div>
                                <div className="badge badge-outline">Tailwind CSS</div>
                                <div className="badge badge-outline">Application Language</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Home">
                    <Starfield
                        starCount={1000}
                        starColor={[255, 255, 255]}
                        speedFactor={0.05}
                        backgroundColor="black"
                    />
                </div>
            </main>
        </>
    );
}
