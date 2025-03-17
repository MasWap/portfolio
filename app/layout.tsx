import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollAnimations from "./scroll-animations"
import ThemeScript from "./theme-script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Portfolio | Développeur Web",
  description: "Portfolio professionnel présentant mes compétences, projets et expériences en développement web",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollAnimations />
          <ThemeScript />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'