import { v4 as uuidv4 } from 'uuid';

export function generateUUID(): string {
    return uuidv4();
}

export const selectSentimentBackground = (sentiment: "positive" | "neutral" | "negative") => {
    switch (sentiment) {
        case ('positive'):
            return "bg-positive text-white"
        case ('negative'):
            return "bg-negative text-white"
        case ('neutral'):
            return "bg-neutral text-white"
        default:
            return "bg-neutral"
    }
}

export const formatDate = (timestamp: number) => {
    const formattedDate = new Date(timestamp)
    return formattedDate.toLocaleDateString('en-US', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}