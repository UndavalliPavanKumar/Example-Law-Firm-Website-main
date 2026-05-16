const team = [
  {
    name: 'Isabella Grant',
    role: 'Founder & Senior Partner',
    specialty: 'Corporate Litigation',
    bio: 'Guiding high-stakes commercial disputes with proven courtroom strategy.',
  },
  {
    name: 'Julian Hayes',
    role: 'Family Law Director',
    specialty: 'Family and estate planning',
    bio: 'Compassionate counsel for protective family and succession planning.',
  },
  {
    name: 'Maya Chen',
    role: 'Real Estate Counsel',
    specialty: 'Property and contract law',
    bio: 'Advising developers and real estate investors across complex transactions.',
  },
];

function TeamSection() {
  return (
    <section className="space-y-8 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-glowing">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Team</p>
        <h2 className="text-3xl font-semibold text-white">Meet the attorneys who stand beside you.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {team.map((member) => (
          <div key={member.name} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-5 h-48 rounded-3xl bg-slate-800" />
            <h3 className="text-xl font-semibold text-white">{member.name}</h3>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-accent">{member.role}</p>
            <p className="mt-4 text-slate-300">{member.bio}</p>
            <p className="mt-4 text-sm text-slate-400">Specialty: {member.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
