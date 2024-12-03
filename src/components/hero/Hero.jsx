import React from "react";

import "./hero.css";

import profile2 from "../../assets/images/profile2.jpg";

import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero-container flex flex-col gap-14 items-center justify-center md:items-start md:justify-between md:flex-row md:gap-0 overflow-hidden"
    >
      <div className="w-full md:w-1/2">
        <h2 className="text-[2.8rem] md:text-[3.8rem] leading-[3.5rem] md:leading-[5rem] font-[600] mb-[1rem] text-center md:text-start">
          Building Digital Experiences That Inspires
        </h2>
        <p className="w-full text-center md:text-start md:w-[80%] text-[0.8rem] md:text-[1rem] font-[400] leading-[1.3rem] md:leading-[2rem]">
          I have helped business and clients scale by building web solutions
          that thrives | Transforming Ideas into Seamless and Visually Stunning
          Web Solutions
        </p>
        <a
          href="https://drive.google.com/file/d/1A-tXSvl_spkRtpeaOzdqBTeJP8TDLbAT/view"
          target="_blank"
          className="contact-btn w-fit mx-auto md:mx-0 mt-5 md:w-fit text-[0.9rem] font-[500] flex items-center justify-start md:justify-center text-white hover:text-[#a993fe] py-[0.6rem] px-[2rem] border-[1.5px] border-transparent outline-none rounded-[0.2rem] cursor-pointer duration-500 hover-border-red-400"
        >
          Download Resume
        </a>
      </div>

      <div className="relative w-full md:w-auto flex flex-col items-center justify-center">
        <div className="mb-[1rem]">
          <img
            className="w-[25rem] rounded-[2rem] cursor-pointer hover:-translate-y-2 duration-500"
            src={profile2}
            alt="my photo"
          />
        </div>
        <div className="flex text-[3rem] md:text-[4rem] gap-4 ">
          <SiMongodb className="text-[#4DB33D] border-[1.5px] border-[#6852ba] rounded-[0.65rem] p-2 hover:-translate-y-2 duration-500 cursor-pointer" />
          <IoLogoJavascript className="text-yellow-400 border-[1.5px] border-[#6852ba] rounded-[0.65rem] p-2 hover:-translate-y-2 duration-500 cursor-pointer" />
          <RiTailwindCssFill className="text-[#06B6D4] border-[1.5px] border-[#6852ba] rounded-[0.65rem] p-2 hover:-translate-y-2 duration-500 cursor-pointer" />
          <FaReact className="text-[#61DAFB] border-[1.5px] border-[#6852ba] rounded-[0.65rem] p-2 hover:-translate-y-2 duration-500 cursor-pointer" />
          <DiNodejs className="text-[#68A063] border-[1.5px] border-[#6852ba] rounded-[0.65rem] p-2 hover:-translate-y-2 duration-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
