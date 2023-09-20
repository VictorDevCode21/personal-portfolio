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

function ProjectsMobile() {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [start, setStart] = useState(0);

    const prev = () => setStart((start) => (start === 0 ? posts.length - 1 : start - 1));
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
        <section id='projectsm' className='w-full h-full bg-blue-bg xs:flex flex-col justify-center items-center lg:hidden pb-20'>
            <div className='w-full h-full pl-14 pr-14 flex flex-col items-center justify-center'>
                <h2 className='font-bold text-light-blue text-4xl pt-20'>Experience</h2>
                <div className='flex justify-center items-center pt-20 '>
                    {[...posts, ...posts.slice(0, 2)].slice(start, start + 1).map((post) => (
                        <div key={post.id} className='w-full h-full  flex flex-col'>
                            <div className=' xs:px-3  '>
                                <Link href={post.project_url} className='w-full h-full flex flex-col'>
                                    <Image className='xs:w-80 xs:h-60' src={post.img_url} alt={post.img_alt} width={1080} height={720} />
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
                        className=" p-1 rounded-full shadow text-gray-800 bg-light-blue hover:text-black absolute bottom-48 left-2 "
                    >
                        <BsChevronLeft size={40} />
                    </button>
                    <button
                        onClick={next}
                        className=" p-1 rounded-full shadow text-gray-800 bg-light-blue hover:text-black absolute bottom-48 right-2 "
                    >
                        <BsChevronRight size={40} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProjectsMobile