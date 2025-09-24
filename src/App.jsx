
import Navbar from "./Components/Navbar"
import Hero from "./Components/hero"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
function App() {
 

  return (
    <>
     <div className="text-white bg-[var(--background)] min-h-screen ">

     <Navbar />
    <Hero />
    <About />
    <Contact />
    <Footer />

     </div>
    </>
  )
}

export default App
