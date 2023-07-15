import Image from 'next/image'
import React from 'react'
import contactPhoto from '../../public/static/images/contact.jpg'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi'

export default function Contact() {
  return (
    <section className='c-wrapper'>
        <div className='paddings innerWidth flexCenter c-container'>
           <div className='flexColStart c-left'>
            <span className='orangeText'>Our Contacts</span>
            <span className='primaryText'>Easy to contact us</span>
            <span className='secondaryText'>We always ready to help by providing the best services for you. We beleive a good blace to live can make your life better  </span>
            </div>

        <div className='flexColStart contactModes'>
            <div className='flexColStart row'>

                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                            <MdCall size={25}></MdCall>
                        </div>
                        <div className='flexColStart detail'>
                            <span className='primaryText'>Call</span>
                            <span className='secondaryText'>+91 9977859801</span>
                        </div>
                    </div>
                    <div className='flexCenter button'>Call Now</div>
                </div>



                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className='flexColStart detail'>
                            <span className='primaryText'>Chat</span>
                            <span className='secondaryText'>+91 9977859801</span>
                        </div>
                    </div>
                    <div className='flexCenter button'>Chat Now</div>
                </div>



                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                            <HiChatBubbleBottomCenter size={25}></HiChatBubbleBottomCenter>
                        </div>
                        <div className='flexColStart detail'>
                            <span className='primaryText'>Message</span>
                            <span className='secondaryText'>+91 9977859801</span>
                        </div>
                    </div>
                    <div className='flexCenter button'>Message Now</div>
                </div>


            </div>
        </div>

            <div className='c-right'>
                <div className='image-container'>
                    <Image src={contactPhoto} alt=''></Image>
                </div>
            </div>

        </div>
    </section>
  )
}
