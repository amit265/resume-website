export const profile = {
  name: "Amit Kumar",
  kicker: "React Native Developer",
  role: "React Native product engineer shipping consumer apps across Android, iOS, and web",
  location: "India",
  availability: "Open to product-focused opportunities",
  email: "amit@coderespite.com",
  github: "https://github.com/amit265",
  linkedin: "https://www.linkedin.com/in/amit265/",
  resumeUrl: "/assets/Amit-Kumar-React-Native-Developer.pdf",
  summary:
    "I ship Firebase-backed real-time experiences and AI-powered features in production, from multiplayer social games to quiz apps with LLM integrations. Previously grew consumer Android apps to 240K+ combined active users.",
};

export const highlights = [
  { value: "5+", label: "Production apps shipped" },
  { value: "240K+", label: "Combined active users" },
  { value: "54M+", label: "Tracked flagship app events" },
  { value: "3x", label: "BPSC mains qualification" },
];

export const shippedAppMetrics = [
  {
    value: "240K+",
    label: "Combined active users across independently built Android apps",
  },
  {
    value: "177K+",
    label: "Flagship app users with sustained organic Play Store growth",
  },
  {
    value: "54M+",
    label: "Tracked engagement events via Firebase Analytics",
  },
];

export const experience = [
  {
    role: "Lead React Native Developer",
    company: "Destya Studio",
    location: "Remote",
    period: "Jul 2024 - Present",
    points: [
      "Architected and shipped 5+ production apps across iOS, Android, and Web.",
      "Built real-time shared sessions with Firebase Realtime Database for synchronized game state and user interaction.",
      "Developed interactive multi-mode experiences with React Native, Redux, and custom animations.",
      "Implemented offline caching with AsyncStorage and production monitoring with Firebase Crashlytics.",
      "Integrated LLM APIs for AI-powered features and used Gemini CLI for development, debugging, and code reviews.",
    ],
  },
  {
    role: "Civil Services Candidate",
    company: "Bihar Public Service Commission (BPSC)",
    location: "India",
    period: "Jan 2022 - Jul 2024",
    points: [
      "Qualified for the BPSC mains examination in three consecutive attempts.",
      "Returned to software development with renewed focus on React Native, TypeScript, and modern full-stack development.",
    ],
  },
  {
    role: "Independent Android Developer",
    company: "Almanac Explorer",
    location: "India",
    period: "Jul 2018 - Dec 2021",
    points: [
      "Built, published, and maintained consumer Android apps using Java and XML with Google Play distribution.",
      "Grew two apps to 240K+ combined active users, with the flagship reaching 177K+ users and 54M+ tracked events.",
      "Acquired 145K+ users organically via Google Play and used Firebase Analytics plus mobile monetization to track engagement.",
    ],
  },
];

export const projects = [
  {
    slug: "question-games",
    title: "Question Games",
    description:
      "A multiplayer social game built for couples, friends, and families with curated prompts, AI follow-ups, and shared-session experiences.",
    impact:
      "Real-time Firebase synchronization and session design for party games, deep talks, and creator-ready Q&A prompts.",
    techStack: "React Native, Firebase Realtime Database, Redux, Expo",
    type: "Mobile Product",
    platform: "Android / iOS",
    url: "",
    live: "https://play.google.com/store/apps/details?id=com.mindcraftlearning.questiongames",
    graphicImage: "/assets/projects/questiongames.png",
    featured: true,
    hasCaseStudy: true,
    screenshots: [
      "/assets/projects/questiongames.png",
      "/assets/ic_launcher.png",
    ],
    seoKeywords: [
      "Question Games React Native",
      "Firebase multiplayer mobile app",
      "social game app developer",
    ],
  },
  {
    slug: "trivia-quest-ai",
    title: "Trivia Quest AI",
    description:
      "An AI-powered quiz platform with generated questions, explanations, score tracking, and replayable trivia experiences.",
    impact:
      "Showcases LLM integration in a consumer mobile product with Firebase-backed persistence and replay loops.",
    techStack: "React Native, Firebase, Expo, LLM APIs",
    type: "AI Quiz App",
    platform: "Android",
    url: "",
    live: "https://play.google.com/store/apps/details?id=com.coderespite.triviaquestai",
    graphicImage: "/assets/projects/trivia.png",
    featured: true,
    hasCaseStudy: false,
    screenshots: ["/assets/projects/trivia.png", "/assets/ic_launcher.png"],
    seoKeywords: [
      "Trivia Quest AI",
      "React Native quiz app",
      "LLM mobile app developer",
    ],
  },
  {
    slug: "coderespite",
    title: "CodeRespite",
    description:
      "Personal technical hub for products, writing, and frontend/mobile experiments.",
    impact:
      "Foundation for case studies, blog posts, and product storytelling.",
    techStack: "Next.js, Redux, Tailwind CSS",
    type: "Personal Platform",
    platform: "Web",
    url: "",
    live: "https://coderespite.com",
    graphicImage: "/assets/projects/coderespite.png",
    featured: false,
    hasCaseStudy: false,
    screenshots: ["/assets/projects/coderespite.png"],
    seoKeywords: ["CodeRespite", "developer portfolio platform"],
  },
  {
    slug: "spin-the-wheel",
    title: "Spin the Wheel",
    description:
      "A playful utility app for category-based decisions, quick prompts, and lightweight entertainment scenarios.",
    impact:
      "Repeatable consumer Android shipping with Expo and Play Store distribution.",
    techStack: "React Native, Expo",
    type: "Consumer App",
    platform: "Android",
    url: "",
    live: "https://play.google.com/store/apps/details?id=com.mindcraftlearning.spinthewheel",
    graphicImage: "/assets/projects/spinthewheel.png",
    featured: false,
    hasCaseStudy: false,
    screenshots: ["/assets/projects/spinthewheel.png"],
    seoKeywords: ["Spin the Wheel app", "React Native utility app"],
  },
];

