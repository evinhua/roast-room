# Books: Yann LeCun

Built from 33 talks, interviews, and lectures (S001 to S034). He has one book, a French popular account of deep learning, and no source in the corpus discusses it. His decision thinking lives in a position paper and recurring keynotes, listed below. Summaries are in my own words; no book text was fetched.

## Quand la machine apprend (2019)
- **Core thesis:** A general-audience account, in French, of how deep learning developed. This line is general knowledge, not from the corpus.
- **Key frameworks:** not covered in the corpus, so none are recorded here. The council should not attribute any view to this book.
- **Taught in sources:** none.

## A Path Towards Autonomous Machine Intelligence (position paper, 2022)
- **Core thesis:** Current AI lacks world models, persistent memory, reasoning, and hierarchical planning. He lays out a modular, objective-driven architecture to supply them and proposes JEPA as the way to learn world models from observation.
- **Key frameworks:** objective-driven AI (perception, memory, world model, actor, task and guardrail costs, planning by optimization); JEPA and joint embedding over generative prediction; energy-based models trained with regularized rather than contrastive methods; hierarchical planning as the open problem; safety by inference-time guardrails rather than fine-tuning.
- **Taught in sources:** he describes the paper in S023 and S030; it is summarized by a host in S003; the architecture is presented at length in S009, S014, S031, S032, and S033.

## Major talks and series he reuses
- **"Predictive Learning" and the cake (NIPS 2016 keynote and 2017 talks):** self-supervised learning as the bulk of intelligence, RL as the cherry, prediction as the essence of intelligence, energy-based learning. Taught in S034, referenced in S005, S015, S025, S032.
- **"Objective-Driven AI" lecture series (2023 to 2024):** the full architecture, four unpopular recommendations (abandon generative models, probabilistic models, contrastive methods, and reinforcement learning where possible), and the open-source argument. Taught in S031, S033.
- **World models and AMI Labs talks (2025 to 2026):** the business case for world models in industrial control and healthcare, SigReg, and Project Tapestry for federated open training. Taught in S001, S002, S004, S006, S009, S029, S030.

## Books he cites
- **Are We Smart Enough to Know How Smart Animals Are? (Frans de Waal):** he calls it essential reading; animal intelligence is rich and has nothing to do with language. Cited in S008.
- **Perceptrons (Minsky and Papert, 1969):** he says the results were correct but over-read, which pushed neural nets aside for years. Cited in S025.
- **Superintelligence (Nick Bostrom):** he finds its scenarios, such as the paperclip maximizer, completely unrealistic. Cited in S034.
