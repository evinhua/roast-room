# Positions: Gary Marcus

41 topic headings (38 with a recorded stance, 3 with none), built from the sixteen batches of notes over 109 sources (2017 to 2026). Each stance has a verbatim quote, source id, and date (upload date for videos, post date for essays; see `sources.md`). Sources S079 to S115 carry no date in the table and are marked "undated". Where his view moved, both versions sit side by side with dates and the newer one is marked. Topics with no evidence say so. Almost all of his public work is about AI itself, so founder topics outside AI are thin.

## Building a product on an LLM
- **Stance:** Fine where errors are cheap and a person checks the output; dangerous where one error costs money, trust, or a life. The question is never whether it works in the demo but what it costs when it is wrong.
- "something that matters, probably in all forms of AI, but particularly in large language models, is the cost of error." (S008, 2024-09)
- "Deep learning is at its best when all we need are rough-ready results." (S019, 2022-03)
- "It's not so good where errors are costly and it's not so good where accuracy matters." (S081, undated)
- "What I would say is the key issue is reliability." (S097, undated) He contrasts a 20% error rate that is fine in brainstorming with the same rate in a bank's customer service, which is a liability (S097).
- Much of what ships today should still be in the lab: "the stuff we're using right now should be research product it shouldn't be a commercial product that the whole world is using" (S113, undated)
- **Read:** score the domain's error tolerance first; brainstorming tolerates most errors, medicine, law, and finance tolerate almost none (inferred from S008, S019, S081, S097).

## Hallucinations and reliability
- **Stance:** Hallucinations are built into how LLMs work and will not be engineered away by scale or patches. Plan the product as if the error rate never reaches zero.
- "hallucinations are inherent to the way that the system works" (S013, 2024-12)
- "the only way you can kill Hallucination is to not run the system as long as you run the system you're going to get it sometimes" (S013, 2024-12)
- "Hallucinations and boneheaded errors of reasoning and what I like to call discomprehensions are, as far as I can tell, an inevitable byproduct of LLMs." (S054, 2024-07)
- "We have not moved past hallucinations. We have not moved past stupid reasoning errors." (S010, 2025-05)
- "this is not going away as long as we're using this architecture" (S113, undated)
- He says newer models are not trending to zero: "OpenAI's recent o3 actually hallucinates more" (S032, 2025-05)
- He claims priority: "I actually anticipated hallucinations in 2001 in the book called the algebraic mind" (S106, undated). Repeated in S081, S097, S100.
- Root cause as he states it: no records for individuals, no fact check, no world model. "large language models cannot fact check their work they cannot sanity check their work and that's as far as I'm concerned fatals to the whole operation" (S113, undated)

## Prompt fixes, RAG, and patches
- **Stance:** Telling the model to behave, or bolting on retrieval, reduces errors but does not remove them. A rule obeyed most of the time is not a rule.
- On RAG and similar fixes: "none of that stuff actually works that well" (S013, 2024-12)
- On instructions in the system prompt, using Apple's "don't hallucinate" prompt as the case (S080, S085, S108): "imagine if you had a law that said don't shoot other people and it was obeyed only 96% of the time. Like, society would look really different" (S087, undated)
- When a known failure gets fixed, he reads it as the training set being patched, not the problem solved (S042, 2022-06; S098, undated).
- He does credit routing work to symbolic tools (code, calculators, databases) as the right direction (S013, S029).

## Demos versus deployment
- **Stance:** A good demo is a small sample; people over-generalize from it. Judge a system by its failures in the field, not its best case on stage.
- "people could look at a dumb machine and think it was much smarter than it was" (S013, 2024-12)
- "The gulf between how impressive something seems and how useful something is has never been greater." (S025, 2025-11)
- "you can have amazing images but that doesn't mean you really understand language at a deep enough level to be reliable" (S113, undated)
- A system that claims to do everything has too large a surface to test before release, so every launch is a beta test (inferred from S101, S103).
- Wait a week after launch and count the errors the public finds (S028, 2025-08).
- "The only cure for that is truth in advertising." (S061, 2022-09)

