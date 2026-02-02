import { ArrowRight, Pin, PinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectCardProps = {
    title: string,
    description: string,
    projectUrl: string,
    imageUrl: string,
    featured?: boolean,
    techStack?: string[]
}

export default function ProjectCard({
    title,
    description,
    projectUrl,
    imageUrl,
    featured,
    techStack
}: ProjectCardProps) {

    const [pos, setPos] = useState({ x: "50%", y: "50%" });
    const [hover, setHover] = useState(false);

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <div className="relative h-60 group">
                <Link href={`projects/${projectUrl}`} rel="noopener noreferrer">
                    <Image
                        src={imageUrl}
                        alt={`Image for ${title}`}
                        fill
                        className="rounded-t-lg object-cover"
                        sizes="(max-width: 640px) 100vw, 14rem"
                        priority
                        draggable={false}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/80 rounded-t-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:cursor-pointer duration-300">
                        <span className="text-white text-sm flex items-center gap-1">
                            View Project <ArrowRight />
                        </span>
                    </div>
                </Link>

                {featured && (
                    <div className="absolute right-0 bg-yellow-300 text-black text-sm px-2 py-1 rounded-bl-md">
                        <Pin className="inline-block mr-1" size={16} />
                        Featured
                    </div>
                )}

            </div>

            <div
                className="p-4 bg-gray-900 text-white relative overflow-hidden"
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    setPos({ x: `${x}%`, y: `${y}%` });
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    ["--x" as any]: pos.x,
                    ["--y" as any]: pos.y,
                }}
            >
                {/* Hover glow */}
                {hover && (
                    <div
                        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                        style={{
                            background: `radial-gradient(circle 120px at var(--x) var(--y), rgba(27,2,163,0.5), transparent 80%)`,
                        }}
                    />
                )}

                <h1 className="text-lg font-semibold mb-1 truncate">{title}</h1>
                <p className="text-sm text-gray-300 mb-2 truncate">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {techStack && techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2 z-9">
                            {techStack.map((tech, i) => (
                                <Image
                                    key={i}
                                    src={tech}
                                    alt="Tech Stack Icon"
                                    width={24}
                                    height={24}
                                    className="h-8 w-8 bg-gray-400/30 backdrop-blur-sm rounded-md p-1"
                                    draggable={false}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}