import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { ProjectCard } from "../components/project-card";
import { SectionHeading } from "../components/section-heading";
import { SiteNav } from "../components/site-nav";
import { TrackedLink } from "../components/tracked-link";
import {
  certifications,
  education,
  experience,
  getFeaturedProjects,
  getSecondaryProjects,
  highlights,
  profile,
  shippedAppMetrics,
  skills,
} from "../lib/site-data";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const secondaryProjects = getSecondaryProjects();

  return (
    <div className="site-shell">
      <header className="hero">
        <SiteNav activePath="/" />

        <div className="hero-grid" id="home">
          <div className="hero-copy">
            <p className="hero-kicker">{profile.kicker}</p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-meta">
              <span>
                <FiMapPin />
                {profile.location}
              </span>
              <span>{profile.availability}</span>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View selected work
              </a>
              <TrackedLink
                className="button button-secondary"
                href={profile.resumeUrl}
                eventName="resume_download_click"
                eventLabel="Download resume"
                target="_blank"
                rel="noreferrer"
              >
                <FiDownload />
                Download resume
              </TrackedLink>
            </div>

            <div className="social-links">
              <TrackedLink
                href={`mailto:${profile.email}`}
                eventName="email_click"
                eventLabel="Email"
                aria-label="Email Amit"
              >
                <FiMail />
              </TrackedLink>
              <TrackedLink
                href={profile.linkedin}
                eventName="linkedin_click"
                eventLabel="LinkedIn"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin />
              </TrackedLink>
              <TrackedLink
                href={profile.github}
                eventName="github_click"
                eventLabel="GitHub"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <FiGithub />
              </TrackedLink>
            </div>
          </div>

          <aside className="hero-panel">
            <Image
              className="profile-photo"
              src="/assets/profile.jpeg"
              alt="Amit Kumar"
              width={320}
              height={320}
              priority
            />
            <div className="hero-stat-grid">
              {highlights.map((item) => (
                <article className="stat-card" key={item.label}>
                  <p className="stat-value">{item.value}</p>
                  <p className="stat-label">{item.label}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </header>

      <main className="content">
        <section className="panel intro-panel">
          <SectionHeading
            eyebrow="About"
            title="Firebase-backed real-time products and AI-powered mobile features"
            copy="Current role, measurable impact, and cross-platform shipping show up first."
          />
          <div className="intro-grid">
            <p>
              I build consumer-facing apps that balance reliability, interaction
              design, and fast iteration. Recent work spans multiplayer social
              games, AI quiz products, and production monitoring with Firebase.
            </p>
            <p>
              <Link href="/about">Read more about my background</Link>, including
              a return to software after qualifying for the BPSC mains exam three
              times and growing Android apps to 240K+ combined active users.
            </p>
          </div>
        </section>

        <section className="panel proof-panel">
          <SectionHeading
            eyebrow="Shipped apps"
            title="Real product usage, not just portfolio demos"
            copy="Metrics from independently built and studio-shipped consumer apps."
          />
          <div className="proof-grid">
            {shippedAppMetrics.map((metric) => (
              <article className="stat-card proof-card" key={metric.label}>
                <p className="stat-value">{metric.value}</p>
                <p className="stat-label">{metric.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="experience">
          <SectionHeading
            eyebrow="Experience"
            title="Professional work anchored in shipped products"
          />
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

        <section className="panel" id="projects">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured projects with Play Store proof"
            copy="Focused on React Native, Firebase, and AI experience."
          />
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>

          {secondaryProjects.length ? (
            <>
              <SectionHeading
                eyebrow="More work"
                title="Additional shipped products"
              />
              <div className="project-grid project-grid-compact">
                {secondaryProjects.map((project) => (
                  <ProjectCard
                    project={project}
                    compact
                    key={project.slug}
                  />
                ))}
              </div>
            </>
          ) : null}
        </section>

        <section className="panel split-panel" id="skills">
          <div>
            <SectionHeading
              eyebrow="Skills"
              title="Built for modern mobile product work"
            />
            <div className="skill-groups">
              {skills.map((group) => (
                <article className="skill-group" key={group.stack}>
                  <h3>{group.stack}</h3>
                  <div className="skill-tags">
                    {group.type.map((item) => (
                      <span key={item.lang}>{item.lang}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="side-stack">
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
          </div>
        </section>
      </main>

      <footer className="footer panel" id="contact">
        <div>
          <p className="section-eyebrow">Contact</p>
          <h2>Open to thoughtful product work and strong engineering teams</h2>
          <p className="footer-copy">
            Based in India and open to remote product-focused roles.
          </p>
        </div>
        <div className="footer-actions">
          <TrackedLink
            className="button button-primary"
            href={`mailto:${profile.email}`}
            eventName="email_click"
            eventLabel="Email footer"
          >
            <FiMail />
            {profile.email}
          </TrackedLink>
          <TrackedLink
            className="button button-secondary"
            href={profile.linkedin}
            eventName="linkedin_click"
            eventLabel="LinkedIn footer"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
            LinkedIn
          </TrackedLink>
          <TrackedLink
            className="button button-secondary"
            href={profile.github}
            eventName="github_click"
            eventLabel="GitHub footer"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
            GitHub
          </TrackedLink>
        </div>
      </footer>
    </div>
  );
}
