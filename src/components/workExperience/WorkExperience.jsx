import React, { useRef } from 'react';
import "./workExperience.css";
import {WORK_EXPERIENCE} from '../../utils/data';
import ExperienceCard from './experienceCard/ExperienceCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from '@ant-design/react-slick';

const WorkExperience = () => {

    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      };




  return (
    <section className='experience-container w-full my-[4rem] mx-0 relative'>
        <h5 className='text-[1.3rem] md:text-[1.5rem] font-[600] mb-[2rem] md:mb-[3rem]'>Work Experience</h5>

        <div className="experience-content mx-6 lg:mx-0">
            <Slider ref={sliderRef} {...settings}>
                {WORK_EXPERIENCE.map((item) => (
                    <ExperienceCard key={item.title} details={item} />
                ))}
            </Slider>
        </div>
    </section>
  )
}

export default WorkExperience