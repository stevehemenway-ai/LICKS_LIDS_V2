
'use server';

/**
 * @fileOverview An AI agent that generates a photorealistic portrait of a pet wearing a hat.
 *
 * - generatePetPortrait - A function that handles the pet portrait generation process.
 */
import { z } from 'zod';
import { ai } from '@/ai/genkit';
import { GeneratePetPortraitInput, GeneratePetPortraitInputSchema, GeneratePetPortraitOutput, GeneratePetPortraitOutputSchema } from './types';


const generatePetPortraitFlow = ai.defineFlow(
  {
    name: 'generatePetPortraitFlow',
    inputSchema: GeneratePetPortraitInputSchema,
    outputSchema: GeneratePetPortraitOutputSchema,
  },
  async (input) => {
    
    const { media } = await ai.generate({
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: `A photorealistic, high-quality portrait of a ${input.petName} wearing a ${input.hatStyle}. The final image should look like a real photo.`,
        config: {
            responseModalities: ['IMAGE'], 
        },
    });

    const portraitDataUri = media?.url;

    if (!portraitDataUri) {
      throw new Error('Failed to generate the pet portrait.');
    }
    
    // The media.url from the image generation model is already a data URI
    return { portraitDataUri };
  }
);

export async function generatePetPortrait(input: GeneratePetPortraitInput): Promise<GeneratePetPortraitOutput> {
    return generatePetPortraitFlow(input);
}
