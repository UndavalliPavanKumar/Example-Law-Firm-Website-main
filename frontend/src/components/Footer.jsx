function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/50 py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gold-gradient font-serif text-sm font-bold text-slate-950">
                A
              </div>
              <span className="text-xl font-bold tracking-tight text-white">KVR Legal Services</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Redefining legal excellence through strategic counsel and bespoke representation for the modern era.
            </p>
          </div>
          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Connect</h5>
            <div className="flex flex-col gap-3">
              {['LinkedIn', 'Instagram', 'Twitter', 'YouTube', 'Medium'].map((label) => (
                <a key={label} href="https://kvrlegalservices.com" className="text-sm text-slate-400 transition hover:text-accent">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Contact</h5>
            <p className="text-sm text-slate-400 leading-relaxed">
              Global Headquarters<br />
              KVR Plaza, Suite 500<br />
              contact@kvrlegalservices.com
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">© 2026 KVR Legal Services. All rights reserved. Registered Counsel.</p>
          <p className="text-[10px] text-slate-600 uppercase tracking-widest">Modern Jurisprudence • Digital Future</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
