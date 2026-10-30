# Frameworks: Gary Marcus

Built from sixteen batches of extraction notes over 109 sources (talks, debates, podcasts, Substack essays, Senate testimony, interviews, and three long papers, 2017 to 2026; S079 to S115 are undated video transcripts, mostly 2023 to 2026 by their content). 25 frameworks, roughly most-used first. "Sources" counts distinct sources where the idea is used, across all batches (ids listed). Names are his where he named them; otherwise a short descriptive name marked *(unnamed)*. The How-to-score lines are scoring guidance for the council built from his stated thresholds and examples, not quotes. Weighted toward what a founder brings to this seat: should I build on AI, sell AI, trust AI with a job, or believe an AI promise.

---

## 1. Neurosymbolic AI (hybrid, System 1 plus System 2, the power screwdriver)
- **What it is:** His positive agenda since The Algebraic Mind (2001). Neural networks are fast, statistical, error-prone pattern matchers (System 1); symbolic systems handle variables, rules, databases, and explicit reasoning (System 2). Reliable AI needs both. He says the best systems already are hybrids: Google Search, AlphaGo, AlphaFold, AlphaGeometry, Cicero, code interpreters, Waymo, and Claude Code. Newer view (2025 to 2026): the industry has quietly converged on this, and the tools and harnesses bolted onto models now carry most of the progress, not the base model.
- **Parts:** Use the neural part for perception, drafting, and proposals; use symbolic tools (databases, interpreters, verifiers like Lean, type systems, knowledge graphs, rules) for anything that must be exact; treat the harness as where reliability comes from. Three non-negotiables he names: operations over variables, structured representations, and a distinction between individuals and kinds. Open problem he admits: orchestration, knowing which subsystem to call when (S089). Necessary, not sufficient (S011, S045).
- **When to use:** Designing or judging any AI product. Ask what in the stack is exact and checkable, and what is pure model output.
- **How to score:** 5 if facts, math, state, and permissions live in deterministic code and the model only proposes; 3 if some tool use or retrieval with checks; 1 if raw model output goes straight to the customer or into an action.
- **Quote:** "not as a universal solvent, but simply as one tool among many, a power screwdriver in a world in which we also need hammers, wrenches, and pliers." (S046) and "the scaling isn't really carrying the progress anymore. What's really carrying the progress mostly right now is what we call tool or what they call tools and harnesses." (S081)
- **Sources:** 46 (S001, S002, S004, S006, S007, S009, S010, S011, S012, S013, S015, S016, S018, S019, S025, S026, S028, S029, S045, S046, S051, S053, S054, S059, S063, S064, S067, S071, S079, S081, S082, S087, S089, S092, S093, S094, S095, S096, S097, S098, S099, S101, S102, S103, S108, S109)

## 2. Training space: interpolation versus extrapolation (distribution shift, pointillistic AI)
- **What it is:** His oldest idea (1998 identity function experiments; 1999 infant rule-learning study). Neural networks generalize well to inputs near what they were trained on and break on inputs far from it. Newer names: distribution shift, the long tail, the jagged frontier. He also calls the result pointillistic: a cloud of points that works near each point and fails unpredictably between them, so near-identical inputs can get different results. In philosophy terms, the model has the extension (the list of cases) but not the intension (the rule that generates them) (S079, S091).
- **Parts:** Map the cloud of training examples; ask how far real inputs sit from it; expect smooth results inside and odd failures at the edges; treat the long tail of rare cases as where the cost lives (the Tesla that met a jet, the tow truck, the Breakout paddle moved three pixels, o1 adding 10 digits fine and failing at 11).
- **When to use:** Any product whose real inputs are messier, rarer, or newer than the demo set: open-world customers, new markets, physical environments, novel documents, unusual edge cases.
- **How to score:** 5 if real inputs closely match the data the system was built on and edge cases are rare and cheap; 3 if edge cases are common but a human catches them; 1 if the business depends on handling novel cases correctly with no backstop.
- **Quote:** "Contemporary neural networks do well on challenges that remain close to their core training data, but start to break down on cases further out in the periphery." (S046) and "My eye is always on extrapolation and generalization beyond when that's systematically studied, there's still failure." (S104)
- **Sources:** 36 (S001, S004, S005, S007, S008, S009, S012, S013, S017, S018, S019, S028, S035, S045, S046, S054, S057, S058, S060, S064, S066, S067, S079, S081, S083, S090, S091, S093, S094, S095, S099, S101, S104, S110, S111, S113)

