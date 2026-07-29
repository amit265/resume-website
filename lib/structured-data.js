import { siteConfig, siteUrl } from "./site-config";
import { personalInfo, projects } from "./site-data";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: personalInfo.email,
    url: siteUrl,
    image: `${siteUrl}/assets/profile.jpg`,
    sameAs: [personalInfo.github, personalInfo.linkedin],
    address: {
      "@type": "PostalAddress",
      addressCountry: personalInfo.location,
    },
    knowsAbout: [
      "React Native",
      "Firebase",
      "Mobile App Development",
      "TypeScript",
      "LLM Integration",
    ],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
  };
}

export function getSoftwareApplicationJsonLd(project) {
  if (!project.live?.includes("play.google.com")) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "GameApplication",
    operatingSystem: project.platform,
    url: project.live,
    image: `${siteUrl}${project.graphicImage}`,
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function getStructuredDataGraph() {
  const mobileProjects = projects.filter((project) =>
    project.live?.includes("play.google.com"),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      getPersonJsonLd(),
      getWebsiteJsonLd(),
      ...mobileProjects
        .map(getSoftwareApplicationJsonLd)
        .filter(Boolean),
    ],
  };
}
