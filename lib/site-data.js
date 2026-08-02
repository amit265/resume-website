import { BookOpen, Smartphone } from "lucide-react";

export const personalInfo = {
  name: "Amit Kumar",
  title: "React Native Developer building production mobile apps used by 240K+ users.",
  subtitle:
    "I design and ship Firebase-powered, AI-enabled mobile applications across Android, iOS, and Web - from real-time multiplayer experiences to intelligent quiz platforms.",
  about:
    "I enjoy building products that people actually use. From independently growing Android apps to hundreds of thousands of users to shipping production React Native apps at Destya Studio, my focus has always been creating software that feels fast, reliable, and enjoyable.",
  location: "New Delhi, India",
  email: "amit@coderespite.in",
  github: "https://github.com/amit265",
  linkedin: "https://www.linkedin.com/in/amit265/",
  resumeUrl: "/assets/Amit-Kumar-React-Native-Developer.pdf",
};

export const metrics = [
  { label: "Production Apps", value: "5+" },
  { label: "Active Users", value: "240K+" },
  { label: "Analytics Events", value: "54M+" },
  { label: "Apps Published", value: "10+" },
];

export const experience = [
  {
    company: "Destya Studio",
    role: "Lead React Native Developer",
    period: "2024 - Present",
    description:
      "Leading mobile development across multiple client and internal projects using Expo, React Native, and Firebase.",
    achievements: [
      "Built and launched CodeRespite app with 60fps Reanimated animations",
      "Architected offline-first data sync with Firestore and AsyncStorage",
      "Set up automated CI/CD pipelines with Expo EAS and GitHub Actions",
    ],
    logo: "https://destyastudio.com/favicon.ico",
    location: "Remote",
    url: "https://destyastudio.com",
    tags: ["React Native", "Firebase", "Expo", "Reanimated"],
  },
  {
    company: "BPSC Preparation",
    role: "Full-time Aspirant",
    period: "2022 - 2024",
    description:
      "Dedicated two years to intensive study for the Bihar Public Service Commission examinations.",
    achievements: [
      "Qualified for the Mains examination three consecutive times",
      "Developed extreme discipline and analytical problem-solving skills",
    ],
    logo: <BookOpen className="w-6 h-6 text-accent" />,
    location: "India",
    tags: ["Analytical Thinking", "Discipline"],
  },
  {
    company: "Independent App Developer",
    role: "Android Engineer",
    period: "2018 - 2022",
    description:
      "Designed, developed, and monetized 5 native Android applications on the Google Play Store.",
    achievements: [
      "Grew total user base to over 240,000 organic downloads",
      "Maintained 4.5+ star ratings across the portfolio",
      "Implemented complex UI layouts and integrated AdMob monetization",
    ],
    logo: <Smartphone className="w-6 h-6 text-accent" />,
    location: "India",
    tags: ["Android", "Java", "AdMob", "UI/UX"],
  },
];

