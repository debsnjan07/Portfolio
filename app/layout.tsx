import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Entry level Developer Portfolio',
  description:
    'Portfolio of Daniel - A passionate fresher full stack web developer showcasing projects and skills in React, Next.js, and modern web technologies.',
  keywords: [
    'web developer',
    'portfolio',
    'React',
    'Next.js',
    'full stack developer',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
