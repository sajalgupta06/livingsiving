import Image from 'next/image'
import React from 'react'
import prologis from '../../public/static/images/prologis.png'
import tower from '../../public/static/images/tower.png'
import equinix from '../../public/static/images/equinix.png'
import realty from '../../public/static/images/realty.png'

export default function Amenties() {
  return (
    <section className='a-wrapper'>
        <div className='paddings innerWidth flexCenter a-container'>
            <Image src={prologis} alt='' ></Image>
            <Image src={tower} alt='' ></Image>
            <Image src={equinix} alt='' ></Image>
            <Image src={realty} alt='' ></Image>
        </div>

    </section>
  )
}
