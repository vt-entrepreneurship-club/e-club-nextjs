import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Startup Sprint 2025 Logo.png";

function page() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-tr from-[#161732] via-slate-900 to-blue-950 text-white">
      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {/* Hero */}
        <section className="relative text-center">
          <div className="relative space-y-6">
            <div className="relative">
              <Image
                src={logo}
                alt="Startup Sprint 25"
                width={1000}
                height={1000}
                className="mx-auto w-[85%] max-w-3xl drop-shadow-[0_0_50px_rgba(56,189,248,0.25)]"
              />
            </div>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Launch a startup in just{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
              a few days
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Startup Sprint is an immersive competition where you will
            <span className="text-pink-400"> identify a real problem</span>,
            <span className="text-sky-400"> build a scrappy product</span>,
            and
            <span className="text-pink-400"> craft your go‑to‑market</span> —
            supported by events, workshops, and mentors.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/newsletter"
              className="rounded-full px-6 py-3 font-medium bg-gradient-to-r from-pink-500 to-sky-400 text-slate-900 hover:opacity-90 transition"
            >
              Join the interest list
            </Link>
            <Link
              href="/mentor-form"
              className="rounded-full px-6 py-3 font-medium border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition backdrop-blur-sm"
            >
              Become a mentor
            </Link>
            <button
              disabled
              className="rounded-full px-6 py-3 font-medium border border-pink-500/40 text-pink-300/80 cursor-not-allowed"
            >
              Applications open soon
            </button>
          </div>
        </section>

        <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* What is it */}
        <section className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-400 to-sky-300 bg-clip-text text-transparent">
              What is Startup Sprint?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Over a focused sprint, you and your team will progress from{" "}
              <span className="text-pink-400">problem discovery</span> to
              <span className="text-sky-400"> prototype</span> to a{" "}
              <span className="text-pink-400">compelling pitch</span>. Along the
              way, you will attend hands‑on workshops, meet operators and
              founders, validate your assumptions with users, and ship something
              meaningful.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-2 text-sm">
              <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                <span className="font-medium text-sky-300">Workshops</span> on
                problem discovery, MVPs, and GTM
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                <span className="font-medium text-pink-300">Mentorship</span>{" "}
                from builders and operators
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                <span className="font-medium text-sky-300">Team formation</span>{" "}
                and collaboration
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                <span className="font-medium text-pink-300">Prize‑winning</span>{" "}
                finale pitch
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-3">
            <div className="rounded-xl border border-pink-500/30 bg-gradient-to-br from-pink-500/10 to-transparent p-4">
              <p className="text-xs uppercase tracking-wide text-pink-300/80">
                Step 1
              </p>
              <h3 className="font-semibold text-pink-200">Identify</h3>
              <p className="text-sm text-gray-300/90">
                Find a real problem worth solving.
              </p>
            </div>
            <div className="rounded-xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 to-transparent p-4">
              <p className="text-xs uppercase tracking-wide text-sky-300/80">
                Step 2
              </p>
              <h3 className="font-semibold text-sky-200">Build</h3>
              <p className="text-sm text-gray-300/90">
                Create the simplest product that proves value.
              </p>
            </div>
            <div className="rounded-xl border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/10 to-transparent p-4">
              <p className="text-xs uppercase tracking-wide text-fuchsia-300/80">
                Step 3
              </p>
              <h3 className="font-semibold text-fuchsia-200">Launch</h3>
              <p className="text-sm text-gray-300/90">
                Plan your go‑to‑market and pitch your progress.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Callout */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold">
                Build momentum with a{" "}
                <span className="bg-gradient-to-r from-pink-400 to-sky-300 bg-clip-text text-transparent">
                  supportive community
                </span>
              </h3>
              <p className="text-gray-300">
                You will get feedback, accountability, and resources to move
                fast and make something real. Whether you're a designer,
                builder, or storyteller, there's a role for you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/newsletter"
                className="rounded-lg px-4 py-2 font-medium bg-gradient-to-r from-pink-500 to-sky-400 text-slate-900 hover:opacity-90 transition"
              >
                Get updates
              </Link>
              <Link
                href="/student-form"
                className="rounded-lg px-4 py-2 font-medium border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition backdrop-blur-sm"
              >
                Register interest
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
