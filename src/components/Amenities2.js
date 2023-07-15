import Image from 'next/image'
import React from 'react'
import boys from '../../public/static/images/boys.png'
import womens from '../../public/static/images/womens.png'


export default function Amenties2() {
  return (
    <section className='a-wrapper' >
        <div className='paddings innerWidth flexCenter a-container'>
            <Image src={boys} alt='' ></Image>
            <Image src={womens} alt='' ></Image>

        </div>

    </section>
  )
}
