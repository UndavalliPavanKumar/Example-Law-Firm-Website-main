function MapSection() {
  return (
    <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-glowing">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Locations</p>
        <h2 className="text-3xl font-semibold text-white">Our flagship branch in the heart of the city.</h2>
      </div>
      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-800">
        <iframe
          title="Law firm location map"
          className="h-96 w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4165368687407!2d-122.4194150846773!3d37.774929779758825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581535245d941%3A0x52c9c4d9adaa7a67!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default MapSection;
