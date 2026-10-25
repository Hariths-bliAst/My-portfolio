import { useState } from 'react';
import { projects } from '../data';

function ProjectCard({ project }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-emerald-500/30 hover:bg-white/[0.04]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900">
        {imgFailed ? (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.18),transparent_50%),linear-gradient(180deg,#0f172a,#020617)]">
            <span className="text-xs font-medium tracking-widest text-emerald-400/80">
              PREVIEW
            </span>
          </div>
        ) : (
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setImgFailed(true)}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 px-2 py-0.5 text-[11px] text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.problem}</p>

        <dl className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-slate-950/60 p-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <dt className="text-[10px] uppercase tracking-wider text-slate-500">{metric.label}</dt>
              <dd className="mt-0.5 text-sm font-semibold text-emerald-400">{metric.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-emerald-400"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.96-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
            GitHub
          </a>
          <a
            href={project.demo}
            className="inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-emerald-400"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M7 17L17 7M9 7h8v8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-400">Work</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100">Featured Projects</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
        Applied geoscience and data science systems — classification, prediction, reservoir modeling, and
        interfaces that make the results usable.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
