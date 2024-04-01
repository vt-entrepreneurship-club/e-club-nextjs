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
import { HiUserGroup } from "react-icons/hi";
import Image from "next/image";
import sponsorsImg from "./sponsors.png";

function StartupSprint2023() {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Startup Sprint 2023</h1>
      <h2 className="text-2xl text-primary">Dare to Dream, Take the Leap</h2>
      <p className="mb-8 text-lg">
        Are you ready to embark on an entrepreneurial journey like no other?
        Virginia Tech&apos;s Entrepreneurship Club, in partnership with the Apex
        Center for Entrepreneurs, presents{" "}
        <span className="text-secondary">Startup Sprint</span> – your chance to
        turn innovative ideas into reality in just one week!
      </p>

      <div className="alert alert-info mb-10">
        <BsFillInfoCircleFill className="text-2xl" />
        Check this page regularly for updates and new information.
      </div>

      <div className="mb-10 rounded-lg border p-6 shadow-lg lg:grid lg:grid-cols-2">
        <div className="lg:w-10/12">
          <div className="w-full">
            <h2 className="text-3xl font-semibold">🚫 Registration Closed</h2>
            <a
              href={"../../../startup_sprint_slides.pdf"}
              target="_blank"
              className="btn btn-outline btn-block mt-10"
            >
              <BsFillFileSlidesFill className="text-3xl" />
              Opening Ceremony Slides
            </a>
            <a
              href={"../../../business_model_slides.pdf"}
              target="_blank"
              className="btn btn-primary btn-outline btn-block mt-10"
            >
              <BsFillFileSlidesFill className="text-3xl" />
              Business Model Workshop Slides
            </a>
            <a
              href="https://discord.gg/SyWbPEExGW"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent btn-block mt-10 bg-indigo-500"
            >
              <BsDiscord className="text-3xl" />
              Discord
            </a>
            <a
              href="https://eclubvt.notion.site/Startup-Sprint-Resources-ac1cb75278cc4e8dbdefcce85c9ce2a2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info btn-block mt-10"
            >
              <BsStack className="text-3xl" />
              Resources
            </a>
            <a
              href="https://eclubvt.notion.site/Mentor-Portal-fec6e0ee2360453390a8324741891300"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-block mt-10 text-black"
            >
              <BsPeopleFill className="text-3xl" />
              Mentor Portal
            </a>
            <a
              href="https://forms.gle/w73qwZefEFwXjiZj8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-block mt-10 text-black"
            >
              <HiUserGroup className="text-3xl" />
              Leadership Interest Form
            </a>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <h2 className="text-3xl font-semibold">📅 Event Dates</h2>
          <br />

          <h3 className="text-2xl font-semibold text-secondary">
            Application Deadline:
          </h3>
          <p className="text-xl">
            Sunday November 5th{" "}
            <span className="font-bold text-error">11:59PM</span>
          </p>
          <br />

          <h3 className="text-2xl font-semibold text-secondary">
            Kickoff and Opening Ceremony:
          </h3>
          <p className="text-xl">
            Wednesday November 8th{" "}
            <span className="font-bold text-primary">6PM to 8PM</span> at the
            Apex Center
          </p>
          <br />

          <h3 className="text-2xl font-semibold text-secondary">
            Friday Workshops
          </h3>
          <p className="text-xl">
            Friday November 10th <br />
          </p>
          <br />
          <p className="text-xl">
            Meet some of the team members at Community Labs to ask questions
            about the Arweave network.
          </p>
          <span className="text-xl font-bold text-error">12:00PM - 3:00PM</span>
          <br />
          <br />
          <p className="text-xl">
            Learn how to craft a business model in our business model workshop.
          </p>
          <span className="text-xl font-bold text-error">4:00PM - 6:00PM</span>
          <br />
          <br />

          <h3 className="text-2xl font-semibold text-secondary">
            Saturday Movie Night
          </h3>
          <p className="text-xl">
            Saturday November 11th <br />
            Take a break from entreprenuering and come join us to watch the
            Social Network.
            <br />
            <span className="text-xl font-bold text-error">
              8:00PM - 10:00PM
            </span>
          </p>
          <br />

          <h3 className="text-2xl font-semibold text-secondary">
            MVP Submission Deadline:
          </h3>
          <p className="text-xl">
            Monday November 13th{" "}
            <span className="font-bold text-error">8:00AM</span>
          </p>
          <br />

          <h3 className="text-2xl font-semibold text-secondary">
            Final Pitch Day:
          </h3>
          <p className="text-xl">Wednesday November 15th at the Apex Center</p>
          <br />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="mb-4 w-full px-2 md:w-1/2">
          <div className="h-full rounded-lg border p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-secondary">
              💡 What is Startup Sprint?
            </h2>
            <p className="text-xl">
              Startup Sprint is an event designed to get you to ideate, problem
              solve, and deploy a startup with speed. There will be food, swag,
              cash prizes, and workshops for technical and business skill sets.
              Network with industry experts, local startups, mentors, and have
              fun with building your ideas!
            </p>
            <br />
            <p className="text-xl">
              You will have one week to{" "}
              <span className="text-secondary">identify a problem</span>, build
              a <span className="text-secondary">product</span>, and form a{" "}
              <span className="text-secondary">business model</span> that you
              will present in front of a panel of judges.
            </p>
          </div>
        </div>
        <div className="mb-4 w-full px-2 md:w-1/2">
          <div className="rounded-lg border p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-secondary">
              🌟 Why Should You Join?
            </h2>

            <div className="mt-4 text-xl">
              <span className="font-semibold text-primary">
                Hands-On Experience:
              </span>{" "}
              You&apos;re going to be dropped into a fast-paced environment
              where you&apos;ll have to identify a problem, deploy a solution,
              and craft a business model.
            </div>
            <div className="mt-4 text-xl">
              <span className="font-semibold text-primary">Workshops:</span>{" "}
              Learn business model creation and Arweave blockchain development
              from faculty and industry partners.
            </div>
            <div className="mt-4 text-xl">
              <span className="font-semibold text-primary">
                Skill Development:
              </span>{" "}
              Learn to use hyper-modern technologies and apply them to a
              practical problem.
            </div>
            <div className="mt-4 text-xl">
              <span className="font-semibold text-primary">Win $$$:</span>{" "}
              Impress our panel of judges and secure capital. There is over{" "}
              <span className="text-secondary">$5000</span> in prize money!
            </div>
            <div className="mt-4 text-xl">
              <span className="font-semibold text-primary">
                Boost Your Resume:
              </span>{" "}
              Add this exciting experience to your resume.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="mb-4 w-full px-2 md:w-1/2">
          <div className="h-full rounded-lg border p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-secondary">
              Our Sponsors:
            </h2>
            <Image
              className="lg:w-2/3"
              src={sponsorsImg}
              alt="Startup Sprint Sponsors"
            />
          </div>
        </div>
        <div className="mb-4 w-full px-2 md:w-1/2">
          <div className="h-full rounded-lg border p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-secondary">FAQs</h2>

            <div className="mb-4 inline-block text-xl">
              <h3 className="text-2xl font-bold text-primary">
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
    </div>
  );
}

export default StartupSprint2023;
