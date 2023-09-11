import Image from 'next/image'
import React from 'react'
import { SiJavascript, SiTypescript, SiPrisma, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss, SiGit, SiGithub, SiMongodb, SiJest, SiCypress } from 'react-icons/si'

function Skills() {
    return (
        <section className='w-full h-screen flex bg-blue-bg items-center'>
            <div className='w-1/2 h-full flex items-center '>
                <div className='flex flex-col w-96 pl-32'>
                    <h2 className='text-light-blue font-bold text-4xl pb-8'>Skills</h2>
                    <h3 className='text-white font-medium text-2xl pb-8'>Web Development</h3>
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
                        <button className='text-white px-2 rounded-md bg-light-blue font-bold'>Contact me</button>
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-1/2  pr-20 flex '>
                <Image className='w-full h-full' src="/images/png-vector.png" alt="pc" width={500} height={500} />
            </div>
        </section>
    )
}

export default Skills