'use client';

import { LabelList, Pie, PieChart } from "recharts";
import { useMemo } from "react";
import { SmartPatientInsight } from "../_types/types";

interface SentimentPieChart {
    patientInsights: SmartPatientInsight[]
}

export default function SentimentPieChart({patientInsights}: SentimentPieChart) {
   const sentiments = useMemo(() => {
        const totals = patientInsights.reduce((acc, insight) => {
           const category = insight.sentiment;
acc[category] = (acc[category] || 0) + 1;
return acc;

          
        }, {} as Record<string, number>);

        return Object.entries(totals).map(([sentiment, count]) => {
            return {
                sentiment,
                count
            }
        })
   }, [patientInsights])

   console.log("sentiment", sentiments)
   
    return <PieChart  style={{ width: '100%', maxWidth: '800px', maxHeight: '80vh', aspectRatio: 1 }}
    responsive
    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}>
        
        {sentiments.map(({sentiment, count}) => {
            const getColor = (sentiment: "positive" | "negative" | "neutral") => {
                return sentiment === "positive" ? "#4CB963" : sentiment === "negative" ? "#D80032" : "#8693AB"

            }
            return     <Pie
      data={sentiments}
      dataKey="count"
      nameKey={sentiment}
      cx="50%"
      cy="50%"
      outerRadius="50%"
      fill={getColor(sentiment as  "positive" | "negative" | "neutral")}
      label
      labelLine
      >
              <LabelList dataKey="sentiment" name={sentiment} />

      </Pie>
        })}
    </PieChart>

}