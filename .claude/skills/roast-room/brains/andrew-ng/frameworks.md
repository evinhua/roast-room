# Frameworks: Andrew Ng

Built from the notes on 125 usable sources (about 577,000 words: talks, interviews, podcasts, Stanford lectures, Machine Learning Yearning, the AI Transformation Playbook, and The Batch letters, 2013 to 2026). 25 frameworks, most-used first. "Sources" counts distinct sources where the idea is used (ids listed). Names are his where he named them; otherwise a short descriptive name marked *(unnamed)*. The How-to-score lines are scoring guidance for the council built from his stated numbers, not quotes. Many lectures and talks are undated in sources.md; dates given below come from the source title or text.

---

## 1. AI is the new electricity: build at the application layer *(AI stack)*
- **What it is:** AI is a general purpose technology like electricity. The stack runs semiconductors, cloud, foundation models, an agentic orchestration layer, then applications. The applications must earn more than every layer below them, so the biggest and least crowded opportunities are at the top. Others have already spent billions on the models, so experimenting at the top is cheap.
- **Parts:** Hardware and cloud are capital intensive and concentrated; developer tools are hypercompetitive; the application layer has large markets and light competition. Horizontal information discovery (ChatGPT, Gemini) is already hard to displace; coding is the clearest vertical, and finance, legal, marketing, and sales verticals are still forming (S083, S087). Thin wrappers on someone else's API are not a business; a thicker layer (workflow, data, domain) can be. The long tail: beyond a few billion-dollar AI projects (ads, search) sit tens of thousands of roughly $5 million projects (pizza inspection, crop monitoring, material grading) that no one serves (S008, S022, S023, S073).
- **When to use:** A founder asks whether to train a model, build infrastructure, or build a product on top of models. Any fear that the big labs will wipe them out. A founder in a "boring" industry wondering if AI is worth it.
- **How to score:** 5 if the plan is an application with domain depth that gets better as models get cheaper; 3 if it is useful but a thin layer over one API; 1 if a small company plans to compete on foundation models or training infrastructure without billions in capital, or to fight the horizontal giants head on.
- **Quote:** "almost by definition, the biggest opportunities have to be at the application layer because we actually need the applications to generate even more revenue so that they can afford to pay the foundation cloud and semiconductor technology layers." (S001)
- **Sources:** 21 (S001, S003, S008, S013, S017, S018, S021, S022, S023, S033, S034, S035, S051, S052, S057, S073, S076, S081, S087, S089, S090)


## 2. Execution speed *(unnamed; his top predictor of startup success)*
- **What it is:** If he must pick one trait that predicts whether a startup or a project wins, it is speed: good decisions made fast and executed fast. Technical depth is the second predictor, because it keeps speed from running into blind alleys. The point is not hours saved; a team that is 2x slower on every loop becomes a 2x slower company, and the gap compounds.
- **Parts:** Concrete ideas; a domain expert's gut for fast calls; AI-assisted coding for prototypes; user feedback in minutes or hours, not weeks (he wants feedback at 9:20 for a 9:00 build, not at 1:00, and calls that a 12x edge, S084); a daily loop where experiments run overnight and error analysis happens the next morning (S066, S079); systems built so researchers and builders get results fast (S082).
- **When to use:** Any plan with a long study phase, a long approval chain, or a launch date months out. Any team that holds meetings to decide what an experiment could settle.
- **How to score:** He says a team that knows what it is doing executes "10 times faster" (S020). Score 5 if the team can test the core idea this week; 3 if it takes a month; 1 if nothing reaches a real user for a quarter or more.
- **Quote:** "a strong predictor for startup's odds of success is execution speed" (S001) "the difference is not that you wasted 12 hours, the difference you are twice as slow as a company" (S068)
- **Sources:** 17 (S001, S006, S012, S020, S028, S029, S030, S033, S064, S065, S066, S068, S072, S073, S082, S084, S086)


