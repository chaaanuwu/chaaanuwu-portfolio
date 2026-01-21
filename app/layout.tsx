import './globals.css';
import type { Metadata } from 'next';
import ClientLayout from './clientLayout';
import { LayoutProvider } from "@/context/LayoutContext";

export const metadata: Metadata = {
  title: 'Chanuka Senevirathne | Creative Developer',
  description: 'Portfolio of Chanuka Senevirathne – crafting modern, interactive web experiences.',
  keywords: ['Portfolio', 'Web Developer', 'React', 'Next.js', 'Frontend Developer', 'Chanuka Senevirathne'],
  authors: [{ name: 'Chanuka Senevirathne', url: 'https://yourportfolio.com' }],
  creator: 'Chanuka Senevirathne',
  publisher: 'Chanuka Senevirathne',
  metadataBase: new URL('https://yourportfolio.com'), // base URL for OG
  openGraph: {
    title: 'Chanuka Senevirathne | Creative Developer',
    description: 'Portfolio of Chanuka Senevirathne – crafting modern, interactive web experiences.',
    url: 'https://yourportfolio.com',
    siteName: 'Chanuka Senevirathne Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chanuka Senevirathne | Creative Developer',
    description: 'Portfolio of Chanuka Senevirathne – crafting modern, interactive web experiences.',
    creator: '@your_twitter', // optional
    images: ['/og-image.png'],
  },
  themeColor: '#0A0F1C', // dark theme color
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>
          <ClientLayout>{children}</ClientLayout>
        </LayoutProvider>
      </body>
    </html>
  );
}