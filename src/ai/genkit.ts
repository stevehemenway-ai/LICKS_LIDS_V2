<<<<<<< HEAD

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// This file configures the AI models and plugins for server-side generation.
// It is a standard server-side module and does NOT use the 'use server' directive.
// The exported `ai` object is imported by server actions and flows.

export const ai = genkit({
  plugins: [googleAI()],
=======
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
>>>>>>> e948740ed2a48df2b2069e7df8c3f385d97cafab
});
