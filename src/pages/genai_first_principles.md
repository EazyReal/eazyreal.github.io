---
layout: ../layouts/ArticleLayout.astro
title: "GenAI from first principles"
description: "A short first-principles note on generative ML, compression, scaling, and RL."
kind: essay
section: GenAI
featured: true
selected: true
tags:
    - genai
    - llm
    - first principles
    - rl
---

# GenAI from first principles

*Author: [Maxwill Lin](https://www.linkedin.com/in/maxwilllin/)*


## Intelligence is compression

Compression is assigning shorter codes to likely data.
For a generative model, negative log-likelihood is expected code length:

$$
\mathcal L(\theta)
= \mathbb E_{x \sim p_{\text{data}}}[-\log p_\theta(x)]
= H(p_{\text{data}}) + D_{\mathrm{KL}}(p_{\text{data}} \| p_\theta)
$$

Since $H(p_{\text{data}})$ is fixed, maximum likelihood is minimizing:

$$
D_{\mathrm{KL}}(p_{\text{data}} \| p_\theta)
$$

So training a generative model is learning a compressor for the data distribution.
If the distribution is broad enough, memorization is not enough; lower loss requires reusable structure.

What we call intelligence is useful structure discovered by compression.

---

## Scaling laws + implementation

If intelligence is useful compression, scaling laws say better compression keeps converting data, parameters, and compute into lower loss.

The Bitter Lesson is the implementation rule: less hand-coded inductive bias, more scalable search and learning.

A scalable implementation of compression is how intelligence is built:

- data: broad enough that shortcuts fail
- objective: dense compression signal
- architecture: expressive, low-bias, highly parallelizable
- compute: optimization that keeps improving with scale

Pretraining works because all four scale.
Next-token prediction is not perfect, but it is simple enough to apply to almost all human text.
Transformers / linear-RNNs are not magic, but they make the objective trainable at scale.

---

## RL with pretrained knowledge

RL is hard when search is blind and reward is sparse.
LLM RL works better because pretraining makes search non-blind.

The model already has knowledge, patterns, and human heuristics, so rollouts are more likely to hit reward.
RL then selects and sharpens useful behavior.

If tasks are diverse and hard enough, genuine reasoning is forced to emerge for better rewards.
Similar to pretraining: if reward keeps improving on broad tasks, the model must learn general strategies instead of memorizing shortcuts.

--- 

## How to build great models

Data:

- scalable and high-quality pretraining distribution
- RL tasks that teach generalizable behaviors, or the abilities we genuinely care about

Architecture:

- expressive
- highly parallelizable training
- less unnecessary inductive bias

Compute:

- stable optimization
- enough compute / $$ to scale

And no bugs or hackable objectives.
