
/**
 * @fileoverview This file is the entrypoint for Genkit flows in production.
 * It is also used by the Genkit developer UI.
 */
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import next from '@genkit-ai/next';
import { nextJsApiHandler } from '@genkit-ai/next/server';

// Initialize Genkit with plugins required for the API route context.
const ai = genkit({
  plugins: [googleAI(), next()],
});

// Import flows so that they are registered with Genkit for the API handler.
import '@/ai/flows/generate-pet-portrait';

export const POST = nextJsApiHandler({ ai });
