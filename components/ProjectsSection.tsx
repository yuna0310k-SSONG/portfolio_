"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 border-t border-gray-200">
      <div className="flex flex-col items-center">
        <motion.h2
          className="text-xs tracking-widest text-gray-400 mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          PROJECTS
        </motion.h2>

        <div className="w-full max-w-4xl space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <div className="md:col-span-2">
                <div className="relative w-full h-44 bg-gray-100 rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_BASE_PATH
                        ? `${process.env.NEXT_PUBLIC_BASE_PATH}${project.image}`
                        : project.image
                    }
                    alt={project.title}
                    fill
                    className="object-cover z-0"
                  />
                </div>
              </div>

              <div className="md:col-span-3 space-y-4">
                <div className="flex items-center flex-wrap gap-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-[#F3EDDB] text-[#6a4424] border border-[#E5D6AF]">
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#8B7E74] font-medium tracking-wide">
                  {project.stack.join(" · ")}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {project.motivation && (
                  <div className="mt-4 rounded-lg bg-[#F6F3EF] px-4 py-3">
                    <p className="text-xs text-gray-700 leading-relaxed">
                      💡 {project.motivation}
                    </p>
                  </div>
                )}

                <Link
                  href={project.link}
                  className="inline-block mt-2 text-sm border-b border-gray-300 hover:border-gray-800 transition-colors"
                >
                  프로젝트 구경하기 →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
