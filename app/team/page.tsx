import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import Image from 'next/image';

function page() {

    const TEAM = [
        
            
            {
              name: "Jeremiah Hohn",
              image: "/team-photos/jeremiah.png",
              title: "President",
              linkedin: ""
            },
            {
              name: "Nate Estrada",
              image: "/team-photos/nate.png",
              title: "Vice President",
              linkedin: ""
            },
            {
              name: "Ebenezer Zergabachew",
              image: "/team-photos/ebenezer.png",
              title: "Senior Advisor",
              linkedin: ""
            },
            {
              name: "Andrew Kim",
              image: "/team-photos/andrew.png",
              title: "Director of Technology & Data",
              linkedin: ""
            },
            {
              name: "Jaik Tom",
              image: "/team-photos/jaik.png",
              title: "Creative Lead",
              linkedin: ""
            },
            {
              name: "Nicholas Vo",
              image: "/team-photos/nick.png",
              title: "Media and Partnerships Lead",
              linkedin: ""
            },
            {
              name: "Ahmed Shousha",
              image: "/team-photos/ahmed.png",
              title: "Senior Tech and Innovation Coordinator",
              linkedin: ""
            },
            {
              name: "Vincent Nottoli",
              image: "/team-photos/vincent.png",
              title: "Senior Program Coordinator",
              linkedin: ""
            },
            {
              name: "Fiona Birnie",
              image: "/team-photos/fiona.png",
              title: "Program Coordinator",
              linkedin: ""
            },
            {
              name: "Carter Foster",
              image: "/team-photos/carter.png",
              title: "Tech and Innovation Coordinator",
              linkedin: ""
            },  
    ]
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 py-16'>
        
        <div className='flex flex-col items-center justify-center mt-20'>

            <h1 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-gray-100 to-gray-400 ApexMk2-Bold'>Meet the Team</h1>
            
            <div className='lg:grid lg:grid-cols-4 md:grid-cols-3 gap-3 md:mx-20'>
                {TEAM.map((member) => (
                    <div key={member.name} className='flex flex-col items-center justify-center my-10 h-[400px]'>
                        <Image src={member.image} alt={member.name} width={300} height={300} className='w-full md:saturate-50 hover:saturate-100 h-[300px] object-cover rounded-lg' />
                        <h2 className='text-white text-xl font-semibold mr-auto mt-3'>{member.name}</h2>
                        <div className="flex items-center w-10/12 justify-between gap-2 mx-auto mt-3">
                            <p className='text-gray-400'>{member.title}</p>
                            {/* <a href={member.linkedin} target='_blank' rel='noopener noreferrer'>
                                <BsLinkedin className='text-white' />
                            </a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default page
