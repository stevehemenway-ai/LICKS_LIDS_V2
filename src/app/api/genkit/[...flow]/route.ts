
/**
 * @fileoverview This file is the entrypoint for Genkit flows in production.
 * It is also used by the Genkit developer UI.
 */
import { nextJsApiHandler } from '@genkit-ai/next/server';
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import next from '@genkit-ai/next';

// Import flows so that they are registered with Genkit.
import '@/ai/flows/generate-pet-portrait';

const ai = genkit({
    plugins: [googleAI(), next()],
});


export const POST = nextJsApiHandler({ai});
