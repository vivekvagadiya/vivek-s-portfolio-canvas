import hrmsImg from "../assets/project-hrms.jpg";
import bettingImg from "../assets/project-betting.jpg";
import cloudpoussImg from "../assets/project-cloudpouss.jpg";
import gocheckamImg from "../assets/project-gocheckam.jpg";

export const profile = {
  name: "Vivek Vagadiya",
  title: "React.js Frontend Developer",
  email: "vivekvagadiya47@gmail.com",
  phone: "+91 9574410907",
  location: "Surat, Gujarat, India",
  github: "https://github.com/vivekvagadiya",
  linkedin: "https://www.linkedin.com/in/vivek-vagadiya-b35925340",
  resumeUrl: "/Vivek_Vagadiya_Resume.pdf",
};

export const heroTech = [
  "React.js",
  "Next.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "Material UI",
  "WebSocket",
  "Firebase",
];

export const stats = [
  { value: "1.5+", label: "Years Production Experience" },
  { value: "6+", label: "Production Web Applications" },
  { value: "6+", label: "Bet Types & Realtime Modules" },
  { value: "sub-200ms", label: "Live WebSocket Sync" },
];

export const aboutBullets = [
  "1.5 years of production React.js experience across HRMS, sports betting, casino, wallet & service platforms",
  "Architected Role-Based Access Control (RBAC) systems with dynamic permission-based UI rendering",
  "Deep state management expertise using Redux Toolkit slices, selectors & Context API",
  "Integrated REST APIs with Axios, optimistic updates, error handling & loading boundaries",
  "Built real-time features using WebSockets (live odds, chat, announcements, daily streak rewards)",
  "Payment gateway, KYC verification, Google OAuth, and OTP authentication workflows",
  "B.E. Information Technology graduate from SVIT, Vasad (CGPA: 8.5)",
];

export const education = [
  {
    degree: "B.E. — Information Technology",
    institution: "Sardar Vallabhbhai Patel Institute of Technology (SVIT), Vasad",
    cgpa: "8.5 CGPA",
    year: "2025",
    details:
      "Core coursework in Web Technologies, Software Engineering, Data Structures, Algorithms, and Database Management.",
  },
];

export const experience = [
  {
    company: "Prometteur Solutions Pvt. Ltd.",
    role: "React.js Frontend Developer",
    duration: "Mar 2025 — Present",
    location: "Surat, India",
    points: [
      "Built reusable and responsive UI components using React.js and Material UI, improving cross-device consistency across multiple screen sizes.",
      "Designed & developed Role-Based Access Control (RBAC) system enabling dynamic UI rendering for Admin, HR, and User roles.",
      "Managed global application state using Redux Toolkit for live betting & platform applications handling multiple REST endpoints & real-time updates.",
      "Refactored legacy components into reusable modules, improving code maintainability and cutting duplicate implementation.",
      "Integrated REST APIs using Axios with robust error handling, optimistic updates, and loading states.",
      "Collaborated in Agile sprints, code reviews, and architectural planning for enterprise client projects.",
    ],
  },
];

