"use client"
import { useState, useEffect, FormEvent } from 'react';
import Image from "next/image"
import Link from "next/link"
import emailjs from '@emailjs/browser';
import { ArrowRight, Download, ExternalLink, Github, Mail, Send, Linkedin, Instagram, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import SmoothScrollLink from "@/hooks/smooth-scroll-link"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AdaptiveSection } from '@/components/adaptive-section';
import { useTranslation } from '@/lib/translation';

// Données fictives pour les projets
const projects = [
  {
    id: 1,
    titleKey: "projects.maisontobias.title",
    descriptionKey: "projects.maisontobias.description",
    image: "/maisontobias.png?height=300&width=500",
    technologies: ["React", "Next.js", "TailwindCSS"],
    demo: "https://maisontobias.fr",
  },
  {
    id: 2,
    titleKey: "projects.tenta.title",
    descriptionKey: "projects.tenta.description",
    image: "/tenta.png?height=300&width=500",
    technologies: ["React", "Next.js", "TailwindCSS"],
    demo: "https://www.tentationvoyage.fr/",
  },
  {
    id: 3,
    titleKey: "projects.holecounter.title",
    descriptionKey: "projects.holecounter.description",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "Flask", "OpenCV", "IA"],
  },
  {
    id: 4,
    titleKey: "projects.portfolio.title",
    descriptionKey: "projects.portfolio.description",
    image: "/portfolio.png?height=300&width=500",
    technologies: ["React", "Next.js", "TailwindCSS"],
    github: "https://github.com/MasWap/portfolio",
    demo: "https://example.com",
  },
]

// Données mises à jour pour les compétences
const skills = [
  {
    categoryKey: "skills.development",
    items: [
      { key: "skills.development.php" },
      { key: "skills.development.js" },
      { key: "skills.development.react" },
      { key: "skills.development.python" },
      { key: "skills.development.sql" },
      { key: "skills.development.bash" },
    ],
  },
  {
    categoryKey: "skills.infrastructure",
    items: [
      { key: "skills.infrastructure.git" },
      { key: "skills.infrastructure.docker" },
      { key: "skills.infrastructure.cicd" },
      { key: "skills.infrastructure.kubernetes" },
      { key: "skills.infrastructure.windows" },
      { key: "skills.infrastructure.linux" },
    ],
  },
  {
    categoryKey: "skills.projectManagement",
    items: [
      { key: "skills.projectManagement.asana" },
      { key: "skills.projectManagement.gantt" },
      { key: "skills.projectManagement.sert" },
      { key: "skills.projectManagement.swot" },
      { key: "skills.projectManagement.agile" },
    ],
  },
  {
    categoryKey: "skills.softwareArchitecture",
    items: [
      { key: "skills.softwareArchitecture.uml" },
      { key: "skills.softwareArchitecture.mvc" },
      { key: "skills.softwareArchitecture.apiDesign" },
      { key: "skills.softwareArchitecture.tdd" },
      { key: "skills.softwareArchitecture.codeReview" },
    ],
  },
  {
    categoryKey: "skills.backendApi",
    items: [
      { key: "skills.backendApi.frameworks" },
      { key: "skills.backendApi.databases" },
      { key: "skills.backendApi.apiDev" },
      { key: "skills.backendApi.monitoring" },
    ],
  },
  {
    categoryKey: "skills.communication",
    items: [
      { key: "skills.communication.teams" },
      { key: "skills.communication.github" },
      { key: "skills.communication.gitlab" },
      { key: "skills.communication.wiki" },
    ],
  },
  {
    categoryKey: "skills.volunteer",
    items: [
      { key: "skills.volunteer.websites" },
    ],
  },
]

