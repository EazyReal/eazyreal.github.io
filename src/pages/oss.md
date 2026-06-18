---
layout: ../layouts/ArticleLayout.astro
title: OSS Contributions
tags: [engineering, oss]
---

# OSS Contributions

Selected merged PRs to open-source systems I use for RL infrastructure and software-engineering agent training.

## slime

- [CISPO advantage estimator](https://github.com/THUDM/slime/pull/2067) — added the MiniMax-M1 CISPO estimator at slime's policy-loss seam, with tests for surrogate value and gradient routing.

## Harbor

- [dspy.RLM agent](https://github.com/harbor-framework/harbor/pull/1965) — added a host-side agent with a sandbox tool bridge and deterministic tests.
- [Scoped trial log streaming](https://github.com/harbor-framework/harbor/pull/1966) — added structured live stdout/stderr callbacks for long-running trials.
- [mini-swe-agent credential env handling](https://github.com/harbor-framework/harbor/pull/1968) — fixed host-side credential and API-base resolution from configured agent env.
- [Agent install fix](https://github.com/harbor-framework/harbor/pull/1039) — fixed install scripts when uv's env file is absent.
- [Adapter docs fix](https://github.com/harbor-framework/harbor/pull/1964) — aligned adapter README filenames with the validator contract.
