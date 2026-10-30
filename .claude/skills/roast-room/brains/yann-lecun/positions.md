# Positions: Yann LeCun

39 topics. Built from the twenty extraction batches over S001 to S099 (2017 to 2026), with a few context checks in the corpus. Each stance has a verbatim quote, source id, and date. Dates for S001 to S040 are upload dates from `sources.md`; for S041 to S099 the year comes from the talk title where it names one, otherwise the source is marked undated. Where he changed his mind or shifted emphasis, the versions sit side by side with dates. Founder topics with no evidence say so.

## Building a product on LLMs
- **Stance:** LLMs are useful tools for language, code, and math, so build on them there. Do not expect them to understand the physical world, plan, or reason, and do not sell them as a path to that.
- "They're great, okay, for what they do. They're just not a path towards human-level or human-like intelligence or even animal-like intelligence." (S001, 2026-05)
- "LLMs are particularly successful at domains where the language itself is the substrate of reasoning. Uh not for anything else." (S001, 2026-05)
- "LLMs, to some extent, except for a few domains, are mostly information retrieval systems." (S007, 2026-02)
- On real signals: "LM are completely useless essentially." (S002, 2026-07)
- He expects LLMs to end up as one orchestrating part of larger systems that also hold perception and code components, not the whole stack (S040, 2026-01).
- **Over time:**
  - Undated: "autoregressive llms uh is impressive as they are they are an off rank uh on the on the highway towards human level intelligence" (S088)
  - 2023-09: "my prediction is that within a few years, nobody in their right mind would use autoregressive LLMs." (S033)
  - 2025-02: "geni has a sha life of about three years now okay everybody is excited about gen" (S017)
  - Undated, repeated: "within three to five years, this will be the dominant model for AI architectures, and nobody in their right mind would use LLMs of the type that we have today." (S051)
  - 2026-05 (newer): softer on their use as products: "there's nothing wrong with LLMs in the sense of LLMs, you know, are the basis for a lot of uh very useful AI products that all of us use, including me." (S001)
- **Read:** the scientific verdict never moved; the product verdict softened. The "nobody in their right mind" forecast has been made since 2023 with a moving three-to-five-year window. Treat him as a strong guide on what LLMs cannot do and a weak guide on how long a working LLM product will last (inferred from S001, S017, S033, S051).

## AI agents that take actions
- **Stance:** An agent that cannot predict the consequences of its actions cannot be reliable. He rejects agents built by imitating human action traces or by generating many token sequences and picking one.
- "basing agentic systems on LLMs is a recipe for disaster because how can a system possibly plan a sequence of actions if it can't predict the consequences of its actions" (S008, 2026-01)
- "An agentic system that is supposed to take actions in the world cannot work reliably unless it has a world model to predict the consequences of its actions." (S040, 2026-01)
- "an LLM just does not have the right characteristics for this. Because the only planning that an LLM can do is basically by generating lots and lots of token sequences and then selecting one that looks good." (S047, 2025)
- On how agents are built today: "you cross your finger that this action is uh is correct" (S006, 2026-02)
- **Read:** where errors are cheap and a human checks the output, he gives no position that forbids it; where reliability matters (health, industry, money), he would block it (inferred from S006, S008, S040).

## Reliability-critical domains (health, industry, safety)
- **Stance:** LLM limits are worst where being wrong is expensive. Build there only with a model of the system you are acting on, and expect users to drop a tool that is wrong a few times.
- LLM limits are "particularly acute in healthcare or any kind of situation where you know reliability is is really uh paramount." (S006, 2026-02)
- "if it were the case that you could you know reason learn about learn how the world works purely from language you could learn medicine by just reading books... And you can't right" (S006, 2026-02)
- In the same talk his cofounder said physicians ignore a tool that is wrong three times, and he agreed that benchmark accuracy is not deployment reliability (S006, 2026-02).
- His own company's first targets are control of complex industrial systems (jet engines, chemical and nuclear plants, patients) (S030, 2026-04; S002, 2026-07; S082, undated).

