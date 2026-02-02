'use client';

import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import { usePages } from "@/lib/hooks/usePages";
import { useSkills } from "@/lib/hooks/useSkills";
import Loading from "./loading";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { useSources } from "@/lib/hooks/useSources";

export default function Page() {
  const { pages, loading, error } = usePages();
  const { skills, skillsLoading, skillsError } = useSkills();

  const { source, srcLoading, err } = useSources();

  const [hoveredTop, setHoveredTop] = useState<number | null>(null);
  const [hoveredBottom, setHoveredBottom] = useState<number | null>(null);

  const homePage = pages.find((p) => p.title === "Home");

  if (loading || srcLoading) return <Loading />;
  if (error)
    return <div className="text-red-500 py-10 text-center font-medium">{error}</div>;

  return (
    <motion.div
      className="w-full min-w-0 mt-4"
      initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
      animate={loading || srcLoading ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header */}
      <div className="mb-8 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-2xl" />
        <div className="relative">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <Sparkles className="text-blue-400" size={28} />
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              {homePage?.heading}
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-0 md:px-4 lg:px-6">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex-1 min-w-0"
            >
              <p className="text-gray-400 text-lg leading-relaxed text-center lg:text-left">
                {homePage?.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <Image
                  src="/hero.jpg"
                  alt="Hero Image"
                  width={165}
                  height={165}
                  priority
                  className="rounded-full border-4 border-blue-300/60 shadow-lg"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <hr className="w-full border-t border-dashed border-gray-700 my-6" />

      {/* Skills section */}
      <section>
        <div>
          <div className="flex gap-4 items-center my-2">
            <Code2 size={22} />
            <h2 className="text-xl font-semibold">Skills & Technologies</h2>
          </div>
          <p className="text-gray-400 mb-4">My professional skills.</p>
        </div>

        {skillsLoading ? (
          <Loading />
        ) : skillsError ? (
          <div className="text-red-500 py-2 text-center font-medium">{skillsError}</div>
        ) : (
          <>
            {/* Top Row */}
            <div
              className="relative isolate w-full max-w-full overflow-x-hidden"
              style={{ height: "128px", contain: "layout paint" }}
            >
              <Marquee
                direction="left"
                pauseOnHover
                speed={40}
                gradient={false}
                className="h-32 w-full"
              >
                <div className="flex gap-8 items-center py-2 px-4">
                  {skills
                    .filter((skill) => skill.type === "core")
                    .map((skill, i) => (
                      <div
                        key={i}
                        onMouseEnter={() => setHoveredTop(i)}
                        onMouseLeave={() => setHoveredTop(null)}
                        className="relative flex flex-col items-center justify-center h-16 flex-shrink-0"
                      >
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-md p-2 transition duration-200 hover:bg-white/20 hover:scale-105">
                          <Image
                            src={skill.imgUrl}
                            alt={skill.title}
                            width={48}
                            height={48}
                            className="rounded-md"
                          />
                        </div>

                        {hoveredTop === i && (
                          <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 6 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full bg-black/85 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap shadow-lg pointer-events-none"
                            style={{ zIndex: 20 }}
                          >
                            {skill.title}
                          </motion.div>
                        )}
                      </div>
                    ))}
                </div>
              </Marquee>
            </div>

            <div
              className="relative isolate w-full max-w-full overflow-x-hidden"
              style={{ height: "128px", contain: "layout paint" }}
            >
              <Marquee
                direction="right"
                pauseOnHover
                speed={40}
                gradient={false}
                className="h-32 w-full"
              >
                <div className="flex gap-8 items-center py-2 px-4">
                  {skills
                    .filter((skill) => skill.type === "tools")
                    .map((skill, i) => (
                      <div
                        key={i}
                        onMouseEnter={() => setHoveredBottom(i)}
                        onMouseLeave={() => setHoveredBottom(null)}
                        className="relative flex flex-col items-center justify-center h-16 flex-shrink-0"
                      >
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-md p-2 transition-all duration-200 hover:bg-white/20 hover:scale-105">
                          <Image
                            src={skill.imgUrl}
                            alt={skill.title}
                            width={48}
                            height={48}
                            className="rounded-md"
                          />
                        </div>

                        {hoveredBottom === i && (
                          <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: -6 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: 0.15 }}
                            className="absolute bottom-full bg-black/85 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap shadow-lg pointer-events-none"
                            style={{ zIndex: 20 }}
                          >
                            {skill.title}
                          </motion.div>
                        )}
                      </div>
                    ))}
                </div>
              </Marquee>
            </div>

          </>
        )}
      </section>
    </motion.div>
  );
}