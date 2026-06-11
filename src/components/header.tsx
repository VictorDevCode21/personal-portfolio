/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import AnimatedText from './animated/animatedText'
import AnimatedText2 from './animated/animatedText2'
import SocialLinks from './socialLinks'

function Header() {
    return (
        <header
            id='home'
            className='w-full min-h-screen bg-cover bg-left-bottom flex items-center py-20 lg:py-0'
            style={{ backgroundImage: 'url(/images/wallpaper-5.jpg)' }}
        >
            <div className='w-full flex flex-col-reverse lg:flex-row items-center gap-12 px-6 sm:px-10 lg:px-20 xl:px-32'>
                <div className='w-full lg:w-1/2 flex flex-col items-start'>
                    <AnimatedText text='I am Victor Rivas' />
                    <AnimatedText2 text="Passionate Full-Stack web developer with a knack for innovation.
                    I'm dedicated to crafting seamless, user-centric web solutions. With a competitive spirit and a commitment to continuous learning." />
                    <div className='pt-8'>
                        <SocialLinks />
                    </div>
                    <div className='pt-8'>
                        <a
                            href='/pdf/Victor_Rivas_Resume1.pdf'
                            download='Victor_Rivas_Resume1.pdf'
                            className='inline-block text-white font-semibold text-base sm:text-lg bg-light-blue
                                px-4 py-1 rounded-full transition-transform duration-300 hover:scale-105'
                        >
                            Download my resume
                        </a>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <Image
                        className='w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto border-8 border-light-blue shadow-2xl shadow-light-blue'
                        src='/images/photo-003.JPG'
                        alt='Victor Rivas'
                        width={2440}
                        height={1980}
                        priority
                    />
                </div>
            </div>
        </header>
    )
}

export default Header
