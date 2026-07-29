import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PlayStoreBadge, ScreenshotGallery } from "../../../components/project-card";
import { SiteNav } from "../../../components/site-nav";
import { TrackedLink } from "../../../components/tracked-link";
import { DeviceMockup } from "../../../components/device-mockup";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { siteUrl } from "../../../lib/site-config";
import { caseStudies, getProjectBySlug, projects } from "../../../lib/site-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const study = caseStudies[slug];

  if (!project) return {};

  const title = study ? `${study.title} Case Study | Amit Kumar` : `${project.title} | Amit Kumar`;
  return {
    title,
    description: study?.subtitle || project.description,
    keywords: project.seoKeywords,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title,
      description: study?.subtitle || project.description,
      url: `${siteUrl}/projects/${slug}`,
      type: study ? "article" : "website",
      images: [{ url: project.graphicImage, alt: project.title }],
    },
  };
}

function CaseStudyContent({ study }) {
  return (
    <div className="max-w-4xl mx-auto space-y-24 mt-24">
      {/* Overview Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-border">
        <div className="col-span-2">
          <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-4">The Problem</h2>
          <p className="text-xl leading-relaxed text-secondary">{study.problem}</p>
        </div>
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-4">My Role</h2>
          <ul className="space-y-3">
            {study.role.map((item) => (
              <li key={item} className="flex gap-3 text-secondary text-sm">
                <span className="text-accent mt-0.5">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Architecture & Stack */}
      <section>
        <h2 className="text-3xl font-bold tracking-tight mb-8">Architecture & Approach</h2>
        <Card className="p-8 bg-surface/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-border"></span> System
              </h3>
              <ul className="space-y-4">
                {study.architecture?.map((item) => (
                  <li key={item} className="flex gap-3 text-secondary text-sm">
                    <span className="text-border mt-0.5">▪</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {study.firebaseDetails && study.firebaseDetails.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-border"></span> Firebase Integration
                </h3>
                <ul className="space-y-4">
                  {study.firebaseDetails.map((item) => (
                    <li key={item} className="flex gap-3 text-secondary text-sm">
                      <span className="text-border mt-0.5">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>
      </section>

      {/* Challenges Grid */}
      <section>
        <h2 className="text-3xl font-bold tracking-tight mb-8">Technical Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {study.challenges.map((challenge, i) => (
            <Card key={challenge.title} className="p-8 hover-lift" style={{ animationDelay: `${i * 0.1}s` }}>
              <h3 className="text-lg font-bold mb-3">{challenge.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{challenge.detail}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-surface border-y border-border py-24 -mx-4 px-4 md:-mx-8 md:px-8 xl:-mx-32 xl:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Outcome & Results</h2>
          <div className="flex flex-col items-center gap-8">
            <ul className="space-y-4 text-left max-w-xl mx-auto">
              {study.outcome.map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg text-primary">
                  <span className="text-success text-2xl leading-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-border w-full max-w-xl mx-auto">
              <p className="text-xs font-mono uppercase tracking-widest text-secondary mb-4">Tech Stack</p>
              <div className="flex flex-wrap justify-center gap-2">
                {study.techStack.split(", ").map(tech => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const study = caseStudies[slug];

  if (!project) notFound();

  const isPlayStore = project.live?.includes("play.google.com");
  const screenshots = study?.screenshots || project.screenshots || [];
  const liveUrl = study?.live || project.live;

  return (
    <div className="min-h-screen bg-background">
      <SiteNav activePath={`/projects/${slug}`} />
      
      {/* Premium Hero Section */}
      <header className="pt-40 pb-20 px-6 max-w-6xl mx-auto text-center">
        <Badge variant="accent" className="mb-6">{study ? "Case Study" : project.type}</Badge>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-primary max-w-4xl mx-auto leading-tight">
          {study?.title || project.title}
        </h1>
        <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
          {study?.subtitle || project.description}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          {isPlayStore && liveUrl ? (
            <PlayStoreBadge href={liveUrl} projectTitle={project.title} />
          ) : liveUrl ? (
            <TrackedLink href={liveUrl} eventName="project_link_click" eventLabel={project.title} target="_blank" rel="noreferrer">
              <Button variant="primary" size="lg">
                View Live Demo <ArrowUpRight className="w-5 h-5" />
              </Button>
            </TrackedLink>
          ) : null}
          <Link href="/#projects">
            <Button variant="ghost" size="lg">Back to Portfolio</Button>
          </Link>
        </div>
      </header>

      {/* Visuals / Hero Image */}
      <main className="px-6 max-w-7xl mx-auto pb-32">
        <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-border shadow-hero mb-24 bg-surface flex justify-center py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />
          {screenshots.length ? (
            <ScreenshotGallery screenshots={screenshots} title={project.title} />
          ) : (
            <Image
              src={project.graphicImage}
              alt={project.title}
              width={1200}
              height={675}
              className="object-cover relative z-10 rounded-2xl border border-white/10 shadow-2xl"
              priority
            />
          )}
        </div>

        {/* Dynamic Content */}
        {study ? (
          <CaseStudyContent study={study} />
        ) : (
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">{project.impact}</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {project.techStack.split(", ").map(tech => (
                <Badge key={tech} variant="outline">{tech}</Badge>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