## 3. Autocomplete on steroids (Mad Libs, pastiche, word masher, spreadsheet for words) *(his phrases)*
- **What it is:** His model of what an LLM does: predict plausible next words from co-occurrence statistics, filling templates like Mad Libs and gluing together pieces of what people have said. It has no database of facts, no fact-checking step, and no world model, so it is indifferent to truth: correlated with truth, not aimed at it (S100). The brilliance and the errors come from the same mechanism, so you cannot keep one and drop the other.
- **Parts:** Fluent output whether right or wrong ("frequently wrong, never in doubt," a military saying he borrows (S040, S103, S107, S110)); individuals blurred into statistical neighbors (Harry Shearer called British, his own pet chicken Henrietta, Musk dead in 2018); no ability to sanity-check its own work.
- **When to use:** When a founder describes a model as knowing, understanding, or reasoning. Translate the claim back into word prediction and see if the product still works.
- **How to score:** High if the product only needs plausible text that a person will judge (drafts, brainstorms, code suggestions); low if it needs the text to be true.
- **Quote:** "It's a statistical, you know, autocomplete on steroids that is trained on a lot of data to look like a person, but it is not reasoning like a person, ever." (S008) and "they're the best word Mashers that we've ever invented but that is ultimately all they're doing" (S110)
- **Sources:** 27 (S007, S008, S013, S025, S030, S032, S040, S043, S047, S054, S062, S066, S068, S078, S081, S084, S085, S089, S095, S100, S102, S103, S107, S108, S110, S111, S113)

## 4. Scaling laws are empirical generalizations, not laws (trillion-pound baby, disco fallacy) *(his names)*
- **What it is:** The trend that more data and compute bought better models held for a few generations, then flattened after GPT-4. A baby doubling its weight does not make a trillion-pound teenager; disco sales doubling did not mean all music would be disco. He also calls it naive extrapolation and "the bitter lesson about the bitter lesson": scale wins on pattern recognition, not on reliability, planning, or open-ended reasoning (S098). Newer view (2025 to 2026): pure scaling stalled around late 2024 (Project Orion released as GPT-4.5, Grok 3 at 10x compute only modestly better, GPT-5 late and underwhelming).
- **Parts:** Find the curve the plan depends on; ask how long it has held and why; ask what resource it runs on (data, compute, money) and when that runs out; ask what happens to the plan if it flattens now.
- **When to use:** Any plan, valuation, or roadmap that assumes the models will get much better soon ("it will be fixed in the next version"), and any growth curve in a pitch deck.
- **How to score:** 5 if the business works with today's model quality; 3 if it needs modest, already visible gains; 1 if it only works if reliability jumps soon.
- **Quote:** "They're not really mathematical laws. They're not physical laws of the universe like gravity. They're just generalizations that held for a little while." (S010) and "I call this the trillion pound baby uh fallacy." (S087)
- **Sources:** 28 (S001, S008, S009, S010, S011, S012, S015, S017, S019, S025, S026, S033, S035, S052, S063, S071, S081, S087, S097, S098, S101, S103, S105, S106, S108, S109, S111, S113)