## Open source model or closed API
- **Stance:** For a startup, take an open foundation model and fine-tune it for one vertical. He says this beats calling a generic closed API.
- "trick number one use open source engines because you're not going to Train Your Own Foundation model" (S055, undated)
- "If you are a startup, you're much better off using an open-source engine and fine-tuning it for a vertical application, than you are to using an API" (S019, 2024-11)
- "a fine-tuned open-source engine like Llama always works better than a non-fine-tuned, generic top-performing model." (S019, 2024-11)
- "Lama is like Linux, okay? It's a it's a foundation. It's an... infrastructure but it's not a product." (S032, 2025-04)
- He expects proprietary models to survive as subscription APIs with limited customization, while most models people use are open-source derived (S057, undated).
- **Read:** he has a stake here. He ran the lab that released Llama and argued for its release (S001), so weigh his "always" as advocacy, not measurement. He also admits his bias when praising his own lab's work (S064, 2023).

## Training your own foundation model
- **Stance:** Do not. It costs about a billion dollars of compute to be at the frontier, and a startup that raises to do it may burn the money in two years without revenue to match.
- He says a startup that raises a billion to train a foundation model may burn it in two years and not earn enough to justify the valuation (S055, undated).
- He puts the basic unit for frontier training at about 16,000 tightly linked GPUs, roughly a billion dollars; fine-tuning is far cheaper and open to startups (S061, undated).
- "it would be a complete waste of resources to um you know have 50 different entities is training their own Parish model" (S060, undated)
- **Read:** the same advice he gives governments: do not train your own base model, fine-tune an open one (S061, undated; S056, undated). AMI Labs is the exception he made for himself, because his bet is a new architecture, not another LLM (inferred from S048, S058).

## Should you build in the open
- **Stance:** Yes, by default. Open research and open code make you faster, help you hire, and keep people talking to you.
- "if there is a FAS exchange of information the field progresses faster and if you become secretive you fall behind because people don't want to talk to you anymore" (S021, 2023-12)
- "no entity has a monopoly on good ideas which is why open collaboration makes the field progress faster." (S014, 2025-03)
- "if you do it in the open you basically recruit the entire world's intelligence to contribute to things" (S066, undated)
- On closed labs: "I think it's incredibly arrogant." (S010, 2025-05)
- He says open source wins because "it's safer, it gathers more people to contribute." (S063, undated)
- **Read:** his evidence is research labs and platforms (FAIR, PyTorch, Llama), not small product companies that sell the model itself. He also notes Meta could open its models because it earns from ads, not AI APIs (S012, 2025-04). A founder whose only asset is the model is not in Meta's position. He concedes Meta could change course if liability laws reach down the supply chain (S057, undated).

## Platforms and who wins long term
- **Stance:** Platforms become open, as Linux did on servers. Foundation models will commoditize and the business sits in the application layer.
- "there is a natural tendency for platforms to become open. That's what happened with Linux." (S001, 2026-05)
- "AI is fast becoming a platform and historically platforms have always become open source." (S008, 2026-01)
- "proprietary platform I think are gonna disappear." (S013, 2025-03)
- "It's very clear that the open world is is going to go past the proprietary world. They're going to be left behind." (S010, 2025-05)
- He says foundation models will commoditize the way Linux did the internet stack, leaving value at the application layer (S057, undated; S066, undated).
- **Read:** a long-horizon prediction he has held since at least 2023 (S021, S064). It says little about who makes money in the next three years.

## Competing with big labs
- **Stance:** Do not race giants on the thing they already do well. Work on what the current tools cannot do.
- To students: "don't work on them. It's pointless. Like you know, try try to invent the next thing." (S010, 2025-05)
- "Don't work on LLMs. There is no point. You're not going to be able to rival what's going on in industry. Work on something else." (S040, 2026-01)
- "I don't think academia should even consider playing catch-up." (S011, 2025-04)
- On herd behavior: "They're all digging the same trench." (S058, 2026)
- He holds up the attention paper as the model: a small group publishes the key idea, industry scales it at once, and the small group moves on (S090, undated).
- **Read:** stated for researchers, but it maps cleanly onto a startup choosing a wedge (inferred from S001, S010, S040, S090).

