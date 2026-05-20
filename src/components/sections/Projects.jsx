import { motion } from "framer-motion";
import { Github, ExternalLink, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Enterprise-grade builds"
          description="A look at the systems I've architected and shipped — designed for scale, performance and clarity."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="space-y-10"
        >
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="gradient-border group relative overflow-hidden rounded-3xl bg-white/[0.02] backdrop-blur transition-shadow hover:shadow-[0_0_80px_-20px_rgba(167,139,250,0.45)]"
            >
              <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
                <div
                  className={`relative aspect-[16/10] overflow-hidden lg:aspect-auto ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10" />
                  <img
                    src={p.image}
                    alt={`${p.title} mockup`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-9">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-violet-300/80">
                      {p.tagline}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {p.description}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-1.5">
                      {p.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-start gap-1.5 text-[13px] text-white/65"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-xl border border-violet-400/20 bg-violet-500/[0.06] p-3.5">
                      <div className="flex gap-2">
                        <Quote className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-300" />
                        <p className="text-[13px] italic text-white/80">
                          {p.highlight}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-white/75"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-zinc-900 transition-transform hover:scale-[1.02]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
