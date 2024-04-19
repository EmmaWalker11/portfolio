import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
        <div className='contactContainer'>
            <h2>Contact</h2>
            <hr></hr>
          {/* <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          /> */}
            <div className='contactFormContainer'>
                <form netlify name="contact">
                    <input type="text" className='contactInputs' id="name" name="name" placeholder='Your name' required/>
                    <input type="email" className='contactInputs' id="email" name="email" placeholder='Your email' required/>
                    <textarea  className='contactInputs' id="message"name="message" placeholder='Your message' required/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    </section>
  )
}

export default Contact