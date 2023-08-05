'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import SaasSec from './components/Body/SaasSec';
import { SaasSec1 } from './components/Body/SaasSec1';
import SaasSec2 from './components/Body/SaasSec2';
import SassSec3 from './components/Body/SassSec3';
import PricingSec from './components/Body/PricingSec'
import Testimonialslider from './components/slider/testimonialslider'
import Steps from './components/howitworks/steps'
import Navs from './components/Real-update/nav-tab'

export default function Home() {

  return (
    <>
      <div className='mt-5 pt-2'>
        <SaasSec />
        <Steps/>
        <Navs/>
        <SaasSec1 />
        <SaasSec2 />
        <Testimonialslider/>
        <PricingSec />
        <SassSec3 />
      </div>
    </>
  )
}
