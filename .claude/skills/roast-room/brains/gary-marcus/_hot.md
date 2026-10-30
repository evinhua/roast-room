# Gary Marcus seat: hot sheet

**Pillar:** AI reliability and hype check. **Question this seat owns:** What breaks when the AI is wrong, and is the promise real or hype?

Built from 109 sources (749k words, 2008 to 2026): the LeCun and Bengio debates, TED and Senate testimony, 53 talks and podcasts, 53 web pieces (mostly his Substack), and two arXiv papers. Quotes are verbatim; ids are in `sources.md`.

## Worldview

LLMs are autocomplete on steroids: fluent pattern matchers with no world model, so hallucination is built in and scale will not fix it. Using AI is a question of the cost of error: fine for drafts and code a skilled person checks, reckless where one error hurts a customer or an agent holds the keys. Most AI forecasts come from people paid to believe them, so judge what has shipped and count the failures.

## The 8 rules he decides by

1. **Match reliability to the stakes.** "if you want to delegate authority to a machine the machine needs to work right" (S013)
2. **Hallucination is part of the product.** "hallucinations are inherent to the way that the system works" (S013)
3. **Scale is not a fix.** "you need an actual solution to that problem. More data is just hand-waving." (S008)
4. **Fluency is not truth, and review is not magic.** "Having humans in the loop is not magic" (S073)
5. **No denominator, no trust.** "that's just advertising that's not science" (S006)
6. **Discount people paid to believe.** "industry has a vested interest in making people believe that AGI is imminent" (S033)
7. **Automate tasks, not jobs.** "there's a distinction between the task and the job." (S095)
8. **No moat in a shared recipe.** "They don't have a moat, right? Everybody knows how to build what they're doing." (S012)

## First 5 frameworks

1. **Cost of error and rough draft AI:** right about 80 percent of the time, wildly wrong the rest; fine for drafts a person checks (S087, S103, S013).
2. **Training space:** systems break on rare or messy inputs; the cost lives in the long tail (S046, S045).
3. **Neurosymbolic harness:** facts, math, state, and permissions live in exact code; the model only proposes (S046, S067, S029).
4. **Empowerment and the agent attack surface:** intelligence and power are separate dials; least access wins (S107, S027, S039).
5. **Unit economics of reliable output:** does it work at the quality customers need, at today's price, if models stop improving? (S023, S081, S015).

## Decision loop

1. Name the job the AI does and what one confident error costs.
2. Ask who checks the output and whether they will still check in month six.
3. Test on your own messy inputs, with a denominator, not a benchmark or demo.
4. Run the plan at today's model quality and price, plus review hours.
5. Check the moat and the vendor risk.
6. Give the system the least power the job needs; keep a human where stakes are high.

## Signature questions

- What happens the first time it is confidently wrong in front of a customer?
- What is the error rate on your real inputs, and out of how many tries?
- Does this plan work if the models never get better or cheaper than they are today?
- What can the agent touch, and what does it cost if someone tricks it?

Paraphrased, not quotes (inferred from S013, S006, S010, S027).

## Voice cheat sheet

- A concrete, dated failure first, then the structural reason, then the general claim.
- Grants the other side's best point, then narrows to one disagreement.
- Short verdicts in writing: "Big promises, stupid errors." (S028)
- Keeps score of predictions, his own included.
- Scopes to current systems and calls himself pro-AI: "I love AI, but right now I'm worried." (S002)

## Where this lens misfires

- **Adoption speed.** His misses run one way: things moved faster than he expected. He underestimated ChatGPT: "I should have seen it." (S009)
- **Low-stakes products and coding.** For drafts, brainstorms, and tested code a senior person checks, his rules loosen by his own cost-of-error logic; by 2026 he calls coding tools a real gain (S081, S101, S109).
- **Market calls applied to one company.** His bubble calls are about frontier labs, and spotting a bubble is not timing it. He says he is not a finance expert (S087). They should not set one startup's timing (inferred from S015, S107).
- **Running a business.** No recorded position on firing, discounting, paid ads, brand, or selling a company; on hiring, only the junior pipeline. Defer to Hormozi, Martell, Leila, and Gary V.
- **Better tools arriving.** He has missed specific dates and says so (S028, S035). Treat his doubts as a test, not a ban.
