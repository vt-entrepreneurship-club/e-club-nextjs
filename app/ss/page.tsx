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
      <CountdownTimer
        className="border-none bg-transparent text-pink-400"
        eventDate="2024-09-27T17:00:00"
      ></CountdownTimer>
      <Image
        className="mx-auto my-10 w-full lg:my-0 lg:w-1/2"
        src={Logo}
        alt="Startup Sprint Logo"
      />

      <div className="mx-auto mb-10 w-fit">
        <a
          href="https://forms.gle/pFcTMAD8rrgo7ZpeA"
          target="_blank"
          className="y btn mx-auto bg-gradient-to-r from-fuchsia-600 to-orange-400 font-semibold text-[#272E3F] hover:text-[#85F3D4] lg:text-xl"
        >
          Register
        </a>
      </div>

      <div className="lg:grid lg:grid-cols-2">
        <div className="blue-glow mx-auto mt-10 w-[94%] rounded-md border-0 bg-gradient-to-b from-fuchsia-500 to-orange-500 p-4">
          <div className="text-2xl font-bold text-base-100">
            💡 What is Startup Sprint?
          </div>

          <div className="mt-4 text-xl font-medium text-black">
            Startup Sprint is a competition spanning multiple days where
            students will work in teams to build a startup from scratch.
            <br />
            <br />
            This event is open to all students and will be a great opportunity
            to learn about entrepreneurship and meet other students interested
            in startups.
            <br />
            <br />
            Startup Sprint will feature a series of workshops, activities, and a
            chance to win it big.
          </div>
        </div>

        <div className="blue-glow mx-auto mt-10 w-[94%] rounded-md border-0 bg-gradient-to-b from-fuchsia-500 to-orange-500 p-4">
          <h2 className="mb-4 text-2xl font-bold text-base-100">
            🌟 Why Should You Join?
          </h2>

          <div className="mt-4 text-xl text-black">
            <div className="font-bold text-black">
              You'll get hands-on experience:
            </div>
            You&apos;re going to be dropped into a fast-paced environment where
            you&apos;ll have to identify a problem, deploy a solution, and craft
            a business model.
          </div>
          <div className="mt-4 text-xl text-black">
            <div className="font-bold text-black">
              You'll level up your skills:
            </div>
            Learn to use hyper-modern technologies and apply them to a practical
            problem.
          </div>
          <div className="mt-4 text-xl text-black">
            <div className="font-bold text-black">Win $$$:</div>
            Sieze the opportunity to win big cash prizes.
          </div>
          <div className="mt-4 text-xl text-black">
            <div className="font-bold text-black">Boost Your Resume:</div>
            Show off your ability to work in a team, solve problems, and build
            solutions.
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2">
        <div className="mx-auto mt-10 flex w-[94%] flex-col rounded-sm border border-pink-500 p-4">
          <div className="text-2xl font-bold text-cyan-300">
            What to expect?
          </div>
          <div className="mt-10 text-lg text-white">
            Startup Sprint is a challenge to build a startup from scratch in a
            matter of days. You will have 3-4 days to identify a problem, build
            a product, and form a business model. Your team will be judged on
            the quality of your idea, the execution of your product, and the
            strength of your business model.
          </div>
          <div className="mt-10 text-lg text-white">
            Throughout the course of the event, there will be workshops and
            resources provided to assist you in developing your startup.
          </div>
          <div className="mt-4 text-lg text-white">
            Winners will then be given a{" "}
            <span className="font-bold">lump sum of money </span>
            You can choose what to do with the prizes you win, whether it be to
            funnel it into your startup or to split it among your team.
            <div className="mb-10 mt-4">
              There are also opportunities to connect and get integrated with
              local incubator programs to further develop your startup.
            </div>
            <div className="alert alert-success mt-auto bg-green-400 text-black">
              <FaMoneyBill className="text-2xl" />
              Prizes are to be announced soon!
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 w-[94%] flex flex-col rounded-sm border border-pink-500 p-4">
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
