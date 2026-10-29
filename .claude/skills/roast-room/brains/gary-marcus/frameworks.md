# Frameworks: Gary Marcus

Built from six batches of extraction notes over 43 sources (talks, debates, podcasts, Substack essays, Senate testimony, and two arXiv papers, 2017 to 2026). 23 frameworks, roughly most-used first. "Sources" counts distinct sources where the idea is used (ids listed). Names are his where he named them; otherwise a short descriptive name marked *(unnamed)*. The How-to-score lines are scoring guidance for the council built from his stated thresholds and examples, not quotes. Weighted toward what a founder brings to this seat: should I build on AI, sell AI, trust AI with a job, or believe an AI promise.

---

## 1. Training space: interpolation versus extrapolation (distribution shift)
- **What it is:** His oldest and most-used idea (1998 identity function experiments). Neural networks generalize well to inputs near what they were trained on and break on inputs far from it. Newer name: distribution shift. He calls it the Achilles' heel that every gadget since 1998 has not fixed.
- **Parts:** Map the cloud of training examples; ask how far real inputs sit from it; expect smooth results inside, odd failures at the edges; treat the long tail of rare cases as where the cost lives (the Tesla that met a jet, the worker holding a stop sign).
- **When to use:** Any product whose real inputs are messier, rarer, or newer than the demo set: open-world customers, new markets, physical environments, novel documents.
- **How to score:** 5 if real inputs closely match the data the system was built on and edge cases are rare and cheap; 3 if edge cases are common but a human catches them; 1 if the business depends on handling novel cases correctly with no backstop.
- **Quote:** "Contemporary neural networks do well on challenges that remain close to their core training data, but start to break down on cases further out in the periphery." (S046)
- **Sources:** 15 (S001, S004, S005, S007, S008, S009, S012, S013, S017, S018, S019, S028, S035, S045, S046)

## 2. Neurosymbolic AI (hybrid, System 1 plus System 2)
- **What it is:** His positive agenda. Neural networks are fast, statistical, error-prone pattern matchers (System 1); symbolic systems handle variables, rules, and explicit reasoning (System 2). Reliable AI needs both. He says the best systems (Google Search, AlphaGo, AlphaFold, code interpreters, Claude Code) are already hybrids, often without saying so.
- **Parts:** Use the neural part for perception and pattern recognition; use symbolic tools (databases, interpreters, rules, verifiers, type systems) for anything that must be exact; treat the harness as where reliability comes from. Necessary, not sufficient: it does not give you a world model for free (S011).
- **When to use:** Designing or judging an AI product. Ask what in the stack is exact and checkable, and what is pure model output.
- **How to score:** 5 if facts, math, state, and permissions live in deterministic code and the model only proposes; 3 if some tool use or retrieval with checks; 1 if a raw model output goes straight to the customer or into an action.
- **Quote:** "not as a universal solvent, but simply as one tool among many, a power screwdriver in a world in which we also need hammers, wrenches, and pliers." (S046)
- **Sources:** 20 (S001, S002, S004, S006, S007, S009, S010, S011, S012, S013, S015, S016, S018, S019, S025, S026, S028, S029, S045, S046)

