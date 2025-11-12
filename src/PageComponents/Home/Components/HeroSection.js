import { HERO_BACKGROUND, HERO_BACKGROUND_LAYER, HERO_SECTION_IMAGE } from '@/Constant/image'
import { Icon } from '@iconify/react'
import React from 'react'

export default function HeroSection() {
    return (
        <div className='pt-[30%] sm:pt-[20%] md:pt-[10%] flex md:flex-row flex-col custom-container pb-5 sm:pb-10 md:pb-20'>
            <div className='w-full md:w-6/10 flex flex-col gap-3 order-2 md:order-1'>
                <h2 className='font-varsity text-primary'>MR ZEYTOUN HIGH PERFORMANCE MATTE CLAY</h2>
                <span className='flex items-center font-medium flex-wrap'>
                    Effortless hold
                    <Icon width={20} icon="icon-park-outline:dot" />
                    Natural finish
                    <Icon width={20} icon="icon-park-outline:dot" />
                    Non-greasy
                </span>
                <p className='font-extralight text-sm'>Crafted for the modern man who demands strength, style, and authenticity without compromise.</p>
                <div className='flex gap-3 mt-5'>
                    <button className='rounded-full px-4 py-2 text-white bg-black' type='button'>Buy Now</button>
                    <button className='rounded-full px-4 py-2 bg-transparent border border-black' type='button'>Learn More</button>
                </div>
            </div>
            <div className='w-full md:w-3/10  order-1 md:order-2'>
                <div className='relative'>
                    <img className='w-full bg-white p-5 rounded-full' src={HERO_SECTION_IMAGE} alt="hero section image" />
                    <div className='absolute -top-[5%] -left-[5%] h-[110%] w-[110%] rounded-full border-2 border-dashed border-gray-400' />
                </div>
            </div>
        </div>
    )
}
