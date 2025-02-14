// 'use client'
// import Image from "next/image";
// import image2 from "./assets/image2.jpeg";
// import image3 from "./assets/image3.jpeg";
// import groupme_qr from "./assets/groupme_qr.png";
// import { HeroImage } from "./components/HeroImage";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { FaCode } from "react-icons/fa";
// import { BiRocket } from "react-icons/bi";
// import NewsletterSignup from "./components/NewsletterSignup";
// import Link from "next/link";
// import { Vortex } from "./components/ui/vortex";
// import { Cover } from "./components/ui/cover";

// export default function Home() {
//   return (
//     <div className="container mx-auto w-11/12">
//       {/* <HeroImage></HeroImage> */}
//       <div className="w-full mx-auto">
//         <div className="lg:text-6xl text-5xl mx-auto text-center ApexMk2-Bold bg-gradient-to-b from-slate-400 to-gray-200 bg-clip-text text-transparent">Startups
//           <Cover className="italic cursor-default !bg-gradient-to-r !from-cyan-300 !to-blue-500 bg-clip-text !text-transparent">Start Here</Cover>
//         </div>
//       </div>
//       {/* <div className="w-full mx-auto rounded-md  h-[10rem] overflow-hidden">
//         <Vortex
//           backgroundColor="transparent"
//           className="flex items-center flex-col justify-center px-2 md:px-10 mx-auto py-4 w-full h-full blur-edge"
//           >
//           <h1 className="text-3xl text-primary lg:text-4xl">
//             Where Entrepreneurship Becomes Community
//           </h1>
//         </Vortex>
//       </div> */}

//       <div className="mb-8 mt-10 text-xl lg:text-xl text-center lg:w-2/3 mx-auto">
//         Right at the center of Virginia Tech's startup ecosystem, we bridge
//         gaps between students, industry leaders, and startups that are building
//         spectacular products.
//         <br /><br />
//         <p className="mb-8 text-xl lg:text-xl">
//           In collaboration with the {" "}
//           <a
//             className="externalLink"
//             target="_blank"
//             href="https://www.apex.vt.edu/"
//           >
//              Apex Center 
//           </a>, the Entrepreneurship Club helps students get integrated into the
//           startup ecosystem.
//         </p>
//       </div>

//       <div className="lg:mb-20"></div>

//       <h2 className="mx-auto w-fit mb-4 text-3xl text-primary lg:text-4xl ApexMk2">What we Do</h2>
//       <p className="text-xl mx-auto text-center">We host events to ignite entrepreneurial fire in VT students. 
//       <br />
//       Here are some of the ones we've done.</p>

//       <div className="lg:grid lg:grid-cols-2 mt-6">

//         <div className="border-2 border-primary rounded-md p-4 mx-4 my-6 blue-glow">
//           <h3 className="w-fit font-bold mx-auto text-primary text-2xl mb-4">Startup Sprint</h3>
//           <p className="text-xl">
//             Startup Sprint was born from the philosophy that the best way to learn entrepreneurship is by doing it.
//             <br /><br />
//             This is an event spanning multiple days where students come together to build a startup from scratch.
//             With a focus on interdisciplinary innovation, students from all backgrounds were tasked with:
//             <br /><br />

//             <div className="flex my-2 items-center">
//               <FaMagnifyingGlass className="text-primary mr-3"/>
//               Identifying a problem
//             </div>

//             <div className="flex my-2 items-center">
//               <FaCode className="text-primary mr-3"/>
//               Building a product
//             </div>

//             <div className="flex my-2 items-center">
//               <BiRocket className="text-primary mr-3"/>
//               Deploying a solution
//             </div>
//           </p>
//           <Link className="mt-8 btn-block btn btn-primary blue-glow bg-gradient-to-r from-fuchsia-600 to-cyan-400 mx-auto text-[#272E3F] font-semibold lg:text-md hover:text-white" href='/startup-sprint/2024'>Check out Startup Sprint</Link>
//         </div>

//         <div className="border-2 border-purple-500 rounded-md p-4 mx-4 my-6 flex flex-col justify-between">
//           <h3 className="w-fit font-bold mx-auto text-purple-500 text-2xl mb-4">Venture Weekend</h3>
//           <p className="text-xl">
//             Venture Weekend is a 3-day event where students, faculty, and alumni come together to celebrate entrepreneurship.
//             <br /><br />
//             A weekend packed with workshops, networking, and a startup showcase, Venture Weekend is the perfect opportunity to 
//             learn about entrepreneurship and meet the Virginia Tech students that are building the future. 
//             <br /><br />
//           </p>
//             <div className="btn-block btn btn-primary btn-ghost btn-outline btn-disabled mt-auto">coming soon</div>
//         </div>



