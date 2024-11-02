import { Inter } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
})

export const metadata = {
  metadataBase: new URL('https://aircooffertelimburg.nl'),
  title: {
    default: 'Airco Offerte Limburg - Professionele Airconditioning Services',
    template: '%s | Airco Offerte Limburg'
  },
  description: 'Vraag een vrijblijvende offerte aan voor airco installatie, onderhoud en reparatie in heel Limburg. Erkend en gecertificeerd.',
  keywords: [
    'airco',
    'airconditioning',
    'klimaatbeheersing',
    'Limburg',
    'installatie',
    'onderhoud',
    'reparatie',
  ],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: '/',
    siteName: 'Airco Offerte Limburg',
    title: 'Airco Offerte Limburg - Professionele Airconditioning Services',
    description: 'Vraag een vrijblijvende offerte aan voor airco installatie, onderhoud en reparatie in heel Limburg. Erkend en gecertificeerd.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Airco Offerte Limburg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airco Offerte Limburg - Professionele Airconditioning Services',
    description: 'Vraag een vrijblijvende offerte aan voor airco installatie, onderhoud en reparatie in heel Limburg. Erkend en gecertificeerd.',
    images: ['/opengraph-image']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="nl" 
      suppressHydrationWarning
      className="scroll-smooth antialiased"
    >
      <head />
      <body 
        className={`${inter.className} min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
          </div>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}