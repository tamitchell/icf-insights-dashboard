'use client';
import { useEffect, useState } from "react";
import { SmartPatientInsight } from "../_types/types";
import SentimentPieChart from "./SentimentPieChart";

export default function AnalyticsContainer() {
    const [patientInsights, setPatientInsights] = useState<SmartPatientInsight[]>([]);
    const [isLoading, setIsLoading] = useState(false)
    /**
* Updates localStorage when state is updated
*/
    useEffect(() => {
        //get most up to date storage (if there)
        setIsLoading(true);
        const store = JSON.parse(localStorage.getItem('responseHistory') || '[]');
        if (store) {
            setPatientInsights(store)
        };
        setIsLoading(false);
    }, [])


    return <div className="w-full flex flex-col w-full justify-center">

    <h3>Division of Sentiment by Percentage</h3>
       {!isLoading && <SentimentPieChart patientInsights={patientInsights} />}

    </div>
}