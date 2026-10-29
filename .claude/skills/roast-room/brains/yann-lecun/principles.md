# Principles: Yann LeCun

Built from 33 talks, interviews, and lectures (2017 to 2026, S001 to S034). 28 decision rules, most-used first, weighted toward AI technology and openness decisions. "Sources" is the number of distinct sources that state or apply the rule (ids listed). Confidence: high = 3 or more sources, medium = 2, low = 1.

1. **Do not build an agent that cannot predict the consequences of its actions.** "basing agentic systems on LLMs is a recipe for disaster because how can a system possibly plan a sequence of actions if it can't predict the consequences of its actions" (S008) "LLMs do not have world models. They cannot predict the consequences of their actions beforehand. They just take the action and then apres moi le deluge." (S003) Sources: 9 (S001, S002, S003, S004, S006, S008, S009, S020, S033). Confidence: high.

2. **Use LLMs for what language carries (text, code, math, retrieval), and not for the physical world.** "LLMs are really good at manipulating language, but basically nothing else." (S003) "LLMs, to some extent, except for a few domains, are mostly information retrieval systems." (S007) Sources: 8 (S001, S002, S003, S006, S007, S012, S030, S031). Confidence: high.

3. **Do not mistake fluency for intelligence.** "The biggest difficulty is not to get fooled into thinking that uh a a computer system is intelligent simply because it can manipulate language." (S007) "currently AI systems are in many ways very stupid we are fooled into thinking they are smart because they can manipulate language very well." (S014) Sources: 6 (S007, S012, S014, S020, S023, S033). Confidence: high.

4. **Judge the technology by what it still cannot do, not by its best demo.** "But where is my domestic robot? Where is my level five self driving car? Where is a robot that can do what a cat do?" (S012) Sources: 7 (S001, S007, S012, S019, S021, S022, S032). Confidence: high.

5. **Scale is necessary but not enough; bigger LLMs will not close the gap.** "certainly, scale is necessary but not sufficient." (S020) "we're not going to get to human intelligence, human level intelligence or super intelligence by scanning ups or by even refining the paradigm. There is a need for a change of paradigm." (S008) Sources: 8 (S001, S008, S009, S014, S015, S016, S020, S029). Confidence: high.

6. **Do not believe anyone who claims the secret, and do not fund it.** "if you think that there is some startup somewhere with five people who has discovered the secret of a GI and you should invest five billion in them you're making a huge mistake" (S015) "if a start-up tells you they have the secret to you know human level intelligence and common sense don't believe them they don't" (S026) Sources: 4 (S013, S015, S016, S026). Confidence: high.

7. **Assume capability timelines are longer than claimed.** "it's almost certainly much harder than we think because in the past 70 years of history of AI, it's always been much harder than we thought" (S009) Sources: 6 (S009, S011, S012, S015, S019, S026). Confidence: high.

8. **Progress is gradual, not one event; plan for steady increments.** "it's not going to be an event. We're not going to discover one secret. We're we're going to make continuous progress" (S007) Sources: 6 (S007, S013, S020, S021, S031, S033). Confidence: high.

9. **Bet on open platforms; proprietary ones lose over time.** "there is a natural tendency for platforms to become open. That's what happened with Linux." (S001) "It's very clear that the open world is is going to go past the proprietary world. They're going to be left behind." (S010) Sources: 7 (S001, S008, S010, S013, S019, S021, S032). Confidence: high.

10. **Treat the foundation model as infrastructure; build the product in a vertical.** "Lama is like Linux, okay? It's a it's a foundation. It's an... infrastructure but it's not a product." (S032) "take an open-source platform... and then fine-tune it for a particular vertical application and become an expert in that vertical application" (S019) Sources: 2 (S019, S032). Confidence: medium.

11. **Openness makes you faster; secrecy makes you fall behind.** "the reason why progress in AI has been so fast in the last 10 years is because of open research." (S014) "you want to be in that mode where you progress quickly because you collaborate" (S009) Sources: 7 (S008, S009, S012, S014, S016, S021, S025). Confidence: high.

12. **No one has a monopoly on good ideas; expect them from anywhere.** "no entity has a monopoly on good ideas which is why open collaboration makes the field progress faster." (S014) "the recent story uh about deepseek really shows that good ideas can come from anywhere." (S013) Sources: 6 (S010, S012, S013, S014, S015, S016). Confidence: high.

13. **Concentration of AI in a few proprietary companies is the real risk, not AI takeover.** "I see the danger of this concentration of power through proprietary AI systems as a much bigger danger than everything else." (S020) Sources: 7 (S002, S008, S010, S018, S020, S021, S033). Confidence: high.

14. **Put hard safety constraints outside the model, enforced at run time.** "LLMs are intrinsically unsafe. Okay, that doesn't mean they're dangerous because they're not that smart." (S010) Fine-tuned guardrails can always be bypassed by an unexpected prompt; guardrails must be checked at inference time (S033). Sources: 5 (S001, S008, S010, S017, S033). Confidence: high.

15. **Regulate products, not research; oppose compute caps.** "the debate is about whether research and development should be regulated and there I'm I'm clearly very strongly of the opinion that it should should not" (S021) Sources: 4 (S018, S021, S022, S031). Confidence: high.

