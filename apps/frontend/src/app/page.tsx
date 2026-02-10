const highlights = [
  { title: 'Node.js + React', desc: 'Arquitecturas limpias, APIs seguras y UIs rápidas.' },
  { title: 'Power Platform', desc: 'Automatizaciones con Power Apps, Power Automate y Copilot Studio.' },
  { title: 'UX & Producto', desc: 'Diseño orientado a negocio y experiencia de usuario premium.' },
];

export default async function Home() {
  const apiBase = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  const res = await fetch(`${apiBase}/profile`, { cache: 'no-store' });
  const profile = await res.json();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/20 text-cyan-300 ring-1 ring-cyan-400/40">
              W
            </span>
            WgSoft
          </div>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href="#experiencia" className="hover:text-white">Experiencia</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </div>
        </nav>

        <header className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10">
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">Software house · Enterprise grade</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Construimos productos digitales con estándares de clase mundial.
              </h1>
              <p className="mt-4 text-slate-300">
                Equipo full‑stack especializado en Node.js, React y Power Platform. Operamos con procesos de calidad,
                performance y seguridad.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="rounded bg-white px-4 py-2 text-slate-900" href={`mailto:${profile.email}`}>
                  Cotizar proyecto
                </a>
                <a className="rounded border border-slate-700 px-4 py-2" href={profile.linkedin} target="_blank" rel="noreferrer">
                  Ver LinkedIn
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm text-slate-400">Líder técnico</p>
              <h2 className="mt-2 text-2xl font-semibold">{profile.name}</h2>
              <p className="text-slate-300">{profile.title}</p>
              <p className="text-slate-400">{profile.location}</p>
              <p className="mt-4 text-sm text-slate-300">{profile.summary}</p>
            </div>
          </div>
        </header>

        <section id="servicios" className="mt-14">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Servicios clave</h2>
            <span className="text-xs text-slate-400">Procesos ágiles + QA + DevOps</span>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                <h3 className="text-base font-semibold">{h.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experiencia" className="mt-14">
          <h2 className="mb-6 text-2xl font-semibold">Experiencia</h2>
          <div className="space-y-3">
            {profile.experiences?.map((exp: any) => (
              <div key={exp.id} className="rounded-xl border border-slate-800 bg-slate-900/30 p-4">
                <div className="flex flex-wrap items-center justify-between">
                  <h3 className="text-lg font-semibold">{exp.role} · {exp.company}</h3>
                  <span className="text-sm text-slate-400">{exp.startDate} – {exp.endDate || 'Actual'}</span>
                </div>
                <p className="text-sm text-slate-400">{exp.location}</p>
                <p className="mt-2 text-slate-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Educación</h2>
            <div className="space-y-3">
              {profile.education?.map((edu: any) => (
                <div key={edu.id} className="rounded-xl border border-slate-800 bg-slate-900/30 p-3">
                  <h3 className="font-semibold">{edu.degree} · {edu.institution}</h3>
                  <p className="text-sm text-slate-400">{edu.field} · {edu.startYear} – {edu.endYear}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Certificaciones</h2>
            <div className="flex flex-wrap gap-2">
              {profile.certifications?.map((c: any) => (
                <span key={c.id} className="rounded border border-slate-800 px-3 py-1 text-sm">
                  {c.name}
                </span>
              ))}
            </div>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills?.map((s: any) => (
                <span key={s.id} className="rounded bg-slate-800 px-3 py-1 text-sm">
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mt-16 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-2xl font-semibold">Hablemos</h2>
          <p className="mt-2 text-slate-300">Cuéntanos tu idea y te proponemos una solución.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="rounded bg-white px-4 py-2 text-slate-900" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="rounded border border-slate-700 px-4 py-2" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
