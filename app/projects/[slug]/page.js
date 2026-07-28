import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlayStoreBadge, ScreenshotGallery } from "../../../components/project-card";
import { SectionHeading } from "../../../components/section-heading";
import { SiteNav } from "../../../components/site-nav";
import { TrackedLink } from "../../../components/tracked-link";
import { siteUrl } from "../../../lib/site-config";
import { caseStudies, getProjectBySlug, projects } from "../../../lib/site-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const study = caseStudies[slug];

  if (!project) {
    return {};
  }

  const title = study
    ? `${study.title} Case Study | Amit Kumar`
    : `${project.title} | Amit Kumar`;
  const description = study?.subtitle || project.description;

  return {
    title,
    description,
    keywords: project.seoKeywords,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/projects/${slug}`,
      type: study ? "article" : "website",
      images: [{ url: project.graphicImage, alt: project.title }],
    },
  };
}

function CaseStudyContent({ study }) {
  return (
    <>
      <section className="panel">
        <div className="case-study-section">
          <h2>Problem</h2>
          <p>{study.problem}</p>
        </div>
      </section>

      <section className="panel">
        <div className="case-study-section">
          <h2>My role</h2>
          <ul className="timeline-points">
            {study.role.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="panel">
        <div className="case-study-section">
          <h2>Architecture</h2>
          <ul className="timeline-points">
            {study.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="panel">
        <div className="case-study-section">
          <h2>Firebase integration</h2>
          <ul className="timeline-points">
            {study.firebaseDetails.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="panel">
        <div className="case-study-section">
          <h2>Technical challenges</h2>
          <div className="challenge-grid">
            {study.challenges.map((challenge) => (
              <article className="challenge-card" key={challenge.title}>
                <h3>{challenge.title}</h3>
                <p>{challenge.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="case-study-section">
          <h2>Outcome</h2>
          <ul className="timeline-points">
            {study.outcome.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="project-stack">{study.techStack}</p>
        </div>
      </section>
    </>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const study = caseStudies[slug];

  if (!project) {
    notFound();
  }

  const isPlayStore = project.live?.includes("play.google.com");
  const screenshots = study?.screenshots || project.screenshots || [];
  const liveUrl = study?.live || project.live;

  return (
    <div className="site-shell">
      <header className="hero hero-compact">
        <SiteNav activePath={`/projects/${slug}`} />
        <div className="page-intro">
          <p className="section-eyebrow">
            {study ? "Case Study" : project.type}
          </p>
          <h1>{study?.title || project.title}</h1>
          <p className="page-lead">{study?.subtitle || project.description}</p>
          <div className="hero-actions">
            {isPlayStore && liveUrl ? (
              <PlayStoreBadge href={liveUrl} projectTitle={project.title} />
            ) : liveUrl ? (
              <TrackedLink
                href={liveUrl}
                eventName="project_link_click"
                eventLabel={project.title}
                eventParams={{ project_name: project.title, link_type: "live" }}
                className="button button-primary"
                target="_blank"
                rel="noreferrer"
              >
                View live
              </TrackedLink>
            ) : null}
            <Link className="button button-secondary" href="/#projects">
              Back to projects
            </Link>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="panel case-study-hero">
          <Image
            src={project.graphicImage}
            alt={project.title}
            width={1200}
            height={675}
            className="case-study-cover"
            priority
          />
          {screenshots.length ? (
            <ScreenshotGallery screenshots={screenshots} title={project.title} />
          ) : null}
        </section>

        {study ? (
          <CaseStudyContent study={study} />
        ) : (
          <section className="panel">
            <SectionHeading
              eyebrow="Overview"
              title={project.impact}
              copy={project.techStack}
            />
          </section>
        )}
      </main>
    </div>
  );
}
