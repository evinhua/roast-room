# Frameworks: Yann LeCun

Built from 33 talks, interviews, and lectures (2017 to 2026, S001 to S034). 22 frameworks, roughly most-used first, weighted toward what a founder brings to this seat: can the AI do this today, and should it be built open. "Sources" counts distinct sources that use the idea (ids listed). Names are his where he named them; otherwise a short name marked *(unnamed)*. The How-to-score lines are scoring guidance for the council built from his stated thresholds, not quotes.

---

## 1. World models: predict the consequences of your actions
- **What it is:** His core test for any system that acts. A world model takes the state of the world at time t and an action you imagine taking, and predicts the state at t plus one. With it, a system can plan. Without it, an agent takes an action and hopes.
- **Parts:** Perception (estimate the current state); a predictor (state plus imagined action gives next state); a cost that says whether the goal is met; a search over action sequences.
- **When to use:** Any product that takes actions in the world: agents, robots, industrial control, healthcare, workflow automation. Ask whether the system can anticipate what its action will cause before it acts.
- **How to score:** Guidance. 5 if the product only needs language in and language out, or if the actions are cheap and reversible with a human checking them. 3 if actions matter but a human approves each one. 1 if an LLM agent takes consequential, irreversible actions on its own, which he calls "a recipe for disaster" (S008).
- **Quote:** "if you have a system that can predict the consequences of its actions, it can plan a sequence of actions to accomplish a task" (S002)
- **Sources:** 16 (S001, S002, S003, S004, S006, S007, S008, S009, S012, S014, S020, S026, S030, S032, S033, S034)

## 2. Objective-driven AI with guardrails
- **What it is:** His blueprint for AI that is controllable by construction. The system is given a task objective and guardrail objectives, and it produces output by searching for the action sequence that meets the task while satisfying the guardrails, according to its world model. Safety is enforced at inference time, not trained in and hoped for.
- **Parts:** Perception; persistent memory; world model; actor that proposes action sequences; cost modules (task objective plus guardrails); optimization at inference time.
- **When to use:** Any time reliability or safety is the selling point. Contrast it with LLM safety, which is fine-tuned in and can be broken by an unexpected prompt.
- **How to score:** Guidance. High if the product's hard constraints are checked by explicit code, rules, or a verifier outside the model at run time. Low if the plan relies on prompting or fine-tuning a language model to "behave." He admits this architecture is still not working at full scale (S021), so a pitch that claims to already have it gets checked hard.
- **Quote:** "a system built around this blueprint is intrinsically safe because it cannot do anything but satisfy your guardrails according to its world model" (S009)
- **Sources:** 13 (S001, S008, S009, S010, S014, S017, S018, S019, S021, S030, S031, S032, S033)

## 3. Open platforms win (the Linux pattern) *(unnamed)*
- **What it is:** His market-structure prediction. Infrastructure platforms drift to open source because open is more portable, flexible, secure, and cheaper. Internet servers ran on Sun, HP-UX, and Windows NT in the 1990s and now run on Linux. He casts the closed AI labs as today's Sun and HP-UX.
- **Parts:** AI is becoming a platform; platforms go open; proprietary platforms lose share over time; value moves to those who build on the platform.
- **When to use:** Choosing which model provider to build on, whether to open-source your own model, and how defensible a moat built on a proprietary model is.
- **How to score:** Guidance. High if the plan stays portable across models and does not depend on one closed vendor. Low if the business only works while one proprietary model stays ahead and stays cheap.
- **Quote:** "I think AI is fast becoming a platform and historically platforms have always become open source." (S008)
- **Sources:** 9 (S001, S008, S010, S013, S014, S016, S019, S021, S032)

## 4. Open foundation, vertical fine-tune *(unnamed)*
- **What it is:** His direct advice to AI entrepreneurs. A foundation model is infrastructure, not a product. Take an open model, fine-tune it for one vertical, and become the expert in that vertical. A fine-tuned open engine beats a generic proprietary model for a specific use.
- **Parts:** Open base model (Llama is "like Linux"); vertical data and fine-tuning; domain expertise as the moat.
- **When to use:** "Should we build on GPT or Claude, or on an open model?" Also when a founder compares raw benchmark scores of a base model with a finished product.
- **How to score:** Guidance. High if the founder owns domain data and expertise and treats the model as replaceable infrastructure. Low if the product is a thin wrapper on someone else's API with no vertical depth.
- **Quote:** "take an open-source platform... and then fine-tune it for a particular vertical application and become an expert in that vertical application" (S019)
- **Sources:** 4 (S012, S017, S019, S032)

