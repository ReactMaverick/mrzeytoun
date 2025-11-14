import React from 'react'
import HeroSection from './Components/HeroSection'
import { HERO_BACKGROUND, HERO_BACKGROUND_LAYER } from '@/Constant/image'
import PromiseSection from './Components/PromiseSection'
import FAQ from './Components/FAQ'
import ProductDetailsSection from './Components/ProductDetailsSection'
import InstrectionSection from './Components/InstrectionSection'
import UserReatingSection from './Components/UserReatingSection'
import FooterBanner from './Components/FooterBanner'

export default function Home() {
    return (
        <>
            <section className='relative overflow-hidden custom-container p-0 '>
                <img className='absolute -z-1 h-full w-full opacity-20' src={HERO_BACKGROUND_LAYER} alt="background layer" />
                <img className='absolute -z-1 w-full md:w-auto h-[30%] md:h-full right-0' src={HERO_BACKGROUND} alt="background" />

                <HeroSection />
            </section>
            <PromiseSection />
            <ProductDetailsSection />
            <InstrectionSection />
            <UserReatingSection />
            <FAQ />
            <FooterBanner />
        </>
    )
}
