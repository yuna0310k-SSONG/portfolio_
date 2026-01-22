"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-28">
      <div className="flex flex-col md:flex-row justify-center items-center gap-24">
        <div className="max-w-xl">
          <p className="text-sm text-gray-400 mb-4 tracking-wide">DEVELOPER</p>

          <p className="text-gray-700 text-lg leading-loose mb-10">
            어제보다 나은{" "}
            <span className="text-[#8B7E74] font-medium">코드</span>를 고민하며
,<br />
            매일{" "}
            <span className="text-[#8B7E74] font-medium">1%</span>씩 성장하는
            개발자
            <br />
            <span className="text-gray-900 font-medium tracking-tight">
              권유나
            </span>
            입니다.
          </p>

          <Link
            href="#projects"
            className="inline-block text-sm border-b-2 border-[#8B7E74] pb-1 hover:border-gray-800 transition-colors font-medium"
          >
            프로젝트로 확인하기 →
          </Link>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-[34rem] fade-mask shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <Image
              src="/me1.png"
              alt="프로필 사진"
              fill
              priority
              className="object-cover transform scale-[0.8]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
