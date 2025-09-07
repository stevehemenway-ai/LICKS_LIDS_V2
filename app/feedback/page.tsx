
import type { Metadata } from 'next';
import FeedbackForm from '@/components/feedback-form';

export const metadata: Metadata = {
  title: 'Feedback for Licks & Lids | Share Your Ideas & Pet Stories',
  description: 'Help us improve our AI pet hat generator! Share your feedback, ideas, bug reports, or even funny pet stories. We want to hear from you.',
};

export default function FeedbackPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Share Your Thoughts!
          </h1>
          <p className="text-muted-foreground mt-2">
            Your feedback helps Licks & Lids grow. Let us know what's on your mind.
          </p>
        </div>
        <FeedbackForm />
      </div>
    </div>
  );
}
