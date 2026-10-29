# Frameworks: Andrew Ng

Built from 56 sources (talks, interviews, podcasts, and The Batch letters, 2017 to 2026). 25 frameworks, roughly most-used first. "Sources" counts distinct sources where the idea is used (ids listed). Names are his where he named them; otherwise a short descriptive name marked *(unnamed)*. The How-to-score lines are scoring guidance for the council built from his stated numbers, not quotes.

---

## 1. AI is the new electricity: build at the application layer *(AI stack)*
- **What it is:** AI is a general purpose technology like electricity. The stack runs semiconductors, cloud, foundation models, orchestration, then applications. The applications must earn more than every layer below them, so the biggest and least crowded opportunities are at the top.
- **Parts:** Hardware and infrastructure are capital intensive and concentrated; developer tools are hypercompetitive; the application layer has large markets and light competition. Thin wrappers on someone else's API are not a business; a thicker layer (workflow, data, domain) can be.
- **When to use:** A founder asks whether to train a model, build infrastructure, or build a product on top of models. Any fear that "the big labs will wipe us out".
- **How to score:** 5 if the plan is an application with domain depth that gets better as models get cheaper; 3 if it is useful but a thin layer over one API; 1 if a small company plans to compete on foundation models or training infrastructure without billions in capital.
- **Quote:** "almost by definition, the biggest opportunities have to be at the application layer because we actually need the applications to generate even more revenue so that they can afford to pay the foundation cloud and semiconductor technology layers." (S001)
- **Sources:** 13 (S001, S003, S008, S013, S017, S018, S021, S033, S034, S035, S051, S052, S057)

## 2. Execution speed *(unnamed; his top predictor of startup success)*
- **What it is:** If he must pick one trait that predicts whether a startup wins, it is speed: making good decisions and executing fast. Technical knowledge is the second predictor, because it is what keeps speed from running into blind alleys.
- **Parts:** Concrete ideas; a domain expert's gut for fast calls; AI-assisted coding for prototypes; user feedback in hours or days, not weeks; deep technical understanding of what AI can and cannot do.
- **When to use:** Any plan with a long study phase, a long approval chain, or a launch date months out.
- **How to score:** He says a team that knows what it is doing executes "10 times faster" (S020). Score 5 if the team can test the core idea this week; 3 if it takes a month; 1 if nothing reaches a real user for a quarter or more.
- **Quote:** "a strong predictor for startup's odds of success is execution speed" (S001)
- **Sources:** 8 (S001, S006, S012, S020, S028, S029, S030, S033)

## 3. The product management bottleneck *(his term; build, feedback, repeat loop)*
- **What it is:** The startup loop is write software, get user feedback, decide what to change, repeat. AI made the build step 10x faster, so the binding constraint moved to deciding what to build and getting feedback.
- **Parts:** Engineers take on part of the product role; product managers move faster on gut plus customer empathy; PM to engineer ratios shift from about 1 to 6 or 8 toward 1 to 1 or even 2 PMs per engineer (S004). Later he names marketing, legal, and design as the next bottlenecks (S007).
- **When to use:** A team that ships fast but cannot say what users want; a hiring plan heavy on engineers and light on people who talk to customers.
- **How to score:** High if someone owns fast user feedback and decisions keep pace with building; low if code piles up untested by real users.
- **Quote:** "the speed of coding is accelerating the cost is falling and so increasingly the bottleneck is actually product management." (S012)
- **Sources:** 8 (S001, S004, S007, S011, S012, S028, S038, S050)

## 4. Workflow redesign: do it faster or do it more *(unnamed; growth over cost savings)*
- **What it is:** Swapping one human step for an AI step gives a small efficiency gain. The real value comes from rethinking the whole workflow so speed or scale changes the product itself. A 10-minute loan approval is a different product from a two-week one.
- **Parts:** Map the steps on the path to revenue; ask which step, if 10x faster or 1000x cheaper, would change what you sell or who you can serve; redesign upstream and downstream around it; aim at growth, which has no ceiling, not just cost.
- **When to use:** "Where should we use AI?" Any proposal that only automates one task inside an unchanged process.
- **How to score:** Bottom-up point solutions give about 5 to 10% efficiency (S016). Score 5 if the AI step changes the offer, the speed, or the market served; 3 if it is a clear cost saving; 1 if it is a tool license with no workflow change.
- **Quote:** "Swapping human review for AI review ... gives a minor efficiency gain but isn't transformative." (S027)
- **Sources:** 9 (S007, S013, S016, S027, S029, S049, S051, S057, S059)

