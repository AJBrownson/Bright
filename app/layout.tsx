import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bright',
  description:
    'Bright is a versatile AI chatbot designed to assist with a wide range of tasks, from answering questions to providing recommendations and engaging in casual conversation.',
  generator: 'Anni',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Radhika',
    siteName: 'bright',
    url: 'https://getbright.vercel.app/',
    description:
      'Bright is a versatile AI chatbot designed to assist with a wide range of tasks, from answering questions to providing recommendations and engaging in casual conversation.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bright AI Chatbot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bright',
    description:
      'Bright is a versatile AI chatbot designed to assist with a wide range of tasks, from answering questions to providing recommendations and engaging in casual conversation.',
    images: ['/og-image.jpg'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