## 3. Evals and error analysis *(unnamed process; "disciplined error analysis")*
- **What it is:** The single biggest predictor of how fast a team improves an AI system is a disciplined loop of evals and error analysis: build something basic fast, find where it falls short of a human expert, attribute the gap to a component, fix that. He treats building AI as debugging, not development: fix one problem, the next one surfaces, repeat.
- **Parts:** Build a basic system in days (S060); hand-read about 100 failures in a spreadsheet and count them by category, which takes under two hours (S060); estimate the ceiling, the most a perfect fix could gain, before spending a month on it (S060); in a pipeline, check each step's output and invest in the step with the largest share of errors (S066, S121); write a quick, imperfect eval (even 5 examples, about 20 minutes) and improve the eval in parallel with the system (S006, S114); an eval is wrong when it ranks two systems opposite to a skilled human (S114). Do not collect data blindly; collect only for the slice that fails (S065).
- **When to use:** An AI feature that "mostly works", a team arguing about which model or tool to try next, a plan to spend months on one fix, any plan to ship an agent to customers.
- **How to score:** 5 if the team has an eval set and can name the weakest component with numbers; 3 if they review outputs by eye; 1 if they change models and prompts at random or launch a month-long fix without a ceiling estimate.
- **Quote:** "the single biggest differentiator that I see in the market is does the team know how to drive a systematic error analysis process with eval." (S012) "Manually examining 100 examples does not take long. Even if you take one minute per image, you'd be done in under two hours. These two hours could save you a month of wasted effort." (S060)
- **Sources:** 17 (S006, S009, S012, S018, S023, S036, S037, S054, S060, S065, S066, S068, S070, S079, S114, S121, S123)


## 4. Many cheap prototypes *(unnamed; build 20, keep 2)*
- **What it is:** When a prototype costs a day or a weekend, stop studying and build many. Expect most to die. Drive the cost of each proof of concept toward zero so the losers do not matter. If a build used to take 6 months, plan carefully; if it takes a day, build it and see (S123).
- **Parts:** Build 10 or 20 versions; ship to users; keep what sticks; spend effort lowering the cost per test, not raising the hit rate. Cut scope until it fits the time you have, for example a Wizard of Oz version with the AI removed (S104). Iterate on a rough spec: 10 minutes on an inferior spec, see what the agent built, refine, repeat, because AI tokens are cheap and human tokens are gold (S109). Iteration pays when there is real uncertainty about users or data and each attempt is cheap (S118).
- **When to use:** Feature choices, positioning, early product direction, any debate that a test could settle.
- **How to score:** Guidance: 2 great ideas can cost 18 throwaways (S004, S081); AI Fund budgets $55,000 for a working prototype of a new application (S076); a falsified idea should cost about two days and $5,000 (S072). Score high if the plan tests several options cheaply; low if it bets everything on one long build chosen by debate.
- **Quote:** "When you can test 20 ideas per month, it dramatically changes what you can do compared to testing 1 idea per month." (S029) "Why don't we build 20 things, and if that's the price of discovering the two that are really valuable, to then take to scale, that's fine." (S081)
- **Sources:** 17 (S003, S004, S020, S029, S042, S050, S064, S072, S076, S081, S086, S089, S090, S104, S109, S118, S123)


## 5. The product management bottleneck *(his term; build, feedback, repeat loop)*
- **What it is:** The startup loop is write software, get user feedback, decide what to change, repeat. AI made the build step 10 to 100x faster, so the binding constraint moved to deciding what to build and getting feedback. As coding speeds up, every neighbor (design, marketing, legal) becomes the next bottleneck in turn (S007, S107).
- **Parts:** Engineers take on part of the product role and product people learn to build; engineer to PM ratios move from about 8 to 1 toward 1 to 1 or one person doing both (S004, S085, S107); use user data to update your mental model of the user, not to make the next decision mechanically (data to intuition, then gut decides, S086, S103); automate decisions only when they are too many for a person (ad targeting, S103). Engineers with user empathy beat engineers who wait for a pixel-perfect spec (S088).
- **When to use:** A team that ships fast but cannot say what users want; a hiring plan heavy on engineers and light on people who talk to customers.
- **How to score:** High if someone owns fast user feedback and decisions keep pace with building; low if code piles up untested by real users.
- **Quote:** "the invention of agentic coding assistants has led to a new builder's block, where the holdup is deciding what to build. I call this the Product Management Bottleneck." (S103)
- **Sources:** 15 (S001, S004, S007, S011, S012, S028, S038, S050, S080, S085, S086, S088, S103, S107, S109)


