
'use server';

import { generatePetPortrait } from "@/ai/flows/generate-pet-portrait";
import type { GeneratePetPortraitInput } from "@/ai/flows/types";

// Define the shape of the data returned by the actions
export interface GenerateActionResult {
  success: boolean;
  message: string;
  portraitDataUri?: string;
};

/**
 * A standard async function to handle portrait generation.
 * It's called from the client with a structured object.
 */
export async function handleGeneratePortrait(
  input: GeneratePetPortraitInput
): Promise<GenerateActionResult> {
  // Basic validation
  if (!input.petName || !input.photoDataUri || !input.hatStyle) {
    return { success: false, message: 'Invalid form data. All fields are required.' };
  }
  
  const result = await generatePetPortrait(input);

  if (!result.portraitDataUri) {
      return {
        success: false,
        message: 'AI generation failed to return a portrait. This may be due to a network error or a problem with the generation service.'
      };
  }

  return {
    success: true,
    message: 'Your masterpiece is ready!',
    portraitDataUri: result.portraitDataUri,
  };
}