## 5. Open research flywheel
- **What it is:** Progress is fastest when people publish, post papers, and open-source code, because more people build on each piece. No one has a monopoly on good ideas. Secrecy makes you slower, and people stop wanting to talk to you.
- **Parts:** Publish; release code; attract the best people because their impact is visible; learn from everyone else's releases.
- **When to use:** Deciding whether to publish, open-source a tool or model, or keep it secret. Also hiring researchers.
- **How to score:** Guidance. High if openness feeds hiring, adoption, and outside contributions and the business makes money elsewhere (he notes Meta earns from ads, so giving models away costs it little, S012). Lower if the released asset is the only thing the company sells.
- **Quote:** "if there is a FAS exchange of information the field progresses faster and if you become secretive you fall behind because people don't want to talk to you anymore" (S021)
- **Sources:** 11 (S005, S008, S009, S010, S012, S014, S015, S016, S021, S025, S027)

## 6. Four characteristics of intelligent behavior (capability checklist)
- **What it is:** What any smart animal has and current LLMs lack: understanding of the physical world, persistent memory, reasoning, and planning (he adds controllability in some versions). He says this list has not changed since before LLMs.
- **Parts:** Physical world understanding; persistent memory; reasoning; hierarchical planning; controllability and safety.
- **When to use:** As a checklist against a product's requirements. If the product needs any of these done reliably, an LLM alone will not deliver it today.
- **How to score:** Guidance. Count how many of the four the product needs the model itself to do. Zero: buildable now. One or two: buildable with external memory, tools, and human checks. Three or four: research, not product.
- **Quote:** "We need machines that understand the physical world. We need machines that are capable of reasoning and planning. We need machines that have persistent memory. And we need those machines to be controllable and safe." (S012)
- **Sources:** 6 (S010, S011, S012, S017, S020, S026)

## 7. Language is the substrate test *(unnamed)*
- **What it is:** LLMs succeed where language itself carries the reasoning: text, code, math. Outside that, on continuous, noisy, high-dimensional signals like video and sensor data, they are close to useless. Much of what looks like intelligence is retrieval of stored knowledge.
- **Parts:** Is the input and output discrete symbols? Is the reasoning done by manipulating those symbols? Or does the task depend on the physical world?
- **When to use:** First question on any "can the tech do this" decision.
- **How to score:** Guidance. 5 for text, code, translation, search, and summarizing. 3 for tasks where text describes a physical process and a human checks. 1 for real-world sensor control, robotics, or anything that needs common sense about physics from an LLM.
- **Quote:** "LLMs are particularly successful at domains where the language itself is the substrate of reasoning. Uh not for anything else." (S001)
- **Sources:** 9 (S001, S002, S003, S006, S007, S012, S019, S030, S031)

## 8. The Moravec paradox and the "where is my robot" test
- **What it is:** What is hard for people (chess, the bar exam) is easy for machines; what is easy for a cat or a teenager (moving through the world, learning to drive in 20 hours) is still out of reach. He judges AI by what it still cannot do, not by its best demo.
- **Parts:** List what the demo shows; list the nearby easy-for-humans task it cannot do; trust the second list.
- **When to use:** Evaluating hype, a vendor claim, or a humanoid robot or self-driving plan.
- **How to score:** Guidance. Lower the score when the pitch rests on benchmark wins or exam results, and raise it when it rests on reliable performance in messy, real conditions.
- **Quote:** "why do we have systems that can pass the bar exam and win mathematics olympiads, but we don't have domestic robots?" (S007)
- **Sources:** 9 (S001, S003, S007, S011, S012, S022, S029, S030, S032)

## 9. Data bandwidth argument (the four-year-old) *(unnamed)*
- **What it is:** A four-year-old has taken in about 10^14 bytes through vision in 16,000 waking hours, the same order as all the public text used to train the biggest LLMs. The child learns intuitive physics; the LLM does not. So more text will not get you there, and public text is already nearly used up.
- **Parts:** Count the data; compare what each learner can do; conclude that the architecture and learning objective, not data volume, are the bottleneck.
- **When to use:** When a plan assumes the next model will be much better simply because it is bigger or trained on more text.
- **How to score:** Guidance. Lower the score for any plan whose viability depends on scaling LLMs past their current limits on physical or common-sense tasks.
- **Quote:** "in four years a young child has has seen as much information or data as the biggest llms and what it tells you is that we're never going to get to human level AI by just training on text." (S014)
- **Sources:** 8 (S001, S006, S011, S014, S015, S029, S031, S032)

