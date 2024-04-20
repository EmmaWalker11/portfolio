//    FileName: Contact.js
//    Author: Emma Walker
//    Date last modified: 20/04/2024
//    Description: A container for the contact section on the site.
//     It includes a short description of telling the user to contact me and a form for them to fill out

// imports
import './Contact.css';
import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    // creating variables for each form field to later remove them after submitting
    const [name, setName] =useState("");
    const [email, setEmail] =useState("");
    const [message, setMessage] =useState("");

    // creating reference to the form
    const form = useRef();

    // sending email function. hooked up to Emailjs
    const sendEmail = (e) => {
        // preventing default
        e.preventDefault();
    
        // sending form
        emailjs
          .sendForm('service_ws4w95v', 'template_nho4dpm', form.current, {
            publicKey: 'U5-HPBSBQI1ijyJhc',
          })
          .then(
            () => {
                // if form is sucessful alert the user and thank them with their name, then remove form inputs to clean it
              console.log('SUCCESS!');
              alert('Thank you for your email ' + name);
              setName('');
              setEmail('');
              setMessage('');
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert('Sorry your email wasnt able to go through');
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
                    <input type="text" className='contactInputs' id="name" name="user_name" placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} required/>
                    <input type="email" className='contactInputs' id="email" name="user_email" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <textarea  className='contactInputs' id="message" name="message" placeholder='Your message' value={message} onChange={(e) => setMessage(e.target.value)} required/>
                    <input type="submit" value="Send" className='button' id="submit-button" />
                    {/* <button type="submit" class="submit-button">Submit</button> */}
                </form>
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default Contact