import Image from 'next/image'
import React from 'react'
import { SiJavascript, SiTypescript, SiPrisma, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss, SiGit, SiGithub, SiMongodb, SiJest, SiCypress } from 'react-icons/si'

function Skills() {
    return (
        <section id='skills' className='w-full lg:h-[100vh] xs:h-full flex lg:flex-row xs:flex-col-reverse items-center lg:bg-right-bottom lg:pt-0 lg:pb-0 xs:bg-bottom xs:pt-10 xs:pb-12 ' style={{ backgroundImage: 'url(/images/wallpaper-6.jpg)' }}>
            <div className='lg:w-1/2 lg:h-full xs:w-full xs:h-1/2 flex items-center lg:justify-start xs:justify-center '>
                <div className='flex flex-col lg:w-96 lg:pl-32 lg:pt-0 lg:pb-0 xs:pb-10 xs:pt-10'>
                    <h2 className='text-light-blue font-bold text-4xl lg:pb-8 xs:pb-4'>Skills</h2>
                    <h3 className='text-white font-medium text-2xl lg:pb-8 xs:pb-4'>Web Development</h3>
                    <div className='flex justify-between '>
                        <SiJavascript size={30} className='text-light-blue' />
                        <SiTypescript size={30} className='text-light-blue' />
                        <SiPrisma size={30} className='text-light-blue' />
                        <SiNextdotjs size={30} className='text-light-blue' />
                        <SiPostgresql size={30} className='text-light-blue' />
                        <SiReact size={30} className='text-light-blue' />
                    </div>
                    <div className='flex justify-between pt-8'>
                        <SiTailwindcss size={30} className='text-light-blue' />
                        <SiGit size={30} className='text-light-blue' />
                        <SiGithub size={30} className='text-light-blue' />
                        <SiMongodb size={30} className='text-light-blue' />
                        <SiJest size={30} className='text-light-blue' />
                        <SiCypress size={30} className='text-light-blue' />
                    </div>
                    <div className='pt-10'>
                        <a href='mailto:victorrivaswebdev@gmail.com' className='text-white px-2 rounded-md bg-light-blue font-bold'>Contact me</a>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2 lg:h-1/2 xs:w-full xs:h-1/2 lg:pr-20 lg:pt-0 xs:pt-20 flex justify-center'>
                <Image className='lg:w-full lg:h-full xs:w-80 xs:h-72' src="/images/png-vector.png" alt="pc" width={500} height={500} />
            </div>
        </section>
    )
}

export default Skills