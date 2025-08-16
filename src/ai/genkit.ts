
/**
 * @fileoverview This file initializes the Genkit AI instance.
 */

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI(),
  ],
  // Log to the console in a structured format.
  logSinks: ['json'],
  // In development, log everything.
  logLevel: 'debug',
  // In production, only log errors.
  // logLevel: 'error',
});