## Competition and secrecy
- **Stance:** You stay ahead by moving faster, not by hiding. No lab is far ahead for long.
- "progress faster that's the way you stay ahead" (S064, 2023)
- "no entity in the world no lab no company is significantly ahead of any other" (S095, undated)
- "the problem is not whether we are six months ahead of of Google or or or Microsoft or or whatever the problem is that there are things we want to do with AI for which we do not have the underlying science right" (S067, undated)
- He reads DeepSeek as proof that good ideas come from anywhere and that open publishing wins (S010, 2025-05; S013, 2025-03; S016, 2025-02).

## Hype and claims of a secret breakthrough
- **Stance:** Distrust anyone who says they have cracked human-level AI or that it is a year or two away.
- "if a start-up tells you they have the secret to you know human level intelligence and common sense don't believe them they don't" (S026, 2019-08)
- "if you think that there is some startup somewhere with five people who has discovered the secret of a GI and you should invest five billion in them you're making a huge mistake" (S015, 2025-03)
- On "a country of geniuses in a data center": "I think it's nonsense it's complete nonsense" (S013, 2025-03)
- "AGI in in a year or two. It's completely diluted. It's just complete delusion." (S045, undated)
- He names the pattern: every AI era announces the secret, and the older researchers say they have seen it before (S054, undated; S045, undated).

## Demos versus deployment
- **Stance:** A demo is not a product. Judge a system by what it still cannot do and by how it fails outside its training data.
- "making a product out of an impressive technology is not simple" (S055, undated)
- "But where is my domestic robot? Where is my level five self driving car? Where is a robot that can do what a cat do?" (S012, 2025-04)
- On humanoid videos: "This is all precomputed. Okay?" (S058, 2026)
- "all of those benchmarks are designed to test things like LLM. They're not designed to test things like robots or or physical understanding" (S030, 2026-04)
- His own approach is not yet ahead in practice: the narrator of S004 (not LeCun) reports that JEPA world-model planning is still far behind VLA on simple robot tasks and plans only about five steps ahead (S004, 2026-05). He calls his own world-model results "still kind of toy a little bit." (S010, 2025-05)

## Language fluency as a signal of intelligence
- **Stance:** Do not let fluent text convince you the system understands.
- "The biggest difficulty is not to get fooled into thinking that uh a a computer system is intelligent simply because it can manipulate language." (S007, 2026-02)
- "we are really easily fooled by their fluency into thinking that they are intelligent." (S087, 2023)
- "And regurgitating known knowledge is not intelligence." (S081, undated)

## Robotics and physical AI startups
- **Stance:** The hardware is ahead of the intelligence. Humanoid companies are betting the AI will arrive on their schedule.
- "The big secret of the industry is that none of those companies has any idea how to make those robots smart enough to be useful." (S051, undated)
- On the many robot startups: "none of those companies actually has any idea how to make them smart enough to be useful, right?" (S001, 2026-05)
- "The idea somehow that this technology exists and that those robots can be made useful today is just false." (S032, 2025-04)
- On robot learning by imitation: "VLA are doomed." (S004, 2026-05)
- He says VLA and agentic LLM systems only automate narrow scripted tasks and are "very brittle." (S058, 2026)
- **Over time:** 2023-09 he called humanoid makers a 3-to-5-year bet on AI catching up (S033); 2025-02 he said the 2030s could be the decade of robotics if the physical world problem is cracked (S017); later (undated) he says the proof of the next revolution will be domestic robots (S081).

## Video generation as a world model
- **Stance:** Generating pixels is the wrong road to understanding or control. Make it for content, not for robots or plants.
- "If you want to produce cute videos, work on video generation. But if you want to like control robots or industrial processes or understand the world, do not work on generation." (S082, undated)
- "you still have those videos produced by those uh video generation system where you know you spill a glass of wine and and the wine like floats in the air" (S015, 2025-03)