export const projects = [
  {
    slug: "spin-the-wheel",
    title: "Spin the Wheel : Pick for me",
    description:
      "Spin the wheel to decide fun topics, games, meals, or challenges!",
    impact:
      "Repeatable consumer Android shipping with Expo and Play Store distribution. Top-rated utility.",
    techStack: "React Native, Expo",
    type: "Entertainment",
    platform: "Android / iOS",
    url: "",
    live: "https://destyastudio.com/products/spin-the-wheel",
    quickView: "https://spin-the-wheel-eight.vercel.app/",
    graphicImage: "https://destyastudio.com/apps/spin-the-wheel/icon.png",
    featured: true,
    hasCaseStudy: false,
    screenshots: ["https://destyastudio.com/apps/spin-the-wheel/screenshots/screenshot_1.png"],
    seoKeywords: ["Spin the Wheel app", "React Native utility app"],
  },
  {
    slug: "question-games",
    title: "AI Icebreaker: Question Games",
    description:
      "A multiplayer social game built for couples, friends, and families with curated prompts, AI follow-ups, and shared-session experiences.",
    impact:
      "Real-time Firebase synchronization and session design for party games, deep talks, and creator-ready Q&A prompts.",
    techStack: "React Native, Firebase Realtime Database, Redux, Expo",
    type: "Social / Lifestyle",
    platform: "Android / iOS",
    url: "",
    live: "https://destyastudio.com/products/question-games",
    quickView: "https://question-games-omega.vercel.app/",
    graphicImage: "https://destyastudio.com/apps/question-games/icon.png",
    featured: true,
    hasCaseStudy: false,
    screenshots: [
      "https://destyastudio.com/apps/question-games/screenshots/screenshot_1.png"
    ],
    seoKeywords: [
      "Question Games React Native",
      "Firebase multiplayer mobile app",
      "social game app developer",
    ],
  },
  {
    slug: "trivia-quest-ai",
    title: "Trivia Quest AI: Fun Quiz Game",
    description:
      "An AI-powered quiz platform with generated questions, explanations, score tracking, and replayable trivia experiences.",
    impact:
      "Showcases LLM integration in a consumer mobile product with Firebase-backed persistence and replay loops.",
    techStack: "React Native, Firebase, Expo, LLM APIs",
    type: "Education",
    platform: "Android / iOS",
    url: "",
    live: "https://destyastudio.com/products/trivia-quest-ai",
    quickView: "https://trivia-quest-ai.vercel.app/",
    graphicImage: "https://destyastudio.com/apps/trivia-quest-ai/icon.png",
    featured: true,
    hasCaseStudy: false,
    screenshots: ["https://destyastudio.com/apps/trivia-quest-ai/screenshots/screenshot_1.png"],
    seoKeywords: [
      "Trivia Quest AI",
      "React Native quiz app",
      "LLM mobile app developer",
    ],
  },
];

export const caseStudies = {
  "spin-the-wheel": {
    title: "Spin the Wheel : Pick for me",
    subtitle: "A highly customizable and smooth decision-making utility app",
    problem:
      "[Placeholder: Describe the problem that Spin the Wheel solves. Why did you build it? What was the gap in the market?]",
    role: [
      "Lead React Native developer",
      "Designed the physics-based spinning animation system",
      "Built custom category management",
    ],
    architecture: [
      "React Native + Expo for rapid cross-platform deployment",
      "Reanimated for 60fps physics-based wheel spinning animations",
      "AsyncStorage for local persistence of custom wheel configurations",
    ],
    challenges: [
      {
        title: "Animation Performance",
        detail:
          "[Placeholder: Explain how you achieved smooth 60fps animations for the wheel spinning mechanics.]",
      },
      {
        title: "State Management",
        detail:
          "[Placeholder: Explain how you managed the complex state of custom segments and colors.]",
      },
    ],
    outcome: [
      "Shipped to iOS and Android",
      "Maintains a high rating for utility and ease of use",
    ],
    techStack: "React Native, Expo, Reanimated",
    live: "https://destyastudio.com/products/spin-the-wheel",
    graphicImage: "https://destyastudio.com/apps/spin-the-wheel/icon.png",
    screenshots: ["https://destyastudio.com/apps/spin-the-wheel/screenshots/screenshot_1.png"],
  },
  "trivia-quest-ai": {
    title: "Trivia Quest AI: Fun Quiz Game",
    subtitle: "Automating infinite quiz content generation using Large Language Models",
    problem:
      "[Placeholder: Describe the core challenge of Trivia Quest AI. Why use AI instead of a static question database?]",
    role: [
      "Lead Developer",
      "Integrated Groq/Gemini APIs for dynamic question generation",
      "Built the gameplay loop and scoring system",
    ],
    architecture: [
      "React Native + Expo for frontend",
      "Firebase for user authentication and score tracking",
      "Serverless functions for safely calling LLM APIs",
    ],
    challenges: [
      {
        title: "LLM Consistency",
        detail:
          "[Placeholder: Explain the prompt engineering required to ensure the LLM always returned valid JSON for the quiz questions.]",
      },
      {
        title: "Latency",
        detail:
          "[Placeholder: Discuss how you handled API latency during question generation so the user isn't stuck waiting.]",
      },
    ],
    outcome: [
      "Shipped successfully with infinite replayability",
      "Eliminated the need for manual content creation",
    ],
    techStack: "React Native, Firebase, Expo, LLM APIs",
    live: "https://destyastudio.com/products/trivia-quest-ai",
    graphicImage: "https://destyastudio.com/apps/trivia-quest-ai/icon.png",
    screenshots: ["https://destyastudio.com/apps/trivia-quest-ai/screenshots/screenshot_1.png"],
  },
  "question-games": {
    title: "Question Games",
    subtitle: "Building real-time multiplayer sessions with Firebase and AI follow-ups",
    problem:
      "Social games often feel static: fixed question lists, no shared session state, and awkward pauses when a group runs out of prompts. The product needed to feel alive in group settings - couples, parties, and family nights - without requiring accounts or heavy setup.",
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
    graphicImage: "https://destyastudio.com/apps/question-games/icon.png",
    screenshots: [
      "https://destyastudio.com/apps/question-games/screenshots/screenshot_1.png"
    ],
  },
};

