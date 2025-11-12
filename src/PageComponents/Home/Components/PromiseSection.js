"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function PromiseSection() {
    const backGroundRef = useRef();

    const [currentWidth, setCurrentWidth] = useState(0);
    const [currentHeight, setCurrentHeight] = useState(0);

    useEffect(() => {
        if (backGroundRef.current) {
            setCurrentWidth(backGroundRef.current.offsetWidth);
            setCurrentHeight(backGroundRef.current.offsetHeight);
        }
    }, []);

    const features = [
        {
            id: 1,
            icon: 'mdi:water-outline',
            title: 'Water-based formula easy to wash out',
            position: 'left',
        },
        {
            id: 2,
            icon: 'mdi:hand-okay',
            title: 'Strong but flexible hold to hair',
            position: 'left',
        },
        {
            id: 3,
            icon: 'mdi:leaf',
            title: 'Infused with natural ingredients',
            position: 'left',
        },
        {
            id: 4,
            icon: 'mdi:shimmer',
            title: 'Lightweight, matte finish, no shine',
            position: 'right',
        },
        {
            id: 5,
            icon: 'mdi:palette-outline',
            title: 'Designed for modern textured styles',
            position: 'right',
        },
        {
            id: 6,
            icon: 'mdi:star-outline',
            title: 'Middle Eastern excellence crafted with heritage',
            position: 'right',
        },
    ];

    const leftFeatures = features.filter((f) => f.position === 'left');
    const rightFeatures = features.filter((f) => f.position === 'right');

    return (
        <section className="custom-container relative bg-[#F7F7F7]">
            <div
                className='absolute top-0 left-0 w-full h-full bg-black'
                style={{
                    clipPath: `path("M 0 0 L ${(currentWidth / 100) * 80} 0 L 100 100 L 0 100")`,
                }}
            />
            <div className="custom-container">
                {/* Title */}
                <div ref={backGroundRef} className="text-center mb-16">
                    <h2 className="text-white uppercase tracking-wider">Why Choose Mr Zeytoun</h2>
                </div>

                {/* Main Content */}
                <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                        {/* Left Features */}
                        <div className="space-y-8 order-2 lg:order-1">
                            {leftFeatures.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="flex items-center gap-4 justify-start lg:justify-end"
                                >
                                    <div className="flex-1 lg:text-right order-2 lg:order-1">
                                        <p className="text-sm md:text-base">{feature.title}</p>
                                    </div>
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center order-1 lg:order-2">
                                        <Icon icon={feature.icon} className="w-5 h-5 text-black" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Center Image with Dashed Circles */}
                        <div className="relative flex items-center justify-center order-1 lg:order-2">
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                {/* Outer Dashed Circle - Black */}
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30 animate-[spin_20s_linear_infinite]"></div>

                                {/* Inner Dashed Circle - White */}
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 scale-75 animate-[spin_15s_linear_infinite_reverse]"></div>

                                {/* Product Image */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-48 h-48 md:w-56 md:h-56">
                                        <Image
                                            src="/images/hero-section.png"
                                            alt="Mr Zeytoun Product"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Features */}
                        <div className="space-y-8 order-3">
                            {rightFeatures.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="flex items-center gap-4 justify-start"
                                >
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                        <Icon icon={feature.icon} className="w-5 h-5 text-black" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm md:text-base">{feature.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Diagonal Split Background Effect */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-gray-100 to-transparent opacity-10 pointer-events-none hidden lg:block skew-x-[-15deg] translate-x-1/4"></div>
                </div>
            </div>
        </section>
    );
}
