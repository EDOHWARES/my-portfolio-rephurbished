import React from 'react';
import "./skillCard.css";

const SkillCard = ({title, icon, isActive, onClick}) => {
  return (
    <div 
        className={`skills-card ${isActive ? 'active' : ''} 
        rounded-[0.65rem] border-[1.5px] border-[#6751b9] p-[2rem] md:p-[2.5rem] text-center bg-[#16112F65] flex items-center justify-center backdrop-blur-lg relative cursor-pointer transition-all ease-out duration-500`}
        onClick={() => onClick()}
    >

        <div className='skill-icon max-h-[5rem]'>
            <div 
            className='text-[2.4rem] text-[#6751b9] md:text-[3rem] flex items-center justify-center bg-[#2a2252] rounded-[0.65rem] border-[1.5px] border-[#6852ba] absolute top-[-1rem] left-[-1rem] p-2'>
                {icon}
            </div>

        </div>

        <span className='text-[0.9rem] ml-4 md:ml-0 text-center flex items-center justify-center md:text-[1.3rem] font-[500]'>{title}</span>
        
    </div>
  )
}

export default SkillCard