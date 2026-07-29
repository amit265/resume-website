"use client";

import Link from "next/link";
import { Home, User, Briefcase, Code, Mail, BookOpen } from "lucide-react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { useState, useEffect } from "react";

export function SiteNav({ activePath = "/" }) {
  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/#projects", label: "Projects", icon: Code },
    { href: "/#experience", label: "Experience", icon: Briefcase },
    { href: "/#notes", label: "Notes", icon: BookOpen },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Only track sections if we are on the homepage
    if (activePath !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // trigger when section crosses the middle of the screen
    );

    const sections = ["home", "projects", "experience", "notes", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activePath]);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
      <nav 
        className={cn(
          "flex items-center gap-1 p-1.5 rounded-full transition-all duration-500",
          scrolled 
            ? "glass-panel shadow-floating bg-surface/80 backdrop-blur-lg border border-border scale-95"
            : "bg-transparent border border-transparent shadow-none"
        )}
      >
        {links.map((link) => {
          let isActive = false;

          if (activePath === "/") {
            // If on homepage, match exact section using activeHash
            if (link.href === "/") {
              isActive = activeHash === "home" || activeHash === "";
            } else if (link.href.includes("#")) {
              const hashId = link.href.split("#")[1];
              isActive = activeHash === hashId;
            } else {
              isActive = false; // /about is false on homepage
            }
          } else {
            // If on another page, just match the base path
            isActive = activePath.startsWith(link.href) && link.href !== "/";
          }

          const Icon = link.icon;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                isActive
                  ? "text-primary bg-black/10 dark:bg-white/10"
                  : "text-secondary hover:text-primary hover:bg-black/5 dark:hover:bg-white/5"
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden md:inline-block">{link.label}</span>
            </Link>
          );
        })}
        <div className="w-px h-6 bg-border mx-1" />
        <ThemeToggle />
      </nav>
    </div>
  );
}
