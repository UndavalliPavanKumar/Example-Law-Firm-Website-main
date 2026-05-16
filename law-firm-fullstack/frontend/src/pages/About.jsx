import { motion } from 'framer-motion';

function About() {
  return (
    <section className="px-6 py-14 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-accent">About Us</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">A law firm built for modern leaders.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Aurelius Law blends traditional courtroom expertise with forward-thinking legal strategy. Our team supports entrepreneurs, families, and established enterprises through every legal challenge.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Client-First Culture',
              body: 'Every case receives tailored attention, clear communication, and a strong commitment to your best outcome.',
            },
            {
              title: 'Deep Industry Knowledge',
              body: 'Experienced attorneys deliver counsel across corporate, employment, intellectual property, and family law.',
            },
            {
              title: 'Transparent Performance',
              body: 'We offer upfront guidance, realistic expectations, and timely progress updates at every stage.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 rounded-[2rem] border border-slate-800 bg-slate-950/80 p-10 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-accent">Our mission</p>
            <h2 className="text-3xl font-semibold text-white">Deliver exceptional legal services with clarity and confidence.</h2>
            <p className="text-slate-300">
              We are committed to providing responsive legal counseling and practical solutions that protect your interests and advance your goals.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="rounded-3xl border border-slate-800 bg-brand/80 p-6">
              <h3 className="text-xl font-semibold text-white">Responsive communication</h3>
              <p className="mt-3 text-slate-300">Dedicated client support for every inquiry and milestone.</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-brand/80 p-6">
              <h3 className="text-xl font-semibold text-white">Strategic representation</h3>
              <p className="mt-3 text-slate-300">Result-driven legal planning for long-term success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
