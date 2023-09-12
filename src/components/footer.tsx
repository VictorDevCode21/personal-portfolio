import React from 'react'
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si'
import { RiTwitterXFill } from 'react-icons/ri'
import Link from 'next/link'

function Footer() {
  return (
    <footer id='contact' className='w-full h-20 flex bg-blue-bg border-t-2 border-light-blue'>
      <div className='w-1/3 h-full flex justify-center items-center'>
        <p className='text-white font-bold text-2xl'>Contact</p>
        <p className='text-light-blue font-bold text-2xl pl-2'>Me</p>
      </div>
      <div className='w-2/3 h-full flex justify-between items-center pr-40 pl-40'>
        <Link href="https://www.linkedin.com/in/victor-rivas-2a146328b/">
          <button className='p-2 rounded-full bg-transparent border-light-blue border-2 text-light-blue hover:bg-light-blue hover:text-black'>
            <SiLinkedin size={20} />
          </button>
        </Link>
        <Link href="https://github.com/VictorDevCode21">
          <button className='p-2 rounded-full bg-transparent border-light-blue border-2 text-light-blue hover:bg-light-blue hover:text-black'>
            <SiGithub size={20} />
          </button>
        </Link>
        <a href="mailto:victorrivaswebdev@gmail.com">
          <button className='p-2 rounded-full bg-transparent border-light-blue border-2 text-light-blue hover:bg-light-blue hover:text-black'>
            <SiGmail size={20} />
          </button>
        </a>
        <Link href="https://twitter.com/">
          <button className='p-2 rounded-full bg-transparent border-light-blue border-2 text-light-blue hover:bg-light-blue hover:text-black'>
            <RiTwitterXFill size={20} />
          </button>
        </Link>
      </div>
    </footer>
  )
}

export default Footer