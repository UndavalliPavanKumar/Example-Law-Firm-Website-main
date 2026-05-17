const testimonials = [
  {
    quote: 'Aurelius Law helped us resolve a complex commercial dispute efficiently and with confidence.',
    author: 'Kara Stevenson, CEO',
  },
  {
    quote: 'The team was responsive, strategic, and deeply knowledgeable in every step of the process.',
    author: 'Marco Reed, Founder',
  },
  {
    quote: 'They made property acquisition and leasing decisions easy with clear legal guidance.',
    author: 'Lena Foster, Developer',
  },
];

function Testimonials() {
  return (
    <section className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-glowing">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Testimonials</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Trusted by leaders across industries.</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.author} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-300">“{item.quote}”</p>
            <p className="mt-6 text-sm font-semibold text-white">{item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
