// src/app/layout.tsx
import type { Metadata } from "next";

import "./globals.css";
import Header from "@/src/layout/components/Header";
import Footer from "@/src/layout/components/Footer";

export const metadata: Metadata = {
  title: "Yuna's Portfolio",
  description: "권유나의 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
