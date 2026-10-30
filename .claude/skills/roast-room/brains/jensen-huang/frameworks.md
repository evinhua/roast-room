# Frameworks: Jensen Huang

Built from eighteen batches of notes on 104 sources (interviews, podcasts, keynotes, earnings calls, letters, commencement speeches, and fireside chats, 2011 to 2026; S066 to S105 are undated in the table). 25 frameworks, roughly most-used first, with the frameworks a founder brings to this seat (creating a market and enduring the years it takes) weighted up. "Sources" counts distinct sources across all notes where the idea is used (ids listed). Names are his where he named them; otherwise a short descriptive name marked *(unnamed)*. The How-to-score lines are scoring guidance for the council built from his stated thresholds and stories, not quotes.

---

## 1. The zero billion dollar market (market maker, not share taker)
- **What it is:** Aim at a market that does not exist yet instead of fighting for share in one that does. No customers today means no competitors and nobody watching, which buys the years needed to build the technology and the market at the same time. He says NVIDIA never talks about market share; the only question is whether the mission is necessary. Accelerated computing forced this on him: without a market there is nothing to accelerate, and without the algorithms there is no market (S070).
- **Parts:** Find a need that has not emerged; reason from first principles that it will; build the technology and the market in parallel; accept a long stretch of tiny revenue; be the first one positioned when the market forms.
- **When to use:** A founder choosing between a crowded proven market and an empty new one, or between a share grab and a category bet.
- **How to score:** 5 if the founder is creating a category with a reasoned case that it will exist and a plan to survive until it does; 3 if it is a new angle on an existing market; 1 if the pitch is a small slice of a big existing market with no reason the incumbents cannot respond.
- **Quote:** "We prefer to position ourselves in a way that serves a need that usually hasn't emerged" (S004). "Nvidia is a market maker not share taker... not one day does this company talk about market share." (S008)
- **Sources:** 10 (S004, S008, S016, S017, S024, S029, S034, S035, S038, S070)

## 2. The install base flywheel and the compatibility rule
- **What it is:** A computing platform is defined by how many machines already run it. Install base attracts developers, developers make breakthroughs, breakthroughs open new markets, new markets grow the install base. Every generation stays compatible, so each software gain lifts the whole fleet (Hopper got about 40x faster through software alone, S087) and old hardware keeps earning (A100s still at full use six years on, S046). He calls compatibility "the only unnegotiable rule in our company" (S004). IBM System/360 is his proof that it lasts decades (S042).
- **Parts:** Get the architecture into as many hands as possible; never break compatibility; support software "for as long as we shall live" (S087); let ecosystem richness become the switching cost; win developers first, because developers go where the users are (S049, S073).
- **When to use:** Any platform, marketplace, developer tool, or product whose value grows with the number of users or builders on it. Also when a founder is tempted by a slicker version that breaks what customers already run.
- **How to score:** 5 if every new customer makes the product better for the rest and nothing a customer built is ever stranded; 3 if there is usage but nothing compounds; 1 if each sale stands alone and a rival could take the customer with a better spec sheet.
- **Quote:** "Install base defines an architecture. Not... Everything else is secondary." (S001) "Software inertia is the single most important thing in computers." (S040)
- **Sources:** 24 (S001, S002, S004, S008, S011, S013, S018, S028, S029, S038, S039, S040, S042, S043, S046, S047, S049, S056, S070, S073, S087, S095, S101, S102)

## 3. Core beliefs from first principles, gut-checked daily *(unnamed)*
- **What it is:** Reason a long bet from first principles (physics, deep industry knowledge, or science) until you believe it enough to see the future in your head. Write down the core beliefs and check them every day. If the beliefs have not changed, the bet does not change, whatever the stock price or the critics say. If a belief breaks, change course fast and without ego (S076). He calls the CUDA bet hope, but "reasoned hope" (S005).
- **Parts:** State the beliefs; name what would break them; gut-check daily; ignore noise that does not touch them; when something big appears, ask so what, then what happens next, then what else it can solve (S073); course-correct when a belief breaks.
- **When to use:** A long bet under pressure: a down quarter, a skeptical board, a competitor launch, a falling valuation. Also when a new result appears and the founder has to decide whether it is a big deal.
- **How to score:** 5 if the founder can state the beliefs and what would falsify them; 3 if conviction is real but unstated; 1 if the bet rests on mood, momentum, or "investors like it".
- **Quote:** "Have a core belief. Gut-check it every day. Pursue it with all your might, pursue it for a very long time." (S017) "The stock price changed, but did something else change? Did physics change, did gravity change?" (S017)
- **Sources:** 14 (S003, S005, S006, S011, S016, S017, S020, S021, S034, S058, S071, S073, S076, S079)

