import { useEffect, useState } from 'react';
import api from '../api/axios';

function Branches() {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    api
      .get('/branches')
      .then((response) => setBranches(response.data))
      .catch(() => setBranches([]));
  }, []);

  return (
    <section className="px-6 py-14 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Branches & Locations</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Find the right office for your case.</h1>
          <p className="max-w-3xl text-slate-300">
            Our offices are strategically located to serve clients across business and residential districts.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {branches.length
            ? branches.map((branch) => (
                <div key={branch.id} className="rounded-3xl border border-slate-800 bg-slate-950/85 p-6">
                  <h2 className="text-xl font-semibold text-white">{branch.name}</h2>
                  <p className="mt-2 text-slate-400">{branch.address}</p>
                  <p className="mt-3 text-slate-300">{branch.city}</p>
                  <p className="mt-2 text-slate-300">{branch.phone}</p>
                  {branch.email && <p className="mt-2 text-slate-300">{branch.email}</p>}
                </div>
              ))
            : Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="rounded-3xl border border-slate-800 bg-slate-950/85 p-6">
                  <div className="h-5 w-24 animate-pulse rounded-full bg-slate-700"></div>
                  <div className="mt-4 space-y-3">
                    <div className="h-4 w-full animate-pulse rounded-full bg-slate-700"></div>
                    <div className="h-4 w-5/6 animate-pulse rounded-full bg-slate-700"></div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default Branches;
