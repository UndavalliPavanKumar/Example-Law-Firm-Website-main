import { motion } from 'framer-motion';
import AppointmentForm from '../components/AppointmentForm';
import TeamSection from '../components/TeamSection';
import Testimonials from '../components/Testimonials';
import VideoSection from '../components/VideoSection';
import MapSection from '../components/MapSection';

function Home() {
  return (
    <section className="space-y-24 px-6 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-accent/15 px-4 py-2 text-xs uppercase tracking-[0.35em] text-accent">
              Elite counsel • Modern solutions
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Your legal partner for business, family, and civil matters.
            </h1>
            <p className="max-w-2xl text-slate-300">
              We combine courtroom experience with compassionate client support to protect your future.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#booking" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/90">
                Book a consultation
              </a>
              <a href="/about" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-8 py-3 text-sm text-slate-200 transition hover:border-accent hover:text-accent">
                Learn about us
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-glowing">
            <div className="space-y-6">
              <div className="rounded-3xl bg-brand p-6 text-slate-200">
                <h2 className="text-xl font-semibold text-white">Premier legal services</h2>
                <p className="mt-3 text-slate-300">Specialized branches for corporate law, family law, real estate, and dispute resolution.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Consultation</p>
                  <p className="mt-3 text-lg font-semibold text-white">Personalized strategy sessions</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Resolution</p>
                  <p className="mt-3 text-lg font-semibold text-white">Negotiation and litigation support</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <VideoSection />

        <TeamSection />

        <div id="booking" className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-glowing">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-accent">Appointment booking</p>
              <h2 className="text-3xl font-semibold text-white">Secure your consultation with our team.</h2>
              <p className="text-slate-300">
                Request an appointment for a consultation and receive prompt confirmation from our support staff.
              </p>
            </div>
            <AppointmentForm />
          </div>
        </div>

        <Testimonials />

        <MapSection />
      </div>
    </section>
  );
}

export default Home;
