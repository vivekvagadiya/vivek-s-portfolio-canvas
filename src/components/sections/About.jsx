import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutBullets, stats } from "@/data/portfolio";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="Engineer focused on shipping production frontends"
          description="I build interfaces that scale — from RBAC HRMS dashboards to sub-200ms real-time betting systems."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start"
        >
          <motion.div
            variants={fadeUp}
            className="gradient-border rounded-2xl bg-white/[0.02] p-8 backdrop-blur"
          >
            <ul className="space-y-3.5">
              {aboutBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30 ring-1 ring-violet-400/30">
                    <Check className="h-3 w-3 text-violet-200" />
                  </span>
                  <span className="text-[15px] text-white/75">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="gradient-border relative overflow-hidden rounded-2xl bg-white/[0.02] p-6 backdrop-blur transition-shadow hover:shadow-[0_0_40px_-10px_rgba(167,139,250,0.4)]"
              >
                <div className="text-gradient text-3xl font-bold tracking-tight sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/60">{s.label}</div>
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
