import React from 'react'
import Image from 'next/image'
import logo from "../../../public/Startup Sprint 2025 Logo.png"
import CountdownTimer from '../../../components/CountdownTimer'

function page() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-950 flex items-center justify-center p-4'>
      <div className='text-center space-y-6 mt-40'>
        
        <Image src={logo} alt="Startup Sprint 25" width={1000} height={1000} className='mx-auto w-[90%]' />
        
        <p className='text-xl text-gray-300 max-w-2xl text-center mx-auto'>
          Virginia Tech's premier startup competition.
        </p>

        {/* <div className='mt'>
          <CountdownTimer 
            eventDate="2025-09-25T18:00:00" 
            className="bg-violet-500/10 backdrop-blur-sm border-violet-500/30 text-violet-300"
          />
        </div> */}


        <div className='animate-pulse inline-block'>
          <div className='bg-violet-500/20 backdrop-blur-sm border border-violet-500/30 rounded-lg px-6 py-3'>
            <span className='text-violet-300 font-medium'>Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