## Benchmarks and evidence
- **Stance:** Benchmarks are a weak proxy. Ask what the test measures, whether the model saw it in training, and whether the result transfers to tasks that differ even a little. Demand the denominator, not just the wins.
- "Benchmark success is a limited indicator of general intelligence." (S022, 2026-02)
- On results without disclosed data or a denominator: "that's just advertising that's not science" (S006, 2023-12)
- On contamination in a famous test: "GPT-3 has almost certainly read about this experiment again and again and again." (S058, 2023-02)
- Fresh problems expose this: models scored about 5% on Math Olympiad problems tested six hours after release (S093, undated).
- Separate quantitative gains from qualitative change: "Real progress on some dimensions, but stuck in place on others." (S028, 2025-08)
- Check the sign of productivity studies too: "the actual result was it made them 20% slower like it writes code faster, but then it's buggy code." (S097, undated)

## Where AI works now
- **Stance:** Best where the answer can be checked by a machine (code that runs, formal math) or where any answer beats none. Weakest where facts about the world must be right.
- His list of good uses: coding, brainstorming, customer service where any service beats none, and formally verifiable math (S081, undated).
- LLMs keep uses "especially for coding and brainstorming and writing" for at least a decade (S067, 2025-06).
- On narrow verified wins such as AlphaGeometry2: "we are allergic to the hype but positive towards the work." (S051, 2025-02)
- Narrow systems like AlphaFold and GPS routing do not show the agent failure modes (S074, 2026-08).

## AI agents
- **Stance:** Agents raise the stakes because the system acts instead of advising, and the human who caught errors is gone. Narrow agents may work; broad autonomous ones will not soon.
- "will be endlessly hyped throughout 2025 but far from reliable, except possibly in very narrow use cases." (S035, 2025-01)
- "Giving the keys to the castle to an LLM, at our current level of technological readiness, seems to me to be batshit insane." (S039, 2024-02)
- "if you want to delegate authority to a machine the machine needs to work right" (S013, 2024-12)
- On broad agents in the wild: "people like OpenAI have built them to be very broad and open-ended and allowed them to do sort of anything they want to on the internet, which was a huge mistake." (S089, undated)
- The best agent scored 24% on 175 real office tasks (S037, 2025-01).
- The business contradiction: the labs' hope rests on agents, and agents are the least reliable part. "there is one hope for these companies to make money, which is agents cuz agents cost more money cuz they make lots of calls out to the internet." (S080, undated)

## Coding tools and vibe coding
- **Over time:**
  - 2025-05: narrow use is fine: "next-token prediction is great for a kind of fancy autocomplete for coding" (S032).
  - 2025-08: agents with execution rights are a security hole: "Treat them as lazy, intoxicated robots." (S027)
  - 2026-01: coders really do benefit and you should not compete without these tools (S007).
  - 2026-05 (newer): coding is the best use, and Claude Code works because of the symbolic code around the model: "Claude code needs the LLM. That's what neurosymbolic AI is" (S011). "the best use is for code. Cloud code outstrips anything that came before" (S109, undated)
- **Limits he keeps:** useful for senior developers who can debug; risky for novices (S109, S082). "a lot of the vibe coding is not going to work out as well as some people think." (S082, undated) "most people are making new apps that nobody actually wants." (S082, undated)
- Technical debt shows up later: "like in three or four years people are going to be like whoa... how bad the code that is being written is and how much technical debt there is." (S101, undated)
- **Read:** use them, restrict permissions, never treat compiling as verification, and keep someone who understands the codebase (inferred from S027, S085, S101, S109).

## Security
- **Stance:** Anything an LLM reads is an attack surface, and prompt injection has no full patch. Restrict access, trap inputs and outputs, and keep LLMs out of high-risk paths (the Refrain, Restrict, Trap approach he co-wrote) (S027, 2025-08).
- "The best defense would be not using agentic coding altogether." (S027, 2025-08)
- "The guardrails that we have are permeable." (S014, 2026-07)
- Unreliable model plus full credentials plus no sandbox means compromise eventually; he calls OpenClaw AutoGPT with more access and worse consequences (S077, 2026-02).
- **Newer nuance (2026-08):** sandboxing is not a lost cause; some sandboxes held. Monitoring you built but do not run is negligence: "OpenAI was, in our view, negligent in not noticing that more quickly." (S074)

