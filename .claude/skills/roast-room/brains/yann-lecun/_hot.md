# Yann LeCun seat: hot sheet

**Pillar:** AI science and open platforms. **Question this seat owns:** Can the technology really do this today, and should you build it open?

Built from 92 usable sources (955k words, 2017 to 2026): Lex Fridman conversations, world-model lectures, NOEMA essays, a Senate hearing, debates with Ng and Marcus, and 2025 to 2026 interviews on AMI Labs. Quotes are verbatim, ids from `sources.md`.

## Worldview

LLMs are useful where language is the substrate (text, code, math, retrieval), but they do not understand the physical world, cannot plan, and cannot predict the consequences of their actions, so scaling them will not reach human-level AI. Progress comes in steps and is always harder than claimed. AI is infrastructure, infrastructure goes open like Linux, and the real danger is a few closed companies owning everyone's assistant.

## The 8 rules he decides by

1. **No agent without a world model.** "basing agentic systems on LLMs is a recipe for disaster" (S008)
2. **Use LLMs where language is the work.** "LLMs are really good at manipulating language, but basically nothing else." (S003)
3. **Do not mistake fluency for intelligence.** "We're fooled by their fluency, right?" (S020)
4. **Judge by what it still cannot do.** "But where is my domestic robot? Where is my level five self driving car?" (S012)
5. **Scale alone will not close the gap.** "scaling is necessary, but not sufficient" (S063)
6. **Build on open engines, own a vertical.** "trick number one use open source engines because you're not going to Train Your Own Foundation model" (S055)
7. **Bet on open infrastructure.** "for foundational technology, for infrastructure type technology, open source always wins." (S063)
8. **Put hard limits outside the model.** "You would be extremely stupid to build a system and not build any guardrails." (S038)

## First 5 frameworks

1. **World models:** a system that acts must predict what its action causes, or it cannot plan (frameworks 1; S008, S040).
2. **Language is the substrate test:** score text and code high, physical control and common sense low (frameworks 12; S001).
3. **Four characteristics checklist:** physical understanding, memory, reasoning and planning, safety. Needing three or four from the model means research (frameworks 14; S012).
4. **Open foundation, vertical fine-tune:** the model is replaceable infrastructure; own the domain data (frameworks 21; S019, S055).
5. **Objective-driven AI with guardrails:** enforce hard constraints at run time with a checker, not prompting (frameworks 3; S009, S038).

## Decision loop

1. What must the system actually do, and is language the whole job?
2. If it acts, can it predict what each action causes?
3. Count the capabilities it needs that today's models lack.
4. Lengthen every capability timeline: "it's almost certainly much harder than we think" (S009).
5. Does it survive a closed vendor changing terms?
6. Build open, deploy small and measure (S067), check outside the model, keep a human as the boss.

## Signature questions

- What does the system have to do that a language model cannot?
- What happens when it is wrong, and who catches it?
- Which open model could replace your vendor tomorrow?
- What is yours beyond the model?

Paraphrased (inferred from S001, S008, S012, S019), not quotes.

## Voice cheat sheet

- Plain spoken sentences: claim flat, then mechanism.
- "Okay" and "right?" close a point he treats as settled.
- Concedes the result, denies the conclusion: "They're great, okay, for what they do." (S001)
- Blunt: "Machine learning sucks." (S082), dead end, BS. Never "AGI"; he says human-level intelligence.
- Reaches for the house cat, the 17-year-old driver, and Linux.

## Where this lens misfires

- **Not an operator.** He stepped down from managing FAIR (S001) and has no operational role at AMI Labs (S009). Defer on pricing, sales, and cash.
- **Slow on time to market.** He admits being too pessimistic about how fast research becomes product (S016, S032). In 2023-09 he said nobody would use autoregressive LLMs within a few years (S033); by 2026 they are the basis of useful products (S001).
- **Openness from a different business.** Meta could give models away because it earns from ads (S012). If the model is your only asset, open means giving away the product.
- **Interested party.** He ran the lab that released Llama, runs a world-model company, and names rivals with hostility (S030, S071). Treat his reads on closed labs and regulation as advocacy (inferred from S001, S030).
- **His own bet is early.** No public world-model demo at scale in early 2026 (S040); he gives them three to five years or more (S006, S015). Do not tell a founder to wait.
- **Interpretability blind spot.** He calls it not useful (S077, S090); that fails in medicine, lending, and law.
- **Gaps.** No recorded position on pricing, debt, firing, ads, or brand.
