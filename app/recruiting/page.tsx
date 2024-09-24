import React from "react";
import aws from '../assets/company logos/aws.png';
import bofa from '../assets/company logos/bofa.png';
import linkedin from '../assets/company logos/linkedin.png';
import cap1 from '../assets/company logos/cap1.png';
import kogi from '../assets/company logos/kogi.png';
import gartner from '../assets/company logos/gartner.png';
import Image from "next/image";
import NewsletterSignup from "../components/NewsletterSignup";

export const metadata = {
  title: "Join Our Team",
  description: "Recruitment page for the Entrepreneurship Club at Virginia Tech.",
};

const companyLogos = [
    cap1,
    kogi,
    linkedin,
    aws,
    bofa,
    gartner
]

const roles = [
  {
    title: "Digital Media Coordinator",
    description: `The Digital Media Coordinator is a vital part of our Marketing/Communications team, 
    playing a crucial role in enhancing our online presence and fostering community engagement. 
    This position offers flexible working hours, with a requirement to attend 1-2 meetings per week. 
    As a member of the E-Club leadership team, you will have numerous opportunities for enrichment, 
    allowing you to lead or contribute to various projects. Our structured hierarchy supports 
    upward mobility, offering clear paths towards executive positions. 
    If you want to join a small, kick-ass team who are trying 
    to build up the next generation of entrepreneurs, then read on.`,
    responsibilities: [
      "Capture high-quality photos and videos at events hosted by E-Club.",
      "Create and produce engaging short-form and long-form content for our social media platforms.",
      "Manage, fully or partially, our social media accounts to strengthen our online brand presence.",
      "Collaborate with other leadership team members to develop and execute exciting initiatives for our members.",
    ],
  },
  {
    title: "Project Manager",
    description: `The Project Manager is a pivotal member of our organization, 
    responsible for ensuring that our initiatives run smoothly and successfully. 
    This role is crucial to driving forward our mission to bring entrepreneurship to students. 
    From inception to execution, the project manager is tasked with making sure our initiatives 
    are of high quality and delivered in a timely manner. This is a logistically heavy role and
    requires a self-starter who can make a meaningful impact regardless of the task at hand.`,
    responsibilities: [
      "Attend all weekly meetings (1-2) and E-Club hosted events to ensure seamless execution and coordination.",
      "Collaborate with and support other teams in achieving their goals and completing tasks.",
      "Assist in the logistics and planning of events, ensuring all details are managed effectively.",
      "Address and resolve any loose ends or challenges that arise during projects.",
      "Strengthen existing partnerships and actively seek new collaborations that align with our mission.",
      "Innovate and propose new initiatives to foster entrepreneurship among students.",
    ],
  },
  {
    title: "Design and Branding Lead",
    description: `The Design and Branding Lead is the creative visionary within our organization, 
    responsible for shaping and elevating our brand's visual identity. This role requires a strong 
    background in graphic design and a passion for art and illustration.
    Our design lead will work closely with the marketing team in the production of content, as well
    as brand assets for our club, flagship events, and merchandise.
    `,
    responsibilities: [
      "Utilize Photoshop, Figma, and Illustrator to create high-quality designs for various platforms.",
      "Lead the design and development of the organization's website.",
      "Design digital assets for social media posts, ensuring consistency with our branding and messaging.",
      "Create unique and eye-catching designs for physical products, including stickers and shirts.",
      "Collaborate with the marketing and communications team to align design projects with broader organizational goals.",
      "Continuously innovate and refine our visual branding to keep it fresh, relevant, and impactful.",
    ],
  },
  {
    title: "Data and Technology Lead",
    description: `The Data and Technology Lead is a key technical role within our organization, 
    responsible for driving innovation through web development and data analysis. The ideal candidate has
    a strong background in front-end development with a keen eye for design, as well as experience in data analysis.
    This role is suited for those who are technologically adept, and have a passion for leveraging data to drive better
    decision making. The Data and Technology Lead will work closely with the marketing and design team in the development
    of our website, as well as the analysis of data to inform our strategic direction.
    `,
    responsibilities: [
      "Develop and maintain the organization's website using NextJS / ReactJS, and Tailwind CSS.",
      "Analyze data to extract actionable insights that support the organization's goals and objectives.",
      "Collaborate with other teams to integrate data-driven solutions into broader projects.",
      "Continuously monitor and optimize the performance of our digital initiatives.",
      "Stay current with emerging web technologies and data analysis tools.",
    ],
  },
];

const commonRequirements = [
  "Attend weekly meetings and participate in discussions.",
  "Commit to working 4-10 hours outside of meetings.",
  "Be present at E-Club hosted events.",
  "Demonstrate creativity, strong organizational skills, and the ability to take initiative.",
];



function RecruitmentPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl text-primary mb-10 font-bold mx-auto w-fit">Join Our Team</h1>

      <div className="p-4 lg:px-20 border border-red-400 rounded-lg mb-10 w-fit mx-auto">
        <div className="w-fit mx-auto text-red-400 font-medium text-xl text-center">
            Applications Close <span className="font-bold">Sunday October 6th</span>
        </div>
        <a className="btn btn-block mt-10 btn-primary text-base-100" target="_blank" href="https://forms.office.com/Pages/ResponsePage.aspx?id=hGiVYK0Q-kCGPU8yweOjeoKcEQH4rglImactQpeb1MRUMkNFRjJWOEoxMlNZUEJGSjJGUDBZN0Q1Qy4u">
            Apply Now
        </a>
      </div>

      <div className="mt-20 text-2xl text-secondary font-semibold mx-auto w-fit text-center">Our leadership members have 100% job placement.</div>

      <div className="mt-10 lg:mt-0 flex flex-col lg:flex-row items-center lg:justify-between w-fit mx-auto">
        {
            companyLogos.map((logo, index) => (
                <Image key={index} src={logo} alt="" className="w-40 mx-4 lg:mt-0 mt-4" />
            ))
        }
      </div>


      <div className="grid gap-10 lg:grid-cols-2 mt-10">
        {roles.map((role, index) => (
          <div key={index} className="bg-base-100 p-6 rounded-lg shadow-lg border border-cyan-300">
            <h2 className="text-2xl text-secondary mb-4">{role.title}</h2>
            <p className="mb-4">{role.description}</p>
            <h3 className="text-xl text-primary mb-2">Key Responsibilities:</h3>
            <ul className="list-disc list-inside mb-4">
              {role.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-base-100 p-6 rounded-lg shadow-lg mt-10">
        <h3 className="text-2xl text-secondary mb-4">Requirements</h3>
        <ul className="list-disc list-inside">
          {commonRequirements.map((requirement, idx) => (
            <li key={idx}>{requirement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecruitmentPage;
