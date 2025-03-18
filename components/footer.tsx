import Link from "next/link"
import { Mail, Github, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-secondary/50 py-8 pt-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-foreground/80">© {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="mailto:lilian.layrac@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Mail</span>
            </Link>
            <Link
              href="https://github.com/MasWap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/lilian-layrac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://instagram.com/lilian.lyrc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