## 4. AI factory: compute equals revenue *(tokens per watt)*
- **What it is:** The data center stopped being a warehouse for files and became a factory: energy and data go in, tokens come out. Revenue is tokens produced per watt times the price tier, and power is the binding constraint ("A one gigawatt factory will never become two," S038). So the quality of compute per unit of the scarce input decides revenue, and the architecture choice becomes a CEO decision (S074). He has applied the factory frame since 2022 (S100) and turned it into the line "compute equals revenues" by 2026 (S045).
- **Parts:** Treat the whole system, not the chip, as the unit; find the scarce input (power, land, time); measure output per unit of it; segment output into price tiers; plan land and power years ahead; never let the most expensive resource sit idle (S015, S098).
- **When to use:** Any compute-heavy or capacity-constrained business: unit economics, capex, pricing tiers, what to optimize when a hard input is capped.
- **How to score:** 5 if the founder knows the scarce input and maximizes revenue per unit of it; 3 if they track cost but not output per constrained unit; 1 if they price inputs without asking what the factory produces.
- **Quote:** "Without compute, there is no way to generate tokens. Without tokens, there is no way to grow revenues. So in this new world of AI, compute equals revenues." (S045) "every single data center in the future will be power limited your revenues are power limited" (S037)
- **Sources:** 40 (S001, S006, S007, S008, S010, S013, S014, S016, S023, S024, S028, S029, S037, S038, S039, S040, S042, S045, S046, S049, S053, S054, S055, S063, S067, S071, S072, S074, S079, S085, S091, S093, S095, S096, S098, S100, S101, S102, S103, S105)
- **Note:** He sells the compute. Read his demand claims as a vendor's, even when the logic holds.

## 5. Extreme co-design *(full-stack acceleration)*
- **What it is:** When one component stops improving on its own (Moore's Law ending), gains come from optimizing every layer at once: algorithm, chip, system, networking, software, power, cooling. Speeding one step of a pipeline yields little (Amdahl's Law); speeding the whole cycle yields large gains. He credits this for a million-x speedup in ten years against roughly 10x from Moore's Law (S071, S094). Acquire the next bottleneck when you remove the current one: Mellanox because moving data became the constraint (S060).
- **Parts:** Map the whole pipeline; find every step on the critical path; optimize them together; treat the system as the product; spot the next bottleneck one generation ahead (S071).
- **When to use:** A founder whose product is one component in a bigger workflow, or who is chasing a 10% gain in one step while the bottleneck sits elsewhere.
- **How to score:** High if the plan improves the customer's whole cycle time and anticipates where the bottleneck moves next; low if it polishes one step the customer barely notices.
- **Quote:** "Extreme code design means that you have to optimize the model, algorithm, system, and chip at the same time." (S007) "You really want to create a system that accelerates every single step of that because only in doing the whole thing can you really materially improve that cycle time." (S008)
- **Sources:** 22 (S001, S007, S008, S010, S013, S015, S039, S042, S046, S047, S060, S070, S071, S074, S095, S097, S099, S100, S101, S102, S103, S105)

