import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

function Contact() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
  }, [controls]);

  return (
    <section className="px-6 py-14 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-10"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Contact Us</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Connect with our team today.</h1>
          <p className="mt-4 text-slate-300">
            For urgent matters or new consultations, send a direct message and one of our advisors will respond within one business day.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Office inquiries</p>
              <p className="mt-2 text-lg font-semibold text-white">contact@aureliuslaw.com</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Phone</p>
              <p className="mt-2 text-lg font-semibold text-white">+1 (555) 972-3100</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Location</p>
              <p className="mt-2 text-lg font-semibold text-white">Downtown Civic Center, Cityline Avenue</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Get in touch</p>
          <form className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="Full name" className="w-full px-4 py-3" />
              <input type="email" placeholder="Email address" className="w-full px-4 py-3" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-4 py-3" />
            <textarea rows="6" placeholder="Message" className="w-full px-4 py-3"></textarea>
            <button className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold text-slate-950 transition hover:bg-gold/90">
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
