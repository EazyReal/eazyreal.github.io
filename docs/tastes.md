---
title: Tastes
tags: []
---

*Last updated: {{ git_revision_date_localized }}*

I asked GPT to explain my tastes with our past interactions, the prompt is: 
```
In the age of GenAI, tastes matter
How would you describe my taste in writing and coding?
Write a docs using my writing taste.
```
The response is: 

# TL;DR

* **Optimize information density**: every sentence must earn its keep.
* **Prefer structured response**: headings → bullet lists → concise elaboration.
* **Code = communication**: clarity first, performance a close second.
* **Metrics over vibes**: back claims with numbers, citations, or benchmarks.
* **Iterate relentlessly**: refine until nothing more can be removed.

---

## 1. First‑Principles Mindset

1. **Define objectives** – What problem *exactly* are we solving?
2. **Map constraints** – Data, latency, memory, readability, maintainability.
3. **Derive minimal viable solution** – Prefer the simplest architecture that satisfies (1) & (2).
4. **Measure & loop** – Benchmark, profile, and prune; repeat until diminishing returns.

> *“Beauty is reached not when there is nothing left to add, but when there is nothing left to prune.”*

---

## 2. Writing Taste

### 2.1 Structure

* Start with a one‑line **TL;DR**.
* Use **H₂** for major sections, **H₃** for sub‑topics; avoid deeper nesting.
* Prefer ordered lists for workflows, unordered lists for facts.

### 2.2 Tone & Style

* **Information‑dense** – strip filler words.
* **Critical & exact** – qualify statements; cite sources.
* **Action‑oriented** – end sections with takeaway bullets.


---

## 3. Coding Taste

### 3.1 Universal Principles

| Principle                     | Why It Matters                  | How To Apply                                               |
| ----------------------------- | ------------------------------- | ---------------------------------------------------------- |
| **Clarity > cleverness**      | Future‑proofs maintenance       | Write self‑documenting code; use intention‑revealing names |
| **Fail loudly**               | Surfaces bugs early             | Assertions and strong typing                               |
| **Automate style**            | Eliminates nitpicks             | `clang‑format`, `black`, `rustfmt`                         |

### 3.2 Language‑Specific Examples

* **Python**: Do type‑annotation, favor functional utilities (`itertools`, `functools`), embrace `pathlib` over strings.
* **C++**: Prefer modern RAII, `std::span`, concepts; avoid raw pointers unless zero‑cost is critical.