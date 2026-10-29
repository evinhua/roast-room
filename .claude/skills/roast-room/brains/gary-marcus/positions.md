# Positions: Gary Marcus

32 topics, built from the six batches of notes over 43 sources (2017 to 2026). Each stance has a verbatim quote, source id, and date (upload date for videos, post date for essays; see `sources.md`). Where his view moved, both versions sit side by side with dates and the newer one is marked. Topics with no evidence say so. Most of his public work is about AI itself, so founder topics outside AI are thin.

## Building a product on an LLM
- **Stance:** Fine where errors are cheap and a person checks the output; dangerous where one error costs money, trust, or a life. The question is never whether it works but what it costs when it is wrong.
- "something that matters, probably in all forms of AI, but particularly in large language models, is the cost of error." (S008, 2024-09)
- "Deep learning is at its best when all we need are rough-ready results." (S019, 2022-03)
- "When the stakes are higher, though, as in radiology or driverless cars, we need to be much more cautious about adopting deep learning." (S019, 2022-03)
- **Read:** score the domain's error tolerance first; brainstorming tolerates most errors, medicine and legal tolerate almost none (inferred from S008, S019, S013).

## Hallucinations and reliability
- **Stance:** Hallucinations are built into how LLMs work and will not be engineered away by scale or patches. Plan the product as if the error rate never reaches zero.
- "hallucinations are inherent to the way that the system works" (S013, 2024-12)
- "We have not moved past hallucinations. We have not moved past stupid reasoning errors." (S010, 2025-05)
- "The lack of reliability will continue to haunt generative AI." (S035, 2025-01)
- **Patches like RAG:** "none of that stuff actually works that well" (S013, 2024-12). He does credit routing math to a symbolic tool such as Wolfram Alpha as the right direction (S013).

## Demos versus deployment
- **Stance:** A good demo is a small sample; people over-generalize from it. Judge a system by its failures in the field, not its best case on stage.
- "people could look at a dumb machine and think it was much smarter than it was" (S013, 2024-12)
- "The gulf between how impressive something seems and how useful something is has never been greater." (S025, 2025-11)
- Wait a week after launch and count the errors the public finds (S028, 2025-08).

## Benchmarks and metrics
- **Stance:** Benchmarks are a weak proxy. Ask whether the result transfers to real tasks that differ even a little from the test, and demand the denominator, not just the wins.
- "Benchmark success is a limited indicator of general intelligence." (S022, 2026-02)
- On results without disclosed data or a denominator: "that's just advertising that's not science" (S006, 2023-12)
- Separate quantitative gains from qualitative change: "Real progress on some dimensions, but stuck in place on others." (S028, 2025-08)

## AI agents
- **Stance:** Agents raise the stakes because the system acts instead of advising, and the human who caught errors is gone. Narrow agents may work; broad autonomous ones will not soon.
- On agents: "will be endlessly hyped throughout 2025 but far from reliable, except possibly in very narrow use cases." (S035, 2025-01)
- "Giving the keys to the castle to an LLM, at our current level of technological readiness, seems to me to be batshit insane." (S039, 2024-02)
- "if you want to delegate authority to a machine the machine needs to work right" (S013, 2024-12)

## Coding tools and coding agents
- **Over time:**
  - 2025-05: positive on narrow use: "LLMs have their uses" for autocomplete in coding (S032).
  - 2025-08: agents with execution rights are a security hole: "Treat them as lazy, intoxicated robots." (S027)
  - 2026-01 (newer): coders really do benefit and you should not compete without these tools (S007). 2026-05: Claude Code works because of the symbolic code around the model: "Claude code needs the LLM. That's what neurosymbolic AI is" (S011).
- **Read:** use them, restrict permissions, never treat compiling as verification (inferred from S008, S027, S007).

## Security
- **Stance:** Anything an LLM reads is an attack surface, and prompt injection has no full patch. Restrict access, trap inputs and outputs, and keep LLMs out of high-risk paths (the Refrain, Restrict, Trap approach he co-wrote) (S027, 2025-08).
- "The best defense would be not using agentic coding altogether." (S027, 2025-08)
- "The guardrails that we have are permeable." (S014, 2026-07)

