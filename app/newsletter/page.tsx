import React from 'react'
import NewsletterSignup from '../components/NewsletterSignup'

function page() {
  return (
    <div className='h-screen'>
        <h1 className="text-3xl text-primary mx-auto w-fit">Join Our Newsletter</h1>
        <div className="mx-auto lg:w-1/2 mt-10">
            <p className='mx-auto text-center'>Stay up to date on all our events and information.</p>
            <NewsletterSignup></NewsletterSignup>
        </div>
    </div>
  )
}

export default page