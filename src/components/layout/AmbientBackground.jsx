export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-32 h-[560px] w-[560px] rounded-full bg-violet-500/20 blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full bg-fuchsia-500/15 blur-3xl animate-blob"
        style={{ animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,10,20,0)_0%,rgba(9,9,11,0.7)_70%,#09090b_100%)]" />
    </div>
  );
}
