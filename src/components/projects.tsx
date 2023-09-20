import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from 'react'
import axios from 'axios'

export interface Posts {
    id: string;
    name: string;
    description: string;
    img_url: string;
    img_alt: string;
    project_url: string;
}

function Projects() {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [start, setStart] = useState(0);

    const prev = () => setStart((start) => (start === 0 ? posts.length - 3 : start - 1));
    const next = () => setStart((start) => (start === posts.length - 1 ? 0 : start + 1));

    useEffect(() => {
        axios.get("/api/projects")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section id='projects' className='w-full h-screen bg-blue-bg lg:flex flex-col justify-center items-center xs:hidden'>
            <div className='w-full h-full pl-14 pr-14 flex flex-col items-center justify-center'>
                <h2 className='font-bold text-light-blue text-4xl '>Experience</h2>
                <div className='flex justify-center items-center pt-28'>
                    {[...posts, ...posts.slice(0, 2)].slice(start, start + 3).map((post) => (
                        <div key={post.id} className='w-full h-full  flex flex-col'>
                            <div className='lg:px-10 xs:px-3  '>
                                <Link href={post.project_url} className='w-full h-full flex flex-col'>
                                    <Image className='lg:w-80 lg:h-48 xs:w-40 xs:h-48' src={post.img_url} alt={post.img_alt} width={1080} height={720} />
                                    <h3 className='text-light-blue font-bold text-xl'>{post.name}</h3>
                                    <p className='text-white'>{post.description}</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative w-full '>
                <div className=" inset-0 flex items-center justify-between ">
                    <button
                        onClick={prev}
                        className=" p-1 rounded-full shadow text-gray-800 hover:bg-light-blue hover:text-black absolute lg:bottom-64 lg:left-6"
                    >
                        <BsChevronLeft size={40} />
                    </button>
                    <button
                        onClick={next}
                        className=" p-1 rounded-full shadow text-gray-800 hover:bg-light-blue hover:text-black absolute lg:bottom-64 lg:right-6"
                    >
                        <BsChevronRight size={40} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Projects