import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, GraduationCap, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience, education } from "@/data/portfolio";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="relative pt-14 pb-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience & Education"
          title="Production Work & Academic Foundation"
          description="Shipping enterprise-grade React apps across HRMS, sports betting, casino & service platforms."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative mx-auto max-w-3xl space-y-8"
        >
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-400/40 via-violet-400/30 to-transparent md:left-6" />

          {/* Experience Timeline */}
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

                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
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

          {/* Education Timeline */}
          {education.map((edu) => (
            <motion.article
              key={edu.degree}
              variants={fadeUp}
              className="relative pl-12 md:pl-16"
            >
              <span className="absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-zinc-950 shadow-[0_0_24px_-4px_rgba(59,130,246,0.5)] md:left-2">
                <GraduationCap className="h-3.5 w-3.5 text-blue-300" />
              </span>

              <div className="gradient-border rounded-2xl bg-white/[0.02] p-6 backdrop-blur transition-shadow hover:shadow-[0_0_60px_-20px_rgba(59,130,246,0.45)] sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm text-blue-300">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 font-mono text-[11px]">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-0.5 text-blue-200">
                      <Award className="h-3 w-3" />
                      {edu.cgpa}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-white/55">
                      <Calendar className="h-3 w-3" />
                      Passing Year: {edu.year}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/70">
                  {edu.details}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
