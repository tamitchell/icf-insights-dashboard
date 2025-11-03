import { SmartPatientInsight } from "../_types/types";
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

    if (!process.env.OPENAI_API_KEY) { console.info("No key detected, sending mock instead"); return new Promise((resolve) => setTimeout(() => { resolve(mockResponse) }, 2000)) };

    try {
    const feedback = formData.get('patientFeedback') as string;
    
    return new Promise(resolve => setTimeout(() => resolve(mockResponse), 1000))

    } catch(error) {
        console.error("There was a problem analyzing input", error);
        throw new Error("There was a problem submitting request");
    }
}