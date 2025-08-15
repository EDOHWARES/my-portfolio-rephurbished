import React, { useState } from 'react';
import './skills.css';
import {SKILLS} from '../../utils/data';
import SkillCard from './skillCard/SkillCard';
import SkillCardInfo from './skillCardInfo/SkillCardInfo';

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[1]);

    const handleSelectedSkill = (data) => {
        setSelectedSkill(data);
    }

  return (
    <section id='skills' className='skills-container w-full my-[4rem] mx-0 relative'>
        <h5 className='text-[1.3rem] md:text-[1.5rem] font-[600] mb-[2rem] md:mb-[3.5rem]'>Technical Proficiency</h5>

        <div className='skills-content w-full flex items-start md:gap-5 justify-between p-[1rem] flex-col-reverse gap-8 md:flex-row'>
            <div className='skills w-full md:w-[50%] mx-auto grid gap-[3rem] grid-cols-2'>
                {SKILLS.map((item) => {
                    const IconComponent = Object.values(item.icon)[0];
                    return (
                        <SkillCard 
                            key={item.title}
                            icon={<IconComponent />}
                            title={item.title}
                            isActive={selectedSkill.title == item.title}
                            onClick={() => {
                                handleSelectedSkill(item);
                            }}
                        />
                    )
                })}
            </div>

            <div className='skills-info w-full md:w-[50%] flex-1'>
                <SkillCardInfo 
                    heading={selectedSkill.title}
                    skills={selectedSkill.skills}
                />
            </div>
        </div>
        
    </section>
  )
}

export default Skills