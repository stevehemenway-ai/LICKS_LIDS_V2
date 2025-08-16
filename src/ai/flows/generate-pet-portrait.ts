
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

    const { media, usage } = await ai.generate({
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
    
    // The generated media.url is a temporary URL. We need to fetch it immediately
    // and convert it to a Base64 data URI to ensure it's usable by the client and for storage.
    let fetchedImage: Response;
    try {
        fetchedImage = await fetch(media.url);
        if (!fetchedImage.ok) {
            throw new Error(`Failed to fetch generated image. Status: ${fetchedImage.status}`);
        }
    } catch (e: any) {
        console.error("Error fetching generated image from temporary URL", e);
        throw new Error("Could not retrieve the generated image from the AI service.");
    }
    
    const imageBuffer = await fetchedImage.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString('base64');
    const imageMimeType = fetchedImage.headers.get('Content-Type') || 'image/png';
    const portraitDataUri = `data:${imageMimeType};base64,${imageBase64}`;

    return { portraitDataUri };
  }
);

export async function generatePetPortrait(input: GeneratePetPortraitInput): Promise<GeneratePetPortraitOutput> {
    return generatePetPortraitFlow(input);
}