## 10. Exponential error in autoregressive generation *(unnamed)*
- **What it is:** Each token an LLM produces has some chance of leaving the set of correct answers. If those errors are roughly independent, the chance that a long output is fully correct falls exponentially with length. Hallucination is structural, not a bug that fine-tuning removes.
- **Parts:** Per-token error rate; output length; compounding.
- **When to use:** Long, unchecked outputs: multi-step agents, long documents, code that runs without review, medical or legal answers.
- **How to score:** Guidance. High if outputs are short or each step is verified. Low if a long chain of generated steps runs with no check in between.
- **Quote:** "The probability that a sequence of words will be kind of a correct answer to the question decreases exponentially with the length of the answer" (S031)
- **Sources:** 4 (S020, S023, S029, S031)

## 11. JEPA: predict in representation space, not pixels
- **What it is:** His technical alternative to generative models. Encode the input and the target, then predict the target's abstract representation instead of every pixel or token. Unpredictable detail (leaves moving on trees) is dropped, so prediction becomes tractable. Variants: I-JEPA, V-JEPA, DINO, VICReg, SigReg.
- **Parts:** Encoder for the observed part; encoder for the target; predictor between representations; a regularizer that stops the representation from collapsing.
- **When to use:** Products built on video, sensor streams, or industrial signals; anyone choosing between generative video models and representation learning for understanding.
- **How to score:** Guidance. It is early: a 2026 explainer reports JEPA planning results far behind VLA demos and working only over short horizons (S004, narrator, not LeCun). Score a business that depends on JEPA-style world models at scale as a research bet with a 3 to 5 year horizon (S006, S015), not a shipping product.
- **Quote:** "instead of training a system to predict what's going to happen in the video at the pixel level you train the system to learn an abstract representation of the content of the video and you make prediction in that abstract representation space" (S016)
- **Sources:** 20 (S001, S002, S003, S004, S005, S006, S009, S010, S012, S013, S015, S016, S019, S020, S023, S024, S029, S030, S031, S033)

## 12. The cake: self-supervised bulk, supervised icing, RL cherry
- **What it is:** First shown in his NIPS 2016 keynote. Most of what animals and people learn comes from observation (self-supervised learning). Supervised learning is the icing. Reinforcement learning is the cherry: one scalar reward, too little signal, too many trials to use in the real world.
- **Parts:** Self-supervised pretraining for background knowledge; a little supervised learning; RL only to fine-tune behavior at the end.
- **When to use:** When a plan leans on reinforcement learning in the physical world, or on collecting huge labeled datasets.
- **How to score:** Guidance. Lower the score for plans that need many real-world trials (you "cannot run it faster than real time," S034) or a human demonstration for every task variation.
- **Quote:** "if intelligence is a cake, most of the knowledge that we acquire is through self-supervised learning... That's a cherry on the cake." (S032)
- **Sources:** 9 (S003, S005, S009, S014, S015, S024, S025, S032, S034)

## 13. Hierarchical planning (the unsolved problem)
- **What it is:** Real plans nest: to get from New York to Paris you plan the flight, then the airport, then the taxi, then standing up. Longer horizons need more abstract representations. He says plainly that nobody knows how to make machines learn this.
- **Parts:** High-level goal; subgoals set by higher levels for lower ones; more abstraction for longer horizons.
- **When to use:** Any product that must carry out long, multi-step tasks on its own.
- **How to score:** Guidance. A plan that needs an AI to break down and carry out long tasks without human structure scores low today; one that gives the AI short, well-defined steps inside a human-designed workflow scores higher.
- **Quote:** "problem of hierarchical planning is completely unsolved. Okay, it's a major challenge I believe in AI." (S032)
- **Sources:** 11 (S001, S004, S005, S009, S012, S014, S020, S024, S026, S031, S032)

