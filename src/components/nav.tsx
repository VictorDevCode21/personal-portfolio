import { Link, animateScroll as scroll } from "react-scroll";




function Nav() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <nav className='w-full h-20 flex bg-blue-bg sticky top-0'>
      <div className='w-1/3 h-full flex justify-center items-center'>
        <p className='text-white font-bold text-2xl'>VR</p>
        <p className='text-light-blue font-bold text-2xl'>Dev</p>
      </div>
      <div className='w-2/3 h-full flex justify-between items-center pr-24 pl-24'>
        <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="home" smooth={true} duration={500}>Home</Link>
        <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="about" smooth={true} duration={500}>About</Link>
        <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="skills" smooth={true} duration={500}>Skills</Link>
        <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="projects" smooth={true} duration={500}>Projects</Link>
        <Link className='text-white font-medium hover:text-light-blue cursor-pointer' to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
    </nav>
  )
}

export default Nav