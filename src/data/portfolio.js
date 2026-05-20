import hrmsImg from "../assets/project-hrms.jpg";
import bettingImg from "../assets/project-betting.jpg";
import cloudpoussImg from "../assets/project-cloudpouss.jpg";

export const profile = {
  name: "Vivek Vagadiya",
  title: "Frontend Engineer | React.js Developer",
  email: "vivekvagadiya47@gmail.com",
  github: "https://github.com/vivekvagadiya",
  linkedin: "https://www.linkedin.com/in/vivek-vagadiya-b35925340",
  resumeUrl: "/Vivek_Vagadiya_Resume.pdf",
};

export const heroTech = [
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "Material UI",
  "Firebase",
  "Node.js",
  "MongoDB",
  "WebSocket",
];

export const stats = [
  { value: "3+", label: "Production Applications" },
  { value: "30+", label: "Components Refactored" },
  { value: "6+", label: "Betting Modules" },
  { value: "20%", label: "Faster UI Development" },
];

export const aboutBullets = [
  "1+ years of production frontend experience",
  "Building enterprise HRMS systems",
  "Real-time betting application engineering",
  "Scalable frontend architecture",
  "Strong focus on reusable components",
  "Performance optimization mindset",
  "Growing MERN-stack backend skills",
];

export const experience = [
  {
    company: "Prometteur Solutions Pvt. Ltd.",
    role: "React.js Frontend Developer",
    duration: "Mar 2025 — Present",
    location: "Surat, India",
    points: [
      "Built reusable component systems shipped across 3 enterprise products.",
      "Designed a 3-tier RBAC architecture with dynamic permission rendering.",
      "Managed deeply nested state with Redux Toolkit slices and selectors.",
      "Integrated REST APIs with optimistic updates and error boundaries.",
      "Refactored legacy class components into modern hook-based modules.",
      "Collaborated in Agile sprints, code reviews and architectural planning.",
    ],
  },
];

export const projects = [
  {
    title: "RBAC HRMS Platform",
    tagline: "AI-powered recruitment & access control",
    image: hrmsImg,
    description:
      "AI-powered recruitment and HRMS platform with role-based access control, recruitment workflows, candidate management, and AI-generated job descriptions.",
    features: [
      "3-tier RBAC system",
      "Dynamic permission rendering",
      "AI job-description generation",
      "Recruitment workflows",
      "Route-level lazy loading",
      "Redux Toolkit state management",
    ],
    tech: ["React.js", "Redux Toolkit", "Material UI", "REST APIs", "Node.js"],
    highlight: "Reduced JD creation time from 45 minutes to under 2 minutes.",
    github: "#",
    demo: "#",
  },
  {
    title: "Tung247 Betting Platform",
    tagline: "Real-time odds at sub-200ms",
    image: bettingImg,
    description:
      "Real-time betting application with live odds synchronization, multi-role hierarchy, and complex betting workflows for operators and players.",
    features: [
      "Real-time odds updates",
      "WebSocket integration",
      "6 distinct betting systems",
      "Nested state management",
      "Live UI synchronization",
      "Risk management panels",
    ],
    tech: ["React.js", "Redux Toolkit", "WebSocket", "Context API"],
    highlight: "Achieved sub-200ms live UI updates across 6 betting modules.",
    github: "#",
    demo: "#",
  },
  {
    title: "CloudPouss Elder Care",
    tagline: "Service marketplace with realtime negotiation",
    image: cloudpoussImg,
    description:
      "Service marketplace platform with realtime chat, booking lifecycle, offer / counter-offer negotiation system and Firebase synchronization.",
    features: [
      "Realtime chat",
      "Offer / counter-offer workflow",
      "Firebase realtime database",
      "End-to-end booking management",
      "Admin dashboard",
      "Drop-off analytics",
    ],
    tech: ["Next.js", "Firebase", "Tailwind CSS", "REST APIs"],
    highlight: "Improved booking flow continuity and reduced drop-offs.",
    github: "#",
    demo: "#",
  },
];

export const skillCategories = [
  {
    name: "Frontend",
    icon: "Layout",
    skills: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    name: "State Management",
    icon: "Boxes",
    skills: ["Redux Toolkit", "Context API", "RTK Query"],
  },
  {
    name: "Styling & UI",
    icon: "Palette",
    skills: ["Tailwind CSS", "Material UI", "shadcn/ui", "Framer Motion"],
  },
  {
    name: "Real-Time Systems",
    icon: "Radio",
    skills: ["WebSocket", "Firebase Realtime DB", "Socket.IO"],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    name: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Postman", "Vite", "Webpack"],
  },
];

export const principles = [
  {
    title: "Scalable Frontend Architecture",
    icon: "Network",
    desc: "Feature-sliced module boundaries, predictable data flow, and zero-cost composition.",
  },
  {
    title: "Reusable Components",
    icon: "Component",
    desc: "Headless primitives with composable variants — built once, used everywhere.",
  },
  {
    title: "Performance Optimization",
    icon: "Gauge",
    desc: "Code splitting, memoization, virtualization and a tight runtime budget.",
  },
  {
    title: "RBAC & Authorization",
    icon: "ShieldCheck",
    desc: "Permission-aware rendering with a single source of truth across the UI tree.",
  },
  {
    title: "Real-Time Synchronization",
    icon: "Activity",
    desc: "WebSocket-driven state with deterministic merges and back-pressure handling.",
  },
  {
    title: "Clean Maintainable Code",
    icon: "Sparkles",
    desc: "Small files, named exports, intention-revealing names, and tests where it counts.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
