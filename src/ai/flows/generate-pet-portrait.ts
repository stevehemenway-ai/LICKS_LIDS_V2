
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
        prompt: [
            { text: `Analyze the provided image to identify the pet. Create a photorealistic, high-quality portrait by digitally adding a ${input.hatStyle} to the pet in the photo. The final image should feature the original pet.` },
            { media: { url: input.photoDataUri } }
        ],
        config: {
            responseModalities: ['IMAGE'], // Request only image modality
        },
    });

    const portraitDataUri = media?.url;

    if (!portraitDataUri) {
      throw new Error('Failed to generate the pet portrait.');
    }
    
    return { portraitDataUri };
  }
);

export async function generatePetPortrait(input: GeneratePetPortraitInput): Promise<GeneratePetPortraitOutput> {
    return generatePetPortraitFlow(input);
}
