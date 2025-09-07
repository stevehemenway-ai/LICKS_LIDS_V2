
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Sparkles, Star, Lightbulb, Bug, Heart, MessageSquare } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitFeedback, SubmitFeedbackInput } from '@/ai/submit-feedback-flow';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: 'Please enter a valid email.' }).optional().or(z.literal('')),
  rating: z.number().min(1, { message: 'Please select a rating.' }).max(5),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function FeedbackForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
    },
  });

  const currentRating = watch('rating');

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    setSubmissionError(null);
    try {
      const input: SubmitFeedbackInput = {
        rating: data.rating,
        message: data.message,
        name: data.name || undefined,
        email: data.email || undefined,
      };

      const result = await submitFeedback(input);

      if (result.success) {
        router.push('/feedback/thanks');
      } else {
        throw new Error(result.error || 'An unknown application error occurred.');
      }
    } catch (e: any) {
        console.error('Submission failed:', e);
        setSubmissionError(e.message || 'Could not submit your feedback. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle as="h2">Feedback Form</CardTitle>
        <CardDescription>
          We'd love to hear from you! What's on your mind?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {submissionError && (
            <Alert variant="destructive">
              <AlertTitle>Submission Error</AlertTitle>
              <AlertDescription>
                {submissionError}
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label>1. How would you rate your experience?</Label>
            <div className="flex items-center gap-1" onMouseLeave={() => setHoverRating(0)}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={cn(
                    'h-8 w-8 cursor-pointer transition-colors',
                    (hoverRating || currentRating) >= star
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-muted-foreground/50'
                  )}
                  onClick={() => setValue('rating', star, { shouldValidate: true })}
                  onMouseEnter={() => setHoverRating(star)}
                />
              ))}
            </div>
            {errors.rating && <p className="text-sm text-destructive">{errors.rating.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">2. What would you like to share?</Label>
            <Textarea
              id="message"
              {...register('message')}
              disabled={isSubmitting}
              placeholder="Share your brilliant ideas, pesky problems, or heartwarming pet stories here!"
              className="min-h-[140px]"
            />
             <div className="text-xs text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 pt-1">
                <span className="flex items-center gap-1"><Lightbulb className="w-3 h-3"/>A new feature idea...</span>
                <span className="flex items-center gap-1"><Bug className="w-3 h-3"/>A problem or bug...</span>
                <span className="flex items-center gap-1"><Heart className="w-3 h-3"/>A fun pet story...</span>
                <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3"/>General feedback...</span>
            </div>
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">3. Your Name (Optional)</Label>
            <Input id="name" {...register('name')} disabled={isSubmitting} placeholder="e.g., Jane Doe"/>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">4. Your Email (Optional)</Label>
            <Input id="email" type="email" {...register('email')} disabled={isSubmitting} placeholder="e.g., jane.doe@example.com"/>
             {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting} size="lg">
            {isSubmitting ? (
              <>
                <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send My Feedback
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
