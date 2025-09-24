import React from 'react'
import image from "../assets/images/hack.jpg"

const Hero = () => {
  return (
    <div>
       <div id='Hero' className='relative items-center    flex justify-center top-0    z-10 min-h-screen'>
         
         <div className='bg-gradient-to-b inset-0 min-h-screen z-10  w-full absolute  from-transparent via-transparent  to-zinc-950 '>
          
         </div>
        <img src={image} className='top-0 inset-0  -z-10  w-2/2 h-full object-cover' alt="" />
          
          <div className='absolute flex mt-72 items-center gap-4 text-center z-10 justify-center top-0 flex-col '>
            
         <p className='text-xl  md:text-6xl   text-center text-white '>Travel with Us</p>
         <p className='  md:text-xl  px-10 md:px-20 text-white '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime non vero ratione ducimus dicta maiores! Officiis, rem aperiam suscipit, iste ipsa necessitatibus corrupti fugiat repellendus deserunt quibusdam, ipsam animi ullam.</p>

         <button className='bg-black  md:px-4 px-2 py-1 text-xl hover:scale-105 transform-transition duration-300 rounded-3xl text-white hover:text-black hover:bg-white  md:text-2xl md:py-2 cursor-pointer '>Explore Now </button>
          </div>
         

       </div>

    </div>
  )
}

export default Hero       