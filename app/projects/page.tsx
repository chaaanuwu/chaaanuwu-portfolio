"use client";

import { useProjects } from '@/lib/hooks/useProjects';
import { motion } from 'framer-motion';
import Loading from '../loading';
import ProjectCard from '@/components/ui/ProjectCard';

export default function ProjectsPage() {

    const { projects, loading, error } = useProjects();

    if (loading) {
        return (
            <Loading />
        );
    }

    if (error) {
        return (
            <div className="text-red-500 py-10 text-center font-medium">{error}</div>
        );
    }

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Header */}
            <div className="mb-4">
                <h2 className="text-3xl font-bold py-3">Projects</h2>
                <p className="text-gray-400">A showcase of both private and open-source projects I’ve built or contributed to.</p>
            </div>

            <hr className="w-full border-t border-dashed border-gray-700 my-6" />

            {/* Projects */}
            {projects.length === 0 ? (
                <p className="text-gray-400 text-center align-middle">No projects found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            projectUrl={project.projectUrl}
                            featured={project.featured}
                            imageUrl={project.imageUrl}
                            // map join table to string[] safely
                            techStack={project.techStack?.map((ps: { skill: { imgUrl: string } }) => ps.skill.imgUrl) || []}
                        />
                    ))}
                </div>
            )}

        </motion.div>
    );
}