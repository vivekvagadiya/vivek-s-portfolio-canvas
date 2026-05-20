import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileDown, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";
import { fadeUp, viewport } from "@/lib/motion";

const socials = [
  { icon: Mail, label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin, value: "linkedin.com/in/vivekvagadiya" },
  { icon: Github, label: "GitHub", href: profile.github, value: "github.com/vivekvagadiya" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative pt-14 pb-8">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something fast, scalable and beautiful"
          description="Open to product engineering, frontend platform and senior React roles."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="gradient-border relative overflow-hidden rounded-3xl bg-white/[0.025] p-8 backdrop-blur-xl sm:p-12"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative grid gap-4 sm:grid-cols-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_50px_-15px_rgba(167,139,250,0.5)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 ring-1 ring-white/10">
                    <s.icon className="h-4 w-4 text-violet-200" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-white/50">
                    {s.label}
                  </div>
                  <div className="mt-0.5 truncate text-sm text-white/85">
                    {s.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="relative mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
            <p className="text-center text-sm text-white/60 sm:text-left">
              Prefer paper? Grab the resume — recruiter-ready, one page.
            </p>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-transform hover:scale-[1.02]"
            >
              <FileDown className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
