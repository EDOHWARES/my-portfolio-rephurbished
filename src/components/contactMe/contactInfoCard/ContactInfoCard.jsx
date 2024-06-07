import React from 'react';
import './contactInfoCard.css';

const ContactInfoCard = ({ icon, text, link }) => {
  return (
    <a target='_blank' href={link} className='flex flex-col items-center justify-center bg-[#130f2a] rounded-[0.65rem] border-[1.5px] border-[#6751b9] p-[1.5rem] mb-[2rem] cursor-pointer'>
        <div className='flex w-[4rem] h-[4rem] items-center justify-center rounded-[0.5rem] bg-[#3d3072] mb-[0.8rem] p-1'>
            {icon}
        </div>

        <p className='text-[0.9rem] font-[400]'>{text}</p>
    </a>
  )
}

export default ContactInfoCard