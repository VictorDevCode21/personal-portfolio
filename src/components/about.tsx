/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'


function About() {
    return (
        <section
            id='about'
            className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 bg-blue-bg px-6 sm:px-10 lg:px-20 py-20 lg:py-0'
        >
            <div className='w-full lg:w-1/2 flex justify-center'>
                <Image
                    className='w-full max-w-md lg:max-w-xl h-auto rounded-lg'
                    src="/images/set-up-example-photo.jpg"
                    alt="Developer workspace setup"
                    width={2440}
                    height={1980}
                />
            </div>
            <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                <h2 className='text-light-blue font-bold text-3xl sm:text-4xl pb-6'>About Me</h2>
                <p className='text-white text-sm sm:text-base'> I have approximately 1 year of experience working remotely for various companies. During this time, I've successfully delivered projects ranging from simple web pages to complete e-commerce solutions. As a self-taught enthusiast, I'm always eager to expand my knowledge and skills.
                    Currently, I'm pursuing a degree in Systems Engineering at the Metropolitan University of Caracas,
                    now in my fourth trimester. My lifelong dream has always been to be a programmer, and
                    I'm living that dream every day. If I were to sum up my life philosophy in one sentence,
                    it would be: "Anything is possible when you believe in yourself."
                </p>
            </div>
        </section>
    )
}

export default About
