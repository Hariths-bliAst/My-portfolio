import { useState } from 'react';
import { profile } from '../data';

const initial = { name: '', email: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.message.trim()) {
    errors.message = 'Please write a short message.';
  } else if (values.message.trim().length < 12) {
    errors.message = 'Message should be at least 12 characters.';
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  function onChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatus('');
  }

  function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('');
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name}\n${values.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('Opening your email client…');
    setValues(initial);
  }

  const fieldClass =
    'mt-1 w-full rounded-lg border bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-emerald-500/50';

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-400">Contact</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100">Let’s work together</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
        For collaborations, internships, or subsurface ML conversations — reach out directly or send a
        note with the form.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_1.1fr]">
        <aside className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-emerald-500/30"
          >
            <svg className="mt-0.5 h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 6h16v12H4V6Zm0 0 8 7 8-7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">Email</p>
              <p className="text-sm text-slate-100">{profile.email}</p>
            </div>
          </a>
          <a
            href={`https://wa.me/${profile.phoneRaw}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-emerald-500/30"
          >
            <svg className="mt-0.5 h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M8 9.5c1.2 3 3.5 5.2 6.5 6.5l2-2a1 1 0 0 1 1-.24c.7.23 1.46.36 2.24.36"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">Phone / WhatsApp</p>
              <p className="text-sm text-slate-100">{profile.phone}</p>
            </div>
          </a>
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <svg className="mt-0.5 h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="12" cy="9.8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">Location</p>
              <p className="text-sm text-slate-100">{profile.location}</p>
            </div>
          </div>
        </aside>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"
        >
          <div>
            <label htmlFor="name" className="text-xs font-medium text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={onChange}
              autoComplete="name"
              className={`${fieldClass} ${errors.name ? 'border-red-500/60' : 'border-white/10'}`}
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="text-xs font-medium text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={onChange}
              autoComplete="email"
              className={`${fieldClass} ${errors.email ? 'border-red-500/60' : 'border-white/10'}`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="text-xs font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={onChange}
              className={`${fieldClass} resize-y ${errors.message ? 'border-red-500/60' : 'border-white/10'}`}
              placeholder="What should we talk about?"
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 sm:w-auto"
          >
            Send Message
          </button>
          {status && <p className="mt-3 text-sm text-emerald-400">{status}</p>}
        </form>
      </div>
    </section>
  );
}
