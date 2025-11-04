# Patient Feedback Analyzer Readme

The below documentation details how to setup this repo for running the Patients Feedback Analzyer for the interview briefing. It is rather simple, the tech stack I chose was Next v16, TypeScript, LangChain, OpenAI GPT-4o, Zod, and Recharts.

A note: I have a developer's account with OpenAI and I use my API_Key during testing. If you have your own key, feel free to add it to the project before running as that will provide the best experience:

In you ``./env``

```
OPENAI_API_KEY="your-key-here"
```

If you do not put a key, note that the responses are mocked and are NOT varied. :D The app will be functional but the chart (s) will be meaningless.

To get setup simply run the below steps:

```
npm install 
npm run dev
```

The port should be working at ``localhost:3000``

### Design Decisions & Implementation Notes

Two hours meant making some strategic choices. I completed each part of the exercise, though some design decisions were made that affected the underlying functionality.

The main pain points were actually deciding what would be valuable insights from another analyst's perspective without a lot of context clues. As such, you'll notice that the one metric I created was a loosely done pie chart that depicts the ratios of categories showing the counts of positive, neutral, and negative sentiment. I chose this because it would give an immediate bird's eye view on the overall sentiment of the hospital (I'm assuming?) at a glance. A majority negative reviews would show immediately. 

The other metric I wanted to do, but couldn't squeeze into this time frame would have been a Pareto chart. Pareto is the principle that "80% of the problems stem from 20% of the causes." For quality management (based on what this appears to be), this would be a great choice to show by frequency of insights (categorized by some larger ruleset involving a tighter restriction on what could be considered a "key_topic"), quality testers would then have a better grasp on where in the process things tend to deteriorate, and angle their actions accordingly.

In a real scenario, I'd want to talk with product first to understand which insights actually drive their decisions. The Pareto chart would've been interesting, but even a simple action_required vs. no-action bar chart could provide value. Building the wrong thing efficiently isn't helpful.

### If I had just ONE more Hour...

I would implement batch processing! But likely not in the way you think! 

Realistically, users should be able to type multiple reviews or feedback and it be varied. This could mean they review the same hospital across multiple phases (wait time was phenomenal, but bedside manner was poor, diagnostics had hiccups) OR they review multiple hospitals entirely. How granular should the user's feedback be processed? Is there value in this all going into one summarized "insight"?  And what value is lost when the user is forced to summarize this all for themselves.

Currently, the app only generates only one insight per user input, the limitation of the summary itself is reduced to a single sentence, and "key_topics" offer no framing - they could literally be whatever the AI decides as a category to trace.

More time would have allowed me to write a better prompt, and also better typing for the structured output. While coding, I realized the system accepts nonsensical input - I could type "adsajdsa" and still get a structured response. This is well known in LLM procedures, where a forced output requires the LLM to hallucinate, and without integration of intermediary tooling to intercept responses (think LangSmith or probability/confidence intervals per token), it's very hard validate beyond - "Does this structure look correct?"

Processing multiple inputs might not require LangChain's native batching method - it could be simpler to adjust the Zod schemas to output arrays instead of single objects. But I realize that raises it's own question, how can we be certain that the content produced by the LLM, is compliant, sanitized and accurate? This leads me to my next point and the part of this readme:

### Security and Compliance Considerations

As noted in the original directions, and in the world of healthcare there's the issue of HIPAA violations becoming an issue if the data is not properly stored. I made several sacrifices for the purpose of time management for this take home that I would not do in an actual app - mainly using localStorage for data persistence. With more time, a proper database would be implemented with backend encryption. Not only in the way of encryption however, we must consider that an intermediary method should potentially sanitize or redact information before it is submitted to ANY LLM (internal or external sources like OpenAI).

The redaction piece is particularly critical for AI systems - even "anonymous" feedback can contain identifying information. Ideally, I'd implement a preprocessing layer that detects and redacts PHI before the LLM ever sees it.

While infrastructure concerns like key management and database encryption would involve collaboration with DevOps/Security teams, the application-level decisions around data flow and LLM input sanitization would be extremely important for an engineer to implement when writing apps with any AI integration.

Regarding data retention and deletion, I don't have direct HIPAA compliance experience, however I have knowledge of it drawing from my DoD contract experience at Booz Allen. Under that umbrella, we implemented hot/cold storage strategies where the hot storage kept recent data for about 90 days. Cold storage archived historical data for compliance/auditing was much longer, possibly 7 years or more. I presume that HIPAA may have very similar requirements. 

### Closing Words

Thanks for the interesting prompt! Happy to discuss any of these decisions or dive deeper into the implementation. Looking forward to chatting.