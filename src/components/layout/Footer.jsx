import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:px-8 md:flex-row">
        <p className="text-sm text-white/55">
          Designed & Built by{" "}
          <span className="font-medium text-white">{profile.name}</span>
        </p>
        <p className="font-mono text-xs text-white/40">
          © {new Date().getFullYear()} — Crafted with React, Tailwind & Motion
        </p>
      </div>
    </footer>
  );
}
