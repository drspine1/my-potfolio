import './about.css'
import { FaFolder } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
const About = () => {
  return ( 
    <>
    <section id='about'>
      <h5>get to know </h5>
      <h2>about <span>me</span></h2>
        <div className="about-me">
          <div className="left">
            <div className="header_image-bg"></div>
            <div className="header_image-lg">
              <img src="/images/man.jpg" alt="" />
            </div>
           
          </div>
          <div className="right">
            <div className="cards">
              <div className="card">
                 <h3> <FaAward /></h3>
                <h4>experince</h4>
                <p>3+ experience</p>
              </div>
              <div className="card">
                <h3> <FaFolder /></h3>
               <h4>projects</h4>
              <p> 20+ projects</p>
              </div>
              </div>
            <p>i am a skilled and passionate web developer with experience in creating visually appealling and user-friendly websites.i have a strong understanding of design and a keen eye for details and proficient in HTML,CSS,JAVASCRIPT,TAILWIND CSS and REACT.</p>

            <a href="#contact" className='hire-me'>hire me</a>
           
          </div>
        </div>
    </section>
    </>
   );
}
 
export default About;