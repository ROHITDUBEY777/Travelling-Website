
import Navbar from "./Components/Navbar"
import Hero from "./Components/hero"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger" 
import { useEffect } from "react"



gsap.registerPlugin(ScrollSmoother,ScrollTrigger);
function App() {


   useEffect(()=>{
    if(!ScrollSmoother.get()){
      ScrollSmoother.create({
        content:"#smooth-content",
        smooth:2,
        effects:true,
      })
    }
   },[])
   


  return (
    <>
     <div id="smooth-content" >

     <div className="text-white bg-[var(--background)] min-h-screen ">

     <Navbar />
    <Hero />
    <About />
    <Contact />
    <Footer />

     </div>
     </div>
    </>
  )
}

export default App
