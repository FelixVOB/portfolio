import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import i18n from '../../i18n'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ynxiyd9', 'template_sc27gmf', form.current, 'c-DyiMCe2q21b59RM')

    e.target.reset()
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return (
    <section id='contact'>
      <h5 >{i18n.t('get-in-touch')}</h5>
      <h2>{i18n.t('contact-me')}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='emailFelix'>felix_vanobbergen@&#8203;hotmail.com</h5>
            <a href="mailto:felix_vanobbergen@hotmail.com">{i18n.t('send')}</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Felix Van Obbergen</h5>
            <a href="https://www.linkedin.com/in/felix-van-obbergen-2b994923b/" target="_blank" rel="noreferrer">{i18n.t('send')}</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={i18n.t('your-full-name')} required />
          <input type="email" name='email' placeholder={i18n.t('your-email')} required />
          <textarea name="message" rows="7" placeholder={i18n.t('your-message')} required></textarea>
          <button type='submit' className='btn btn-primary'>{i18n.t('send-message')}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact