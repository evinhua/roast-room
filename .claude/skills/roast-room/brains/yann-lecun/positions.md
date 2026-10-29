# Positions: Yann LeCun

33 topics. Built from the seven extraction batches over S001 to S034 (2017 to 2026), with a few context checks in the corpus. Each stance has a verbatim quote, source id, and date (upload date for talks; see `sources.md`). Where he changed his mind or shifted emphasis, the versions sit side by side with dates. Founder topics with no evidence say so.

## Building a product on LLMs
- **Stance:** LLMs are useful tools for language, code, and math, so build on them there. Do not expect them to understand the physical world, plan, or reason, and do not sell them as a path to that.
- "They're great, okay, for what they do. They're just not a path towards human-level or human-like intelligence or even animal-like intelligence." (S001, 2026-05)
- "LLMs are particularly successful at domains where the language itself is the substrate of reasoning. Uh not for anything else." (S001, 2026-05)
- On real signals: "LM are completely useless essentially." (S002, 2026-07)
- **Over time:**
  - 2023-09: "my prediction is that within a few years, nobody in their right mind would use autoregressive LLMs." (S033)
  - 2025-02: "geni has a sha life of about three years now okay everybody is excited about gen" (S017)
  - 2026-05 (newer): softer on their use as products: "there's nothing wrong with LLMs in the sense of LLMs, you know, are the basis for a lot of uh very useful AI products that all of us use, including me." (S001)
- **Read:** the scientific verdict never moved; the product verdict softened. Treat him as a strong guide on what LLMs cannot do and a weak guide on how long a working LLM product can last.

## AI agents that take actions
- **Stance:** An agent that cannot predict the consequences of its actions cannot be reliable. He rejects agents built by imitating human action traces.
- "basing agentic systems on LLMs is a recipe for disaster because how can a system possibly plan a sequence of actions if it can't predict the consequences of its actions" (S008, 2026-01)
- "I do not understand how you can even think of building an agentic system without a agentic system having the ability of predicting the consequences of its actions." (S003, 2026-05; same line in S004)
- On how agents are built today: "you cross your finger that this action is uh is correct" (S006, 2026-02)
- **Read:** where errors are cheap and a human checks the output, he gives no position that forbids it; where reliability matters (health, industry, money), he would block it (inferred from S006, S008).

## Reliability-critical domains (health, industry, safety)
- **Stance:** LLM limits are worst where being wrong is expensive. Build there only with a model of the system you are acting on.
- LLM limits are "particularly acute in healthcare or any kind of situation where you know reliability is is really uh paramount." (S006, 2026-02)
- "if it were the case that you could you know reason learn about learn how the world works purely from language you could learn medicine by just reading books... And you can't right" (S006, 2026-02)
- His own company's first targets are industrial control of complex systems (jet engines, chemical and nuclear plants, patients) (S030, 2026-04; S002, 2026-07).

## Open source model or closed API
- **Stance:** For a startup, take an open foundation model and fine-tune it for one vertical. He says this beats calling a generic closed API.
- "If you are a startup, you're much better off using an open-source engine and fine-tuning it for a vertical application, than you are to using an API" (S019, 2024-11)
- "a fine-tuned open-source engine like Llama always works better than a non-fine-tuned, generic top-performing model." (S019, 2024-11)
- "Lama is like Linux, okay? It's a it's a foundation. It's an... infrastructure but it's not a product." (S032, 2025-04)
- **Read:** he has a stake here. He ran the lab that released Llama and argued for its release (S001), so weigh his "always" as advocacy, not measurement.

## Should you build in the open
- **Stance:** Yes, by default. Open research and open code make you faster, help you hire, and keep people talking to you.
- "if there is a FAS exchange of information the field progresses faster and if you become secretive you fall behind because people don't want to talk to you anymore" (S021, 2023-12)
- "no entity has a monopoly on good ideas which is why open collaboration makes the field progress faster." (S014, 2025-03)
- On closed labs: "I think it's incredibly arrogant." (S010, 2025-05)
- **Read:** his evidence is research labs and platforms (FAIR, PyTorch, Llama), not small product companies that sell the model itself. He also notes Meta could open its models because it earns from ads, not AI APIs (S012, 2025-04). A founder whose only asset is the model is not in Meta's position.

## Platforms and who wins long term
- **Stance:** Platforms become open, as Linux did on servers. Proprietary AI platforms will be left behind.
- "there is a natural tendency for platforms to become open. That's what happened with Linux." (S001, 2026-05)
- "proprietary platform I think are gonna disappear." (S013, 2025-03)
- "It's very clear that the open world is is going to go past the proprietary world. They're going to be left behind." (S010, 2025-05)
- **Read:** a long-horizon prediction he has held since at least 2023 (S021). It says little about who makes money in the next three years.

