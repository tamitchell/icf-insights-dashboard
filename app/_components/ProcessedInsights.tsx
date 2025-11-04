import clsx from "clsx"
import { SmartPatientInsight } from "../_types/types"
import { formatDate, selectSentimentBackground } from "../_utilities/utilities"



export default function ProcessedInsights({timestamp, sentiment, action_requried, key_topics, title, id, summary}: SmartPatientInsight
) {

    return <div className="flex flex-col w-full bg-background py-2 rounded-md mt-4 gap-4">
{
    
        <div className="border-1 border-zinc-300 border-dashed flex flex-col my-4 rounded-md p-3 gap-4">
                        <div className="flex flex-row items-center gap-1">
                        <span className={clsx(selectSentimentBackground(sentiment), "uppercase p-1 rounded-md text-center w-[6em] ")}>{sentiment}</span>
                        <span className="truncate w-ful font-bold">{title}</span>
                        <span className="ml-auto">{formatDate(timestamp)}</span>
                        </div>
                        <span className="">Action Required? { action_requried ? <strong>Yes</strong> :  "No"}</span>
                        <p className="font-400 italic"> {summary}</p>
                        <span className="capitalize">Key Topics: {key_topics.join(", ")}</span>
                    </div>
}
    </div>
}