## Reinforcement learning as the core of a product
- **Stance:** Use it last, as a small fine-tuning step. It needs too many trials to learn in the real world.
- "A car, you know, driving next to a cliff would have to run off the cliff a few dozen times before realizing it's a bad idea." (S058, 2026)
- "most of the learning that animals and humans do is not reinforcement learning." (S047, 2025)
- He grants it real wins in games and simulation (AlphaGo, TD-Gammon) where trials are free (S047, 2025).

## Timing a technology bet
- **Stance:** Progress comes in steps, not one event, and is almost always slower than people think. Yet in startups he would rather be early.
- "it's almost certainly much harder than we think because in the past 70 years of history of AI, it's always been much harder than we thought" (S009, 2026-04)
- "in the context of startups, it's much better to be too early than to be too late." (S032, 2025-04)
- "the history of AI has been a repetition of finding new mountains behind the one you just you just passed" (S095, undated)
- On himself: "I'm probably making the same mistakes right the same mistake right now." (S049, undated)
- **Over time (his own world-model timeline):**
  - 2025-03: "it's not going to happen within the next three years but it may happen with you know between 3 to 5 years" (S015)
  - 2026-02 (newer): a general world model needs three to five or more years; narrow uses on specific problems could show results in one to two years (S006).
  - Undated: he has said human-level AI is "most likely not 5 years from now probably more than 10 years and maybe within 20." (S061)
- **Read:** he admits he has been too pessimistic about how fast research turns into products, citing face recognition at Facebook (S016, 2025-02; S032, 2025-04), and too early before with ideas that later came back (S054, undated).

## Data and scaling as a moat
- **Stance:** Scale is needed but not enough. Public text is used up, so more text will not close the gap. The bottleneck is architecture, not data.
- "certainly, scale is necessary but not sufficient." (S020, 2024-03)
- "we've kind of run out of natural Text data to train those those llms" (S015, 2025-03)
- "I don't think it's an issue of of data. I think it's more an issue of architecture, training paradigm, mathematics, and principles on which to base this." (S068, undated)
- He puts a startup's unique data to work in fine-tuning, not pre-training (S057, undated).

## Spending big on compute and the AI bubble
- **Stance:** Big inference spend is justified for companies serving billions of users. Many companies built only to train their own foundation models are not viable, and a correction is possible.
- Large spending on inference infrastructure is justified even if no new paradigm arrives soon, because serving a billion users needs it anyway (S015, 2025-03). The bulk of AI cost is running models, not training them (S014, 2025-03).
- He calls it a partial bubble: many foundation-model startups are not viable at current spending (S055, undated).
- He says today's AI revenue cannot justify the investment and a reckoning, like the dot-com fiber glut, could leave cheap compute behind, but adds: "I can't make predictions there. The people running those services, I think, know what they're doing to some extent at least." (S041, 2026)
- **Read:** both optimists and doubters are partly right in his view: short-term returns from LLM applications are real, long-term returns need new ideas (S055, undated).

## Raising money
- **Stance:** Thin record. He tells technical founders that research depth helps fundraising, and he raised his own company's seed from investors spread across regions.
- "It might be easier to raise money if you've published a few papers where you've invented something new" (S019, 2024-11)
- "Our investors are from all over the world." (S002, 2026-07)
- AMI Labs started with about a billion dollar seed round (S048, 2026).
- No recorded position on round size, valuation, dilution, or angels versus VCs, beyond his warning not to raise to train a foundation model (S055, undated).

## Debt
- No recorded position.

## Pricing and inference cost
- No recorded position on how to price. Nearest: inference must get much cheaper for wide use in poorer markets. He put it at a few rupees per million tokens for India (S019, 2024-11) and later said costs must fall by a factor of 20 to 100 (S041, 2026).
- To pick a model, he plots performance against speed and wants the one nearest the top right corner (S057, undated).

## Discounting
- No recorded position.

## First hires and hiring researchers
- **Stance:** Hire people smarter than you, give them the means, and leave them alone. Let them publish, or the best will not come.
- "I try to only hire people who are smarter than me this is a very good strategy" (S064, 2023)
- "the best way to get breakthrough research... is you hire the best people and you get the out of the way" (S001, 2026-05)
- "if you try to hire a scientist and you tell that scientist uh you can you can say a word about what you're doing you kill a career" (S064, 2023)
- On why he set open research as a condition at Meta: "because I don't know how to do it otherwise uh you know I don't know how to hire the best." (S005, 2026-03)
- For technical founders, a PhD or Masters gives "more legitimacy in hiring talented people." (S019, 2024-11)

