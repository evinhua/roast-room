# Books: Gary Marcus

Built from what his talks, essays, debates, and papers in the 109-source corpus say about his books; book text was not fetched. Six books are discussed in the sources, plus three long papers that work like books for this seat, and his Substack. Summaries are in my own words.

## Taming Silicon Valley: How We Can Ensure That AI Works for Us (2024)
- **Core thesis:** Current generative AI is technically and morally inadequate, and it arrived in a perfect storm of corporate irresponsibility, unreliable technology, and deployment at huge scale. Companies cannot be trusted to regulate themselves, and governments have been captured by lobbying, so citizens have to push for real oversight, including organized boycotts if needed. He frames AI as likely to repeat social media's harms, only worse. He says he wrote it in about two months, angry that his 2023 Senate testimony produced no law, and put it out cheaply so it would be widely read (S106, S107).
- **Key frameworks:** layered oversight modeled on aviation; FDA-style pre-deployment review and a safety case before release at scale (a market access standard: come back when the problems are fixed); independent scientists at every governance table and pre-release access for them; full disclosure of training data; liability for harms, and no Section 230 shield for AI output; a central AI agency and global coordination; licensing for copyrighted training data (the Napster to Apple path); a fair-trade style boycott; "to socialize the consequences and privatize the profits" (S008), a phrase he says he did not coin, as the failure to prevent. The talks describe about a dozen threats and eleven or twelve policy recommendations (S106, S111, S112). He later says he undersold surveillance in it (S105).
- **Taught in sources:** S008, S086, S093, S103, S104, S105, S106, S107, S111, S112, S113 (also S001, S010, S013; related testimony in S044 and policy arguments in S014, S015, S110).

## Rebooting AI: Building Artificial Intelligence We Can Trust (2019, with Ernest Davis)
- **Core thesis:** Deep learning alone will not give trustworthy AI. Machines need common sense, cognitive models of the world, and real reasoning, built by marrying statistical learning with structured knowledge, and the field is overhyped relative to what it can do.
- **Key frameworks:** the gullibility gap (people overrate machines from small samples, a modern pareidolia); common sense about objects in space and time as the central unsolved problem; failure-mode probes across physical, biological, social, and practical reasoning and individual tracking; a checklist for reading AI news (toy or real problem, what data, is there a public demo, better than which humans, how far toward real AI, how robust to edge cases); hybrid systems that pair learning with knowledge. He scores its calls later: home robots by 2025 near nil was right; machine reading moved faster than he expected (S111).
- **Taught in sources:** S001, S012, S013, S037, S041, S042, S047, S075, S078, S079, S090, S094, S102, S110, S111, S113 (mentioned in many more, including S009, S017, S019, S030).

## The Algebraic Mind: Integrating Connectionism and Cognitive Science (2001)
- **Core thesis:** Human thought uses something like mental algebra: variables, operations over variables, structured (recursive) representations, and a way to track individuals separately from kinds. Neural networks of the time could not do this, so they could not generalize outside their training space.
- **Key frameworks:** interpolation versus extrapolation (within and beyond the training space); symbol manipulation as variables, bindings, instances, and operations; universally quantified one-to-one mappings as the clean test case (S079); individual tracking, whose absence he says predicted hallucination, which he calls the first written prediction of the problem (S081, S082, S100); the case for combining neural networks with classical symbolic machinery. He says the gaps it listed are still the gaps in LLMs 25 years later, and uses it as his long-range scorecard (S033, S090).
- **Taught in sources:** S004, S009, S011, S029, S033, S045, S079, S081, S082, S089, S090, S097, S100, S101, S102, S106, S108 (mentioned in S005, S007, S008, S013, S015, S019, S035, S113).

