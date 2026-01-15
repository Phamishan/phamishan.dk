interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        name: string;
        image: string;
        description: string;
        technology: string;
        type: string;
    } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    if (!isOpen || !project) return null;

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
                    {/* Project Image */}
                    <div className="mb-6">
                        <img src={project.image} alt={project.name} className="w-full h-auto rounded-lg object-cover" />
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
                </div>
            </div>
        </div>
    );
}
