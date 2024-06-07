import React from 'react';
import './contactForm.css';

const ContactForm = () => {
    const inputStyle = 'flex-1 w-full text-[0.9rem] text-white bg-[#130f2a] rounded-[0.6rem] border-[1.5px] border-[#6751b9] p-[1rem]'

  return (
    <div className='w-full'>
        <form action="" className='flex flex-col gap-[1.5rem]'>
            <div className='flex items-center gap-[1.5rem]'>
                <input className={`${inputStyle}`} type="text" name='firstname' placeholder='First Name' />
                <input className={`${inputStyle}`} type="text" name='lastname' placeholder='Last Name' />
            </div>

            <input className={`${inputStyle}`} type="email" name='email' placeholder='Email' />
            <textarea className={`${inputStyle}`} name='email' id="email" placeholder='Message' rows={3}></textarea>

            <button className='sendBtn text-[1rem] font-[500] text-white border-[1.5px] border-[#a892fe] rounded-[0.6rem] p-[0.7rem] cursor-pointer'>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm