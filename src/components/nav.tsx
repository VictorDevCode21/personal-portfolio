import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";

const NAV_LINKS = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

function Nav() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className='w-full h-20 flex items-center justify-between bg-blue-bg sticky top-0 z-50 px-6 sm:px-10 lg:px-20'>
      <div className='flex items-center'>
        <p className='text-white font-bold text-2xl'>VR</p>
        <p className='text-light-blue font-bold text-2xl'>Dev</p>
      </div>
      <div className='hidden lg:flex items-center gap-10'>
        {NAV_LINKS.map(({ label, to }) => (
          <Link
            key={to}
            className='text-white font-medium hover:text-light-blue cursor-pointer transition-colors duration-300'
            to={to}
            smooth={true}
            duration={500}
          >
            {label}
          </Link>
        ))}
      </div>
      <button
        className='lg:hidden text-white'
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>
      {open && (
        <div className='lg:hidden absolute top-20 left-0 w-full flex flex-col gap-4 bg-blue-bg border-b-2 border-light-blue px-6 py-6 shadow-lg'>
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              className='text-white font-medium hover:text-light-blue cursor-pointer transition-colors duration-300'
              to={to}
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Nav