## 6. Agentic workflows and the four design patterns *(he coined "agentic")*
- **What it is:** Instead of prompting once, let AI work iteratively: outline, research, draft, critique, revise. Four patterns: reflection, tool use, planning, multi-agent collaboration. Reflection and tool use are reliable now; planning and multi-agent are less so. Talk about degrees of agency, not whether something "is an agent". As models improve, strip out step-by-step scaffolding written 6 to 12 months ago (S071).
- **Parts:** Wrap a workflow around a model before buying a bigger model; pair a builder step with a test step that feeds failures back (S091); add confirmation steps before irreversible actions; widen autonomy gradually inside a structured workflow; mirror the steps a human expert takes today (S071).
- **When to use:** Any AI product design question, especially "do we need a better model".
- **How to score:** Guidance from S002 and S124: GPT-3.5 in an agentic workflow beat GPT-4 used zero-shot on a coding benchmark (95.1% versus 67.0%, S124). Score high if the design uses a workflow and guardrails; low if it hopes one prompt to the best model will do.
- **Quote:** "This is akin to asking someone to compose an essay from start to finish, typing straight through with no backspacing allowed." (S124)
- **Sources:** 14 (S002, S003, S005, S006, S012, S018, S054, S055, S071, S076, S089, S091, S092, S124)


## 7. AI-native teams: small, high-context, generalist *(his phrase "AI native"; People, Projects, Platforms, Processes)*
- **What it is:** An AI-native team is not an old org sprinkled with AI tools. It is rebuilt around the new bottlenecks: a few empowered generalists who code with AI, do product, and own decisions. A pod of 2 or 3 engineers delivers in a month what 10 engineers once did in 6 (S088).
- **Parts:** The Four Ps for converting a team: People (individual AI proficiency), Projects (top-down backing for growth projects), Platforms (data and tools agents can use), Processes (workflows rebuilt around the new bottleneck) (S127); a shorter People, Process, Platform checklist for large companies (S102). Everyone codes with AI, including non-engineers (S105); hire for agency by asking what candidates built without being told (S087); aim for about a third of the executive team to be AI native (S084); leaders must build personally (S127). Co-locate for speed; he now leans toward in-person teams more than he used to (S084, S107).
- **When to use:** Hiring plans, org design, "should I hire or use AI", a founder adding headcount for work AI can do.
- **How to score:** High if new hires can build with AI and the team stays small and empowered; low if a plan adds people for work AI can do, keeps engineers waiting on specs, or stays tiny while an incumbent closes in. He says it is too early to call how small teams can stay (S012).
- **Quote:** "AI native teams are not just old-style orgs that use a bunch of AI tools. AI native teams are teams that are rebuilt from scratch around where the new bottlenecks are" (S084)
- **Sources:** 14 (S007, S011, S012, S016, S049, S084, S085, S087, S088, S093, S102, S105, S107, S127)


## 8. Move fast and be responsible: the sandbox *(his mantra; sandbox named in S081, S102)*
- **What it is:** He rejects "move fast and break things" and also rejects slow approval chains. Write rules up front that cap the downside, then let a small team move with no sign-offs inside them. Harden for security, reliability, and brand only once a prototype shows promise.
- **Parts:** Sandbox rules: internal users or NDA alpha testers only, a separate brand, a fixed budget, no sensitive data (S081, S102); inside the sandbox, insecure throwaway code is fine (S089); you do not need permission for experiments that harm no one (S083, S087, S090); kill ideas that would make people worse off, even when profitable (S008, S073, S077); speed does not excuse skipping responsible review where harm is possible (S123).
- **When to use:** A large company where an MVP needs five VP sign-offs; a founder worried about risk before any user has seen the product; any ethically mixed idea.
- **How to score:** High if experiments run inside written guardrails with no approval queue and harden before scale; low if every test needs sign-off, or if a prototype goes to the public untested.
- **Quote:** "They can create a sandbox environment for teams to experiment in a way that strictly limits the downside risk. Then those teams can go much faster and not have to slow down to get anyone's permission." (S102)
- **Sources:** 14 (S001, S008, S010, S064, S073, S076, S077, S081, S083, S086, S087, S089, S090, S102)


## 9. Match tactics to maturity, and the feedback ladder *(unnamed; "stage dependent")*
- **What it is:** A proof of concept exists to learn whether the thing is worth building, so speed wins. Production must be reliable, secure, documented, and monitored. The right tactics change as a project matures; staying only on fast tactics plateaus, staying only on slow ones kills speed (S084).
- **Parts:** Early: inspect about 12 examples, casual architecture, ask 2 or 3 people. Later: hundreds of test cases, a written rubric, alpha testers. Mature: tens of thousands of examples and A/B tests (S039). Feedback ladder, fastest to slowest: your own gut if you are a domain expert, teammates, 3 to 10 strangers, 100 users over two days, A/B tests on 1,000 users over a week (S001, S084, S086). Prototypes are 10x faster with AI; production code is maybe 30 to 50% faster (S001, S089). Low-risk apps can deploy without a test set and monitor live; high-risk ones (health, finance, justice) still need a rigorous test set (S122).
- **When to use:** A team gold-plating an unproven idea, a team waiting weeks for formal research, or a team shipping a demo to paying customers.
- **How to score:** Score low on both errors: over-designing early or under-designing a mature product. Score high if feedback arrives within hours or days at the early stage.
- **Quote:** "It is not helpful to over-design at the early stages or under-design a mature product." (S039) "one of the hardest things about executing this is the best tactics are very stage dependent" (S084)
- **Sources:** 13 (S001, S019, S028, S038, S039, S043, S046, S080, S084, S086, S089, S109, S122)


## 10. Data layer you control *(unnamed; what makes an AI company)*
- **What it is:** A traditional company plus a few neural networks is not an AI company, just as a shop with a website was not an internet company. An AI company acquires data on purpose, keeps it in unified stores both people and agents can query, and owns that layer so it can switch vendors.
- **Parts:** Tear down silos; 50 warehouses under 50 VPs block every project (S098, S112); keep the data layer yourself and pay vendors to operate on it (S083); make repositories, docs, and tickets reachable by agents with governance (S084, S127); bring the AI team in while you decide what data to collect (S061); build data infrastructure for a specific use case, not as a generic cleanup with no stopping point (S054, S094, S095); push decisions to engineers and PMs (S069, S099). Where IT has not digitized the work yet, digitize first (S098).
- **When to use:** A data warehouse project, a vendor that wants to hold your data, "are we an AI company".
- **How to score:** High if the company owns a unified, queryable data layer tied to live use cases; low if vendors hold the data or the plan is a multi-year cleanup with no application pulling it.
- **Quote:** "I tend to control my own data layer when I can and hire vendors, happy to pay them to operate on my data that I retain flexibility to route to whatever software I want." (S083)
- **Sources:** 12 (S054, S061, S069, S081, S083, S084, S094, S095, S098, S099, S112, S127)


## 11. Workflow redesign: do it faster or do it more *(unnamed; growth over cost savings)*
- **What it is:** Swapping one human step for an AI step gives a small efficiency gain. The real value comes from rethinking the whole workflow so speed or scale changes the product itself. A 10-minute loan approval is a different product from a two-week one. Bottom-up experiments produce point solutions; redesign takes a leader with scope over all the steps.
- **Parts:** Map the steps on the path to revenue; ask which step, if 10x faster or 1000x cheaper, would change what you sell or who you can serve; redesign upstream and downstream around it; aim at growth, which has no ceiling, not just cost. Keep bottom-up experiments, then add top-down backing to scale the best ones (S088, S127).
- **When to use:** "Where should we use AI?" Any proposal that only automates one task inside an unchanged process.
- **How to score:** Bottom-up point solutions give about 5 to 10% efficiency (S016). Score 5 if the AI step changes the offer, the speed, or the market served; 3 if it is a clear cost saving; 1 if it is a tool license with no workflow change.
- **Quote:** "Swapping human review for AI review ... gives a minor efficiency gain but isn't transformative." (S027) "It turns out that most bottom-up innovation results in point solutions." (S088) "Far too many businesses are still thinking of AI as primarily a way to increase efficiency and save costs." (S127)
- **Sources:** 11 (S007, S013, S016, S027, S029, S049, S051, S057, S059, S088, S127)


