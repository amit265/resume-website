"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function FloatingContact() {
  return (
    <Link href="#contact" aria-label="Contact me">
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-accent text-white p-4 rounded-full shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-center justify-center">
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </div>
    </Link>
  );
}
