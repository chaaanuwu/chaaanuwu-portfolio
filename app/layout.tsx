import './globals.css';
import type { Metadata } from 'next';
import ClientLayout from './clientLayout';
import { LayoutProvider } from "@/context/LayoutContext";

export const metadata: Metadata = {
  title: 'Chanuka Senevirathne | Creative Developer',
  description: 'Portfolio of Chanuka Senevirathne – crafting modern, interactive web experiences.',
  keywords: ['Portfolio', 'Web Developer', 'React', 'Next.js', 'Frontend Developer', 'Chanuka Senevirathne'],
  authors: [{ name: 'Chanuka Senevirathne', url: 'https://chaaanuwu.vercel.app/' }],
  creator: 'Chanuka Senevirathne',
  publisher: 'Chanuka Senevirathne',
  metadataBase: new URL('https://chaaanuwu.vercel.app/'),
  openGraph: {
    title: 'Chanuka Senevirathne | Creative Developer',
    description: 'Portfolio of Chanuka Senevirathne – crafting modern, interactive web experiences.',
    url: 'https://chaaanuwu.vercel.app/',
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
    images: ['/og-image.png'],
  },
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