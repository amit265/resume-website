# Project Documentation: Resume Website

This document provides a comprehensive overview of the resume website project, detailing the technology stack, project structure, core components, and data management. It serves as a reference guide for anyone looking to understand or modify the codebase.

## 1. Technology Stack

The project is built using modern web development tools and frameworks, optimized for performance, SEO, and maintainability.

*   **Framework**: **Next.js 15** (App Router)
*   **Library**: **React 19**
*   **Styling**: **Tailwind CSS v4** alongside existing Vanilla CSS. Uses `@tailwindcss/postcss` for processing. (`app/globals.css`, `tailwind.config.js`)
*   **Icons**: `react-icons`
*   **Deployment & Build**: Standard Next.js build pipeline (`npm run build`, `npm run dev`)
*   **Analytics**: Google Analytics (via `next/script`)
*   **SEO**: Native Next.js Metadata API, dynamic `sitemap.xml`, `robots.txt`, and JSON-LD structured data.

## 2. Project Structure (Tree)

The project follows a standard Next.js App Router structure with a clear separation between pages (`app/`), UI elements (`components/`), and data/configuration (`lib/`).

```text
.
├── app/                       # Next.js App Router (Pages & Layouts)
│   ├── about/                 # About page route (/about)
│   │   └── page.js
│   ├── projects/              # Dynamic routing for project case studies
│   │   └── [slug]/
│   │       └── page.js        # E.g., /projects/question-games
│   ├── globals.css            # Global CSS styles
│   ├── layout.js              # Root layout (HTML shell, Metadata, Analytics, JSON-LD)
│   ├── page.js                # Home page route (/)
│   ├── robots.js              # Generates robots.txt dynamically
│   └── sitemap.js             # Generates sitemap.xml dynamically
├── components/                # Reusable React UI Components
│   ├── device-mockup.js       # Renders a sleek phone/device frame around images
│   ├── experience-timeline.js # Alternating timeline component for work history
│   ├── floating-contact.js    # Global floating action button for contact
│   ├── json-ld.js             # Injects Schema.org structured data
│   ├── project-card.js        # Renders individual project summaries with zoom interactions
│   ├── section-heading.js     # Standardized section titles with micro-branding sparks
│   ├── site-nav.js            # Global navigation bar
│   ├── theme-toggle.js        # Animated sun/moon dark mode switcher
│   └── tracked-link.js        # Custom Link wrapper that fires Google Analytics events
├── lib/                       # Core Logic, Configuration, and Data Store
│   ├── analytics.js           # Google Analytics event dispatchers
│   ├── site-config.js         # Global site variables (URL, GA Measurement ID)
│   ├── site-data.js           # **Source of Truth** for resume content (Experience, Projects, etc.)
│   └── structured-data.js     # Generators for JSON-LD schemas (Person, WebSite, SoftwareApplication)
├── public/                    # Static Assets (Images, PDFs, Icons)
│   └── assets/
│       ├── Amit-Kumar-React-Native-Developer.pdf  # Resume PDF
│       ├── profile.jpeg       # Author profile photo
│       └── projects/          # Project cover images and screenshots
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration for Tailwind v4 (@tailwindcss/postcss)
├── tailwind.config.js         # Tailwind configuration (theme mapping)
└── SUGGESTIONS.md             # Backlog of suggested improvements
```

## 3. Core Components (`components/`)

The UI is built modularly. Here are the key components and their roles:

*   **`TrackedLink`** (`tracked-link.js`): A highly important wrapper around the standard HTML `<a>` or Next.js `<Link>`. It automatically fires `gtag` events to Google Analytics whenever a user clicks the link. Used for tracking external links, resume downloads, and social profile clicks.
*   **`ProjectCard`** (`project-card.js`): Renders a single project on the homepage. It supports a full view (with impact metrics, device mockups, and interactive hover zoom) and a "compact" view for secondary projects. It intelligently renders a "Play Store Badge" if the project's live URL is on Google Play.
*   **`SectionHeading`** (`section-heading.js`): Ensures all sections (e.g., "About", "Experience", "Projects") have a consistent layout (Eyebrow text, Title, and optional copy). Includes an animated glowing spark (`✦`) for premium micro-branding.
*   **`ThemeToggle`** (`theme-toggle.js`): An absolute-positioned, animated component that smoothly rotates and scales Sun/Moon icons when toggling between dark and light modes.
*   **`FloatingContact`** (`floating-contact.js`): A persistent, globally available floating action button anchored to the bottom right of the screen to drive contact conversions.
*   **`SiteNav`** (`site-nav.js`): The top navigation bar, highlighting the active path and housing the theme toggle.
*   **`JsonLd`** (`json-ld.js`): Renders a `<script type="application/ld+json">` tag to inject structured data into the DOM, making the site highly readable for search engines.

## 4. Data Management (`lib/`)

Instead of hardcoding text into the React components, all content is centralized in the `lib/` directory.

*   **`site-config.js`**: Holds structural variables like the domain name (`siteUrl`), default SEO descriptions, and the Google Analytics Measurement ID (`gaMeasurementId`).
*   **`site-data.js`**: **This is the most important file for updating content.** It exports JavaScript objects and arrays containing all the resume data:
    *   `profile`: Basic info, summary, and links.
    *   `experience`: Timeline of work history.
    *   `projects`: An array of all projects. The `featured` boolean determines if it shows in the main grid or the compact grid. If `hasCaseStudy` is true, the dynamic route will generate a page for it.
    *   `caseStudies`: Detailed write-ups (Problem, Architecture, Outcome) for specific projects.
    *   `skills`, `education`, `certifications`: Arrays populating their respective sections.
*   **`structured-data.js`**: Contains functions that map the data from `site-data.js` into valid Schema.org JSON objects (e.g., mapping your skills to `knowsAbout` in the `Person` schema).

## 5. Routing & SEO Strategy

*   **Dynamic Routes**: The `app/projects/[slug]/page.js` file dynamically creates pages for any project that has a case study. It uses `generateStaticParams()` to pre-render these at build time for optimal speed.
*   **SEO Metadata**: `app/layout.js` defines the root `metadata` object (Title, Description, Keywords, OpenGraph images). Dynamic routes override this with their own specific titles and descriptions using `generateMetadata()`.
*   **Analytics**: Every significant outbound link uses `TrackedLink` to send data to Google Analytics, allowing you to measure engagement (e.g., how many people clicked the Play Store link vs. downloaded the resume).

## 6. How to Update the Site

1.  **To update your work history or skills**: Edit `lib/site-data.js`. The homepage will automatically reflect the changes.
2.  **To add a new project**: Add a new object to the `projects` array in `lib/site-data.js`. Add an image to `public/assets/projects/`.
3.  **To create a case study**: Set `hasCaseStudy: true` on a project in `site-data.js`, and add an entry for its slug in the `caseStudies` object in the same file. The page will automatically be created at `/projects/{slug}`.
4.  **To update your resume PDF**: Replace the file at `public/assets/Amit-Kumar-React-Native-Developer.pdf`.
