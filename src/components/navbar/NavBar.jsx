import React, { useEffect, useState } from 'react';

import './navbar.css';

import { GiHamburger } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";

const NavBar = () => {

    const listStyle = 'my-[0px] md:mx-[1.5rem]';
    const anchorStyle = 'text-[0.9rem] font-[500] text-white relative cursor-pointer';

    const [showNav, setShowNav] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }, []);

  return (
    <>
        <section id='nav' className={` ${scrolled ? 'bg-[#120d37]' : 'bg-[#0000001A]'} w-full fixed mx-auto flex items-center justify-center py-[0.5rem] top-0 right-0 z-30 backdrop-sepia-0`}>
            <div className='flex w-full max-w-[1300px] px-4 items-center justify-between py-[1rem] mx-auto'>
                <a href='#' className='w-[12rem] h-auto text-xl font-semibold cursor-pointer'>
                    {'<EDOHWARES/>'}
                </a>
                <ul className={` mobile-nav-shadow ${showNav ? 'flex animate-in' : 'hidden'} transition-all ease-in-out duration-1000 flex flex-col pt-8 py-[0.5rem] gap-10 px-5 md:px-0 md:py-0 items-start bg-[#342864] md:shadow-none fixed md:bg-transparent w-[65%] md:w-auto h-screen md:h-auto left-0 top-0 md:static md:flex md:flex-row md:items-center md:gap-[0.5rem] list-none`}>
                    <div className='w-[12rem] mb-10 md:hidden h-auto text-xl font-semibold'>
                        {'<EDOHWARES/>'}
                    </div>
                    <li onClick={() => setShowNav(false)} className={`md:${listStyle}`}><a className={`${anchorStyle} gradient-border`} href="#" >Home</a></li>
                    <li onClick={() => setShowNav(false)} className={`md:${listStyle}`}><a className={`${anchorStyle} gradient-border`} href="#skills">Skills</a></li>
                    <li onClick={() => setShowNav(false)} className={`md:${listStyle}`}><a className={`${anchorStyle} gradient-border`} href="#work-experience">Work Experience</a></li>
                    <li onClick={() => setShowNav(false)} className={`md:${listStyle}`}><a className={`${anchorStyle} gradient-border`} href="#contact">Contact Me</a></li>
                    
                    <a href='https://x.com/4_edohemmanuel' target='_blank' className='contact-btn w-full md:w-fit text-[0.9rem] font-[500] flex items-center justify-start md:justify-center text-white hover:text-[#a993fe] py-[0.6rem] px-[2rem] border-[1.5px] border-transparent outline-none rounded-[0.2rem] cursor-pointer duration-500 hover-border-red-400'>
                        Hire Me
                    </a>
                </ul>
                <div onClick={() => setShowNav(!showNav)} className='menu-btn overflow-hidden flex md:hidden cursor-pointer p-1 text-white rounded-[0.4rem] border-none items-center justify-center duration-300'>
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