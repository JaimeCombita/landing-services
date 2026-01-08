import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600'], 
  variable: '--font-poppins', 
});

export const metadata: Metadata = {
  title: {
    default: 'Jaime Combita - Soluciones Digitales y Consultoría Tech',
    template: '%s | Jaime Combita'
  },
  description: 'Más de 10 años construyendo sistemas seguros, tiendas online efectivas y soluciones tecnológicas. Arquitectura, desarrollo y consultoría de alto nivel para empresas.',
  keywords: [
    'jaime combita',
    'desarrollo web',
    'consultoría tecnológica',
    'arquitectura de software',
    'soluciones empresariales',
    'desarrollo fullstack',
    'ecommerce',
    'fintech',
    'banca digital',
    'Next.js',
    'React',
    'Node.js',
    'Colombia',
  ],
  authors: [{ name: 'Jaime Combita' }],
  creator: 'Jaime Combita',
  publisher: 'Jaime Combita',
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
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://jaime-combita-landing.vercel.app/',
    title: 'Jaime Combita - Soluciones Digitales y Consultoría Tech',
    description: 'Más de 10 años construyendo sistemas seguros, tiendas online efectivas y soluciones tecnológicas alineadas a objetivos de negocio.',
    siteName: 'Jaime Combita',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jaime Combita - Soluciones Digitales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaime Combita - Soluciones Digitales y Consultoría Tech',
    description: 'Más de 10 años construyendo sistemas seguros, tiendas online efectivas y soluciones tecnológicas.',
    images: ['/og-image.jpg'],
    creator: '@combita_jaime',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: '-YVFBmqpYDeWZbFn7YPybBV8cwEtiEoFaadZhRMkUKM',
  },
  alternates: {
    canonical: 'https://jaime-combita-landing.vercel.app/',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.variable} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
