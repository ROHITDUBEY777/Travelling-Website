import React from 'react'
import about from '../info/about'

const About = () => {
  return (
    <div className='poppins min-h-screen relative top-0 items-center text-start px-20 mt-52 justify-center'>
      

      <h1 className='poppins text-6xl text-center '> Discover the World </h1>

       <div className='grid      w-full mt-10 grid-cols-3  items-center gap-8   '>

      {about.map((item)=>(
        <div className='     transform-transition duration-300     cursor-pointer hover:scale-105   '>
            <ul className=''>
              <img src={item.backimage} className='w-full top-0 inset-0 rounded-2xl  mb-6' alt="" />
              
              <p className='mb-10 mt-6 text-xl'>{item.name}</p>

              
              <button className=' px-2 py-1  bg-black text-white hover:text-black hover:bg-white hover:scale-105 transition-transfrom duration-300  rounded-2xl cursor-pointer'>{item.price} {item.button}</button>
            
            </ul>
          </div>
      ))}
   
      </div>
    </div>
  )
}

export default About
