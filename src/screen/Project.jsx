import React from 'react'
import ProjectCard from '../component/ProjectCard'
import img from '../assets/exp1.jpg'
import img2 from '../assets/exp2.webp'
import img3 from '../assets/exp3.png'
import img4 from '../assets/exp4.webp'

export default function Project() {
  return (
    <div name='projects' className='mx-[128px] text-center h-screen flex flex-col justify-center'>
        <h1 className='text-5xl font-bold my-8'>PROJECTS</h1>
        <div className='grid grid-cols-4 gap-8 w-full'>
          <ProjectCard title="Example Project1" content="Lorem ipsum dolor sit amet." image={img} link="https://github.com/anilbulluk"></ProjectCard>
          <ProjectCard title="Example Project2" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sint amet, mollitia necessitatibus possimus aliquam ut! Architecto."image={img2} link="https://github.com/anilbulluk"></ProjectCard> 
          <ProjectCard title="Example Project3" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos, autem voluptate sed mollitia voluptatum molestiae reiciendis distinctio cumque quia ab repellendus. Corporis ullam, vero reprehenderit eum et natus. Voluptatibus nam mollitia dolor alias accusantium."image={img3} link="https://github.com/anilbulluk"></ProjectCard> 
          <ProjectCard title="Example Project4" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, animi ea!"image={img4} link="https://github.com/anilbulluk"></ProjectCard> 
        </div>
    </div>
  )
}


