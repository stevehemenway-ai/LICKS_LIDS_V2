
'use server';

/**
 * @fileOverview An AI agent that generates a photorealistic portrait of a pet wearing a hat.
 *
 * - generatePetPortrait - A function that handles the pet portrait generation process.
 * - GeneratePetPortraitInput - The input type for the generatePetPortrait function.
 * - GeneratePetPortraitOutput - The return type for the generatePetPortrait function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GeneratePetPortraitInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the pet, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  petName: z.string().describe('The name of the pet.'),
  hatStyle: z.string().describe('The style of hat for the pet to wear.'),
});
export type GeneratePetPortraitInput = z.infer<typeof GeneratePetPortraitInputSchema>;

const GeneratePetPortraitOutputSchema = z.object({
  portraitDataUri: z
    .string()
    .describe(
      'A photorealistic portrait of the pet wearing the chosen hat, as a data URI.'
    ),
});
export type GeneratePetPortraitOutput = z.infer<typeof GeneratePetPortraitOutputSchema>;

export async function generatePetPortrait(input: GeneratePetPortraitInput): Promise<GeneratePetPortraitOutput> {
    return generatePetPortraitFlow(input);
}

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
