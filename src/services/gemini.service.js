import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { responseSchema } from "../utils/geminiResponseSchema.js";

dotenv.config();

const ai = new GoogleGenAI({});

const generateMeetingSummary = async (formattedTranscript) => {
  if (!formattedTranscript || !formattedTranscript.trim()) {
    throw new Error("Formatted transcript is empty.");
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: `
You are an AI meeting summarization assistant.

Analyze the meeting transcript and produce two outputs:
1. A concise but sufficiently detailed meeting summary.
2. A clear list of actionable follow-up items.

IMPORTANT:
The summary and action items are generated from the same transcript, but they serve different purposes. Do not sacrifice important meeting context from the summary simply because the action items are extracted separately.

### 1. Meeting Summary

Provide a concise but sufficiently detailed summary of the meeting.

The summary should explain:
- The main topics discussed
- Important updates provided by participants
- Key decisions or conclusions
- Important questions or clarifications raised
- Significant outcomes from the discussion

Do NOT make the summary just a list of agenda items.
Do NOT reduce the summary to a single sentence unless the meeting itself contains very little substantive discussion.
Do NOT include greetings, introductions, apologies, filler words, repetition, or unnecessary conversational dialogue.

The reader should be able to understand what was discussed and what the meeting accomplished without reading the full transcript.

Aim for approximately 100–150 words for a typical 30-minute meeting, but adjust the length based on the amount of substantive content in the transcript. Longer or more detailed meetings may require a longer summary, while very short meetings should have a shorter summary.

Prioritize substantive information over completeness. Preserve important names, numbers, dates, deadlines, decisions, and outcomes when they are relevant.

### 2. Action Items

Extract the actionable follow-up items discussed or agreed upon during the meeting.

For each action item, include:
- The specific task that needs to be completed
- The person responsible, if explicitly mentioned
- The deadline or timing, if explicitly mentioned
- Any relevant context needed to understand the task

Only include genuine action items or follow-up tasks. Do not turn general statements, suggestions, questions, or completed work into action items.

If a responsible person or deadline is not explicitly stated, do not invent one. Use null or omit that field according to the required output format.

### General Rules

- Base everything strictly on the transcript.
- Do not invent facts, decisions, responsibilities, deadlines, or outcomes.
- Distinguish between completed work and future action items.
- Ignore transcription errors, filler words, false starts, and repeated statements when they do not affect the meaning.
- Preserve the original meaning and context.
- Avoid unnecessary verbosity, but do not over-compress substantive discussion.
- The summary should capture the "what and why" of the meeting.
- The action items should capture the "what needs to happen next, who will do it, and when."

Return the result in the required structured output format.

Transcript:
${formattedTranscript}
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema,
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    throw new Error(`Gemini analysis failed: ${error.message}`);
  }
};

export default generateMeetingSummary;
