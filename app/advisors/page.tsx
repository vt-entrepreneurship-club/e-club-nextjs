import React from "react";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/logo.svg";

const ADVISORS = [
  {
    name: "Christopher Courtney",
    image: "/advisor-photos/chris.png",
    title: "Associate Professor / Pamplin College of Business",
    linkedin: ``,
    bio: `With over two decades of experience in entrepreneurship, strategy, and teaching, Chris is a Collegiate Associate Professor at Virginia Tech’s Pamplin College of Business. He teaches innovation and entrepreneurship with a passion that’s earned him top marks from students and peers alike.\n\nBefore entering academia, Chris founded and led We Sell Returns, a logistics and e-commerce company serving major retailers. His research explores crowdfunding, social ventures, and open innovation, with work published in Entrepreneurship Theory & Practice and featured by Forbes and Entrepreneur.\n\nChris is also active in the entrepreneurial ecosystem—consulting for the Kauffman Foundation, advising economic development initiatives, and supporting nonprofits like the March of Dimes and Women & Children’s Hospital of Buffalo.`,
  },
  {
    name: "Bob Summers",
    image: "/advisor-photos/summers.png",
    title: "CEO / Goodcall",
    linkedin: "",
    bio: `With over 20 years of experience in engineering, product, and business leadership, Bob is the CEO and founder of Goodcall, a company that helps business grow with accessible AI. Goodcall was founded Googles Area120 as CallJoy in 2018 and worked with Duplex, Dialogflow, and BERT.\n\nHe is passionate about building practical applications with cutting edge technologies, making complex tech accessible to everyone. His career spans SMB, defense and enterprise applications of computer vision, conversational AI, machine learning and broadband: touching tens of billions of users globally.\n\nBob is also an active contributor to the entrepreneurial community helping 60+ startups, founding an angel network, a co-working space (Techpad: Now VT Entrepreneurship Center), and improving broadband access in Blacksburg, Virginia a rural college town & home of the Hokies.`,
  },
  {
    name: "John Hagy",
    image: "/advisor-photos/hagy.png",
    title: "Director / RAMP",
    linkedin: ``,
    bio: `John Hagy is the Executive Director of RAMP, a regional startup accelerator supporting tech and life science founders in Southwest Virginia. He brings a strong track record in early-stage venture development, having previously led the Carolina Angel Network at UNC, where he helped startups secure capital and connect with experienced investors.\n\nJohn’s entrepreneurial background includes leading business development at a geospatial intelligence startup and advising founders on commercialization, fundraising, and growth strategy. At RAMP, he designs and delivers equity-free accelerator programs that equip founders with the tools and mentorship needed to scale.\n\nA Roanoke native, John is passionate about building sustainable startup ecosystems and helping entrepreneurs turn bold ideas into thriving ventures.`,
  },
  {
    name: "Glenn Feit",
    image: "/advisor-photos/glenn.png",
    title: "Product Manager / LinkedIn",
    linkedin: "",
    bio: `Glenn Feit is a startup founder, product strategist, and mentor with deep ties to Virginia Tech’s entrepreneurial ecosystem. He co-founded QuickTech Medical (later Radian Health), leading the venture to win Virginia Tech’s Apex Entrepreneurial Challenge and pitch internationally in Bangkok.\n\nA 2020 graduate in Management (EIT), Glenn is the former President of Entrepreneurship Club (E’Club), where he helped launch a student-led co-working space and expanded startup programming. He now serves on the Pamplin Management Dept. Advisory Board providing feedback on their offerings and enriching the entrepreneurial ecosystem.\n\nCurrently, Glenn works in product management at LinkedIn. He’s passionate about helping entrepreneurs turn bold ideas into real-world ventures, and continues to mentor the next generation of builders through hands-on guidance and strategic insight.`,
  },
];

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-16">
      <div className="flex flex-col items-center mb-10 mt-20">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-gray-100 to-gray-400 ApexMk2-Bold">
          Meet the Advisors
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {ADVISORS.map((advisor) => (
          <div
            key={advisor.name}
            className="rounded-2xl border-1 border-white/30 bg-white/5 shadow-lg flex flex-row p-6 min-h-[220px]"
          >
            {/* Left: Image and Name/Title */}
            <div className="flex flex-col items-start mr-6 min-w-[120px] max-w-1/3">
              <Image
                src={advisor.image}
                alt={advisor.name}
                width={200}
                height={400}
                className="rounded-xl"
                style={{ objectFit: "cover" }}
              />

              <div className="mt-4 flex flex-col">
                <span className="text-white font-semibold italic text-base leading-tight mb-1">
                  {advisor.name}
                </span>
                <span className="text-white text-sm italic mb-2">
                  {advisor.title}
                </span>
                {advisor.linkedin && (
                  <a
                    href={advisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-1"
                  >
                    <BsLinkedin className="text-white text-lg" />
                  </a>
                )}
              </div>
            </div>
            {/* Right: Bio */}
            <div className="flex-1 flex flex-col">
              <span className="text-white/90 text-sm leading-relaxed whitespace-pre-line">
                {advisor.bio}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
