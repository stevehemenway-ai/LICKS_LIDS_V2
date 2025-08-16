'use server';

import { z } from 'zod';
import { generateDogPortrait } from '@/ai/flows/generate-dog-portrait';
import { addPortraitToGallery } from '@/services/gallery.service';

const generateFormSchema = z.object({
  dogName: z.string().min(1, 'Please enter your dog\'s name.'),
  photoDataUri: z.string().min(1, 'Please upload a photo of your dog.'),
  hatStyle: z.string().min(1, 'Please describe the hat style.'),
});

type GenerateFormState = {
  success: boolean;
  message: string;
  portraitDataUri?: string;
  dogName?: string;
  hatStyle?: string;
};

export async function handleGeneratePortrait(
  prevState: GenerateFormState,
  formData: FormData
): Promise<GenerateFormState> {
  try {
    const validatedFields = generateFormSchema.safeParse({
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
      dogName: validatedFields.data.dogName,
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

const publishFormSchema = z.object({
    dogName: z.string(),
    hatStyle: z.string(),
    portraitDataUri: z.string(),
});

type PublishFormState = {
    success: boolean;
    message: string;
}

export async function handlePublishPortrait(
    prevState: PublishFormState,
    formData: FormData,
): Promise<PublishFormState> {
    try {
        const validatedFields = publishFormSchema.safeParse({
            dogName: formData.get('dogName'),
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