## 14. System 1 and System 2 (after Kahneman)
- **What it is:** System 1 is fast, reactive, compiled habit. System 2 is slow, deliberate search using a model of the world. LLMs are System 1. Chain of thought is a hack that spends more tokens, not real System 2 reasoning. Reasoning is search for an answer that minimizes a cost.
- **Parts:** Reactive policy; deliberate planning by optimization; moving skills from System 2 to System 1 with practice.
- **When to use:** When a vendor claims its model "reasons." Ask whether the system searches and checks, or just generates longer.
- **How to score:** Guidance. Credit products that pair a generator with an explicit search, checker, solver, or test suite. Discount products that equate "reasoning mode" with reliability.
- **Quote:** "LLMs are System 1. The architecture I'm describing, which I call Objective-Driven AI, is System 2" (S019)
- **Sources:** 8 (S009, S012, S013, S015, S016, S019, S020, S023)

## 15. Diversity of assistants, like a free press *(unnamed)*
- **What it is:** Soon our whole information diet will pass through AI assistants. If those come from a handful of companies on the US West Coast or in China, local culture, languages, and democracy suffer. So you need many assistants, each fine-tuned on open base models for a language, culture, or value system. The fix for bias is many biased systems, not one unbiased one.
- **Parts:** Open base models; local fine-tunes; national and regional sovereignty; many vendors.
- **When to use:** Products for non-US markets, governments, regulated sectors, or local languages; arguments for sovereign or on-premise deployment.
- **How to score:** Guidance. High when a buyer cares about control of its data, language, or values and open models let you serve that. Low when the plan assumes every customer will happily send everything to one US API.
- **Quote:** "We need assistants that are extremely diverse... for the same reason that we need a diverse press. Otherwise, we'll all have the same information from the same sources and that's just not good for democracy" (S013)
- **Sources:** 11 (S001, S002, S008, S010, S013, S017, S018, S020, S021, S030, S031)

## 16. Long leash, small team, bottom-up research *(unnamed)*
- **What it is:** Breakthroughs come from small teams with freedom and long time horizons, not from big teams under quarterly pressure. Llama 1 came from about 12 people in Paris; DeepSeek showed a small team with a longer leash can beat big groups. Researchers pick their own problems.
- **Parts:** Hire the best; give them means; let them choose problems; protect them from product deadlines; publish.
- **When to use:** Structuring an R&D group, deciding whether to put researchers on the product roadmap, or judging a startup's research claims.
- **How to score:** Guidance. High for genuine new-technology bets run by a small senior team with runway. Low if breakthrough research is expected on a three-month product cadence.
- **Quote:** "for innovative ideas to emerge... you need to give people a long leash right you you need to let people really sort of uh innovate and not like pressure them to produce something you know every three months" (S013)
- **Sources:** 6 (S001, S009, S013, S015, S016, S025)

## 17. The research to product relay *(unnamed)*
- **What it is:** A chain from blue-sky research, to applied research that pushes an idea to a working demo without product deadlines, to engineering for product. The middle stage needs its own protected group. When it is removed or put under product pressure, the chain breaks. He saw it at AT&T (patents stranded at NCR) and at Meta (GenAI under short-term pressure).
- **Parts:** Research; protected applied stage; product engineering; clean hand-offs.
- **When to use:** A company that has a research asset and is trying to turn it into a product, or splitting or merging teams.
- **How to score:** Guidance. Lower the score when there is no one whose job is to carry the idea from demo to product, or when a reorganization splits the people who understand the technology from the people who sell it.
- **Quote:** "That is where a lot of projects fail. That's That's where a lot of companies kind of fail to pick up." (S001)
- **Sources:** 4 (S001, S005, S016, S027)

## 18. Regulate products, not research
- **What it is:** Regulate what reaches people, like drugs, cars, and planes. Do not regulate research and development, and do not cap model training compute; he sees such limits as regulatory capture by incumbents. When a deployed product causes real harm, stop that product, not the field.
- **Parts:** Product rules; free R&D; respond to actual harm at deployment.
- **When to use:** Regulatory risk questions, compliance strategy, choosing a market (he says Europe is "shooting itself in the foot," S010).
- **How to score:** Guidance. High if the plan complies at the product level and does not depend on lobbying for or against research rules. Note his bias: he treats doom-driven regulation as mostly hype and may underweight real compliance cost.
- **Quote:** "I'm I'm all for regulating products that gets in the hands of people uh I don't see the point of uh regulating uh research and development" (S022)
- **Sources:** 5 (S010, S018, S021, S022, S031)

