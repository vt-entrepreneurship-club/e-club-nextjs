"use client"

import type React from "react"
import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-200 to-[#61A6FB] px-4 pt-32 pb-20 font-serif ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="mx-auto w-10/12">
          <h1 className="text-4xl ApexMk2-Bold mb-6 text-[#2c5e9a] text-left">About Us</h1>
          <div className="rounded-2xl border-2 border-[#2c5e9a] p-6 md:p-10 mb-16 bg-transparent w-full">
            <p className="text-[#2c5e9a] font-light text-lg md:text-xl text-left">
              Entrepreneurship Club at Virginia Tech empowers students by fostering a supportive ecosystem of innovation, skill development, and cross-disciplinary collaboration. Through hands-on experiences and access to institutional and industry resources, E‑Club teaches the application of an entrepreneurial mindset and prepares students to lead in rapidly evolving industries.
            </p>
          </div>
        </section>

        {/* Experience Entrepreneurship Club */}
        <section className="mx-auto w-10/12 mb-12">
          <h2 className="text-2xl md:text-3xl ApexMk2-Bold mb-4 text-[#2c5e9a] text-left">Experience Entrepreneurship Club</h2>
          {/* Startup Sprint */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl ApexMk2-Bold mb-2 text-[#2c5e9a]">Startup Sprint</h3>
            <p className="text-[#2c5e9a] font-light text-lg md:text-xl">
              Startup Sprint is E‑Club’s flagship weekend immersion program, where students build and pitch a startup from scratch in just 48 hours. Sponsored by industry leaders and beloved by Virginia Tech’s entrepreneurial community, Startup Sprint gives every student the opportunity to showcase their capabilities and gain access to resources—no prior experience required. The event is powered by mentorship, peer collaboration, and hands-on execution.
            </p>
            {/* Image idea: groups collaborating during last year’s, whiteboarding or presenting final pitches. */}
          </div>
          {/* Workshops & Speaker Events */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl ApexMk2-Bold mb-2 text-[#2c5e9a]">Workshops & Speaker Events</h3>
            <p className="text-[#2c5e9a] font-light text-lg md:text-xl">
              Through hands-on workshops and high-profile speakers from industry, E‑Club equips students with tools for personal and professional growth. Topics include opportunity recognition, go-to-market strategy, business modeling, and investor readiness—delivered by experienced entrepreneurs and Virginia Tech alumni.
            </p>
            {/* Image Idea: guest speaker addressing students or students participating in a workshop session. */}
            {/* Could insert captions “Interactive workshop hosted by E‑Club and partners” */}
          </div>
          {/* Pitch Competitions */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl ApexMk2-Bold mb-2 text-[#2c5e9a]">Pitch Competitions</h3>
            <p className="text-[#2c5e9a] font-light text-lg md:text-xl">
              E‑Club organizes competitive pitch events, distributing over <span className="font-bold">[insert our past amount]</span> in prize funding to student founders. These competitions provide a platform for students to refine business ideas, gain feedback from seasoned judges, and secure early-stage validation and resources.
            </p>
            {/* Image Idea: students presenting on stage during a pitch night or holding large checks post-event. */}
            {/* “Finalists presenting at an E‑Club pitch competition” */}
          </div>
          {/* Student Entrepreneurship Expositions */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl ApexMk2-Bold mb-2 text-[#2c5e9a]">Student Entrepreneurship Expositions</h3>
            <p className="text-[#2c5e9a] font-light text-lg md:text-xl">
              E‑Club regularly hosts campus expos where Virginia Tech students present their ventures, showcase prototypes, and connect with peers, faculty, and potential collaborators. These events serve to highlight the depth & diversity of student-led innovation across campus.
            </p>
            {/* Image: students at last year’s expo */}
          </div>
        </section>

        {/* Impact */}
        <section className="mx-auto w-10/12 mb-12">
          <h2 className="text-2xl md:text-3xl ApexMk2-Bold mb-4 text-[#2c5e9a] text-left">Impact</h2>
          <ul className="list-disc pl-6 text-[#2c5e9a] font-light text-lg md:text-xl">
            <li><span className="font-bold">[insert number]</span> in funding to student-led startups</li>
            <li><span className="font-bold">[insert number]</span> speaker events and panels</li>
            <li><span className="font-bold">[insert number]</span> student founders and early-stage ventures</li>
          </ul>
          <p className="text-[#2c5e9a] font-light text-lg md:text-xl mt-2">
            These initiatives continue to position the club as a key driver of innovation and entrepreneurship on campus.
          </p>
        </section>

        {/* Get Involved */}
        <section className="mx-auto w-10/12 mb-12">
          <h2 className="text-2xl md:text-3xl ApexMk2-Bold mb-4 text-[#2c5e9a] text-left">Get Involved</h2>
          <p className="text-[#2c5e9a] font-light text-lg md:text-xl">
            Students interested in entrepreneurship, innovation, or venture creation are encouraged to engage with E‑Club. Opportunities include joining the general body, becoming a dues-paying member, subscribing to the newsletter, or attending free workshops and speaker events open to the Virginia Tech community. Every student is also encouraged to participate in E‑Club’s flagship program—the Startup Sprint weekend experience—to gain hands-on experience and connect with mentors, funding, and fellow innovators. Whether just getting started or actively building a venture, there’s a place for every student within E‑Club.
          </p>
        </section>

        {/* Why Join */}
        <section className="mx-auto w-10/12 mb-12">
          <h2 className="text-2xl md:text-3xl ApexMk2-Bold mb-4 text-[#2c5e9a] text-left">Why Join</h2>
          <ul className="list-disc pl-6 text-[#2c5e9a] font-light text-lg md:text-xl">
            <li>Structured exposure to startup development</li>
            <li>Competitive funding opportunities</li>
            <li>A dynamic network of peers, mentors, and alumni</li>
            <li>Connections to university resources and external partners</li>
          </ul>
          <p className="text-[#2c5e9a] font-light text-lg md:text-xl mt-2">
            The club welcomes members from all colleges and majors at Virginia Tech, creating a multidisciplinary space for ideation, experimentation, and growth.
          </p>
        </section>

        {/* Academic & Industry Collaboration */}
        <section className="mx-auto w-10/12 mb-12">
          <h2 className="text-2xl md:text-3xl ApexMk2-Bold mb-4 text-[#2c5e9a] text-left">Academic & Industry Collaboration</h2>
          <p className="text-[#2c5e9a] font-light text-lg md:text-xl">
            E‑Club works in close partnership with the Pamplin College of Business, the Department of Management, and the Apex Center for Entrepreneurs to provide students with the resources, mentorship, and platforms needed to turn ideas into ventures. These collaborations support the application of students' classroom learning to real-world challenges, empowering students to bring innovative solutions to life.
          </p>
          <p className="text-[#2c5e9a] font-light text-lg md:text-xl mt-2">
            In addition to academic support, E‑Club is backed by a growing network of industry partners and sponsors. These organizations contribute through event sponsorship, mentorship, judging, and direct engagement with student founders.
          </p>
        </section>
      </div>
    </main>
  );
}
