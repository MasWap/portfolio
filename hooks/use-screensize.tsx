"use client";

import { useState, useEffect } from 'react';

type ScreenSize = {
    width: number;
    height: number;
    isLaptop: boolean;
    isDesktop: boolean;
    isFHD: boolean; // 1920x1080
    isUltrawide: boolean;
    is4K: boolean;
    aspectRatio: number;
};

export function useScreenSize(): ScreenSize {
    // État initial par défaut
    const [screenSize, setScreenSize] = useState<ScreenSize>({
        width: typeof window !== 'undefined' ? window.innerWidth : 1920,
        height: typeof window !== 'undefined' ? window.innerHeight : 1080,
        isLaptop: false,
        isDesktop: false,
        isFHD: false,
        isUltrawide: false,
        is4K: false,
        aspectRatio: 16 / 9
    });

    useEffect(() => {
        // Fonction pour mettre à jour l'état
        const updateScreenSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const aspectRatio = width / height;

            setScreenSize({
                width,
                height,
                isLaptop: width >= 1024 && width < 1440,
                isDesktop: width >= 1440 && width < 1920,
                isFHD: width >= 1920 && width <= 2048 && height >= 1080 && height <= 1200,
                isUltrawide: aspectRatio > 2,
                is4K: width >= 3840,
                aspectRatio
            });
        };

        // Appeler la fonction immédiatement pour initialiser l'état
        updateScreenSize();

        // Ajouter un écouteur d'événement pour redimensionner
        window.addEventListener('resize', updateScreenSize);

        // Nettoyer l'écouteur d'événement
        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    return screenSize;
}