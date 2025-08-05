"use client"
import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 px-4 pt-32 pb-20 font-serif">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-gray-100 to-gray-400 ApexMk2-Bold mb-6">
            About E‑Club
          </h1>
          <div className="rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm p-8 max-w-4xl mx-auto">
            <p className="text-white/90 text-xl leading-relaxed font-serif text-left">
              Entrepreneurship Club at Virginia Tech empowers students through innovation, skill development, and
              cross-disciplinary collaboration. We provide hands-on experiences and access to resources that prepare
              students to lead in rapidly evolving industries.
            </p>
          </div>
        </section>

        {/* Featured Video */}
        <section className="mb-16">
          <div className="rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm p-6">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-gray-100 to-gray-400 ApexMk2-Bold mb-6 text-center">
              See E‑Club in Action
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-700/50 flex items-center justify-center">
              {/* use actual YouTube embed */}
              <div className="text-white/60 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-lg">Startup Sprint 2024 Highlights</p>
                <p className="text-sm text-white/40">Click to watch our flagship event</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-gray-100 to-gray-400 ApexMk2-Bold mb-8 text-center">
            What We Do
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Startup Sprint */}
            <div className="rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm p-6">
              <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-700/30">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="image"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 ApexMk2-Bold">Startup Sprint</h3>
              <p className="text-white/80 leading-relaxed font-serif">
                Our flagship 48-hour immersion program where students build and pitch startups from scratch. No
                experience required—just bring your passion for innovation.
              </p>
            </div>

            {/* Workshops & Speakers */}
            <div className="rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm p-6">
              <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-700/30">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="image"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 ApexMk2-Bold">Workshops & Speakers</h3>
              <p className="text-white/80 leading-relaxed font-serif">
                Learn from experienced entrepreneurs and VT alumni through hands-on workshops covering everything from
                ideation to investor readiness.
              </p>
            </div>

            {/* Pitch Competitions */}
            <div className="rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm p-6">
              <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-700/30">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="image"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 ApexMk2-Bold">Pitch Competitions</h3>
              <p className="text-white/80 leading-relaxed font-serif">
                Compete for funding while refining your business ideas and gaining feedback from seasoned judges and
                industry experts.
              </p>
            </div>

            {/* Student Expo */}
            <div className="rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm p-6">
              <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-700/30">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="image"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 ApexMk2-Bold">Campus Expos</h3>
              <p className="text-white/80 leading-relaxed font-serif">
                Showcase your ventures, connect with peers and faculty, and discover the diverse innovation happening
                across Virginia Tech.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="mb-16">
          <div className="rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm p-8">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-gray-100 to-gray-400 ApexMk2-Bold mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">$[X]K+</div>
                <div className="text-white/70">Funding to Student Startups</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">[X]+</div>
                <div className="text-white/70">Speaker Events & Panels</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">[X]+</div>
                <div className="text-white/70">Student Founders Supported</div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-gray-100 to-gray-400 ApexMk2-Bold mb-6">
                Get Involved
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/80 font-serif">Join our general body or become a dues-paying member</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/80 font-serif">Attend free workshops and speaker events</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/80 font-serif">Participate in Startup Sprint weekend experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/80 font-serif">Subscribe to our newsletter for updates</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-gray-100 to-gray-400 ApexMk2-Bold mb-6">
                Why Join E‑Club?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/80 font-serif">Structured exposure to startup development</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/80 font-serif">Competitive funding opportunities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/80 font-serif">Dynamic network of peers, mentors, and alumni</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/80 font-serif">Access to university and industry resources</p>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-6 italic font-serif">
                Open to all majors and colleges at Virginia Tech
              </p>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="mb-16">
          <div className="rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm p-8">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-gray-100 to-gray-400 ApexMk2-Bold mb-6 text-center">
              Our Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Academic Collaboration</h3>
                <p className="text-white/80 leading-relaxed font-serif">
                  We work closely with Pamplin College of Business, the Department of Management, and the Apex Center
                  for Entrepreneurs to provide students with comprehensive resources and mentorship.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Industry Partners</h3>
                <p className="text-white/80 leading-relaxed font-serif">
                  Our growing network of industry sponsors and partners contribute through event sponsorship,
                  mentorship, judging, and direct engagement with student founders.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}