## Firing
- No recorded position.

## Research culture and deadlines
- **Stance:** Give people a long leash. Quarterly pressure kills breakthroughs. Let researchers pick their problems.
- "if you really want Innovation you need a longer leash you need to let people uh take risks and innovate" (S016, 2025-02)
- "two-thirds of fare is actually bottom up so scientists decide what projects they work on that they think is the most potentially the most impactful" (S067, undated)
- "there has to be a lot of freedom on research scientists on the topics that they pick to work on it has to be essentially bottom-up" (S025, 2021-09)
- He blames product pressure on Meta's GenAI group for conservative Llama 3 and 4 work and lost researchers (S001, 2026-05).

## Moving research into product
- **Stance:** The hand-off from research to product is where companies fail. It needs three stages: a free exploratory group, a group that proves results work, and a product group with milestones.
- "That is where a lot of projects fail. That's That's where a lot of companies kind of fail to pick up." (S001, 2026-05)
- He describes the three stages as small nimble exploratory teams, then a group that shows results can work, then "product groups that actually scale them up and actually Implement them" (S064, 2023).
- He says FAIR succeeded at research and Meta did less well at turning it into products (S040, 2026-01).
- Deploy small, measure, correct: "you want to deploy it in a small way so that you see the effect before if there are bad effects you can correct them" (S067, undated)

## Founder or CEO role
- **Stance:** He knows he is a scientist, not a manager, and stays out of operations.
- "I'm just not good at it. It's not the thing I'm... I'm more like a, you know, scientific or technical visionary and engineer and scientist." (S001, 2026-05)
- He is executive chairman of AMI Labs with no management role and calls himself not an operational person (S009, 2026-04).
- **Read:** his advice on running a company day to day is thin by his own account.

## Leaving a big company to start one
- **Stance:** Leave when the company's business cannot carry your project. He left Meta because his world-model work served B2B customers and Silicon Valley was all on one approach.
- "Meta is not a B2B company. It's a company that is entirely focused on connecting people with each other." (S002, 2026-07)
- "The AI industry is completely LLM-pilled, as they say." (S058, 2026)
- He saw room for a credible frontier AI company that is neither Chinese nor American, built on Europe's talent (S040, 2026-01).

## Partners and joining a company
- **Stance:** Set your non-negotiables before you join. He required open research, staying in New York, and keeping his NYU job (S017, 2025-02; S018, 2024-12).
- "I'm never going again to work for a company that stops open source uh you know stop scientific communication and then systematically patents uh everything" (S016, 2025-02)
- "it is not the case that uh that meta has a open source policy because I'm here but it is the case that I'm here because meta has an open source policy" (S057, undated)

## Patents and IP protection
- **Stance:** Against patents on ideas. He watched his ConvNet patents sit unused at NCR.
- Patents are "hurtful because it stops people from you know kind of working essentially uh on on their own ideas." (S005, 2026-03)
- He says AT&T's refusal to let him release his software for about 20 years shrank its impact (S090, undated).
- **Read:** strong view built from one bad experience at a large company; no recorded view on patents as a startup's defense.

## Focus and choosing a vertical
- **Stance:** Pick one vertical and become the expert in it. When asked which vertical, he answered "Any vertical." (S019, 2024-11)
- "take an open-source platform... and then fine-tune it for a particular vertical application and become an expert in that vertical application" (S019, 2024-11)
- He calls customizing base models for verticals a good business (S055, undated).
- On research strategy: "pick a long-term very ambitious plan and work your way back and you're going to make progress. Useful things are going to come out of that" (S009, 2026-04)

## Shipping before you understand why it works
- **Stance:** Build the thing, test it hard, and let theory catch up. Do not wait for a proof.
- "it's not because we don't understand this from the theoretical point of view that it's not true empirically." (S093, undated)
- He cites lithium and aspirin, used for decades before anyone knew how they worked, as the standard: use it, but test it rigorously (S077, undated).
- On a method he uses but cannot justify: "frankly I'm a little uncomfortable with this method but we have to um accept the fact that actually works" (S086, 2025)

