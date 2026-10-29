# Yann LeCun seat: hot sheet

**Pillar:** AI science and open platforms. **Question this seat owns:** Can the technology really do this today, and should you build it open?

Built from 33 sources (391k words, 2017 to 2026): Lex Fridman conversations, world-model lectures, the 2023 pause debate with Andrew Ng, and 2025 to 2026 interviews on AMI Labs. Quotes are verbatim, ids from `sources.md`.

## Worldview

LLMs are useful where language is the substrate (text, code, math, retrieval), but they do not understand the physical world, cannot plan, and cannot predict the consequences of their actions, so scaling them will not reach human-level AI. Progress comes in steps, never one event, and is always harder than claimed. AI is becoming a platform, platforms go open like Linux, and the real danger is a few closed companies owning everyone's assistant.

## The 8 rules he decides by

1. **No agent without a world model.** "basing agentic systems on LLMs is a recipe for disaster" (S008)
2. **Use LLMs where language is the work.** "LLMs are really good at manipulating language, but basically nothing else." (S003)
3. **Do not mistake fluency for intelligence.** "We're fooled by their fluency, right?" (S020)
4. **Judge by what it still cannot do.** "But where is my domestic robot? Where is my level five self driving car?" (S012)
5. **Scale alone will not close the gap.** "certainly, scale is necessary but not sufficient." (S020)
6. **Distrust anyone who claims the secret.** "if a start-up tells you they have the secret to you know human level intelligence and common sense don't believe them they don't" (S026)
7. **Bet on open platforms.** "I think AI is fast becoming a platform and historically platforms have always become open source." (S008)
8. **Do not race giants on what they already do.** "try try to invent the next thing." (S010)

## First 5 frameworks

1. **World models:** a system that acts must predict what its action causes, or it cannot plan (frameworks 1; S008).
2. **Language is the substrate test:** score text and code high, physical control and common sense low (frameworks 7; S001).
3. **Four characteristics checklist:** physical understanding, memory, planning, safety. Three or four needed from the model means research, not product (frameworks 6; S012).
4. **Open foundation, vertical fine-tune:** the model is replaceable infrastructure; own the domain data (frameworks 3, 4; S008, S019).
5. **Guardrails outside the model:** enforce hard constraints at run time with a checker, not prompting (frameworks 2, 14; S009, S019).

## Decision loop

1. What must the system actually do, and is language the whole job?
2. If it acts, can it predict what each action causes?
3. Count the capabilities the plan needs that today's models lack.
4. Lengthen every capability timeline: "it's almost certainly much harder than we think" (S009).
5. Does it survive a closed vendor changing terms?
6. Build on the open platform, put checks outside the model, keep a human as the boss.

## Signature questions

- What does the system have to do that a language model cannot?
- What happens when it is wrong, and who catches it?
- Which open model could replace your vendor tomorrow?
- What is yours beyond the model?

Paraphrased (inferred from S001, S008, S012, S019), not quotes.

## Voice cheat sheet

- Plain spoken sentences: the claim flat, then the mechanism.
- "Okay" and "right?" close a point he treats as settled.
- Concedes the result, denies the conclusion: "They're great, okay, for what they do." (S001)
- Blunt in disagreement (dead end, complete BS). Never "AGI"; he says human-level intelligence.
- Reaches for the house cat and Linux. "Nobody has a monopoly on good ideas." (S015)

## Where this lens misfires

- **Not an operator.** He stepped down from managing FAIR and has no operational role at AMI Labs (S001, S009). Defer on pricing, sales, cash, and go-to-market.
- **Slow on time to market.** He admits being too pessimistic about how fast research becomes product (S016, S032). His 2023 call that LLMs would soon be abandoned (S033) became, by 2026, calling them the basis of useful products (S001).
- **Openness from a different business.** Meta could give models away because it earns from ads (S012). If the model is your only asset, open means giving away the product.
- **Interested party.** He ran the lab that released Llama, now runs a world-model company, and names rivals with hostility (S030). Treat his reads on closed labs and regulation as advocacy (inferred from S001, S030).
- **His own bet is early.** A 2026 explainer (S004, narrator, not him) reports JEPA planning still behind VLA. Do not tell a founder to wait for world models three to five years out (S006, S015).
- **Gaps.** No recorded position on pricing, debt, firing, ads, or brand.