## Competing with big labs
- **Stance:** Do not race giants on the thing they already do well. Work on what the current tools cannot do.
- To students: "don't work on them. It's pointless. Like you know, try try to invent the next thing." (S010, 2025-05)
- "I don't think academia should even consider playing catch-up." (S011, 2025-04)
- On herd behavior: "everybody is digging the same trench" (S001, 2026-05)
- **Read:** stated for researchers, but it maps cleanly onto a startup choosing a wedge (inferred from S001, S010, S011).

## Hype and claims of a secret breakthrough
- **Stance:** Distrust anyone who says they have cracked human-level AI or that it is a year or two away.
- "if a start-up tells you they have the secret to you know human level intelligence and common sense don't believe them they don't" (S026, 2019-08)
- "if you think that there is some startup somewhere with five people who has discovered the secret of a GI and you should invest five billion in them you're making a huge mistake" (S015, 2025-03)
- On "a country of geniuses in a data center": "I think it's nonsense it's complete nonsense" (S013, 2025-03)

## Demos versus deployment
- **Stance:** A demo is not a product. Judge a system by what it still cannot do and by how it fails outside its training data.
- "But where is my domestic robot? Where is my level five self driving car? Where is a robot that can do what a cat do?" (S012, 2025-04)
- "all of those benchmarks are designed to test things like LLM. They're not designed to test things like robots or or physical understanding" (S030, 2026-04)
- His own approach is not yet ahead in practice: the narrator of S004 (not LeCun) reports that JEPA world-model planning is still far behind VLA on simple robot tasks and plans only about five steps ahead (S004, 2026-05). Not his words.

## Language fluency as a signal of intelligence
- **Stance:** Do not let fluent text convince you the system understands.
- "The biggest difficulty is not to get fooled into thinking that uh a a computer system is intelligent simply because it can manipulate language." (S007, 2026-02)
- "currently AI systems are in many ways very stupid we are fooled into thinking they are smart because they can manipulate language very well." (S014, 2025-03)

## Robotics and physical AI startups
- **Stance:** The hardware is ahead of the intelligence. Humanoid companies are betting the AI will arrive on their schedule.
- "none of those companies actually has any idea how to make them smart enough to be useful, right?" (S001, 2026-05)
- "The idea somehow that this technology exists and that those robots can be made useful today is just false." (S032, 2025-04)
- On robot learning by imitation: "VLA are doomed." (S004, 2026-05)
- **Over time:** 2025-02 he says the 2030s could be the decade of robotics if the physical world problem is cracked (S017).

## Timing a technology bet
- **Stance:** Progress comes in steps, not one event, and is almost always slower than people think. Yet in startups he would rather be early.
- "it's almost certainly much harder than we think because in the past 70 years of history of AI, it's always been much harder than we thought" (S009, 2026-04)
- "in the context of startups, it's much better to be too early than to be too late." (S032, 2025-04)
- "there is a bunch of mountains that we have to climb and we can see the first one but we don't know if there are 50 mountains behind it or not" (S026, 2019-08)
- **Over time (his own world-model timeline):**
  - 2025-03: "it's not going to happen within the next three years but it may happen with you know between 3 to 5 years" (S015)
  - 2026-02 (newer): a general world model needs three to five or more years; narrow uses on specific problems could show results in one to two years (S006).
- **Read:** he admits he has been too pessimistic about how fast research turns into products, citing face recognition at Facebook (S016, 2025-02; S032, 2025-04).

## Data and scaling as a moat
- **Stance:** Scale is needed but not enough. Public text is used up, so more text will not close the gap.
- "certainly, scale is necessary but not sufficient." (S020, 2024-03)
- "we've kind of run out of natural Text data to train those those llms" (S015, 2025-03)
- "we're never going to get to human level AI systems by just training it on text it's just not happening" (S016, 2025-02)

## Spending big on compute and infrastructure
- **Stance:** Large spending on inference infrastructure is justified even if no new paradigm arrives soon, because serving billions of users needs it anyway (S015, 2025-03). The bulk of AI cost is running models, not training them (S014, 2025-03).
- **Read:** this is a big-company position. No recorded position on how much a small startup should spend on compute.

## Raising money
- **Stance:** Thin record. He tells technical founders that research depth helps fundraising: "It might be easier to raise money if you've published a few papers where you've invented something new" (S019, 2024-11). His own company raised from investors spread across regions on purpose: "Our investors are from all over the world." (S002, 2026-07)
- No recorded position on round size, valuation, dilution, or angels versus VCs.

## Debt
- No recorded position.

## Pricing
- No recorded position. Nearest: inference must get very cheap for wide use in poorer markets; he puts it at a few rupees per million tokens for India (S019, 2024-11).

## Discounting
- No recorded position.

## First hires and hiring researchers
- **Stance:** Hire the best people, give them the means, and leave them alone.
- "the best way to get breakthrough research... is you hire the best people and you get the out of the way" (S001, 2026-05)
- On why he set open research as a condition at Meta: "because I don't know how to do it otherwise uh you know I don't know how to hire the best." (S005, 2026-03)
- For technical founders, a PhD or Masters gives "more legitimacy in hiring talented people." (S019, 2024-11)

