import { motion } from "framer-motion";
import {
  Layout,
  Boxes,
  Palette,
  Radio,
  Server,
  Wrench,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/portfolio";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const ICONS = { Layout, Boxes, Palette, Radio, Server, Wrench };

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for daily"
          description="A pragmatic toolkit — chosen for shipping speed, runtime performance and long-term maintainability."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((c) => {
            const Icon = ICONS[c.icon];
            return (
              <motion.div
                key={c.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="gradient-border group relative overflow-hidden rounded-2xl bg-white/[0.02] p-6 backdrop-blur transition-shadow hover:shadow-[0_0_60px_-15px_rgba(96,165,250,0.45)]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15">
                    {Icon && <Icon className="h-4 w-4 text-violet-200" />}
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {c.name}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-white/75 transition-colors group-hover:border-violet-400/30"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
