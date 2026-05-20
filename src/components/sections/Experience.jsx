import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="relative pt-14 pb-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Production work, shipped"
          description="Shipping enterprise-grade React across recruitment, real-time betting and service platforms."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative mx-auto max-w-3xl"
        >
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-400/40 via-violet-400/30 to-transparent md:left-6" />

          {experience.map((e) => (
            <motion.article
              key={e.company}
              variants={fadeUp}
              className="relative pl-12 md:pl-16"
            >
              <span className="absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-zinc-950 shadow-[0_0_24px_-4px_rgba(167,139,250,0.5)] md:left-2">
                <Briefcase className="h-3.5 w-3.5 text-violet-300" />
              </span>

              <div className="gradient-border rounded-2xl bg-white/[0.02] p-6 backdrop-blur transition-shadow hover:shadow-[0_0_60px_-20px_rgba(96,165,250,0.45)] sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {e.role}
                    </h3>
                    <p className="mt-1 text-sm text-violet-300">{e.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 font-mono text-[11px] text-white/55">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" />
                      {e.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" />
                      {e.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {e.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
