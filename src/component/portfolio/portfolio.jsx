import data from '../../demo'
import './portfolio.css'
const Portfolio = () => {
  console.log(data)
  return ( 
    <>
    <div id="portfolio">
      <h5>my project</h5>
      <h2>portfolio</h2>
      <div className="project-list">
        {data.map((data) =>{
          const {img,id,btn,tittle} = data
          return <div className="project" key={id}>
               <img src={img} alt={tittle}/>
               <p>{tittle}</p>
               <a href="#">{btn}</a>
          </div>
        })}
      </div>
    </div>
    </>
   );
}
 
export default Portfolio;