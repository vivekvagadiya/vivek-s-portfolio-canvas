import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroTech } from "@/data/portfolio";
import CodeEditorPreview from "@/components/ui/CodeEditorPreview";
import { fadeUp, stagger } from "@/lib/motion";

export default function Hero() {
  return (
    <section id="top" className="relative pt-20 pb-10 md:pt-25 md:pb-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]"
        >
          <div>
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/70 backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Available for product-grade frontend roles
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]"
            >
              Building{" "}
              <span className="text-gradient">Scalable React Applications</span>{" "}
              & Real-Time Frontend Systems
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-pretty text-base text-white/65 sm:text-lg"
            >
              Frontend Developer with production experience building scalable
              React.js applications across HRMS, real-time betting systems, and
              enterprise service platforms. Specialized in Redux Toolkit, RBAC
              architecture, REST APIs, and performance optimization.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                asChild
                size="lg"
                className="group h-11 bg-white px-5 text-zinc-900 hover:bg-white/90"
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 border-white/15 bg-white/[0.03] px-5 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-1 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="h-11 px-5 text-white/80 hover:bg-white/5 hover:text-white"
              >
                <a href="#contact">
                  <Mail className="mr-1 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-2"
            >
              {heroTech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-white/70 backdrop-blur transition-colors hover:border-violet-400/40 hover:text-white"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-blue-500/15 via-violet-500/15 to-fuchsia-500/15 blur-2xl" />
            <CodeEditorPreview />

            <div className="pointer-events-none absolute -top-4 -left-4 hidden animate-float rounded-xl border border-white/10 bg-zinc-900/80 px-3 py-2 font-mono text-[11px] text-white/80 shadow-lg backdrop-blur sm:block">
              <span className="text-emerald-300">●</span> 60fps render
            </div>
            <div
              className="pointer-events-none absolute -bottom-4 -right-4 hidden animate-float rounded-xl border border-white/10 bg-zinc-900/80 px-3 py-2 font-mono text-[11px] text-white/80 shadow-lg backdrop-blur sm:flex items-center gap-1.5"
              style={{ animationDelay: "-3s" }}
            >
              <Sparkles className="h-3 w-3 text-violet-300" />
              RBAC-aware
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
