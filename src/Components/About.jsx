import React, { useEffect, useRef, useState } from 'react'
import about from '../info/about'
import {gsap} from "gsap"; 
import {motion, useAnimation,useInView} from "framer-motion"

const About = () => {

  const refcatd = useRef(null);
  const [prevscroll,setprevscroll] = useState(0);
  const [scrollingdown,setscrollingdown] = useState(false);

  const inviewcard = useInView(refcatd,{once:true,amount:0.5});
  const controlcard = useAnimation();
 


  useEffect((
  )=>{
    const handlescroll = () =>{
      const current = window.scrollY;
      setscrollingdown(current > prevscroll);
      setprevscroll(current);
    }

    window.addEventListener('scroll',handlescroll);

    return ()=>window.removeEventListener('scroll',handlescroll);
  },[prevscroll])

  useEffect(()=>{
    if(inviewcard && scrollingdown){
      controlcard.start({opacity:1 , y:0})
    }
  },[inviewcard,controlcard,scrollingdown])
  return (
    <>
        
    <div id='About' className='poppins   min-h-screen relative top-0 items-center text-start px-20 mt-52 justify-center'>
      
       <h1 className='poppins text-6xl text-center '> Discover the World </h1>
 
       <motion.div
       initial={{y:50,opacity:0.5}}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{duration:1,ease:"easeInOut"}}
             viewport={{ once: true, amount: 0.4 }} 
       animate={controlcard}
       className='grid      w-full mt-10 grid-cols-3  items-center gap-8   '>
          
      {about.map((item)=>(
        <div
         key={item.id}
     
        className='    transform-transition duration-300     cursor-pointer hover:scale-105   '>
            <ul className=''>
              <img src={item.backimage} className='w-full top-0 inset-0 rounded-2xl  mb-6' alt="" />
              
              <p className='font-bold mb-10 mt-6 text-xl'>{item.name}</p>

              
              <button className=' px-2 py-1  bg-yellow-400 text-black  hover:text-black hover:bg-white hover:scale-105 transition-transfrom duration-300  rounded-2xl cursor-pointer'>{item.price} {item.button}</button>
            
            </ul>
          </div>
      ))}
   
      </motion.div>
    </div>
      </>
  )
}

export default About
