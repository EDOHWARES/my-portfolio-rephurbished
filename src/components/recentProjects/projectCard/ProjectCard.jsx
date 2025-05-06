import React from 'react';
import './projectCard.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <a href={link} className="card border-2 border-[#6751b9] w-full flex flex-col flex-1 h-fit md:h-[40rem]">

        <div className='w-full h-fit bg-white object-top border-2 border-[#6751b9]'>
            <img src={image} alt={title} className="object-contain  w-full h-full" />
        </div>

      <div className="card-content w-full">
        <h2 className='card-title text-[1rem] md:text-[1.5rem] font-[500] mb-[0.7rem]'>{title}</h2>
        <p className="card-description ml-0 text-[0.7rem] md:text-[1rem] font-[400] w-fit rounded-[0.3rem] py-[0.4rem] mb-[1.3rem]">{description}</p>
        <a href={link} target='_blank' className='card-button w-fit mx-auto md:mx-0 mt-5 md:w-fit text-[0.9rem] font-[500] flex items-center justify-start md:justify-center text-white py-[0.6rem] px-[2rem] border-[1.5px] border-transparent outline-none rounded-[0.2rem] cursor-pointer duration-500 hover-border-red-400' >
          View Project
        </a>
      </div>
    </a>
  );
};

export default ProjectCard;