//       </div>

//       <div className="lg:mb-20"></div>
//       <div className="lg:grid lg:grid-cols-2">
//         {/* Newsletter Sign Up */}
//         <div>
//           <h2 className="mx-auto mt-8 text-3xl text-primary lg:text-4xl">
//             Sign up for our Newsletter
//           </h2>
//           <p className="mt-4 text-xl">
//             Join 2,000 others in finding out what&apos;s new in the
//             entrepreneurial community around Blacksburg. Delivered weekly to
//             your inbox during the semester.
//           </p>
//           <NewsletterSignup></NewsletterSignup>
//         </div>
//         {/* GroupMe */}
//         <div>
//           <h2 className="mx-auto mt-8 text-3xl text-primary lg:float-right lg:text-4xl">
//             Join Our Group Me
//           </h2>
//           <div className="clear-right"></div>
//           <Image
//             src={groupme_qr}
//             className="mt-4 lg:float-right lg:w-1/2"
//             alt=""
//             width={"500"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { Instagram, Linkedin, Mail, Calendar } from "lucide-react"
import { BouncingArrow } from "../components/BouncingArrow"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section")
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight
        const scrollThreshold = heroHeight * 0.7 // Change background when 70% of hero is scrolled
        setIsScrolled(window.scrollY > scrollThreshold)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main
      className={`min-h-screen relative overflow-hidden font-serif transition-colors duration-500 ${isScrolled ? "bg-[#2f72be]" : ""}`}
    >
      {/* Animated Background Image */}
      <div
        className={`fixed inset-0 z-0 overflow-hidden transition-opacity duration-500 ${isScrolled ? "opacity-0" : "opacity-100"}`}
      >
        <div className="animate-panorama h-full" style={{ width: "max-content" }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20at%2011.26.35%E2%80%AFAM-HmCBnq712JAYIhN7gCTSWMngcWMHLE.png"
            alt="Panoramic sky with scattered white clouds"
            width={3000}
            height={1000}
            className="h-full w-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Centered Detached Navbar */}
      <div className="fixed top-6 left-0 right-0 z-10 flex justify-center px-4">
        <nav className="backdrop-blur-md bg-[#2f72be]/70 border border-white/30 rounded-full px-8 py-4 w-auto">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => scrollToSection("about-section")}
              className="text-white hover:text-white/80 font-light"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("events-section")}
              className="text-white hover:text-white/80 font-light"
            >
              Events
            </button>
            <a href="#" className="text-white hover:text-white/80 font-light">
              Team
            </a>
            <a href="#" className="text-white hover:text-white/80 font-light">
              Join
            </a>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div id="hero-section" className="relative z-1 min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="relative w-48 h-48 mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Yn96fXLsyrj2943AGscXP3hxpVxKQb.png"
              alt="Club logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-light text-white drop-shadow-lg">Invent the future.</h1>
            <p className="text-xl md:text-2xl font-light text-white/90 drop-shadow-md">
              Virginia Tech's premier club for founders, builders, and entrepreneurs.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-[#2f72be] border border-[#2f72be]/30 font-light shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Join Now
          </Button>

          {/* Social Media Buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            <Button
              size="icon"
              variant="ghost"
              className="backdrop-blur-md bg-[#2f72be]/70 hover:bg-[#2f72be]/80 text-white border border-white/30"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="backdrop-blur-md bg-[#2f72be]/70 hover:bg-[#2f72be]/80 text-white border border-white/30"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="backdrop-blur-md bg-[#2f72be]/70 hover:bg-[#2f72be]/80 text-white border border-white/30"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>

        {/* Bouncing Arrow */}
        <BouncingArrow onClick={() => scrollToSection("about-section")} />
      </div>

      {/* About Section */}
      <section
        id="about-section"
        className="relative z-1 min-h-screen flex flex-col items-center justify-center px-4 py-16"
      >
        <h2 className="text-4xl font-light text-white mb-8 text-center">About Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Statement */}
          <div className="backdrop-blur-md bg-[#2f72be]/70 border border-white/30 rounded-3xl p-8 md:col-span-2">
            <h2 className="text-3xl font-light text-white mb-4">Our Mission</h2>
            <p className="text-white/90 font-light">
              We empower the next generation of innovators at Virginia Tech by fostering a community of creative
              problem-solvers, providing resources for startup development, and connecting students with industry
              leaders.
            </p>
          </div>

          {/* Key Stats */}
          <div className="backdrop-blur-md bg-[#2f72be]/70 border border-white/30 rounded-3xl p-8">
            <h2 className="text-3xl font-light text-white mb-4">Key Stats</h2>
            <ul className="text-white/90 font-light space-y-2">
              <li>200+ Active Members</li>
              <li>50+ Startups Launched</li>
              <li>$1M+ in Funding Raised</li>
              <li>30+ Industry Partnerships</li>
            </ul>
          </div>

          {/* What We Do */}
          <div className="backdrop-blur-md bg-[#2f72be]/70 border border-white/30 rounded-3xl p-8 md:col-span-2">
            <h2 className="text-3xl font-light text-white mb-4">What We Do</h2>
            <ul className="text-white/90 font-light space-y-2">
              <li>Workshops & Skill-building Sessions</li>
              <li>Startup Pitch Competitions</li>
              <li>Networking Events with Industry Leaders</li>
              <li>Mentorship Programs</li>
              <li>Access to Funding Opportunities</li>
            </ul>
          </div>

          {/* Join Us CTA */}
          <div className="backdrop-blur-md bg-[#2f72be]/70 border border-white/30 rounded-3xl p-8 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-light text-white mb-4">Join Us</h2>
            <p className="text-white/90 font-light mb-4 text-center">
              Ready to turn your ideas into reality? Join our community of innovators today!
            </p>
            <Button size="lg" className="bg-white hover:bg-white/90 text-black border-0 font-light">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events-section" className="relative z-1 min-h-screen flex flex-col items-center px-4 py-20">
        <h2 className="text-4xl font-light text-white mb-16 text-center">Upcoming Events</h2>
        <div className="w-full max-w-6xl mx-auto flex flex-col justify-center flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Event 1 */}
            <div className="backdrop-blur-md bg-[#2f72be]/70 border border-white/30 rounded-3xl p-6 flex flex-col">
              <h3 className="text-2xl font-light text-white mb-2">Event 1</h3>
              <p className="text-white/90 font-light mb-4">(Description here)</p>
              <div className="flex items-center justify-between text-white/90 font-light mt-auto">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>March 15, 2025 | 7:00 PM</span>
                </div>
                <Button size="sm" variant="outline" className="text-black bg-white border-white hover:bg-white/90">
                  Sign Up
                </Button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="backdrop-blur-md bg-[#2f72be]/70 border border-white/30 rounded-3xl p-6 flex flex-col">
              <h3 className="text-2xl font-light text-white mb-2">Event 2</h3>
              <p className="text-white/90 font-light mb-4">(Description here)</p>
              <div className="flex items-center justify-between text-white/90 font-light mt-auto">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>April 2, 2025 | 3:00 PM</span>
                </div>
                <Button size="sm" variant="outline" className="text-black bg-white border-white hover:bg-white/90">
                  Sign Up
                </Button>
              </div>
            </div>

            {/* Event 3 */}
            <div className="backdrop-blur-md bg-[#2f72be]/70 border border-white/30 rounded-3xl p-6 flex flex-col">
              <h3 className="text-2xl font-light text-white mb-2">Event 3</h3>
              <p className="text-white/90 font-light mb-4">(Description here)</p>
              <div className="flex items-center justify-between text-white/90 font-light mt-auto">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>April 20, 2025 | 6:30 PM</span>
                </div>
                <Button size="sm" variant="outline" className="text-black bg-white border-white hover:bg-white/90">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Event 4 */}
            <div className="backdrop-blur-md bg-[#2f72be]/70 border border-white/30 rounded-3xl p-6 flex flex-col">
              <h3 className="text-2xl font-light text-white mb-2">Event 4</h3>
              <p className="text-white/90 font-light mb-4">(Description here)</p>
              <div className="flex items-center justify-between text-white/90 font-light mt-auto">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>May 5, 2025 | 2:00 PM</span>
                </div>
                <Button size="sm" variant="outline" className="text-black bg-white border-white hover:bg-white/90">
                  Sign Up
                </Button>
              </div>
            </div>

            {/* Event 5 */}
            <div className="backdrop-blur-md bg-[#2f72be]/70 border border-white/30 rounded-3xl p-6 flex flex-col">
              <h3 className="text-2xl font-light text-white mb-2">Event 5</h3>
              <p className="text-white/90 font-light mb-4">(Description here)</p>
              <div className="flex items-center justify-between text-white/90 font-light mt-auto">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>May 18, 2025 | 5:00 PM</span>
                </div>
                <Button size="sm" variant="outline" className="text-black bg-white border-white hover:bg-white/90">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

