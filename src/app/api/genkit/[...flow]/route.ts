
/**
 * @fileoverview This file is the entrypoint for Genkit flows in production.
 * It is also used by the Genkit developer UI.
 */
import { nextJsApiHandler } from '@genkit-ai/next/server';

// Import flows so that they are registered with Genkit.
import '@/ai/flows/generate-pet-portrait';

export const POST = nextJsApiHandler();
