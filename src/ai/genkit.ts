/**
 * @fileOverview Initializes and configures the Genkit AI singleton.
 * 
 * This file sets up the Genkit instance with the necessary plugins,
 * in this case, the Google AI plugin for accessing Gemini models.
 * It ensures that a single, configured instance of Genkit is available
 * throughout the server-side of the application.
 */

import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

// DIAGNOSTIC: Log the API key to the console to verify it's loaded.
console.log('Attempting to use Google AI API Key:', process.env.GOOGLE_GENAI_API_KEY);

// Initialize Genkit with the Google AI plugin.
// This makes the Gemini models available for use in flows.
export const ai = genkit({
  plugins: [
    googleAI({
      // The API key is automatically sourced from the 
      // GOOGLE_GENAI_API_KEY environment variable.
    }),
  ],
});