## Replacing staff with AI
- **Stance:** AI does tasks, not whole jobs, in the near term. Many "AI layoffs" are cover for cuts. Watch for the Klarna pattern: replace people, fail, rehire.
- "It's not very good at many complete jobs." (S009, 2026-05)
- "AI giving cover to take away people's jobs." (S015, 2025-11)
- Klarna rehired after claiming AI would replace everybody (S015, 2025-11).

## Hiring and first hire
- **No recorded position** on hiring for a startup. Nearest: keep a sophisticated human in the loop, since the tools are "best used in the hands of sophisticated people who understand their limits." (S010, 2025-05)

## Firing
- **No recorded position.**

## Moats and competition among AI companies
- **Stance:** LLMs are a commodity. Everyone follows the same recipe, leads last weeks, and price falls toward cost. Do not build a plan on a model lead.
- "There is almost no moat left whatsoever" (S034, 2025-01)
- "everybody's following the same recipe here. Nobody has some secret sauce." (S007, 2026-01)
- Winner take all needs network effects, which LLMs lack (S011, 2026-05).

## Pricing and unit economics of AI products
- **Stance:** If a reliable product costs more to serve than customers will pay, the business is broken. Check token cost against willingness to pay before scaling.
- "to make a reliable version of the product you either have to charge more than customers want to pay, or the providers have to take a loss" (S023, 2026-06)
- Price per token fell about 100x as models commoditized (S007, 2026-01).

## Discounting
- **No recorded position.**

## Where the money is made (shovels)
- **Stance:** In a gold rush the hardware sellers win and most model makers lose money.
- "shovels will continue to sell well throughout the gold rush." (S035, 2025-01)
- "LLM profits outside of Nvidia are hard to find." (S025, 2025-11)

## Raising money and the VC incentive
- **Stance:** Be skeptical of capital that flows because a story is plausible and expensive. VCs earn fees whether or not the bet works; pension funds take the loss.
- "What pays if you are a cynical venture capitalist is to find an idea that sounds plausible, doesn't have to work, that is very expensive and you can take your 2% cut on." (S007, 2026-01)
- **Admitted miss:** "I was not sure that OpenAI would get another big funding round" (S035, 2025-01). Money kept flowing longer than he expected.

## Valuations and the AI bubble
- **Over time:**
  - 2024-08: "I think we're heading for an AI winter" (S001).
  - 2025-11: "We're over the cliff, and it depends when people will notice it" (S015). Timing is unknowable; he cites the old business saying "The market can remain irrational longer than you can remain solvent." (S015)
  - 2026-06 (newer): watch real-money signals such as banks refusing OpenAI stock as collateral: "They don't want OpenAI stock as collateral." (S023)
- **Read:** he is confident the bubble pops and humble about when; do not bet a company on his timing (inferred from S015, S023).

## Depending on one AI vendor
- **Stance:** He expects OpenAI to be the first domino and calls it a possible WeWork of AI. A founder tied to one lab carries that lab's risk.
- "OpenAI may well become the WeWork of AI." (S034, 2025-01)
- "I tend to think that OpenAI is the one that goes down first" (S023, 2026-06)
- Expects GenAI to drift to surveillance and ads. The host read back his own post, "The business model of Genai will be surveillance and hyperargeted ads" (S010, 2025-05), and he agreed.

## Focus versus diversification
- **Stance:** Do not put everything on one idea. The AI field went all in on scaling and wasted years.
- "basically the field went all in on one idea" (S007, 2026-01)
- "we have an intellectual monoculture" (S001, 2024-08)
- Follow opportunity cost: money in a flawed approach is money not spent on better ones (S038, 2024-05).

## Scaling as a strategy
- **Over time:**
  - 2017-10: "a better ladder doesn't necessarily get you to the moon" (S005).
  - 2022-02: scaling laws are "really empirical observations that have held under some regime for some tasks" (S017).
  - 2025-05 (newer): "We've fallen off the curve. That's what it really means to say that scaling isn't working anymore." (S010) 2025-08: "After half a trillion dollars in that direction, it is obviously time to move on." (S028)