## 12. Domain expert plus AI *(unnamed; "my swim lane is AI")*
- **What it is:** The best applications pair someone with deep domain knowledge with someone who knows AI, side by side in one team, not in sequence. Neither could build them alone, and rare combinations face little competition.
- **Parts:** Stay in your lane; find the partner who knows the industry; let the domain expert's gut make ideas concrete; the AI side checks feasibility. Defer to the person with years on the problem; insist only where you hold the expertise (S074). Domain knowledge advantage is one of his five tests for a good project (S067).
- **When to use:** A technical founder with no domain partner, or a domain expert wondering whether they can build an AI company.
- **How to score:** High if the team has both deep domain knowledge and real AI skill; low if one is missing.
- **Quote:** "I would never come with this idea myself but I've learned that my swim lane is AI but when I work with experts in other sectors there are often these exciting opportunities" (S020)
- **Sources:** 11 (S008, S010, S020, S031, S050, S051, S067, S074, S079, S096, S126)


## 13. Brainstorm wide, diligence both ways *(unnamed; corporate innovation and AI Fund studio process)*
- **What it is:** How he picks what to build. Start from the business problem, not the AI. Generate many ideas, test each for technical and business sense, then commit to a small portfolio. AI Fund runs the same loop for startups.
- **Parts:** Corporate: (1) train executives on what AI can and cannot do, (2) brainstorm use cases by task, at least half a dozen and often many more with explicit criteria, (3) a few weeks of technical and business diligence, (4) decide build, buy, or spin out, (5) strategy and workforce training (S007, S013, S031, S051, S075, S079). AI Fund: a concrete idea, about a month of market and feasibility checks, recruit the CEO in residence, about three months of prototype and deep customer conversations, then a seed check; about two thirds survive (S008, S020, S033, S073). Buy what exists (S051).
- **When to use:** A company with a long list of AI ideas and no way to choose; a founder planning the first 90 days; a CEO with a pet project.
- **How to score:** High if ideas are many, criteria explicit, the portfolio small, and a customer-validated prototype arrives in about three months; low if one executive's favorite is the only option or the plan raises and builds for a year first.
- **Quote:** "the number one project that the CEO gets excited about, that's often not the right project to invest in." (S075) "we spend about a month validating the idea. So double check, is this idea even technically feasible, and then talk to prospective customers to make sure there is a market need." (S008)
- **Sources:** 11 (S007, S008, S013, S020, S031, S033, S051, S073, S074, S075, S079)


## 14. Task-based analysis of jobs *(credits Erik Brynjolfsson)*
- **What it is:** AI automates tasks, not jobs. Break each job into tasks and ask which ones AI can automate or augment. Most jobs are about 30 to 40% automatable, which makes the remaining 60 to 70% more valuable, not obsolete. People then widen their scope instead of losing their job (S087).
- **Parts:** List the roles; split each into tasks; rate each task for AI fit; expect surprises (the iconic task is often not the easiest one); if a task becomes 1000x cheaper, consider doing it 1000x more. The same split is his brainstorming tool for project ideas (S120).
- **When to use:** Hiring plans, cost cutting, "will AI replace this team", picking a first AI project.
- **How to score:** Guidance: a role where 30 to 40% of tasks are clear AI fits is a good augmentation target, not a headcount cut. Score low any plan that assumes whole jobs vanish.
- **Quote:** "AI automates tasks rather than jobs" (S057) "Consider not jobs but their component tasks. Are any of them amenable to automation or assistance by AI?" (S120)
- **Sources:** 10 (S010, S011, S015, S051, S057, S058, S071, S077, S087, S120)


## 15. Data-centric AI *(his term; good data over big data)*
- **What it is:** Hold the model code fixed and systematically improve the data. Consistent labels and targeted data beat more data for most real-world problems, which have small datasets. Data work is not a one-time cleanup before modeling; it happens on every loop.
- **Parts:** Make labels a consistent mapping from input to output; have several labelers tag the same examples to surface disagreement; write labeling rules with examples, since any decision beats no decision; toss noisy examples; use error analysis to find the failing slice and collect data only for it (S095). Spend about as long on data as on a training run: if training takes two days, do not spend two months gathering data (S065, S067).
- **When to use:** An AI product stuck on accuracy, a founder who thinks they need millions of examples, or a "data moat" claim.
- **How to score:** Guidance from S024: a steel inspection team went from 76.2% to 93.1% in two weeks by fixing data after model changes gave nothing. Score high if the team works the data before swapping models.
- **Quote:** "i've been surprised over and over and how effective you can build a machine learning system with just you know 50 images so long as the data is well chosen and accurately labeled." (S023) "improving data is not a pre-processing step you do only once" (S095)
- **Sources:** 10 (S022, S023, S024, S059, S064, S065, S067, S074, S094, S095)


## 16. Moats: from data flywheel to "overhyped" to accumulated assets *(view changed)*
- **What it is:** 2017 to 2019: the virtuous circle of AI, where the best product gets the most users, which gives the most data, which gives the best AI, is a defensible moat, and early movers may lock in a lead (S021, S061, S075, S082, S096). 2025: moats are overhyped; most businesses start with a product and grow a moat later, and moats depend on the industry, not on AI (S001, S049). 2026 (newest): if a coding agent can copy your software in three months, the old SaaS model weakens; expect products to go obsolete in 3 to 6 months and keep a durable asset from each one (S087).
- **Parts:** Ask what the industry moat is (marketplace, brand, regulation, data); do not count software alone as a moat now; ask what asset survives when this version goes obsolete.
- **When to use:** A founder delaying a launch to design a moat, or an investor asking about defensibility.
- **How to score:** Guidance: weight product traction now over a moat story; check the moat the industry has always had; score low a plan whose only edge is code a coding agent could rebuild.
- **Quote:** "I find that moes tend to be overhyped" (S001) "you build stuff that goes obsolete in three to six months, but you keep on having new stuff that keeps on getting obsolete, but you accumulate some assets along the way." (S087)
- **Sources:** 10 (S001, S021, S049, S061, S075, S082, S087, S096, S098, S099)


## 17. Start small to build faith *(AI Transformation Playbook)*
- **What it is:** Inside a company, pick a first AI project that can succeed quickly, not the most important one. A visible win builds allies and teaches the company what AI is; then build the team, train everyone, and only then write the strategy. Strategy written first comes out academic.
- **Parts:** The five Playbook steps: pilot projects, an in-house AI team, broad AI training, AI strategy, internal and external communications (S061, S075). Tiered training: executives at least 4 hours, leaders running AI projects at least 12, engineer trainees at least 100 (S061). At Google Brain he started with speech, then Maps, and only then Ads (S019, S054). Quick wins in about 6 to 12 months (S075). Let applications pull data infrastructure forward instead of rebuilding data for two years first (S054).
- **When to use:** A company starting AI adoption, or a founder selling AI into an enterprise.
- **How to score:** High if the first project is small, winnable, and visible; low if it is a giant bet on the core revenue line, a strategy deck before any project, or a two-year data project before any use case.
- **Quote:** "It is more important for your first few AI projects to...succeed rather than be the most valuable AI projects." (S061) "I've seen more companies fail by starting too big than fail by starting too small." (S075)
- **Sources:** 9 (S013, S019, S051, S054, S061, S075, S079, S120, S126)


## 18. Preserve optionality across models *(unnamed)*
- **What it is:** No one can say which model will lead in 6 or 12 months. Architect so switching is cheap, keep evals that tell you when a new model is better, and avoid long vendor lock-in. Forward deployed engineers from a vendor bind you to that vendor; hire your own AI engineers (S106).
- **Parts:** Evals that make switching a routine decision; a mix of proprietary and open-weight models; contracts no longer than one year (S007, S083); vendors that let you extract your data (S112).
- **When to use:** Vendor contracts, platform choices, multi-year AI deals with discounts.
- **How to score:** Guidance: he almost never signs past one year regardless of discount (S007). Score low any long lock-in to one model provider.
- **Quote:** "I personally almost never signed longer than a one-year contract, regardless of the discounts offered, because I value that optionality" (S007)
- **Sources:** 9 (S006, S007, S013, S017, S018, S032, S083, S106, S112)