## Kluge: The Haphazard Construction of the Human Mind (2008)
- **Core thesis:** The human mind is a patchwork built by evolution, a tinkerer with no foresight working from spare parts, which explains our cognitive biases and quirks of reasoning. Cue-driven memory (unlike a computer's addressable memory) causes interference, framing effects, and unreliable recall.
- **Key frameworks:** reflexive versus deliberate systems (a split mind, close to his later System 1 and System 2 framing of AI); confirmation bias and make-sense reasoning; framing effects (estate tax versus death tax); external aids like pilots' checklists where similar memories interfere; the habit of considering alternative hypotheses before committing. Business use in the corpus is indirect: decision hygiene for founders, and his view that human cognition is a useful but flawed benchmark that AI should beat, not copy (S092, S114). He notes it was panned on release and later named one of the best books on the brain (S111).
- **Taught in sources:** S114 (the talk on the book), S092, S111 (mentioned in S009, S013, S018, S019).

## The Birth of the Mind (2004)
- **Core thesis:** A small genome builds a complex brain by acting like a library of reusable subroutines laid down over evolution, which is why some knowledge can be innate.
- **Key frameworks:** innate structure as an enabler of learning, not its opposite; his later argument that AI should build in priors (objects, space, time, causality) rather than learn everything from a blank slate, and might progress faster by evolving on top of principled high-level primitives.
- **Taught in sources:** S009 (mentioned in S005, S013, S018, S019; the nativist argument recurs in S094, S102).

## Guitar Zero: The New Musician and the Science of Learning (2012)
- **Core thesis:** An account of learning guitar at about 40 and what the science says about how adults learn skills: the critical-period idea is overstated, and how you practice matters more than raw hours.
- **Key frameworks:** intelligent practice over hours (the 10,000-hour figure is only an average with a huge spread); explicit instruction can compress years of trial and error (chick sexing); introduce big changes in small steps. He borrows a guitar teacher's line, slow is fast and fast is slow, for AI research strategy (S079). Not applied to business decisions directly in the corpus.
- **Taught in sources:** S115 (the talk), S108 (mentioned in S009, S019, S079).

## Long papers that act as books for this seat

### Deep Learning: A Critical Appraisal (2018, arXiv)
- **Core thesis:** Deep learning is a statistical technique for classifying patterns that excels on closed problems with lots of data resembling the test set, and needs to be supplemented, not abandoned.
- **Key frameworks:** ten concerns (data hungry, shallow transfer, no hierarchical structure, weak open-ended inference, not transparent, poor use of prior knowledge, correlation not causation, assumes a stable world, outputs not fully trustworthy, hard to engineer); deep learning as one tool among many; overhype risks another AI winter. He documents that LeCun called it mostly wrong in 2018 and later adopted much of it (S060).
- **Taught in sources:** S046 (the paper itself), discussed in S004, S026, S029, S060, S064, S101.

### The Next Decade in AI: Four Steps Towards Robust Artificial Intelligence (2020, arXiv)
- **Core thesis:** Aim for robust AI, which reliably applies what it knows across many problems, before chasing superintelligence.
- **Key frameworks:** narrow versus pointillistic versus robust AI; four steps (hybrid architecture, large-scale abstract and causal knowledge, reasoning, cognitive models), all needed together; some innate structure is needed to constrain learning. Newer (2026): he presents the same four steps as what alignment would require (S100).
- **Taught in sources:** S045 (the paper itself), S079, S097, S100, discussed in S001, S013, S016, S017, S018, S030.

### Deep Learning Is Hitting a Wall (2022, Nautilus essay)
- **Core thesis:** Scaling is not enough; reliability, compositionality, and long-tail failures remain, and the field must bring back symbol manipulation.
- **Key frameworks:** stakes-calibrated deployment (fine for rough results, not where one error costs a life); scaling laws as observations, not laws; hybrid AI. Altman, Brockman, LeCun, and Musk mocked it at the time (S029, S113). He later treats GPT-5 and the 2025 scaling slowdown as vindication (newer view, S010, S026, S029, S106).
- **Taught in sources:** S019 (the essay itself), S006 (the talk), discussed in S007, S010, S012, S026, S029, S035, S047, S106, S113.

## Ongoing series
- **Marcus on AI (Substack, 2022 to present):** where most of his dated predictions, product takedowns, priority disputes, and bubble analysis live. Annual prediction lists and scorecards (S035, S036) and the essays S022 to S043 and S049 to S078 in this corpus come from it. Recurring essay types: model launch reviews (GPT-5, IMO gold, AlphaGeometry2, Cicero), hype rebuttals (60 Minutes, LaMDA, Dawkins on Claude), agent security warnings (coding agents, OpenClaw, the OpenAI and Hugging Face incident), and economics (no moat, the WeWork of AI).
- **Books he cites, not his:** Charles Mackay's Extraordinary Popular Delusions and the Madness of Crowds (1841), as the frame for what he calls LLM mania (S098).
