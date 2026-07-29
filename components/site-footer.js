import Link from "next/link";
import { Mail, Download, MapPin, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { TrackedLink } from "./tracked-link";
import { Button } from "./ui/button";
import { personalInfo } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#111113]/5 dark:bg-[#111113]/40 mt-32 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-24 md:gap-32">
        
        {/* Section 1: Split Contact Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 fade-in-up">
          {/* Left Column: CTA & Bio */}
          <div className="flex flex-col items-start gap-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Let's work <span className="text-accent">together.</span>
            </h2>
            <p className="text-xl text-secondary">
              I'm always thrilled to dive into exciting projects. Let's connect and explore how we can collaborate!
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <TrackedLink href={`mailto:${personalInfo.email}`} eventName="email_click" eventLabel="Email footer CTA">
                <Button variant="primary" size="lg" className="h-14 px-8 text-lg rounded-2xl group hover-lift shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all">
                  <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" /> Email Me
                </Button>
              </TrackedLink>
              <TrackedLink href={personalInfo.resumeUrl} eventName="resume_download_click" eventLabel="Download resume footer CTA" target="_blank" rel="noreferrer">
                <Button variant="secondary" size="lg" className="h-14 px-8 text-lg rounded-2xl bg-surface hover-lift group">
                  <Download className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform duration-300" /> Resume
                </Button>
              </TrackedLink>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-surface/50 border border-border p-8 rounded-3xl backdrop-blur-sm">
            <form action="https://formspree.io/f/xvzeyrgq" method="POST" className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-secondary">Name</label>
                <input required type="text" id="name" name="name" placeholder="John Doe" className="bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-secondary">Email</label>
                <input required type="email" id="email" name="email" placeholder="john@example.com" className="bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-secondary">Message</label>
                <textarea required id="message" name="message" rows={4} placeholder="Tell me about your project..." className="bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none" />
              </div>
              <Button type="submit" variant="primary" className="w-full h-12 rounded-xl text-md font-semibold mt-2 hover-lift">
                Send Message
              </Button>
            </form>
          </div>
        </section>

        {/* Section 2: Contact & Socials (Bottom Bar) */}
        <div className="pt-16 border-t border-border/50 flex flex-col gap-8 justify-center items-center">
          
          <div className="flex flex-col gap-4 items-center">
            <span className="text-sm font-bold tracking-widest uppercase text-secondary text-center">You can find me everywhere</span>
            <div className="flex gap-4">
              <TrackedLink href={personalInfo.github} target="_blank" rel="noreferrer" eventName="social_icon" eventLabel="GitHub" className="w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-border text-secondary hover:text-primary hover:border-primary hover:shadow-sm transition-all hover-lift">
                <FiGithub className="w-5 h-5" />
              </TrackedLink>
              <TrackedLink href={personalInfo.linkedin} target="_blank" rel="noreferrer" eventName="social_icon" eventLabel="LinkedIn" className="w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-border text-secondary hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-sm transition-all hover-lift">
                <FiLinkedin className="w-5 h-5" />
              </TrackedLink>
              <TrackedLink href={`mailto:${personalInfo.email}`} eventName="social_icon" eventLabel="Email" className="w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-border text-secondary hover:text-primary hover:border-primary hover:shadow-sm transition-all hover-lift">
                <Mail className="w-5 h-5" />
              </TrackedLink>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-center">
            <p className="text-sm font-medium text-secondary">Made with ❤️ in India</p>
          </div>
          
        </div>

      </div>
    </footer>
  );
}
