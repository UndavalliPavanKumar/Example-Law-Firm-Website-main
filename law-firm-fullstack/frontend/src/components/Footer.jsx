function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-brand/95 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm text-slate-300">© 2026 Aurelius Law. All rights reserved.</p>
          <p className="mt-2 text-sm text-slate-500">Built with React, Tailwind, FastAPI, and PostgreSQL.</p>
        </div>
        <div className="flex items-center gap-4">
          {['LinkedIn', 'Instagram', 'Twitter'].map((label) => (
            <a key={label} href="#" className="text-sm text-slate-400 transition hover:text-accent">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
