import { skillGroups } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-400">Stack</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100">Skills</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
        A subsurface-first toolkit: geology and geophysics on one side, reproducible machine learning and
        product delivery on the other.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-emerald-500/25"
          >
            <h3 className="text-base font-semibold text-slate-100">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