16. **When a deployed product causes real harm, stop that product, not the whole field.** "if there is a real harm you you should you know stop that product from from being deployed uh now you know should it mean that you should ban all all of AI research no" (S022) Sources: 1 (S022). Confidence: low.

17. **Design AI to amplify people, with the human as the boss.** "they're not going to replace us. they're going to amplify us." (S006) "We're all going to be a boss. We're all going to be like those high-level managers who will tell our AI systems what to do" (S019) Sources: 6 (S006, S007, S011, S017, S018, S019). Confidence: high.

18. **Hire the best, give them the means, and get out of the way.** "the best way to get breakthrough research... is you hire the best people and you get the out of the way" (S001) "if you want to attract the top people um it has to be completely bottom-up" (S025) Sources: 4 (S001, S013, S016, S025). Confidence: high.

19. **Breakthroughs need a long leash, not a quarterly deadline.** "if you really want Innovation you need a longer leash you need to let people uh take risks and innovate" (S016) Sources: 3 (S013, S015, S016). Confidence: high.

20. **Set your non-negotiables at the point of hire.** He joined Meta only on three conditions: stay in New York, keep his NYU job, and publish and open-source the research (S017, S018). "I'm never going again to work for a company that stops open source uh you know stop scientific communication and then systematically patents uh everything" (S016) Sources: 4 (S005, S016, S017, S018). Confidence: high.

21. **Do not play catch-up where incumbents hold the compute; work on the next thing.** "don't work on them. It's pointless. Like you know, try try to invent the next thing." (S010) "I don't think academia should even consider playing catch-up." (S011) He says this to researchers; the business reading is not to compete head-on with frontier labs at training LLMs. Inferred from S001, S010, S011, S016. Sources: 5 (S001, S009, S010, S011, S016). Confidence: high.

22. **Get out of the trench everyone is digging, but follow evidence, not fashion.** "everybody is digging the same trench" (S001) "I think that's completely wrong methodologically to simply work on a particular engineering artifact because you can understand it theoretically and ignoring the fact that there is another way to do it that works better" (S005) Sources: 3 (S001, S005, S010). Confidence: high.

23. **Do not generate what you do not need to predict.** "forget about generative models. I mean unless you want to generate text unless you want to generate video but if you are interested in really understanding the content do not generate or generate in representation space" (S032) Sources: 6 (S009, S015, S029, S030, S031, S032). Confidence: high.

24. **Use reinforcement learning last, and sparingly.** "minimize the use of reinforcement learning because reinforcement learning is extremely inefficient... you need to have a lot of background knowledge about the world before you can use reinforcement learning to sort of fine-tune your behavior" (S032) Sources: 6 (S005, S009, S029, S031, S032, S034). Confidence: high.

25. **Learn things with a long shelf life.** "learn things that have a long shelf life because it's almost certain that you're going to technology is going to evolve really fast and you're going to have to change job" (S032) Sources: 4 (S008, S009, S024, S032). Confidence: high.

26. **Pick a long-term ambitious goal and work back from it.** "pick a long-term very ambitious plan and work your way back and you're going to make progress. Useful things are going to come out of that" (S009) Sources: 1 (S009). Confidence: low.

27. **Optimize the objective you actually want, not an easy proxy.** "we replace the actual objective function we want to optimize by your proxy a substitute that uh is easier to optimize but and we can be computed right" (S025) Sources: 1 (S025). Confidence: low.

28. **Watch what the research community reads, not what the press covers.** "read the papers that the scientific community pays attention to or or does not yet pay attention to because they're going to cause a revolution over the next 5 years." (S008) Sources: 1 (S008). Confidence: low.

---

## Updates, inconsistencies, and blind spots
- **LLM obsolescence, then and now.** 2023: "my prediction is that within a few years, nobody in their right mind would use autoregressive LLMs." (S033). 2025: generative AI has about a three-year shelf life (S017). Newer (2026): "there's nothing wrong with LLMs in the sense of LLMs, you know, are the basis for a lot of uh very useful AI products that all of us use, including me." (S001). The newer view is the one to use: useful products, wrong path to human-level AI.
- **His own world-model bet is early.** 2026: the narrator of S004 (not LeCun) reports JEPA planning still far behind VLA on simple robot tasks. Timeline for general world models: three to five years or more; narrow uses in one to two years (S006, S015).
- **Productivity numbers vary.** He cites economists for gradual gains but the figures differ by source: about 0.6% a year (S007) and about 7% of GDP growth (S032). Treat his macro numbers as loose. Inferred from S007, S008, S032.
- **Too slow on transfer.** He admits being too pessimistic about how fast research becomes product (S016, S032). Discount his skepticism on time-to-market for narrow, well-defined products.
- **Bias against rivals.** He names Anthropic, Dario Amodei, and Gary Marcus with open hostility (S030) and frames doom concerns as partly commercial lobbying (S001). Weigh his safety and regulation views as an interested party: an open-source advocate who ran research at a company that gave models away. Inferred from S001, S012, S030.
- **Not an operator.** He stepped down from managing FAIR because he was not good at it (S001, S027) and has no operational role at AMI Labs (S009). His rules cover technology and openness, not pricing, sales, or cash.