export const projects = [
  {
    title: "GoCheckAM Web & Admin",
    tagline: "Sports betting, casino, wallet & user management",
    image: gocheckamImg,
    description:
      "Comprehensive Web & Admin platform supporting sports betting, live casino, wallet operations, payment gateway integration, deposit/withdrawal flows, KYC verification, and user management.",
    features: [
      "Payment gateway & deposit/withdrawal flows",
      "KYC verification & secure wallet operations",
      "WebSocket live chat & daily streak rewards",
      "Google OAuth & OTP authentication",
      "Multi-language support (i18next)",
      "Yup-based form validation & state sync",
    ],
    tech: ["React.js", "Redux Toolkit", "SCSS", "REST APIs", "WebSocket", "i18next"],
    highlight:
      "Integrated end-to-end payment/KYC flows, real-time WebSocket live chat, and daily streak reward systems.",
    github: "#",
    demo: "#",
  },
  {
    title: "Tung247 Betting Platform",
    tagline: "Real-time odds at sub-200ms",
    image: bettingImg,
    description:
      "Admin and User platforms supporting six betting types with sub-200ms odds updates, multi-role hierarchy, and live UI synchronization for operators and players.",
    features: [
      "6 bet types: Straight, Parlay, Teaser, IfBet, A-R, PropFecta",
      "4-tier hierarchy: Admin → Bookie → Agent → Customer",
      "Admin risk, juice & limit controls",
      "Sub-200ms WebSocket odds sync",
      "Redux Toolkit + Context API nested state",
      "Live UI & market synchronization",
    ],
    tech: ["React.js", "Redux Toolkit", "WebSocket", "Context API", "REST APIs"],
    highlight:
      "Engineered sub-200ms live odds updates across 6 bet types and 4-tier user hierarchy.",
    github: "#",
    demo: "#",
  },
  {
    title: "RBAC HRMS Platform",
    tagline: "AI-powered recruitment & access control",
    image: hrmsImg,
    description:
      "End-to-end recruitment and HRMS platform featuring multi-stage candidate selection workflows, 3-tier RBAC system, and OpenAI/OpenRouter AI job description generation.",
    features: [
      "End-to-end recruitment pipeline",
      "OpenAI / OpenRouter AI JD generator",
      "3-tier RBAC dynamic rendering",
      "Candidate & application tracking",
      "Redux Toolkit state management",
      "Route-level lazy loading",
    ],
    tech: ["React.js", "Redux Toolkit", "Material UI", "REST APIs", "Node.js"],
    highlight:
      "Reduced job description creation time from 45 minutes to under 2 minutes using AI integration.",
    github: "#",
    demo: "#",
  },
  {
    title: "CloudPouss Elder Care",
    tagline: "Service marketplace with realtime negotiation",
    image: cloudpoussImg,
    description:
      "Service marketplace platform with real-time 1:1 chat, booking lifecycle, offer / counter-offer negotiation system, and Firebase synchronization.",
    features: [
      "Real-time 1:1 chat via Firebase",
      "Offer / counter-offer negotiation workflow",
      "Service booking lifecycle management",
      "Admin dashboard for users & services",
      "Automated payment trigger handling",
      "Responsive Tailwind CSS UI",
    ],
    tech: ["React.js", "Next.js", "Firebase", "Tailwind CSS", "REST APIs"],
    highlight:
      "Built real-time chat and negotiation workflow with instant booking payment triggers.",
    github: "#",
    demo: "#",
  },
];

export const skillCategories = [
  {
    name: "Frontend Core",
    icon: "Layout",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS"],
  },
  {
    name: "State Management",
    icon: "Boxes",
    skills: ["Redux", "Redux Toolkit", "Context API", "RTK Query"],
  },
  {
    name: "UI & Styling",
    icon: "Palette",
    skills: ["Material UI (MUI)", "Tailwind CSS", "SCSS", "shadcn/ui", "Framer Motion"],
  },
  {
    name: "Real-Time & Auth",
    icon: "Radio",
    skills: ["WebSocket", "Firebase Realtime DB", "Google OAuth", "OTP Auth", "i18next"],
  },
  {
    name: "Tools & API",
    icon: "Wrench",
    skills: ["REST APIs", "Axios", "Yup Validation", "Postman", "Git", "GitHub", "Vite"],
  },
  {
    name: "Core Concepts",
    icon: "ShieldCheck",
    skills: ["RBAC Architecture", "Authentication", "Performance Optimization", "Code Reusability"],
  },
];

export const principles = [
  {
    title: "Scalable Frontend Architecture",
    icon: "Network",
    desc: "Feature-sliced module boundaries, predictable data flow, and zero-cost composition.",
  },
  {
    title: "Reusable Component Systems",
    icon: "Component",
    desc: "Headless primitives with composable variants — built once, used across features.",
  },
  {
    title: "Performance Optimization",
    icon: "Gauge",
    desc: "Code splitting, lazy loading, memoization, and sub-200ms real-time budgets.",
  },
  {
    title: "RBAC & Authorization",
    icon: "ShieldCheck",
    desc: "Permission-aware rendering with a single source of truth across the UI tree.",
  },
  {
    title: "Real-Time Synchronization",
    icon: "Activity",
    desc: "WebSocket-driven state with deterministic merges and live UI feedback.",
  },
  {
    title: "Clean Maintainable Code",
    icon: "Sparkles",
    desc: "Small files, named exports, intention-revealing names, and error-resilient APIs.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience & Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
