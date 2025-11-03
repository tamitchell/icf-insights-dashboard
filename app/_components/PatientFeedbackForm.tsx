'use client';

import { SmartPatientInsight } from "../_types/types";

interface PatientFeedbackFormProps {
    state: SmartPatientInsight | null,
    formAction: (payload: FormData) => void,
    pending: boolean;
}

export default function PatientFeedbackForm({state, formAction, pending}: PatientFeedbackFormProps) {

    return <div className="mb-4">
        <form className="" action={formAction}>
            <div className="flex flex-row w-full gap-2 justify-between">
            <label htmlFor="patientFeedback" className="w-[90%]">
                <span className="sr-only">Enter Patient Feedback</span>
                <input name="patientFeedback" className="border-1 border-grey-300 w-full p-2 rounded-md" placeholder="Enter key feedback here" />
            </label>
            <button type="submit" className="bg-blue-300 p-2 rounded-md" disabled={pending}>{pending ? "Analyzing" : "Submit"}</button>
            </div>
        </form>
    </div>
}