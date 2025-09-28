import React from "react";
import Image from "next/image";
import logo from "../../../public/Startup Sprint 2025 Logo.png";
import { Smooch } from "next/font/google";
import CountdownTimer from "@components/CountdownTimer";
import whatWillYouBuild from "../../../public/what will you build.png";
import NewsletterSignup from "@components/NewsletterSignup";
import { RetroGrid } from "@components/magicui/retro-grid";

const smooch = Smooch({ subsets: ["latin"], weight: "400", display: "swap" });

const faqs: { header: string; body: string }[] = [
  {
    header: "Who can participate?",
    body: "Any Virginia Tech student can participate regardless of major or year. If you're interested in design, tech, business, content creation, or storytelling then there's a place for you.",
  },
  {
    header: "Is this a hackathon?",
    body: "Not exactly. It’s like a hackathon, but its not exclusive to tech. You're tasked with creating a prototype to solve a problem. That can be as simple as an instagram page and a spreadsheet. We're looking for concepts that can evolve into real companies. ",
  },
  {
    header: "Do I need a team to join?",
    body: "No. You can apply solo and form a team during the event's team formation activities.",
  },
  {
    header: "Do I need an idea beforehand?",
    body: "Not necessary. We’ll help you explore real problems and validate ideas during the sprint.",
  },
  {
    header: "What’s the time commitment?",
    body: "It’s 5 days packed with evening workshops, mentorship, and build time.",
  },
  {
    header: "How do I register?",
    body: "Registeration will open soon. You can sign up for our newsletter to get notified when it does.",
  },
];

