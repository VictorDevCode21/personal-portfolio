import React from 'react'
import SocialLinks from './socialLinks'

function Footer() {
  return (
    <footer
      id='contact'
      className='w-full flex flex-col sm:flex-row items-center justify-between gap-6 bg-blue-bg border-t-2 border-light-blue px-6 sm:px-10 lg:px-20 py-6'
    >
      <div className='flex items-center'>
        <p className='text-white font-bold text-2xl'>Contact</p>
        <p className='text-light-blue font-bold text-2xl pl-2'>Me</p>
      </div>
      <SocialLinks />
    </footer>
  )
}

export default Footer
