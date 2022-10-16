import React from 'react'
import img from '../assets/logo1.png'
import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar() {
    return (
        <div className='flex mx-[128px] py-[30px] items-center justify-between border-b-2'>
            <div className='flex items-center gap-x-5'>
                <img src={img} className='w-[100px]' alt="" />
                <h1 className='text-2xl font-[500]'>
                    Anil Bulluk
                </h1>
            </div>
            <div>
                <ul className='flex gap-x-10'>
                    <li className='cursor-pointer'><Link to='home' smooth={true}>Home</Link></li>
                    <li className='cursor-pointer'><Link to='projects' smooth={true}>Projects</Link></li>
                    <li className='cursor-pointer'><Link to='about' smooth={true}>About</Link></li>
                    <li className='cursor-pointer'><Link to='contact' smooth={true}>Contact</Link></li>
                </ul>
            </div>
            <div>
            <div className=''>
                <button class="font-bold py-2 px-4 inline-flex items-center border rounded-2xl">
                    <a target="blank" href="https://drive.google.com/uc?export=download&id=1vRq99Q6NnseLmgB7voVsQtQBBed7CbMW" ><ion-icon name="download-outline"></ion-icon>Access my CV here</a>
                </button>
            </div>
            </div>
        </div>
    )
}

export default Navbar