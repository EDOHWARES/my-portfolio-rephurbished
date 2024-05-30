import React, { useState } from 'react';

import './navbar.css';

import { GiHamburger } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";

const NavBar = () => {

    const listStyle = 'my-[0px] md:mx-[1.5rem]';
    const anchorStyle = 'text-[0.9rem] font-[500] text-white relative cursor-pointer';

    const [showNav, setShowNav] = useState(false);

  return (
    <>
        <section className="bg-[#0000001A] w-screen flex items-center justify-center py-[0.5rem] px-4 sticky top-0 z-30 backdrop-sepia-0">
            <div className='flex w-[1300px] items-center justify-between py-[1rem] mx-auto'>
                <div className='w-[12rem] h-auto text-xl font-semibold'>
                    {'<EDOHWARES/>'}
                </div>
                <ul className={` mobile-nav-shadow ${showNav ? 'flex' : 'hidden'} flex flex-col pt-8 py-[0.5rem] gap-10 px-5 md:px-0 md:py-0 items-start bg-[#342864] md:shadow-none fixed md:bg-transparent w-[65%] md:w-auto h-screen md:h-auto left-0 top-0 md:static md:flex md:flex-row md:items-center md:gap-[0.5rem] list-none`}>
                <div className='w-[12rem] mb-10 md:hidden h-auto text-xl font-semibold'>
                    {'<EDOHWARES/>'}
                </div>
                    <li className={`md:${listStyle}`}><a className={`${anchorStyle} gradient-border`} href="">Home</a></li>
                    <li className={`md:${listStyle}`}><a className={`${anchorStyle} gradient-border`} href="">Skills</a></li>
                    <li className={`md:${listStyle}`}><a className={`${anchorStyle} gradient-border`} href="">Work Experience</a></li>
                    <li className={`md:${listStyle}`}><a className={`${anchorStyle} gradient-border`} href="">Contact Me</a></li>
                    
                    <button className='contact-btn w-full md:w-fit text-[0.9rem] font-[500] flex items-center justify-start md:justify-center text-white hover:text-[#a993fe] py-[0.6rem] px-[2rem] border-[1.5px] border-transparent outline-none rounded-[0.2rem] cursor-pointer duration-500 hover-border-red-400'>
                        Hire Me
                    </button>
                </ul>
                <div onClick={() => setShowNav(!showNav)} className='menu-btn flex md:hidden cursor-pointer p-2 text-white rounded-[0.4rem] border-none items-center justify-center duration-300'>
                    {!showNav ? <GiHamburger 
                    className='h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem] '
                    />: 
                    <LiaTimesSolid 
                    className='h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem]'
                    />}
                </div>
            </div>
        </section>
    </>
  )
}

export default NavBar