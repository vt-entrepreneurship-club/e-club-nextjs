'use client'
import Image from "next/image";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";
import groupme_qr from "./assets/groupme_qr.png";
import { HeroImage } from "./components/HeroImage";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import NewsletterSignup from "./components/NewsletterSignup";
import Link from "next/link";
import { Vortex } from "./components/ui/vortex";
import { Cover } from "./components/ui/cover";

export default function Home() {
  return (
    <div className="container mx-auto w-11/12">
      {/* <HeroImage></HeroImage> */}
      <div className="w-full mx-auto">
        <div className="lg:text-6xl text-5xl mx-auto text-center ApexMk2-Bold bg-gradient-to-b from-slate-400 to-gray-200 bg-clip-text text-transparent">Startups
          <Cover className="italic cursor-default !bg-gradient-to-r !from-cyan-300 !to-blue-500 bg-clip-text !text-transparent">Start Here</Cover>
        </div>
      </div>
      {/* <div className="w-full mx-auto rounded-md  h-[10rem] overflow-hidden">
        <Vortex
          backgroundColor="transparent"
          className="flex items-center flex-col justify-center px-2 md:px-10 mx-auto py-4 w-full h-full blur-edge"
          >
          <h1 className="text-3xl text-primary lg:text-4xl">
            Where Entrepreneurship Becomes Community
          </h1>
        </Vortex>
      </div> */}

      <div className="mb-8 mt-10 text-xl lg:text-xl text-center lg:w-2/3 mx-auto">
        Right at the center of Virginia Tech's startup ecosystem, we bridge
        gaps between students, industry leaders, and startups that are building
        spectacular products.
        <br /><br />
        <p className="mb-8 text-xl lg:text-xl">
          In collaboration with the {" "}
          <a
            className="externalLink"
            target="_blank"
            href="https://www.apex.vt.edu/"
          >
             Apex Center 
          </a>, the Entrepreneurship Club helps students get integrated into the
          startup ecosystem.
        </p>
      </div>

      <div className="lg:mb-20"></div>

      <h2 className="mx-auto w-fit mb-4 text-3xl text-primary lg:text-4xl ApexMk2">What we Do</h2>
      <p className="text-xl mx-auto text-center">We host events to ignite entrepreneurial fire in VT students. 
      <br />
      Here are some of the ones we've done.</p>

      <div className="lg:grid lg:grid-cols-2 mt-6">

        <div className="border-2 border-primary rounded-md p-4 mx-4 my-6 blue-glow">
          <h3 className="w-fit font-bold mx-auto text-primary text-2xl mb-4">Startup Sprint</h3>
          <p className="text-xl">
            Startup Sprint was born from the philosophy that the best way to learn entrepreneurship is by doing it.
            <br /><br />
            This is an event spanning multiple days where students come together to build a startup from scratch.
            With a focus on interdisciplinary innovation, students from all backgrounds were tasked with:
            <br /><br />

            <div className="flex my-2 items-center">
              <FaMagnifyingGlass className="text-primary mr-3"/>
              Identifying a problem
            </div>

            <div className="flex my-2 items-center">
              <FaCode className="text-primary mr-3"/>
              Building a product
            </div>

            <div className="flex my-2 items-center">
              <BiRocket className="text-primary mr-3"/>
              Deploying a solution
            </div>
          </p>
          <Link className="mt-8 btn-block btn btn-primary blue-glow bg-gradient-to-r from-fuchsia-600 to-cyan-400 mx-auto text-[#272E3F] font-semibold lg:text-md hover:text-white" href='/startup-sprint/2024'>Check out Startup Sprint</Link>
        </div>

        <div className="border-2 border-purple-500 rounded-md p-4 mx-4 my-6 flex flex-col justify-between">
          <h3 className="w-fit font-bold mx-auto text-purple-500 text-2xl mb-4">Venture Weekend</h3>
          <p className="text-xl">
            Venture Weekend is a 3-day event where students, faculty, and alumni come together to celebrate entrepreneurship.
            <br /><br />
            A weekend packed with workshops, networking, and a startup showcase, Venture Weekend is the perfect opportunity to 
            learn about entrepreneurship and meet the Virginia Tech students that are building the future. 
            <br /><br />
          </p>
            <div className="btn-block btn btn-primary btn-ghost btn-outline btn-disabled mt-auto">coming soon</div>
        </div>



      </div>

      <div className="lg:mb-20"></div>
      <div className="lg:grid lg:grid-cols-2">
        {/* Newsletter Sign Up */}
        <div>
          <h2 className="mx-auto mt-8 text-3xl text-primary lg:text-4xl">
            Sign up for our Newsletter
          </h2>
          <p className="mt-4 text-xl">
            Join 2,000 others in finding out what&apos;s new in the
            entrepreneurial community around Blacksburg. Delivered weekly to
            your inbox during the semester.
          </p>
          <NewsletterSignup></NewsletterSignup>
        </div>
        {/* GroupMe */}
        <div>
          <h2 className="mx-auto mt-8 text-3xl text-primary lg:float-right lg:text-4xl">
            Join Our Group Me
          </h2>
          <div className="clear-right"></div>
          <Image
            src={groupme_qr}
            className="mt-4 lg:float-right lg:w-1/2"
            alt=""
            width={"500"}
          />
        </div>
      </div>
    </div>
  );
}
