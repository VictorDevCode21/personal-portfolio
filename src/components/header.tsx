/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import {SiGmail, SiLinkedin, SiGithub} from 'react-icons/si'
import {RiTwitterXFill} from 'react-icons/ri'
import Image from 'next/image'
import AnimatedText from './animated/animatedText'
import AnimatedText2 from './animated/animatedText2'

function Header() {
    return (
        <header id='home' className='w-full h-screen' style={{backgroundImage: 'url(/images/wallpaper-5.jpg)', backgroundSize: 'cover'}}>
            <div className='flex h-full w-full '>
                <div className='w-1/2 h-full flex flex-col items-start justify-center pr-20 '>
                    <AnimatedText text='I am Victor Rivas' />
                    <AnimatedText2 text="Passionate Full-Stack web developer with a knack for innovation. 
                    I'm dedicated to crafting seamless, user-centric web solutions. With a competitive spirit and a commitment to continuous learning." />
                    <div className='flex pl-32 justify-between w-96 pt-6'>
                        <Link href="https://www.linkedin.com/in/victor-rivas-2a146328b/">
                            <button className='p-2 rounded-full bg-transparent border-light-blue border-2 text-light-blue hover:bg-light-blue hover:text-black'>
                                <SiLinkedin size={20}/>
                            </button>
                        </Link>
                        <Link href="https://github.com/VictorDevCode21">
                            <button className='p-2 rounded-full bg-transparent border-light-blue border-2 text-light-blue hover:bg-light-blue hover:text-black'>
                                <SiGithub size={20}/>
                            </button>
                        </Link>
                        <Link href="https://twitter.com/">
                            <button className='p-2 rounded-full bg-transparent border-light-blue border-2 text-light-blue hover:bg-light-blue hover:text-black'>
                                <RiTwitterXFill size={20}/>
                            </button>
                        </Link>
                        <a href="mailto:victorrivaswebdev@gmail.com">
                            <button className='p-2 rounded-full bg-transparent border-light-blue border-2 text-light-blue hover:bg-light-blue hover:text-black'>
                                <SiGmail  size={20}/>
                            </button>
                        </a>
                    </div>
                    <div className='w-full flex pl-32 pt-8 '>
                        <button className='text-white font-semibold text-lg bg-light-blue px-4 rounded-full'>Download my resume</button>
                    </div>
                </div>
                <div className='w-1/2 h-full flex items-center justify-center pb-20 '>
                    <Image className='w-80 h-80 border-8 border-light-blue rounded-full ' src='/images/photo-003.JPG' alt="holi" width={2440} height={1980} />
                </div>
            </div>
        </header>
    )
}

export default Header