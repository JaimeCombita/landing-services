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
    default: 'JC Engine - Soluciones Digitales y Consultoría Tech',
    template: '%s | Jaime Combita'
  },
  description: 'Más de 10 años construyendo sistemas seguros, tiendas online efectivas y soluciones tecnológicas. Arquitectura, desarrollo y consultoría de alto nivel para empresas.',
  keywords: [
    'jaime combita',
    'jc engine',
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
    'java',
    'spring boot',
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
  metadataBase: new URL('https://jcengine.co/'),
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://jcengine.co/',
    title: 'JC Engine - Soluciones Digitales y Consultoría Tech',
    description: 'Más de 10 años construyendo sistemas seguros, tiendas online efectivas y soluciones tecnológicas alineadas a objetivos de negocio.',
    siteName: 'JC Engine',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JC Engine - Soluciones Digitales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JC Engine - Soluciones Digitales y Consultoría Tech',
    description: 'Más de 10 años construyendo sistemas seguros, tiendas online efectivas y soluciones tecnológicas.',
    images: ['/oe-image.jpg'],
    creator: '@combita_jaime',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  verification: {
    google: '-YVFBmqpYDeWZbFn7YPybBV8cwEtiEoFaadZhRMkUKM',
  },
  alternates: {
    canonical: 'https://jcengine.co/',
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
