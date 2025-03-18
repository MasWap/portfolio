"use client"
import { useEffect, useRef } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function SeaAnimation() {
    const boatRef = useRef<HTMLDivElement>(null);

    return (
        <div className="absolute bottom-0 left-0 right-0 h-[150px] overflow-hidden">
            {/* Vagues de la mer */}
            <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-teal to-primary">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
            </div>

            {/* Animation Lottie du bateau */}
            <div
                ref={boatRef}
                className="absolute boat-container"
                style={{
                    bottom: '-45px',
                    width: '150px',
                    height: '150px',
                    animation: 'moveBoat 40s linear infinite'
                }}
            >
                <DotLottieReact
                    src="https://lottie.host/02ea3043-de29-433b-912a-617191bf50c5/EoCct948p9.lottie"
                    loop
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        </div>
    )
}