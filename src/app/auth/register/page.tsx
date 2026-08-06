"use client";

import { FormEvent, useState } from "react";
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';


export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({
      name,
      email,
      password,
    });
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080b1a] px-4 py-10">
      {/* Background decorations */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

      {/* Register Card */}
      <div className="relative w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">

          {/* Logo */}
          <div className="mb-7 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-7 w-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h8M8 14h5m7-2a8 8 0 01-8 8 8.8 8.8 0 01-3.8-.9L4 20l.9-3.2A8 8 0 1119 12z"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-7 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Create your account
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Join OmniChat and start connecting with people.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Full name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-violet-500 focus:bg-white/[0.08] focus:ring-4 focus:ring-violet-500/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-violet-500 focus:bg-white/[0.08] focus:ring-4 focus:ring-violet-500/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Password
              </label>
              <div className="relative">
                
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-violet-500 focus:bg-white/[0.08] focus:ring-4 focus:ring-violet-500/10"
              />
                <button
      type="button"
      onClick={() => setShowPassword((prev) => !prev)}
      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      {showPassword ? (
        // Eye Off
        <EyeOff />
      ) : (
        // Eye
        <Eye />
      )}
    </button>
              </div>

            </div>


            {/* Terms */}
            <div className="flex items-start gap-3 pt-1">
              <input
                id="terms"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 accent-violet-600"
              />

              <label
                htmlFor="terms"
                className="text-xs leading-5 text-slate-400"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-violet-400 hover:text-violet-300"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-violet-400 hover:text-violet-300"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-violet-600/30"
            >
              <span className="relative z-10">Create account</span>

              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-slate-500">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] py-3.5 text-sm font-medium text-slate-200 transition hover:bg-white/[0.08]"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.35 12.23c0-.79-.07-1.55-.2-2.27H12v4.3h5.23a4.47 4.47 0 01-1.94 2.93v2.43h3.14c1.84-1.7 2.92-4.2 2.92-7.39Z"
                fill="#4285F4"
              />
              <path
                d="M12 21.7c2.63 0 4.84-.87 6.45-2.36l-3.14-2.43c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.29v2.51A9.74 9.74 0 0012 21.7Z"
                fill="#34A853"
              />
              <path
                d="M6.54 13.8a5.84 5.84 0 010-3.6V7.69H3.29a9.74 9.74 0 000 8.62l3.25-2.51Z"
                fill="#FBBC05"
              />
              <path
                d="M12 6.17c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.84 3.27 14.63 2.3 12 2.3a9.74 9.74 0 00-8.71 5.39l3.25 2.51C7.31 7.89 9.46 6.17 12 6.17Z"
                fill="#EA4335"
              />
            </svg>

            Sign up with Google
          </button>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="font-semibold text-violet-400 transition hover:text-violet-300"
            >
              Sign in
            </a>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-600">
          © 2026 OmniChat. All rights reserved.
        </p>
      </div>
    </main>
  );
}