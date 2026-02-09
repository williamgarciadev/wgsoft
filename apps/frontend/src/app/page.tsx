export default async function Home() {
  const apiBase = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  const res = await fetch(`${apiBase}/profile`, {
    cache: 'no-store',
  });
  const profile = await res.json();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-12">
          <p className="text-sm uppercase tracking-widest text-slate-400">WgSoft · Software House</p>
          <h1 className="mt-4 text-4xl font-bold">{profile.name}</h1>
          <p className="mt-2 text-xl text-slate-300">{profile.title}</p>
          <p className="mt-2 text-slate-400">{profile.location}</p>
          <div className="mt-4 flex gap-3">
            <a
              className="rounded bg-white px-4 py-2 text-slate-900"
              href={`mailto:${profile.email}`}
            >
              Contactar
            </a>
            <a
              className="rounded border border-slate-600 px-4 py-2"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold">Sobre mí</h2>
          <p className="text-slate-300">{profile.summary}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Experiencia</h2>
          <div className="space-y-4">
            {profile.experiences?.map((exp: any) => (
              <div key={exp.id} className="rounded border border-slate-800 p-4">
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

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Educación</h2>
          <div className="space-y-3">
            {profile.education?.map((edu: any) => (
              <div key={edu.id} className="rounded border border-slate-800 p-4">
                <h3 className="font-semibold">{edu.degree} · {edu.institution}</h3>
                <p className="text-sm text-slate-400">{edu.field} · {edu.startYear} – {edu.endYear}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {profile.skills?.map((s: any) => (
              <span key={s.id} className="rounded bg-slate-800 px-3 py-1 text-sm">
                {s.name}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Certificaciones</h2>
          <div className="flex flex-wrap gap-2">
            {profile.certifications?.map((c: any) => (
              <span key={c.id} className="rounded border border-slate-800 px-3 py-1 text-sm">
                {c.name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
