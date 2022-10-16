import React from 'react'

export default function ProjectCard(props) {
    return (
        <div className='border rounded-2xl p-5 shadow-2xl bg-white hover:scale-[130%]'>
            <div>
                <a target="blank" href={props.link}>
                    <img className=' h-[150px] object-cover' src={props.image} alt="" />
                </a>
            </div>
            <div className='mt-5'>
                <h1 className='font-bold'>
                    {props.title}
                </h1>
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    )
}
