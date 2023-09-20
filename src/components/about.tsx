/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'


function About() {
    return (
        <section id='about' className='w-full lg:h-screen xs:h-full flex lg:flex-row xs:flex-col items-center justify-center bg-blue-bg lg:pt-0 lg:pb-0 xs:pt-10 xs:pb-20 '>
            <div className='lg:w-1/2 lg:h-1/2 xs:w-full xs:h-1/2 lg:pl-20 lg:pr-20 lg:pt-0 flex xs:pl-8 xs:pr-8 xs:pt-20 xs:items-center justify-center'>
                <Image className='lg:w-full lg:h-full xs:w-80 xs:h-72 xs:border-8 xs:border-blue-bg' src="/images/set-up-example-photo.jpg" alt="pc" width={2440} height={1980} />
            </div>
            <div className='lg:w-1/2 lg:h-full xs:w-full xs:h-1/2 flex  justify-center items-center'>
                <div className='flex flex-col lg:pl-10 lg:pr-20 lg:pt-4 lg:pb-0 xs:pl-14 xs:pr-14 xs:pb-10 xs:pt-4 '>
                    <h2 className='text-light-blue font-bold text-4xl pb-6'>About Me</h2>
                    <p className='text-white lg:text-base xs:text-xs'> I have approximately 6 months of experience working remotely for various companies. During this time, I've successfully delivered projects ranging from simple web pages to complete e-commerce solutions. As a self-taught enthusiast, I'm always eager to expand my knowledge and skills.
                        Currently, I'm pursuing a degree in Systems Engineering at the Metropolitan University of Caracas,
                        now in my fourth trimester. My lifelong dream has always been to be a programmer, and
                        I'm living that dream every day. If I were to sum up my life philosophy in one sentence,
                        it would be: "Anything is possible when you believe in yourself."
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About