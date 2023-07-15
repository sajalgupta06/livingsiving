import Image from 'next/image'
import React from 'react'
import contactPhoto from '../../public/static/images/contactPhoto.jpg'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { BsChatSquareFill } from 'react-icons/bs'

export default function Contact() {
  return (
    <section className='c-wrapper' id="contact">
        <div className='paddings innerWidth flexCenter c-container'>
           <div className='flexColStart c-left'>
            <span className='orangeText'>Our Contacts</span>
            <span className='primaryText'>Easy to contact us</span>
            <span className='secondaryText'>We always ready to help by providing the best services for you. We beleive a good blace to live can make your life better  </span>
            
            <div className='flexColStart contactModes'>
            {/* First Row */}
            <div className='flexStart row'>
                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                            <MdCall size={25}></MdCall>
                        </div>
                        <div className='flexColStart detail'>
                            <span className='primaryText'>Mohit Singhal</span>
                            <span className='secondaryText'  >+91 7065880988</span>
                        </div>
                    </div>
                    <a className='flexCenter button' href="tel:+917065880988" >Call Now</a>
                </div>

                {/* Second Mode */}

                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                        <BsChatSquareFill size={25}  ></BsChatSquareFill>
                        </div>
                        <div className='flexColStart detail'>
                            <span className='primaryText'>Message</span>
                            <span className='secondaryText'>+91 70658 80988</span>
                        </div>
                    </div>
                    <a className='flexCenter button' href="sms:+917065880988" >Message Now</a>
                </div>

            </div>

          

        </div>
            </div>

    

            <div className='flexEnd c-right'>
                <div className='image-container'>
                    <Image src={contactPhoto} alt=''></Image>
                </div>
            </div>

        </div>
    </section>
  )
}
