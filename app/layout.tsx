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
    default: 'Airco Specialist Limburg | Gratis Offerte Binnen 24 Uur ✓',
    template: '%s | Airco Offerte Limburg'
  },
  description: 'Dé airco specialist in Limburg! ✓ Gratis offerte ✓ Erkend installateur ✓ Alle topmerken ✓ Binnen 24 uur reactie ✓ Beste prijs-kwaliteit. Bel nu: 046 202 1430',
  keywords: [
    // Primaire zoektermen
    'airco offerte limburg',
    'airco specialist limburg',
    'airco installatie limburg',
    'airco monteur limburg',
    'airco bedrijf limburg',
    
    // Installatie en service
    'professionele airco installatie',
    'airco installatie kosten',
    'split airco installatie',
    'multisplit airco limburg',
    'airco onderhoud limburg',
    'airco storing oplossen',
    'snelle airco service',
    
    // Producten en systemen
    'energiezuinige airco',
    'split airco systemen',
    'multi-split airconditioning',
    'stille airco installatie',
    'airco met verwarming',
    
    // Doelgroep specifiek
    'airco voor woning',
    'airco voor bedrijf',
    'airco voor slaapkamer',
    'beste airco voor thuis',
    
    // Commercieel
    'airco kopen limburg',
    'airco limburg prijzen',
    'airco prijsvergelijking',
    'airco financiering',
    'goedkope airco installatie',
    
    // Expertise en advies
    'airco showroom limburg',
    'airco advies op maat',
    'gecertificeerde airco monteurs',
    'airco merken',
    'premium airco merken',
    
    // Conversie gericht
    'airco offerte aanvragen',
    'airco laten plaatsen',
    'airco installatie advies',
    
    // Seizoensgebonden
    'airco voor zomer en winter',
    'klimaatbeheersing',
    'duurzame koeling',
    'warmtepomp'
  ],
  authors: [{ name: 'Airco Offerte Limburg' }],
  creator: 'Airco Offerte Limburg',
  publisher: 'Airco Offerte Limburg',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: '/',
    siteName: 'Airco Offerte Limburg',
    title: 'Airco Specialist Limburg | Gratis Offerte Binnen 24 Uur ✓',
    description: 'Dé airco specialist in Limburg! ✓ Gratis offerte ✓ Erkend installateur ✓ Alle topmerken ✓ Binnen 24 uur reactie ✓ Beste prijs-kwaliteit. Bel nu: 046 202 1430',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Airco Offerte Limburg - Professionele Airconditioning Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airco Specialist Limburg | Gratis Offerte Binnen 24 Uur ✓',
    description: 'Dé airco specialist in Limburg! ✓ Gratis offerte ✓ Erkend installateur ✓ Alle topmerken ✓ Binnen 24 uur reactie ✓ Beste prijs-kwaliteit',
    images: ['/opengraph-image'],
    creator: '@aircooffertelimburg',
    site: '@aircooffertelimburg'
  },
  alternates: {
    canonical: 'https://aircooffertelimburg.nl'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
    yandex: 'verification_token',
    yahoo: 'verification_token',
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
      <head>
        {/* Add font display optimization */}
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
        
        {/* Preload LCP elements */}
        <link 
          rel="preload" 
          as="style" 
          href="/globals.css" 
        />
        
        {/* Browser Hints for optimization */}
        <meta name="theme-color" content="#1e40af" />
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
      </head>
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
            <main id="main-content">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
