'use client'
import React, { useEffect } from 'react'
import Image from 'next/image';
import uxIcon from './ux.png'
import codeIcon from './code.png'
import marketing from './marketing.png'
import pitching from './pitching.png'
import ventureWeekendFlyer from '../events/venture-weekend.jpg'
import showcaseFlyer from '../events/venture-weekend-startup-showcase.png'

const workshops = [
    {
        title: 'UI/UX Design',
        description: 'Gain the skills to design apps and websites with professional tools. Learn the importance of user experience and how to design a user-friendly interface.',
        icon: uxIcon
    },
    {
        title: 'Full Stack Development',
        description: 'Learn how to build a web application from scratch. This workshop will cover front-end and back-end development, databases, and APIs. No prior experience required.',
        icon: codeIcon
    },
    {
        title: 'Marketing',
        description: 'Learn how to market your startup and reach your target audience. This workshop will cover social media marketing, content creation, and SEO.',
        icon: marketing
    },
    {
        title: 'Pitching and Public Speaking',
        description: 'Learn how to present your ideas with confidence. This workshop will cover public speaking, storytelling, and how to pitch your startup to investors.',
        icon: pitching
    }
]

function VentureWeekend() {

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.setAttribute('data-theme', 'synthwave');
    }
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-purple-500">Venture Weekend</h1>


      <div className="lg:grid lg:grid-cols-2">

        <div className='lg:w-[45%]'>
          <div className='float-right lg:flex'>
            <Image className='float-right mb-10 lg:mr-10' src={ventureWeekendFlyer} alt={''}></Image>
            <Image className='float-right mb-10 lg:mr-10' src={showcaseFlyer} alt={''}></Image>
          </div>
        </div>

        <div>
          <h2 className='text-xl font-bold text-[#D946EF]'>Meet students building startups, level up your skillset, win prizes</h2>
          <br />
          <p className="text-lg mb-8">
            Virginia Tech's Entrepreneurship Club is hosting Venture Weekend from April 19th to the 21st. 
            This event is open to all students and will be a great opportunity to learn about entrepreneurship and 
            meet other students interested in startups. Venture Weekend will feature a series of workshops, activities,
            and demos where students will present their startups and the progress they've been making.
          </p>

          <h3 className="text-xl text-blue-300 font-bold my-10">Friday April 19th - Sunday April 21st</h3>

          {/* <h3 className="text-xl font-bold my-10 text-accent">Itinerary</h3> */}
            
            <a href='https://forms.gle/wL4aNiZv875HszhUA' target='_blank' className="btn-block btn text-black bg-gradient-to-r from-[#F97316] to-purple-500 float-right mt-10 mb-20">Register</a>
        </div>

      </div>

    </div>
  )
}

export default VentureWeekend