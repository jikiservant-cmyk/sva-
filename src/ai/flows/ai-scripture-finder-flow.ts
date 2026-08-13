'use server';
/**
 * @fileOverview An AI-powered tool that answers user's questions using relevant Bible verses.
 *
 * - aiScriptureFinder - A function that handles finding relevant scripture and explanations.
 * - AiScriptureFinderInput - The input type for the aiScriptureFinder function.
 * - AiScriptureFinderOutput - The return type for the aiScriptureFinder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiScriptureFinderInputSchema = z.object({
  question: z.string().describe("The user's question about faith or specific topics."),
});
export type AiScriptureFinderInput = z.infer<typeof AiScriptureFinderInputSchema>;

const AiScriptureFinderOutputSchema = z.object({
  explanation: z.string().describe("A concise explanation or summary related to the user's question, based on biblical principles."),
  verses: z.array(z.object({
    reference: z.string().describe("The Bible verse reference (e.g., 'John 3:16')."),
    text: z.string().describe("The full text of the Bible verse."),
  })).describe("An array of relevant Bible verses to answer the question."),
});
export type AiScriptureFinderOutput = z.infer<typeof AiScriptureFinderOutputSchema>;

export async function aiScriptureFinder(input: AiScriptureFinderInput): Promise<AiScriptureFinderOutput> {
  return aiScriptureFinderFlow(input);
}

const aiScriptureFinderPrompt = ai.definePrompt({
  name: 'aiScriptureFinderPrompt',
  input: {schema: AiScriptureFinderInputSchema},
  output: {schema: AiScriptureFinderOutputSchema},
  prompt: `You are an expert biblical scholar and theologian. Your task is to answer user questions about faith or specific topics by providing relevant Bible verses and a concise explanation that deepens understanding of scripture.

Based on the following question, provide relevant Bible verses and a detailed explanation. Ensure the explanation integrates the verses seamlessly.

Question: {{{question}}}`,
});

const aiScriptureFinderFlow = ai.defineFlow(
  {
    name: 'aiScriptureFinderFlow',
    inputSchema: AiScriptureFinderInputSchema,
    outputSchema: AiScriptureFinderOutputSchema,
  },
  async (input) => {
    const {output} = await aiScriptureFinderPrompt(input);
    return output!;
  }
);