## 19. AI as amplifier: everyone manages a staff *(unnamed)*
- **What it is:** AI will not replace people; it will amplify them. Each person becomes the boss of a staff of smart virtual assistants, sets the goals, and decides. Jobs shift up a level of abstraction. He cites economists who say we will not run out of jobs because we will not run out of problems.
- **Parts:** Human sets objectives; AI executes; human stays accountable.
- **When to use:** Product design for knowledge work, pricing around seats versus outcomes, and workforce or hiring decisions tied to AI.
- **How to score:** Guidance. High for products that make a skilled person faster and keep them in charge. Lower for products whose value depends on fully removing the human from consequential decisions.
- **Quote:** "AI is going to be our staff. Every one of us is going to be a manager of a staff of, you know, intelligent machines." (S007)
- **Sources:** 7 (S006, S007, S011, S017, S018, S019, S032)

## 20. Mountain range: it is always harder than we think *(unnamed)*
- **What it is:** Researchers see the first mountain, not the 50 behind it. For 70 years every new AI paradigm has been declared the path to human-level AI, and every time it was wrong. Progress is continuous, not one event or one secret.
- **Parts:** Name the visible obstacle; assume unseen ones; discount the timeline.
- **When to use:** Any plan or pitch that depends on a capability arriving by a date.
- **How to score:** Guidance. Lengthen any capability timeline the plan depends on. Do not fund a team claiming the secret: "if a start-up tells you they have the secret to you know human level intelligence and common sense don't believe them they don't" (S026).
- **Quote:** "there is a bunch of mountains that we have to climb and we can see the first one but we don't know if there are 50 mountains behind it or not" (S026)
- **Sources:** 9 (S007, S009, S011, S012, S013, S015, S019, S020, S026)

## 21. Right level of abstraction (the Jupiter example) *(unnamed)*
- **What it is:** To predict where Jupiter will be in 100 years you need six numbers, not every detail ever measured. Good representations throw away what does not matter for the prediction you want. Each level of science (atoms, cells, societies) works this way. A world model is not a digital twin or a video generator.
- **Parts:** Decide what you need to predict; keep only the variables that drive it; ignore the rest.
- **When to use:** Data strategy and product scope for AI on industrial, medical, or sensor data; pushing back on "simulate everything" plans.
- **How to score:** Guidance. High when the team can name the few variables that matter and has data on them. Low when the plan is to model everything in full detail.
- **Quote:** "a good state is whatever allows you to make the prediction you want to make" (S030)
- **Sources:** 4 (S010, S029, S030, S032)

## 22. Hammer and nail (the herd effect)
- **What it is:** When you hold a powerful tool, everything looks like a nail. Silicon Valley is "digging the same trench" with LLMs. Breakthroughs come from stepping outside the herd, and it is surprisingly hard to snap people out of a paradigm even with evidence.
- **Parts:** Notice the herd; ask what the current tool cannot do; consider the bet everyone else is skipping.
- **When to use:** Choosing a technical direction or a market where every competitor uses the same approach.
- **How to score:** Guidance. Credit a contrarian bet only when it rests on a mechanism and evidence, not just on being different. He describes his own career as one spent a little outside the mainstream (S032).
- **Quote:** "there is this herd effect that or the it's the the hammer and nail effect, right? When when you have a hammer in your in your hand, everything looks like a nail." (S010)
- **Sources:** 4 (S001, S005, S010, S032)

---

## Where these frameworks show their limits
- Most of his frameworks are about what AI cannot do yet. His own forecasts on product timing have run slow: he says he was too pessimistic about how fast face recognition would become practical at Facebook (S016, S032).
- He predicted in 2023 that "within a few years, nobody in their right mind would use autoregressive LLMs." (S033). Newer (2026): he calls LLMs "the basis for a lot of uh very useful AI products that all of us use, including me." (S001). Treat his "LLMs are a dead end" as a claim about the path to human-level AI, not about whether an LLM product can make money.
- He expected self-supervised learning to break through first on video; it broke through on language instead (S001).
- He changed his own method around 2021, moving from generative latent variable models to joint embedding (S024).
- He is open that the newest pieces (SigReg, distillation, hierarchical world models) work at small scale and are not fully understood (S009, S029, S031).
- He calls himself a scientist, not an operator, and says he is "not an operational person" at AMI Labs (S009). His frameworks say little about sales, pricing, or go-to-market. Inferred from S001, S009, S016.
