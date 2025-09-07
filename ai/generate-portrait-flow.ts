'use server';
/**
 * @fileOverview A Genkit flow for generating and compressing pet portraits.
 * 
 * This file defines the AI flow for creating a photorealistic portrait of a pet wearing a hat
 * and then compressing the result into a lightweight WebP format for faster delivery.
 * - generatePortrait: The main function that orchestrates portrait generation and compression.
 * - GeneratePortraitInput: The Zod schema for the input data (pet photo, name, hat style).
 * - GeneratePortraitOutput: The Zod schema for the output data (the generated, compressed image URI).
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import sharp from 'sharp';

const GeneratePortraitInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a pet, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  petName: z.string().describe('The name of the pet.'),
  hatStyle: z.string().describe('The style of hat the pet should be wearing.'),
});
export type GeneratePortraitInput = z.infer<typeof GeneratePortraitInputSchema>;

const GeneratePortraitOutputSchema = z.object({
    portraitDataUri: z.string().describe('The generated photorealistic portrait as a data URI.'),
});
export type GeneratePortraitOutput = z.infer<typeof GeneratePortraitOutputSchema>;


export async function generatePortrait(input: GeneratePortraitInput): Promise<GeneratePortraitOutput> {
  return generatePortraitFlow(input);
}


const generatePortraitFlow = ai.defineFlow(
  {
    name: 'generatePortraitFlow',
    inputSchema: GeneratePortraitInputSchema,
    outputSchema: GeneratePortraitOutputSchema,
  },
  async (input) => {
    const { media } = await ai.generate({
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: [
          { text: `You are an expert photorealistic digital artist specializing in creating whimsical and high-quality portraits of pets.

Your task is to generate a photorealistic portrait of a pet named ${input.petName} wearing a specific hat. The hat style is '${input.hatStyle}'.

The user has provided a photo of their pet for you to use as a reference for the pet's appearance.

Generate a new, photorealistic image of the pet from the photo, but make sure it is wearing the described hat. The final image should be just the pet's portrait.` },
          { media: { url: input.photoDataUri } },
        ],
        config: {
            responseModalities: ['IMAGE', 'TEXT'],
        }
    });

    if (!media || !media.url) {
        throw new Error('Image generation failed to produce an output.');
    }

    // Decode the base64 string to a buffer
    const base64Data = media.url.split(',')[1];
    const imageBuffer = Buffer.from(base64Data, 'base64');
    
    // Compress the image using sharp
    const compressedImageBuffer = await sharp(imageBuffer)
        .webp({ quality: 80 }) // Convert to WebP with 80% quality
        .toBuffer();
    
    // Re-encode to a data URI
    const compressedDataUri = `data:image/webp;base64,${compressedImageBuffer.toString('base64')}`;

    return { portraitDataUri: compressedDataUri };
  }
);