## 19. Build first, optimize cost later; design to future prices *(unnamed)*
- **What it is:** Use the best model to build something users love. Only when it works and the bill hurts, optimize cost. Token prices fall fast, so design for where prices are going. When costs bite after product fit, look for technical fixes before calling the idea uneconomic.
- **Parts:** Validate on the best model; ignore cost and latency at first; deploy marginally uneconomic apps expecting prices to fall; when costs bite, distill or fine-tune a smaller model (S064, S076). Fine-tuning ladder: prompting, then few-shot, then simple agentic workflows, and only then fine-tune; use RAG, not fine-tuning, for missing knowledge; 100 examples or fewer can be enough (S115).
- **When to use:** A founder delaying a product over API costs, picking a weaker model to save money before product fit, or reaching for fine-tuning first.
- **How to score:** Guidance: he cites prices falling about 79 to 80% a year (S032, S052). Score high if cost work waits for real usage; low if cost worry is blocking validation or fine-tuning comes before prompting has been tried.
- **Quote:** "I advise teams to focus on building a useful application rather than on optimizing LLM costs." (S032) "usually I resort to this technique only after I find that prompting and simple agentic workflows are not up to a task." (S115)
- **Sources:** 9 (S001, S018, S032, S033, S049, S052, S064, S076, S115)


## 20. Technical feasibility checks *(one-second rule, human-level performance, SOP test)*
- **What it is:** Quick heuristics for whether AI can do a task. 2017 and 2018: anything a typical person can do with about one second of thought. Throughout: if no human can do it, AI will struggle. 2025: is it close to text processing, can the AI get the context a human would need, and can you write an SOP for it. He says feasibility is the judgment the industry gets wrong most (S067).
- **Parts:** Benchmark against human-level performance; check training versus test performance; check real-world data, not just the lab; the job is a system that works, not one that scores well on a test set (S065).
- **When to use:** Before committing to build an AI feature.
- **How to score:** High if a human does the task today and an SOP exists; low if no human can do it or the needed context has no data plumbing.
- **Quote:** "For problems that involve unstructured data (images, audio, text), if even humans can't perform the task, it will be very hard for AI to do it." (S044) "one of the biggest challenges we face in the industry today is still, frankly, is actually good judgment on feasibility" (S067)
- **Sources:** 9 (S021, S037, S044, S055, S060, S065, S067, S097, S100)
- **Dated:** the one-second rule is from 2017 and 2018 (S021, S097, S100); the SOP and context checks are newer (S055, 2025) and fit the agentic era better.


## 21. Verifiable versus unverifiable tasks and the human context advantage *(unnamed)*
- **What it is:** AI progresses fastest on tasks with an objectively right answer (code, math). It is much weaker on judgment tasks (strategy, marketing calls) where humans hold a large context advantage from years of experience and customer conversations. AI is a jagged intelligence: great at some things, poor at others (S071). Coding agents speed frontend most, then backend, infrastructure, and research least (S108).
- **Parts:** Sort tasks into verifiable and judgment; automate the first; keep humans in the loop on the second as long as they know something the AI does not; hold the humans directing the AI responsible (S092).
- **When to use:** Deciding what to hand to AI and where to keep a human.
- **How to score:** High if the plan automates verifiable work and keeps human judgment on unverifiable calls; low if it hands strategy or customer judgment to a chatbot, or expects research teams to speed up as much as frontend teams.
- **Quote:** "AI is very good at what they call verifiable tasks, meaning tasks with an objective right or wrong answers, because we have very good technology for making AI do well on those tasks." (S015) "Listing functions from most accelerated to least, my order is: frontend development, backend, infrastructure, and research." (S108)
- **Sources:** 9 (S011, S015, S038, S058, S071, S077, S080, S092, S108)


## 22. Concrete ideas *(his test of concreteness)*
- **What it is:** Work only on ideas specific enough that an engineering team could build a prototype. Vague ideas are rarely wrong and never buildable; concrete ones may be wrong, and you find out fast. Form the hypothesis from your own data, not from an average of opinions (S072).
- **Parts:** "AI for livestock" is vague; face recognition to track individual cows is concrete (S030). Pursue one concrete hypothesis hard; if data says no, pivot to another concrete idea. Use a domain expert's gut to make it concrete quickly.
- **When to use:** A founder pitching a market or a theme instead of a product.
- **How to score:** 5 if a team could start building tomorrow; 1 if the idea is a sector plus "with AI".
- **Quote:** "One test of concreteness is whether you've specified the idea in enough detail that a product/engineering team could build an initial prototype." (S030) "if you were to tell me hey Andrew you should apply AI to financial services you know I don't know what to do with that" (S073)
- **Sources:** 8 (S001, S008, S028, S030, S031, S047, S072, S073)


