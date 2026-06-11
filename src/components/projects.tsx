import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import { projects, Project } from '@/data/projects';
import { useInView } from '@/hooks/useInView';

interface ProjectCardProps {
    project: Project;
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    const { ref, inView } = useInView<HTMLDivElement>();

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${(index % 3) * 150}ms` }}
            className={`group relative w-full overflow-hidden rounded-xl border-2 border-light-blue/30
                transition-all duration-700 ease-out
                hover:border-light-blue hover:shadow-lg hover:shadow-light-blue/40 hover:-translate-y-2
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <Link
                href={project.url}
                target={project.url === '#' ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name}`}
                className="block"
            >
                <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-end
                            bg-gradient-to-t from-blue-bg/90 via-blue-bg/30 to-transparent
                            opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                    >
                        <div className="w-full flex items-center justify-between gap-2 p-4 sm:p-5 translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
                            <h3 className="text-light-blue font-bold text-lg sm:text-xl drop-shadow">
                                {project.name}
                            </h3>
                            <span
                                className="flex items-center gap-2 text-sm sm:text-base font-semibold text-white
                                    opacity-0 translate-x-2 transition-all duration-500
                                    group-hover:opacity-100 group-hover:translate-x-0"
                            >
                                Visit site
                                <BsArrowUpRight className="text-light-blue" />
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

function Projects() {
    const { ref, inView } = useInView<HTMLHeadingElement>();

    return (
        <section
            id="projects"
            className="w-full min-h-screen bg-blue-bg flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-20"
        >
            <h2
                ref={ref}
                className={`font-bold text-light-blue text-3xl sm:text-4xl mb-12 lg:mb-16
                    transition-all duration-700 ease-out
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
                Experience
            </h2>
            <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
