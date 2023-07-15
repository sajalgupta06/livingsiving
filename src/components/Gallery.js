import React from 'react'
import pg1 from '../../public/static/images/pgPhotos/pg1.jpg'
import pg2 from '../../public/static/images/pgPhotos/pg2.jpg'
import pg3 from '../../public/static/images/pgPhotos/pg3.jpg'
import pg4 from '../../public/static/images/pgPhotos/pg4.jpg'
import Image from 'next/image'

export default function Gallery() {
  return (
    <section className='g-wrapper' id='gallery'>
        <h2 className='primaryText heading'>Gallery</h2>
        <div className='g-container'>
            <div className='box'>
                <Image src={pg1} alt='livingsivingPg'></Image>
            </div>
            <div className='box'>
                <Image src={pg2} alt='livingsivingPg' ></Image>
            </div>

            <div className='box'>
                <Image src={pg3} alt='livingsivingPg'></Image>
            </div>
            <div className='box'>
                <Image src={pg4} alt='livingsivingPg'></Image>
            </div>

   
        </div>
    </section>
  )
}
