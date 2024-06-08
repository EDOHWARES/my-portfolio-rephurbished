import React from 'react';

import './hero.css';

import profile2 from "../../assets/images/profile2.jpg";

import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";

const Hero = () => {
  return (
    <div id='hero' className='hero-container flex flex-col gap-14 items-center justify-center md:items-start md:justify-between md:flex-row md:gap-0'>
        <div className='w-full md:w-1/2'>
            <h2 className='text-5xl md:text-[3.8rem] leading-[4rem] md:leading-[5rem] font-[600] mb-[1rem] text-center md:text-start'>Building Digital Experiences That Inspires</h2>
            <p className='w-full text-center md:text-start md:w-[80%] text-[0.8rem] md:text-[1rem] font-[400] leading-[1.3rem] md:leading-[2rem]'>
                Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
            </p>
            <a href='https://drive.google.com/file/d/1A-tXSvl_spkRtpeaOzdqBTeJP8TDLbAT/view' target='_blank' className='contact-btn w-fit mx-auto md:mx-0 mt-5 md:w-fit text-[0.9rem] font-[500] flex items-center justify-start md:justify-center text-white hover:text-[#a993fe] py-[0.6rem] px-[2rem] border-[1.5px] border-transparent outline-none rounded-[0.2rem] cursor-pointer duration-500 hover-border-red-400'>
                Download Resume
            </a>
        </div>

        <div className='relative w-full md:w-auto flex flex-col items-center justify-center'>
            <div className='mb-[1rem]'>
                <FaReact className='text-[4rem] text-[#61DAFB] absolute left-[6rem] md:-left-[5rem] bottom-28 border-[1.5px] border-[#6852ba] rounded-[0.65rem] p-2 hover:-translate-y-2 duration-500 cursor-pointer'/>
                <img className='w-[25rem] rounded-[2rem] cursor-pointer hover:-translate-y-2 duration-500' src={profile2} alt="my photo" />
            </div>
            <div className='flex text-[4rem] gap-4 '>
                <IoLogoJavascript className='text-yellow-400 border-[1.5px] border-[#6852ba] rounded-[0.65rem] p-2 hover:-translate-y-2 duration-500 cursor-pointer'/>
                <RiTailwindCssFill className='text-[#06B6D4] border-[1.5px] border-[#6852ba] rounded-[0.65rem] p-2 hover:-translate-y-2 duration-500 cursor-pointer' />
                <MdHtml className='text-[#E34F26] border-[1.5px] border-[#6852ba] rounded-[0.65rem] p-2 hover:-translate-y-2 duration-500 cursor-pointer' />
                <MdCss className='text-[#1572B6] border-[1.5px] border-[#6852ba] rounded-[0.65rem] p-2 hover:-translate-y-2 duration-500 cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Hero