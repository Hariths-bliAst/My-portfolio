import { experience } from '../data';

export default function Timeline() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-400">
        Leadership
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100">
        Experience &amp; Leadership
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
        Technical work paired with committee leadership, professional-society initiatives, and public
        exhibition of applied ideas.
      </p>

      <ol className="relative mt-12 space-y-0 border-l border-white/10 pl-6 sm:pl-8">
        {experience.map((item) => (
          <li key={item.id} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[1.91rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-emerald-400 bg-slate-950 shadow-[0_0_12px_rgba(52,211,153,0.55)] sm:-left-[2.41rem]" />
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-400/90">
              {item.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-100">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.org}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
