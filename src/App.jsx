
import Navbar from "./Components/Navbar"
import Hero from "./Components/hero"
import About from "./Components/About"
import Contact from "./Components/Contact"
function App() {
 

  return (
    <>
     <div className="text-white bg-[var(--background)] min-h-screen ">

     <Navbar />
    <Hero />
    <About />
    <Contact />
     </div>
    </>
  )
}

export default App
