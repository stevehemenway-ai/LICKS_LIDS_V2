'use server';

import { z } from 'zod';
import { generatePetPortrait } from "@/ai/flows/generate-pet-portrait";
import { addPortraitToGallery } from '@/services/gallery.service';
import { generateFormSchema } from '@/ai/flows/types';

// Define the shape of the data returned by the actions
export interface GenerateActionResult {
  success: boolean;
  message: string;
  portraitDataUri?: string;
  petName?: string;
  hatStyle?: string;
};

export interface PublishActionResult {
    success: boolean;
    message: string;
}

const publishFormSchema = z.object({
    petName: z.string(),
    hatStyle: z.string(),
    portraitDataUri: z.string(),
});

/**
 * A standard async function to handle portrait generation.
 * It's called from the client with a structured object.
 */
export async function handleGeneratePortrait(
  input: z.infer<typeof generateFormSchema>
): Promise<GenerateActionResult> {
  try {
    const validatedFields = generateFormSchema.safeParse(input);

    if (!validatedFields.success) {
      return { success: false, message: 'Invalid form data.' };
    }
    
    const result = await generatePetPortrait(validatedFields.data);

    if (!result.portraitDataUri) {
        throw new Error('AI generation failed to return a portrait.');
    }

    return {
      success: true,
      message: 'Your masterpiece is ready!',
      portraitDataUri: result.portraitDataUri,
      petName: validatedFields.data.petName,
      hatStyle: validatedFields.data.hatStyle,
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

/**
 * A standard async function to handle publishing.
 * It's called from the client with a structured object.
 */
export async function handlePublishPortrait(
    input: z.infer<typeof publishFormSchema>
): Promise<PublishActionResult> {
    try {
        const validatedFields = publishFormSchema.safeParse(input);

        if (!validatedFields.success) {
            return {
                success: false,
                message: 'Invalid data for publishing.',
            };
        }

        await addPortraitToGallery(validatedFields.data);

        return {
            success: true,
            message: 'Your portrait has been published to the gallery!',
        };

    } catch (error) {
        console.error('Error publishing portrait:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return {
            success: false,
            message: `Failed to publish: ${errorMessage}`,
        };
    }
}
