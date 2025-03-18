"use client"
import Image from "next/image"
import Link from "next/link"
import emailjs from 'emailjs-com';
import { FormEvent } from 'react';
import { ArrowRight, Download, ExternalLink, Github, Mail, Send, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import SmoothScrollLink from "@/hooks/smooth-scroll-link"

// Données fictives pour les projets
const projects = [
  {
    id: 1,
    title: "Site de chambre d'hôtes | Maison Tobias",
    description:
      "Site réalisé bénévolement, pour réserver des chambres dans une maison d'hôte. Le site est également muni d'une interface d'administration.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Next.js", "TailwindCSS"],
    demo: "https://maisontobias.fr",
  },
  {
    id: 2,
    title: "Site de reservation de voyages | TentationVoyage",
    description:
      "Site réalisé lors d'un stage en BTS. Il permet de réserver des voyages, de gérer des listes de diffusions, des utilisateurs, des widgets, via une interface d'administration.",
    image: "/tenta.png?height=300&width=500",
    technologies: ["React", "Next.js", "TailwindCSS"],
    demo: "https://www.tentationvoyage.fr/",
  },
  {
    id: 3,
    title: "Compteur de trous | Hole counter",
    description:
      "Application permettant de compter les troues dans une cible pour compter le nombre de points.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "Flask", "OpenCV", "IA"],
  },
  {
    id: 4,
    title: "Site vitrine | Portfolio",
    description:
      "Un portfolio moderne et interactif développé avec Next.js et TailwindCSS pour présenter mes projets et compétences.",
    image: "/portfolio.png?height=300&width=500",
    technologies: ["React", "Next.js", "TailwindCSS"],
    github: "https://github.com/MasWap/portfolio",
    demo: "https://example.com",
  },
]

// Données mises à jour pour les compétences
const skills = [
  {
    category: "Développement",
    items: ["PHP", "JS", "React", "Python", "SQL", "Bash"],
  },
  {
    category: "Infrastructure et DevOps",
    items: ["Git", "Docker", "CI/CD", "Kubernetes", "Windows", "Linux"],
  },
  {
    category: "Gestion de Projet",
    items: ["Asana", "Gantt", "SERT", "SWOT", "Méthodologie Agile"],
  },
  {
    category: "Conception et architecture de logiciels",
    items: ["UML", "MVC", "API Design", "TDD", "Code Review"],
  },
  {
    category: "Backend et API",
    items: ["Framework (Symfony, Express.js, Next.js)", "Base de données (PostgreSQL)", "Développement d'API (Postman, Swagger)", "Monitoring (Prometheus)"],
  },
  {
    category: "Communication et Travail d'Équipe",
    items: ["Teams", "GitHub", "GitLab", "Wiki"],
  },
  {
    category: "Bénévolat",
    items: ["Réalisation de sites web (maison d'hôtes) maisontobias.fr"],
  },
]

const sendEmail = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs.sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    e.target as HTMLFormElement,
    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
  )
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  e.target.reset();
};

