"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6">
        <div className=" text-center md:text-left">
          <p className="text-xs text-gray-400 mb-6 tracking-widest font-light">
            developer ✦
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
            어제보다 나은{" "}
            <span className="text-[#8B7E74] font-medium underline decoration-wavy decoration-1 underline-offset-4">
              코드
            </span>
            를 고민하며,
            <br />
            매일{" "}
            <span className="inline-flex items-baseline">
              <span className="text-[#8B7E74] font-bold text-xl">1%</span>
              <span className="text-[#8B7E74] text-xs ml-1">↑</span>
            </span>{" "}
            씩 성장하는 <br /> 개발자
            <br />
            <span className="text-gray-900 font-bold text-2xl sm:text-3xl inline-block mt-3">
              권유나
            </span>
            <span className="text-2xl ml-1">𖤐</span>
          </p>

          <Link
            href="#projects"
            className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-[#8B7E74] transition-colors group"
          >
            <span className="border-b border-gray-300 group-hover:border-[#8B7E74] pb-0.5">
              프로젝트 보기
            </span>
            <span className="text-xs group-hover:translate-x-0.5 transition-transform">
              ᐳ
            </span>
          </Link>
        </div>

        <div className="flex justify-center md:justify-end w-full">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <Image
              src="/yuna2.jpg"
              alt="프로필 사진"
              width={320}
              height={320}
              priority
              className="object-contain rounded-3xl"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#8B7E74] rounded-full opacity-20"></div>
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#8B7E74] rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}