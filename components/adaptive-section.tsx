"use client";

import React, { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useScreenSize } from '@/hooks/use-screensize';

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
    fullHeight?: boolean;
    backgroundColor?: string;
}

export const AdaptiveSection = forwardRef<HTMLElement, SectionProps>(
    ({ id, children, className, fullHeight = true, backgroundColor }, ref) => {
        const { height, isFHD, isLaptop } = useScreenSize();

        // Ajuster la hauteur en fonction de la densité de contenu
        const contentDensity = React.Children.count(children);
        const getContentAdjustedHeight = () => {
            if (!fullHeight) return '';

            // Pour les sections avec beaucoup de contenu, on peut ajuster
            if (contentDensity > 10) {
                return 'min-h-screen py-24';
            }

            // Pour FHD avec peu de contenu, exactement la hauteur de l'écran
            if (isFHD && contentDensity < 5) {
                return 'h-screen';
            }

            // Pour les petits écrans, ajoutez plus d'espace
            if (isLaptop) {
                return 'min-h-screen py-16';
            }

            return 'min-h-screen';
        };

        return (
            <section
                id={id}
                ref={ref}
                className={cn(
                    'w-full relative flex items-center',
                    getContentAdjustedHeight(),
                    backgroundColor,
                    className
                )}
            >
                <div className="container">
                    {children}
                </div>
            </section>
        );
    }
);

AdaptiveSection.displayName = 'AdaptiveSection';