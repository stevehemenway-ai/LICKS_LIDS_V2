
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// This file configures the AI models and plugins for server-side generation.
// It is a standard server-side module and does NOT use the 'use server' directive.
// The exported `ai` object is imported by server actions and flows.

export const ai = genkit({
  plugins: [googleAI()],
});
