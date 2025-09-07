import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You for Your Feedback! | Licks and Lids',
  description: 'We appreciate you taking the time to help us improve our AI pet hat generator. Your feedback is invaluable.',
};

export default function ThanksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
