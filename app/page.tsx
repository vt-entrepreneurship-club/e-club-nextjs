"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Instagram, Linkedin, Mail, Calendar } from "lucide-react";
import { BouncingArrow } from "../components/BouncingArrow";
import clouds from "../public/clouds.png";
import logo from "../public/logo-stroke.png";
import Card from "../components/Card";
import NewsletterSignup from "../components/NewsletterSignup";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);


  
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollThreshold = heroHeight * 0.7; // Change background when 70% of hero is scrolled
        setIsScrolled(window.scrollY > scrollThreshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      className={`min-h-screen overflow-hidden font-serif transition-colors duration-500 pb-[300px] z-[0]`}
    >

      
      {/* Animated Background Image */}
      <div
        className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-blue-200 to-[#61A6FB] transition-opacity duration-100"
      >
        <div className="animate-panorama h-full">
          <Image
            src={clouds}
            alt="Panoramic sky with scattered white clouds"
            width={9000}
            height={1000}
            className="h-full w-full object-cover"
            priority
          />
          <Image
            src={clouds}
            alt="Panoramic sky with scattered white clouds"
            width={3000}
            height={1000}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* <NavBar /> */}


      {/* Main Content */}
      <div
        id="hero-section"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-32"
      >
        <h1 className="text-4xl ApexMk2-Bold mb-10 md:text-5xl font-light text-white text-center drop-shadow-lg">
          Startups Start Here
        </h1>

        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="relative w-[300px] h-[300px] mx-auto">
            <Image
              src={logo}
              alt="Virginia Tech Entrepreneurship Club logo"
              fill
              className="object-contain stroke-black"
              priority
            />
          </div>

          {/* Tagline */}
          <div className="">
            {/* <p className="text-xl md:text-2xl font-light text-[#2f72be]/70 drop-shadow-sm lg:w-1/2 mx-auto space-y-4 bg-white/10 w-fit backdrop-blur-sm w-fit border border-white/30 rounded-3xl p-4">
              Virginia Tech's premier club for founders, builders, and
              entrepreneurs.
            </p> */}
          </div>

          {/* CTA Button */}
          <div
            onClick={() => scrollToSection("newsletter-signup")}
            className="mx-auto ApexMk2-Bold bg-white py-3 rounded-sm mt-20 hover:bg-white/90 text-[#2f72be] border-2 border-[#2f72be]/30 font-light shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            Join Now
          </div>

          {/* Social Media Buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://www.instagram.com/eclub.vt/" target="_blank" className="backdrop-blur-md p-4 bg-[#2f72be]/40 hover:bg-[#2f72be]/80 text-white">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/vteclub/" target="_blank" className="backdrop-blur-md p-4 bg-[#2f72be]/40 hover:bg-[#2f72be]/80 text-white">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            {/* <div className="backdrop-blur-md p-4 bg-[#2f72be]/40 hover:bg-[#2f72be]/80 text-white">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="lg:grid lg:grid-cols-3 w-10/12 mx-auto gap-3 space-y-3 lg:space-y-0">
        <Card className="col-span-2">
          <h2 className="text-[#2c5e9a] ApexMk2-Bold text-2xl">Our Mission</h2>

          <p className="text-[#2c5e9a] font-light mt-4 text-xl">
            We empower the next generation of innovators at Virginia Tech by
            fostering a community of creative problem-solvers, providing
            resources for startup development, and connecting students with
            industry leaders.
          </p>
        </Card>

        <Card className="col-span-1">
          <h1 className="text-[#2c5e9a] ApexMk2-Bold text-2xl">Stats</h1>
          <div className="text-[#2c5e9a] font-light text-xl mt-4">
            <ul className="list-none space-y-6">
              <li className="flex items-center gap-2">
                <span>💰</span>
                <div>
                  <div className="ApexMk2-Bold">$9,000+</div>
                  <div className="text-xl opacity-80">Provided to student entrepreneurs</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <span>🚀</span>
                <div>
                  <div className="ApexMk2-Bold">50+</div>
                  <div className="text-xl opacity-80">Concepts built into products</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <span>🎯</span>
                <div>
                  <div className="ApexMk2-Bold ">7+</div>
                  <div className="text-xl opacity-80">Startups that have raised capital, exited, or are currently generating revenue.</div>
                </div>
              </li>
            </ul>
          </div>
        </Card>

        <Card className="col-span-2" id="newsletter-signup">
          <h1 className="text-[#2c5e9a] ApexMk2-Bold text-2xl">What We Do</h1>
          <p className="text-[#2c5e9a] font-light text-xl mt-4">
            <ul className="list-none space-y-8">
              <li className="flex items-center gap-2">
                <span>🎓</span> Workshops & Skill-building Sessions
              </li>
              <li className="flex items-center gap-2">
                <span>🎯</span> Startup Pitch Competitions
              </li>
              <li className="flex items-center gap-2">
                <span>🤝</span> Networking Events with Industry Leaders
              </li>
              <li className="flex items-center gap-2">
                <span>👥</span> Mentorship Programs
              </li>
              <li className="flex items-center gap-2">
                <span>💰</span> Access to Funding Opportunities
              </li>
            </ul>
          </p>
        </Card>

        <Card className="col-span-1">
          <h1 className="text-[#2c5e9a] ApexMk2-Bold text-2xl">Join Us</h1>
          <NewsletterSignup />
        </Card>

       
      </div>

    </main>
  );
}
