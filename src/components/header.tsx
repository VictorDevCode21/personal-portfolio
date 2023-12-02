/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si'
import { RiTwitterXFill } from 'react-icons/ri'
import Image from 'next/image'
import AnimatedText from './animated/animatedText'
import AnimatedText2 from './animated/animatedText2'

function Header() {
    const handleDownloadResume = () => {
        // Replace '/path/to/resume.pdf' with the actual path to your resume PDF
        const resumePath = '/pdf/Victor_Rivas_-_Full_Stack_Developer.pdf';

        // Create an anchor element
        const link = document.createElement('a');

        // Set the href attribute to the path of your resume
        link.href = resumePath;

        // Set the download attribute to specify the default filename
        link.download = 'Victor_Rivas_Resume.pdf';

        // Append the anchor element to the document
        document.body.appendChild(link);

        // Trigger a click on the anchor element to start the download
        link.click();

        // Remove the anchor element from the document
        document.body.removeChild(link);
    };

    return (
        <header id='home' className='w-full lg:h-screen xs:h-full lg:bg-left-bottom lg:pt-0 lg:pb-0 xs:pt-20 xs:pb-20 ' style={{ backgroundImage: 'url(/images/wallpaper-5.jpg)' }}>
            <div className='flex h-full w-full xs:flex-col-reverse lg:flex-row'>
                <div className='lg:w-1/2 lg:h-full flex flex-col lg:items-start lg:justify-center lg:pl-0 lg:pb-0 lg:pr-20 xs:items-start xs:pl-4 xs:pb-10 '>
                    <AnimatedText text='I am Victor Rivas' />
                    <AnimatedText2 text="Passionate Full-Stack web developer with a knack for innovation. 
                    I'm dedicated to crafting seamless, user-centric web solutions. With a competitive spirit and a commitment to continuous learning." />
                    <div className='flex lg:pl-32 lg:pr-0 justify-between w-96 lg:pt-6 xs:pt-8 xs:pl-4 xs:pr-16'>
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
                        <Link href="https://twitter.com/VRWEBDEV">
                            <button className='p-2 rounded-full bg-transparent border-light-blue border-2 text-light-blue hover:bg-light-blue hover:text-black'>
                                <RiTwitterXFill size={20} />
                            </button>
                        </Link>
                        <a href="mailto:victorrivaswebdev@gmail.com">
                            <button className='p-2 rounded-full bg-transparent border-light-blue border-2 text-light-blue hover:bg-light-blue hover:text-black'>
                                <SiGmail size={20} />
                            </button>
                        </a>
                    </div>
                    <div className='w-full flex lg:pl-32 pt-8 xs:pl-4 '>
                        <button className='text-white font-semibold text-lg bg-light-blue px-4 rounded-full' onClick={handleDownloadResume}>Download my resume</button>
                    </div>
                </div>
                <div className='lg:w-1/2 lg:h-full flex lg:items-center lg:justify-center lg:pb-20 lg:pt-0 xs:items-start xs:justify-center xs:pt-10 xs:pb-10 '>
                    <Image className='lg:w-96 lg:h-80 xs:w-80 xs:h-72 border-8 border-light-blue shadow-2xl shadow-light-blue ' src='/images/photo-003.JPG' alt="holi" width={2440} height={1980} />
                </div>
            </div>
        </header>
    )
}

export default Header