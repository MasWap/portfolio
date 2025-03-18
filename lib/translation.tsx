"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types de langues disponibles
export type Language = 'fr' | 'en';

// Type pour les traductions
export type Translations = {
    [key: string]: {
        fr: string;
        en: string;
    };
}

// Nos traductions
const translations: Translations = {
    // Navigation
    "nav.home": {
        fr: "Accueil",
        en: "Home",
    },
    "nav.about": {
        fr: "À Propos",
        en: "About",
    },
    "nav.skills": {
        fr: "Compétences",
        en: "Skills",
    },
    "nav.projects": {
        fr: "Projets",
        en: "Projects",
    },
    "nav.contact": {
        fr: "Contact",
        en: "Contact",
    },

    // Hero section
    "hero.greeting": {
        fr: "Hello, je suis",
        en: "Hello, I am",
    },
    "hero.title": {
        fr: "Développeur Web Full Stack",
        en: "Full Stack Web Developer",
    },
    "hero.description": {
        fr: "Avec une appétence particulière pour le développement informatique et l'univers de l'IT, je vous présente mes compétences et mon parcours dans ce Portfolio à mon effigie.",
        en: "With a particular interest in software development and the IT world, I present my skills and career path in this personalized Portfolio.",
    },
    "hero.cta.discover": {
        fr: "Découvrir mon travail",
        en: "Discover my work",
    },
    "hero.cta.contact": {
        fr: "Me contacter",
        en: "Contact me",
    },

    // About section
    "about.title": {
        fr: "À Propos",
        en: "About Me",
    },
    "about.journey.title": {
        fr: "Mon Parcours",
        en: "My Journey",
    },
    "about.journey.bac": {
        fr: "Mon parcours académique a débuté avec un Baccalauréat en Sciences et Technologies du Management et de la Gestion, option Systèmes d'Information et de Gestion, obtenu en 2020 au Lycée Polyvalent Marc Bloch à Sérignan.",
        en: "My academic journey began with a Baccalaureate in Management and Administration Sciences and Technologies, with a specialization in Information Systems and Management, obtained in 2020 at Lycée Polyvalent Marc Bloch in Sérignan.",
    },
    "about.journey.bts": {
        fr: "J'ai ensuite validé un BTS Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers, dans le même établissement (2020-2022).",
        en: "I then completed a BTS in IT Services for Organizations, specializing in Software Solutions and Business Applications, at the same institution (2020-2022).",
    },
    "about.journey.bachelor": {
        fr: "Poursuivant mon parcours, j'ai obtenu un Bachelor de Concepteur Développeur d'Applications à l'EPSI Montpellier (2022-2023).",
        en: "Continuing my education, I obtained a Bachelor's degree as an Application Developer Designer at EPSI Montpellier (2022-2023).",
    },
    "about.journey.master": {
        fr: "Actuellement étudiant en Master à l'EPSI Montpellier, je me spécialise en tant qu'Expert en Informatique et Systèmes d'Information depuis septembre 2023.",
        en: "Currently a Master's student at EPSI Montpellier, I have been specializing as an IT and Information Systems Expert since September 2023.",
    },
    "about.journey.future": {
        fr: "À l'issue de ce Master, je souhaite mettre en œuvre mes compétences et connaissances acquises au cours de ces années dans l'univers du développement informatique, mais également, dans la gestion de projets et l'architecture logicielle.",
        en: "After completing this Master's degree, I aim to apply the skills and knowledge acquired over these years in the field of software development, as well as in project management and software architecture.",
    },
    "about.cv": {
        fr: "Visualiser mon CV",
        en: "View my CV",
    },
    "about.experience.title": {
        fr: "Expérience Professionnelle",
        en: "Professional Experience",
    },
    "about.experience.ird.title": {
        fr: "Développeur PHP (Symfony)",
        en: "PHP Developer (Symfony)",
    },
    "about.experience.ird.company": {
        fr: "IRD • 09/2023 - 09/2025",
        en: "IRD • 09/2023 - 09/2025",
    },
    "about.experience.ird.description": {
        fr: "Développement d'applications web (Back & Front), services, Rédaction de documentation technique et fonctionnelle, Chefferie de projet (lancement, planification, exécution et clôture).",
        en: "Web application development (Back & Front), services, Technical and functional documentation writing, Project management (initiation, planning, execution, and closure).",
    },
    "about.experience.algo.title": {
        fr: "Développeur Full-stack (DevOps)",
        en: "Full-stack Developer (DevOps)",
    },
    "about.experience.algo.company": {
        fr: "Algo Solutions • 09/2022 - 09/2023",
        en: "Algo Solutions • 09/2022 - 09/2023",
    },
    "about.experience.algo.description": {
        fr: "Création d'instances Docker, déploiements avec Ansible, Développement d'applications (Back & Front), Concept DevOps, Élaboration d'architectures logicielles.",
        en: "Creation of Docker instances, deployments with Ansible, Application development (Back & Front), DevOps concepts, Software architecture design.",
    },
    "about.experience.adsl2.title": {
        fr: "Stagiaire en Développement",
        en: "Development Intern",
    },
    "about.experience.adsl2.company": {
        fr: "ADSL Informatique • 01/2022 - 02/2022",
        en: "ADSL Informatique • 01/2022 - 02/2022",
    },
    "about.experience.adsl2.description": {
        fr: "Une refonte totale des éléments créés en 2021 (développement, documentation, publication). tentationvoyage.fr",
        en: "A complete overhaul of elements created in 2021 (development, documentation, publication). tentationvoyage.fr",
    },
    "about.experience.adsl1.title": {
        fr: "Stagiaire en Développement",
        en: "Development Intern",
    },
    "about.experience.adsl1.company": {
        fr: "ADSL Informatique • 05/2021 - 06/2021",
        en: "ADSL Informatique • 05/2021 - 06/2021",
    },
    "about.experience.adsl1.description": {
        fr: "Analyse des demandes client et réalisation de ces dernières, Amélioration de l'interface utilisateur, Élaboration et rédaction de documents et supports techniques.",
        en: "Analysis and implementation of client requests, User interface improvement, Development and writing of technical documents and support materials.",
    },

    // Skills section
    "skills.title": {
        fr: "Compétences",
        en: "Skills",
    },
    "skills.development": {
        fr: "Développement",
        en: "Development",
    },
    "skills.infrastructure": {
        fr: "Infrastructure et DevOps",
        en: "Infrastructure and DevOps",
    },
    "skills.projectManagement": {
        fr: "Gestion de Projet",
        en: "Project Management",
    },
    "skills.softwareArchitecture": {
        fr: "Conception et architecture de logiciels",
        en: "Software Design and Architecture",
    },
    "skills.backendApi": {
        fr: "Backend et API",
        en: "Backend and API",
    },
    "skills.communication": {
        fr: "Communication et Travail d'Équipe",
        en: "Communication and Teamwork",
    },
    "skills.volunteer": {
        fr: "Bénévolat",
        en: "Volunteer Work",
    },
    // Développement
    "skills.development.php": {
        fr: "PHP",
        en: "PHP"
    },
    "skills.development.js": {
        fr: "JavaScript",
        en: "JavaScript"
    },
    "skills.development.react": {
        fr: "React",
        en: "React"
    },
    "skills.development.python": {
        fr: "Python",
        en: "Python"
    },
    "skills.development.sql": {
        fr: "SQL",
        en: "SQL"
    },
    "skills.development.bash": {
        fr: "Bash",
        en: "Bash"
    },

    // Infrastructure et DevOps
    "skills.infrastructure.git": {
        fr: "Git",
        en: "Git"
    },
    "skills.infrastructure.docker": {
        fr: "Docker",
        en: "Docker"
    },
    "skills.infrastructure.cicd": {
        fr: "CI/CD",
        en: "CI/CD"
    },
    "skills.infrastructure.kubernetes": {
        fr: "Kubernetes",
        en: "Kubernetes"
    },
    "skills.infrastructure.windows": {
        fr: "Windows",
        en: "Windows"
    },
    "skills.infrastructure.linux": {
        fr: "Linux",
        en: "Linux"
    },

    // Gestion de Projet
    "skills.projectManagement.asana": {
        fr: "Asana",
        en: "Asana"
    },
    "skills.projectManagement.gantt": {
        fr: "Gantt",
        en: "Gantt"
    },
    "skills.projectManagement.sert": {
        fr: "SERT",
        en: "SERT"
    },
    "skills.projectManagement.swot": {
        fr: "SWOT",
        en: "SWOT"
    },
    "skills.projectManagement.agile": {
        fr: "Méthodologie Agile",
        en: "Agile Methodology"
    },

    // Conception et architecture
    "skills.softwareArchitecture.uml": {
        fr: "UML",
        en: "UML"
    },
    "skills.softwareArchitecture.mvc": {
        fr: "MVC",
        en: "MVC"
    },
    "skills.softwareArchitecture.apiDesign": {
        fr: "API Design",
        en: "API Design"
    },
    "skills.softwareArchitecture.tdd": {
        fr: "TDD",
        en: "TDD"
    },
    "skills.softwareArchitecture.codeReview": {
        fr: "Code Review",
        en: "Code Review"
    },

    // Backend et API
    "skills.backendApi.frameworks": {
        fr: "Framework (Symfony, Express.js, Next.js)",
        en: "Frameworks (Symfony, Express.js, Next.js)"
    },
    "skills.backendApi.databases": {
        fr: "Base de données (PostgreSQL)",
        en: "Databases (PostgreSQL)"
    },
    "skills.backendApi.apiDev": {
        fr: "Développement d'API (Postman, Swagger)",
        en: "API Development (Postman, Swagger)"
    },
    "skills.backendApi.monitoring": {
        fr: "Monitoring (Prometheus)",
        en: "Monitoring (Prometheus)"
    },

    // Communication
    "skills.communication.teams": {
        fr: "Teams",
        en: "Teams"
    },
    "skills.communication.github": {
        fr: "GitHub",
        en: "GitHub"
    },
    "skills.communication.gitlab": {
        fr: "GitLab",
        en: "GitLab"
    },
    "skills.communication.wiki": {
        fr: "Wiki",
        en: "Wiki"
    },

    // Bénévolat
    "skills.volunteer.websites": {
        fr: "Réalisation de sites web (maison d'hôtes) maisontobias.fr",
        en: "Website development (guest house) maisontobias.fr"
    },

    // Projects section
    "projects.title": {
        fr: "Projets & Réalisations",
        en: "Projects & Achievements",
    },
    "projects.maisontobias.title": {
        fr: "Site de chambre d'hôtes | Maison Tobias",
        en: "Guest House Website | Maison Tobias"
    },
    "projects.maisontobias.description": {
        fr: "Site réalisé bénévolement, pour réserver des chambres dans une maison d'hôte. Le site est également muni d'une interface d'administration.",
        en: "Website created on a volunteer basis for booking rooms in a guest house. The site also includes an administration interface."
    },
    "projects.tenta.title": {
        fr: "Site de réservation de voyages | TentationVoyage",
        en: "Travel Booking Website | TentationVoyage"
    },
    "projects.tenta.description": {
        fr: "Site réalisé lors d'un stage en BTS. Il permet de réserver des voyages, de gérer des listes de diffusions, des utilisateurs, des widgets, via une interface d'administration.",
        en: "Website created during a BTS internship. It allows booking trips, managing mailing lists, users, widgets, through an administration interface."
    },
    "projects.holecounter.title": {
        fr: "Compteur de trous | Hole counter",
        en: "Hole Counter | Target scoring tool"
    },
    "projects.holecounter.description": {
        fr: "Application permettant de compter les trous dans une cible pour calculer le nombre de points.",
        en: "Application for counting holes in a target to calculate the number of points."
    },
    "projects.portfolio.title": {
        fr: "Site vitrine | Portfolio",
        en: "Showcase Website | Portfolio"
    },
    "projects.portfolio.description": {
        fr: "Un portfolio moderne et interactif développé avec Next.js et TailwindCSS pour présenter mes projets et compétences.",
        en: "A modern and interactive portfolio developed with Next.js and TailwindCSS to showcase my projects and skills."
    },
    "projects.github": {
        fr: "GitHub",
        en: "GitHub",
    },
    "projects.demo": {
        fr: "Démo",
        en: "Demo",
    },

    // Contact section
    "contact.title": {
        fr: "Contact",
        en: "Contact",
    },
    "contact.form.title": {
        fr: "Envoyez-moi un message",
        en: "Send me a message",
    },
    "contact.form.description": {
        fr: "Remplissez le formulaire ci-dessous pour me contacter directement.",
        en: "Fill out the form below to contact me directly.",
    },
    "contact.form.name": {
        fr: "Nom",
        en: "Name",
    },
    "contact.form.email": {
        fr: "Email",
        en: "Email",
    },
    "contact.form.youremail": {
        fr: "votre@email@gmail.com",
        en: "your@email@gmail.com",
    },
    "contact.form.subject": {
        fr: "Sujet",
        en: "Subject",
    },
    "contact.form.message": {
        fr: "Message",
        en: "Message",
    },
    "contact.form.submit": {
        fr: "Envoyer le message",
        en: "Send message",
    },
    "contact.form.sending": {
        fr: "Envoi en cours...",
        en: "Sending...",
    },
    "contact.form.success": {
        fr: "Envoyé avec succès",
        en: "Sent successfully",
    },
    "contact.form.success.message": {
        fr: "Merci pour votre message ! Je vous répondrai dès que possible.",
        en: "Thank you for your message! I will respond as soon as possible.",
    },
    "contact.form.error": {
        fr: "Erreur",
        en: "Error",
    },
    "contact.form.error.message": {
        fr: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
        en: "An error occurred while sending the message. Please try again.",
    },
    "contact.info.title": {
        fr: "Informations de contact",
        en: "Contact Information",
    },
    "contact.info.description": {
        fr: "Vous pouvez également me contacter via les moyens suivants.",
        en: "You can also contact me through the following means.",
    },
    "footer.copyright": {
    fr: "© {year} Portfolio. Tous droits réservés. Lilian Layrac",
    en: "© {year} Portfolio. All rights reserved. Lilian Layrac"
},
};

// Contexte pour le système de traduction
type TranslationContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Provider pour le contexte de traduction
export function TranslationProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('fr');

    // Chargement de la langue depuis le localStorage au montage du composant
    useEffect(() => {
        const storedLanguage = localStorage.getItem('language') as Language;
        if (storedLanguage && (storedLanguage === 'fr' || storedLanguage === 'en')) {
            setLanguage(storedLanguage);
        } else {
            // Utiliser la langue du navigateur comme fallback
            const browserLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';
            setLanguage(browserLanguage);
        }
    }, []);

    // Sauvegarde de la langue dans le localStorage à chaque changement
    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    // Fonction de traduction
    const t = (key: string): string => {
        if (!translations[key]) {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
        return translations[key][language];
    };

    return (
        <TranslationContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </TranslationContext.Provider>
    );
}

// Hook pour utiliser les traductions
export function useTranslation() {
    const context = useContext(TranslationContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
}

// Composant sélecteur de langue
export function LanguageSelector() {
    const { language, setLanguage } = useTranslation();

    return (
        <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/20 bg-background hover:bg-accent/10 transition-colors"
            aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
        >
            <span className="font-medium text-sm">
                {language === 'fr' ? 'EN' : 'FR'}
            </span>
        </button>
    );
}