'use server';

/**
 * @fileOverview An AI agent that generates a photorealistic portrait of a pet wearing a hat.
 *
 * - generatePetPortrait - A function that handles the pet portrait generation process.
 * - GeneratePetPortraitInput - The input type for the generatePetPortrait function.
 * - GeneratePetPortraitOutput - The return type for the generatePetPortrait function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

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

export async function generatePetPortrait(
  input: GeneratePetPortraitInput
): Promise<GeneratePetPortraitOutput> {
  return generatePetPortraitFlow(input);
}

const generatePetPortraitFlow = ai.defineFlow(
  {
    name: 'generatePetPortraitFlow',
    inputSchema: GeneratePetPortraitInputSchema,
    outputSchema: GeneratePetPortraitOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: [
        {media: {url: input.photoDataUri}},
        {text: `Create a photorealistic, high quality portrait of ${input.petName} wearing a ${input.hatStyle}.`},
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate the pet portrait.');
    }

    return {portraitDataUri: media.url};
  }
);
