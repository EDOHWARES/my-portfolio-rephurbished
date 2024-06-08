import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css';


const ContactForm = () => {

  const form = useRef();

  const [formData, setFormData] = useState({
    user_firstname: '',
    user_secondname: '',
    user_email: '',
    message: ''
  })

  console.log(formData.message)

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(value)
    setFormData({
      ...formData, [name] : value
    })
  }


  const sendEmail = (e) => {
    e.preventDefault();

    if (formData.user_firstname.length && formData.user_secondname.length && formData.user_email.length && formData.message.length > 4) {

      emailjs
        .sendForm('service_w0r3lrf', 'template_91f10bb', form.current, {
          publicKey: 'm84fka36gjWPZrIjK',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );

        alert('Submitted!!')

        setFormData({
          user_firstname: '',
          user_secondname: '',
          user_email: '',
          message: ''
        })

    } else {
      alert('Invalid details!')
    }
  };

  const inputStyle = 'flex-1 w-full text-[0.9rem] text-white bg-[#130f2a] rounded-[0.6rem] border-[1.5px] border-[#6751b9] p-[1rem]'

  return (
    <div className='w-full'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-[1.5rem]'>
            <div className='flex items-center gap-[1.5rem]'>
                <input value={formData.user_firstname} onChange={handleChange} className={`${inputStyle}`} type="text" name='user_firstname' placeholder='First Name' required />
                <input value={formData.user_secondname} onChange={handleChange} className={`${inputStyle}`} type="text" name='user_secondname' placeholder='Last Name' required />
            </div>

            <input value={formData.user_email} onChange={handleChange} className={`${inputStyle}`} type="email" name='user_email' placeholder='Email' required />
            <textarea value={formData.message} onChange={handleChange} className={`${inputStyle}`} name='message' id="message" placeholder='Message' rows={3} required></textarea>

            <button className='sendBtn text-[1rem] font-[500] text-white border-[1.5px] border-[#a892fe] rounded-[0.6rem] p-[0.7rem] cursor-pointer'>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm