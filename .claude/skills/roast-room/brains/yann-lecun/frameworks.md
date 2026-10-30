# Frameworks: Yann LeCun

Built from 92 usable talks, interviews, lectures, hearings, and essays (S001 to S099, six excluded as listed in `sources.md`; dated ones run 2017 to 2026, many keynotes are undated and go back to his Bell Labs and early FAIR years). 25 frameworks, roughly most-used first, weighted toward what a founder brings to this seat: can the AI do this today, and should it be built open. "Sources" counts distinct sources across all extraction notes that use the idea (ids listed). Names are his where he named them; otherwise a short name marked *(unnamed)*. The How-to-score lines are scoring guidance for the council built from his stated thresholds, not quotes.

---

## 1. World models: predict the consequences of your actions
- **What it is:** His core test for any system that acts. A world model takes the state of the world at time t and an action you imagine taking, and predicts the state at t plus one. With it, a system can plan by trying actions in its head. Without it, an agent takes an action and hopes. He calls the lack of this the biggest obstacle to real progress in AI (S097).
- **Parts:** Perception (estimate the current state); a predictor (state plus imagined action gives next state); a cost that says whether the goal is met; a search over action sequences. The model is learned from observation, not written by engineers as equations (S048).
- **When to use:** Any product that takes actions in the world: agents, robots, industrial control, healthcare, workflow automation. Ask whether the system can anticipate what its action will cause before it acts.
- **How to score:** Guidance. 5 if the product only needs language in and language out, or if the actions are cheap and reversible with a human checking them. 3 if actions matter but a human approves each one. 1 if an LLM agent takes consequential, irreversible actions on its own, which he calls "a recipe for disaster" (S008).
- **Quote:** "An agentic system that is supposed to take actions in the world cannot work reliably unless it has a world model to predict the consequences of its actions." (S040)
- **Sources:** 60 (S001, S002, S003, S004, S005, S006, S007, S008, S009, S010, S012, S013, S014, S018, S019, S020, S023, S024, S025, S026, S029, S030, S031, S032, S033, S037, S040, S041, S045, S047, S048, S051, S052, S053, S054, S058, S060, S063, S064, S065, S068, S070, S074, S075, S076, S077, S079, S081, S082, S084, S085, S086, S087, S089, S091, S092, S095, S096, S097, S099)

## 2. JEPA: predict in representation space, not pixels
- **What it is:** His technical alternative to generative models. Encode the input and the target, then predict the target's abstract representation instead of every pixel or token. Unpredictable detail (leaves moving on trees) is dropped, so prediction becomes tractable. Action-conditioned, a JEPA becomes a world model. Variants: I-JEPA, V-JEPA and V-JEPA 2, DINO world models, H-JEPA (stacked levels), with VICReg, Barlow Twins, distillation, or SigReg to stop collapse.
- **Parts:** Encoder for the observed part; encoder for the target; predictor between representations; a regularizer that keeps the representation informative.
- **Evidence he cites:** An A-B test at FAIR where joint embedding beat a masked autoencoder that reconstructs pixels, "clear empirical evidence that, for natural sensory data, you just don't want to use generative architectures." (S051). V-JEPA flags physically impossible events by its prediction error (S058, S086); V-JEPA 2 plans robot arm motions zero-shot (S053).
- **When to use:** Products built on video, sensor streams, or industrial signals; anyone choosing between generative video models and representation learning for understanding and control.
- **How to score:** Guidance. It is early. He says "we don't think we have the perfect recipe yet" (S053) and that SigReg is "still on the way there but not there yet" (S081). A 2026 explainer reports JEPA planning far behind VLA demos and only reliable about five steps ahead (S004, narrator, not LeCun). Score a business that depends on JEPA-style world models at scale as a research bet with a 3 to 5 year horizon (S006, S015), not a shipping product. Narrow uses (one robot task, one industrial process) score higher.
- **Quote:** "Never train the system to attempt to reconstruct every detail of Y. You only train it to predict an abstract representation of Y hoping that the encoder will eliminate all the parts of Y that are unpredictable." (S081)
- **Sources:** 45 (S001, S002, S003, S004, S005, S009, S010, S012, S013, S015, S016, S019, S020, S023, S024, S025, S029, S030, S031, S032, S033, S040, S041, S045, S047, S051, S052, S053, S054, S058, S060, S063, S065, S068, S070, S071, S073, S076, S081, S082, S084, S085, S086, S087, S099)

## 3. Objective-driven AI with guardrails
- **What it is:** His blueprint for AI that is controllable by construction. The system is given a task objective and guardrail objectives, and it produces output by searching for the action sequence that meets the task while satisfying the guardrails, according to its world model. Safety is enforced at inference time, not trained in and hoped for. He compares guardrails to laws: an extra cost function that must be enforced (S088). The fullest version (2022) adds a trainable critic, short-term memory, and a configurator he admits he does not know how to build (S099).
- **Parts:** Perception; persistent memory; world model; actor that proposes action sequences; cost modules (an immutable intrinsic cost or guardrails, plus trainable task costs); optimization at inference time.
- **When to use:** Any time reliability or safety is the selling point. Contrast it with LLM safety, which is fine-tuned in and can be broken by an unexpected prompt.
- **How to score:** Guidance. High if the product's hard constraints are checked by explicit code, rules, or a verifier outside the model at run time. Low if the plan relies on prompting or fine-tuning a language model to "behave." He admits this architecture is not working at full scale: "again i have to tell you i have not implemented this" (S099), and "we haven't made this work yet" (S021). A pitch that claims to already have it gets checked hard.
- **Quote:** "a system built around this blueprint is intrinsically safe because it cannot do anything but satisfy your guardrails according to its world model" (S009)
- **Sources:** 32 (S001, S008, S009, S010, S014, S017, S018, S019, S021, S030, S031, S032, S033, S037, S038, S041, S045, S051, S052, S054, S059, S062, S063, S064, S066, S081, S084, S086, S087, S088, S095, S099)

## 4. The Moravec paradox and the "where is my robot" test
- **What it is:** What is hard for people (chess, the bar exam) is easy for machines; what is easy for a cat or a teenager (moving through the world, learning to drive in about 20 hours) is still out of reach. He judges AI by what it still cannot do, not by its best demo. He also measures intelligence by how fast a system learns a new skill, not by the skills it has (S007, S081).
- **Parts:** List what the demo shows; list the nearby easy-for-humans task it cannot do; trust the second list.
- **When to use:** Evaluating hype, a vendor claim, or a humanoid robot or self-driving plan. He says none of the humanoid robot companies knows how to make them smart enough to be useful (S001).
- **How to score:** Guidance. Lower the score when the pitch rests on benchmark wins or exam results, and raise it when it rests on reliable performance in messy, real conditions or on fast learning of new tasks.
- **Quote:** "why do we have systems that can pass the bar exam and win mathematics olympiads, but we don't have domestic robots?" (S007)
- **Sources:** 30 (S001, S002, S003, S007, S008, S009, S011, S012, S017, S020, S021, S022, S029, S030, S031, S032, S040, S041, S046, S047, S048, S056, S062, S063, S065, S066, S067, S081, S085, S087)

## 5. Open research flywheel (publish or it is not research)
- **What it is:** Progress is fastest when people publish, post papers, and open-source code, because more people build on each piece. No one has a monopoly on good ideas. Secrecy makes you slower, people stop talking to you, and the best researchers will not join. Publishing is also a discipline: without outside scrutiny a lab fools itself about weak projects for years (S045, S064).
- **Parts:** Publish; release code and use public data; attract the best people because their impact is visible; learn from everyone else's releases; make results reproducible, because good results alone are not believed (S090, S094).
- **When to use:** Deciding whether to publish, open-source a tool or model, or keep it secret. Hiring researchers. Judging a startup's unpublished "breakthrough."
- **How to score:** Guidance. High if openness feeds hiring, adoption, and outside contributions and the business makes money elsewhere (he notes Meta earns from ads, so giving models away costs it little, S012). Lower if the released asset is the only thing the company sells. Discount any claimed breakthrough no one outside has been able to check.
- **Quote:** "in my opinion you can't really call it research unless you publish what you do because otherwise you can get easily fooled by yourself" (S045)
- **Sources:** 30 (S005, S006, S008, S009, S010, S014, S016, S017, S018, S021, S022, S025, S027, S032, S045, S047, S053, S059, S063, S064, S066, S067, S076, S078, S080, S086, S088, S090, S093, S094)

## 6. Hierarchical planning (the unsolved problem)
- **What it is:** Real plans nest: to get from New York to Paris you plan the flight, then the airport, then the taxi, then standing up from the chair. Longer horizons need more abstract representations and fewer details. He says plainly, in talk after talk, that nobody knows how to make machines learn this. H-JEPA is his proposed route.
- **Parts:** High-level goal; subgoals set by higher levels for lower ones; more abstraction for longer horizons; precise prediction only at the short horizon.
- **When to use:** Any product that must carry out long, multi-step tasks on its own.
- **How to score:** Guidance. A plan that needs an AI to break down and carry out long tasks without human structure scores low today; one that gives the AI short, well-defined steps inside a human-designed workflow scores higher.
- **Quote:** "We have no idea how to train a a machine so that it has a world model that can do this type of hierarchical planning." (S084)
- **Sources:** 25 (S001, S005, S009, S010, S012, S014, S020, S030, S031, S032, S033, S048, S052, S053, S058, S066, S068, S074, S081, S082, S084, S085, S086, S088, S099)

## 7. The cake: self-supervised bulk, supervised icing, RL cherry
- **What it is:** First drawn at NYU in 2015 and shown at NIPS 2016. Most of what animals and people learn comes from observation (self-supervised learning). Supervised learning is the icing. Reinforcement learning is the cherry: one scalar reward, too little signal, too many trials to use in the real world. Where the cost is differentiable, plan with a world model and optimal control (model predictive control) instead. He applies the same logic to robot foundation models: behavior cloning needs a human demonstration for every variation, so "VLA are doomed" outside a few uses (S004).
- **Parts:** Self-supervised pretraining for background knowledge; a little supervised fine-tuning; planning with a model; RL only to correct the cost at the end.
- **When to use:** When a plan leans on reinforcement learning in the physical world, on collecting huge labeled datasets, or on teleoperation demos for every task.
- **How to score:** Guidance. Lower the score for plans that need many real-world trials (you "cannot run it faster than real time," S034) or a human demonstration for every task variation. Raise it for plans that pretrain on cheap unlabeled data and fine-tune on a little labeled data.
- **Quote:** "If intelligence is is a cake, the the bulk of the cake, the genoise of the cake, if you want, is self-supervised learning." (S047)
- **Sources:** 33 (S003, S004, S005, S009, S014, S015, S024, S025, S029, S032, S034, S047, S051, S052, S058, S070, S072, S075, S076, S079, S081, S082, S084, S085, S086, S089, S092, S095, S097, S099, S012, S030, S031)

## 8. The four abandons (energy-based, regularized, non-generative, little RL)
- **What it is:** His standing list of "unpopular" recommendations for anyone building the next generation of AI: abandon generative models for joint embedding; abandon probabilistic models for energy-based models (a scalar score of compatibility between x and y, with inference done by minimizing it); abandon contrastive methods for regularized ones that shrink the low-energy region (VICReg, Barlow Twins, SigReg); abandon reinforcement learning where you can. He says it "does not make me popular in Silicon Valley" (S081).
- **Parts:** Energy function F(x, y); inference by optimization over y (or over latent variables); training by regularization instead of negative samples; planning instead of trial and error.
- **When to use:** Judging a technical roadmap for perception, video, or control; checking whether a team is copying the language recipe onto continuous data.
- **How to score:** Guidance. Credit teams that pick the method to fit the data (discrete text versus continuous signals). He admits the theory is incomplete ("the mathematical foundations of energy-based learning I think are not completely worked out," S031) and that the best-scaling anti-collapse methods are ones he does not fully understand (S031, S052, S086). Treat this as his research taste, strong on mechanism, not as proven product advice.
- **Quote:** "abandon generative models in favor of the joint embedding architectures. Abandon probabilistic models in favor of energy based models. Abandon contrastive methods in favor of regularized methods. uh abandon reinforcement learning." (S085)
- **Sources:** 20 (S009, S020, S029, S031, S032, S052, S065, S068, S073, S077, S081, S082, S084, S085, S088, S089, S091, S092, S099, S034)

## 9. Diversity of assistants, like a free press *(unnamed)*
- **What it is:** Soon our whole information diet will pass through AI assistants. If those come from a handful of companies on the US West Coast or in China, local culture, languages, and democracy suffer. So you need many assistants, each fine-tuned on open base models for a language, culture, or value system. The fix for bias is many biased systems, not one unbiased one. His newest form is Project Tapestry: partners train one global open model by exchanging parameter vectors, not raw data, so each keeps sovereignty over its data (S041, S002). He admits he lobbied for it for three years without success (S041).
- **Parts:** Open base models; local fine-tunes; national and regional sovereignty; federated training; many vendors.
- **When to use:** Products for non-US markets, governments, regulated sectors, or local languages; arguments for sovereign or on-premise deployment.
- **How to score:** Guidance. High when a buyer cares about control of its data, language, or values and open models let you serve that. Low when the plan assumes every customer will happily send everything to one US API.
- **Quote:** "the only way to get there is if the people who have the means to train foundation models release them in open source so that a lot of other people can fine-tune them for whatever language, culture, value system or centers of interest they have" (S084)
- **Sources:** 22 (S001, S002, S008, S010, S013, S017, S018, S019, S020, S021, S029, S030, S031, S037, S041, S047, S055, S056, S061, S084, S086, S062)

## 10. Open platforms win (the Linux pattern) *(unnamed)*
- **What it is:** His market-structure prediction. Infrastructure drifts to open source because open is more portable, flexible, secure, and cheaper. The internet runs on Linux, Apache, and open browsers; servers once ran on Sun and HP-UX. He casts the closed AI labs as today's Sun. He adds a three-stage pattern for incumbents: ignore the new open thing, say it cannot scale, then call it dangerous (S057).
- **Parts:** AI is becoming a common platform; platforms go open; proprietary platforms lose share over time; value moves to those who build on the platform.
- **When to use:** Choosing which model provider to build on, whether to open-source your own model, and how defensible a moat built on a proprietary model is.
- **How to score:** Guidance. High if the plan stays portable across models and does not depend on one closed vendor. Low if the business only works while one proprietary model stays ahead and stays cheap. Note his conflict: he ran research at a company whose strategy was to give models away (inferred from S012, S057).
- **Quote:** "for foundational technology, for infrastructure type technology, open source always wins." (S063)
- **Sources:** 21 (S001, S008, S010, S014, S018, S019, S021, S032, S038, S039, S047, S056, S057, S061, S062, S063, S064, S066, S067, S085, S087)

## 11. Right level of abstraction (the Jupiter example) *(unnamed)*
- **What it is:** To predict where Jupiter will be in 100 years you need six numbers, not every detail ever measured. Good representations throw away what does not matter for the prediction you want. Every science works this way: fluid dynamics ignores molecules, PV = nRT ignores single trajectories (S045, S048). So a world model is a simulator in abstract space, not a digital twin or a video generator.
- **Parts:** Decide what you need to predict; keep only the variables that drive it; ignore the rest; predict at the horizon those variables support.
- **When to use:** Data strategy and product scope for AI on industrial, medical, or sensor data; pushing back on "simulate everything" or "digital twin" plans; telling video generation apart from understanding.
- **How to score:** Guidance. High when the team can name the few variables that matter and has data on them. Low when the plan is to model everything in full detail or to treat a plausible generated video as proof of understanding (S081).
- **Quote:** "world models should not be simulators. Right? They should work in abstract space. They should not be digital twins, you know, that's a buzzword." (S082)
- **Sources:** 19 (S009, S010, S019, S029, S030, S031, S032, S035, S045, S048, S051, S052, S053, S054, S058, S068, S081, S082, S096)

## 12. Language is the substrate test *(unnamed)*
- **What it is:** LLMs succeed where language itself carries the reasoning: text, code, math. Outside that, on continuous, noisy, high-dimensional signals like video and sensor data, they are close to useless. Language is a narrow, low-bandwidth channel, and most human knowledge is non-linguistic (S035, S087). Much of what looks like intelligence is retrieval of stored knowledge (S007).
- **Parts:** Is the input and output discrete symbols? Is the reasoning done by manipulating those symbols? Or does the task depend on the physical world?
- **When to use:** First question on any "can the tech do this" decision.
- **How to score:** Guidance. 5 for text, code, translation, search, and summarizing. 3 for tasks where text describes a physical process and a human checks. 1 for real-world sensor control, robotics, or anything that needs common sense about physics from an LLM.
- **Quote:** "LLMs are particularly successful at domains where the language itself is the substrate of reasoning. Uh not for anything else." (S001)
- **Sources:** 19 (S001, S007, S015, S023, S024, S025, S030, S035, S037, S040, S046, S053, S059, S060, S065, S068, S087, S090, S092)

## 13. Data bandwidth argument (the four-year-old) *(unnamed)*
- **What it is:** A four-year-old has taken in about 10^14 bytes through vision in 16,000 waking hours, the same order as all the public text used to train the biggest LLMs. The child learns intuitive physics; the LLM does not. So more text will not get you there, and public text is nearly used up. Video is plentiful: 16,000 hours is about 30 minutes of YouTube uploads (S061). His figures vary by talk (10^14 versus 10^15 bytes, S037, S051).
- **Parts:** Count the data; compare what each learner can do; conclude that the architecture and learning objective, not data volume, are the bottleneck.
- **When to use:** When a plan assumes the next model will be much better simply because it is bigger or trained on more text.
- **How to score:** Guidance. Lower the score for any plan whose viability depends on scaling LLMs past their current limits on physical or common-sense tasks.
- **Quote:** "A four-year-old has seen as much data through vision as the biggest LLMs trained on all the publicly available text." (S051)
- **Sources:** 16 (S006, S011, S014, S015, S029, S031, S037, S045, S051, S056, S058, S060, S061, S081, S082, S084)

## 14. Four characteristics of intelligent behavior (capability checklist)
- **What it is:** What any smart animal has and current LLMs lack: understanding of the physical world, persistent memory, reasoning, and planning, plus controllability and safety as a fifth in the AMI plan (S053). He says this list has not changed since before LLMs.
- **Parts:** Physical world understanding; persistent memory; reasoning; hierarchical planning; controllability and safety.
- **When to use:** As a checklist against a product's requirements. If the product needs any of these done reliably, an LLM alone will not deliver it today.
- **How to score:** Guidance. Count how many of the four the product needs the model itself to do. Zero: buildable now. One or two: buildable with external memory, tools, and human checks. Three or four: research, not product.
- **Quote:** "We need machines that understand the physical world. We need machines that are capable of reasoning and planning. We need machines that have persistent memory. And we need those machines to be controllable and safe." (S012)
- **Sources:** 13 (S010, S011, S012, S014, S017, S019, S020, S031, S033, S047, S053, S054, S060)

## 15. System 1 and System 2: reasoning is search (after Kahneman)
- **What it is:** System 1 is fast, reactive, compiled habit. System 2 is slow, deliberate search using a model of the world. LLMs are System 1: they spend the same computation on every token whatever the difficulty. Chain of thought tricks the model into generating more tokens; it is not real System 2. Reasoning is search for an answer that minimizes a cost, and it should take more compute on harder problems.
- **Parts:** Reactive policy; deliberate planning by optimization; moving skills from System 2 to System 1 with practice.
- **When to use:** When a vendor claims its model "reasons." Ask whether the system searches and checks, or just generates longer.
- **How to score:** Guidance. Credit products that pair a generator with an explicit search, checker, solver, or test suite. Discount products that equate "reasoning mode" with reliability. He notes "test-time compute" is classical model predictive control from the 1960s (S086).
- **Quote:** "The way you coerce an LLM to do reasoning is that you trick it into generating more tokens. But, that's not the way we reason." (S082)
- **Sources:** 18 (S009, S012, S013, S015, S016, S019, S020, S023, S029, S047, S054, S058, S073, S081, S082, S084, S087, S088)

