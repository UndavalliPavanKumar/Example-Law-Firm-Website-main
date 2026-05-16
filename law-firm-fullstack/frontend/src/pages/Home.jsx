import { motion } from 'framer-motion';
import AppointmentForm from '../components/AppointmentForm';
import TeamSection from '../components/TeamSection';
import Testimonials from '../components/Testimonials';
import VideoSection from '../components/VideoSection';
import MapSection from '../components/MapSection';

function Home() {
  return (
    <div className="relative">
      {/* Cinematic Hero Section */}
      <div className="relative min-h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/src/assets/hero-bg.png")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand/60 via-brand/40 to-brand" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-32 sm:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-8"
          >
            <span className="inline-flex items-center rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-[0.4em] text-accent">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Elite Legal Excellence
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
              Defining the <span className="text-gold-gradient italic font-serif">Future</span> of Legal Excellence.
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-slate-300">
              KVR Legal Services combines world-class courtroom expertise with a bespoke, client-centric approach. We don't just solve legal problems; we secure your success.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="/book" className="gold-gradient inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-slate-950 shadow-lg shadow-accent/20 transition hover:scale-105 active:scale-95">
                Book Private Session
              </a>
              <a href="/about" className="glass inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                Explore Our Story
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-32 px-6 pb-24 sm:px-8 lg:px-16">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-8 rounded-[3rem] border border-white/5 bg-white/[0.02] p-12 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: 'Experience', value: '25+', sub: 'Years in Practice' },
            { label: 'Case Success', value: '98%', sub: 'High-Value Settlements' },
            { label: 'Global Clients', value: '500+', sub: 'Trusted Partners' },
            { label: 'Boutique Focus', value: '1:1', sub: 'Attorney-Client Ratio' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-sm uppercase tracking-widest text-slate-500">{stat.label}</p>
              <p className="mt-2 text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs text-accent">{stat.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Premier Services Cards */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-sm uppercase tracking-[0.5em] text-accent">Practice Areas</h2>
            <h3 className="text-4xl font-semibold text-white sm:text-5xl">Bespoke Legal Solutions</h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Corporate Strategy', icon: '⚖️', desc: 'Navigating complex mergers, acquisitions, and high-stakes governance.' },
              { title: 'Private Wealth', icon: '🏛️', desc: 'Sophisticated estate planning and asset protection for the modern leader.' },
              { title: 'Crisis Management', icon: '🛡️', desc: 'Rapid response and strategic litigation for reputation protection.' },
              { title: 'Innovation Law', icon: '💡', desc: 'Protecting intellectual property in the rapidly evolving tech landscape.' },
              { title: 'Real Estate', icon: '🏗️', desc: 'High-value commercial and luxury residential transactions.' },
              { title: 'Dispute Resolution', icon: '🤝', desc: 'Efficient mediation and aggressive courtroom representation.' },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-10 transition hover:bg-white/[0.06]"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h4 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{service.title}</h4>
                <p className="mt-4 text-slate-400 leading-relaxed">{service.desc}</p>
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-accent/5 transition-transform group-hover:scale-150" />
              </motion.div>
            ))}
          </div>
        </section>

        <VideoSection />
        <TeamSection />

        <div id="booking" className="relative overflow-hidden rounded-[4rem] border border-white/10 bg-slate-900/40 p-12 lg:p-20">
          <div className="absolute inset-0 bg-gold-gradient opacity-[0.03]" />
          <div className="relative grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="space-y-8">
              <span className="text-sm uppercase tracking-widest text-accent font-semibold">Priority Concierge</span>
              <h2 className="text-4xl font-bold text-white sm:text-6xl">Secure Your <br /><span className="text-gold-gradient italic">Strategy</span>.</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Connect with KVR Legal Services for a confidential evaluation of your legal landscape.
              </p>
            </div>
            <div className="glass rounded-[2.5rem] p-8 lg:p-12 shadow-2xl">
              <AppointmentForm />
            </div>
          </div>
        </div>

        <Testimonials />
        <MapSection />
      </div>
    </div>
  );
}

export default Home;