## Explainability as a customer requirement
- **Stance:** Customers say they need explainable models, then pick the better black box. It matters only in narrow cases such as justice and medicine (S092, undated).
- "every single time the person will take the second one every single time" (S077, undated)

## Regulation and compliance
- **Stance:** Regulate products, not research and development. Rules sized for big companies' compliance teams will kill small open-source players.
- "I'm I'm all for regulating products that gets in the hands of people uh I don't see the point of uh regulating uh research and development" (S022, 2023-04)
- "i don't think ai in itself should be regulated i think applications of ai should be regulated" (S090, undated)
- "don't legislate open source AI out of existence because of imaginary fears of dangers that don't exist" (S061, undated)
- He warns of regulatory capture and of "killing an ecosystem early for no reason at all." (S057, undated)
- On Europe: "Europe is kind of basically shooting itself in the foot um when it comes to regulation" (S010, 2025-05)
- He supports banning mass face recognition in public places (S018, 2024-12).

## AI safety and doom arguments
- **Stance:** Existential risk talk is wrong and partly commercial. The real risk is a few companies controlling everyone's information.
- "That's BS if you pardon my French." (S008, 2026-01)
- "I see the danger of this concentration of power through proprietary AI systems as a much bigger danger than everything else." (S020, 2024-03)
- "The idea somehow that intelligence is necessarily associated with a desire to dominate is just false." (S049, undated)
- He calls current LLMs "intrinsically unsafe" but adds "that doesn't mean they're dangerous because they're not that smart." (S010, 2025-05)
- **Over time:** 2017 he already put misuse and short-term ethics ahead of takeover fears (S034); the view has not moved since.
- **Read:** he names rivals (Anthropic, Amodei, Marcus) with heat (S030, 2026-04). Treat his read on competitors' motives as partisan. He also says his calm rests on his trust in democratic institutions, which others do not share (S063, undated; S021, 2023-12).

## Jobs and replacing people with AI
- **Stance:** AI amplifies people; it does not replace them. No mass unemployment.
- "they're not going to replace us. they're going to amplify us." (S006, 2026-02)
- "We're all going to be a boss. We're all going to be like those high-level managers who will tell our AI systems what to do" (S019, 2024-11)
- He says AI mostly transforms jobs and may lift weaker performers the most (S056, undated).
- He defers to economists and expects gradual productivity gains (S007, 2026-02; S008, 2026-01; S045, undated).

## Sovereignty and selling outside the US
- **Stance:** Countries and cultures will demand AI they control, which favors open models and local fine-tuning.
- "The only way to have any level of sovereignty in AI is is is to have access to open source, you know, powerful open source, AI systems." (S030, 2026-04)
- "all of our information diet is going to be mediated by AI systems. If those systems are a handful of proprietary engines... this is the end of local culture." (S002, 2026-07)
- He tells governments to skip training their own base model and fine-tune open ones for their language and culture (S061, undated; S055, undated).
- AMI Labs is headquartered in Paris with no West Coast or China presence, "by design for now" (S002, 2026-07).

## Contrarian bets and changing your mind
- **Stance:** Being outside the mainstream is fine when you have evidence. Evidence persuades slowly. Drop your own idea when a better one shows up.
- "the story of my career it's to be uh a little bit outside of the mainstream so I mean I become the mainstream but then it's boring" (S016, 2025-02)
- "it's surprisingly difficult to snap people out of a particular way of thinking" (S005, 2026-03)
- "I change my mind all the time whenever a good idea you know seems to um to be overcome by a better one." (S073, undated)
- He abandoned pixel-level video prediction after years on it: "I completely changed my mind about this" (S084, undated; S099, 2022).

## Remote work, work hours, burnout, content, paid ads, brand, equity, selling the company, metrics
- No recorded position on any of these. Nearest on metrics: optimizing a proxy instead of the real objective creates feedback loops (S025, 2021-09).
