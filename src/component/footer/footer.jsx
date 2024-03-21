import {FaFacebook} from 'react-icons/fa'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

import './footer.css'
const Footer = () => {
  
  return ( 
    <>
    <div id="footer">
      <h1><a href="#">SKEEZY</a></h1>
      <ul className="footer-links">
      <a href="#">home</a>
        <a href="#about">about</a>
        <a href="#skills" >skills</a>
        <a href="#portfolio">portfolio</a>
        <a href="#contact">contact</a>
      </ul>
        <div className="footer-socials">
          <a href=""><FaFacebook/></a>
          <a href=""><FaTwitter/></a>
          <a href=""><IoLogoWhatsapp/></a>
        </div>
       <div className="footer-copy-right">
        <hr />
        <small>&copy; SKEEZY Projects.All rights reserved </small>
       </div> 
    </div>
    </>
   );
}
 
export default Footer;