## 6. Fund the platform with a volume application *(unnamed; the chicken-and-egg solve)*
- **What it is:** A new architecture has a chicken-and-egg problem: no developers without users, no users without applications. Break it with one application that both needs the architecture and sells in enough volume to spread it. For NVIDIA that was 3D games: GeForce paid for CUDA and put it on hundreds of millions of machines before anyone used CUDA. Building ahead of the application has a cost: the programmable shader cost two painful quarters of margin because applications had not caught up (S047). He applies the same volume test to robots: only cars, drones, and humanoids can ship in high volume (S041, S079).
- **Parts:** Pick the killer application; check it has real demand and real volume; ride it to build the install base; let the next market (science, then AI) arrive on a base that already exists; expect the gap before the new market fills it.
- **When to use:** A founder with a platform vision but no near-term buyer for the platform itself. Asks: what pays the bills while the bigger market forms?
- **How to score:** 5 if a large paying use case funds the long bet and spreads the base; 3 if there is a paying use case that does not spread the platform; 1 if investors alone must fund the long bet with no volume engine.
- **Quote:** "how do we find an application that would, on the one hand, need this architecture, on the other hand, be sufficiently high volume to cause this architecture to proliferate" (S021) "This chicken or the egg problem has rarely been broken, and it's taken us 20 years." (S040)
- **Sources:** 12 (S003, S004, S005, S021, S028, S029, S040, S041, S042, S047, S073, S079)

## 7. Fungible and durable beats specialized (TCO, not price)
- **What it is:** Judge infrastructure by total cost of operation over its life, not the sticker price. Systems that run any workload and keep improving through software carry the lowest risk and best return; that is what makes them financeable like an airplane (S069). A specialized system that is worse per unit of the scarce input loses even if it is free. He sells the most expensive instance and argues it is the cheapest per unit of work (S091).
- **Parts:** Count land, power, operations, and lifetime; ask if it runs every workload and every customer; ask if software keeps making it better; ask if it can be redeployed if the first buyer fails (S053); compare output per constrained unit.
- **When to use:** Pricing against a cheaper rival, buying equipment, choosing a stack, positioning a premium product, raising debt against assets.
- **How to score:** High if the founder wins on lifetime value per scarce unit and the asset keeps a second buyer; low if the pitch is "cheaper" with nothing else, or the asset only works for one customer.
- **Quote:** "Specialization is the enemy of fungibility. Specialization is the enemy of durability." (S006) "Our TCO is so good that even when the competitor's chips are free it's not cheap enough." (S018)
- **Sources:** 20 (S005, S006, S007, S014, S018, S037, S038, S042, S045, S046, S053, S056, S062, S063, S069, S075, S091, S095, S096, S103)

## 8. Five-layer cake
- **What it is:** AI is a stack of five layers: energy (land, power, shell), chips, infrastructure, models, and applications. Each layer depends on the one below, and demand at the top pulls on every layer down to the power plant (S058). He uses it to locate any AI question, to argue you have to win every layer, and to say the application layer matters most (S019, S067). In 2026 he adds an investor's reading: put money where one dollar activates a hundred dollars of ecosystem (S025).
- **Parts:** Name the layer the decision sits in; check the bottleneck in the layers below; check who captures value above; invest where a dollar unlocks many dollars of ecosystem.
- **When to use:** Any AI or infrastructure business: where to build, where the bottleneck is, which layer will be commoditized, where margins land.
- **How to score:** High if the founder knows which layer they own and what they depend on below; low if the plan assumes power, chips, or model access will simply be there.
- **Quote:** "AI is actually essentially a five layer cake." (S026) "It is vital that we win in every single one of the five layers." (S019)
- **Sources:** 21 (S002, S009, S014, S018, S019, S021, S022, S025, S026, S031, S058, S066, S067, S068, S072, S080, S083, S095, S097, S062, S063)

## 9. Platform shifts: reset every 10 to 15 years *(unnamed)*
- **What it is:** The computer industry resets onto a new platform every 10 to 15 years (mainframe, PC, internet, cloud, mobile, AI), and each shift is bigger than the last. A shift is a once-in-a-lifetime chance to create a market, and also the only time a newcomer can get back into the game. He reads the current era as two shifts at once: general-purpose to accelerated computing, and hand-written code to AI (S039, S105). He warns against treating a shift as a single application boom (S056).
- **Parts:** Ask whether this is a new way of programming, a new set of applications, and a new reach (his three platform properties, S013); ask if two shifts are stacking; size it as a platform, not a product cycle; move while the window is open.
- **When to use:** Timing a new company or pivot; deciding whether a trend is a fad or a reset; sizing a market.
- **How to score:** High if the founder is riding a real reset early with a reason the incumbents will be slow; low if it is a feature on the old platform dressed as a new one.
- **Quote:** "every 10 to 15 years, the computer industry resets. A new platform shift happens." (S097) "That platform shift should be the once-in-a-lifetime opportunity for us to get back into the game." (S039)
- **Sources:** 16 (S008, S013, S021, S036, S039, S042, S046, S056, S057, S091, S097, S098, S102, S103, S105, S059)

