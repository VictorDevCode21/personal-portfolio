import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState<boolean>(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <nav className='w-full h-20 lg:flex xs:flex bg-blue-bg sticky top-0 '>
      <div className='w-1/3 h-full flex justify-center items-center'>
        <p className='text-white font-bold text-2xl'>VR</p>
        <p className='text-light-blue font-bold text-2xl'>Dev</p>
      </div>
      <div className='w-2/3 h-full lg:flex justify-between items-center pr-24 pl-24 xs:hidden'>
        <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="home" smooth={true} duration={500}>Home</Link>
        <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="about" smooth={true} duration={500}>About</Link>
        <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="skills" smooth={true} duration={500}>Skills</Link>
        <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="projects" smooth={true} duration={500}>Projects</Link>
        <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
      <div className="w-2/3 h-full xs:flex lg:hidden items-center justify-end pr-10">
        {open ? (
          <button className="text-white " onClick={handleClick}>
            <AiOutlineClose size={20} />
          </button>
        ) : (
          <button className="text-white " onClick={handleClick}>
            <AiOutlineMenu size={20} />
          </button>
        )}
      </div>
      {open && (
        <div className="w-28 h-full flex flex-col absolute top-14 right-0 pl-8">
          <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="home" smooth={true} duration={500}>Home</Link>
          <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="about" smooth={true} duration={500}>About</Link>
          <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="skills" smooth={true} duration={500}>Skills</Link>
          <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="projectsm" smooth={true} duration={500}>Projects</Link>
          <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="contact" smooth={true} duration={500}>Contact</Link>
        </div>
      )}
    </nav>
  )
}

export default Nav