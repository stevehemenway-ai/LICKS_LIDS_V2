
'use server';

/**
 * @fileOverview An AI agent that generates a photorealistic portrait of a pet wearing a hat.
 *
 * - generatePetPortrait - A function that handles the pet portrait generation process.
 */
import { z } from 'zod';
import { ai } from '@/ai/genkit';
import { GeneratePetPortraitInput, GeneratePetPortraitInputSchema, GeneratePetPortraitOutput, GeneratePetPortraitOutputSchema } from './types';


const humanValidationPrompt = ai.definePrompt({
    name: 'humanValidationPrompt',
    model: 'googleai/gemini-1.5-flash',
    input: { schema: z.object({ photoDataUri: z.string() }) },
    output: { schema: z.object({ isHuman: z.boolean().describe('Whether the image contains a human.') }) },
    prompt: `Analyze the provided image and determine if it contains a human face or figure. Set isHuman to true if a human is present, otherwise set it to false.
    
    Image: {{media url=photoDataUri}}`,
});


const generatePetPortraitFlow = ai.defineFlow(
  {
    name: 'generatePetPortraitFlow',
    inputSchema: GeneratePetPortraitInputSchema,
    outputSchema: GeneratePetPortraitOutputSchema,
  },
  async (input) => {
    
    const validationResult = await humanValidationPrompt({ photoDataUri: input.photoDataUri });
    if (validationResult.output?.isHuman) {
        throw new Error("A human was detected in the photo. Please upload a picture of a pet.");
    }

    const { media } = await ai.generate({
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: [
            { text: `Analyze the provided image to identify the pet. Create a photorealistic, high-quality portrait by digitally adding a ${input.hatStyle} to the pet in the photo. The final image should feature the original pet.` },
            { media: { url: input.photoDataUri } }
        ],
        config: {
            responseModalities: ['TEXT', 'IMAGE'],
        },
    });

    if (!media.url) {
      throw new Error('Failed to generate the pet portrait.');
    }

    return { portraitDataUri: media.url };
  }
);

export async function generatePetPortrait(input: GeneratePetPortraitInput): Promise<GeneratePetPortraitOutput> {
    return generatePetPortraitFlow(input);
}
