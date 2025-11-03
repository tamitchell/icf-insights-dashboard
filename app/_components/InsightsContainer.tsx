'use client';
import { useActionState, useEffect, useMemo, useState } from "react";
import PatientFeedbackForm from "./PatientFeedbackForm";
import createPatientFeedbackInsight from "../_actions/createPatientFeedbackInsight";
import InsightsHistory from "./InsightsHistory";
import { SmartPatientInsight } from "../_types/types";
import ProcessedInsights from "./ProcessedInsights";

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

    }, [state, pending])

    const excludedCurrentInsightList = useMemo(() => {
        return [...insights].slice(0, (state !== null ? -1 : undefined)).reverse()
    }, [insights])

    return <div className="h-full w-full">
        {state && !pending && <ProcessedInsights {...state} />}
        <PatientFeedbackForm state={state} formAction={formAction} pending={pending} />
        {<InsightsHistory insights={excludedCurrentInsightList} />}
    </div>
}