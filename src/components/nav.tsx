import React from 'react'

function Nav() {
  return (
    <nav className='w-full h-20 flex bg-dark-blue sticky top-0'>
        <div className='w-1/3 h-full flex justify-center items-center'>
            <p className='text-white font-bold text-2xl'>VR</p>
            <p className='text-light-blue font-bold text-2xl'>Dev</p>
        </div>
        <div className='w-2/3 h-full flex justify-between items-center pr-24 pl-24'>
            <button className='text-white font-medium'>Home</button>
            <button className='text-white font-medium'>About</button>
            <button className='text-white font-medium'>Skills</button>
            <button className='text-white font-medium'>Projects</button>
            <button className='text-white font-medium'>Contact</button>
        </div>
    </nav>
  )
}

export default Nav