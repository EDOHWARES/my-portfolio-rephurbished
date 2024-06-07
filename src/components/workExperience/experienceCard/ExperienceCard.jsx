import React from 'react';
import './experienceCard.css';

const ExperienceCard = ({details}) => {
  return (
    <div className='bg-[#130f2a] min-h-[17rem] rounded-[0.6rem] border-[1.5px] border-[#6751b9] p-[1.5rem] my-0 mx-0 md:mx-[1rem]'>
        <h6 className='text-[0.95rem] md:text-[1.05rem] font-[500] mb-[0.7rem]'>{details.title}</h6>

        <div className='inline-block text-[0.7rem] font-[400] bg-[#6751B980] w-fit rounded-[0.3rem] py-[0.4rem] px-[0.6rem] mb-[1.3rem]'>
            {details.date}
        </div>

        <ul className='ml-7 gap-4 md:ml-10'>
            {details.responsibilities.map((item) => (
                <li 
                key={item}
                className='work-experience-card-li text-[0.7rem] md:text-[0.8rem] font-[400] mb-[0.5rem] relative'
                >
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ExperienceCard