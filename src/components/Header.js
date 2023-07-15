import React from 'react'
import logo from '../../public/static/images/logo.png'
import Image from 'next/image'

export const  Header = ()=>{

    return (
        <section className="h-wrapper">
            <div className  = "flexCenter paddings innerWidth  h-container">
            <Image src={logo} alt="logo" width={100}/>

            <div className='flexCenter h-menu'>
                <a href=''>Residencies</a>
                <a href=''>Our Value</a>
                <a href=''>Contact us</a>
                <a href=''>Get Started</a>
                <button className='button'>

                <a href=''>Contact</a> 
                </button>
            </div>
            </div>
        </section>
    )

}

export default Header