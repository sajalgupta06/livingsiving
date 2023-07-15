import React from 'react'
import heroImage from '../../public/static/images/pgMainPhoto.jpg'
import Image from 'next/image'
import CountUp from 'react-countup'
import {HiLocationMarker} from 'react-icons/hi'
import {motion} from 'framer-motion'

export default function Hero() {
  return (
    <section className='hero-wrapper' >
        <div className='colorBand'></div>
    <div className='paddings innerWidth flexCenter hero-container'>

    <div className='flexColStart hero-left'>

        <div className='hero-title'>
            {/* <div className='orange-circle'></div> */}
          
            <motion.h1
            initial={{y:"2rem",opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{
                duration:2,
                type:"spring"
            }}
            >
                <div>
                <h1>Discover <br></br>
            Most Suitable <br/> Room
            </h1>  
                </div>
                
            
            </motion.h1>
          
        </div>

        <div className='flexColStart hero-des'>
        <span className="secondaryText">Find a variety of rooms that suits you very easily</span>
        <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
        </div>

        {/* <div className='search-bar'>
            <HiLocationMarker color ="var(--blue)" size = {25} />
            <input type='text'/>
            <button className='button'>Search</button>
        </div> */}

        <div className='flexCenter stats'>

        <div className='flexColCenter stat'>
                <span>
                    <CountUp start ={500} end={900} duration ={4} ></CountUp>
                    <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
            </div>
            
            <div className='flexColCenter stat'>
                <span>
                    <CountUp start ={0} end={10} duration ={4} ></CountUp>
                    <span>+</span>
                </span>
                <span className='secondaryText'>Total Livings</span>
            </div>

            <div className='flexColCenter stat'>
                <span>
                    <CountUp start ={5} end={10} duration ={4} ></CountUp>
                    <span>+</span>
                </span>
                <span className='secondaryText'>Ameneties</span>
            </div>
        </div>

    </div>
    <div className='hero-right'>
        <div className='image-container'>

            <motion.div
            initial={{x:"7rem",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{
                duration:2,
                type:'spring'
            }}
            >

            <Image src={heroImage} alt=""></Image>
            </motion.div>
        </div>
    </div>



    </div>



    </section>
  )
}
