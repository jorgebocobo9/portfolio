export const SITE = {
  name: "JG Bocobo",
  title: "JG Bocobo — Lead Software Engineer",
  description:
    "I build production web applications end-to-end. View my portfolio of 5 live apps spanning AI, real-time, and cloud infrastructure.",
  url: "https://jgbocobo.vercel.app",
} as const;

export const SOCIALS = {
  github: "https://github.com/jorgebocobo9",
  linkedin: "https://www.linkedin.com/in/jorge-bocobo-3341993a3/",
  email: "jorgebocobo9@gmail.com",
} as const;

export const STATS = [
  { value: "5", label: "Live Apps" },
  { value: "3", label: "Cloud Platforms" },
  { value: "2", label: "Engineers Led" },
  { value: "10+", label: "API Integrations" },
] as const;

export const TECH_LIST = [
  "Next.js", "React", "Vue.js", "TypeScript", "Python", "FastAPI",
  "Node.js", "Express", "Tailwind CSS", "Firebase", "Supabase",
  "MySQL", "Drizzle ORM", "Zustand", "tRPC", "Stripe", "Gemini AI",
  "Notion API", "YouTube API", "WebSockets", "Resend", "EmailJS",
  "Vercel", "AWS Lightsail", "GCP Cloud Run", "Firebase Hosting",
  "Docker", "Git", "Framer Motion",
] as const;
