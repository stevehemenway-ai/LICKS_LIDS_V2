
import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { cn } from '@/lib/utils';
import { FirebaseAnalytics } from '@/components/firebase-analytics';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Licks and Lids – Free AI Pet Hat Portrait Generator',
  description: 'Create funny, beautiful AI-generated portraits of your dog or cat wearing custom hats. Choose from classics or invent your own, then share or shop the look instantly.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Licks & Lids: Free AI Pet Hat Portrait Generator',
    description: 'Create funny, beautiful AI-generated portraits of your dog or cat wearing custom hats. From dog hats to cat hats, design the perfect picture!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Licks & Lids: Free AI Pet Hat Portrait Generator',
    description: 'Create funny, beautiful AI-generated portraits of your dog or cat wearing custom hats. From dog hats to cat hats, design the perfect picture!',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          poppins.variable
        )}
      >
        <FirebaseAnalytics />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
