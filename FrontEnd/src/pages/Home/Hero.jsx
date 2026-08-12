import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../utils';

export default function Hero() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };

  const handleDetails = () => {
    // Placeholder for details action
  };

  return (
    <section className="mx-auto max-w-310 px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 flex flex-col gap-4 sm:gap-6 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 sm:text-sm">
            Welcome back
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Your dashboard,{' '}
            <span className="text-indigo-600">simplified</span>
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
            Manage your account, explore features, and stay productive — all from
            one clean, secure workspace built with the MERN stack.
          </p>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:gap-4 sm:pt-2">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Logout
            </button>
            <button
              type="button"
              onClick={handleDetails}
              className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-[0.98] sm:w-auto"
            >
              View details
            </button>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-2 rounded-3xl bg-linear-to-br from-indigo-100 to-violet-100 blur-2xl sm:-inset-4" />
          <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-2xl shadow-indigo-950/10 sm:rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
              alt="Dashboard analytics preview"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
