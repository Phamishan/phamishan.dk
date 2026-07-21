"use client";

import { useEffect, useState } from "react";
import { FaDownload, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        name: string;
        image: string;
        images?: string[];
        description: string;
        technology: string;
        type: string;
        downloadUrl?: string;
    } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
    }, [project]);

    if (!isOpen || !project) return null;

    const images = project.images && project.images.length > 0 ? project.images : [project.image];
    const showControls = images.length > 1;

    const goPrev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    const goNext = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="relative bg-base-100 rounded-lg overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button onClick={onClose} className="absolute -top-12 right-0 btn btn-ghost btn-circle z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-6 md:p-8">
                    {/* Project Image / Carousel */}
                    <div className="mb-6 relative">
                        <img src={images[activeIndex]} alt={`${project.name} ${activeIndex + 1}`} className="max-h-[60vh] w-auto max-w-full mx-auto block rounded-lg object-contain" />

                        {showControls && (
                            <>
                                <button
                                    onClick={goPrev}
                                    aria-label="Forrige billede"
                                    className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-black/50 border-none hover:bg-black/70 text-white"
                                >
                                    <FaChevronLeft size={14} />
                                </button>
                                <button
                                    onClick={goNext}
                                    aria-label="Næste billede"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-black/50 border-none hover:bg-black/70 text-white"
                                >
                                    <FaChevronRight size={14} />
                                </button>

                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                                    {images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveIndex(i)}
                                            aria-label={`Gå til billede ${i + 1}`}
                                            className={`h-2 w-2 rounded-full transition-colors ${i === activeIndex ? "bg-white" : "bg-white/40"}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Project Title */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{project.name}</h2>

                    {/* Project Meta */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6 text-sm md:text-base">
                        <div className="badge badge-primary">{project.type}</div>
                        <div className="badge badge-secondary">{project.technology}</div>
                    </div>

                    {/* Project Description */}
                    <div className="prose prose-invert max-w-none">
                        <p className="text-base md:text-lg leading-relaxed whitespace-pre-wrap">{project.description}</p>
                    </div>

                    {/* Download */}
                    {project.downloadUrl && (
                        <a href={project.downloadUrl} className="btn btn-primary mt-6 gap-2" download>
                            <FaDownload size={16} />
                            Download til Windows
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
