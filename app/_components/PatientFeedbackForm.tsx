'use client';

import { useActionState } from "react";

export default function PatientFeedbackForm() {
const [state, formAction, pending] = useActionState();
    return <div>
        <form className="">
            <input name="patientFeedback" placeholder="Enter key feedback here" />
            <button type="submit" disabled={false}>Submit</button>
        </form>
    </div>
}