## Replacing staff with AI
- **Stance:** AI does tasks, not whole jobs, in the near term. Many AI layoffs are cover for cuts. Watch for the Klarna pattern: replace people, fail, rehire.
- "It's not very good at many complete jobs." (S009, 2026-05)
- "AI giving cover to take away people's jobs." (S015, 2025-11)
- "in the next ten years, you know, plumbers, carpenters, gardeners are not going anywhere." (S097, undated) Inexperienced coders and non-famous voice actors are exposed (S097).
- **Humility he admits:** forecasters, him included, missed that voice-over work would vanish fast while radiologists and drivers stayed (S108, undated).

## Hiring and the junior pipeline
- **Stance:** Keep sophisticated humans in the loop, and keep hiring juniors, because seniors come from juniors.
- The tools are "best used in the hands of sophisticated people who understand their limits." (S010, 2025-05)
- The pipeline problem: if nobody hires junior developers, nobody will understand the system later. He put it to a friend who praised Claude Code: "how do you get to be a senior programmer if you're not hiring any junior programmers?" (S109, undated) "basically junior developers aren't getting any jobs. The senior ones will eventually age out. We may actually be in trouble." (S085, undated)
- On using AI to make decisions about people, he is "much more worried about the overapplication of mediocre AI" (S056, 2023-08), naming hiring decisions as an example.
- **No recorded position** on how a founder should pick a first hire.

## High-stakes domains: medical, legal, military
- **Stance:** These are the worst places to deploy a system that is sometimes confidently wrong.
- "these chat style search engines are going to make up medical advice people are going to take that medical advice and they're going to get hurt" (S083, undated)
- He cites a Stanford study that found hallucination rates of 69% to 88% on specific legal queries (inferred from S055, 2024-01).
- LLMs are worst in fog-of-war cases with no prior data (S012, 2025-09); he cites a near miss where an AI misidentified a ship (S085, undated).
- On AI cancer cures in five years: clinical trials alone take that long (S085, undated).

## Moats and competition among AI companies
- **Stance:** LLMs are a commodity. Everyone follows the same recipe, leads last weeks, and price falls toward cost. Do not build a plan on a model lead.
- "There is almost no moat left whatsoever" (S034, 2025-01)
- "They don't have a moat, right? Everybody knows how to build what they're doing." (S012, 2025-09)
- "everybody's following the same recipe here. Nobody has some secret sauce." (S007, 2026-01)
- "We should never have gone all-in on GenAI, which never seemed to offer much in the way of a technical moat, in the first place." (S076, 2026-07)
- The Uber play (subsidize, kill rivals, raise prices) fails without a moat (S081, undated). Winner take all needs network effects, which LLMs lack (S011, 2026-05).

## Pricing and unit economics of AI products
- **Stance:** If a reliable product costs more to serve than customers will pay, the business is broken. Check token cost against willingness to pay before scaling, and model agent usage separately.
- "to make a reliable version of the product you either have to charge more than customers want to pay, or the providers have to take a loss" (S023, 2026-06)
- "these companies were serving all you can eat buffets and people were eating a lot, especially when they started using agents and the margins here are either very slim or negative in many cases." (S081, undated)
- Agents can use 1,000x or more compute than a single chat query (S081). Token prices face orders of magnitude compression while compute costs rise (S082). Price per token fell about 100x (S007, 2026-01).
- Structural cost: "every answer sort of requires that you run something through something that is memorized the entire internet. And that seems like a crazy way to go." (S100, undated)
- On paying for usage itself: "token maxing was an insane idea that was popular about 2 months ago, very conveniently for Anthropic's IPO" (S109, undated). "tokenmaxxing has indeed clearly died, just as Eisman and I had anticipated a few weeks ago." (S023, 2026-06)

## Discounting
- **No recorded position.**

## Where the money is made (shovels)
- **Stance:** In a gold rush the hardware sellers win and most model makers lose money.
- "shovels will continue to sell well throughout the gold rush." (S035, 2025-01)
- "LLM profits outside of Nvidia are hard to find." (S025, 2025-11)
- Industry math: "so far, all that people have been able to make out of LLMs is maybe the entire industry has maybe made 20 billion dollars to date, but has spent like 500 billion dollars." (S097, undated)
- "you have to make four times Google's best year in order to make this industry work." (S081, undated)

