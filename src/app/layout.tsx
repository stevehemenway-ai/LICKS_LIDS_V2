import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Licks & Lids',
<<<<<<< HEAD
  description: 'Generate photorealistic portraits of your pet wearing a hat!',
  openGraph: {
    title: 'Licks & Lids',
    description: 'Generate photorealistic portraits of your pet wearing a hat!',
    type: 'website',
    url: 'https://your-app-url.com', // Replace with your actual URL
    images: [
      {
        url: 'https://your-app-url.com/og-image.png', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'A dapper pet wearing a stylish hat.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Licks & Lids',
    description: 'Generate photorealistic portraits of your pet wearing a hat!',
    images: ['https://your-app-url.com/og-image.png'], // Replace with your actual OG image URL
  },
=======
  description: 'Generate photorealistic portraits of your dog wearing a hat!',
>>>>>>> e948740ed2a48df2b2069e7df8c3f385d97cafab
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
