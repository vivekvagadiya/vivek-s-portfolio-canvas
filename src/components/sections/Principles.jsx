import { motion } from "framer-motion";
import {
  Network,
  Component,
  Gauge,
  ShieldCheck,
  Activity,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { principles } from "@/data/portfolio";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const ICONS = { Network, Component, Gauge, ShieldCheck, Activity, Sparkles };

export default function Principles() {
  return (
    <section id="principles" className="relative pt-14 pb-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How I build"
          title="Engineering Principles"
          description="The non-negotiables that make a frontend codebase survive past its first release."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {principles.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="gradient-border relative overflow-hidden rounded-2xl bg-white/[0.02] p-6 backdrop-blur transition-shadow hover:shadow-[0_0_60px_-15px_rgba(167,139,250,0.4)]"
              >
                <span className="inline-grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15">
                  {Icon && <Icon className="h-4 w-4 text-blue-200" />}
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