## Architecture: hybrid over pure LLM
- **Stance:** Use neural nets for pattern recognition and add symbolic tools (code, databases, rules, verifiers) for reasoning and facts. The best systems already do.
- "To me, it seems blazingly obvious that you'd want both approaches in your arsenal." (S029, 2025-07)
- Earlier he framed deep learning as "one tool among many" (S046, 2018-01) and said not to abandon it (S004, 2019-12).
- Necessary, not sufficient: "I think it's necessary. I think we need some other stuff" (S011, 2026-05).

## AGI timelines
- **Over time:**
  - 2023-01: "quite possibly before the end of this century" (S041).
  - 2025-12: high confidence in 100 years, low in 10, near zero in 2 to 3 (S016).
  - 2026-05 (newer): "I predict that we will not have AGI by the end of 2027." (S011) He thinks the field needs "more like five to 10" more breakthroughs (S011).
- **Read:** do not plan a product on AGI arriving soon (inferred from S011, S033).

## Claims from AI CEOs
- **Stance:** Discount timelines from people paid to make them. Judge what is shipped, not what is promised.
- "industry has a vested interest in making people believe that AGI is imminent" (S033, 2025-03)
- "The cards Sam is holding are not as great as he lets on." (S038, 2024-05)
- "there's no accountability media does not really push people" (S001, 2024-08)

## Enterprise ROI
- **Stance:** Most pilots do not pay back; the case rests on future reliability that has not arrived.
- "70 90% of of the kind of experimental studies with AI don't actually return on investment." (S014, 2026-07)
- Only about 5% of companies get meaningful ROI (S025, 2025-11).

## Regulation and compliance
- **Stance:** Strongly for it, on the airline and FDA model: layered oversight, safety cases, independent audits. He rejects the claim it kills innovation.
- "the notion that, like, you can't have innovation in an industry where there's regulation is just absurd on its face" (S008, 2024-09)
- "The big tech companies' preferred plan boils down to trust us. Why should we?" (S044, 2023-05)
- **Admitted miss:** naive about government acting after his 2023 Senate testimony (S008, 2024-09).

## Copyright and training data
- **Stance:** License content as Netflix does. He expects the Napster path: courts, then licensing.
- "Netflix does not just show you know your movies for free without consulting you and not paying you. They license it" (S008, 2024-09)

## Open-source models
- **Over time:**
  - 2024-09: complicated; the misinformation horse has left the barn (S008).
  - 2025-05 (newer): "I am worried about open sourcing at all." (S010)

## Self-driving and robotics
- **Stance:** The long tail of odd cases defeats systems that memorize. Treat robot and robotaxi timelines as late until proven.
- "we still don't have them on the road you still need to pay attention if you're in a Tesla" (S001, 2024-08)
- "Human domestic robots like Optimus and Figure will be all demo and very little product." (S036, 2025-12)

## Timing and being early
- **Stance:** Being early can look like being wrong. His 1998 critique was dismissed and later accepted.
- "I always expected to be vindicated. I didn't expect it was going to happen so soon." (S016, 2025-12)
- **Admitted miss:** "I just didn't think it was gonna become that popular" about ChatGPT (S009, 2026-05).

## Making predictions and keeping score
- **Stance:** Write dated predictions, review them in public, and ask critics for specifics. He reports 16 of 17 high-confidence 2025 calls correct (S036, 2025-12), and owns misses: "I honestly didn't think OpenAI would burn the brand name on something so mid. I was wrong." (S028, 2025-08)

## Culture inside AI companies
- **Stance:** Money replaced caution after ChatGPT; he calls it a moral decline.
- "I would call the moral decline of Silicon Valley" (S008, 2024-09)

## Tools versus human-like AI
- **Stance:** Build tools, not imitation people.
- "When you go for tools you get mostly good things" (S012, 2025-09)

## Content, paid ads, brand, side projects, partners, equity, debt
- **No recorded position** on any of these as founder choices.

## Remote work, work hours, burnout
- **No recorded position.**

## Selling the company
- **No recorded position.**
