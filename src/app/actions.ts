'use server';

import { z } from 'zod';
import { generateDogPortrait } from '@/ai/flows/generate-dog-portrait';

const formSchema = z.object({
  dogName: z.string().min(1, 'Please enter your dog\'s name.'),
  photoDataUri: z.string().min(1, 'Please upload a photo of your dog.'),
  hatStyle: z.string().min(1, 'Please describe the hat style.'),
});

type FormState = {
  success: boolean;
  message: string;
  portraitDataUri?: string;
};

export async function handleGeneratePortrait(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const validatedFields = formSchema.safeParse({
      dogName: formData.get('dogName'),
      photoDataUri: formData.get('photoDataUri'),
      hatStyle: formData.get('hatStyle'),
    });

    if (!validatedFields.success) {
      return {
        success: false,
        message: 'Invalid form data. Please check your inputs.',
      };
    }
    
    const result = await generateDogPortrait(validatedFields.data);

    if (!result.portraitDataUri) {
        throw new Error('AI generation failed to return a portrait.');
    }

    return {
      success: true,
      message: 'Your masterpiece is ready!',
      portraitDataUri: result.portraitDataUri,
    };
  } catch (error) {
    console.error('Error generating portrait:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      success: false,
      message: `Generation failed: ${errorMessage}`,
    };
  }
}
