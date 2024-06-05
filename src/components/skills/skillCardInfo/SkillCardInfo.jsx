import React from 'react';
import './skillCardInfo.css';

const SkillCardInfo = ({heading, skills}) => {
  return (
    <div className='skills-info-card rounded-[0.65rem] border-[1.5px] border-[#6751b9] backdrop-blur-lg max-h-[24rem] '>
        <h6 className='text-[1.2rem] font-[500] py-[0.8rem] px-[2rem] bg-clip-text'>{heading}</h6>

        <div className='skills-info-content p-[2rem] max-h-[15rem] overflow-y-scroll'>
          {skills.map((item, index) => (
            <React.Fragment key={`skill_${index}`}>
              <div className='skill-info flex items-center justify-between'>
                <p className='text-[1rem] text-white'>{item.skill}</p>
                <p className='percentage text-[1rem] text-[#dd8cfa]'>{item.percentage}</p>
              </div>

              <div className='skill-progress-bg w-full h-[0.5rem] bg-[#382e68] rounded-[0.5rem] my-[1rem] mx-0 overflow-hidden'>
                <div className='skill-progress w-0 h-[0.5rem] rounded-[0.5rem]' style={{width: item.percentage}}></div>
              </div>
            </React.Fragment>
          ))}
        </div>
    </div>
  )
}

export default SkillCardInfo