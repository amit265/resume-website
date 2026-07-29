"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { quotes } from "../lib/site-data";
import { SectionHeading } from "./section-heading";

export function QuoteSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="panel fade-in-up">
      <SectionHeading
        eyebrow="Philosophy"
        title="Wisdom from the giants"
        copy="Perspectives on building, shipping, and living."
      />
      
      <div className="relative mt-6 p-8 bg-white/60 rounded-3xl border border-line overflow-hidden shadow-sm min-h-[280px] md:min-h-[220px] flex items-center justify-center">
        {quotes.map((quote, index) => (
          <div
            key={quote.author}
            className={`absolute inset-0 p-8 flex flex-col md:flex-row items-center gap-8 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="shrink-0">
              <Image
                src={quote.image}
                alt={quote.author}
                width={120}
                height={120}
                className="rounded-full border-4 border-white shadow-md object-cover aspect-square"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-xl md:text-2xl font-display text-text italic mb-4 leading-relaxed">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <p className="font-bold text-accent-dark tracking-wide uppercase text-sm">
                - {quote.author}
              </p>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-4 flex gap-2 z-20">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-accent w-6" : "bg-muted/40 hover:bg-muted/60"
              }`}
              aria-label={`Go to quote ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
