
import {z} from 'zod';

export const GeneratePetPortraitInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the pet, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  petName: z.string().describe('The name of the pet.'),
  hatStyle: z.string().describe('The style of hat for the pet to wear.'),
});
export type GeneratePetPortraitInput = z.infer<typeof GeneratePetPortraitInputSchema>;

export const GeneratePetPortraitOutputSchema = z.object({
  portraitDataUri: z
    .string()
    .describe(
      'A photorealistic portrait of the pet wearing the chosen hat, as a data URI.'
    ),
});
export type GeneratePetPortraitOutput = z.infer<typeof GeneratePetPortraitOutputSchema>;

export const generateFormSchema = z.object({
  petName: z.string().min(1, "Please enter your pet's name."),
  photoDataUri: z.string().min(1, 'Please upload a photo of your pet.'),
  hatStyle: z.string().min(1, 'Please select or describe a hat style.'),
});
