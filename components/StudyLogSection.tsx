"use client";

export default function StudyLogSection() {
  return (
    <section id="study-log" className="py-24 sm:py-40 px-4 sm:px-6 border-t border-gray-200 text-center">
      <h2 className="text-xs tracking-widest text-gray-400 mb-6">STUDY LOG</h2>

      <p className="text-gray-600 mb-10 sm:mb-16 leading-relaxed">
        배운 내용을 기록하고,
        <br />
        생각을 정리하며 천천히 쌓아가고 있습니다.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
        <a
          href="https://github.com/yuna0310k-SSONG"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-64 border border-gray-200 rounded-2xl px-6 py-8 sm:px-8 sm:py-10 hover:bg-white transition"
        >
          <p className="text-sm font-medium text-gray-900 mb-2">GitHub</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            코드와 실습 위주의
            <br />
            학습 기록
          </p>

          <span className="inline-block mt-6 text-xs text-gray-400 group-hover:text-[#8B7E74] transition-colors">
            보러가기 →
          </span>
        </a>

        <a
          href="https://www.notion.so/CI-CD-React-Node-25e5cd6cb2f18067addce2eccb22ad98?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-64 border border-gray-200 rounded-2xl px-6 py-8 sm:px-8 sm:py-10 hover:bg-white transition"
        >
          <p className="text-sm font-medium text-gray-900 mb-2">Notion</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            개념 정리와 회고
            <br />
            중심의 기록
          </p>

          <span className="inline-block mt-6 text-xs text-gray-400 group-hover:text-[#8B7E74] transition-colors">
            보러가기 →
          </span>
        </a>
      </div>
    </section>
  );
}
