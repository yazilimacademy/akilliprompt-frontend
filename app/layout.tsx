import React from 'react';
import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

// eslint-disable-next-line camelcase
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('light', bricolageGrotesque.className)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
