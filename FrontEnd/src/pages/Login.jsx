import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
    // console.log(copyLoginInfo);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError('Please fill all the fields');
    }
    try {
      const url = 'http://localhost:8080/auth/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (error) {
      return handleError(error.message);
    }
  };
  return (
    <div className="min-h-dvh w-full flex items-center justify-center bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 px-3 py-6 sm:px-4 sm:py-10 md:px-6">
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-full max-w-[min(100%,28rem)] rounded-xl border border-white/10 bg-white/95 p-5 shadow-2xl shadow-indigo-950/40 backdrop-blur-sm sm:rounded-2xl sm:p-8 md:p-10"
      >
        <div className="mb-6 text-center sm:mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 sm:text-sm">
            Welcome back
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Sign in
          </h1>
          <p className="mt-2 text-xs text-slate-500 sm:text-sm">
            Enter your credentials to access your account.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700" htmlFor="email">
              Email address
            </label>
            <input
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 sm:px-4 sm:py-3 sm:text-sm"
              type="email"
              name="email"
              id="email"
              autoFocus
              placeholder="you@example.com"
              value={loginInfo.email}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 sm:px-4 sm:py-3 sm:text-sm"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={loginInfo.password}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-[0.98] sm:mt-8"
        >
          Sign in
        </button>

        <p className="mt-5 text-center text-xs text-slate-500 sm:mt-6 sm:text-sm">
          Don&apos;t have an account?{' '}
          <Link
            to="/Signup"
            className="font-semibold text-indigo-600 transition hover:text-indigo-500"
          >
            Create one
          </Link>
        </p>
      </form>
      <ToastContainer
        position="bottom-center"
        className="w-[calc(100vw-1.5rem)]! sm:w-auto!"
        toastClassName="!text-sm"
      />
    </div>
  );
}
