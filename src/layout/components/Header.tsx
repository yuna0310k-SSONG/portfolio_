import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-[#FAF9F6]/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-medium">
          Yuna.k
        </Link>

        <ul className="flex gap-6 text-sm text-gray-600">
          <li><Link href="#about" className="hover:bg-[#fff9e2] ">About</Link></li>
          <li><Link href="#projects" className="hover:bg-[#fff9e2] ">Projects</Link></li>
          <li><Link href="#study-log" className="hover:bg-[#fff9e2] ">Study Log</Link></li>
        </ul>
      </nav>
    </header>
  );
}