"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import uxIcon from "./ux.png";
import codeIcon from "./code.png";
import marketing from "./marketing.png";
import pitching from "./pitching.png";
import ventureWeekendFlyer from "../events/venture-weekend.jpg";

const workshops = [
  {
    title: "UI/UX Design",
    description:
      "Gain the skills to design apps and websites with professional tools. Learn the importance of user experience and how to design a user-friendly interface.",
    icon: uxIcon,
  },
  {
    title: "Full Stack Development",
    description:
      "Learn how to build a web application from scratch. This workshop will cover front-end and back-end development, databases, and APIs. No prior experience required.",
    icon: codeIcon,
  },
  {
    title: "Marketing",
    description:
      "Learn how to market your startup and reach your target audience. This workshop will cover social media marketing, content creation, and SEO.",
    icon: marketing,
  },
  {
    title: "Pitching and Public Speaking",
    description:
      "Learn how to present your ideas with confidence. This workshop will cover public speaking, storytelling, and how to pitch your startup to investors.",
    icon: pitching,
  },
];

function VentureWeekend() {
  useEffect(() => {
    const html = document.querySelector("html");
    html?.setAttribute("data-theme", "synthwave");
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold text-purple-500">
        Venture Weekend
      </h1>

      <div className="lg:grid lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-[#D946EF]">
            Meet students building startups, level up your skillset, win prizes
          </h2>
          <br />
          <p className="mb-8 text-lg">
            Virginia Tech&apos;s Entrepreneurship Club is hosting a Venture
            Weekend from April 19th to the 21st. This event is open to all
            students and will be a great opportunity to learn about
            entrepreneurship and meet other students interested in startups.
            Venture Weekend will feature a series of workshops, activities, and
            demos where students will present their startups and the progress
            they&apos;ve been making.
          </p>

          <h3 className="my-10 text-xl font-bold text-[#F59E0B]">
            Friday April 19th - Sunday April 21st
          </h3>

          <h2 className="text-xl font-bold text-[#FDBA74]">Startup Demos</h2>
          <p className="mb-8 text-lg">
            Meet the Virginia Tech students who are building innovative startups
            and disrupting markets.
          </p>

          <a
            href="https://forms.gle/wL4aNiZv875HszhUA"
            target="_blank"
            className="btn btn-block float-right mb-20 mt-10 bg-gradient-to-r from-[#F97316] to-purple-500 text-black"
          >
            Register
          </a>
        </div>

        <div className="">
          <div className="float-right lg:w-4/6">
            <Image
              alt="Venture Weekend Flyer"
              className="float-right mb-10"
              src={ventureWeekendFlyer}
            ></Image>
          </div>
        </div>
      </div>

      <h2 className="mt-20 text-xl font-bold text-secondary lg:mt-0">
        Workshops
      </h2>

      <div className="lg:grid lg:grid-cols-2">
        {workshops.map((workshop, index) => {
          let color;
          if (index == 0) {
            color = "text-[#D946EF]";
          } else if (index == 1) {
            color = "text-[#F59E0B]";
          } else if (index == 2) {
            color = "text-[#FDBA74]";
          } else if (index == 3) {
            color = "text-[#F97316]";
          }
          return (
            <>
              <div
                key={index}
                className="mx-auto my-10 w-fit rounded-lg border border-accent p-4 lg:w-11/12"
              >
                <h2 className={`${color} text-lg font-bold`}>
                  {workshop.title}
                </h2>
                <div className="lg:flex lg:items-center lg:align-middle">
                  <Image
                    className="lg:size-[100px]"
                    src={workshop.icon}
                    alt=""
                  />
                  <p className="lg:ml-2 lg:mt-8 lg:w-1/2">
                    {workshop.description}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default VentureWeekend;
