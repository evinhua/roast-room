# Principles: Andrew Ng

Built from the notes on 125 usable sources (about 577,000 words: talks, interviews, podcasts, Stanford lectures, Machine Learning Yearning, the AI Transformation Playbook, and The Batch letters, 2013 to 2026). 29 decision rules, most-supported first. "Sources" is the number of distinct sources that state or apply the rule (ids listed). Confidence: high = 3 or more sources, medium = 2, low = 1.

1. **Build at the application layer, not the model or infrastructure layer.** "at the application layer, I'm seeing a lot of exciting opportunities that seem to have a very large market, but where the competition sets is very light, relative to the magnitude of the opportunity" (S008) "if anything the application layer feels underinvested." (S017) Sources: 14 (S001, S003, S008, S013, S017, S018, S034, S035, S057, S073, S076, S081, S089, S090). Confidence: high.

2. **Speed is the first test of a startup; technical depth is the second.** "the number one predictor of a startup success is speed" (S006) "A good technical understanding, too, gets you speed!" (S028) "the difference is not that you wasted 12 hours, the difference you are twice as slow as a company" (S068) Sources: 13 (S001, S006, S012, S020, S028, S033, S064, S065, S066, S068, S073, S084, S086). Confidence: high.

3. **Everyone on the team should build with AI, and hiring should test for it.** "frankly today when I hire a marketer or HR professional I would strongly prefer to hire someone that knows how to use AI to the level of being able to write software." (S016) "today, I will not hire a software engineer that, you know, doesn't know how to use a AI coding agent." (S093) Sources: 13 (S001, S004, S006, S011, S016, S049, S050, S055, S081, S087, S089, S093, S105). Confidence: high.

4. **Make prototypes so cheap that most can fail.** "I would rather focus on driving the cost of those 18 proof of concepts to a zero." (S004) "if falsified, great, you just wasted, you know, two days and $5,000 or something." (S072) Sources: 12 (S003, S004, S020, S029, S050, S072, S076, S081, S086, S089, S090, S123). Confidence: high.

5. **Drive evals and error analysis before trying the next shiny tool, and estimate the ceiling before a long fix.** "use error analysis to figure out where it's falling short, and focus on that." (S036) "Before investing a month on this task, I recommend that you first estimate how much it will actually improve the system's accuracy." (S060) Sources: 12 (S006, S009, S012, S036, S037, S054, S060, S065, S066, S068, S070, S121). Confidence: high.

6. **Use AI to grow, not just to cut cost; redesign the whole workflow.** "Growth is more interesting to most businesses than cost savings, and if there are loops in your business that, when sped up, would drive growth, AI might be a tool to unlock this growth." (S029) "Far too many businesses are still thinking of AI as primarily a way to increase efficiency and save costs." (S127) Sources: 9 (S007, S013, S016, S027, S029, S049, S051, S088, S127). Confidence: high.

7. **AI automates tasks, not jobs; plan around the 30 to 40% it can do.** "maybe AI could do, you know, 30-40% of many jobs. And what that means is, well, that 60% that a human does has become even more valuable" (S011) "when AI does some of our job, the complement becomes even more valuable." (S087) Sources: 9 (S010, S011, S051, S057, S058, S071, S077, S087, S120). Confidence: high.

8. **Pair AI skill with deep domain knowledge, in the same room.** "a lot of the most exciting projects I get to work on is when I, as a AI person, get to collaborate with someone with deep domain knowledge" (S010) "the best performing teams will be cross-functional teams with AI x-rays and health care experts sitting together" (S096) Sources: 9 (S008, S010, S020, S031, S051, S067, S074, S079, S096). Confidence: high.

9. **Getting user feedback is now the bottleneck, so make it fast.** "the bottleneck is increasingly getting user feedback" (S004) "if it's 9:00 a.m., I want feedback by 9:20 a.m., not by 1:00 p.m." (S084) Sources: 8 (S001, S004, S011, S012, S028, S084, S086, S103). Confidence: high.

10. **Prototype fast and loose, then harden before you ship.** "if it buys you speed, it is okay to hard-code parameters, compute key variables in a Jupyter notebook, use local copies of data, and operate with lightweight code review or versioning processes." (S046) "I tell my teams, write insecure software. If you're the only one using it and you don't plan to hack your own computer, it's fine." (S089) Sources: 8 (S001, S019, S028, S039, S046, S089, S102, S109). Confidence: high.

11. **Use the best model first; optimize cost only after it works and the bill hurts.** "the first most important thing is let's build a product that users love." (S049) Try prompting, then agentic workflows, before fine-tuning (S115). Sources: 8 (S018, S032, S033, S049, S052, S064, S076, S115). Confidence: high.

12. **Never lock in to one model vendor or let a vendor hold your data.** "I can't forecast in a year or even six months what is going to be the top model. So as we build our businesses, one of the most important things to do is to preserve optionality." (S013) Sources: 8 (S006, S007, S013, S017, S032, S083, S106, S112). Confidence: high.

13. **Work only on concrete ideas, form your own hypothesis, and pivot fast when data says no.** "Articulating a concrete idea ... takes more courage." (S030) "you don't get to do good work by just asking what everyone thinks and taking an average... you have to have a hypothesis for what you believe in." (S072) Sources: 8 (S001, S008, S028, S030, S031, S047, S072, S073). Confidence: high.

14. **Move fast and be responsible, not move fast and break things.** "I tend to tell my teams to move fast and be responsible" (S001) "a better update to this mantra is to move fast and be responsible." (S089) Sources: 7 (S001, S004, S010, S064, S076, S086, S089). Confidence: high.

