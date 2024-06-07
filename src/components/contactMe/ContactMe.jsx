import React from 'react';
import ContactInfoCard from './contactInfoCard/ContactInfoCard';
import ContactForm from './contactForm/ContactForm';

import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactMe = () => {
  return (
    <section id='contact' className='my-[4rem] mx-0 relative w-full'>
        <h5 className='text-[1.5rem] font-[600] mb-[3rem]'>Contact Me</h5>

        <div className='contact-content flex gap-[3rem] flex-col md:flex-row'>
            <div style={{ flex: 1 }} className='w-full md:w-1/2'>
                <ContactInfoCard 
                icon={<FaSquareXTwitter className='text-[1.8rem]' />}
                text='edohemmanuel4real@gmail.com'
                link='https://x.com/4_edohemmanuel'
                />

                <ContactInfoCard 
                icon={<FaSquareGithub className='text-[1.8rem]' />}
                text='https://github.com/EDOHWARES'
                link="https://github.com/EDOHWARES"
                />
            </div>

            <div style={{ flex: 1 }}>
                <ContactForm />
            </div>
        </div>

    </section>
  )
}

export default ContactMe