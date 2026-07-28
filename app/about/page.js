import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { SectionHeading } from "../../components/section-heading";
import { SiteNav } from "../../components/site-nav";
import { TrackedLink } from "../../components/tracked-link";
import { siteConfig, siteUrl } from "../../lib/site-config";
import {
  aboutContent,
  certifications,
  education,
  experience,
  profile,
} from "../../lib/site-data";

export const metadata = {
  title: "About Amit Kumar | React Native Developer",
  description:
    "Learn about Amit Kumar, a React Native product engineer shipping consumer apps with Firebase real-time features and AI integrations.",
  keywords: [
    "About Amit Kumar",
    "React Native developer India",
    "mobile app developer portfolio",
    "Firebase developer",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Amit Kumar | React Native Developer",
    description: aboutContent.intro,
    url: `${siteUrl}/about`,
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <div className="site-shell">
      <header className="hero hero-compact">
        <SiteNav activePath="/about" />
        <div className="page-intro">
          <p className="section-eyebrow">About</p>
          <h1>{aboutContent.title}</h1>
          <p className="page-lead">{aboutContent.intro}</p>
        </div>
      </header>

      <main className="content">
        <section className="panel">
          <SectionHeading
            eyebrow="Background"
            title="Product engineer with real shipping experience"
            copy={siteConfig.description}
          />
          <div className="intro-grid">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="panel">
          <SectionHeading
            eyebrow="Focus"
            title="What I work on today"
          />
          <div className="skill-tags">
            {aboutContent.focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </section>

        <section className="panel">
          <SectionHeading eyebrow="Experience" title="Career timeline" />
          <div className="timeline">
            {experience.map((item) => (
              <article
                className="timeline-card"
                key={`${item.company}-${item.period}`}
              >
                <div className="timeline-top">
                  <div>
                    <p className="timeline-role">{item.role}</p>
                    <h3>
                      {item.company} <span>{item.location}</span>
                    </h3>
                  </div>
                  <p className="timeline-period">{item.period}</p>
                </div>
                <ul className="timeline-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel split-panel">
          <article className="mini-panel">
            <h3>Education</h3>
            {education.map((item) => (
              <div key={item.degree} className="stack-item">
                <p className="stack-title">{item.degree}</p>
                <p>{item.school}</p>
                <p>{item.meta}</p>
              </div>
            ))}
          </article>

          <article className="mini-panel">
            <h3>Certifications</h3>
            {certifications.map((item) => (
              <TrackedLink
                key={item.title}
                className="cert-link"
                href={item.cert_link}
                eventName="certification_click"
                eventLabel={item.title}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  {item.title}
                  <small>{item.org}</small>
                </span>
                <FiArrowUpRight />
              </TrackedLink>
            ))}
          </article>
        </section>

        <section className="panel">
          <SectionHeading
            eyebrow="Next step"
            title="See the work behind the story"
          />
          <div className="hero-actions">
            <Link className="button button-primary" href="/#projects">
              View projects
            </Link>
            <TrackedLink
              className="button button-secondary"
              href={profile.resumeUrl}
              eventName="resume_download_click"
              eventLabel="Download resume"
              target="_blank"
              rel="noreferrer"
            >
              Download resume
            </TrackedLink>
          </div>
        </section>
      </main>
    </div>
  );
}
