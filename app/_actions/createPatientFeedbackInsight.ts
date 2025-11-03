import { SmartPatientInsight } from "../_types/types";
import { generateUUID } from "../_utilities/generateId";

const mockResponse: SmartPatientInsight = {
    id: generateUUID(),
    sentiment: "negative",
    key_topics: ["disgruntled", "time impact", "cost"],
    action_requried: true,
    summary: "The patient had negative experience and explained high wait times, unclear directives from doctor, and other stuff."
}

export default function createPatientFeedbackInsight(initialState: SmartPatientInsight | null, formData: FormData): SmartPatientInsight {

    if(!process.env.OPENAI_API_KEY) {
        return mockResponse
    }
    try {
    const feedback = formData.get('patientFeedback') as string;

    return mockResponse

    } catch(error) {
        console.error("There was a problem analyzing input", error);
        throw new Error("There was a problem submitting request");
    }
}