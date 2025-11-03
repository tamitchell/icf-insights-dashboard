import { memo } from "react"
import { SmartPatientInsight } from "../_types/types"
import clsx from "clsx"
import { formatDate, selectSentimentBackground } from "../_utilities/utilities"
interface InsightsHistoryProps {
    insights: SmartPatientInsight[]
}

export default memo(function InsightsHistory({insights}: InsightsHistoryProps) {

    return <div className="overflow-y-scrol">
        <h4 className="font-lg font-600">Insights History</h4>
        <ul>
            {insights.map(({timestamp, sentiment, action_requried, key_topics, title, id, summary},index) => {
                return <li key={`${index}-${id}`} className="border-1 border-zinc-300 flex flex-col my-4 rounded-md p-3 gap-4">
                    <div className="flex flex-row items-center gap-1">
                    <span className={clsx(selectSentimentBackground(sentiment), "uppercase p-1 rounded-md text-center w-[6em] ")}>{sentiment}</span>
                    <span className="truncate w-ful font-bold">{title}</span>
                    <span className="ml-auto">{formatDate(timestamp)}</span>
                    </div>
                    <span className="">Action Required? { action_requried ? <strong>Yes</strong> : <></>}</span>
                    <p className="font-400 italic"> {summary}</p>
                    <span className="capitalize">Key Topics: {key_topics.join(", ")}</span>
                </li>
            })}
        </ul>
    </div>
})