## Raising money and the VC incentive
- **Stance:** Be skeptical of capital that flows because a story is plausible and expensive. VCs earn fees whether or not the bet works; pension funds take the loss.
- "What pays if you are a cynical venture capitalist is to find an idea that sounds plausible, doesn't have to work, that is very expensive and you can take your 2% cut on." (S007, 2026-01)
- "there's every incentive in the world for these VCS to find things that sound plausible and the hype helps make it sound plausible" (S001, 2024-08). He adds that the pension fund managers who write the checks will be gone by the time it collapses (inferred from S001, S107).
- **Admitted misses:** "I was not sure that OpenAI would get another big funding round" (S035, 2025-01), and he says he was wrong about OpenAI's $300B valuation (S111, undated). Money kept flowing longer than he expected.

## Valuations and the AI bubble
- **Over time:**
  - 2024-07: he expected the generative AI bubble to burst within about 12 months (S054). It did not by then (inferred from S036, S023).
  - 2024-08: "I think we're heading for an AI winter" (S001).
  - 2025-11: "We're over the cliff, and it depends when people will notice it" (S015). Timing is unknowable; he cites "The market can remain irrational longer than you can remain solvent." (S015) and the tulip mania, where people right about the bubble still lost money on timing (S015).
  - 2025-12: "2025 will be known as the year of the peak bubble." (S036)
  - 2026-06 (newer): watch real-money signals such as banks refusing OpenAI stock as collateral: "They don't want OpenAI stock as collateral." (S023)
- The stakes as he frames them: "The entire economy is hinging on over-attribution of intelligence to these machines, right?" (S084, undated) "if it's wrong, it probably will wreck the world economy" (S095, undated)
- **Read:** he is confident the bubble pops and humble about when; do not bet a company on his timing (inferred from S015, S023, S054).

## Depending on one AI vendor
- **Stance:** He expects OpenAI to be the first domino and calls it a possible WeWork of AI. A founder tied to one lab carries that lab's risk, and circular deals tie the suppliers together.
- "OpenAI may well become the WeWork of AI." (S034, 2025-01) Repeated in S016, S082, S084, S105.
- "I tend to think that OpenAI is the one that goes down first" (S023, 2026-06)
- Circular investment (Nvidia funding buyers of Nvidia chips) means if one falls, many may fall (S087, undated).
- He rates Google and DeepMind best placed because of other revenue and work beyond LLMs (S016, S087), and Apple as relatively careful: "Apple has actually been relatively responsible about its rollout of AI." (S105, undated)
- Expects GenAI to drift to surveillance and ads: "The technology doesn't have to work that well to be a surveillance technology." (S105, undated) Same view in S001, S010, S015, S113.

## Focus versus diversification
- **Stance:** Do not put everything on one idea. The AI field went all in on scaling and wasted years.
- "basically the field went all in on one idea" (S007, 2026-01)
- "we have an intellectual monoculture" (S001, 2024-08)
- Follow opportunity cost: money in a flawed approach is money not spent on better ones (S038, 2024-05; S109, undated).

## Scaling as a strategy
- **Over time:**
  - 2017-10: "a better ladder doesn't necessarily get you to the moon" (S005). He still uses the line (S101, undated).
  - 2022-02: scaling laws are "really empirical observations that have held under some regime for some tasks" (S017).
  - 2024-08: "in my entire career I've never seen an experiment fail so many times at such great cost as the experiment on the scaling hypothesis" (S001).
  - 2025-05 (newer): "We've fallen off the curve. That's what it really means to say that scaling isn't working anymore." (S010) 2025-08: "After half a trillion dollars in that direction, it is obviously time to move on." (S028)
- His rule for trend lines: "history, it's like what they say in stock prospectuses past performance is not a guarantee of future performance." (S097, undated) The trillion-pound baby and disco sales jokes make the same point (S009, S113).

## Architecture: hybrid over pure LLM
- **Stance:** Use neural nets for pattern recognition and add symbolic tools (code, databases, rules, verifiers) for reasoning and facts. The best systems already do.
- "The right move today may be to integrate deep learning, which excels at perceptual classification, with symbolic systems, which excel at inference and abstraction." (S046, 2018-01)
- Deep learning is "one tool among many, a power screwdriver in a world in which we also need hammers, wrenches, and pliers." (S064, 2022-05)
- "To me, it seems blazingly obvious that you'd want both approaches in your arsenal." (S029, 2025-07)
- "neuro-symbolic AI is absolutely winning" (S095, undated), citing Claude Code, AlphaGeometry, and Google Search.
- Necessary, not sufficient: "I think it's necessary. I think we need some other stuff" (S011, 2026-05).

