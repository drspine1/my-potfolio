import React, { useRef } from 'react'; 
import "./contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xq8ul0f', 'template_w6dt3lj', form.current, 'viCdB_9QdxIVTelFg')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          e.target.reset()
          alert("message sent")
      }, (error) => {
          console.log(error.text);
          console.log("error")
      });
  };

  return ( 
    <>
    <div id="contact">
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <form ref={form}  onSubmit={sendEmail}>
        <input type="text" name="to_name" placeholder="enter your name" />
        <input type="text" name="from_name" placeholder="enter your email" />
        <textarea type="text" name="message" placeholder="message me "></textarea>

        <button type="submit" value="send" className="submit-btn">submit</button>
      </form>
    </div>
    </>
   );
}
 
export default Contact;