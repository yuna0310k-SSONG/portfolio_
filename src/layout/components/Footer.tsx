// src/components/layout/Footer.tsx
export default function Footer() {
    return (
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-[9px] text-gray-500 text-center">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
    );
  }
  