## 16. AI as amplifier: everyone manages a staff *(unnamed)*
- **What it is:** AI will not replace people; it will amplify them. Each person becomes the boss of a staff of smart virtual assistants, sets the goals, and decides. That the staff may be smarter is the point, as with any good manager (S046). Jobs shift up a level of abstraction. On jobs, ask economists, not AI scientists; they expect gradual gains, not mass unemployment (S045).
- **Parts:** Human sets objectives; AI executes; human stays accountable.
- **When to use:** Product design for knowledge work, pricing around seats versus outcomes, and workforce or hiring decisions tied to AI.
- **How to score:** Guidance. High for products that make a skilled person faster and keep them in charge. Lower for products whose value depends on fully removing the human from consequential decisions.
- **Quote:** "Every one of us is going to be a manager of a staff of you know intelligent machines. They'll do our bidding. They might be smarter than us" (S046)
- **Sources:** 14 (S006, S007, S011, S017, S018, S019, S021, S022, S032, S045, S046, S053, S059, S062)

## 17. Regulate products, not research
- **What it is:** Regulate what reaches people, like drugs, cars, and planes; most of that regulation already exists (S057). Do not regulate research and development or base models, and do not cap training compute; he sees such limits as regulatory capture that kills small open-source players. When a deployed product causes real harm, stop that product, not the field.
- **Parts:** Product rules by sector; free R&D and open base models; respond to actual harm at deployment.
- **When to use:** Regulatory risk questions, compliance strategy, choosing a market (he says Europe is "shooting itself in the foot," S010).
- **How to score:** Guidance. High if the plan complies at the product level and does not depend on lobbying for or against research rules. Note his bias: he treats doom-driven regulation as mostly hype and may underweight real compliance cost. He concedes Meta itself might change its open policy if liability ran down the supply chain (S057).
- **Quote:** "I'm I'm all for regulating products that gets in the hands of people uh I don't see the point of uh regulating uh research and development" (S022)
- **Sources:** 12 (S010, S018, S021, S022, S030, S031, S039, S054, S056, S057, S061, S066)

## 18. Technology comes before theory (the street light effect)
- **What it is:** Working artifacts come before the science that explains them: the steam engine before thermodynamics, the airplane before aerodynamics. A field that works only on what it can prove falls into the "theoretical street light effect," as machine learning did when it left neural nets for SVMs in the 1990s. Theory's job is to make empiricism efficient, not to veto results.
- **Parts:** Build; measure; keep what works; let theory catch up; audit hardware, data, and tools before declaring an approach dead (S093).
- **When to use:** When a team or investor rejects a working method for lack of theory, or when a technical bet is being written off after one bad run.
- **How to score:** Guidance. Credit methods with solid empirical results even if poorly understood. Before scoring an approach as failed, ask whether the hardware, data, and tooling were adequate.
- **Quote:** "machine learning fell victim to the theoretical street light effect" (S090)
- **Sources:** 10 (S005, S072, S076, S077, S088, S089, S090, S092, S093, S097)

## 19. Mountain range: it is always harder than we think *(unnamed)*
- **What it is:** Researchers see the first mountain, not the 50 behind it. For 70 years every new AI paradigm has been declared the path to human-level AI, five or six times over, and every time it was wrong (S045). Progress is continuous, not one event or one secret. He applies this to himself: "I'm probably making the same mistakes right the same mistake right now." (S049)
- **Parts:** Name the visible obstacle; assume unseen ones; discount the timeline; expect a long tail.
- **When to use:** Any plan or pitch that depends on a capability arriving by a date.
- **How to score:** Guidance. Lengthen any capability timeline the plan depends on. Do not fund a team claiming the secret: "if a start-up tells you they have the secret to you know human level intelligence and common sense don't believe them they don't" (S026).
- **Quote:** "there is a bunch of mountains that we have to climb and we can see the first one but we don't know if there are 50 mountains behind it or not" (S026)
- **Sources:** 15 (S007, S009, S011, S012, S013, S015, S019, S020, S026, S045, S049, S054, S061, S081, S093)

