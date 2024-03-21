import {FaFacebook} from 'react-icons/fa'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import './header.css'

const Header = () => {
  return ( 
    <>
    <div className="header"id='home'>
      <div className="image">
        <img src="/images/man.jpg" alt="skeezy" />
        </div>
        <div className="me">
          <div>
          <small>hello,</small>
          <h1>I'm <span>idris</span> <br />website developer</h1>
          <p className='my_self'>i am a skilled and passionate web developer with experience in creating visually appealling and user-friendly websites</p>
          <a href="#contact">let's talk</a>
          </div>
        </div>
        <div className="socials">
          <a href=""><FaFacebook /></a>
          <a href=""><IoLogoWhatsapp  /></a>
          <a href=""><FaTwitter /></a>
      
        
        </div>
       <a href="#footer" className="scroll-down">scroll down</a>
       
      
    </div>
    </>
   );
}
 
export default Header;