
/**
 * @fileoverview This file is the entrypoint for Genkit flows in production.
 * It is also used by the Genkit developer UI.
 */
import { ai } from '@/ai/genkit';
import { next } from '@genkit-ai/next';
import { nextJsApiHandler } from '@genkit-ai/next/server';

// Add the Next.js plugin for API route handling.
ai.configure({
  plugins: [...(ai.registry.getPlugins() || []), next()],
});

// Import flows so that they are registered with Genkit for the API handler.
import '@/ai/flows/generate-pet-portrait';

export const POST = nextJsApiHandler({ ai });
