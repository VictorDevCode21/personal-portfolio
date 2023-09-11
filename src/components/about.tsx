/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'


function About() {
    return (
        <section className='w-full h-screen bg-blue-bg flex items-center justify-center '>
            <div className='w-1/2 h-1/2 pl-20 pr-20 flex '>
                <Image src="/images/set-up-example-photo.jpg" alt="pc" width={2440} height={1980} />
            </div>
            <div className='w-1/2 h-full flex  justify-center items-center'>
                <div className='flex flex-col pl-10 pr-20 '>
                    <h2 className='text-light-blue font-bold text-4xl pb-6'>About Me</h2>
                    <p className='text-white text-base'> I have approximately 6 months of experience working remotely for various companies. During this time, I've successfully delivered projects ranging from simple web pages to complete e-commerce solutions. As a self-taught enthusiast, I'm always eager to expand my knowledge and skills.
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