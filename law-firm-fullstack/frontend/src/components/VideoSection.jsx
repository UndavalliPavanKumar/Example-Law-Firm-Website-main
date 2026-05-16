function VideoSection() {
  return (
    <section className="grid gap-8 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-glowing lg:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Founder introduction</p>
        <h2 className="text-3xl font-semibold text-white">A vision for legal clarity and client success.</h2>
        <p className="text-slate-300">
          Founder Isabella Grant explains how Aurelius Law guides clients through every stage of legal planning and dispute resolution.
        </p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
        <iframe
          title="Founder introduction"
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default VideoSection;
