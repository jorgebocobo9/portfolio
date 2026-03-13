export type Project = {
  title: string;
  slug: string;
  description: string;
  url: string;
  domain: string;
  screenshot: string;
  gradient: string;
  alt: string;
  isLive: boolean;
  features: string[];
  tech: { label: string; value: string }[];
};

export const PROJECTS: Project[] = [
  {
    title: "Interconnect",
    slug: "interconnect",
    description:
      "Full-stack AI career platform — users get personalized roadmaps, AI-reviewed resumes, job matches, and a Quillbot-style email composer. Handles real payments through Stripe with Supabase auth and PostgreSQL backend.",
    url: "https://joininterconnect.com",
    domain: "joininterconnect.com",
    screenshot: "/projects/interconnect.webp",
    gradient: "from-[#0f172a] via-[#1e1b4b] to-[#312e81]",
    alt: "Interconnect AI career platform interface",
    isLive: true,
    features: ["AI Career Roadmaps", "Resume Reviewer", "Job Finder API", "Email Composer", "Stripe Payments"],
    tech: [
      { label: "Frontend", value: "Vue.js + TypeScript" },
      { label: "Backend", value: "Python FastAPI" },
      { label: "Database", value: "Supabase (PostgreSQL + Auth)" },
      { label: "AI", value: "Google Gemini API" },
      { label: "Payments", value: "Stripe" },
      { label: "Deploy", value: "AWS Lightsail" },
    ],
  },
  {
    title: "Mornings in the Lab",
    slug: "mornings-live",
    description:
      "Real-time show operations platform powering a daily live morning broadcast. Integrates 20+ Notion databases, YouTube live streams, AI coaching via Gemini, and a community collective dashboard — all in one command center.",
    url: "https://mornings.live",
    domain: "mornings.live",
    screenshot: "/projects/mornings-live.webp",
    gradient: "from-[#0c1220] to-[#1a1a3e]",
    alt: "Mornings in the Lab live show dashboard",
    isLive: true,
    features: ["LabAI Coach", "Community Dashboard", "Guest Applications", "Session Archives", "Wake-Up Briefing"],
    tech: [
      { label: "Frontend", value: "Next.js 16 + React 19 + Tailwind 4" },
      { label: "State", value: "Zustand + Recharts" },
      { label: "Database", value: "Firebase Firestore + Auth" },
      { label: "APIs", value: "Notion (20+ DBs), YouTube, Gemini AI" },
      { label: "Email", value: "Resend API" },
      { label: "Deploy", value: "Vercel + Firebase Hosting" },
    ],
  },
  {
    title: "It Starts with Joy",
    slug: "it-starts-with-joy",
    description:
      "Community platform with AI-powered joy coaching, live broadcast integration, interactive challenges, and homework tracking. Content pipeline pulls from Notion and YouTube, served through Firebase with real-time auth.",
    url: "https://itstartswithjoy.live",
    domain: "itstartswithjoy.live",
    screenshot: "/projects/it-starts-with-joy.webp",
    gradient: "from-[#071a0f] to-[#0a2e1a]",
    alt: "It Starts with Joy community platform",
    isLive: true,
    features: ["AI Joy Coach", "Live Broadcasts", "Challenges & Homework", "Polls & Q&A"],
    tech: [
      { label: "Frontend", value: "Next.js 16 + React 19 + Tailwind 4" },
      { label: "Database", value: "Firebase Firestore + Auth" },
      { label: "CMS", value: "Notion API (broadcasts, segments, articles)" },
      { label: "AI", value: "Google Gemini API (Joy Coach)" },
      { label: "Video", value: "YouTube Data API v3" },
      { label: "Deploy", value: "Firebase Hosting" },
    ],
  },
  {
    title: "MiTL Studio",
    slug: "mitl-studio",
    description:
      "AI content generation pipeline — clients describe their show concept and get a custom blueprint with AI-generated thumbnails on demand. Full booking system with automated email confirmations.",
    url: "https://mitl.studio",
    domain: "mitl.studio",
    screenshot: "/projects/mitl-studio.webp",
    gradient: "from-[#1a0a2e] to-[#2d1b4e]",
    alt: "MiTL Studio AI booking platform",
    isLive: true,
    features: ["AI Blueprint Generator", "Thumbnail Generation", "Booking System", "Email Notifications"],
    tech: [
      { label: "Frontend", value: "React 19 + TypeScript + Vite" },
      { label: "Backend", value: "Express.js 5" },
      { label: "AI", value: "Gemini API (text + image generation)" },
      { label: "Email", value: "EmailJS" },
      { label: "Deploy", value: "Vercel" },
    ],
  },
  {
    title: "MITL Live Network",
    slug: "mitl-network",
    description:
      "Netflix-style streaming platform for high-performance content. React frontend with a Python FastAPI microservice backend deployed on Google Cloud Run, handling video streaming, content library, and AI-powered features.",
    url: "https://mornings.network",
    domain: "mornings.network",
    screenshot: "/projects/mitl-network.webp",
    gradient: "from-[#1a1a0a] to-[#2e2b0a]",
    alt: "MITL Live Network streaming platform",
    isLive: true,
    features: ["Video Streaming", "Content Library", "User Auth", "AI Features"],
    tech: [
      { label: "Frontend", value: "React 19 + TypeScript + Vite + Tailwind" },
      { label: "Backend", value: "Python FastAPI + Firebase Admin" },
      { label: "Database", value: "Firebase Firestore" },
      { label: "APIs", value: "YouTube, Gemini AI, Notion" },
      { label: "Deploy", value: "GCP Cloud Run + Firebase Hosting" },
    ],
  },
];
