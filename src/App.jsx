import About from "./component/about/about"
import Contact from "./component/contact/contact"
import Footer from "./component/footer/footer"
import Header from "./component/header/header"
import Navbar from "./component/navbar/navbar"
import Portfolio from "./component/portfolio/portfolio"
import Skills from "./component/skills/skills"


function App() {
 return (
     <>
<Navbar/>
<Header />
<About />
<Skills />
<Portfolio />
<Contact/>
<Footer />

     </>
    
    
  )
}

export default App
