
/**
 * @fileoverview This file is the entrypoint for Genkit flows in production.
 * It is also used by the Genkit developer UI.
 */
import { ai } from '@/ai/genkit';
import { NextJsApiHandler } from '@genkit-ai/next';

// Import flows so that they are registered with Genkit for the API handler.
import '@/ai/flows/generate-pet-portrait';

export const POST = NextJsApiHandler({
  ai,
});
