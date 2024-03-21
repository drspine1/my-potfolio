
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import "./navbar.css"
import { Link } from "react-scroll";
const Navbar = () => {
  
  const [showNav,SetShowNav] = useState(false)

  const linksContainer = useRef(null)
  const links = useRef(null)

  useEffect(() =>{
  const linksContainerHeight = links.current.getBoundingClientRect().height
  if (showNav){
    linksContainer.current.style.height = `${linksContainerHeight}px`
  } else{
    linksContainer.current.style.height = `0`
  }
  },[showNav])
  return ( 
    <>
    <nav>
      <div className="logo">
        <h1>skeezy</h1>
        <span>.</span>
        </div>
        <div className="links-container" ref={linksContainer}>
          <ul className="links" ref={links}>
      <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}onClick={() => SetShowNav(false)}>home</Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-110} duration={500} onClick={() => SetShowNav(false)}>about</Link>
      <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-110} duration={500} onClick={() => SetShowNav(false)}>skills</Link>
      <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-110} duration={500} onClick={() => SetShowNav(false)}>portfolio</Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-110} duration={500} onClick={() => SetShowNav(false)}>contact</Link>
      

          </ul>
        </div>
          <button onClick={() => SetShowNav(!showNav)}>
            <GiHamburgerMenu/>
          </button>
    
    </nav>
  

    </>
   );
}
 
export default Navbar;