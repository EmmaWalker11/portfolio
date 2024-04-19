import React from 'react'
import './Contact.css';
import Trees from '../images/SoundwaveTreesSeperate.jpg';

function Contact() {
  return (
    <section id="contact">
        <div className='contactContainer'>
            <div className='contactContainerDescription'>
                <h2 id="contactTitle">Contact</h2>
                <hr></hr>
                <p id="contactDescription">Feel free to contact me by submitting the form below and I will get back to you as soon as possible</p>
            </div>
            <div className='imageBehindForm'>
                {/* <img className="treesImage" src={Trees} alt='Sound wave trees'/> */}
           
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