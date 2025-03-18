import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollAnimations from "./scroll-animations"
import ThemeScript from "./theme-script"
import { TranslationProvider } from "@/lib/translation" // Ajoutez cette ligne

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Portfolio | Lilian Layrac",
  description: "Portfolio professionnel présentant mes compétences, projets et expériences professionnelles.",
  icons: [
    {
      url: '/l.ico',
      type: 'image/x-icon',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TranslationProvider>
            <ScrollAnimations />
            <Header />
            {children}
            <Footer />
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}