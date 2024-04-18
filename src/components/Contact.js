import React from 'react'

function Contact() {
  return (
    <section id="contact">
        <div>Contact Me</div>
        <div>
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
          <div>
            <div>
              <h2>EMAIL</h2>
              <p>Emma.Walker2410@gmail.com</p>

              <h2>PHONE</h2>
              <p>123-456-7890</p>
            </div>
          </div>
        </div>
        <form netlify name="contact">
          <h2 >Contact Me</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name"/>
          </div>
          <div>
            <label htmlFor="email"> Email </label>
            <input type="email" id="email" name="email"/>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message"name="message"/>
          </div>
          <button type="submit">Submit</button>
        </form>
    </section>
  )
}

export default Contact