export default function Home() {
  const { t } = useTranslation();
  const heroRef = useScrollReveal()
  const aboutRef = useScrollReveal()
  const skillsRef = useScrollReveal({ staggered: true, staggerDelay: 100 })
  const projectsRef = useScrollReveal({ staggered: true, staggerDelay: 200 })
  const contactRef = useScrollReveal()
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  useEffect(() => {
    emailjs.init("6G66gCydOr0k-L6iJ");
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Récupérer les valeurs du formulaire
    const form = e.target as HTMLFormElement;
    const formData = {
      from_name: form.user_name.value,
      reply_to: form.user_email.value,
      subject: form.subject.value,
      message: form.message.value
    };
    
    emailjs.send(
      "service_zqivz22",
      "template_r8eem38",
      formData,
      "6G66gCydOr0k-L6iJ"
    )
    .then((result) => {
      console.log('Succès:', result.text);
      setSubmitStatus('success');
      form.reset();
    }, (error) => {
      console.log('Erreur:', error.text);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <>
      {/* Hero Section */}
      <AdaptiveSection 
        id="home" 
        ref={heroRef}
        className="pt-28 pb-20" 
        backgroundColor="bg-gradient-to-b from-soft to-background dark:from-background dark:to-background"
      >
        <div className="container" ref={heroRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                <Link href="#home">
                  {t('hero.greeting')} <span className="text-accent">Lilian Layrac</span>
                </Link>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-foreground/80">{t('hero.title')}</p>
              <p className="text-base md:text-lg mb-10 text-foreground/70 max-w-lg">
                {t('hero.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <SmoothScrollLink href="#projects">
                    {t('hero.cta.discover')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </SmoothScrollLink>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <SmoothScrollLink href="#contact">
                    {t('hero.cta.contact')}
                    <Mail className="ml-2 h-4 w-4" />
                  </SmoothScrollLink>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end reveal">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-xl group">
                <Image
                  src="/me.jpeg?height=400&width=400"
                  alt="Moi"
                  fill
                  className="object-cover scale-110 absolute top-0 left-0"
                  priority
                />
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
      </AdaptiveSection>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* About Section */}
      <AdaptiveSection 
        id="about" 
        ref={aboutRef}
        backgroundColor="bg-secondary dark:bg-secondary/50"
      >
        <div className="container pb-40" ref={aboutRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">
            <Link href="#about">
              {t('about.title')}
            </Link>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h3 className="text-2xl font-semibold mb-6">{t('about.journey.title')}</h3>
              <p className="mb-6 text-foreground/80">
                {t('about.journey.bac')}
              </p>
              <p className="mb-6 text-foreground/80">
                {t('about.journey.bts')}
              </p>
              <p className="mb-6 text-foreground/80">
                {t('about.journey.bachelor')}
              </p>
              <p className="mb-6 text-foreground/80">
                {t('about.journey.master')}
              </p>
              <p className="mb-8 text-foreground/80">
                {t('about.journey.future')}
              </p>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/cv-2025-ll.pdf" target="_blank" rel="noopener noreferrer">
                  {t('about.cv')}
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="reveal">
              <Card>
                <CardHeader>
                  <CardTitle>{t('about.experience.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold">{t('about.experience.ird.title')}</h4>
                    <p className="text-sm text-foreground/70">{t('about.experience.ird.company')}</p>
                    <p className="mt-2 text-sm text-foreground/80">
                      {t('about.experience.ird.description')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('about.experience.algo.title')}</h4>
                    <p className="text-sm text-foreground/70">{t('about.experience.algo.company')}</p>
                    <p className="mt-2 text-sm text-foreground/80">
                      {t('about.experience.algo.description')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('about.experience.adsl2.title')}</h4>
                    <p className="text-sm text-foreground/70">{t('about.experience.adsl2.company')}</p>
                    <p className="mt-2 text-sm text-foreground/80">
                      {t('about.experience.adsl2.description')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('about.experience.adsl1.title')}</h4>
                    <p className="text-sm text-foreground/70">{t('about.experience.adsl1.company')}</p>
                    <p className="mt-2 text-sm text-foreground/80">
                      {t('about.experience.adsl1.description')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AdaptiveSection>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Skills Section */}
      <AdaptiveSection 
        id="skills" 
        ref={skillsRef}
        className="py-16"
      >
        <div className="container" ref={skillsRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">{t('skills.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="staggered-item">
                <CardHeader>
                  <CardTitle>{t(skillGroup.categoryKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center p-2 rounded-md hover:bg-accent/10 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                        {t(skill.key)}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AdaptiveSection>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Projects Section */}
      <AdaptiveSection 
        id="projects" 
        ref={projectsRef}
        className="py-20"
        backgroundColor="bg-soft dark:bg-secondary/30"
      >
        <div className="container" ref={projectsRef}>
          <Link href="#projects">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">{t('projects.title')}</h2>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden staggered-item">
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={t(project.titleKey)} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{t(project.titleKey)}</CardTitle>
              <CardDescription>{t(project.descriptionKey)}</CardDescription>
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
                        {t('projects.github')}
                      </Link>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild size="sm">
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t('projects.demo')}
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
      </AdaptiveSection>

      {/* Contact Section */}
      <AdaptiveSection 
        id="contact" 
        ref={contactRef}
        className="pb-24"
        backgroundColor="bg-secondary dark:bg-secondary/50"
      >
        <div className="container pb-24" ref={contactRef}>
          <Link href="#contact">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">{t('contact.title')}</h2>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="reveal">
              <CardHeader>
                <CardTitle>{t('contact.form.title')}</CardTitle>
                <CardDescription>{t('contact.form.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' && (
                  <Alert className="mb-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertTitle>{t('contact.form.success')}</AlertTitle>
                    <AlertDescription>{t('contact.form.success.message')}</AlertDescription>
                  </Alert>
                )}
                {submitStatus === 'error' && (
                  <Alert className="mb-4 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900">
                    <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertTitle>{t('contact.form.error')}</AlertTitle>
                    <AlertDescription>{t('contact.form.error.message')}</AlertDescription>
                  </Alert>
                )}
                <form className="space-y-4" onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-sm font-medium">
                        {t('contact.form.name')}
                      </label>
                      <Input id="name" name="user_name" placeholder={t('contact.form.name')} required />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium">
                        {t('contact.form.email')}
                      </label>
                      <Input id="email" name="user_email" type="email" placeholder={t('contact.form.youremail')} required />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="subject" className="text-sm font-medium">
                      {t('contact.form.subject')}
                    </label>
                    <Input id="subject" name="subject" placeholder={t('contact.form.subject')} required />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t('contact.form.message')}
                    </label>
                    <Textarea id="message" name="message" placeholder={t('contact.form.message')} rows={4} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="reveal">
              <Card>
                <CardHeader>
                  <CardTitle>{t('contact.info.title')}</CardTitle>
                  <CardDescription>{t('contact.info.description')}</CardDescription>
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
      </AdaptiveSection>
    </>
  )
}