## 23. Two-way doors and Ready, Fire, Aim *(borrows Bezos's term)*
- **What it is:** Most startup decisions are reversible: decide fast and change next week if wrong. When a shot is cheap, take many shots. When a decision is a costly one-way door, slow down and study.
- **Parts:** Classify the decision; for two-way doors, Ready, Fire, Aim; for one-way doors, Ready, Aim, Fire. With AI, code is cheaper to rebuild, so more decisions are two-way than before, including architecture for a 0 to 1 build (S086, S109). Large, complex systems still deserve careful design up front (S109).
- **When to use:** A founder stuck deliberating.
- **How to score:** Penalize long deliberation on reversible choices and haste on irreversible ones.
- **Quote:** "when committing to a direction means making a costly investment or entering a one-way door (meaning a decision that's hard to reverse), it's often worth spending more time in advance to make sure it really is a good idea." (S042)
- **Sources:** 7 (S001, S010, S042, S086, S109, S123, S126)


## 24. Hype calibration: three buckets and the Goldilocks view *(unnamed; bubble analysis)*
- **What it is:** AI is not one market and not one story. Applications are underinvested; inference capacity is still short; training infrastructure carries the most bubble risk. Be neither too optimistic (AGI is not around the corner) nor too pessimistic (there is real value now). Ask who benefits from a story: labs that want to sound powerful, AI vendors pricing seats against salaries instead of SaaS rates, firms blaming AI for overhiring (S128).
- **Parts:** Judge each bucket on its own fundamentals; cheap overbuilt capacity would help application builders; test AGI claims against a multi-day professional task, his Turing AGI test (S071); excess hype leads to disappointment and an AI winter (S071).
- **When to use:** Fundraising timing, "is AI a bubble", investing in infrastructure, a pitch that leans on AGI or job-loss narratives.
- **How to score:** Guidance: application bets score better than training-infrastructure bets for a small company; score low a plan that depends on AGI arriving or on a narrative instead of fundamentals.
- **Quote:** "AI isn't monolithic, and different areas look bubbly to different degrees." (S035)
- **Sources:** 7 (S017, S035, S049, S071, S079, S113, S128)

## 25. Dev set and a single-number metric *(Machine Learning Yearning)*
- **What it is:** Before iterating, pick an evaluation set that looks like the data you will face in the future and one number to rank options by. Without them the team cannot tell which direction is forward. Set them up fast and change them when they stop pointing the right way.
- **Parts:** Dev and test sets drawn from the future distribution, not a random split of what you have; one optimizing metric plus satisficing thresholds for the rest; fix avoidable bias before variance (S060). For a shipping product, a test set is optional early (S068, S122). Set precision versus recall by the cost of acting: high precision when acting is expensive, high recall when it is cheap (S096).
- **When to use:** A team arguing about which model is better; an AI project with no agreed definition of good.
- **How to score:** Guidance from S060: a starting dev set and metric in under a week. Score high if both exist and drive decisions; low if the team debates by anecdote.
- **Quote:** "I typically ask my teams to come up with an initial dev/test set and an initial metric in less than one week ... It is better to come up with something imperfect and get going quickly, rather than overthink this." (S060)
- **Sources:** 6 (S060, S065, S067, S068, S096, S122)


---

Also used, too thin for their own entry: the decision matrix of options against explicit criteria (S048); four startup success factors (domain problem, feasible AI hypothesis, large market, grit) (S047); the three recession-proof investments (deep tech, training, community) (S045); hard tech test, whether best-in-class technology decides success (S040); FMEA and pre-mortems for AI, rating each failure by likelihood, severity, and detectability (S074, S079); cheap rule-based pre-filters before an expensive model, since simple rules survive data drift better (S065, S067); consistency as an argument for AI, since humans are noisy (S119); launch in one geography for data, then use it to enter the next (S099); the GenAI application engineer, who knows many building blocks and builds fast with AI help (S117).
