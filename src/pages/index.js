import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Amenties2 from '@/components/Amenities2'
import Residencies from '@/components/Residencies'
import Amenities from '@/components/Amenities'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Location from '@/components/Location'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='App'>

    <div>
    <div className='white-gradient'/>
     <Header/>
     <Hero/>
    </div>
    {/* <Amenties2/> */}
    {/* <Residencies/> */}
    <Amenities/>
    <Gallery/>
    {/* <Testimonials/> */}
    <Location/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}
