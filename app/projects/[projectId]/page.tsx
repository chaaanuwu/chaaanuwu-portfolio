"use client";

import React from "react";
import { motion } from "framer-motion";
import Loading from "../../loading";
import { useProjects } from "@/lib/hooks/useProjects";
import { useParams } from "next/navigation";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectPage = () => {
    const { projects, loading, error } = useProjects();
    const { projectId } = useParams();

    // --- derived data ---
    const projectUrl = projectId ? `/${projectId}` : "";
    const project = projects.find((p) => p.projectUrl === projectUrl);

    if (loading) return <Loading />;
    if (error) return <p className="text-red-500">Failed to load projects</p>;
    if (!project) return <p className="text-gray-400">Project not found</p>;

    const techStack = project.techStack?.map((ps: { skill: { imgUrl: string } }) => ps.skill.imgUrl) || [];
    const techStackTitles = project.techStack?.map((ps: { skill: { title: string } }) => ps.skill.title) || [];
    const details = project?.details;

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30, scale: 1, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {/* Page Header */}
            <div className="mb-4">
                <Link href="/projects">
                    <div className="text-gray-400 flex gap-2 text-lg items-center hover:gap-4 transition-all cursor-pointer mb-2">
                        <ArrowLeftCircle size={20} />
                        <p>Back</p>
                    </div>
                </Link>
                <h2 className="text-3xl py-3">{project.title}</h2>
                <p className="text-gray-400">
                    {project.description}
                </p>
            </div>

            <hr className="w-full border-t border-dashed border-gray-700 my-6" />

            <div className="mx-4 flex items-center justify-between flex-wrap gap-2">
                {/*  Tech Stack */}
                <div className="flex items-center flex-wrap gap-2">
                    <h4 className="mr-2">Tech Stack:</h4>
                    {techStack?.map((tech: string | StaticImport, i: React.Key) => (
                        <Image
                            key={i}
                            src={tech}
                            alt="Tech Stack Icon"
                            width={24}
                            height={24}
                            className="h-10 w-10 bg-gray-200/30 backdrop-blur-sm rounded-md p-1"
                            draggable={false}
                            priority
                        />
                    ))}
                </div>

                <div className="flex items-center flex-wrap gap-16">
                    {/* Source code */}
                    <div className="flex items-center flex-wrap gap-2">
                        {details?.GithubUrl && (
                            <a
                                href={details.GithubUrl?.startsWith("http") ? details.GithubUrl : `https://${details.GithubUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-300 flex items-center gap-1 transition-colors"
                            >
                                <FaGithub size={20} className="mr-2" />
                                Source Code
                            </a>
                        )}
                    </div>

                    {/* Live-site */}
                    <div className="flex items-center flex-wrap gap-2">
                        {details?.liveUrl && (
                            <a
                                href={details.liveUrl?.startsWith("http") ? details.liveUrl : `https://${details.liveUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-300 flex items-center gap-1 transition-colors"
                            >
                                <FaArrowUpRightFromSquare size={18} className="mr-2" />
                                Live Site
                            </a>
                        )}
                    </div>
                </div>
            </div>


            <Image
                src={project.imageUrl}
                alt={project.title}
                width={1920}
                height={1080}
                className="w-2/3 mx-auto hover:scale-105 transition-transform my-16 object-cover"
                draggable={false}
            />

            {/* Info */}
            <section className="my-4">

                <div id="intro" className="my-6">
                    {details?.intro && (
                        <div>
                            <h5 className="text-xl">📘 Introduction</h5>
                            <div id="into-content" className="my-2 mx-8">
                                <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: details.intro }} />
                            </div>
                        </div>
                    )}
                </div>

                <hr className="text-gray-300" />

                <div id="techStack" className="my-6">
                    {details?.intro && (
                        <div>
                            <h5 className="text-xl">⚙️ Tech Stack</h5>
                            <div id="into-content" className="my-2 mx-8">
                                <p className="text-gray-200">This project is powered by:</p>
                                <ul className="list-disc m-4 pl-6 space-y-2">
                                    {techStack?.map((tech: string | StaticImport, i: number) => (
                                        <li key={i} className="flex items-center gap-4 text-gray-300">
                                            <Image
                                                src={tech}
                                                alt={techStackTitles[i]}
                                                width={24}
                                                height={24}
                                                className="h-8 w-8 bg-gray-200/30 backdrop-blur-sm rounded-md p-1"
                                                draggable={false}
                                            />
                                            <span> - </span>
                                            <span>{techStackTitles[i]}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    )}
                </div>

                <hr className="text-gray-300" />

                <div id="features" className="my-6">
                    {details?.features && (
                        <div>
                            <h5 className="text-xl my-6">🚀 Features</h5>
                            <div id="into-content" className="my-2 mx-8">
                                <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: details.features }} />
                            </div>
                        </div>
                    )}
                </div>

                {(details?.intro || details?.features) && (
                    <p className="text-gray-600 text-center my-16">***</p>
                )}

            </section>



        </motion.div>
    );
};




export default ProjectPage;