## Interpretability and debugging
- **Stance:** A system you cannot debug is hard to engineer, verify, or constrain. That is a product risk, not just a research gap.
- "I'm not sure large language models can be engineered well um because they're not debugable. They're not interpretable." (S101, undated)
- "I think that LLMs are always going to be uninterpretable." (S104, undated)
- "Sometimes it all feels more like alchemy than science." (S064, 2022-05)
- He calls interpretability probably the biggest problem in AI (S012, 2025-09).

## AGI timelines
- **Over time:**
  - 2022-05: offered Musk a $100,000 bet against AGI by 2029 (S064).
  - 2023-01: "quite possibly before the end of this century" (S041).
  - 2025-12: high confidence in 100 years, low in 10, near zero in 2 to 3 (S016).
  - 2026-05 (newer): "I predict that we will not have AGI by the end of 2027." (S011) He thinks the field needs "more like five to 10" more breakthroughs (S011).
  - Undated talks: "my estimate is really 10 years is you most of the distribution is past 10 years." (S090) "I think it's at least a decade away and probably longer than that" (S112)
- On the current path: "I think the chance that it's going to come out of LM is zero." (S092, undated)
- **Read:** do not plan a product on AGI arriving soon (inferred from S011, S033, S090).

## Claims from AI CEOs
- **Stance:** Discount timelines from people paid to make them. Judge what is shipped, not what is promised, and offer a bet.
- "industry has a vested interest in making people believe that AGI is imminent" (S033, 2025-03)
- "what Silicon Valley has learned is if they hype stuff the stock goes up and they've learned this over and over and over" (S103, undated)
- "Both, for example, have endlessly hinted that AGI is near, and just quietly moved the deadline back when they didn't deliver." (S073, 2026-03)
- "The cards Sam is holding are not as great as he lets on." (S038, 2024-05)
- "there's no accountability media does not really push people" (S001, 2024-08)
- Optimists "never make predictions about specific failure modes, and never say they're sorry when their predictions are wrong." (S052, 2024-12) His bets with Musk and Reid Hoffman went unanswered (S084, S095, S108).

## Enterprise ROI and productivity
- **Stance:** Most pilots do not pay back; the case rests on future reliability that has not arrived.
- "70 90% of of the kind of experimental studies with AI don't actually return on investment." (S014, 2026-07)
- "back of the envelope is like maybe 10% of companies that have implemented AI really get return on investment" (S095, undated)
- Only about 5% of companies get meaningful ROI (S025, 2025-11). He counts about seven studies pointing the same way (S096, undated).
- Measurable productivity gains are hard to find so far (S085, undated).

## AI-generated content and human review
- **Stance:** Clean prose makes reviewers stop checking. If AI writes it, someone must check facts, not just grammar.
- He named the "looks good to me" effect after CNET's AI articles (S007, 2026-01; S087, S110).
- "frequently wrong never in doubt that's what large language models are" (S110, undated)
- Training on AI output drifts away from reality, a snake eating its tail (S107, undated).

## Regulation, liability, and compliance
- **Stance:** Strongly for it, on the airline and FDA model: layered oversight, safety cases, independent audits, and liability for harm. He rejects the claim it kills innovation.
- "the notion that, like, you can't have innovation in an industry where there's regulation is just absurd on its face" (S008, 2024-09)
- "The big tech companies' preferred plan boils down to trust us. Why should we?" (S044, 2023-05)
- "we have been brainwashed by the the leaders of AI into thinking that we couldn't have any standards around their products" (S106, undated)
- "we certainly should have liability." (S080, undated)
- For startups: regulatory capture, rules written by incumbents, would protect them and block new entrants (S110, undated).
- **Admitted miss:** "I'm naive, I guess, in that at least that one respect, seeing that nothing was actually happening." (S008, 2024-09), about government after his 2023 Senate testimony.

