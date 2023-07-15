import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Amenties from '@/components/Amenities'
import Residencies from '@/components/Residencies'
import Value from '@/components/Value'
import Contact from '@/components/Contact'


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
    <Amenties/>
    <Residencies/>
    <Value/>
    <Contact/>
    </div>
    </>
  )
}
