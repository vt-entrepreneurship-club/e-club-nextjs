import React from "react";
import CountdownTimer from "../../components/CountdownTimer";
import StartupSprintLogo from "./startup sprint logo.png";
import Image from "next/image";
import { FaMoneyBill } from "react-icons/fa";
import {
    BsFillExclamationOctagonFill,
    BsPeopleFill,
    BsFileCodeFill,
    BsFillInfoCircleFill,
    BsPersonFill,
    BsDiscord,
    BsStack,
    BsFillFileSlidesFill,
  } from "react-icons/bs";

function page() {
  return (
    <div className="w-[97%] mx-auto">
      <CountdownTimer
        className="bg-transparent border-none text-pink-400"
        eventDate="2024-09-27T17:00:00"
      ></CountdownTimer>
      <Image
        className="w-full lg:w-fit mx-auto"
        src={StartupSprintLogo}
        alt="Startup Sprint Logo"
      />

      <div className="w-fit mx-auto mb-10">
        <button className="btn btn-primary mx-auto text-black font-normal">Register</button>
      </div>

      <div className="lg:grid lg:grid-cols-2">
        <div className="border border-cyan-300 bg-[#F444FF] -400 rounded-md border-2 p-4 w-[94%] mx-auto mt-10">
          <div className="text-2xl text-base-100 font-bold">
            💡 What is Startup Sprint?
          </div>

          <div className="text-xl font-medium text-black mt-4">
            Startup Sprint is a competition spanning multiple days where
            students will work in teams to build a startup from scratch. 
            <br /><br />
            This event is open to all students and will be a great opportunity to
            learn about entrepreneurship and meet other students interested in
            startups. 
            <br /><br />
            Startup Sprint will feature a series of workshops, activities,
            and a chance to win it big.
          </div>
        </div>

        <div className="border border-pink-500 bg-cyan-300 rounded-md border-2 p-4 w-[94%] mx-auto mt-10">
            <h2 className="mb-4 text-2xl font-bold text-base-100">
              🌟 Why Should You Join?
            </h2>

            <div className="mt-4 text-xl text-black">
              <div className="font-bold text-purple-900">
                You'll get hands-on experience:
              </div>
              You&apos;re going to be dropped into a fast-paced environment
              where you&apos;ll have to identify a problem, deploy a solution,
              and craft a business model.
            </div>
            <div className="mt-4 text-xl text-black">
              <div className="font-bold text-purple-900">
              You'll level up your skills:
              </div>
              Learn to use hyper-modern technologies and apply them to a
              practical problem.
            </div>
            <div className="mt-4 text-xl text-black">
              <div className="font-bold text-purple-900">Win $$$:</div>
                Sieze the opportunity to win big cash prizes.
            </div>
            <div className="mt-4 text-xl text-black">
              <div className="font-bold text-purple-900">
                Boost Your Resume:
              </div>
              Show off your ability to work in a team, solve problems, and build solutions.
            </div>
          </div>



      </div>

      <div className="lg:grid lg:grid-cols-2">

        <div className="border border-pink-500 rounded-sm p-4 w-[94%] mx-auto mt-10 flex flex-col">
          <div className="text-2xl text-cyan-300 font-bold">
            What to expect?
          </div>
          <div className="text-lg text-white mt-10">
            Startup Sprint is a challenge to build a startup from scratch in a matter of days.
            You will have 3-4 days to identify a problem, build a product, and form a business model.
            Your team will be judged on the quality of your idea, the execution of your product, 
            and the strength of your business model.
          </div>
          <div className="text-lg text-white mt-10">
            Throughout the course of the event, there will be workshops and resources provided to assist
            you in developing your startup.
          </div>
          <div className="text-lg text-white mt-4">
            Winners will then be given a <span className="font-bold">lump sum of money </span>
            You can choose what to do with the prizes you win, whether it be to funnel it into your startup or to split it among your team.

            <div className="mt-4 mb-10">
                There are also opportunities to connect and get integrated with local incubator programs to further develop your startup.
            </div>

            <div className="alert alert-success bg-green-400 text-black mt-auto">
                <FaMoneyBill className="text-2xl"/>
                Prizes are to be announced soon!
            </div>
          </div>
        </div>

        <div className="border border-cyan-300 rounded-sm p-4 w-[94%] mx-auto mt-10 flex flex-col">
          <div className="text-2xl text-cyan-300 font-bold lg:text -right mb-10">
            When is it?
          </div>

          <div className="text-xl text-cyan-300 font-bold">
            Opening Ceremony:
          </div>
          <div className="font-medium">
            September 27th
          </div>

          <div className="text-xl text-cyan-300 font-bold mt-6">
            Closing Ceremony:
          </div>
          <div className="font-medium">
            October 2nd
          </div>

          <div className="alert alert-info mt-auto">
            <BsFillInfoCircleFill className="text-2xl" />
            Check this page regularly for updates and new information.
            Location and times will be announced soon.
          </div>
        </div>

      </div>
        <div className="w-full mx-auto mt-10">
            <div className="">
                <h2 className="mb-4 text-2xl font-bold text-secondary">FAQs</h2>

                <div className="mb-4 inline-block text-xl">
                <h3 className="text-2xl font-bold text-primary m">
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
                    htsours@vt.edu
                </div>
                <div>
                    <BsPersonFill className="mr-4 inline text-2xl text-error" />
                    samuelr20@vt.edu
                </div>
                <div>
                    <BsPersonFill className="mr-4 inline text-2xl text-error" />
                    mbutler23@vt.edu
                </div>
                <div>
                    <BsPersonFill className="mr-4 inline text-2xl text-error" />
                    jeremiahhohn@vt.edu
                </div>
                <div>
                    <BsPersonFill className="mr-4 inline text-2xl text-error" />
                    brodyemery11@vt.edu
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default page;
