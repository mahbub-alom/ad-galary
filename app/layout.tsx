import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import LayoutClient from '@/components/LayoutClient';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://the-bridgers.ai/'),
  title: 'The Bridgers - Creative Ad Gallery',
  description: 'Explore our comprehensive collection of creative advertisements across multiple brands and categories. Discover innovative marketing campaigns and interactive experiences.',
  keywords: 'advertising, creative ads, marketing, campaigns, interactive media, brand advertising',
  authors: [{ name: 'The Bridgers Team' }],
  openGraph: {
    title: 'The Bridgers - Creative Ad Gallery',
    description: 'Explore our comprehensive collection of creative advertisements across multiple brands and categories.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Bridgers - Creative Ad Gallery',
    description: 'Explore our comprehensive collection of creative advertisements across multiple brands and categories.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}