import React from 'react'
import "./Contact.css"


const Contact: React.FC = () => {
  

  return (
    <div>
    <img className="contactimg" src='../Contact.png'></img>
    <iframe className='map'
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14477.795761581852!2d67.0680661!3d24.8826638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66f953936852019b!2sSaylani%20Welfare%20Int.%20Trust!5e0!3m2!1sen!2s!4v1673762403323!5m2!1sen!2s"
      width="600"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
</iframe>


      <div>
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xgedgjkr"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="name"
              placeholder="name"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="name"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Subject"
              autoComplete="off"
              required
            />
 <textarea
  name="message"
  style={{width:'50vh', height:'20vh'}}
  placeholder="Message"
  autoComplete="off"
  required>
</textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
      </div>

  );
};

export default Contact;
