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

export default function StartupSprint24Page() {
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

        <div className="mx-auto mt-10 flex w-[94%] flex-col rounded-sm border border-pink-500 p-4">
          <div className="lg:text -right mb-10 text-2xl font-bold text-cyan-300">
            When is it?
          </div>

          <div className="text-xl font-bold text-cyan-300">
            Opening Ceremony:
          </div>
          <div className="font-medium">September 27th</div>

          <div className="mt-6 text-xl font-bold text-cyan-300">
            Closing Ceremony:
          </div>
          <div className="font-medium">October 2nd</div>

          <div className="alert alert-info mt-auto">
            <BsFillInfoCircleFill className="text-2xl" />
            Check this page regularly for updates and new information. Location
            and times will be announced soon.
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
