import { motion } from 'framer-motion';
import AppointmentForm from '../components/AppointmentForm';

function Booking() {
  return (
    <section className="px-6 py-14 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-10"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Place an appointment</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Book a consultation with our legal team.</h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Fill out your details, choose a branch, and submit your request. Our team will review your appointment and get back to you promptly.
          </p>
        </motion.div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-glowing">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-accent">Appointment booking</p>
              <h2 className="text-3xl font-semibold text-white">Submit your appointment request</h2>
              <p className="text-slate-300">
                Use the booking form to select your preferred branch and schedule. You can also leave additional details so our team can prepare for your consultation.
              </p>
            </div>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