## 10. Shape belief before the move *(unnamed; unifying theory, roadmap, upstream informing)*
- **What it is:** The CEO holds one theory that explains why everything the company does fits together. Before a big move he spends months or years laying stepping stones with teams and partners, so by announcement day people ask what took so long (S001). The same habit runs outward: he publishes a roadmap years ahead so customers can plan land and power, and briefs suppliers on the size and timing of demand so they invest ahead of it. His claim: no bottleneck survives a two to three year focused signal (S002).
- **Parts:** State the theory; share partial reasoning early and daily; publish the roadmap; brief suppliers upstream and land, power, and finance owners downstream (S084, S086); keep every stakeholder on the same number (S054).
- **When to use:** A big pivot, a major acquisition, or a long-horizon bet that needs partners to invest alongside you.
- **How to score:** High if team, partners, and suppliers already understand why and are building for it; low if the founder plans a surprise memo or keeps the roadmap secret when others must plan around it.
- **Quote:** "The reason why Nvidia can move so fast is because we always have a unifying theory for the company, and that's my job." (S015) "I spend a lot of my time informing, directly or indirectly, our supply chain, partners, and ecosystem about the opportunity in front of us." (S002)
- **Sources:** 12 (S001, S002, S015, S037, S041, S046, S052, S054, S062, S075, S084, S086)

## 11. Task versus purpose of a job
- **What it is:** Every job has a purpose (why it exists) and tasks (the work done to serve it). AI automates tasks. Where the purpose is bigger than the task, demand for the job grows; where the task is the whole job, it shrinks. His proof is radiology: AI reads scans and there are more radiologists. He admits some jobs, like phone customer service, are mostly task and may go (S068).
- **Parts:** Name the purpose; list the tasks; ask which tasks AI removes; ask whether lower cost raises demand for the purpose.
- **When to use:** Hiring plans, headcount cuts "because AI", positioning for tools that automate work, any claim that AI will kill a role or a market.
- **How to score:** High if the plan uses AI to serve more of the purpose (more patients, customers, ideas); low if it treats task automation as automatic job removal.
- **Quote:** "There's a fundamental difference between the tasks that we do in our job versus the purpose of our job." (S021) "a job is like a basket of tasks, many small components of things that in totality brings meaning to our work." (S068)
- **Sources:** 13 (S009, S019, S021, S022, S025, S026, S032, S036, S067, S068, S072, S083, S001)

## 12. Do as much as needed, as little as possible
- **What it is:** Do only the work that would not get done without you; partner for everything else. This is why NVIDIA does not build fabs, does not become a cloud, and does not pick model winners. He also uses it as a work rule: reject work fast and defer what is left as long as you can (S011). Platform version: go up the stack only as far as developers need (S011, S066).
- **Parts:** For each piece of work ask: if we do not do it, will anyone? If yes, partner. If no, it is ours. Go up the stack only as far as developers need.
- **When to use:** Build versus partner, vertical integration, new business lines, scope creep.
- **How to score:** High if the founder only builds what nobody else would and leans on excellent partners for the rest; low if they are rebuilding what others already do well.
- **Quote:** "We should do as much as needed, as little as possible." (S002) "One of the rules of our company is to not squander the resources of our company to do something that already exists." (S047)
- **Sources:** 10 (S002, S011, S013, S015, S017, S028, S029, S047, S048, S066)

## 13. Vertically integrated, horizontally open
- **What it is:** Build the whole stack together so it works best and so you understand it, then sell every layer separately so customers and partners can take any piece. About 80% of customers go through partners (S013). When rivals build their own chips, open the platform so they plug in rather than fight them (S075). Serve customers however they want to buy, even if you prefer they buy the full stack (S014).
- **Parts:** Co-design the full system; disaggregate it for sale; let partners recombine it; welcome competitors' parts into your fabric.
- **When to use:** Bundling versus unbundling, platform versus product, channel strategy, response to a customer building its own version.
- **How to score:** High if the founder controls the hard integration but does not force customers to buy everything; low if it is a closed bundle or a loose kit with no integration edge.
- **Quote:** "We create a thing vertically and then we open it horizontally and so everybody could use whatever piece they would like." (S015) "NVIDIA is vertically integrated the world's first vertically integrated but horizontally open company." (S038)
- **Sources:** 13 (S013, S014, S015, S037, S038, S039, S042, S043, S052, S060, S075, S095, S100)

