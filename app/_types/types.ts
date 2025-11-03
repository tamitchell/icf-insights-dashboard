/**
 * Plan of Attack
 * 
 * Smart Patient feedback from docs
 * 
 * Analyze this customer feedback and return JSON with:
- sentiment: positive/neutral/negative
- key_topics: array of 3-5 main topics

- action_required: boolean
- summary: one sentence summary
 */

import * as z from "zod";

export const SmartPatientInsightSchema = z.object({
    id: z.uuidv4(),
    title: z.string(),
    sentiment: z.enum(["positive", "neutral", "negative"]),
    key_topics: z.array(z.string()).min(3).max(5),
    action_requried: z.boolean(),
    summary: z.string(),
    timestamp: z.number()
})

export type SmartPatientInsight = z.infer<typeof SmartPatientInsightSchema>