## Firing
- No recorded position.

## Research culture and deadlines
- **Stance:** Give people a long leash. Quarterly pressure kills breakthroughs. Let researchers pick their problems.
- "if you really want Innovation you need a longer leash you need to let people uh take risks and innovate" (S016, 2025-02)
- "there has to be a lot of freedom on research scientists on the topics that they pick to work on it has to be essentially bottom-up" (S025, 2021-09)
- He blames product pressure on Meta's GenAI group for conservative Llama 3 and 4 work and lost researchers (S001, 2026-05).

## Moving research into product
- **Stance:** The hand-off from research to product is where companies fail. It needs a protected group between the lab and the product team.
- "That is where a lot of projects fail. That's That's where a lot of companies kind of fail to pick up." (S001, 2026-05)

## Founder or CEO role
- **Stance:** He knows he is a scientist, not a manager, and stays out of operations.
- "I'm just not good at it. It's not the thing I'm... I'm more like a, you know, scientific or technical visionary and engineer and scientist." (S001, 2026-05)
- He is executive chairman of AMI Labs with no management role (S009, 2026-04).
- **Read:** his advice on running a company day to day is thin by his own account.

## Leaving a big company to start one
- **Stance:** Leave when the company's business cannot carry your project. He left Meta because his world-model work served B2B customers.
- "Meta is not a B2B company. It's a company that is entirely focused on connecting people with each other." (S002, 2026-07)

## Partners and joining a company
- **Stance:** Set your non-negotiables before you join. He required open research, staying in New York, and keeping his NYU job (S017, 2025-02; S018, 2024-12).
- "I'm never going again to work for a company that stops open source uh you know stop scientific communication and then systematically patents uh everything" (S016, 2025-02)

## Patents and IP protection
- **Stance:** Against patents on ideas. He watched his ConvNet patents sit unused at NCR.
- Patents are "hurtful because it stops people from you know kind of working essentially uh on on their own ideas." (S005, 2026-03)
- **Read:** strong view built from one bad experience at a large company; no recorded view on patents as a startup's defense.

## Focus and choosing a vertical
- **Stance:** Pick one vertical and become the expert in it. When asked which vertical, he answered "Any vertical." (S019, 2024-11)
- "take an open-source platform... and then fine-tune it for a particular vertical application and become an expert in that vertical application" (S019, 2024-11)
- On research strategy: "pick a long-term very ambitious plan and work your way back and you're going to make progress. Useful things are going to come out of that" (S009, 2026-04)

## Regulation and compliance
- **Stance:** Regulate products, not research and development. Compute caps on training are a limit on competition.
- "I'm I'm all for regulating products that gets in the hands of people uh I don't see the point of uh regulating uh research and development" (S022, 2023-04)
- On Europe: "Europe is kind of basically shooting itself in the foot um when it comes to regulation" (S010, 2025-05)
- He supports banning mass face recognition in public places (S018, 2024-12).

## AI safety and doom arguments
- **Stance:** Existential risk talk is wrong and partly commercial. The real risk is a few companies controlling everyone's information.
- "That's BS if you pardon my French." (S008, 2026-01)
- "I see the danger of this concentration of power through proprietary AI systems as a much bigger danger than everything else." (S020, 2024-03)
- He calls current LLMs "intrinsically unsafe" but adds "that doesn't mean they're dangerous because they're not that smart." (S010, 2025-05)
- **Read:** he names rivals (Anthropic, Amodei, Marcus) with heat (S030, 2026-04). Treat his read on competitors' motives as partisan.

## Jobs and replacing people with AI
- **Stance:** AI amplifies people; it does not replace them. No mass unemployment.
- "they're not going to replace us. they're going to amplify us." (S006, 2026-02)
- "We're all going to be a boss. We're all going to be like those high-level managers who will tell our AI systems what to do" (S019, 2024-11)
- He defers to economists and expects gradual productivity gains (S007, 2026-02; S008, 2026-01).

## Sovereignty and selling outside the US
- **Stance:** Countries and cultures will demand AI they control, which favors open models and local fine-tuning.
- "The only way to have any level of sovereignty in AI is is is to have access to open source, you know, powerful open source, AI systems." (S030, 2026-04)
- AMI Labs is headquartered in Paris with no West Coast or China presence, "by design for now" (S002, 2026-07).

## Contrarian bets
- **Stance:** Being outside the mainstream is fine when you have evidence. Evidence persuades slowly.
- "the story of my career it's to be uh a little bit outside of the mainstream so I mean I become the mainstream but then it's boring" (S016, 2025-02)
- "it's surprisingly difficult to snap people out of a particular way of thinking" (S005, 2026-03)

## Remote work, work hours, burnout, content, paid ads, brand, equity, selling the company, metrics
- No recorded position on any of these. Nearest on metrics: optimizing a proxy instead of the real objective creates feedback loops (S025, 2021-09).
