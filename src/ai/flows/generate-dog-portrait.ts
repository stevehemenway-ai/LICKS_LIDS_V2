'use server';

/**
 * @fileOverview An AI agent that generates a photorealistic portrait of a dog wearing a hat.
 *
 * - generateDogPortrait - A function that handles the dog portrait generation process.
 * - GenerateDogPortraitInput - The input type for the generateDogPortrait function.
 * - GenerateDogPortraitOutput - The return type for the generateDogPortrait function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDogPortraitInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the dog, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  dogName: z.string().describe('The name of the dog.'),
  hatStyle: z.string().describe('The style of hat for the dog to wear.'),
});
export type GenerateDogPortraitInput = z.infer<typeof GenerateDogPortraitInputSchema>;

const GenerateDogPortraitOutputSchema = z.object({
  portraitDataUri: z
    .string()
    .describe(
      'A photorealistic portrait of the dog wearing the chosen hat, as a data URI.'
    ),
});
export type GenerateDogPortraitOutput = z.infer<typeof GenerateDogPortraitOutputSchema>;

export async function generateDogPortrait(
  input: GenerateDogPortraitInput
): Promise<GenerateDogPortraitOutput> {
  return generateDogPortraitFlow(input);
}

const dogPortraitPrompt = ai.definePrompt({
  name: 'dogPortraitPrompt',
  input: {schema: GenerateDogPortraitInputSchema},
  output: {schema: GenerateDogPortraitOutputSchema},
  prompt: `You are an AI artist specializing in photorealistic pet portraits.

  Create a portrait of {{dogName}} wearing a {{hatStyle}}.
  The portrait should be photorealistic and high quality.

  Here is a photo of {{dogName}}:
  {{media url=photoDataUri}}
  `,
});

const generateDogPortraitFlow = ai.defineFlow(
  {
    name: 'generateDogPortraitFlow',
    inputSchema: GenerateDogPortraitInputSchema,
    outputSchema: GenerateDogPortraitOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: [
        {media: {url: input.photoDataUri}},
        {text: `Create a portrait of ${input.dogName} wearing a ${input.hatStyle}`},
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate the dog portrait.');
    }

    return {portraitDataUri: media.url};
  }
);
