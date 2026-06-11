import Image from 'next/image'
import React from 'react'
import { IconType } from 'react-icons'
import { SiJavascript, SiTypescript, SiPrisma, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss, SiGit, SiGithub, SiMongodb, SiJest, SiCypress } from 'react-icons/si'

const SKILL_ICONS: { label: string; Icon: IconType }[] = [
    { label: 'JavaScript', Icon: SiJavascript },
    { label: 'TypeScript', Icon: SiTypescript },
    { label: 'Prisma', Icon: SiPrisma },
    { label: 'Next.js', Icon: SiNextdotjs },
    { label: 'PostgreSQL', Icon: SiPostgresql },
    { label: 'React', Icon: SiReact },
    { label: 'TailwindCSS', Icon: SiTailwindcss },
    { label: 'Git', Icon: SiGit },
    { label: 'GitHub', Icon: SiGithub },
    { label: 'MongoDB', Icon: SiMongodb },
    { label: 'Jest', Icon: SiJest },
    { label: 'Cypress', Icon: SiCypress },
]

function Skills() {
    return (
        <section
            id='skills'
            className='w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 bg-cover lg:bg-right-bottom bg-bottom px-6 sm:px-10 lg:px-20 py-20 lg:py-0'
            style={{ backgroundImage: 'url(/images/wallpaper-6.jpg)' }}
        >
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
                <div className='flex flex-col w-full max-w-sm'>
                    <h2 className='text-light-blue font-bold text-3xl sm:text-4xl pb-6'>Skills</h2>
                    <h3 className='text-white font-medium text-xl sm:text-2xl pb-6'>Web Development</h3>
                    <div className='grid grid-cols-6 gap-y-8 justify-items-center'>
                        {SKILL_ICONS.map(({ label, Icon }) => (
                            <Icon
                                key={label}
                                size={30}
                                title={label}
                                className='text-light-blue transition-transform duration-300 hover:scale-125'
                            />
                        ))}
                    </div>
                    <div className='pt-10'>
                        <a
                            href='mailto:victorrivaswebdev@gmail.com'
                            className='inline-block text-white px-3 py-1 rounded-md bg-light-blue font-bold
                                transition-transform duration-300 hover:scale-105'
                        >
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
                <Image
                    className='w-full max-w-xs sm:max-w-sm lg:max-w-lg h-auto'
                    src="/images/png-vector.png"
                    alt="Web development illustration"
                    width={500}
                    height={500}
                />
            </div>
        </section>
    )
}

export default Skills
