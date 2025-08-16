

'use server';

import { generatePetPortrait } from "@/ai/flows/generate-pet-portrait";
import { addPortraitToGallery, deletePortraitFromGallery } from '@/services/gallery.service';
import { revalidatePath } from "next/cache";

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

export interface DeleteActionResult {
    success: boolean;
    message: string;
}

/**
 * A standard async function to handle portrait generation.
 * It's called from the client with a structured object.
 */
export async function handleGeneratePortrait(
  input: { petName: string, photoDataUri: string, hatStyle: string }
): Promise<GenerateActionResult> {
  try {
    // Basic validation
    if (!input.petName || !input.photoDataUri || !input.hatStyle) {
      return { success: false, message: 'Invalid form data. All fields are required.' };
    }
    
    const result = await generatePetPortrait(input);

    if (!result.portraitDataUri) {
        throw new Error('AI generation failed to return a portrait.');
    }

    return {
      success: true,
      message: 'Your masterpiece is ready!',
      portraitDataUri: result.portraitDataUri,
      petName: input.petName,
      hatStyle: input.hatStyle,
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
    input: { petName: string, hatStyle: string, portraitDataUri: string }
): Promise<PublishActionResult> {
    try {
        if (!input.petName || !input.hatStyle || !input.portraitDataUri) {
            return {
                success: false,
                message: 'Invalid data for publishing.',
            };
        }

        await addPortraitToGallery(input);
        
        // Revalidate the gallery page to show the new portrait
        revalidatePath('/');
        revalidatePath('/gallery');

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


/**
 * Handles the deletion of a portrait. This is an admin-only action.
 */
export async function handleDeletePortrait(
    input: { portraitId: string; imageUrl: string }
): Promise<DeleteActionResult> {
    try {
        if (!input.portraitId || !input.imageUrl) {
            return { success: false, message: 'Invalid portrait data.' };
        }
        
        await deletePortraitFromGallery(input.portraitId, input.imageUrl);

        // Revalidate the gallery and admin pages
        revalidatePath('/');
        revalidatePath('/gallery');
        revalidatePath('/admin');

        return { success: true, message: 'Portrait deleted successfully.' };

    } catch (error) {
        console.error('Error deleting portrait:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Deletion failed: ${errorMessage}` };
    }
}
