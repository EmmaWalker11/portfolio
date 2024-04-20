//    FileName: Contact.js
//    Author: Emma Walker
//    Date last modified: 20/04/2024
//    Description: A container for the contact section on the site.
//     It includes a short description of telling the user to contact me and a form for them to fill out

// imports
import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ws4w95v', 'template_nho4dpm', form.current, {
            publicKey: 'U5-HPBSBQI1ijyJhc',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Thank you for your email');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id="contact">
        {/* container */}
        <div className='contactContainer'>
            {/* description */}
            <div className='contactContainerDescription'>
                <h2 id="contactTitle">Contact</h2>
                <hr id="contactHr"></hr>
                <p id="contactDescription">Feel free to contact me by submitting the form below and I will get back to you as soon as possible</p>
            </div>
            {/* form */}
            <div className='imageBehindForm'>
                 <div className='contactFormContainer'>
                <form name="contact" ref={form} onSubmit={sendEmail}>
                    <input type="text" className='contactInputs' id="name" name="user_name" placeholder='Your name' required/>
                    <input type="email" className='contactInputs' id="email" name="user_email" placeholder='Your email' required/>
                    <textarea  className='contactInputs' id="message" name="message" placeholder='Your message' required/>
                    <input type="submit" value="Send" className='button' />
                    {/* <button type="submit" class="submit-button">Submit</button> */}
                </form>
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default Contact