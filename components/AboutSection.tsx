"use client";

import { motion } from "framer-motion";

const aboutItems = [
  { label: "이름", value: "권유나" },
  { label: "생년월일", value: "2001.09.25 (만 24세)" },
  { label: "위치", value: "인천시 남동구" },
  { label: "연락처", value: "010-2231-2730" },
  { label: "이메일", value: "una3917@naver.com" },
  {
    label: "학력",
    value: ["경영학사", "컴퓨터공학 학사 (취득 중)"]
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-gray-200">
      <div className="flex flex-col items-center text-center">
        <motion.h2
          className="text-xs tracking-widest text-gray-400 mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ABOUT ME
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 sm:gap-x-16 gap-y-8 sm:gap-y-14 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {aboutItems.map((item) => (
            <div key={item.label} className="space-y-2 text-sm text-gray-700">
              <p className="text-gray-400">{item.label}</p>
              {Array.isArray(item.value) ? (
                <p>
                  {item.value.map((v: string, idx: number) => (
                    <span key={idx}>
                      {v}
                      {idx !== item.value.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ) : (
                <p>{item.value}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
