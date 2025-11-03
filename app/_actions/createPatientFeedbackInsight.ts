import { SmartPatientInsight } from "../_types/types";
import { generateUUID } from "../_utilities/generateId";

const mockResponse: SmartPatientInsight = {
    id: generateUUID(),
    title: "Unclear Directives and Negative Experience",
    sentiment: "negative",
    key_topics: ["disgruntled", "time impact", "cost"],
    action_requried: true,
    summary: "The patient had negative experience and explained high wait times, unclear directives from doctor, and other stuff.",
    timestamp: Date.now()
}

export default async function createPatientFeedbackInsight(initialState: SmartPatientInsight | null, formData: FormData): Promise<SmartPatientInsight> {

    if(!process.env.OPENAI_API_KEY) {
        return mockResponse
    }
    try {
    const feedback = formData.get('patientFeedback') as string;
    
    return new Promise(resolve => setTimeout(() => resolve(mockResponse), 1000))

    } catch(error) {
        console.error("There was a problem analyzing input", error);
        throw new Error("There was a problem submitting request");
    }
}