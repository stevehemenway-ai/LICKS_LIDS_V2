'use server';
/**
 * @fileOverview A Genkit flow for submitting user feedback to Firestore.
 */
import { z } from 'zod';
import { ai } from '@/ai/genkit';
import { adminDb } from '@/lib/firebase-admin';

// Define the input schema for the flow, matching the form fields
const SubmitFeedbackInputSchema = z.object({
  rating: z.number().min(1).max(5),
  message: z.string(),
  name: z.string().optional(),
  email: z.string().email().optional(),
});
export type SubmitFeedbackInput = z.infer<typeof SubmitFeedbackInputSchema>;

// Define the output schema for the flow
const SubmitFeedbackOutputSchema = z.object({
  success: z.boolean(),
  feedbackId: z.string().optional(),
  error: z.string().optional(),
});
export type SubmitFeedbackOutput = z.infer<typeof SubmitFeedbackOutputSchema>;

// This is the main exported function that the client calls
export async function submitFeedback(
  input: SubmitFeedbackInput
): Promise<SubmitFeedbackOutput> {
  return submitFeedbackFlow(input);
}

const submitFeedbackFlow = ai.defineFlow(
  {
    name: 'submitFeedbackFlow',
    inputSchema: SubmitFeedbackInputSchema,
    outputSchema: SubmitFeedbackOutputSchema,
  },
  async (input) => {
    if (!adminDb) {
      const errorMessage = 'The server is not configured to save feedback. Please contact support.';
      console.error(`submitFeedbackFlow failed: ${errorMessage}`);
      return {
        success: false,
        error: errorMessage,
      };
    }

    try {
      const feedbackCollection = adminDb.collection('feedback');
      const docRef = await feedbackCollection.add({
        ...input,
        createdAt: new Date(),
      });

      return { success: true, feedbackId: docRef.id };
    } catch (error) {
      console.error('Firestore Error:', error);
      return {
        success: false,
        error: 'An unexpected error occurred while trying to save the feedback.',
      };
    }
  }
);