## 5. World models (cognitive models)
- **What it is:** A stable, updatable internal record of the entities in a situation, their properties, and how they change over time, like the internal state of a video game or the record a GPS keeps of where you are. Classical software always has one. LLMs try to live without one, which he says is the root of hallucination, illegal chess moves, agents that lose track of what they are doing, and unreliable moral reasoning, because ethics is reasoning about entities, motives, and states (S100).
- **Parts:** Who and what is in the situation; their state now; what changed; what follows. Test: can the system keep state across a long task (a chess board by midgame, a shop's inventory, a conversation, a TV episode it must follow well enough to know when to laugh)?
- **When to use:** Agents, multi-step workflows, anything that must remember and stay consistent over time.
- **How to score:** 5 if state is held in an explicit store the model reads and writes through checks; 3 if state is in the prompt and a human reviews; 1 if the product relies on the model to remember and stay consistent on its own.
- **Quote:** "Without robust cognitive models of the world, they should never be fully trusted" (S030) and "This matters for moral reasoning because moral reasoning is always over world models." (S100)
- **Sources:** 24 (S001, S008, S009, S011, S015, S017, S018, S025, S028, S029, S030, S037, S042, S045, S047, S062, S068, S087, S090, S091, S094, S100, S104, S110)

## 6. Cost of error (stakes-calibrated deployment, the 80/20 rule, rough draft AI) *(80/20 and rough draft AI are his names)*
- **What it is:** The acceptable error rate depends on the domain. Brainstorming tolerates a 90 percent miss rate if one idea is good; a recommender can be 20 percent wrong; coding sits in the middle because a developer can debug; medicine, driving, law, money, and alignment need near zero (driving needs five or six nines, since humans have about one fatal crash per 100 million miles (S113)). LLMs get to about 80 percent on almost anything, and you cannot tell which 20 percent is wrong without checking. So generative AI is rough draft AI: good for a first pass a person will check, not for a final answer. "People break too" is not a defense where you need calculator-grade reliability (S092).
- **Parts:** Name what a single error costs; name who catches it and how fast; compare to the system's real error rate on real inputs; deploy only where the math works.
- **When to use:** Every AI deployment decision. The first question he would ask a founder.
- **How to score:** 5 if errors are cheap, visible, and caught by a skilled user; 3 if errors are costly but reviewed before they matter; 1 if one error can hurt a customer, break the law, or lose real money with no human in the loop.
- **Quote:** "large language models can approximate anything to 80%. But 20% of the time is going to make wild errors. You just can't trust it to do it." (S087) and "I like to call it rough draft AI you can trust it to make a rough draft of anything" (S103)
- **Sources:** 19 (S008, S009, S013, S017, S019, S032, S045, S046, S047, S081, S087, S092, S097, S098, S100, S102, S103, S108, S113)

## 7. Failure-first evaluation (the denominator test, the hype detector, Clever Hans) *(Clever Hans and the hype questions are his framings)*
- **What it is:** Judge a system by where it fails, not by its best demo. Demand the denominator, the training data, and replication. Negative results are data. Error analysis tells you more about how a system works than success analysis. Rebooting AI gives a six-question hype detector for any AI claim: toy problem or real problem; what were the data; is there a demo anyone can try; better than which humans, by how much; how far does this take us toward real AI; how robust is it to edge cases (S094). Clever Hans test: before crediting understanding, rule out the simpler, less colorful explanation (S061, S065).
- **Parts:** Ask how many tries produced the showcased result; ask what failed; run your own nearby variants (horse rides astronaut, a river crossing with only two people); run the same request several times and compare (five different maps on five tries (S111)); do not test with famous examples it has memorized (S058); count small samples as anecdotes (3 of 5 is not evidence (S061)).
- **When to use:** Reading a vendor case study, a launch post, a pitch deck, or your own pilot results.
- **How to score:** High if failures and success rates are published on realistic, unseen tests and repeat runs agree; low if only wins are shown.
- **Quote:** "When 30 people try the same experiment and doesn't work, nature is telling you something." (S010) and "Science isn't about declaring victory, it's about putting in the work to rule out alternative hypotheses." (S061)
- **Sources:** 21 (S006, S010, S013, S018, S028, S040, S042, S050, S052, S057, S058, S061, S065, S086, S091, S093, S094, S104, S107, S111, S114)

## 8. No moat: commodity models and shovels in a gold rush *(unnamed)*
- **What it is:** When every lab follows the same recipe, leads last weeks or months, prices fall toward zero, and model makers look like airlines or toothpaste brands: busy and barely profitable. He made this call in August 2023 (S082) and says DeepSeek (2025) and Kimi (2026) proved it (S034, S076). The structural winner is whoever sells the shovels (chips). The Uber play of subsidizing until rivals die does not work when the product is a commodity (S081).
- **Parts:** What does the business own that a competitor cannot copy in months? Is the edge the model (weak) or data, distribution, workflow, domain checks, or hardware (stronger)?
- **When to use:** Building or investing in a model company or a thin wrapper; pricing an AI feature; picking a vendor to bet on.
- **How to score:** 5 if the edge survives a free equal model appearing next quarter; 3 if it survives with effort; 1 if the product is the model.
- **Quote:** "if you have no technical mode, then other people can do the same thing that you're doing. And there's going to be a price war." (S082) and "shovels will continue to sell well throughout the gold rush." (S035)
- **Sources:** 19 (S007, S012, S014, S016, S025, S034, S035, S036, S038, S053, S055, S076, S081, S082, S084, S087, S096, S105, S108)

## 9. Promise versus shipped (the Altman playbook, promissory notes) *(his title)*
- **What it is:** A pattern he sees in AI leaders: speculate about unlimited potential, play down inconvenient facts, inoculate against criticism by naming a vague worry, use soft-spoken humility to make pushback seem rude, and switch between today's product and tomorrow's promised AGI. Deadlines move quietly; promises cost nothing because the press rarely holds anyone to them (LA to New York driverless by 2017, a million robotaxis by 2020, hallucinations fixed within months, AI curing cancer in five years when trials alone take five).
- **Parts:** Separate what exists and works today from what is promised; judge only the first; note how often the promiser has missed before; check whether the promise survives basic domain knowledge (S085).
- **When to use:** Any decision resting on a vendor, partner, or investor roadmap.
- **How to score:** 5 if the decision works with what has shipped; 1 if it needs a promised feature from someone with a record of slips.
- **Quote:** "The cards Sam is holding are not as great as he lets on." (S038) and "it is a charlatan thing to do to keep moving back your predictions, you know, every year." (S082)
- **Sources:** 19 (S001, S013, S031, S038, S064, S073, S080, S081, S082, S084, S085, S095, S098, S103, S105, S106, S108, S110, S111)

## 10. Layered oversight (safety case, FDA and aviation models, the regulatory stack) *(unnamed)*
- **What it is:** His governance model, from airlines and drugs: oversight of design, testing, maintenance, and incident response; a safety case of costs and benefits before release at scale; independent scientists with no stake reviewing before launch; audits after; liability for harm. His stack: a central AI agency, independent scientists at every table, global coordination, FDA-style pre-deployment review for anything used at large scale, and post-deployment audits (S110, S112). He says regulation built trust in flying and can inspire innovation (emissions rules gave us electric cars (S106)).
- **Parts:** Pre-release testing by someone without a stake; written cost-benefit case; incident reporting; post-release audit; liability large enough to change behavior.
- **When to use:** Founders in regulated or high-stakes markets (health, finance, legal, kids, hiring), and any founder deciding how much to test before launch. Also reads regulatory risk.
- **How to score:** 5 if the founder could hand a regulator a safety case today; 1 if "trust us" is the plan.
- **Quote:** "Maybe you should be required to make a safety case, say what are the costs and what are the benefits?" (S002) and "anything that's going to be used at Large Scale should in fact have predeployment checking with some kind of actual teeth" (S112)
- **Sources:** 21 (S001, S002, S008, S013, S014, S015, S044, S069, S074, S080, S082, S083, S084, S086, S100, S103, S104, S106, S107, S110, S112)

## 11. Gullibility gap (ELIZA effect, "looks good to me" effect, humans in the loop are not magic) *(named)*
- **What it is:** People are not evolved to tell machine-made language from human language, so a small sample of fluent output makes them overrate a system. Named with Ernest Davis in Rebooting AI; it traps even world-class skeptics (Dawkins on Claude, Lemoine on LaMDA). The workplace version: well-formed text makes reviewers stop checking (CNET's AI stories had errors in about half that editors approved because the prose was clean). And the closer a system gets to good, the easier it is for the human in the loop to space out and rubber-stamp (S073). At market scale he calls it over-attribution: trillions bet on machines being smarter than they are (S084).
- **Parts:** Count how many outputs the belief rests on; ask who checked them and how hard; assume reviewers will tune out over time; measure whether the human check actually catches planted errors.
- **When to use:** When conviction comes from a demo, a few good chats, or a pilot without measured error rates; when "a human reviews it" is the safety plan.
- **How to score:** High if the claim rests on large, measured, adversarial testing and the human review is audited; low if it rests on a handful of impressive examples and a busy reviewer.
- **Quote:** "people could look at a dumb machine and think it was much smarter than it was and that is exactly what is happening right now at literally a global scale" (S013) and "Having humans in the loop is not magic" (S073)
- **Sources:** 19 (S002, S007, S008, S009, S013, S017, S022, S032, S047, S073, S075, S078, S084, S087, S095, S099, S107, S108, S110)

## 12. Dated predictions and public bets *(unnamed)*
- **What it is:** He publishes dated predictions each year and scores them later (16 of 17 for 2025 by his count; seven "dark predictions" for GPT-4 on Christmas 2022), and offers public bets with specific tests: 100,000 dollars to Musk on AGI by 2029, a million (a friend raised it to ten) on AGI by end of 2025, 100,000 dollars to Reid Hoffman on hallucinations disappearing, a bet with Miles Brundage on a hallucination-free obituary by 2027. Nobody took them. He also logs his misses: OpenAI's 2024 funding round, its valuation, GPT-5's branding, Winograd schemas falling fast.
- **Parts:** Write the prediction down with a date and a test; offer a bet if it matters; revisit it; count hits and misses honestly.
- **When to use:** Judging any forecaster, including himself; turning a founder's vague belief ("AI will get better") into a checkable bet.
- **How to score:** Trust a forecaster more when their past dated calls are public and mostly right, and when they will bet; trust them less when they never name a failure mode they expect.
- **Quote:** "I made seven dark predictions" (S025) and "I had been saying for years that GPT-5 would either be late or a disappointment. As it turned out, it was both." (S097)
- **Sources:** 18 (S010, S011, S025, S028, S035, S036, S042, S052, S064, S071, S076, S081, S082, S084, S095, S097, S108, S111)

## 13. Benchmarks are not the job (closed versus open worlds, data contamination) *(unnamed)*
- **What it is:** Systems shine in closed worlds with fixed rules, unlimited data, and checkable answers (games, competition math, coding with tests) and struggle in open worlds where weird things happen. Valid tests are hard to build; benchmarks are narrow (SQuAD "reading" was underlining a matching span (S094)); once published they get taught to (Goodhart's law); and the model may have seen the test (US Math Olympiad problems tested six hours after release scored 5 percent (S093)).
- **Parts:** Is the target domain closed and verifiable? Do your real tasks match the benchmark? Could the test items be in the training data? What is the score on your own messy, fresh tasks, starting from plain English rather than hand-translated inputs (AlphaGeometry2's 84 percent fell to at most 60 from English (S051))?
- **When to use:** "It scored X on Y benchmark" claims; choosing between models; deciding if an agent can do a real role.
- **How to score:** 5 if measured on your own unseen tasks with realistic inputs; 3 if a close benchmark plus spot checks; 1 if only public leaderboard numbers.
- **Quote:** "Benchmark success is a limited indicator of general intelligence." (S022) and "You always have to worry about data contamination." (S093)
- **Sources:** 17 (S007, S009, S010, S018, S022, S037, S046, S050, S051, S058, S061, S081, S090, S093, S094, S098, S113)

## 14. Quantitative versus qualitative progress (the better ladder) *(his analogy)*
- **What it is:** A model can rise on benchmarks while keeping every qualitative failure mode of its predecessors. GPT-3 to GPT-4 felt like night and day; he says nothing since has. He checks each release against the gaps he listed in 2001 (operations over variables, structured representations, individuals versus kinds) and finds quantitative improvement but no principled fix (S090). A better ladder does not get you to the moon; souping up a Camry does not make a Ferrari (S071).
- **Parts:** List the failure modes that matter to the business; check whether the new version removed any of them, or only scored higher.
- **When to use:** Vendor upgrades, "the new model fixes it" claims, roadmaps built on the next release.
- **How to score:** 5 if a specific failure that blocked the business is now gone on your own tests; 3 if fewer failures but the same kind; 1 if only the benchmark moved.
- **Quote:** "GPT-5 may be a moderate quantitative improvement ... but it still fails in all the same qualitative ways as its predecessors." (S028) and "Deep learning is a better ladder, but a better ladder doesn't necessarily get you to the moon." (S101)
- **Sources:** 15 (S001, S005, S012, S025, S026, S028, S042, S045, S052, S071, S090, S101, S102, S104, S111)

## 15. Bubble mechanics: Road Runner over the cliff, dominoes, blast radius *(unnamed)*
- **What it is:** He sees the AI market as past the edge of the cliff, waiting to look down (Road Runner or Wile E. Coyote). Collapse runs in sequence: revenue models break, banks refuse equity as collateral, credit tightens (Oracle citing force majeure on a Stargate site, CDS spreads rising (S082)), an IPO fails, a major lab misses obligations, damage spreads to suppliers (Nvidia, Oracle), circular investors, pension funds and LPs, banks, then taxpayers. He says identifying a bubble is easier than timing it (tulip mania).
- **Parts:** Real-money signals (collateral, credit spreads, discounted used GPUs, backlog concentration); circular deals; single points of failure upstream; who holds the loss in each tier.
- **When to use:** Depending on one AI vendor, raising on AI hype, timing a launch or raise, concentration of revenue in AI customers.
- **How to score:** 5 if the business survives a major vendor failing or prices doubling; 3 if it needs a switch that takes months; 1 if one upstream failure ends it.
- **Quote:** "I think of us right now as Road Runner at the edge of a cliff. And it's entirely psychological now." (S015)
- **Sources:** 16 (S007, S015, S016, S023, S026, S036, S054, S082, S084, S086, S087, S095, S097, S105, S107, S109)

## 16. Incentive check (who is paid to believe it) *(unnamed)*
- **What it is:** Read claims through the incentives of whoever makes them. Industry needs an AGI-is-imminent story to justify valuations; hype moves the stock, so executives learn to hype. VCs earn their 2 percent fee on money deployed whether or not the bet works, so big, plausible, expensive ideas get funded. Doom talk is a special case of hype: the pitch is that the tech is so dangerous you should fund it (S073, S080). Pure scaling told investors money was the only bottleneck (S029).
- **Parts:** Who makes the claim; what they earn if it is believed; whether their actions match their words (staff leaving a company that says AGI is next week; a CEO who says AI could end the world and races to build it faster).
- **When to use:** Vendor roadmaps, investor theses, CEO forecasts, hype in your market, regulation proposed by the companies it would regulate.
- **How to score:** Weight a claim higher when the source loses money if it is wrong; lower when the source profits from belief alone.
- **Quote:** "What pays if you are a cynical venture capitalist is to find an idea that sounds plausible, doesn't have to work, that is very expensive and you can take your 2% cut on." (S007) and "what Silicon Valley has learned is if they hype stuff the stock goes up and they've learned this over and over and over" (S103)
- **Sources:** 16 (S007, S011, S026, S029, S033, S038, S054, S072, S073, S080, S085, S090, S103, S107, S109, S110)

## 17. Empowerment and the agent attack surface (Refrain, Restrict, Trap; defense in depth)
- **What it is:** Two separate dials set how dangerous an AI is: raw intelligence and empowerment, meaning what you let it do (S107). A stupid system with a lot of power is the main near-term danger: dangerous because it is stupid (S111). Agents act on text they do not understand, so every input is a possible attack (prompt injection, poisoned pages, white-on-white text) and an agent that runs as you, above OS sandboxing, has a total attack surface (OpenClaw (S077)). Mitigation from co-author Nathan Hamiel: Refrain from LLMs in high-risk uses; Restrict permissions and access; Trap inputs and outputs. From co-author Zack Korman: defense in depth, stacked layers (sandbox, network monitoring, chain-of-thought monitoring, canaries, guardian models) so one failure is caught by the next (S074).
- **Parts:** What the agent can touch; what it reads from outside; what one bad action costs; whether it is reversible; what logs, gates, and monitors exist and are actually turned on.
- **When to use:** Coding agents with auto-run, agents with email, money, file, credential, or device access, customer-facing agents that take actions.
- **How to score:** 5 if least privilege, human approval for irreversible actions, and layered monitoring; 3 if restricted but auto-run; 1 if broad access and autonomous action.
- **Quote:** "Don't treat LLM coding agents as highly capable superintelligent systems. Treat them as lazy, intoxicated robots." (S027) and "one is raw intelligence and the other is empowerment." (S107)
- **Sources:** 18 (S013, S027, S030, S037, S039, S047, S056, S070, S073, S074, S077, S080, S082, S089, S093, S107, S109, S111)

## 18. Unit economics of reliable output (the all-you-can-eat buffet) *(buffet is his image)*
- **What it is:** Training and inference are expensive, and reliability costs more again (checks, retries, bigger models, humans). Labs sold flat-rate, all-you-can-eat plans below cost; agents made heavy users eat far more (agents can cost 1,000 times or more the compute of a single chat (S081)). When the price that buys a reliable product is higher than customers will pay, the provider eats the loss. Industry math he cites: roughly 500 billion dollars spent against roughly 20 billion of revenue (S097); the buildout needs about 1.6 trillion a year, four times Google's best year (S081).
- **Parts:** Cost per correct, usable output (not per call); what customers will pay; who absorbs the gap; what happens when upstream prices rise or flat plans end.
- **When to use:** Pricing an AI product, flat-rate or unlimited plans, building on a subsidized API.
- **How to score:** 5 if gross margin is positive at the quality customers need, at real usage; 3 if positive only with a subsidy that could end; 1 if every power user loses money.
- **Quote:** "to make a reliable version of the product you either have to charge more than customers want to pay, or the providers have to take a loss" (S023) and "these companies were serving all you can eat buffets and people were eating a lot, especially when they started using agents" (S081)
- **Sources:** 13 (S007, S015, S023, S025, S080, S081, S082, S096, S097, S100, S105, S107, S109)

## 19. Explore versus exploit (intellectual monoculture, the wrong mountain) *(his terms)*
- **What it is:** Since about 2019 the field has been in full exploit mode: everyone runs the same LLM experiment with the same tools. That is an intellectual monoculture, and if the bet is wrong, everyone fails at once. LLMs may be the top of the wrong mountain; to reach the tallest peak you may have to walk back down the valley (S084). History: biologists thought genes were protein for decades until Avery corrected it (S090, S105).
- **Parts:** What share of effort goes to one approach; what alternatives are funded; what it would cost to switch if the main bet stalls.
- **When to use:** Betting the company on one model, one vendor, or one technique; R&D portfolio choices; an investor thesis that only works if LLMs keep improving.
- **How to score:** 5 if the plan has a funded fallback that does not depend on the same approach; 1 if everything rides on one curve.
- **Quote:** "We are in a full-time exploit mode. Everybody is using exactly the same tools. I call it an intellectual monoculture." (S105) and "In order to get to the tallest peak, you might have to actually go back down the valley." (S084)
- **Sources:** 13 (S001, S026, S034, S038, S041, S076, S084, S087, S090, S092, S105, S108, S110)

## 20. Tasks, not jobs (the Klarna effect, the pipeline problem) *(Klarna effect and pipeline problem are his names)*
- **What it is:** AI does many tasks and few complete jobs (the distinction he credits to Brynjolfsson). Hinton mistook reading a scan for being a radiologist; ten years on there are more radiologists, paid more (S095). Companies that announce replacing staff with AI often fail, quietly rehire, and rebrand as people-first. Some layoffs credited to AI are cuts AI only gave cover for. An agent scoring 24 percent on real employee tasks would be fired. Pipeline problem: stop hiring juniors because AI writes code, and in a few years nobody understands the system (S109). He grants some displacement is real and was not predicted (voiceover actors (S108)).
- **Parts:** Break the job into tasks; score which tasks the AI does reliably; keep a human on the rest; measure before cutting; keep a path to train the next seniors.
- **When to use:** Replacing a hire or a team with AI; promising customers an AI that does a role.
- **How to score:** 5 if only well-measured, low-stakes tasks are automated and a person owns the outcome; 1 if a whole role is removed on the strength of a demo.
- **Quote:** "it's not clear how much of the layoffs have actually been driven by AI doing people's jobs as opposed to AI giving cover to take away people's jobs." (S015) and "there's a distinction between the task and the job." (S095)
- **Sources:** 13 (S009, S015, S035, S037, S040, S085, S087, S095, S097, S101, S102, S108, S109)

## 21. ROI before FOMO (token maxing, work slop) *(work slop and token maxing are terms he uses)*
- **What it is:** Adoption is not return. He cites roughly seven studies (MIT first) finding most companies get no return from generative AI, about 10 percent by his back-of-envelope (S095, S096); a careful METR study where coding help made developers 20 percent slower once debugging was counted (S097); work slop, output that looks like work and does not move the task (S098); and the token-maxing fad, where firms rewarded staff for burning tokens and saw no gain (S084, S109). Vibe coding produced far more apps without more sales (S082).
- **Parts:** What measurable outcome should move; baseline before; result after, including rework and debugging time; cost of the tokens and the review.
- **When to use:** A CEO asking whether to roll AI out company-wide; a buyer evaluating an AI vendor's productivity claim; a founder selling one.
- **How to score:** 5 if a controlled before-and-after shows net gain after rework; 3 if gains are plausible but unmeasured; 1 if the case is that competitors are doing it.
- **Quote:** "I have advice nobody wants to take, but I would say sit and wait a little bit" (S085) and "the actual result was it made them 20% slower like it writes code faster, but then it's buggy code." (S097)
- **Sources:** 10 (S016, S081, S082, S084, S085, S095, S096, S097, S098, S109)

## 22. Tools over AGI (the AlphaFold model) *(unnamed)*
- **What it is:** Narrow, tool-like AI built for one job (AlphaFold, GPS, a calculator) mostly produces benefit and can be made reliable. AlphaFold 3 is his favorite AI ever built: specialized, modular, with built-in structure for its one problem (S099). Chasing human-like general AI brings good and bad together, and a system that claims to do everything has a surface too large to test, so every launch is a beta test (Google's Apollo 11 images (S101, S103)). Narrow systems also do not try to break out of sandboxes (S074).
- **Parts:** Define the narrow job; pick the right tool, which may not be an LLM; build in what you already know about the domain; make it reliable for that job; use data you can verify (code can be run).
- **When to use:** Choosing product scope; deciding between "an AI that does everything" and a sharp tool.
- **How to score:** Higher for a narrow tool with measurable reliability; lower for a general assistant pitched as able to do anything.
- **Quote:** "when you go for AGI you get good things and bad things. When you go for tools you get mostly good things" (S012) and "I think the more that we build domain specific solutions for particular things, in that case coding, the better." (S096)
- **Sources:** 11 (S012, S013, S046, S074, S085, S096, S098, S099, S101, S102, S103)

## 23. Risk tiers: p(doom), p(catastrophe), p(dystopia), and the bad-actor asymmetry *(his terms)*
- **What it is:** He splits AI risk three ways. p(doom), literal extinction: low, under 3 percent and probably under 1 (it rose from near zero to about 3 percent in July 2025 over Musk and Grok (S069)). p(catastrophe), something killing 1 percent or more or badly damaging civilization: fairly high and rising (an AI misreading a ship nearly started a war (S082, S085)). p(dystopia), surveillance and manipulation: near 100 percent. He updates the number with conditions, like the Doomsday Clock (S111). Bad-actor asymmetry: misuse does not need the AI to be accurate, so unreliable AI already helps scammers and propagandists more than honest users (S104, S112); AI turns retail harm into wholesale, a knife into a machine gun (S105, S110).
- **Parts:** Which tier the harm sits in; who could misuse the product; whether misuse needs accuracy; what the product makes cheaper for bad actors.
- **When to use:** Trust and safety planning, abuse cases, a founder in voice, identity, content, or persuasion products; separating real risk from extinction talk.
- **How to score:** 5 if the founder has named the misuse cases and priced the controls; 1 if the product makes a known scam or deception cheaper and nothing stops it.
- **Quote:** "I think it is both stupid and dangerous and in fact dangerous because it's stupid." (S111) and "bad actors often don't need AI to work as well as good actors" (S112)
- **Sources:** 15 (S008, S053, S056, S069, S072, S082, S085, S086, S093, S104, S105, S110, S111, S112, S113)

## 24. Wizard of Oz problem *(his name)*
- **What it is:** Hidden humans smooth over the long tail, so the AI looks more autonomous than it is. Cruise had about 1,500 remote operators for about 800 cars; humanoid robot demos outsource common sense to teleoperators; labelers fix model errors; Facebook's M assistant was mostly people and never scaled (S082).
- **Parts:** Count the humans behind the product; price them; ask what happens to quality and margin if they go away.
- **When to use:** Judging an "autonomous" competitor, a vendor demo, or your own automation margins.
- **How to score:** High if the human share is known, priced into margins, and falling on real data; low if it is hidden or assumed to vanish.
- **Quote:** "There's a Wizard of Oz problem sometimes where, you know, the man behind the curtain is doing a lot of the work." (S008)
- **Sources:** 6 (S008, S010, S012, S013, S037, S082)

## 25. Multiply the steps (narrative versus mechanism, expected value) *(unnamed)*
- **What it is:** A vivid multi-step story feels likely, but every step must succeed, so the odds multiply down fast (eight steps at 5 percent each is effectively zero (S031)). He used it on AI 2027 and on Altman's 7 trillion dollar chip plan. Narrative force is not a causal mechanism; ask how, step by step, and most storytellers cannot answer (S080). Pair it with expected value: probability times size of harm, both factored in (S080).
- **Parts:** Write the plan as a chain; put an honest probability on each link; multiply; notice which link carries the most doubt; weigh the downside by its size, not only its odds.
- **When to use:** Business plans that need several things to go right in order (model improves, costs drop, customers adopt, regulators allow).
- **How to score:** Guidance: if the product of the links is under one in three, treat it as a long shot whatever the story feels like.
- **Quote:** "The fictional force is strong in this team, but taken as an actual piece of forecasting, the scenario is unconvincing." (S031) and "You want to calculate the expected value." (S080)
- **Sources:** 4 (S031, S039, S072, S080)
