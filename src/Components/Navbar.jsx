import React from 'react'
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {



  const handlescroll = (id) =>{
      const element = document.getElementById(id);
        if(element){
          const smoother = ScrollSmoother.get();
           if(smoother){
             smoother.scrollTo(element,true);
           }
           else{

             element.scrollIntoView({behavior:"smooth"})
           }
        }

  }
  
  return (
    <div className='poppins fixed   w-full bg-transparent  backdrop-blur-3xl text-2xl text-white  py-5  px-4  accent-zinc-100 z-50  top-0 left-0 right-0 justify-center text-center  md:justify-between flex flex-row '>
       <h1 className=' text-center'>TravelSafe</h1>
       <nav className='   '>
        <ul className='hidden  md:flex flex-row text-xl gap-4'>
            <li onClick={() => handlescroll("Hero")} className='cursor-pointer hover:text-amber-400'>Home</li>
            <li onClick={() => handlescroll("Footer")} className=' cursor-pointer hover:text-amber-400'>Testimonials</li>
            <li onClick={() => handlescroll("About")} className= ' cursor-pointer hover:text-amber-400'>About</li>
            <li onClick={() => handlescroll("Contact")}  className=' cursor-pointer hover:text-amber-400'>Contact</li>
        </ul>
       </nav> 
       <div className='gap-4 flex'>
         <div className='cursor-pointer my-auto'>
           <header >
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
         </div>
       <button className='cursor-pointer my-auto text-white border md:px-4 md:py-1 text-xl hover:text-black hover:bg-white hover:scale-105 transition-transform duration-300 rounded-3xl bg-black '>Book Now </button>
       </div>
    </div>
  )
}

export default Navbar