15. **Decide reversible things fast; slow down only for one-way doors.** "if canceling or pivoting after a small amount of work is acceptable, then it makes sense to consider jumping in quickly." (S042) For 0 to 1 builds, throw away the codebase if needed; for large complex systems, design ahead (S109). Sources: 6 (S001, S010, S042, S086, S109, S126). Confidence: high.

16. **Start small inside a company to earn allies, then scale; strategy comes after the first wins.** "I've seen more companies fail by starting too big than fail by starting too small." (S075) "for a lot of companies that don't know enough about AI, if you try to figure out your strategy as step one, you end up with a very academic strategy" (S075) Sources: 7 (S019, S051, S054, S061, S075, S079, S120). Confidence: high.

17. **Keep a human in the loop wherever the human knows something the AI does not, and hold that human responsible.** "so long as the human knows something the AI does not, human in the loop is needed to" (S038) Sources: 7 (S010, S011, S038, S058, S077, S080, S092). Confidence: high.

18. **Good data beats big data; fix the data for the slice that fails.** "for a lot of problems it's much easier to go in and find your 60 mislabeled examples and find a systematic way to clean that up" (S024) "blindly going out to grab more data willingly, that's often not a good strategy." (S065) Sources: 6 (S022, S023, S024, S065, S074, S095). Confidence: high.

19. **Own a unified data layer, and let applications pull data work forward instead of rebuilding data for years first.** "let the applications pull your data infra forward" (S054) "I tend to control my own data layer when I can and hire vendors, happy to pay them to operate on my data that I retain flexibility to route to whatever software I want." (S083) Sources: 6 (S054, S083, S094, S095, S098, S112). Confidence: high.

20. **You do not need permission for experiments that harm no one; write sandbox rules that cap the downside.** "don't ask if there's some things you don't need permission to do, so long as you don't harm others. Just go do it and prove it out." (S087) Sources: 5 (S081, S083, S087, S090, S102). Confidence: high.

21. **Start from the business problem, not the AI; buying a chatbot license is not a strategy.** "no company ever gain competitive advantage just by buying a CH GP or Microsoft co-pilot license. The problem is finding the right use cases." (S013) "i tend now as i get older to emphasize more starting from the business problem and understanding that purpose" (S074) Sources: 5 (S013, S027, S059, S074, S075). Confidence: high.

22. **Brainstorm wide before committing; the CEO's favorite is often the wrong first project; buy what already exists.** "the number one project that the CEO gets excited about, that's often not the right project to invest in." (S075) "if you can buy I often advise Partners you just buy it" (S051) Sources: 5 (S013, S031, S051, S075, S079). Confidence: high.

23. **Build small, high-context, empowered teams, and put them in one room.** "the highest speed is achieved by having everyone in the room, able to communicate instantaneously to solve problems." (S107) He now holds "a stronger bias than I used to be for building in person teams" (S084). Sources: 5 (S084, S088, S102, S107, S127). Confidence: high.

24. **Judge AI claims by fundamentals and by who benefits from the story.** "AI isn't monolithic, and different areas look bubbly to different degrees." (S035) Sources: 5 (S035, S071, S092, S113, S128). Confidence: high.

25. **Kill a profitable idea if it fails the ethics test.** "we have multiple times killed projects that we assess to be financially sound, based on ethical grounds." (S008) Sources: 4 (S001, S008, S073, S077). Confidence: high.

26. **Re-examine anything you still do the way you did it in 2022.** "is there anything we're doing that today that we're also doing in 2022? And if so, let's take a look and see if it still even makes sense today." (S012) Strip scaffolding written for older models as models improve (S071). Sources: 4 (S012, S058, S071, S117). Confidence: high.

27. **Start evals early and rough; improve them as you go.** "I think of evals as something I'm going to throw together really quickly, you know, in 20 minutes and it's not that good, but it starts to complement my human eyeball evals" (S006) "It's okay to build quick evals that are only partial, incomplete, and noisy measures of the system's performance, and to iteratively improve them." (S114) Sources: 4 (S006, S036, S037, S114). Confidence: high.

28. **Measure AI in business outcomes, not AI metrics.** "I find that the business outcome of AI is more function of the business than the function of the AI." (S011) "I think of my job as building something that works. And that can be different than building something that works on a test set." (S065) Sources: 4 (S007, S011, S019, S065). Confidence: high.

29. **The customer is the final judge, so set expectations about AI early and keep resetting them.** "ultimately we don't get to vote if we succeed or fail is only the customer that the only one that gets a thumbs up or thumbs down" (S019) "It's best to set expectations with customers clearly before starting a project and keep reminding them throughout the process." (S041) Sources: 3 (S012, S019, S041). Confidence: high.

---

Where he is uneven (inferred from S001, S006, S009, S012, S049, S071, S084, S087): his best practices change every few months by his own account, so older advice in this brain (2017 to 2022, such as data moats, the one-second rule, and rigorous test sets before launch) can be stale. Some views moved in the open: moats went from the data flywheel (2017) to "overhyped" (2025) to accumulated assets (2026), and he now leans toward in-person teams more than he used to (S084). He says "working hard probably correlates to personal success." (S012) But he offers little on pacing, burnout, or managing people beyond hiring. His playbook is built for application startups and enterprise AI adoption; it says little about pricing, sales, or businesses where AI is not central, and on pricing he mostly critiques AI vendors who anchor seat prices to salaries (S128). He is a builder and investor in AI, so his optimism on adoption speed and on jobs carries an interest (inferred from S077, S092, S128).