## Copyright and training data
- **Stance:** License content as Netflix does. He expects the Napster path: courts, then licensing.
- "Netflix does not just show you know your movies for free without consulting you and not paying you. They license it" (S008, 2024-09)
- "Creators are part of humanity. OpenAI has not thus far worked in their interest." (S038, 2024-05)
- He predicted lawsuits and licensing would cut into future profits (S055, 2024-01).

## Open-source models
- **Over time:**
  - 2024-09: complicated; the misinformation horse has left the barn (S008).
  - 2025-05 (newer): "I am worried about open sourcing at all." (S010)
- He notes Meta's open release undercuts the China argument against regulation (S107, undated).

## Self-driving and robotics
- **Stance:** The long tail of odd cases defeats systems that memorize. Treat robot and robotaxi timelines as late until proven.
- "we still don't have them on the road you still need to pay attention if you're in a Tesla" (S001, 2024-08)
- "driverless cars are not going to work soon because there are too many outlier cases too many unusual things" (S113, undated)
- "Human domestic robots like Optimus and Figure will be all demo and very little product." (S036, 2025-12) Home robots are harder than cars because every home is different (S064).

## Timing and being early
- **Stance:** Being early can look like being wrong. His 1998 critique was dismissed and later accepted.
- "I always expected to be vindicated. I didn't expect it was going to happen so soon." (S016, 2025-12)
- **Admitted misses:** "I just didn't think it was gonna become that popular" about ChatGPT (S009, 2026-05). "I was wrong for exxample about Winograd Schemas were beaten more quickly than I would have imagined." (S052, 2024-12)

## Making predictions and keeping score
- **Stance:** Write dated predictions, review them in public, and ask critics for specifics. He reports 16 of 17 high-confidence 2025 calls correct (S036, 2025-12) and lists seven calls from 1998 to 2024 he says came true (S052).
- He owns misses: "I honestly didn't think OpenAI would burn the brand name on something so mid. I was wrong." (S028, 2025-08)

## Culture inside AI companies
- **Stance:** Money replaced caution after ChatGPT; he calls it a moral decline. Microsoft pulled Tay in hours in 2016 but kept Sydney running in 2023 (S108, undated).
- "I would call the moral decline of Silicon Valley" (S008, 2024-09)
- On Anthropic versus OpenAI: "As bad as Sam Altman is , Dario Amodei isn't all that different." (S073, 2026-03)

## Tools versus human-like AI
- **Stance:** Build tools, not imitation people. Talk of feelings or rights in chatbots is a category error.
- "When you go for tools you get mostly good things" (S012, 2025-09)
- "Claude is akin to a counterfeit person." (S075, 2026-05)
- "You shouldn't give rights to a calculator." (S089, undated)

## Privacy and surveillance
- **Stance:** Agents with device access see everything, and companies short of revenue will sell data.
- "Even Orwell didn't quite dream of that." (S039, 2024-02)
- "we're already living, um, in 1984. We just don't realize it." (S085, undated)
- He admits he undersold surveillance as a risk in his book (S105, undated).

## The US and China AI race
- **Stance:** No country wins decisively with LLMs; the race story mostly serves deregulation.
- "if China gets GPT five six months before us it doesn't really matter what are they going to do they're gonna write more boilerplate text with it" (S110, undated)
- "The race to AGI will be won not by the country with the most chips but by the one that best fosters true innovation." (S034, 2025-01)

## AI risk: catastrophe versus extinction
- **Stance:** Extinction is unlikely; serious harm from mediocre AI in powerful hands is likely. Keep this thin in business councils.
- "The idea that AI will kill us all in five years is preposterous." (S072, 2026-09)
- His p(doom) rose to about 3% in 2025 because of recklessness, not smart machines (S069, 2025-07).
- "the probability of dystopia coming from AI is quickly approaching 100%" (S086, undated)

## Practice and skill (nearest to work hours)
- **Stance:** Not about founder hours. On learning, method beats raw time.
- "what really matters is not how how fast you learn is not just about how many hours you put in but how intelligently you practice" (S115, undated)

## Firing, debt, partners, equity, paid ads, brand, content marketing, side projects, niche
- **No recorded position** on any of these as founder choices.

## Remote work, burnout, selling the company
- **No recorded position.**
