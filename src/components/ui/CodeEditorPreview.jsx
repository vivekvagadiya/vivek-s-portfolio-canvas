export default function CodeEditorPreview() {
  return (
    <div className="gradient-border relative overflow-hidden rounded-xl bg-zinc-950/80 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <span className="font-mono text-[11px] text-white/40">
          hooks/useRBAC.js
        </span>
        <span className="font-mono text-[11px] text-white/30">React 18</span>
      </div>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-relaxed">
        <code className="text-white/85">
          <span className="text-violet-300">import</span>{" "}
          <span className="text-white">{`{ useMemo }`}</span>{" "}
          <span className="text-violet-300">from</span>{" "}
          <span className="text-emerald-300">'react'</span>
          {"\n"}
          <span className="text-violet-300">import</span>{" "}
          <span className="text-white">{`{ useAppSelector }`}</span>{" "}
          <span className="text-violet-300">from</span>{" "}
          <span className="text-emerald-300">'@/store'</span>
          {"\n\n"}
          <span className="text-blue-300">export function</span>{" "}
          <span className="text-yellow-200">useRBAC</span>
          <span className="text-white/70">(resource)</span>{" "}
          <span className="text-white/70">{"{"}</span>
          {"\n  "}
          <span className="text-violet-300">const</span>{" "}
          <span className="text-white">role</span>{" "}
          <span className="text-white/60">=</span>{" "}
          <span className="text-yellow-200">useAppSelector</span>
          <span className="text-white/70">(s {"=>"} s.auth.role)</span>
          {"\n  "}
          <span className="text-violet-300">const</span>{" "}
          <span className="text-white">perms</span>{" "}
          <span className="text-white/60">=</span>{" "}
          <span className="text-yellow-200">useAppSelector</span>
          <span className="text-white/70">(s {"=>"} s.auth.perms)</span>
          {"\n\n  "}
          <span className="text-violet-300">return</span>{" "}
          <span className="text-yellow-200">useMemo</span>
          <span className="text-white/70">(() {"=>"} ({"{"}</span>
          {"\n    "}
          <span className="text-sky-300">can</span>
          <span className="text-white/70">:</span>{" "}
          <span className="text-white">(action)</span>{" "}
          <span className="text-white/70">{"=>"}</span>{" "}
          <span className="text-white">perms?.</span>
          <span className="text-yellow-200">[resource]</span>
          <span className="text-white/70">?.includes(action) ?? </span>
          <span className="text-orange-300">false</span>
          <span className="text-white/70">,</span>
          {"\n    "}
          <span className="text-sky-300">isAdmin</span>
          <span className="text-white/70">:</span>{" "}
          <span className="text-white">role</span>{" "}
          <span className="text-white/60">===</span>{" "}
          <span className="text-emerald-300">'admin'</span>
          <span className="text-white/70">,</span>
          {"\n  "}
          <span className="text-white/70">{"}"}), [role, perms, resource])</span>
          {"\n"}
          <span className="text-white/70">{"}"}</span>
        </code>
      </pre>
      <div className="border-t border-white/5 bg-white/[0.02] px-5 py-2.5 font-mono text-[11px] text-white/40">
        <span className="text-emerald-300">●</span> Type-safe • Memoized •
        Zero-cost in render
      </div>
    </div>
  );
}