## 20. The research to product relay, with a long leash *(unnamed)*
- **What it is:** A chain from blue-sky research (small teams, long leash, three to ten year horizon), to applied research that pushes an idea to a working demo without product deadlines, to engineering for product. The middle stage needs its own protected group. When it is removed or put under product pressure, the chain breaks. He saw it at AT&T (patents stranded at NCR) and at Meta (GenAI under short-term pressure). At FAIR, two-thirds of work was bottom-up (S067).
- **Parts:** Hire the best and let them pick problems; protected applied stage; product engineering; clean hand-offs.
- **When to use:** A company that has a research asset and is trying to turn it into a product, structuring an R&D group, or splitting or merging teams.
- **How to score:** Guidance. Lower the score when there is no one whose job is to carry the idea from demo to product, when a reorganization splits the people who understand the technology from the people who sell it, or when breakthrough research is expected on a three-month cadence. He warns "making a product out of an impressive technology is not simple" (S055).
- **Quote:** "That is where a lot of projects fail. That's That's where a lot of companies kind of fail to pick up." (S001)
- **Sources:** 14 (S001, S002, S005, S009, S013, S015, S016, S025, S027, S047, S055, S057, S064, S067)

## 21. Open foundation, vertical fine-tune (the two tricks) *(unnamed)*
- **What it is:** His direct advice to AI founders with limited capital. Trick one: use open engines (Llama, DINO, SAM); you will not train your own foundation model. Trick two: specialize for a vertical; most businesses need an existing model customized to their domain. A foundation model is infrastructure, not a product. He warns that raising a billion to train one burns it in about two years (S055). The same advice goes to governments: fine-tune open models for your language rather than build your own (S056, S061).
- **Parts:** Open base model (Llama is "like Linux"); vertical data and fine-tuning; domain expertise as the moat.
- **When to use:** "Should we build on GPT or Claude, or on an open model?" "Should we train our own model?" Also when a founder compares raw benchmark scores of a base model with a finished product.
- **How to score:** Guidance. High if the founder owns domain data and expertise and treats the model as replaceable infrastructure. Low if the product is a thin wrapper on someone else's API with no vertical depth, or if the plan spends most of the raise on pretraining. Frontier pretraining needs roughly a 16,000 GPU cluster, about $1 billion (S061).
- **Quote:** "trick number one use open source engines because you're not going to Train Your Own Foundation model" (S055)
- **Sources:** 7 (S012, S017, S019, S032, S055, S056, S061)

## 22. Deploy small, measure, correct (the turbojet path) *(unnamed)*
- **What it is:** Safety and reliability come from decades of incremental engineering, as with turbojets: you could not make a two-engine transpacific flight safe in 1925 because the engine did not exist yet. Build less powerful systems first, add guardrails, deploy small, measure the effects, correct, then scale. Test at sub-scale without real power before deployment (S095).
- **Parts:** Small deployment; measurement of effects; correction; gradual increase in capability with guardrails kept.
- **When to use:** Launch plans for AI features, especially in regulated or high-stakes settings; answering "is this safe enough to ship."
- **How to score:** Guidance. High if the launch is staged, measured, and reversible. Low if the plan ships a consequential AI system to everyone at once with no way to watch or roll it back.
- **Quote:** "you deploy a system and then you have to measure the effect and you want to deploy it in a small way so that you see the effect before if there are bad effects you can correct them" (S067)
- **Sources:** 7 (S021, S045, S059, S062, S063, S067, S095)