export const caseStudies = {
  "question-games": {
    title: "Question Games",
    subtitle: "Building real-time multiplayer sessions with Firebase and AI follow-ups",
    problem:
      "Social games often feel static: fixed question lists, no shared session state, and awkward pauses when a group runs out of prompts. The product needed to feel alive in group settings — couples, parties, and family nights — without requiring accounts or heavy setup.",
    role: [
      "Lead React Native developer at Destya Studio",
      "Owned architecture for session sync, game modes, and offline-friendly UX",
      "Integrated AI follow-up generation for dynamic conversation flow",
    ],
    architecture: [
      "React Native + Expo for cross-platform delivery with a shared UI layer",
      "Redux for predictable game-mode state and session transitions",
      "Firebase Realtime Database for low-latency shared session state across devices",
      "AsyncStorage for offline caching of curated prompts and recently played content",
      "Firebase Crashlytics for production stability monitoring",
    ],
    firebaseDetails: [
      "Session documents keyed by room codes so groups can join without sign-up",
      "Realtime listeners keep prompt state, turn order, and mode changes synchronized",
      "Optimistic UI updates with rollback when sync conflicts occur on slow networks",
    ],
    challenges: [
      {
        title: "Latency vs. consistency",
        detail:
          "Party games need instant feedback. We prioritized perceived responsiveness with optimistic updates while Firebase listeners reconciled authoritative state.",
      },
      {
        title: "Offline-first prompts",
        detail:
          "Road trips and patchy connectivity required cached prompt packs so gameplay could continue without a live connection after initial load.",
      },
      {
        title: "Mode complexity",
        detail:
          "Truth or Dare, Would You Rather, and deep-talk categories each needed different state shapes without bloating the navigation tree.",
      },
    ],
    outcome: [
      "Shipped to Google Play as AI Icebreaker: Question Games with multiple game modes",
      "Supports specialized categories for couples, parties, family nights, and creators",
      "Demonstrates production Firebase Realtime Database patterns for shared mobile sessions",
    ],
    techStack: "React Native, Firebase Realtime Database, Redux, Expo, AsyncStorage, Crashlytics",
    live: "https://play.google.com/store/apps/details?id=com.mindcraftlearning.questiongames",
    graphicImage: "/assets/projects/questiongames.png",
    screenshots: [
      "/assets/projects/questiongames.png",
      "/assets/ic_launcher.png",
    ],
  },
};

export const skills = [
  {
    stack: "Languages",
    type: [
      { lang: "TypeScript" },
      { lang: "JavaScript (ES6+)" },
      { lang: "Java" },
      { lang: "HTML" },
      { lang: "CSS" },
    ],
  },
  {
    stack: "Frameworks",
    type: [
      { lang: "React Native" },
      { lang: "React" },
      { lang: "Next.js" },
      { lang: "Node.js" },
      { lang: "Express" },
      { lang: "Redux" },
      { lang: "Tailwind CSS" },
    ],
  },
  {
    stack: "Mobile & Cloud",
    type: [
      { lang: "Firebase" },
      { lang: "AsyncStorage" },
      { lang: "Crashlytics" },
      { lang: "Android Studio" },
      { lang: "Xcode" },
      { lang: "Google Play Console" },
      { lang: "App Store Connect" },
    ],
  },
  {
    stack: "Tools & AI",
    type: [
      { lang: "MongoDB" },
      { lang: "Git" },
      { lang: "Gemini CLI" },
      { lang: "LLM API Integration" },
      { lang: "Prompt Engineering" },
      { lang: "AI-Assisted Development" },
    ],
  },
];

export const certifications = [
  {
    title: "Namaste React",
    org: "Akshay Saini",
    cert_link: "https://coderespite.com/image/react.jpg",
  },
  {
    title: "Responsive Web Design",
    org: "freeCodeCamp",
    cert_link:
      "https://www.freecodecamp.org/certification/amit265/responsive-web-design",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    org: "freeCodeCamp",
    cert_link:
      "https://www.freecodecamp.org/certification/amit265/javascript-algorithms-and-data-structures-v8",
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science",
    school: "Aryabhatta Knowledge University, Patna",
    meta: "2014 - 2018 • CGPA: 8.21",
  },
];

export const aboutContent = {
  title: "About Amit Kumar",
  intro:
    "I'm a React Native product engineer who cares about shipping consumer apps that people actually use — not just demos.",
  paragraphs: [
    "My recent work at Destya Studio focuses on cross-platform mobile products with Firebase-backed real-time features, custom animations, and AI integrations. I enjoy owning the full loop from architecture to Play Store launch.",
    "Before returning full-time to software, I spent two years preparing for the Bihar Public Service Commission and qualified for the mains exam three times. That period built discipline and long-range consistency that shows up in how I debug, iterate, and ship.",
    "Earlier, as an independent Android developer, I grew consumer apps to 240K+ combined active users with strong organic Play Store traction and 54M+ tracked engagement events.",
  ],
  focusAreas: [
    "React Native across Android, iOS, and web",
    "Firebase Realtime Database and production monitoring",
    "LLM-powered features in mobile products",
    "Consumer app growth and Play Store distribution",
  ],
};

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getSecondaryProjects() {
  return projects.filter((project) => !project.featured);
}
