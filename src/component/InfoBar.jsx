import React from 'react'
import img from '../assets/Görüntü 2.png'

function InfoBar() {
  return (
    <div className='flex mx-[300px] bg-primary/70 mt-10 rounded-2xl gap-5 items-center py-3 px-2 shadow-xl'>
        <div>
            <img className='w-[150px]' src={img} alt="" />
        </div>
        <div>
            <h1 className='text-2xl leading-7'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
        </div>
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, consectetur praesentium.
            </p>
        </div>
    </div>
  )
}

export default InfoBar