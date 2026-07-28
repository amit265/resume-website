import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { TrackedLink } from "./tracked-link";

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
      className="play-store-badge"
      aria-label={`Get ${projectTitle} on Google Play`}
    >
      <Image
        src={PLAY_STORE_BADGE}
        alt="Get it on Google Play"
        width={155}
        height={60}
        unoptimized
      />
    </TrackedLink>
  );
}

export function ScreenshotGallery({ screenshots, title }) {
  return (
    <div className="screenshot-gallery" aria-label={`${title} screenshots`}>
      {screenshots.map((src, index) => (
        <Image
          key={`${src}-${index}`}
          src={src}
          alt={`${title} screenshot ${index + 1}`}
          width={240}
          height={480}
          className="screenshot-item"
        />
      ))}
    </div>
  );
}

export function ProjectCard({ project, compact = false }) {
  const isPlayStore = project.live?.includes("play.google.com");

  return (
    <article className={`project-card${compact ? " project-card-compact" : ""}`}>
      <Image
        src={project.graphicImage}
        alt={project.title}
        width={960}
        height={540}
      />
      <div className="project-body">
        <div className="project-topline">
          <p>{project.type}</p>
          <span>{project.platform}</span>
        </div>
        <h3>
          {project.hasCaseStudy ? (
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="project-description">{project.description}</p>
        {!compact ? (
          <>
            <p className="project-impact">{project.impact}</p>
            {project.screenshots?.length ? (
              <ScreenshotGallery
                screenshots={project.screenshots}
                title={project.title}
              />
            ) : null}
          </>
        ) : null}
        <p className="project-stack">{project.techStack}</p>
        <div className="project-links">
          {project.hasCaseStudy ? (
            <Link href={`/projects/${project.slug}`}>
              Case study <FiArrowUpRight />
            </Link>
          ) : null}
          {project.live ? (
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
                Live <FiArrowUpRight />
              </TrackedLink>
            )
          ) : null}
          {project.url ? (
            <TrackedLink
              href={project.url}
              eventName="project_link_click"
              eventLabel={project.title}
              eventParams={{ project_name: project.title, link_type: "code" }}
              target="_blank"
              rel="noreferrer"
            >
              Code <FiArrowUpRight />
            </TrackedLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
