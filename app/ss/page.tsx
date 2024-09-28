"use client";
import CountdownTimer from "../components/CountdownTimer";
import Image from "next/image";
import { FaMoneyBill } from "react-icons/fa";
import {
  BsFillExclamationOctagonFill,
  BsPeopleFill,
  BsFileCodeFill,
  BsFillInfoCircleFill,
  BsPersonFill,
} from "react-icons/bs";
import Logo from "./startup sprint updated logo.png";
import { useEffect } from "react";

export default function StartupSprint24Page() {
  useEffect(() => {
    // Set the 'data-theme' attribute on the HTML element
    document.documentElement.setAttribute("data-theme", "startupSprint2024");

    // Optional cleanup: Remove the data-theme attribute when component unmounts
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  return (
    <div
      className="mx-auto rounded-md border border-orange-600 p-4"
      data-theme="startupSprint2024"
    >
      {/* <CountdownTimer
        className="border-none bg-transparent text-pink-400"
        eventDate="2024-09-27T17:00:00"
      ></CountdownTimer>
      <Image
        className="mx-auto my-10 w-full lg:my-0 lg:w-1/2"
        src={Logo}
        alt="Startup Sprint Logo"
      /> */}
      <Image
        className="mx-auto my-10 w-full lg:my-0 lg:w-1/2"
        src={Logo}
        alt="Startup Sprint Logo"
      />

      <div className="lg:grid lg:grid-cols-2">
        <div className="blue-glow mx-auto mt-10 lg:w-[94%] rounded-md lg:border border-purple-600 p-4">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            🗓️ Important Info
          </h2>

          <a
            target="_blank"
            href="https://eclubvt.notion.site/Startup-Sprint-Rubrics-10ed90daaa0180bcb6effa025f8b280c"
            className="block text-center font-bold rounded border border-grey-200 py-2 px-4 w-[100%] hover:bg-gray-400"
          >
            Rubrics
          </a>

          <a
            target="_blank"
            href={"../../../Startup Sprint 2024.pdf"}
            className="block text-center font-bold rounded border border-grey-200 py-2 px-4 w-[100%] hover:bg-gray-400 mt-4"
          >
            Opening Ceremony Slides
          </a>

          <a
            target="_blank"
            href="https://eclubvt.notion.site/Startup-Sprint-Resources-ac1cb75278cc4e8dbdefcce85c9ce2a2"
            className="block text-center font-bold rounded border border-grey-200 py-2 px-4 w-[100%] hover:bg-gray-400 mt-4"
          >
            Resources
          </a>

          <div>
            <div className="max-w-md mx-auto my-6 bg- white p-6 rounded-lg shadow-md">
              <h3 className="text-center font-bold text-2xl">Prizes</h3>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-semibold">🥇 #1</span>
                <span className="text-orange-600">$2000</span>
              </div>
              <div className="flex justify-between py-2 border-b border-orange-200">
                <span className="font-semibold">🥈 #2</span>
                <span className="text-orange-600">$1500</span>
              </div>
              <div className="flex justify-between py-2 border-b border-orange-200">
                <span className="font-semibold">🥉 #3</span>
                <span className="text-orange-600">$750</span>
              </div>
              <div className="flex justify-between py-2 border-b border-orange-200">
                <span className="font-semibold">🤖 Best AI startup</span>
                <span className="text-orange-600">$250</span>
              </div>
              <div className="flex justify-between py-2 border-b border-orange-200">
                <span className="font-semibold">💻 Best no code startup</span>
                <span className="text-orange-600">$250</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-semibold">
                  🌍 Best social impact startup
                </span>
                <span className="text-orange-600">$250</span>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-md mx-auto my-6 p-6 rounded-lg shadow-md">
              <h3 className="text-center font-bold text-2xl">Rules</h3>

              <div className=" py-2 border-b border-gray-200">
                <div className="font-semibold">
                  No previous work may be submitted
                </div>
                <div className="text-white font-bold text-red-500">
                  We will do our due diligence
                </div>
              </div>
              <div className="flex justify-between py-2 pl-6"></div>

              <div className="flex justify-between py-2 border-b border-orange-200">
                <span className="font-semibold">
                  All participants must be VT students
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-orange-200">
                <span className="font-semibold">Submission:</span>
              </div>
              <div className="flex justify-between py-2 pl-6">
                <span className="text-red-500 font-bold text-ce ">
                  Due 7:00 AM Tuesday morning
                </span>
              </div>
              <div className="flex justify-between py-2 pl-6">
                <span className="text-white font-bold text-ce">
                  2 Min Demo video of your product
                </span>
              </div>
              <div className="flex justify-between py-2 pl-6">
                <span className="text-white font-bold text-ce">
                  Slide deck explaining problem, product, business model
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ITINERARY */}
        <div className="mx-auto mt-10 lg:w-[94%] flex flex-col rounded-sm lg:border border-pink-500 p-4">
          <h2 className="text-2xl font-bold text-cyan-300">
            🗓️ What's the Rundown?
          </h2>
          <div className="text-lg text-white mt-4">
            <p>
              All events will be held at the{" "}
              <span className="font-bold">
                Apex Center (432 North Main St, right above PK's)
              </span>
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-cyan-300">
              Friday, Sep 27 - Kickoff
            </h3>
            <p className="text-lg text-white">
              5:00 PM -{" "}
              <span className="font-bold">Startup Sprint Kickoff!</span>
            </p>
            <p className="text-white">
              Fireside chat with <span className="font-bold">Kyle Krzeski</span>
              , CEO of Sabbath Ventures and VT alumnus.
              <br />
              Detailed explanation of rules, rubric, and game plan.
              <br />
              Team matching session for those looking for teammates.
              <br />
              <span className="font-bold">Food provided!</span>
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-cyan-300">
              Saturday, Sep 28 - Meet Alumni Founders
            </h3>
            <p className="text-lg text-white">
              11:00 AM -{" "}
              <span className="font-bold">E-Club Recruiting Info Session</span>
            </p>
            <p className="text-white">
              Learn about opportunities to get involved with VT's
              entrepreneurship ecosystem.
            </p>
            <p className="text-lg text-white mt-4">
              12:00 PM -{" "}
              <span className="font-bold">Problem Discovery Workshop</span>
            </p>
            <p className="text-white">
              Learn how to form a problem hypothesis based on your unique
              experiences.
            </p>
            <p className="text-lg text-white mt-4">
              1:30 PM -{" "}
              <span className="font-bold">
                Early Startup Market Research and Strategy with AI
              </span>
            </p>
            <p className="text-white">
              Learn how to analyze markets and build a strategy using modern
              tools.
            </p>
            <p className="text-lg text-white mt-4">
              2:30 PM -{" "}
              <span className="font-bold">
                Fireside Chat with Vince Baranauskas
              </span>
            </p>
            <p className="text-white">
              Hear from the cofounder and CTO of Macrovation, an advanced
              materials technology company.
            </p>
            <p className="text-lg text-white mt-4">
              4:30 PM -{" "}
              <span className="font-bold">
                Mentorship Sessions with Kyle Krzeski
              </span>
            </p>
            <p className="text-white">
              Drop in for mentorship and feedback on your project.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-cyan-300">
              Sunday, Sep 29 - Meet Student Founders
            </h3>
            <p className="text-lg text-white">
              12:00 PM -{" "}
              <span className="font-bold">Startup Marketing Workshop</span>
            </p>
            <p className="text-white">
              Learn how to find, target, and acquire customers for your product.
            </p>
            <p className="text-lg text-white mt-4">
              3:00 PM -{" "}
              <span className="font-bold">
                Fireside Chat with Mohit Yadav - CTO of QuickPark Solutions
              </span>
            </p>
            <p className="text-white">
              Hear from a sophomore VT student and cofounder of QuickPark
              Solutions.
            </p>
            <p className="text-lg text-white mt-4">
              4:30 PM -{" "}
              <span className="font-bold">
                Meet the Team of Exit Sign Solutions
              </span>
            </p>
            <p className="text-white">
              Exit Sign Solutions is a startup building unbreakable exit signs
              and has raised $85,000 from investors.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-cyan-300">Monday, Sep 30</h3>
            <p className="text-lg text-white">
              10:00 AM - 2:00 PM -{" "}
              <span className="font-bold">Office Hours with Kyle Krzeski</span>
            </p>
            <p className="text-white">
              Come for last-minute advice or help before the submission
              deadline.
            </p>
            <p className="text-lg text-white mt-4">
              11:59 PM - <span className="font-bold">Submissions Due</span>
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-cyan-300">Tuesday, Oct 1</h3>
            <p className="text-white">Take a break—you deserve it! 😊</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-cyan-300">
              Wednesday, Oct 2 - Closing Ceremony
            </h3>
            <p className="text-lg text-white">
              6:00 PM -{" "}
              <span className="font-bold">
                Finalist Announcements & Pitches
              </span>
            </p>
            <p className="text-white">
              The finalists will pitch their startups for the chance to win big
              $$$.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-fit">
        <div className="mx-auto mt-10 w-full">
          <div className="">
            <h2 className="mb-4 text-2xl font-bold text-secondary">FAQs</h2>

            <div className="mb-4 inline-block text-xl">
              <h3 className="m text-2xl font-bold text-primary">
                Can I apply with a startup or product I&apos;m already working
                on?
              </h3>
              <BsFillExclamationOctagonFill className="mr-4 inline text-2xl text-error" />
              No previous work may be done before the event. Any evidence of
              prior work will result in disqualification. You are free to funnel
              prize money into previous ventures, however. But your submissions
              must be developed during the event and no earlier.
            </div>

            <div className="mb-4 inline-block text-xl">
              <h3 className="text-2xl font-bold text-primary">
                Do I need a team to apply?
              </h3>
              <BsPeopleFill className="mr-4 inline text-2xl text-error" />
              You do not need a team to participate, but you are encouraged to
              form teams of up to 4 people.
            </div>

            <div className="mb-4 inline-block text-xl">
              <h3 className="text-2xl font-bold text-primary">
                Do I need to know how to code?
              </h3>
              <BsFileCodeFill className="mr-4 inline text-2xl text-error" />
              No, you do not need to know how to code. You must still submit a
              product, however, and this could simply be a landing page made
              with Wix and a spreadsheet on your end.
            </div>

            <div className="mb-4 inline-block text-xl">
              <h3 className="text-2xl font-bold text-primary">
                Who should I contact if I have questions?
              </h3>
              <div>
                <BsPersonFill className="mr-4 inline text-2xl text-error" />
                ebenezer@vt.edu
              </div>
              <div>
                <BsPersonFill className="mr-4 inline text-2xl text-error" />
                jeremiahhohn@vt.edu
              </div>
              <div>
                <BsPersonFill className="mr-4 inline text-2xl text-error" />
                brodyemery11@vt.edu
              </div>
              <div>
                <BsPersonFill className="mr-4 inline text-2xl text-error" />
                aaryanm@vt.edu
              </div>
              <div>
                <BsPersonFill className="mr-4 inline text-2xl text-error" />
                brook1212@vt.edu
              </div>
              <div>
                <BsPersonFill className="mr-4 inline text-2xl text-error" />
                axelc69@vt.edu
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
