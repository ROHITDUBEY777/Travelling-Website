import React from 'react'
import { FaTwitter } from "react-icons/fa6"
import { FaFacebook } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
const Contact = () => {
  return (
    <div id="Contact" className='mt-52 relative flex flex-col justify-center  min-h-screen items-center text-center   poppins  '>
      <h1 className=' w-fit h-fit   md:text-5xl '>Contact Us</h1>
      <div className='bg-zinc-800 px-10 w-1/3 h-fit   py-10 rounded-2xl border   mt-20 flex flex-col '>
        <p>Enter your name </p>
        <input type="search" className='border px-4 py-2  mt-2 mb-2' placeholder='Your name' name="" id="" />
        <p>Enter your email</p>
        <input type="search"  className='border px-4 py-2  mt-2 mb-2' placeholder='Your email here' name="" id="" />
        <button className=' px-2 py-1  bg-yellow-400 text-black  hover:text-black hover:bg-white hover:scale-105 transition-transfrom duration-300  rounded-2xl cursor-pointer'>Submit</button>
      </div>
       <div className='flex flex-row gap-6 scale-150 mt-10 cursor-pointer '>
        <FaTwitter />
        <FaFacebook />
        <FaInstagram />
         <FaLinkedin />
       </div>
    </div>
  )
}

export default Contact
