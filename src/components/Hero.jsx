import { useState } from 'react';
import { heroBadges, profile } from '../data';

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="about" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(52,211,153,0.12),_transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[auto_1fr] lg:gap-16">
        <div className="relative mx-auto lg:mx-0">
          <div className="absolute -inset-3 rounded-[1.35rem] bg-emerald-500/10 blur-xl" aria-hidden="true" />
          {imgFailed ? (
            <div
              className="relative flex h-48 w-48 items-center justify-center rounded-2xl border-2 border-emerald-500/30 bg-slate-900 shadow-2xl"
              role="img"
              aria-label={profile.displayName}
            >
              <svg className="h-16 w-16 text-slate-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M5 19.2c1.4-3.1 4-4.7 7-4.7s5.6 1.6 7 4.7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute bottom-3 text-sm font-semibold tracking-[0.2em] text-emerald-400">
                {profile.initials}
              </span>
            </div>
          ) : (
            <>
              {/* REPLACE THIS: Place your photo in the public/ folder as 'profile.jpg' or update src with your image path */}
              <img
                src="/profile.jpg"
                alt="Hariths Sufyan Lee"
                className="relative h-48 w-48 rounded-2xl object-cover border-2 border-emerald-500/30 shadow-2xl"
                onError={() => setImgFailed(true)}
              />
            </>
          )}
        </div>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-400">
            {profile.brand} · {profile.location}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
            {profile.displayName}
          </h1>
          <p className="mt-3 max-w-2xl text-lg font-medium text-slate-200 sm:text-xl">
            Geoscience meets machine learning — models for the subsurface, built with scientific rigor.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            {profile.bio}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              View Projects
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-emerald-500/40 hover:text-slate-100"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
