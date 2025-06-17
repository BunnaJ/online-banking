import React from 'react'
import HeroSection from './HeroSection'
import Sections from './Sections'
import ThirdSection from '@/components/sections/ThirdSection'

export default function HomeTemplate() {
  return (
    <>
    <main>
        <HeroSection/>
        <Sections/>
        <ThirdSection/>

    </main>
    </>
  )
}
