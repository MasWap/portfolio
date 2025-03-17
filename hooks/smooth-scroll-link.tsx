"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function SmoothScrollLink({ href, children, className = "" }: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Vérifier si le lien est une ancre
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        
        // Mettre à jour l'URL sans recharger la page
        window.history.pushState({}, "", href);
      }
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}