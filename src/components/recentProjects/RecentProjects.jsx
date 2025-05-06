import React from 'react';
import ProjectCard from './projectCard/ProjectCard';
import {Projects} from '../../utils/data';

const RecentProjects = () => {
  return (
    <section className='experience-container w-full my-[4rem] mx-auto relative overflow-hidden'>
        <div className='flex justify-between text-center mb-[2rem] md:mb-[3rem] flex-col md:flex-row items-start'>
            <h5 className='text-[1.3rem] md:text-[1.5rem] font-[600] text-left '>Recent Projects and Contributions</h5>
            <a href="https://github.com/EDOHWARES" className='text-[#7c66e3]'>See more...</a>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {Projects.map((project, index) => (
                <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                image={project.imageUrl}
                link={project.link}
                />
            ))}
        </div>
    </section>
  )
}

export default RecentProjects