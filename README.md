# Amit Kumar - Portfolio Website

This is the source code for my personal portfolio and resume website, built with Next.js 15, React 19, and Tailwind CSS v4.

## Features
- **App Router & Static Generation:** Optimized for speed and SEO with Next.js App Router and statically generated case studies.
- **Modern UI/UX:** Features a sleek dark mode by default, floating glassmorphic contact buttons, animated sun/moon theme toggles, and interactive image zoom mockups.
- **Data-Driven Content:** All resume data (experience, projects, skills) is centralized in `lib/site-data.js` for easy updates without touching UI components.
- **Analytics Ready:** Custom `<TrackedLink>` component automatically logs outbound clicks, resume downloads, and social engagements to Google Analytics.
- **SEO Optimized:** Dynamic `sitemap.xml`, `robots.txt`, and structured JSON-LD (Schema.org) injected on every page.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Build for production:**
   ```bash
   npm run build
   ```

## Documentation
For a deep dive into the architecture, component structure, and how to add new projects/case studies, see [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md).

## License
MIT
