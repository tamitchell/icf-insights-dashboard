'use client';

import { useActionState, useEffect } from "react";
import createPatientFeedbackInsight from "../_actions/createPatientFeedbackInsight";

export default function PatientFeedbackForm() {
    const [state, formAction, pending] = useActionState(createPatientFeedbackInsight, null);

    useEffect(() => {
        const cache = localStorage.getItem('responseHistory');
    }, [state]);
    return <div>
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