import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";
import './skills.css'
const Skills = () => {
  return ( 
    <>
    <div id="skills">
      <h5>what skills i have</h5>
      <h2>my experience</h2>
      <div className="front-end">
        <h3 className="front">frontend developer</h3> 

        <div className="skills-list">
            <div className="my-knowledge">
              <div className="list">
                <h3 className="sign"><FaHtml5/></h3>
                <h3>html</h3>
              </div>
              <p>experienced</p>
              </div> 
              
              <div className="my-knowledge">
              <div className="list">
                <h3 className="sign"><SiTailwindcss /></h3>
                <h3>tailwind</h3>
              </div>
              <p>experienced</p>
              </div> 
              <div className="my-knowledge">
              <div className="list">
                <h3 className="sign"><IoLogoCss3 /></h3>
                <h3>css</h3>
              </div>
              <p>experienced</p>
              </div> 
              <div className="my-knowledge">
              <div className="list">
                <h3 className="sign">< FaBootstrap /></h3>
                <h3>bootstrap</h3>
              </div>
              <p>intermediate</p>
              </div> 
              <div className="my-knowledge">
              <div className="list">
                <h3 className="sign"><RiJavascriptFill /></h3>
                <h3>javascript</h3>
              </div>
              <p>intermediate</p>
              </div> 
              <div className="my-knowledge">
              <div className="list">
                <h3  className="sign">< FaReact /></h3>
                <h3>react</h3>
              </div>
              <p>experienced</p>
              </div>  
        </div>
      </div>
    </div>
    </>
   );
}
 
export default Skills;