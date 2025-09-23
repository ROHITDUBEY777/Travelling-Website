import React from 'react'

const Navbar = () => {
  return (
    <div className='poppins fixed w-full bg-transparent  backdrop-blur-3xl text-2xl text-white  py-5  px-4  accent-zinc-100 z-100 justify-center text-center  md:justify-between flex flex-row '>
       <h1 className=' text-center'>TravelSafe</h1>
       <nav className='   '>
        <ul className='hidden  md:flex flex-row text-xl gap-4'>
            <li className='hover:text-amber-400'><a href="">Home</a></li>
            <li className='hover:text-amber-400'><a href="">Testimonials</a></li>
            <li className='hover:text-amber-400'><a href="">About</a></li>
            <li className='hover:text-amber-400'><a href="">Contact</a></li>
        </ul>
       </nav>
       <button className='cursor-pointer text-white border md:px-4 md:py-1 text-xl hover:text-black hover:bg-white hover:scale-105 transition-transform duration-300 rounded-3xl bg-black '>Book Now </button>
    </div>
  )
}

export default Navbar
