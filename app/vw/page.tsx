'use client'
import React, { useEffect } from 'react'
import Image from 'next/image';
import uxIcon from './ux.png'
import codeIcon from './code.png'
import marketing from './marketing.png'
import pitching from './pitching.png'
import ventureWeekendFlyer from '../events/venture-weekend.jpg'
import showcaseFlyer from '../events/venture-weekend-startup-showcase.png'
import { VscTriangleRight } from "react-icons/vsc";
import ventureWeekendLogo from './venture-weekend-logo.png'
import mikeAbbott from './mike-abbott.png'
import { FaCircleExclamation } from "react-icons/fa6";

function VentureWeekend() {

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.setAttribute('data-theme', 'synthwave');
    }
  }, []);

  return (
    <div className='p-10'>
      <Image className='mx-auto mb-12' src={ventureWeekendLogo} alt='venture weekend'></Image>
      <a href='https://forms.gle/wL4aNiZv875HszhUA' target='_blank' className="btn-block btn text-white bg-gradient-to-r from-[#F97316] to-purple-500 float-right mt-10 mb-20">Register</a>
        
      <div>
          <h2 className='text-2xl font-bold text-[#ff8170]'>Meet students building startups, level up your skillset, win prizes</h2>
          <br />
          <p className="text-lg mb-8 text-white">
            Virginia Tech's Entrepreneurship Club is hosting Venture Weekend from April 19th to the 21st. 
            This event is open to all students and will be a great opportunity to learn about entrepreneurship and 
            meet other students interested in startups. Venture Weekend will feature a series of workshops, activities,
            and a showcase where students will present their startups and the progress they've been making.
          </p>


          <h2 className="text-2xl text-[#F78B50] font-bold mt-10 mb-6">Location: Apex Center</h2>
          <div className="font-semibold text-lg text-white">432 N Main St #200, Blacksburg, VA 24060</div>

          <div className='border-2 border-secondary rounded-lg mt-10'>
            <h2 className="text-2xl text-secondary font-bold mt-6 mx-auto w-fit">Friday April 19th: </h2>
            <div className="text-2xl font-bold text-secondary w-fit mx-auto mt-2">12pm</div>
            <Image className='lg:w-1/4 rounded-full border-purple-500 border-8 mx-auto my-10' src={mikeAbbott} alt='Mike Abbott'></Image>

            <p className="text-lg mb-8 text-white mx-auto w-1/2 text-center">
              Come meet our keynote speaker Mike Abbott. Mike has worked with Fortune 500 companies, startups, and government
              agencies. He will be joining us this Friday
              to discuss startups, marketing,
              and idea validation.
            </p>  
          </div>


          <div>

            <div className='mt-10 bg-gradient-to-b from-orange-400 to-purple-500 py-4'>
              <h2 className="text-2xl text-black font-bold mb-2 mx-auto w-fit">Saturday April 20th: </h2>

              <h3 className="text-2xl text-purple-900 font-bold mx-auto w-fit">Startup Showcase - 12pm</h3>
              <p className="text-lg mb-8 text-black mx-auto w-1/2 text-center mt-4">
                Meet the VT students
                building apps, startups,
                and businesses. 
              </p> 

              <div className="border-b border-2 border-black"></div>

              <h3 className="text-2xl text-purple-900 font-bold mx-auto w-fit mt-10">UI / UX Design Workshop - 2pm</h3>
              <p className="text-lg mb-8 text-black mx-auto w-1/2 text-center mt-4">
                Learn the skills and tools to design apps and websites like a professional.
              </p>

              <div className="border-b border-2 border-black"></div>

              <h3 className="text-2xl text-purple-900 font-bold mx-auto w-fit mt-10">Full Stack Development Workshop - 2pm</h3>
              <p className="text-lg mb-8 text-black mx-auto w-1/2 text-center mt-4">
                Learn high value skills to code an app from scratch and level up your resume! 
                <div className='text-center items-center flex mx-auto w-fit mt-4'>
                  <FaCircleExclamation className='text-2xl' />
                  <span className='ml-3 text-lg font-bold'>NO CODING EXPERIENCE REQUIRED</span>
                </div>
              </p>

            </div>

          </div>

          <br />

          <h3 className="text-lg text-secondary font-bold">Saturday April 20th:</h3>
          <div className="text-white my-3 font-semibold flex items-center"> 
            <VscTriangleRight className='text-lg'/> 
            Startup Showcase 12pm
          </div>
          <div className="text-white my-3 font-semibold flex items-center"> 
            <VscTriangleRight className='text-lg'/> 
            UX Design Workshop 2pm
          </div>
          <div className="text-white my-3 font-semibold flex items-center"> 
            <VscTriangleRight className='text-lg'/> 
            Full Stack Coding Workshop 3:30pm
          </div>
          <br />

          <h3 className="text-lg text-secondary font-bold">Sunday April 21st: </h3>

          <div className="text-white my-3 font-semibold flex items-center"> 
            <VscTriangleRight className='text-lg'/> 
            Marketing Workshop 12pm
          </div>
          
          <div className="text-white my-3 font-semibold flex items-center"> 
            <VscTriangleRight className='text-lg'/> 
            Pitching Workshop 1pm
          </div>
          
          <div className="text-white my-3 font-semibold flex items-center"> 
            <VscTriangleRight className='text-lg'/> 
            Pitch Competition 2pm
          </div>
          
          <div className="text-white my-3 font-semibold flex items-center"> 
            <VscTriangleRight className='text-lg'/> 
            Distribute Prizes 4pm
          </div>
          

            
        </div>
      <div className="lg:grid lg:grid-cols-2">

        {/* <div className='lg:w-[45%]'>
          <div className='float-right lg:flex'>
            <Image className='float-right mb-10 lg:mr-10' src={ventureWeekendFlyer} alt={''}></Image>
            <Image className='float-right mb-10 lg:mr-10' src={showcaseFlyer} alt={''}></Image>
          </div>
        </div> */}

        

      </div>

    </div>
  )
}

export default VentureWeekend