## 5. Evals and error analysis *(unnamed process; "disciplined error analysis")*
- **What it is:** The single biggest predictor of how fast a team improves an AI system is a disciplined loop of evals and error analysis: find where the system falls short of a human expert, attribute the gap to a component, fix that.
- **Parts:** Build a prototype first; read a handful of outputs or traces by hand; write a quick, imperfect eval (even 5 examples, about 20 minutes); find the step most often worse than human level performance; fix it; grow the eval as the system matures. Do not stack buzzy techniques without this.
- **When to use:** An AI feature that "mostly works", a team arguing about which model or tool to try next, any plan to ship an agent to customers.
- **How to score:** 5 if the team has an eval set and can name the weakest component with numbers; 3 if they review outputs by eye; 1 if they change models and prompts at random.
- **Quote:** "the single biggest differentiator that I see in the market is does the team know how to drive a systematic error analysis process with eval." (S012)
- **Sources:** 8 (S006, S009, S012, S018, S036, S037, S054, S023)

## 6. Task-based analysis of jobs *(credits Erik Brynjolfsson)*
- **What it is:** AI automates tasks, not jobs. Break each job into tasks and ask which ones AI can automate or augment. Most jobs are about 30 to 40% automatable, which makes the remaining 60% more valuable, not obsolete.
- **Parts:** List the roles; split each into tasks; rate each task for AI fit; expect surprises (the iconic task is often not the easiest one); if a task becomes 1000x cheaper, consider doing it 1000x more.
- **When to use:** Hiring plans, cost cutting, "will AI replace this team", picking a first AI project.
- **How to score:** Guidance: a role where 30 to 40% of tasks are clear AI fits is a good augmentation target, not a headcount cut. Score low any plan that assumes whole jobs vanish.
- **Quote:** "AI automates tasks rather than jobs" (S057)
- **Sources:** 6 (S010, S011, S051, S057, S058, S015)

## 7. Concrete ideas *(his test of concreteness)*
- **What it is:** Work only on ideas specific enough that an engineering team could build a prototype. Vague ideas are rarely wrong and never buildable; concrete ones may be wrong, and you find out fast.
- **Parts:** "AI for livestock" is vague; face recognition to track individual cows is concrete (S030). Pursue one concrete hypothesis hard; if data says no, pivot to another concrete idea. Use a domain expert's gut to make it concrete quickly.
- **When to use:** A founder pitching a market or a theme instead of a product.
- **How to score:** 5 if a team could start building tomorrow; 1 if the idea is a sector plus "with AI".
- **Quote:** "One test of concreteness is whether you've specified the idea in enough detail that a product/engineering team could build an initial prototype." (S030)
- **Sources:** 6 (S001, S008, S028, S030, S031, S047)

## 8. Many cheap prototypes *(unnamed; build 20, keep 2)*
- **What it is:** When a prototype costs a weekend, stop studying and build many. Expect most to die. Drive the cost of each proof of concept toward zero so the losers do not matter.
- **Parts:** Build 10 or 20 versions; ship to users; keep what sticks; spend effort lowering the cost per test, not raising the hit rate.
- **When to use:** Feature choices, positioning, early product direction, any debate that a test could settle.
- **How to score:** Guidance from S004: finding 2 great ideas can cost 18 throwaways. Score high if the plan tests several options cheaply; low if it bets everything on one long build chosen by debate.
- **Quote:** "When you can test 20 ideas per month, it dramatically changes what you can do compared to testing 1 idea per month." (S029)
- **Sources:** 6 (S003, S004, S020, S029, S042, S050)

## 9. Agentic workflows and the four design patterns *(he coined "agentic")*
- **What it is:** Instead of prompting once, let AI work iteratively: outline, research, draft, critique, revise. Four patterns: reflection, tool use, planning, multi-agent collaboration. Reflection and tool use are reliable now; planning and multi-agent are less so. Talk about degrees of agency, not whether something "is an agent".
- **Parts:** Wrap a workflow around a model before buying a bigger model; add confirmation steps before irreversible actions; widen autonomy gradually inside a structured workflow.
- **When to use:** Any AI product design question, especially "do we need a better model".
- **How to score:** Guidance from S002: GPT-3.5 in an agentic workflow beat GPT-4 used zero-shot on coding. Score high if the design uses a workflow and guardrails; low if it hopes one prompt to the best model will do.
- **Quote:** "in the heart of agentic AI is the idea that instead of zero shot prompting or prompting a single time to do a work task we can have a more iterative process" (S054)
- **Sources:** 7 (S002, S003, S005, S006, S012, S018, S054, S055)

