import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Starfield from "react-starfield";
import MouseGlow from "../components/mouseGlow";

export default function Home() {
    return (
        <>
            <MouseGlow />
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
                                    <a className="text-lg">ABOUT</a>
                                </li>
                                <li>
                                    <a className="text-lg">MY WORK</a>
                                </li>
                                <li>
                                    <a className="text-lg">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                        <a className="text-xl font-bold ps-4" href="/">
                            Phamishan
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <a className="text-xl">ABOUT</a>
                            </li>
                            <li>
                                <a className="text-xl">MY WORK</a>
                            </li>
                            <li>
                                <a className="text-xl">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-2">
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

                <div className="card card-border border-neutral-content bg-base-200 w-250 h-65">
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h2 className="card-title justify-start text-xl">Phamishan Packiaseelan</h2>
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
                        <p className="text-lg">
                            <span className="inline-block align-middle mr-2 pb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Karup, Denmark
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsa voluptas. Incidunt vel culpa, facilis veritatis molestiae sit dignissimos aperiam soluta impedit excepturi officiis expedita, ex harum pariatur? Non, magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit aliquam mollitia explicabo quae animi doloremque, cupiditate ullam ut tempora molestias, atque praesentium dolores ab! Quos optio aliquid maxime voluptate!</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex gap-8 w-full">
                        <div className="flex-1 flex justify-center">
                            <div className="text-3xl font-bold py-5">Education</div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="text-3xl font-bold py-5">Work Experience</div>
                        </div>
                    </div>

                    <div className="flex gap-8 w-full">
                        <div className="flex-1 flex justify-center">
                            <div className="card card-border border-neutral-content bg-base-200 w-121 h-100">
                                <div className="card-body">
                                    <ul className="steps steps-vertical text-sm">
                                        <li className="step step-secondary">Register</li>
                                        <li className="step step-secondary">Choose plan</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="card card-border border-neutral-content bg-base-200 w-121 h-100 place-content-center">
                                <div className="card-body">
                                    <ul className="steps steps-vertical text-sm">
                                        <li className="step step-secondary">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus magnam repudiandae, natus molestias odit consequatur quas, totam aperiam modi dignissimos, iusto sint ut reiciendis ab dolores tempora placeat quis!
                                            <br />
                                            <br />
                                            2020 - Present
                                            <br />
                                            <br />
                                        </li>
                                        <li className="step step-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur debitis necessitatibus. Quasi reprehenderit illo, ad hic accusantium laboriosam eum vel quae, voluptatem ullam facere quisquam accusamus quos, facilis perferendis.</li>
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