## 14. Choose work that is hard, new, and yours *(unnamed)*
- **What it is:** His test for what to work on: something never done before, hard enough that the difficulty discourages others and buys you time, something you are somehow destined to do, and something you love enough to endure the pain. NVIDIA looks for problems that are barely possible or impossible on ordinary computers (S011, S024), and stays out of commodity markets (S028, S029).
- **Parts:** Is it new? Is it hard enough to keep others out? Do you have the perspective or skill that makes it yours? Will you still want it after years of suffering?
- **When to use:** Picking an idea, a new product line, or a pivot.
- **How to score:** 5 if all four hold; 3 if it is hard but anyone could do it; 1 if it is easy, crowded, or chosen for the money.
- **Quote:** "the person who's willing to suffer the longest wins." (S029) "Let's go squander my time on something that nobody has done." (S029)
- **Sources:** 9 (S011, S013, S016, S020, S024, S028, S029, S050, S071)

## 15. Prefetch the risk: simulate before you commit *(unnamed)*
- **What it is:** Bold bets are fine, but pull the future risks into the present first, through simulation, emulation, or testing, so that when you push all the chips in you already know it will work. The Riva 128 was simulated end to end on an emulator, then taped out once (S004). The same idea now runs through his digital twin rule: build the factory, the robot, or the data center in simulation before pouring concrete (S041, S101).
- **Parts:** List what could kill the bet; find a cheap way to test each now; spend on tools that compress time; commit fully only after the downside is simulated away.
- **When to use:** Any all-in decision: a big launch, a large contract, a single production run, a large capex build, a major hire or acquisition.
- **How to score:** High if the founder has tested the main failure modes before committing; low if the bet is bold and untested.
- **Quote:** "When you bet the farm you're saying I'm going to take everything in the future all the risky things and going to pull it in advance." (S004) "No physical product operated by software can be deployed in large numbers without testing the software on its digital twin." (S101)
- **Sources:** 13 (S003, S004, S010, S037, S041, S043, S044, S095, S098, S100, S101, S102, S104)

## 16. Org design as a computing stack, with information equity *(unnamed)*
- **What it is:** Design the company like the machine it builds. He keeps 40 to 60 direct reports, no one-on-ones, no status meetings, only problem meetings where everyone hears the same reasoning at the same time. He reasons through hard calls in front of people so they can check his logic and learn how he thinks (S068, S079). People reporting to the CEO should need the least management (S077).
- **Parts:** Ask what the input, output, and environment are; organize around that; flatten so information is not distorted by layers; give feedback in the open; reserve the CEO for problems nobody else can move.
- **When to use:** Org charts, management layers, meeting cadence, how the founder spends time.
- **How to score:** High if the right experts see every key decision fast and hear the same reasoning; low if information flows through layers and power comes from who knows what.
- **Quote:** "No conversation is ever one person. That's why I don't do one-on-ones. We present a problem and all of us attack it." (S001) "I believe that when you give everybody equal access to information, it empowers people." (S016)
- **Sources:** 9 (S001, S004, S008, S016, S017, S068, S070, S077, S079)

## 17. Cost collapse and compounding demand *(unnamed; marginal cost to zero, scaling laws)*
- **What it is:** When the cost of a resource falls by orders of magnitude, demand rises and new uses appear that were irrational before. Cutting compute cost a million times did not shrink the market; it created AI. He expects token cost to fall about a billion times in ten years (S009). On top of that sit his scaling laws (pre-training, post-training, test-time reasoning, agentic), each dismissed before it arrived, each multiplying compute per use on top of rising usage: two exponentials (S007, S039).
- **Parts:** Find a cost that is collapsing; ask what becomes rational at near-zero cost; build for that use, not the old one; keep driving cost down so the cycle keeps turning (S039).
- **When to use:** Pricing a falling-cost product, sizing a market after a cost drop, fear that cheaper means smaller, judging whether a compute-heavy market is a bubble.
- **How to score:** High if the founder bets on the new uses cheap supply enables; low if they assume demand is fixed. On AI demand, discount for his incentive; he admits the whole industry, him included, underestimated reasoning compute (S037).
- **Quote:** "You wouldn't ever consider doing it unless the marginal cost of computing was zero." (S018) "intelligence is gonna scale by one thing, and that's compute." (S001)
- **Sources:** 14 (S001, S007, S008, S009, S018, S037, S039, S044, S079, S085, S094, S097, S100, S101)

