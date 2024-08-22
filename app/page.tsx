import Image from "next/image";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";
import groupme_qr from "./assets/groupme_qr.png";
import { HeroImage } from "./components/HeroImage";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import NewsletterSignup from "./components/NewsletterSignup";

export default function Home() {
  return (
    <div className="container mx-auto w-11/12">
      <HeroImage></HeroImage>
      <h1 className="text-3xl text-primary lg:text-4xl">
        Where Entrepreneurship Becomes Community
      </h1>
      <p className="mb-8 mt-4 text-xl lg:text-2xl">
        Right at the center of Virginia Tech&apos;s startup ecosystem, we bridge
        gaps between students, industry leaders, and startups that are building
        spectacular products.
      </p>
      <p className="mb-8 text-xl lg:text-2xl">
        In collaboration with the{" "}
        <a
          className="externalLink"
          target="_blank"
          href="https://www.apex.vt.edu/"
        >
          Apex Center
        </a>
        , the Entrepreneurship Club helps students get integrated into the
        startup ecosystem.
      </p>

      <div className="lg:mb-20"></div>

      <h2 className="mx-auto w-fit mb-4 text-3xl text-primary lg:text-4xl">What we Do</h2>
      <p className="text-xl mx-auto text-center">We host events to ignite entrepreneurial fire in VT students. 
      <br />
      Here are some of the ones we've done.</p>

      <div className="lg:grid lg:grid-cols-2 mt-6">

        <div className="border-2 border-primary rounded-md p-4 mx-4 my-6">
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
        </div>

        <div className="border-2 border-purple-500 rounded-md p-4 mx-4 my-6">
          <h3 className="w-fit font-bold mx-auto text-purple-500 text-2xl mb-4">Venture Weekend</h3>
          <p className="text-xl">
            Venture Weekend is a 3-day event where students, faculty, and alumni come together to celebrate entrepreneurship.
            <br /><br />
            A weekend packed with workshops, networking, and a startup showcase, Venture Weekend is the perfect opportunity to 
            learn about entrepreneurship and meet the Virginia Tech students that are building the future. 
            <br /><br />
            
            <div>
              
            </div>

            {/* <div className="flex my-2 items-center">
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
            </div> */}
          </p>
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
