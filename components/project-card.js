import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ZoomIn } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { TrackedLink } from "./tracked-link";
import { DeviceMockup } from "./device-mockup";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const PLAY_STORE_BADGE =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";

export function PlayStoreBadge({ href, projectTitle }) {
  return (
    <TrackedLink
      href={href}
      eventName="play_store_click"
      eventLabel={projectTitle}
      eventParams={{ project_name: projectTitle }}
      target="_blank"
      rel="noreferrer"
      className="inline-flex hover-lift transition-transform"
      aria-label={`Get ${projectTitle} on Google Play`}
    >
      <Image
        src={PLAY_STORE_BADGE}
        alt="Get it on Google Play"
        width={140}
        height={54}
        unoptimized
      />
    </TrackedLink>
  );
}

export function ScreenshotGallery({ screenshots, title }) {
  return (
    <div className="flex flex-wrap justify-center gap-6" aria-label={`${title} screenshots`}>
      {screenshots.map((src, index) => (
        <DeviceMockup key={`${src}-${index}`}>
          <Image
            src={src}
            alt={`${title} screenshot ${index + 1}`}
            width={240}
            height={480}
            className="w-full h-full object-cover"
          />
        </DeviceMockup>
      ))}
    </div>
  );
}

export function ProjectCard({ project, compact = false }) {
  const isPlayStore = project.live?.includes("play.google.com");

  if (compact) {
    return (
      <Link href={project.hasCaseStudy ? `/projects/${project.slug}` : project.url || project.live || "#"} className="block group">
        <Card className="overflow-hidden hover-lift h-full flex flex-col border-border/50 bg-surface/50 group-hover:bg-surface transition-colors">
          <div className="h-48 overflow-hidden bg-black relative">
            <Image
              src={project.graphicImage}
              alt={project.title}
              fill
              className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex justify-between items-center mb-2">
              <Badge variant="outline">{project.type}</Badge>
              <span className="text-secondary text-xs uppercase tracking-wider">{project.platform}</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
            <p className="text-secondary text-sm mb-4 line-clamp-2 flex-1">{project.description}</p>
            <p className="text-xs text-secondary font-mono truncate">{project.techStack}</p>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Card className="overflow-hidden hover-lift border-border bg-surface p-8 md:p-12 mb-12 fade-in-up">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Mockup Side */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative group cursor-zoom-in">
            {/* Soft glowing background effect behind the phone */}
            <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full group-hover:bg-accent/40 transition-colors duration-500" />
            
            {project.screenshots?.length ? (
              <div className="relative">
                <DeviceMockup>
                  <Image
                    src={project.screenshots[0]}
                    alt={`${project.title} screenshot`}
                    width={280}
                    height={560}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </DeviceMockup>
                {/* Zoom Overlay */}
                <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20 rounded-[2rem]">
                  <div className="bg-surface/80 p-4 rounded-full shadow-2xl translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-border">
                    <ZoomIn className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={project.graphicImage}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Zoom Overlay */}
                <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                  <div className="bg-surface/80 p-4 rounded-full shadow-2xl translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-border">
                    <ZoomIn className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge>{project.type}</Badge>
              <span className="text-secondary text-sm uppercase tracking-widest font-mono">{project.platform}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
              {project.title}
            </h3>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              {project.description}
            </p>
            <p className="text-primary font-medium border-l-2 border-accent pl-4 py-1 mb-8">
              {project.impact}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.split(", ").map(tech => (
              <Badge key={tech} variant="outline" className="bg-white/5 border-white/10 text-secondary">{tech}</Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {project.hasCaseStudy && (
              <Link href={`/projects/${project.slug}`}>
                <Button variant="primary">
                  Read Case Study <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
            
            {project.live && (
              isPlayStore ? (
                <PlayStoreBadge href={project.live} projectTitle={project.title} />
              ) : (
                <TrackedLink
                  href={project.live}
                  eventName="project_link_click"
                  eventLabel={project.title}
                  eventParams={{ project_name: project.title, link_type: "live" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="secondary">
                    Live Demo <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </TrackedLink>
              )
            )}

            {project.url && (
              <TrackedLink
                href={project.url}
                eventName="project_link_click"
                eventLabel={project.title}
                eventParams={{ project_name: project.title, link_type: "code" }}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="ghost">
                  <FiGithub className="w-4 h-4" /> Code
                </Button>
              </TrackedLink>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
