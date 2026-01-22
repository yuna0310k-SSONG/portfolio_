"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
        <div className="max-w-xl text-center md:text-left">
          <p className="text-sm text-gray-400 mb-4 tracking-wide">DEVELOPER</p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed sm:leading-loose mb-8 sm:mb-10">
            어제보다 나은{" "}
            <span className="text-[#8B7E74] font-medium">코드</span>를 고민하며
,<br />
            매일{" "}
            <span className="text-[#8B7E74] font-medium">1%</span>씩 성장하는
            개발자
            <br />
            <span className="text-gray-900 font-bold tracking-tight text-gray-900">
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

        <div className="flex justify-center md:justify-end w-full">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 ">
            <Image
              src="/yuna2.jpg"
              alt="프로필 사진"
              width={320}
              height={320}
              priority
              className="object-contain rounded-[2.2rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}