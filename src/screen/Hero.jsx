import React from 'react'
import img from '../assets/Görüntü.png'
import { Link, animateScroll as scroll } from 'react-scroll'

function Hero() {
    return (
        <div name='home' className='grid grid-cols-2 mx-[128px] py-[30px] items-center justify-center'>
            <div className=''>
                <h1 className='text-5xl mb-5'>
                    Welcome!
                </h1>
                <p className='text-xl mb-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate cumque velit corrupti magni et non numquam id quod sit.
                </p>
                <button className='flex items-center gap-1 '>
                    <Link className='flex items-center' to="contact" smooth={true}>Contact<ion-icon name="chevron-forward-outline"></ion-icon></Link>
                </button>
            </div>
            <div className='flex justify-center'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}
export default Hero