function page() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-tr from-[#161732] via-slate-900 to-blue-950 text-white pb-20">
      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 lg:py-20 space-y-24">
        {/* Hero */}
        <section className="relative text-center">
          {/* <div className="relative space-y-6">
              <Image
                src={logo}
                alt="Startup Sprint 25"
                width={1000}
                height={1000}
                className="mx-auto w-[85%] max-w-3xl lg:relative lg:left-2 lg:top-40 drop-shadow-[0_0_50px_rgba(56,189,248,0.25)]"
              />
          </div> */}

          <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden pt-20">
            <div className="relative lg:top-20"></div>
            <Image
                src={logo}
                alt="Startup Sprint 25"
                width={1000}
                height={1000}
                className="mx-auto lg:w-[85%] w-full max-w-3xl lg:relative lg:left-2 lg:bottom-30 drop-shadow-[0_0_50px_rgba(56,189,248,0.25)]"
              />

              <div className="relative lg:bottom-30">

                <div className="flex text-lg mt-4 justify-center text-pink-400">Submissions Due Monday 8am</div>
                <CountdownTimer className="border-0 my-5" date={new Date("2025-09-29T08:00:00-04:00")} finishedMessage="Submissions Closed" />
                
                <span className="font-aldrich text-sm">
                  Thursday, September 25th - Tuesday, September 30th
                </span>

                <a href="https://tally.so/r/3NkvQl" target="_blank" className="mt-10 flex justify-center">
                  <div
                    className="ApexMk2-Bold backdrop-blur-sm tracking-wide px-10 py-4 md:py-5 text-base md:text-lg rounded-md border border-[#EA2E76] bg-gradient-to-br from-[#EA2E76]/10 via-transparent to-transparent text-white/80 shadow-[0_0_30px_rgba(234,46,118,0.15)] transition-colors duration-200 hover:text-white/90 hover:from-[#EA2E76]/20 hover:shadow-[0_0_40px_rgba(234,46,118,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA2E76]/60 select-none z-[9999]"
                  >
                    Submit Project
                  </div>
                </a>
                <a href="https://eclubvt.notion.site/Startup-Sprint-2025-Participant-Hub-274d90daaa01808fa6c8cf66981ca038" target="_blank" className="mt-10 flex justify-center">
                  <div
                    className="ApexMk2-Bold backdrop-blur-sm tracking-wide px-10 py-4 md:py-5 text-base md:text-lg rounded-md border border-sky-500/30 bg-gradient-to-tr from-sky-500/10 to-transparent text-white/70 shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-colors hover:from-pink-500/10 hover:border-pink-500/40 select-none z-[9999]"
                  >
                    Participant Hub
                  </div>
                </a>

                
              </div>


            </div>
            <RetroGrid className="min-w-screen" />
        </section>

        {/* What is it */}
        <section className="grid md:grid-cols-5 gap-10 items-start lg:mt-60">
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-3">
            <div className="rounded-xl border border-sky-500/30 bg-gradient-to-tr from-sky-500/10 to-transparent p-4">
              <p className="text-xs uppercase tracking-wide text-sky-300/80">
                Step 1
              </p>
              <h3 className="font-semibold text-sky-200">Identify</h3>
              <p className="text-sm text-gray-300/90">
                Find a problem in the market worth solving.
              </p>
            </div>
            <div className="rounded-xl border border-pink-500/30 bg-gradient-to-tr from-pink-500/10 to-transparent p-4">
              <p className="text-xs uppercase tracking-wide text-pink-300/80">
                Step 2
              </p>
              <h3 className="font-semibold text-pink-200">Build</h3>
              <p className="text-sm text-gray-300/90">
                Create the simplest product that proves value.
              </p>
            </div>
            <div className="rounded-xl border border-orange-500/30 bg-gradient-to-tr from-orange-500/10 to-transparent p-4">
              <p className="text-xs uppercase tracking-wide text-orange-300/80">
                Step 3
              </p>
              <h3 className="font-semibold text-orange-200">Launch</h3>
              <p className="text-sm text-gray-300/90">
                Plan your go‑to‑market strategyand pitch your progress.
              </p>
            </div>
          </div>
          <div className="md:col-span-3 space-y-4">
            <h1 className="text-3xl sm:text-7xl md:text-5xl font-semibold tracking-tight w-fit mx-auto bg-gradient-to-t from-blue-400 to-sky-300 bg-clip-text text-transparent">
              from idea to launch in just <br className="lg:hidden" />
              <span
                className={`bg-gradient-to-b pr-3 from-pink-500 via-pink-400 to-orange-400 bg-clip-text text-transparent mx-auto lg:mx-0`}
              >
                a few days
              </span>
            </h1>

            <div className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl text-gray-300">
              Startup Sprint is an immersive competition where you where you'll
              be challenged with turning your business concept into reality in
              just 5 days.
              <br />
              <br />
              Workshops, mentors, and{" "}
              <span className="font-bold bg-gradient-to-t from-pink-500 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                cash prizes
              </span>{" "}
              await.
            </div>
          </div>
        </section>

        <section className="mt-40 pt-10 w-full relative">
          <div className="lg:flex lg:items-center justify-center">
            <div className="lg:w-1/2 lg:mr-20">
              <h2 className="text-3xl sm:text-7xl md:text-5xl  font-semibold bg-gradient-to-t from-blue-400 to-sky-300 bg-clip-text text-transparent">
                a 5 day experience
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 pt-2 mt-10 text-sm">
                <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <h4 className="font-medium text-sky-300 mb-1">Workshops</h4>
                  <p className="text-gray-300">
                    Learn essential skills through hands-on sessions covering
                    problem discovery, product development, and marketing
                    tactics.
                  </p>
                </li>
                <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <h4 className="font-medium text-sky-300 mb-1">Mentorship</h4>
                  <p className="text-gray-300">
                    Get personalized guidance and feedback from experienced
                    builders and operators in the Virginia Tech startup
                    ecosystem.
                  </p>
                </li>
                <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <h4 className="font-medium text-pink-300 mb-1">
                    Team Formation
                  </h4>
                  <p className="text-gray-300">
                    Connect with like-minded peers and form teams to collaborate
                    effectively on your venture.
                  </p>
                </li>
                <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <h4 className="font-medium text-pink-300 mb-1">
                    Prize-winning Finale
                  </h4>
                  <p className="text-gray-300">
                    Present your progress and compete for prizes in an exciting
                    pitch competition at the end of the sprint.
                  </p>
                </li>
              </ul>
            </div>

            <Image
              src={whatWillYouBuild}
              alt="What will you build?"
              className="lg:w-1/2 relative top-50 right-30"
            />
          </div>
        </section>

        <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* FAQS */}
        <section className="mx-auto max-w-5xl mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-t from-blue-400 to-sky-300 bg-clip-text text-transparent">
            FAQs
          </h2>
          <div className="mt-6 space-y-3">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-white/10 bg-gradient-to-tr from-white/5 to-transparent p-4 open:bg-white/5"
              >
                <summary className="cursor-pointer list-none font-semibold text-white/90 flex items-center justify-between">
                  <span>{faq.header}</span>
                  <span className="text-white/60 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-300 text-sm">{faq.body}</p>
              </details>
            ))}
          </div>
        </section>

        {/* <div id="newsletter" className="mt-10 lg:w-1/2 mx-auto">
          <NewsletterSignup
            text="Get event updates and application reminders."
            textClassName="text-white/90 text-2xl"
            buttonClassName="text-[#12172F] bg-white"
          />
        </div> */}
      </main>
    </div>
  );
}

export default page;