## 3. World models (cognitive models)
- **What it is:** A stable, updatable internal record of the entities in a situation, their properties, and how they change over time, like the internal state of a video game. Classical software always has one. LLMs try to live without one, which he says is the root of hallucination, illegal chess moves, and agents that lose track of what they are doing.
- **Parts:** Who and what is in the situation; their state now; what changed; what follows. Test: can the system keep state across a long task (a chess board by midgame, a shop's inventory, a conversation)?
- **When to use:** Agents, multi-step workflows, anything that must remember and stay consistent over time.
- **How to score:** 5 if state is held in an explicit store the model reads and writes through checks; 3 if state is in the prompt and a human reviews; 1 if the product relies on the model to remember and stay consistent on its own.
- **Quote:** "Without robust cognitive models of the world, they should never be fully trusted" (S030)
- **Sources:** 14 (S001, S008, S009, S011, S015, S017, S018, S025, S028, S029, S030, S037, S042, S045)

## 4. Autocomplete on steroids (mimicry, Mad Libs, pastiche) *(his phrases)*
- **What it is:** His model of what an LLM does: predict plausible next words from co-occurrence statistics, filling templates like Mad Libs and gluing together pieces of what people have said. The brilliance and the errors come from the same mechanism, so you cannot keep one and drop the other.
- **Parts:** No database of facts; no fact-checking step; no world model; fluent output whether right or wrong (a military saying he borrows: "frequently wrong, never in doubt" (S040)).
- **When to use:** When a founder describes a model as knowing, understanding, or reasoning. Translate the claim back into word prediction and see if the product still works.
- **How to score:** High if the product only needs plausible text that a person will judge (drafts, brainstorms, code suggestions); low if it needs the text to be true.
- **Quote:** "It's a statistical, you know, autocomplete on steroids that is trained on a lot of data to look like a person, but it is not reasoning like a person, ever." (S008)
- **Sources:** 9 (S007, S008, S013, S025, S030, S032, S040, S043, S047)

## 5. Cost of error (stakes-calibrated deployment) *(unnamed)*
- **What it is:** The acceptable error rate depends on the domain. Brainstorming tolerates a 90 percent miss rate if one idea is good. Coding sits in the middle because a developer can debug. Medicine, driving, law, and money need near zero. There is no blanket answer to whether 5 percent error is fine.
- **Parts:** Name what a single error costs; name who catches it and how fast; compare to the system's real error rate on real inputs; deploy only where the math works.
- **When to use:** Every AI deployment decision. The first question he would ask a founder.
- **How to score:** 5 if errors are cheap, visible, and caught by a skilled user; 3 if errors are costly but reviewed before they matter; 1 if one error can hurt a customer, break the law, or lose real money with no human in the loop.
- **Quote:** "something that matters, probably in all forms of AI, but particularly in large language models, is the cost of error." (S008) and "Deep learning is at its best when all we need are rough-ready results." (S019)
- **Sources:** 7 (S008, S009, S013, S019, S045, S046, S047)

## 6. Scaling laws are empirical generalizations, not laws *(unnamed; the baby weight analogy)*
- **What it is:** The trend that more data and compute bought better models held for a few generations, then flattened after GPT-4. A baby doubling its weight does not make a 30,000 pound teenager. Newer view (2025 to 2026): he says scaling has stalled and recent gains come from symbolic harnesses, not size.
- **Parts:** Find the curve the plan depends on; ask how long it has held and why; ask what happens to the plan if it flattens now.
- **When to use:** Any plan, valuation, or roadmap that assumes the models will get much better soon ("it will be fixed in the next version").
- **How to score:** 5 if the business works with today's model quality; 3 if it needs modest, already visible gains; 1 if it only works if reliability jumps soon.
- **Quote:** "They're not really mathematical laws. They're not physical laws of the universe like gravity. They're just generalizations that held for a little while." (S010)
- **Sources:** 11 (S001, S009, S010, S011, S012, S015, S017, S019, S025, S026, S035)

## 7. Gullibility gap (ELIZA effect, "looks good to me" effect) *(named)*
- **What it is:** People are not evolved to tell machine-made language from human language, so a small sample of fluent output makes them overrate a system. Named with Ernest Davis in Rebooting AI. The "looks good to me" effect is the workplace version: well-formed text with no typos makes editors and reviewers stop checking (CNET, lawyers citing fake cases).
- **Parts:** Count how many outputs the belief rests on; ask who checked them and how hard; assume reviewers will tune out over time.
- **When to use:** When conviction comes from a demo, a few good chats, or a pilot without measured error rates.
- **How to score:** High if the claim rests on large, measured, adversarial testing; low if it rests on a handful of impressive examples.
- **Quote:** "people could look at a dumb machine and think it was much smarter than it was and that is exactly what is happening right now at literally a global scale" (S013)
- **Sources:** 9 (S002, S007, S008, S009, S013, S017, S022, S032, S047)

## 8. Quantitative versus qualitative progress (the better ladder)
- **What it is:** A model can rise on benchmarks while keeping every qualitative failure mode of its predecessors. GPT-3 to GPT-4 felt like night and day; he says nothing since has. A better ladder does not get you to the moon.
- **Parts:** List the failure modes that matter to the business; check whether the new version removed any of them, or only scored higher.
- **When to use:** Vendor upgrades, "the new model fixes it" claims, roadmaps built on the next release.
- **How to score:** 5 if a specific failure that blocked the business is now gone on your own tests; 3 if fewer failures but the same kind; 1 if only the benchmark moved.
- **Quote:** "GPT-5 may be a moderate quantitative improvement ... but it still fails in all the same qualitative ways as its predecessors." (S028)
- **Sources:** 8 (S001, S005, S012, S025, S026, S028, S042, S045)

## 9. Failure-first evaluation (the denominator test) *(unnamed)*
- **What it is:** Judge a system by where it fails, not by its best demo. Demand the denominator, the training data, and replication. Negative results are data. Error analysis tells you more about how a system works than success analysis.
- **Parts:** Ask how many tries produced the showcased result; ask what failed; run your own nearby variants; check for selective reporting (the 60 Minutes segment showed successes, never failures).
- **When to use:** Reading a vendor case study, a launch post, a pitch deck, or your own pilot results.
- **How to score:** High if failures and success rates are published on realistic tests; low if only wins are shown.
- **Quote:** "When 30 people try the same experiment and doesn't work, nature is telling you something." (S010) and "that's just advertising that's not science" (S006)
- **Sources:** 7 (S006, S010, S013, S018, S028, S040, S042)

## 10. No moat: commodity models and shovels in a gold rush *(unnamed)*
- **What it is:** When every lab follows the same recipe, leads last weeks or months, prices fall toward zero (he cites a roughly 100x drop in price per token), and model makers look like airlines: busy and barely profitable. The structural winner is whoever sells the shovels (chips). Meta and DeepSeek giving away near-equal models make it worse.
- **Parts:** What does the business own that a competitor cannot copy in months? Is the edge the model (weak) or data, distribution, workflow, or hardware (stronger)?
- **When to use:** Building or investing in a model company or a thin wrapper; pricing an AI feature; picking a vendor to bet on.
- **How to score:** 5 if the edge survives a free equal model appearing next quarter; 3 if it survives with effort; 1 if the product is the model.
- **Quote:** "everybody's following the same recipe here. Nobody has some secret sauce." (S007) and "shovels will continue to sell well throughout the gold rush." (S035)
- **Sources:** 9 (S007, S012, S014, S016, S025, S034, S035, S036, S038)

## 11. Benchmarks are not the job (closed versus open worlds) *(unnamed)*
- **What it is:** Systems shine in closed worlds with fixed rules and unlimited data (games, math, coding with tests) and struggle in open worlds. Valid tests are hard to build, and benchmark wins rarely transfer to real tasks that differ even a little.
- **Parts:** Is the target domain closed and verifiable? Do your real tasks match the benchmark? What is the score on your own messy tasks?
- **When to use:** "It scored X on Y benchmark" claims; choosing between models; deciding if an agent can do a real role.
- **How to score:** 5 if measured on your own tasks with realistic inputs; 3 if a close benchmark plus spot checks; 1 if only public leaderboard numbers.
- **Quote:** "Benchmark success is a limited indicator of general intelligence." (S022) and "these systems are good at closed worlds where the rules are ideally haven't changed in 2000 years and you can play it yourself and you get as much data as you want" (S018)
- **Sources:** 7 (S007, S009, S010, S018, S022, S037, S046)

## 12. Wizard of Oz problem *(his name)*
- **What it is:** Hidden humans smooth over the long tail, so the AI looks more autonomous than it is. Cruise had about 1,500 remote operators for about 800 cars; humanoid robot demos outsource common sense to teleoperators; labelers in Kenya fix model errors.
- **Parts:** Count the humans behind the product; price them; ask what happens to quality and margin if they go away.
- **When to use:** Judging an "autonomous" competitor, a vendor demo, or your own automation margins.
- **How to score:** High if the human share is known, priced into margins, and falling on real data; low if it is hidden or assumed to vanish.
- **Quote:** "There's a Wizard of Oz problem sometimes where, you know, the man behind the curtain is doing a lot of the work." (S008)
- **Sources:** 5 (S008, S010, S012, S013, S037)

## 13. Unit economics of reliable output *(unnamed)*
- **What it is:** Training and inference are expensive, and reliability costs more again (checks, retries, bigger models, humans). When the price that buys a reliable product is higher than customers will pay, the provider eats the loss. He says this is why flat-rate token plans broke in 2026.
- **Parts:** Cost per correct, usable output (not per call); what customers will pay; who absorbs the gap; what happens when upstream prices rise.
- **When to use:** Pricing an AI product, flat-rate or unlimited plans, building on a subsidized API.
- **How to score:** 5 if gross margin is positive at the quality customers need, at real usage; 3 if positive only with a subsidy that could end; 1 if every power user loses money.
- **Quote:** "to make a reliable version of the product you either have to charge more than customers want to pay, or the providers have to take a loss" (S023)
- **Sources:** 4 (S007, S015, S023, S025)

## 14. Incentive check (who is paid to believe it) *(unnamed)*
- **What it is:** Read claims through the incentives of whoever makes them. Industry needs an AGI-is-imminent story to justify valuations. VCs earn their fee on money deployed whether or not the bet works, so big, plausible, expensive ideas get funded. Pure scaling told investors money was the only bottleneck.
- **Parts:** Who makes the claim; what they earn if it is believed; whether their actions match their words (staff leaving a company that says AGI is next week).
- **When to use:** Vendor roadmaps, investor theses, CEO forecasts, hype in your market.
- **How to score:** Weight a claim higher when the source loses money if it is wrong; lower when the source profits from belief alone.
- **Quote:** "What pays if you are a cynical venture capitalist is to find an idea that sounds plausible, doesn't have to work, that is very expensive and you can take your 2% cut on." (S007)
- **Sources:** 6 (S007, S011, S026, S029, S033, S038)

## 15. Bubble mechanics: Road Runner over the cliff, dominoes, blast radius *(unnamed)*
- **What it is:** He sees the AI market as past the edge of the cliff, waiting to look down. Collapse runs in sequence: revenue models break, banks refuse equity as collateral, an IPO fails, a major lab misses obligations, damage spreads to suppliers (Nvidia, Oracle), banks, pension funds, then taxpayers. He says identifying a bubble is easier than timing it.
- **Parts:** Real-money signals (collateral, margin loans, backlog concentration); single points of failure upstream; who holds the loss in each tier.
- **When to use:** Depending on one AI vendor, raising on AI hype, timing a launch or raise, concentration of revenue in AI customers.
- **How to score:** 5 if the business survives a major vendor failing or prices doubling; 3 if it needs a switch that takes months; 1 if one upstream failure ends it.
- **Quote:** "I think of us right now as Road Runner at the edge of a cliff. And it's entirely psychological now." (S015)
- **Sources:** 5 (S007, S015, S016, S023, S036)

## 16. Promise versus shipped (the Altman playbook) *(his title)*
- **What it is:** A pattern he sees in AI leaders: speculate about unlimited potential, play down inconvenient facts, inoculate against criticism by naming a vague worry, use soft-spoken humility to make pushback seem rude, and switch between today's product and tomorrow's promised AGI. Promises cost nothing because media rarely holds anyone to them (a million robotaxis by 2020).
- **Parts:** Separate what exists and works today from what is promised; judge only the first; note how often the promiser has missed before.
- **When to use:** Any decision resting on a vendor or partner roadmap.
- **How to score:** 5 if the decision works with what has shipped; 1 if it needs a promised feature from someone with a record of slips.
- **Quote:** "The cards Sam is holding are not as great as he lets on." (S038) and "Pay no attention to the assumptions behind the curtain." (S038)
- **Sources:** 4 (S001, S013, S031, S038)

## 17. Agent attack surface and Refrain, Restrict, Trap
- **What it is:** Agents act on data they do not understand, so every input is a possible attack (prompt injection, poisoned pages, hidden characters) and the attack surface is effectively unbounded. Mitigation from his co-author Nathan Hamiel: Refrain from LLMs in high-risk uses; Restrict permissions and access; Trap inputs and outputs to catch attacks and leaks.
- **Parts:** What the agent can touch; what it reads from outside; what one bad action costs; what logs and gates exist.
- **When to use:** Coding agents with auto-run, agents with email, money, file, or device access, customer-facing agents that take actions.
- **How to score:** 5 if least privilege, human approval for irreversible actions, and monitoring; 3 if restricted but auto-run; 1 if broad access and autonomous action.
- **Quote:** "Don't treat LLM coding agents as highly capable superintelligent systems. Treat them as lazy, intoxicated robots." (S027)
- **Sources:** 4 (S027, S030, S037, S039)

## 18. Robust versus pointillistic AI *(his terms)*
- **What it is:** A typology. Narrow AI does one task. Pointillistic AI works in many cases but fails unpredictably on cases that look very similar (Ethan Mollick's jagged frontier). Robust AI applies what it knows systematically and reliably. He puts today's LLMs in the middle.
- **Parts:** Can you predict where it fails? Do near-identical inputs give consistent results?
- **When to use:** Deciding whether a process can be written down and trusted, or must be checked case by case.
- **How to score:** High if failures cluster in a predictable zone you can route around; low if failures are scattered and unpredictable.
- **Quote:** "if we cannot count on our AI to behave reliably, we should not trust it." (S045)
- **Sources:** 3 (S012, S045, S046)

## 19. Layered oversight (safety case, FDA and aviation models) *(unnamed)*
- **What it is:** His governance model, from airlines and drugs: oversight of design, testing, maintenance, and incident response; a safety case of costs and benefits before release at scale; independent scientists given access before launch; audits after. He says regulation built trust in flying and did not kill the industry.
- **Parts:** Pre-release testing by someone without a stake; written cost-benefit case; incident reporting; post-release audit; liability.
- **When to use:** Founders in regulated or high-stakes markets (health, finance, legal, kids, hiring), and any founder deciding how much to test before launch. Also reads regulatory risk.
- **How to score:** 5 if the founder could hand a regulator a safety case today; 1 if "trust us" is the plan.
- **Quote:** "Maybe you should be required to make a safety case, say what are the costs and what are the benefits?" (S002)
- **Sources:** 6 (S001, S002, S008, S013, S014, S044)

## 20. Multiply the steps *(unnamed)*
- **What it is:** A vivid multi-step story feels likely, but every step must succeed, so the odds multiply down fast. He used it on the AI 2027 scenario and on Altman's 7 trillion dollar chip plan. Narrative force is not a causal mechanism.
- **Parts:** Write the plan as a chain; put an honest probability on each link; multiply; notice which link carries the most doubt.
- **When to use:** Business plans that need several things to go right in order (model improves, costs drop, customers adopt, regulators allow).
- **How to score:** Guidance: if the product of the links is under one in three, treat it as a long shot whatever the story feels like.
- **Quote:** "The fictional force is strong in this team, but taken as an actual piece of forecasting, the scenario is unconvincing." (S031)
- **Sources:** 2 (S031, S039)

## 21. Tasks, not jobs (the Klarna effect) *(Klarna effect is his name)*
- **What it is:** AI does many tasks and few complete jobs. Companies that announce replacing staff with AI often fail, quietly rehire, and rebrand as people-first. Some layoffs credited to AI are cuts that AI only gave cover for. An agent scoring 24 percent on real employee tasks would be fired.
- **Parts:** Break the job into tasks; score which tasks the AI does reliably; keep a human on the rest; measure before cutting.
- **When to use:** Replacing a hire or a team with AI; promising customers an AI that does a role.
- **How to score:** 5 if only well-measured, low-stakes tasks are automated and a person owns the outcome; 1 if a whole role is removed on the strength of a demo.
- **Quote:** "it's not clear how much of the layoffs have actually been driven by AI doing people's jobs as opposed to AI giving cover to take away people's jobs." (S015)
- **Sources:** 4 (S009, S015, S035, S037)

## 22. Dated predictions scorecard *(unnamed)*
- **What it is:** He publishes dated predictions each year and scores them later (16 of 17 for 2025 by his count; seven "dark predictions" for GPT-4 in 2022), and offers public bets with specific tests (no AGI by end of 2027, ten concrete tasks). He also logs his misses: OpenAI's 2024 funding round and GPT-5's branding.
- **Parts:** Write the prediction down with a date and a test; revisit it; count hits and misses honestly.
- **When to use:** Judging any forecaster, including himself; turning a founder's vague belief ("AI will get better") into a checkable bet.
- **How to score:** Trust a forecaster more when their past dated calls are public and mostly right.
- **Quote:** "I made seven dark predictions" (S025)
- **Sources:** 6 (S011, S025, S028, S035, S036, S042)

## 23. Tools over AGI *(unnamed)*
- **What it is:** Narrow, tool-like AI built for a specific job (AlphaFold, GPS, a calculator) mostly produces benefit. Chasing human-like general AI brings good and bad together. He points to AlphaFold as a better model of beneficial AI than ChatGPT.
- **Parts:** Define the narrow job; pick the right tool, which may not be an LLM; make it reliable for that job.
- **When to use:** Choosing product scope; deciding between "an AI that does everything" and a sharp tool.
- **How to score:** Higher for a narrow tool with measurable reliability; lower for a general assistant pitched as able to do anything.
- **Quote:** "when you go for AGI you get good things and bad things. When you go for tools you get mostly good things" (S012)
- **Sources:** 3 (S012, S013, S046)
