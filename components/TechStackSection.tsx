"use client";

import { motion } from "framer-motion";

const stackCategories = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS3", "Python", "SQL", "Java"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "Tailwind CSS", "Zustand", "Axios / Fetch API"],
  },
  {
    title: "Backend · DB",
    items: [
      "Node.js",
      "Express",
      "Prisma",
      "Spring Boot",
      "PostgreSQL",
      "MySQL",
      "JWT Authentication",
      "Hashed Password (bcrypt)",
    ],
  },
  {
    title: "DevOps · Tools",
    items: [
      "Docker",
      "CI / CD",
      "Vercel",
      "Supabase",
      "Fly.io",
      "Git",
      "Notion",
      "Postman",
    ],
  },
];

export default function TechStackSection() {
  return (
    <section className="py-32 border-t border-gray-200">
      <div className="flex flex-col items-center text-center">
        <motion.h2
          className="text-xs tracking-widest text-gray-400 mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          TECH STACK
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-14 max-w-5xl text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stackCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900 inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#fff9e2]">
                {category.title}
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