## 10. Prototype versus production *(POC versus production; match tactics to maturity)*
- **What it is:** Two kinds of work with different rules. A proof of concept exists to learn whether the thing is worth building, so speed wins. Production must be reliable, secure, documented, and monitored. Confusing them is one of the most common mistakes.
- **Parts:** Early: inspect about 12 examples, casual architecture, ask 2 or 3 people. Later: hundreds of test cases, a written rubric, alpha testers. Mature: tens of thousands of examples and A/B tests (S039). Prototypes are 10x faster with AI; production code is maybe 30 to 50% faster (S001).
- **When to use:** A team gold-plating an unproven idea, or shipping a demo to paying customers.
- **How to score:** Score low on both errors: over-designing early or under-designing a mature product.
- **Quote:** "It is not helpful to over-design at the early stages or under-design a mature product." (S039)
- **Sources:** 6 (S001, S019, S028, S039, S043, S046)

## 11. Build first, optimize cost later; design to future prices *(unnamed)*
- **What it is:** Use the best model to build something users love. Only when it works and the bill hurts, optimize cost. Token prices fall fast, so design for where prices are going.
- **Parts:** Validate on the best model; ignore cost and latency at first; deploy marginally uneconomic apps expecting prices to fall; when costs bite, apply cost-cutting hard.
- **When to use:** A founder delaying a product over API costs, or picking a weaker model to save money before product fit.
- **How to score:** Guidance: he cites prices falling about 79 to 80% a year (S032, S052). Score high if cost work waits for real usage; low if cost worry is blocking validation.
- **Quote:** "I advise teams to focus on building a useful application rather than on optimizing LLM costs." (S032)
- **Sources:** 6 (S018, S032, S033, S049, S052, S001)

## 12. Preserve optionality across models *(unnamed)*
- **What it is:** No one can say which model will lead in 6 or 12 months. Architect so switching is cheap, keep evals that tell you when a new model is better, and avoid long vendor lock-in.
- **Parts:** Evals that make switching a routine decision; a mix of proprietary and open-weight models; contracts no longer than one year.
- **When to use:** Vendor contracts, platform choices, multi-year AI deals with discounts.
- **How to score:** Guidance: he almost never signs past one year regardless of discount (S007). Score low any long lock-in to one model provider.
- **Quote:** "I personally almost never signed longer than a one-year contract, regardless of the discounts offered, because I value that optionality" (S007)
- **Sources:** 6 (S006, S007, S013, S017, S018, S032)

## 13. Domain expert plus AI *(unnamed; "my swim lane is AI")*
- **What it is:** The best applications pair someone with deep domain knowledge with someone who knows AI. Neither could build them alone, and rare combinations face little competition.
- **Parts:** Stay in your lane; find the partner who knows the industry; let the domain expert's gut make ideas concrete; the AI side checks feasibility.
- **When to use:** A technical founder with no domain partner, or a domain expert wondering whether they can build an AI company.
- **How to score:** High if the team has both deep domain knowledge and real AI skill; low if one is missing.
- **Quote:** "I would never come with this idea myself but I've learned that my swim lane is AI but when I work with experts in other sectors there are often these exciting opportunities" (S020)
- **Sources:** 6 (S008, S010, S020, S031, S051, S050)

## 14. Start small to build faith *(AI Transformation Playbook)*
- **What it is:** Inside a company, pick a first AI project that can succeed quickly, not the most important one. A visible win builds allies and spreads; then scale to bigger projects and train everyone.
- **Parts:** At Google Brain he started with speech, then Maps, and only then Ads (S019, S054). Pick first projects with a real shot at positive return; invest in company-wide training; let applications pull data infrastructure forward instead of rebuilding data for two years first.
- **When to use:** A company starting AI adoption, or a founder selling AI into an enterprise.
- **How to score:** High if the first project is small, winnable, and visible; low if it is a giant bet on the core revenue line or a two-year data project before any use case.
- **Quote:** "the first step is actually to start small" (S019)
- **Sources:** 4 (S019, S051, S054, S013)