export const skills = [
  {
    name: "React Native",
    context: "Leading mobile product development at Destya Studio, building offline-first architectures and smooth Reanimated 60fps animations.",
  },
  {
    name: "Firebase",
    context: "Extensive production experience scaling Realtime Database for multiplayer games and tracking 54M+ events via Analytics.",
  },
  {
    name: "TypeScript",
    context: "Default language for all recent projects, enforcing strict typing across Redux stores and API responses.",
  },
  {
    name: "AI & LLMs",
    context: "Integrated Groq and Gemini APIs to power dynamic game modes and automated trivia generation.",
  },
  {
    name: "Next.js",
    context: "Building fast, SEO-optimized web platforms (like this portfolio) using App Router, React Server Components, and Tailwind CSS.",
  },
  {
    name: "Redux",
    context: "Managing complex, multi-modal game state and session synchronization across devices.",
  },
  {
    name: "Analytics & Growth",
    context: "Grew independent apps to 240K+ users through App Store Optimization, Firebase A/B testing, and AdMob integration.",
  },
];

export const certifications = [
  {
    title: "Namaste React",
    org: "Akshay Saini",
    cert_link: "https://coderespite.in/image/react.jpg",
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
    "I'm a React Native product engineer who cares about shipping consumer apps that people actually use - not just demos.",
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

export const principles = [
  {
    text: "Build products people actually use.",
    description: "Technology is just a tool. The goal is solving real problems for real users.",
  },
  {
    text: "Prefer clean architecture over quick hacks.",
    description: "Maintainability scales. Spaghetti code does not.",
  },
  {
    text: "Measure everything.",
    description: "If you aren't tracking analytics and performance, you're flying blind.",
  },
  {
    text: "Optimize continuously.",
    description: "60fps isn't an accident. It's the result of relentless profiling and optimization.",
  },
  {
    text: "Keep user experience simple.",
    description: "The best interfaces are invisible. Reduce cognitive load wherever possible.",
  },
  {
    text: "Ship, learn, improve.",
    description: "Perfect is the enemy of shipped. Get it in users' hands and iterate rapidly.",
  },
];

export const externalArticles = [
  {
    title: "Drafting Privacy Policies for Indie Mobile Apps: A Plain English Guide",
    date: "2026-07-20",
    description: "What your indie app's privacy policy actually needs to say, why it matters, and how to write one that is honest rather than boilerplate.",
    url: "https://destyastudio.com/journal/indie-app-privacy-policy-guide"
  },
  {
    title: "Designing LLM Conversation Interfaces: Streaming Responses and Loading Animations",
    date: "2026-07-15",
    description: "How to design chat interfaces for language model responses that feel fast and responsive, even when generation takes several seconds.",
    url: "https://destyastudio.com/journal/llm-conversation-interfaces"
  },
  {
    title: "Integrating Groq and Gemini APIs in Mobile Apps: Edge vs. Server Orchestration",
    date: "2026-06-22",
    description: "A practical comparison of calling inference APIs directly from mobile versus routing them through a server, with architecture recommendations for each scenario.",
    url: "https://destyastudio.com/journal/groq-gemini-mobile-api-integration"
  },
  {
    title: "How We Built Trivia Quest AI: Automating Infinite Quiz Content with LLMs",
    date: "2026-06-05",
    description: "An engineering retrospective of building Trivia Quest AI and automating consistent question outputs with large language models.",
    url: "https://destyastudio.com/journal/trivia-quest-ai-development"
  },
  {
    title: "Building Offline-First React Native Apps with Firebase and AsyncStorage",
    date: "2026-01-09",
    description: "Learn how to create resilient, offline-capable mobile apps by syncing Firestore data with React Native's classic AsyncStorage.",
    url: "https://destyastudio.com/journal/offline-first-react-native"
  }
];
