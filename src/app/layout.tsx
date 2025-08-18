
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { cn } from '@/lib/utils';
import { analytics } from '@/lib/firebase';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Licks & Lids',
  description: 'Generate photorealistic portraits of your pet wearing a hat!',
  openGraph: {
    title: 'Licks & Lids',
    description: 'Generate photorealistic portraits of your pet wearing a hat!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Licks & Lids',
    description: 'Generate photorealistic portraits of your pet wearing a hat!',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  analytics; // This initializes Firebase Analytics
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          poppins.variable
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