## 15. Fast feedback tactics *(unnamed portfolio)*
- **What it is:** A ladder of ways to get product feedback, from fastest and least accurate to slowest and most accurate: your own gut if you are a domain expert, 3 friends or teammates, 3 to 10 strangers, 100 testers, A/B tests.
- **Parts:** Pick the fastest tactic that is good enough; use results from slower tactics to recalibrate your gut.
- **When to use:** Any choice between product options; a team waiting weeks for formal research.
- **How to score:** High if the plan gets real reactions within hours or days; low if feedback waits on a launch.
- **Quote:** "the fastest tactic for getting feedback is look at the product yourself and just go by your gut. And if you're a subject matter expert, this is actually surprisingly good" (S001)
- **Sources:** 4 (S001, S028, S039, S038)

## 16. Two-way doors and Ready, Fire, Aim *(borrows Bezos's term)*
- **What it is:** Most startup decisions are reversible: decide fast and change next week if wrong. When a shot is cheap, take many shots. When a decision is a costly one-way door, slow down and study.
- **Parts:** Classify the decision; for two-way doors, Ready, Fire, Aim; for one-way doors, Ready, Aim, Fire. With AI, code is cheaper to rebuild, so more decisions are two-way than before.
- **When to use:** A founder stuck deliberating.
- **How to score:** Penalize long deliberation on reversible choices and haste on irreversible ones.
- **Quote:** "when committing to a direction means making a costly investment or entering a one-way door (meaning a decision that's hard to reverse), it's often worth spending more time in advance to make sure it really is a good idea." (S042)
- **Sources:** 4 (S001, S010, S012, S042)

## 17. Data-centric AI *(his term; good data over big data)*
- **What it is:** Hold the model code fixed and systematically improve the data. Consistent labels and targeted data beat more data for most real-world problems, which have small datasets.
- **Parts:** Measure labeler agreement; write a label book; use error analysis to find the failing slice and collect data only for it; treat data work as the core job.
- **When to use:** An AI product stuck on accuracy, a founder who thinks they need millions of examples, or a "data moat" claim.
- **How to score:** Guidance from S024: a steel inspection team went from 76.2% to 93.1% in two weeks by fixing data after model changes gave nothing. Score high if the team works the data before swapping models.
- **Quote:** "i've been surprised over and over and how effective you can build a machine learning system with just you know 50 images so long as the data is well chosen and accurately labeled." (S023)
- **Sources:** 4 (S022, S023, S024, S059)

## 18. Verifiable versus unverifiable tasks and the human context advantage *(unnamed)*
- **What it is:** AI progresses fastest on tasks with an objectively right answer (code, math). It is much weaker on judgment tasks (strategy, marketing calls) where humans hold a large context advantage from years of experience.
- **Parts:** Sort tasks into verifiable and judgment; automate the first; keep humans in the loop on the second as long as they know something the AI does not.
- **When to use:** Deciding what to hand to AI and where to keep a human.
- **How to score:** High if the plan automates verifiable work and keeps human judgment on unverifiable calls; low if it hands strategy or customer judgment to a chatbot.
- **Quote:** "AI is very good at what they call verifiable tasks, meaning tasks with an objective right or wrong answers, because we have very good technology for making AI do well on those tasks." (S015)
- **Sources:** 4 (S011, S015, S038, S058)

## 19. Technical feasibility checks *(one-second rule, human-level performance, SOP test)*
- **What it is:** Quick heuristics for whether AI can do a task. 2017: anything a typical person can do with about one second of thought. Throughout: if no human can do it, AI will struggle. 2025: is it close to text processing, can the AI get the context a human would need, and can you write an SOP for it.
- **Parts:** Benchmark against human-level performance; check training versus test performance; check real-world data, not just the lab.
- **When to use:** Before committing to build an AI feature.
- **How to score:** High if a human does the task today and an SOP exists; low if no human can do it or the needed context has no data plumbing.
- **Quote:** "For problems that involve unstructured data (images, audio, text), if even humans can't perform the task, it will be very hard for AI to do it." (S044)
- **Sources:** 4 (S021, S044, S055, S037)
- **Dated:** the one-second rule is from 2017 (S021); the SOP and context checks are newer (S055, 2025) and fit the agentic era better.

