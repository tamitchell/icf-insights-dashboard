'use server';
import { ChatOpenAI } from "@langchain/openai";
import { SmartPatientInsight, SmartPatientInsightSchema } from "../_types/types";
import { generateUUID } from "../_utilities/utilities";

const mockResponse: SmartPatientInsight = {
    id: generateUUID(),
    title: "All around great time",
    sentiment: "neutral",
    key_topics: ["happy", "time impact", "cost"],
    action_requried: false,
    summary: "The patient had an all around okay time, and other stuff.",
    timestamp: Date.now()
}

export default async function createPatientFeedbackInsight(initialState: SmartPatientInsight | null, formData: FormData): Promise<SmartPatientInsight> {
    console.log(process.env.OPENAI_API_KEY)

    if (!process.env.OPENAI_API_KEY) { console.info("No key detected, sending mock instead"); return new Promise((resolve) => setTimeout(() => { resolve(mockResponse) }, 2000)) };
    try {
        const model = new ChatOpenAI({
            model: 'gpt-4o',
            apiKey: process.env.OPENAI_API_KEY,
            timeout: 150000,
        });
        const feedback = formData.get('patientFeedback') as string;
        const timestamp = Date.now()
        const prompt = `
            Analyze this customer feedback:
            ${feedback}
            and return JSON with:
            - id: ${generateUUID()} (utilize it exactly)
            - title: Patient's Opinion in a few words
            - sentiment: positive/neutral/negative
            - key_topics: array of 3-5 main topics
            - action_required: boolean
            - summary: one sentence summary
            - timestamp: ${timestamp}
            `


        const modelWithStructuredOutput = model.withStructuredOutput(SmartPatientInsightSchema);
        const response = await modelWithStructuredOutput.invoke(prompt);
        console.log("DATA FROM API MODEL", response);

        return response
    } catch (error) {
        console.error("There was a problem analyzing input", error);
        throw new Error("There was a problem submitting request");
    }
}