## 18. Conviction with agility
- **What it is:** Believe two things equally hard at once: that you are right about the direction, and that you could be wrong about the path. Conviction alone is stubbornness; agility alone is drift. Confidence is not certainty; the room left for doubt is what lets you keep learning (S079). He runs the company in two modes at once: a refined, precise core and a shape-shifting skunkworks (S011).
- **Parts:** Hold the direction; stay open on method; keep one part of the company refining and one part exploring; pivot fast when an assumption breaks.
- **When to use:** A founder who is either too rigid or pivoting every month.
- **How to score:** High if the direction is stable and tactics change on evidence; low if both are fixed or both keep moving.
- **Quote:** "you have to believe both equally hard" (S011) "confidence and certainty are not the same idea it is possible for you to be completely confident in pursuing a direction and not and allow room for uncertainty" (S079)
- **Sources:** 6 (S003, S005, S011, S021, S076, S079)

## 19. Strategic retreat
- **What it is:** Deciding what to give up is core to success. NVIDIA walked away from the Sega console contract and later from phone chips to focus on the mission and then robotics. Strategy is partly forecasting the context you will be shut out of, not just the technology you can build (S071).
- **Parts:** Check each business against the mission; leave the ones that do not fit even if they work; confront mistakes early; reinvest the freed focus in the next platform.
- **When to use:** A founder spread across too many lines, or defending a working but off-mission business. Also before entering a market where someone else controls a part you need.
- **How to score:** High if the founder is willing to cut something that works to protect the main bet, and checks who controls the chokepoint before entering; low if every opportunity is kept.
- **Quote:** "strategic retreat sacrifice deciding what to give up is at the core the very core of success" (S035) "Going into that market in the first place was a waste of time." (S071)
- **Sources:** 6 (S003, S020, S034, S035, S071, S073)
- **How his telling changed:** In S035 (2023) the phone exit is a clean choice. In S034 (2024) he says NVIDIA was kicked out of mobile and other markets. In S071 (undated, later) he calls entering mobile a strategic mistake: the modem mattered more than the chip and Qualcomm owned it. Use the newest version: the lesson is to not enter, not just to retreat well.

## 20. Narrow enough to win, broad enough to fund R&D *(the slippery middle)*
- **What it is:** NVIDIA walks a fine line every generation. Too general and you become another general-purpose processor; too narrow and the market cannot pay for the R&D. Cover enough domains to fund research while staying many times faster than the general option in each, one domain library at a time (S040).
- **Parts:** Pick domains where you are many times better than the default; add domains to grow customers and R&D; stop before you are just another generalist.
- **When to use:** Niche versus broad, horizontal versus vertical product, how many segments to serve.
- **How to score:** High if each segment gets a big advantage and together they fund the roadmap; low if the niche is too small to fund itself or the breadth erases the edge.
- **Quote:** "we had to find that slippery middle. And that is the strategic journey of our company." (S029) "having it being a large market is important because the technology is complicated and if we had a large market, our R&D budget could be large" (S005)
- **Sources:** 6 (S005, S011, S020, S028, S029, S040)

## 21. Early indicators of future success
- **What it is:** Long bets show no financial result for years, so track leading signs that you are doing the right thing and decouple them from results. Gross margin is a result, not a KPI (S017). For CUDA the signs were researchers using it in serious work, then AlexNet. In 2022 he pointed to SDK adoption (Triton users tripling, RAPIDS spreading) rather than benchmarks (S048).
- **Parts:** Name signals that come before revenue (who is using it, for what important work); track them; keep enduring while they point the right way.
- **When to use:** Judging a bet that is years from paying off; deciding whether to keep funding it.
- **How to score:** 5 if the founder names specific early signs and they are moving; 3 if there are signs but no tracking; 1 if the only evidence offered is revenue that has not come, or hope.
- **Quote:** "early indicators of future success... you want to decouple the result from evidence that you're doing the right thing." (S017)
- **Sources:** 5 (S005, S016, S017, S035, S048)