## 20. The five-step corporate AI innovation process *(unnamed)*
- **What it is:** How a company finds and funds AI work: (1) train executives on what AI can and cannot do, (2) brainstorm use cases by task, broadly, (3) technical and business diligence, (4) decide build, buy, or spin out, (5) strategy and workforce training.
- **Parts:** Brainstorm wide (about 100 people who know the domain), make evaluation criteria explicit, pick a small portfolio of high-impact bets, buy what exists.
- **When to use:** A company with a long list of AI ideas and no way to choose.
- **How to score:** High if ideas are many, criteria explicit, and the final portfolio small; low if one executive's pet idea is the only option.
- **Quote:** "if you can buy I often advise Partners you just buy it" (S051)
- **Sources:** 4 (S007, S013, S031, S051)

## 21. AI Fund venture studio process *(unnamed)*
- **What it is:** How he builds startups: about a month validating technical feasibility and talking to prospective customers, recruit the CEO at the start, then about three months of two-week sprints on prototype and customer validation before a real check. About two thirds survive.
- **Parts:** Engage only on a concrete idea; validate both tech and market; start on the best model and ignore cost; community and persistence.
- **When to use:** A founder planning the first 90 days.
- **How to score:** High if the plan reaches a customer-validated prototype in about three months; low if it raises and builds for a year first.
- **Quote:** "we spend about a month validating the idea. So double check, is this idea even technically feasible, and then talk to prospective customers to make sure there is a market need." (S008)
- **Sources:** 3 (S008, S020, S033)

## 22. Small, high-context generalist teams *(unnamed)*
- **What it is:** With AI, 1 to 10 empowered generalists who code, do product, write copy, and draft legal terms can outrun larger teams. Hire AI for some headcount; hire people who build with AI for every role.
- **Parts:** Everyone codes with AI; ask candidates what they built; give wide guardrails. He says it is too early to call how small teams can stay (S012).
- **When to use:** Hiring plans, org design, "should I hire or use AI".
- **How to score:** High if new hires can build with AI and the team stays small; low if a plan adds people for work AI can do, or stays tiny while an incumbent closes in.
- **Quote:** "Frankly today, I would not hire a software engineer that does not know how to use AI tools in a very sophisticated way." (S016)
- **Sources:** 5 (S007, S011, S012, S016, S049)

## 23. Three-bucket AI investment view *(unnamed; bubble analysis)*
- **What it is:** AI is not one market. Applications are underinvested; inference capacity is still short; training infrastructure carries the most bubble risk.
- **Parts:** Judge each bucket on its own fundamentals; cheap overbuilt capacity would help application builders.
- **When to use:** Fundraising timing, "is AI a bubble", investing in infrastructure.
- **How to score:** Guidance: application bets score better than training-infrastructure bets for a small company.
- **Quote:** "AI isn't monolithic, and different areas look bubbly to different degrees." (S035)
- **Sources:** 3 (S017, S035, S049)

## 24. The long tail of AI projects *(unnamed)*
- **What it is:** A few billion-dollar AI projects sit at the head (ads, search, recommendations). Tens of thousands of roughly $5 million projects sit in the long tail (pizza demand, fabric inspection, crop monitoring), each needing customization. Their total value is huge and few people work on them.
- **Parts:** Vertical platforms and low-code tools let domain staff customize by providing data instead of code.
- **When to use:** A founder in a "boring" industry wondering if AI is worth it, or choosing a niche.
- **How to score:** High if the niche has real data and no one serving it; low if it chases the head against big tech.
- **Quote:** "So today there are millions of projects sitting on the tail of this distribution that no one is working on, but whose aggregate value is massive." (S022)
- **Sources:** 3 (S008, S022, S023)

## 25. Moats: from data flywheel to "overhyped" *(view changed)*
- **What it is:** 2017: the virtuous circle of AI, where the best product gets the most users, which gives the most data, which gives the best AI, is a defensible moat (S021). 2025 (newer): moats are overhyped; most businesses start with a product and grow a moat later, and moats depend on the industry, not on AI (S001, S049).
- **Parts:** Ask what the industry moat is (marketplace, brand, regulation); do not count software alone as a moat now.
- **When to use:** A founder delaying a launch to design a moat, or an investor asking about defensibility.
- **How to score:** Guidance: weight product traction now over a moat story; check the moat the industry has always had.
- **Quote:** "I find that moes tend to be overhyped" (S001)
- **Sources:** 3 (S001, S021, S049)

---

Also used, too thin for their own entry: the decision matrix of options against explicit criteria (S048); four startup success factors (domain problem, feasible AI hypothesis, large market, grit) (S047); the three recession-proof investments (deep tech, training, community) (S045); hard tech test, whether best-in-class technology decides success (S040).
