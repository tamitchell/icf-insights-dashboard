'use client';
import { useActionState, useEffect, useState } from "react";
import PatientFeedbackForm from "./PatientFeedbackForm";
import createPatientFeedbackInsight from "../_actions/createPatientFeedbackInsight";
import InsightsHistory from "./InsightsHistory";
import { SmartPatientInsight } from "../_types/types";

export default function InsightsContainer() {
    const [state, formAction, pending] = useActionState(createPatientFeedbackInsight, null);
    const [insights, setInsights] = useState<SmartPatientInsight[]>([])

    useEffect(() => {
        if(!pending && state) {
            const localStore = JSON.parse(localStorage.getItem('responseHistory') || '[]')
            const updatedStore = [...localStore, state]
            localStorage.setItem('responseHistory', JSON.stringify(updatedStore));
        }
        setInsights(JSON.parse(localStorage.getItem('responseHistory') || "[]"))

    }, [state])

    return <div className="border-1 border-indigo-600 w-full">
        <PatientFeedbackForm state={state} formAction={formAction} pending={pending} />
        <InsightsHistory insights={insights} />
    </div>
}