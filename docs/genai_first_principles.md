# GenAI from first principles

*Author: [Maxwill Lin](https://www.linkedin.com/in/maxwilllin/)*

*Last updated: {{ git_revision_date_localized }}*

## Why LLMs success

- useful objective: learn the distribution of human language
- efficiently trainable and expressive architecture: transformers / linear-RNNs

**generative ML is compression.**

$$
\theta^* = \arg\min_{\theta} \, \mathbb{E}_{z \sim p_{\text{data}}} \left[ \ell\left(h_\theta, z\right) \right]
$$

when we do maximum likelihood for GenAI especially, it is equivalent to minimizing the KL divergence
$$
\mathcal L(\theta)=H\bigl(p_{\text{data}}\bigr)+D_{\mathrm{KL}} \bigl(p_{\text{data}}\;\|\;p_\theta\bigr),
$$

As long as the empirically-observed scaling laws hold, emerging abilities must be there if loss is to decrease (forced to compress in the most generalizable way) 

---

## Reasoning? No, just well-guided RL

Typically RL does not work well in practice due to the enormous search space and sparse reward.
Human heuristics in language distribution (so-called reasoning) provides a good starting point.

--- 

## Actionables

How to build better LLMs?

- better data, nothing matters more than the distribution you learn...
- accurate reward and heuristic for RL training 
- scaling!


Prioritize good practices and filter / explain bad ones

- e.g. Masked LMs < Autoregressive LMs: there exist short cuts to prevent the model from compressing in the most generalizable way

Would love to explore and execute some first-principled research ideas if bandwidth permits