export default function Home() {
  const heroRef = useScrollReveal()
  const aboutRef = useScrollReveal()
  const skillsRef = useScrollReveal({ staggered: true, staggerDelay: 100 })
  const projectsRef = useScrollReveal({ staggered: true, staggerDelay: 200 })
  const contactRef = useScrollReveal()

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-28 pb-20 bg-gradient-to-b from-soft to-background dark:from-background dark:to-background"
      >
        <div className="container" ref={heroRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                <Link href="#home">
                  Hello, je suis <span className="text-accent">Lilian Layrac</span>
                </Link>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-foreground/80">Développeur Web Full Stack</p>
              <p className="text-base md:text-lg mb-10 text-foreground/70 max-w-lg">
                Avec une appétence particulière pour le développement informatique et l'univers de l'IT,
                je vous présente mes compétences et mon parcours dans ce Portfolio à mon effigie.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <SmoothScrollLink href="#projects">
                    Découvrir mon travail
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </SmoothScrollLink>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <SmoothScrollLink href="#contact">
                    Me contacter
                    <Mail className="ml-2 h-4 w-4" />
                  </SmoothScrollLink>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end reveal">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-xl group">
                {/* Première image */}
                <Image
                  src="/me.jpeg?height=400&width=400"
                  alt="Moi"
                  fill
                  className="object-cover scale-110 absolute top-0 left-0"
                  priority
                />
                {/* Deuxième image */}
                <Image
                  src="/mev2.jpeg?height=400&width=400"
                  alt="Moi v2"
                  fill
                  className="object-cover scale-110 absolute top-0 left-2 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-x-[10px]"
                  priority
                />
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* About Section */}
      <section id="about" className="section-padding bg-secondary dark:bg-secondary/50">
        <div className="container pb-40" ref={aboutRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">
            <Link href="#about">
              À Propos
            </Link>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h3 className="text-2xl font-semibold mb-6">Mon Parcours</h3>
              <p className="mb-6 text-foreground/80">
                Mon parcours académique a débuté avec un Baccalauréat en Sciences et Technologies du Management et de la Gestion,
                option Systèmes d’Information et de Gestion, obtenu en 2020 au Lycée Polyvalent Marc Bloch à Sérignan.
              </p>
              <p className="mb-6 text-foreground/80">
                J’ai ensuite validé un BTS Services Informatiques aux Organisations, option Solutions
                Logicielles et Applications Métiers, dans le même établissement (2020-2022).
              </p>
              <p className="mb-6 text-foreground/80">
                Poursuivant mon parcours, j’ai obtenu un Bachelor de Concepteur Développeur d’Applications à l’EPSI Montpellier (2022-2023).
              </p>
              <p className="mb-6 text-foreground/80">
                Actuellement étudiant en Master à l’EPSI Montpellier, je me spécialise en tant qu’Expert en Informatique et Systèmes
                d’Information depuis septembre 2023.
              </p>
              <p className="mb-8 text-foreground/80">
                À l'issue de ce Master, je souhaite mettre en œuvre mes compétences et connaissances acquises au cours de ces années
                dans l'univers du développement informatique, mais également, dans la gestion de projets et l'architecture logicielle.
              </p>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/cv-2025-ll.pdf" target="_blank" rel="noopener noreferrer">
                  Visualiser mon CV
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="reveal">
              <Card>
                <CardHeader>
                  <CardTitle>Expérience Professionnelle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold">Développeur PHP (Symfony)</h4>
                    <p className="text-sm text-foreground/70">IRD • 09/2023 - 09/2025</p>
                    <p className="mt-2 text-sm text-foreground/80">
                      Développement d'applications web (Back & Front), services, Rédaction de documentation technique et fonctionnelle, Chefferie de projet (lancement, planification, exécution et clôture).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Développeur Full-stack (DevOps)</h4>
                    <p className="text-sm text-foreground/70">Algo Solutions • 09/2022 - 09/2023</p>
                    <p className="mt-2 text-sm text-foreground/80">
                      Création d'instances Docker, déploiements avec Ansible, Développement d'applications (Back & Front), Concept DevOps, Élaboration d'architectures logicielles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Stagiaire en Développement</h4>
                    <p className="text-sm text-foreground/70">ADSL Informatique • 01/2022 - 02/2022</p>
                    <p className="mt-2 text-sm text-foreground/80">
                      Une refonte totale des éléments créés en 2021 (développement, documentation, publication). <i>tentationvoyage.fr</i>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Stagiaire en Développement</h4>
                    <p className="text-sm text-foreground/70">ADSL Informatique • 05/2021 - 06/2021</p>
                    <p className="mt-2 text-sm text-foreground/80">
                      Analyse des demandes client et réalisation de ces dernières, Amélioration de l'interface utilisateur, Élaboration et rédaction de documents et supports techniques.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container" ref={skillsRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="staggered-item">
                <CardHeader>
                  <CardTitle>{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center p-2 rounded-md hover:bg-accent/10 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-soft dark:bg-secondary/30">
        <div className="container" ref={projectsRef}>
          <Link href="#projects">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">Projets & Réalisations</h2>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden staggered-item">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs rounded-full bg-accent/20 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button asChild variant="outline" size="sm">
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </Link>
                        </Button>
                      )}
                      {project.demo && (
                        <Button asChild size="sm">
                          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Démo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-secondary dark:bg-secondary/50">
        <div className="container pb-24" ref={contactRef}>
          <Link href="#contact">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">Contact</h2>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="reveal">
              <CardHeader>
                <CardTitle>Envoyez-moi un message</CardTitle>
                <CardDescription>Remplissez le formulaire ci-dessous pour me contacter directement.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <Input id="name" name="name" placeholder="Votre nom" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" placeholder="votre@email.com" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet
                    </label>
                    <Input id="subject" name="subject" placeholder="Sujet de votre message" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" name="message" placeholder="Votre message..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="reveal">
              <Card>
                <CardHeader>
                  <CardTitle>Informations de contact</CardTitle>
                  <CardDescription>Vous pouvez également me contacter via les moyens suivants.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-2 text-accent" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-sm text-foreground/80">lilian.layrac@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Github className="h-5 w-5 mr-2 text-accent" />
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <p className="text-sm text-foreground/80">github.com/MasWap</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Linkedin className="h-5 w-5 mr-2 text-accent" />
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <p className="text-sm text-foreground/80">linkedin.com/in/lilian-layrac</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Instagram className="h-5 w-5 mr-2 text-accent" />
                    <div>
                      <h4 className="font-medium">Instagram</h4>
                      <p className="text-sm text-foreground/80">instagram.com/lilian.lyrc/</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
