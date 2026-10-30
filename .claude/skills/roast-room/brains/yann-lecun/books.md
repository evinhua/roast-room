# Books: Yann LeCun

Built from 92 usable talks, interviews, lectures, hearings, and essays (S001 to S099, six excluded as listed in `sources.md`). He has one book, a French popular account of deep learning, and no source in the corpus discusses it. His decision thinking lives in a position paper, two co-written essays, and keynotes he reuses, listed below. Summaries are in my own words; no book text was fetched.

## Quand la machine apprend (2019)
- **Core thesis:** A general-audience account, in French, of how deep learning developed. This line is general knowledge, not from the corpus.
- **Key frameworks:** not covered in the corpus, so none are recorded here. The council should not attribute any view to this book.
- **Taught in sources:** none.

## A Path Towards Autonomous Machine Intelligence (position paper, 2022)
- **Core thesis:** Current AI lacks world models, persistent memory, reasoning, and hierarchical planning. He lays out a modular, objective-driven architecture to supply them and proposes JEPA as the way to learn world models from observation. He says plainly that he had not implemented the whole thing and does not know how to build one module, the configurator (S099).
- **Key frameworks:** objective-driven AI (perception, memory, world model, actor, an immutable intrinsic cost plus a trainable critic, a configurator, planning by optimization); two modes, reactive and planning; JEPA and hierarchical JEPA over generative prediction; energy-based models trained with regularized rather than contrastive methods (VICReg); hierarchical planning as the open problem; safety by inference-time guardrails rather than fine-tuning.
- **Taught in sources:** presented as a talk in S099; he describes the paper in S023 and S030; summarized by a host in S003; discussed with critics in S070 and S071; the architecture is presented at length in S009, S014, S031, S032, S033, S052, S081, S084, and S087.

## Noema essays with Jacob Browning (2022)
- **"What AI Can Tell Us About Intelligence":** sides with the empiricist view that symbol use can be learned rather than hard-coded, and argues that deep learning's failures have so far been hurdles, not walls. Taught in S036; he refers back to the Noema work in S068.
- **"AI And The Limits Of Language":** language is a narrow, low-bandwidth channel, most human knowledge is non-linguistic, and a system trained on text alone has only shallow understanding. Taught in S035; the same argument runs through S037, S065, and S087.

## Major talks and series he reuses
- **"Predictive Learning" and the cake (NYU 2015, NIPS 2016 keynote, 2017 talks):** self-supervised learning as the bulk of intelligence, RL as the cherry, prediction as the essence of intelligence, energy-based learning, adversarial training. Taught in S034, S095, S097; referenced in S005, S015, S025, S032, S047, S051, S089.
- **Turing Award lecture and history talks (2019 to 2020):** the deep learning revolution and its sequel, differentiable programming, the theoretical street light effect, building your own tools, why neural nets lost the 1990s. Taught in S089, S090, S091, S092, S093, S094.
- **"Objective-Driven AI" lecture series (2023 to 2024):** the full architecture, the four abandons (generative models, probabilistic models, contrastive methods, and reinforcement learning where possible), the exponential error argument, and the open-source argument. Taught in S031, S033, S084, S085, S087, S088.
- **World models and AMI Labs talks (2025 to 2026):** the business case for world models in industrial control, robotics, and healthcare, SigReg, V-JEPA 2, and Project Tapestry for federated open training. Taught in S001, S002, S004, S006, S009, S029, S030, S041, S048, S053, S058, S081, S082.
- **Senate testimony (2023):** AI as foundational infrastructure like the internet, open base models, regulate applications not research. Taught in S039.

## Books he cites
- **Are We Smart Enough to Know How Smart Animals Are? (Frans de Waal):** he calls it essential reading; animal intelligence is rich and has nothing to do with language. Cited in S008.
- **Perceptrons (Minsky and Papert, 1969):** he says the results were correct but over-read, which pushed neural nets aside for years. Cited in S025.
- **Superintelligence (Nick Bostrom):** he finds its scenarios, such as the paperclip maximizer, completely unrealistic. Cited in S034.
