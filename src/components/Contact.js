//    FileName: Contact.js
//    Author: Emma Walker
//    Date last modified: 20/04/2024
//    Description: A container for the contact section on the site.
//     It includes a short description of telling the user to contact me and a form for them to fill out

// imports
import React from 'react'
import './Contact.css';

function Contact() {
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
                <form netlify name="contact">
                    <input type="text" className='contactInputs' id="name" name="name" placeholder='Your name' required/>
                    <input type="email" className='contactInputs' id="email" name="email" placeholder='Your email' required/>
                    <textarea  className='contactInputs' id="message"name="message" placeholder='Your message' required/>
                    <button type="submit" class="submit-button">Submit</button>
                </form>
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default Contact