import React from 'react';
import './projectCard.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="card border-2 border-[#6751b9] w-full flex flex-col md:flex-row flex-1">

        <div className='w-full md:w-1/2 bg-white'>
            <img src={image} alt={title} className="object-cover  w-full h-full" />
        </div>

      <div className="card-content w-full md:w-1/2">
        <h2 className='card-title text-[0.95rem] md:text-[1.05rem] font-[500] mb-[0.7rem]'>{title}</h2>
        <p className="card-description ml-0 text-[0.7rem] font-[400] w-fit rounded-[0.3rem] py-[0.4rem] px-[0.6rem] mb-[1.3rem]">{description}</p>
        <a href={link} target='_blank' className='card-button w-fit mx-auto md:mx-0 mt-5 md:w-fit text-[0.9rem] font-[500] flex items-center justify-start md:justify-center text-white py-[0.6rem] px-[2rem] border-[1.5px] border-transparent outline-none rounded-[0.2rem] cursor-pointer duration-500 hover-border-red-400' >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;