## 22. Go forward in time, look backward *(position near the tree)*
- **What it is:** Plan from the future end state back to today, not forward from current limits. You do not need to predict the exact moment; position the company near where the opportunity will fall so you are first to pick it up, and try to make the journey pay for itself (S071, S073). Pursue a domain for years, then move hard when the enabling technology arrives (S085).
- **Parts:** Picture the end state; reason back to what must be true; position near it; keep options open and opportunity cost low; be ready for the diving catch.
- **When to use:** Timing a market, deciding how early is too early, long-range roadmaps.
- **How to score:** High if the founder is positioned near a reasoned future without betting on an exact date and the business pays its way meanwhile; low if the plan needs perfect timing or only extends today's trends.
- **Quote:** "I never looked forward from where I am, I go forward in time and look backwards." (S017) "you want to position yourself near the tree and even if you don't catch the the the Apple before it hits the ground so long as you're the first one to pick it up" (S004)
- **Sources:** 5 (S004, S017, S071, S073, S085)

## 23. Cannibalize yourself on a steady rhythm
- **What it is:** If you do not cannibalize your own product, a competitor will. NVIDIA ships a new full system every year and bet on hard new designs while the old one was at its prime. He pairs the rhythm with a discipline: no new generation should change more than one or two chips, unless physics leaves no choice (S097). Customers should add capacity every year rather than build a giant fleet every four (S087).
- **Parts:** Plan the replacement before decline; ship on a steady rhythm; limit how much changes per release; accept that the new generation will make the old one hard to sell.
- **When to use:** A founder protecting a winning product, or delaying the next version to milk the current one.
- **How to score:** High if the founder is building what replaces their best seller on a cadence customers can plan around; low if they are guarding it.
- **Quote:** "if you don't cannibalize it someone will and it surely will be cannibalized" (S020) "when Blackwell starts shipping in volume you couldn't give Hoppers away" (S037)
- **Sources:** 6 (S020, S037, S038, S040, S087, S097)

## 24. Speed of light
- **What it is:** Benchmark every plan against the physical limit, not last year's result. Strip the process back to zero, ask what physics allows, then find the real gap. Related rules: never do twice what you can do once (S004), and when time is the scarce input, start from the time you have and ask what you can build in it (S070). In AI factories, faster is the same as cheaper (S085).
- **Parts:** Ask what the limit is (time, cost, energy, steps); ask why the current number is so far from it; rebuild from zero toward the limit.
- **When to use:** Timelines, cost structures, any claim that a task simply takes as long as it always has.
- **How to score:** High if the founder knows the theoretical best and is closing the gap; low if they improve 10% on an inherited process.
- **Quote:** "The speed of light is my shorthand for what's the limit of what physics can do." (S001) "Instead of saying this is the chip we have to build, how long is it going to take? We started with this is how much time we have." (S070)
- **Sources:** 4 (S001, S004, S070, S085)

## 25. Agents as digital employees: zero trust, then onboard *(unnamed)*
- **What it is:** Treat an AI agent like a new hire. Start with zero trust and minimal rights, contain it, monitor it out of band, and grant access only as it earns it (S006, S081). Then run the same flywheel you run for people: pick a platform, onboard, train, evaluate, give it good work (S090). IT becomes the HR department for agents (S044). Use off-the-shelf models where you can and build your own only where you must (S069).
- **Parts:** Containment; rights provisioning; monitoring; onboarding and continuous evaluation; a platform that ties agents together so they are not silos.
- **When to use:** A founder deploying agents inside the company or selling agent products; build versus buy for models.
- **How to score:** High if agents start contained with narrow rights and a feedback loop; low if they get broad access on day one or are bolted onto a silo.
- **Quote:** "you should first start with zero trust." (S069) "The way you treat an AI agent is a little bit like a digital employee." (S098)
- **Sources:** 11 (S006, S027, S044, S069, S081, S083, S090, S091, S094, S095, S098)
