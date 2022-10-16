import React from 'react'
import img from '../assets/unsp.jpg'

export default function About() {
  return (
    <div name='about' className='flex justify-center items-center h-screen'>
        <div className='w-full h-[600px] bg-gray-900/90 absolute -z-10'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={img} alt="" />
        </div>
        <div className='relative z-10 bg-white/90 w-[70%] flex flex-col justify-center items-center rounded-2xl p-8 gap-y-5'>
            <h1 className='text-bold text-5xl'>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloribus culpa, quod quis sequi nostrum quasi repellendus facilis, odit maiores quo fuga veniam similique fugiat. Nemo magnam eos quasi incidunt?</p>
        </div>
    </div>
  )
}
