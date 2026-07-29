import Image from "next/image";
import Link from "next/link";
import { Download, Mail, MapPin } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "../components/project-card";
import { SectionHeading } from "../components/section-heading";
import { SiteNav } from "../components/site-nav";
import { TrackedLink } from "../components/tracked-link";
import { ExperienceTimeline } from "../components/experience-timeline";
import { SiteFooter } from "../components/site-footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  experience,
  getFeaturedProjects,
  metrics,
  personalInfo,
  externalArticles,
} from "../lib/site-data";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent/30">
      <SiteNav activePath="/" />

      {/* Hero Section */}
      <header className="pt-48 pb-32 px-6 max-w-5xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20" id="home">
        <div className="flex flex-col items-start max-w-xl fade-in-up">
          <Badge variant="outline" className="mb-8 px-4 py-2 text-sm border-white/10 bg-white/5">
            <MapPin className="w-4 h-4 mr-2 text-secondary" />
            {personalInfo.location}
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Hi, I'm Amit<span className="text-accent">.</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-secondary font-medium mb-6 leading-relaxed max-w-2xl">
            React Native Developer building production mobile applications used by <span className="text-primary font-bold">240K+ users</span>.
          </h2>
          
          <p className="text-lg text-secondary mb-8 max-w-xl leading-relaxed">
            {personalInfo.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-12">
            {["React Native", "Expo", "Firebase", "Next.js", "Redux", "LLM APIs"].map(tech => (
              <Badge key={tech} variant="outline" className="border-border text-secondary py-1 px-3 bg-surface/50">{tech}</Badge>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects">
              <Button variant="primary" size="lg">
                View Projects
              </Button>
            </a>
            <TrackedLink href={personalInfo.resumeUrl} eventName="resume_download_click" eventLabel="Download resume" target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg">
                <Download className="w-4 h-4 mr-2" /> Resume
              </Button>
            </TrackedLink>
          </div>
        </div>

        <div className="w-full lg:w-[320px] relative fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full mix-blend-screen" />
          <div className="relative aspect-square rounded-full overflow-hidden border border-border shadow-hero bg-surface p-2">
            <Image
              src="/assets/profile.png"
              alt="Amit Kumar"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>
      </header>

      {/* Trust Metrics */}
      <section className="border-y border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-between items-center gap-8 divide-x divide-border/50">
          {metrics.map((item, i) => (
            <div key={item.label} className="flex-1 min-w-[200px] flex flex-col items-center justify-center text-center px-4">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2 font-mono tracking-tighter">{item.value}</p>
              <p className="text-secondary uppercase tracking-widest text-xs font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-32 flex flex-col gap-32">
        {/* Featured Products */}
        <section id="projects">
          <SectionHeading
            eyebrow="Featured Work"
            title="Production Engineering"
            copy="Mobile and web applications engineered for scale, performance, and high user retention."
          />
          <div className="mt-12 flex flex-col gap-24">
            {featuredProjects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </section>

        {/* Professional Journey */}
        <section id="experience">
          <SectionHeading
            eyebrow="Career"
            title="Professional Journey"
            copy="From scaling independent Android apps to leading mobile teams at Destya Studio."
          />
          <div className="mt-12">
            <ExperienceTimeline experience={experience} />
          </div>
        </section>

        {/* Studio Notes Preview */}
        <section id="notes">
          <SectionHeading
            eyebrow="Writing"
            title="Studio Notes"
            copy="Observations on design, engineering, and digital artifacts from my journal."
          />
          <div className="mt-12 flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-2 -mx-2">
            {externalArticles.slice(0, 3).map((article, i) => (
              <a 
                key={i} 
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="group p-8 rounded-3xl bg-surface border border-border hover:border-border/80 hover:bg-surface/80 transition-colors flex flex-col min-w-[300px] md:min-w-[380px] snap-center hover-lift"
              >
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="outline">{article.date}</Badge>
                  <ArrowUpRight className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{article.title}</h3>
                <p className="text-secondary text-sm leading-relaxed flex-1">{article.description}</p>
              </a>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a href="https://destyastudio.com/journal" target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg">
                View All Notes <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
