'use server';

import { z } from 'zod';
import { generatePetPortrait } from "@/ai/flows/generate-pet-portrait";
import { addPortraitToGallery } from '@/services/gallery.service';
import { generateFormSchema } from '@/ai/flows/types';

// Define the state types directly in this file
export type GenerateFormState = {
  success: boolean;
  message: string;
  portraitDataUri?: string;
  petName?: string;
  hatStyle?: string;
};

export type PublishFormState = {
    success: boolean;
    message: string;
}

const publishFormSchema = z.object({
    petName: z.string(),
    hatStyle: z.string(),
    portraitDataUri: z.string(),
});

// SERVER ACTION 1: Correctly defined as an async function
export async function handleGeneratePortrait(
  prevState: GenerateFormState,
  formData: FormData
): Promise<GenerateFormState> {
  try {
    const validatedFields = generateFormSchema.safeParse({
      petName: formData.get('petName'),
      photoDataUri: formData.get('photoDataUri'),
      hatStyle: formData.get('hatStyle'),
    });

    if (!validatedFields.success) {
        const issues = validatedFields.error.issues;
        const petNameIssue = issues.find(i => i.path.includes('petName'));
        if (petNameIssue) {
            return { success: false, message: petNameIssue.message };
        }
        const photoIssue = issues.find(i => i.path.includes('photoDataUri'));
        if (photoIssue) {
            return { success: false, message: photoIssue.message };
        }
        const hatIssue = issues.find(i => i.path.includes('hatStyle'));
        if (hatIssue) {
            return { success: false, message: hatIssue.message };
        }
        return {
            success: false,
            message: 'Invalid form data. Please check your inputs.',
        };
    }
    
    const generationInput = validatedFields.data;
    
    const result = await generatePetPortrait(generationInput);

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


// SERVER ACTION 2: Correctly defined as an async function
export async function handlePublishPortrait(
    prevState: PublishFormState,
    formData: FormData,
): Promise<PublishFormState> {
    try {
        const validatedFields = publishFormSchema.safeParse({
            petName: formData.get('petName'),
            hatStyle: formData.get('hatStyle'),
            portraitDataUri: formData.get('portraitDataUri'),
        });

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
