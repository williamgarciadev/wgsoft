const highlights = [
  { title: 'Node.js + React', desc: 'Arquitecturas escalables, APIs seguras y UIs rápidas.' },
  { title: 'Power Platform', desc: 'Automatizaciones con Power Apps, Power Automate y Copilot Studio.' },
  { title: 'UX & Producto', desc: 'Diseño orientado a negocio, conversiones y experiencia de usuario.' },
];

export default async function Home() {
  const apiBase = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  const res = await fetch(`${apiBase}/profile`, { cache: 'no-store' });
  const profile = await res.json();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <nav className="flex items-center justify-between py-6">
          <div className="text-lg font-semibold">WgSoft</div>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href="#experiencia" className="hover:text-white">Experiencia</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </div>
        </nav>

        <header className="grid gap-10 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Software WgSoft</p>
	    
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Construimos productos digitales con estándares enterprise.
            </h1>
            <p className="mt-4 text-slate-300">
              Equipo full‑stack especializado en Node.js, React y Power Platform. Transformamos procesos en software.
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
            <p className="text-sm text-slate-400">Perfil líder técnico</p>
            <h2 className="mt-2 text-2xl font-semibold">{profile.name}</h2>
            <p className="text-slate-300">{profile.title}</p>
            <p className="text-slate-400">{profile.location}</p>
            <p className="mt-4 text-sm text-slate-300">{profile.summary}</p>
          </div>
        </header>

        <section id="servicios" className="mt-14">
          <h2 className="mb-6 text-2xl font-semibold">Servicios clave</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
                <h3 className="text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experiencia" className="mt-14">
          <h2 className="mb-6 text-2xl font-semibold">Experiencia</h2>
          <div className="space-y-4">
            {profile.experiences?.map((exp: any) => (
              <div key={exp.id} className="rounded-2xl border border-slate-800 p-5">
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
                <div key={edu.id} className="rounded-2xl border border-slate-800 p-4">
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

        <section id="contacto" className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
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