## 23. Exponential error in autoregressive generation *(unnamed)*
- **What it is:** Each token an LLM produces has some chance e of leaving the set of correct answers. If those errors are roughly independent, the chance that a long output is fully correct is about (1 minus e) to the power n, falling exponentially with length. Hallucination is structural, not a bug that fine-tuning removes.
- **Parts:** Per-token error rate; output length; compounding.
- **When to use:** Long, unchecked outputs: multi-step agents, long documents, code that runs without review, medical or legal answers.
- **How to score:** Guidance. High if outputs are short or each step is verified. Low if a long chain of generated steps runs with no check in between.
- **Quote:** "Even if E is really small, this has got to diverge exponentially and it's not fixable within the context of auto reggressive prediction." (S085)
- **Quote:** "So the probability that a sequence of words will be kind of a correct answer to the question decreases exponentially with the length of the answer" (S031)
- **Sources:** 8 (S001, S020, S023, S029, S031, S085, S088, S099)

## 24. Build your own tools (tools as a moat) *(unnamed)*
- **What it is:** Purpose-built tools let a team do what rivals cannot. He and Leon Bottou built the SN and Lush simulators in the 1980s, the root of Torch and PyTorch, and could train convolutional nets for years before anyone else. Then open the tools, because work others cannot reproduce gets ignored (S090).
- **Parts:** Build the tool you need; use the head start; open it so the field adopts your approach.
- **When to use:** Deciding whether to build internal infrastructure, and whether to open-source it.
- **How to score:** Guidance. Credit a team whose own tooling gives it speed others lack. Credit opening that tooling when adoption matters more than secrecy.
- **Quote:** "building your own tools give you superpowers that other people don't have" (S090)
- **Sources:** 5 (S054, S074, S078, S090, S094)

## 25. Hammer and nail (the herd effect)
- **What it is:** When you hold a powerful tool, everything looks like a nail. Silicon Valley is "digging the same trench" with LLMs. Breakthroughs come from stepping outside the herd; neural nets in the early 1980s were "not a niche it was a cult" (S090). Being far from the center meant no one could redirect him (S078).
- **Parts:** Notice the herd; ask what the current tool cannot do; consider the bet everyone else is skipping.
- **When to use:** Choosing a technical direction or a market where every competitor uses the same approach.
- **How to score:** Guidance. Credit a contrarian bet only when it rests on a mechanism and evidence, not just on being different. He describes his own career as one spent a little outside the mainstream (S032).
- **Quote:** "there is this herd effect that or the it's the the hammer and nail effect, right? When when you have a hammer in your in your hand, everything looks like a nail." (S010)
- **Sources:** 8 (S001, S005, S010, S032, S045, S058, S078, S090)

---

## Where these frameworks show their limits
- Most of his frameworks are about what AI cannot do yet. His own forecasts on product timing have run slow: he says he was too pessimistic about how fast face recognition would become practical at Facebook (S016, S032).
- In 2023-09 he predicted that "within a few years, nobody in their right mind would use autoregressive LLMs." (S033). He repeated it in an undated lecture: "autogressive LLMs are doomed a few years from now. Nobody in their right mind will use them." (S085), with windows of three to five years (S087) or "as short as two years" (S088). Newer (2026): he calls LLMs "the basis for a lot of uh very useful AI products that all of us use, including me." (S001). Treat "LLMs are a dead end" as a claim about the path to human-level AI, not about whether an LLM product can make money.
- He expected self-supervised learning to break through first on video; it broke through on language instead (S001). For years he himself trained video prediction at the pixel level before reversing (S045, S084).
- He changed his own method around 2021 and 2022, moving from generative latent variable models to joint embedding (S024, S073, S099).
- He is open that the newest pieces (SigReg, distillation, hierarchical world models, the configurator) work only at small scale, are not fully understood, or are not built (S009, S029, S031, S082, S099). AMI Labs had no public demonstration of world models at scale as of early 2026 (S040).
- He dismisses interpretability as unimportant (S077, S090), which fits badly with buyers in medicine, credit, or law who must explain decisions.
- He calls himself a scientist, not an operator, and says he is "not an operational person" at AMI Labs (S009). His frameworks say little about sales, pricing, or go-to-market. Inferred from S001, S009, S016, S040.
