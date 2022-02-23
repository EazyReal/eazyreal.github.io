---
title: "Introduction to QC, with Grover's Search"
tags:
    - talk
    - "2020"
    - quantum
    - algorithm
author: Maxwill
lastUpdated: 2020/12/29
slideOptions:  
  theme: sky
  transition: slide
  hash: true
  history: true


---

<!-- CSS -->
<style>
div.left {
    text-align: left;
}
</style>

<style>
div.small {
    font-size: 0.85em;
}
</style>

$$
\newcommand{\<}{\langle}
\renewcommand{\>}{\rangle}
$$

## Introduction to Quantum Computing
- 0712238 Yan-Tong Lin

---

## Motivation

:::success
<div class="small">
One might state the main goal of theoretical computer science as "study the power
and limitations of the strongest-possible computational devices that Nature allows us."  

Since our current understanding of Nature is quantum mechanical, theoretical computer science should arguably be studying the power of quantum computers, not classical ones.  

--- Ronald de Wolf
</div>
:::

---

## The Big Picture

<div class="small">

- Introduction to Quantum Computating
    - Postulates of QM
    - Basics of QC
- Grover's Search

</div>


---

## Postulates of QM

----

### Quantum State

<div class="small">

- single-qubit system
    - $|0\rangle :=$ a state representing bit $0$
- multi-qubit system
    - $|00\rangle := |0\rangle \otimes |0\rangle$
    - $|00\rangle, |01\rangle, |10\rangle, |11\rangle$
    - n qubit system has $2^n$ bases
</div>

----

### Superposition

<div class="small">

- $|0\rangle + |1\rangle$
- linear combinations of states are allowed
</div>

----

### Measurement

<div class="small">

- $|\psi\rangle = \alpha|0\rangle + \beta |1\rangle \ni \alpha, \beta \in \mathbb{C}$
- when we try to "measure" the state
- $Pr(M(|\psi\rangle) \to |0\rangle) = |\alpha|^2$ 
- $|\psi\rangle=\sum a_i |i\rangle \implies \sum |a_i|^2 =1$
    - called normalization
</div>

Note:
- sometime ignore normalization if we do not care

----

### Entanglement

<div class="small">

- $|00\rangle + |11\rangle$
- mutaul information
</div>

Note:
- not a postulate actually, more like a property discovered by the definitions
- Superposition and 
- Formal definition of Entanglement is 

----

### Unitary Evolution

<div class="small">

- norm perserviation is desired
- $\langle Ux, Uy \rangle = \langle x, y \rangle \implies UU^{\dagger}=I$

</div>

---

## Basics of QC

----

### Quantum Gates

<div class="small">

- like gates on classical bits
- $X= \begin{pmatrix}
0 && 1 \\
1 && 0 \\\end{pmatrix}$, $Y= \begin{pmatrix}
0 && -i \\
i && 0 \\\end{pmatrix}$, $Z= \begin{pmatrix}
1 && 0 \\
0 && -1 \\\end{pmatrix}$
- $CNOT$: $|x\rangle|y\rangle \to |x\rangle|x \oplus y\rangle$
- $H= \frac{1}{\sqrt{2}} \begin{pmatrix}
1 && -1 \\
1 && 1 \\\end{pmatrix}$

</div>

Note:
- X is not, Y, Z is upto change of basis
- H is like sqrt ok identity, to uniform 
- (Mention  Universality) There exist universal quantum gate set that permits arbitrarily small error.

----

### Oracles

<div class="small">

- quantum version of a certain function $f$
- $O_f(|x, y\>) = |x, y\oplus f(x)\>$

</div>

Note:
- if we know $f$, it should be easy to construct the corresponding $O_f$ 

----

### Quantum Parallelism

<div class="small">

- $f:\{0,1\}^n \to \{0,1\}$ is either balanced or constant
- It requires $O(N=2^n)$ query of $f$ for a classical circuit to judge
- quantum: $O(1)$ query

</div>

Note:
- can briefly introducethe concept of complexity here (asymptotic time as function of n)

---

### Deutsch-Jozsa Algorithm

![](https://i.imgur.com/spO33xo.png)

----

![](https://i.imgur.com/s83f0z3.png)


----

![](https://i.imgur.com/YEDFJP7.png)


----

![](https://i.imgur.com/uYwC5lG.png)


----

![](https://i.imgur.com/vLmd8PG.png)

----

![](https://i.imgur.com/HYtub8h.png)


---

### Grover's Search
Gover's search is a quantum algorithm for the "unstructured search" problem.
The core idea is to see the input space as a combination of "Good" and "Bad" subspaces and do reflections (Grover's iteration) to make the probability of observing the "Good" part higher. To achieve a probability close to 1, about $O(\sqrt{n})$ iterations are required.

----

### The Problem - Unstructured Search

![](https://i.imgur.com/9HX9OIu.png)

----

### Assumption - has a query oracle
![](https://i.imgur.com/i2Qugc9.png)

----

### View Uniform Superposition as l.c. of $|G\rangle, |B\rangle$
<div class="small">

- $|G\rangle = \sum |\omega\rangle$
- $|B\rangle = \sum |\omega\rangle$
- $|U\rangle = \sin(\theta)|G\rangle + \cos(\theta)|B\rangle$
    - here  $\sin(\theta) = \sqrt{\frac{M}{N}}$

</div>

----


![](https://i.imgur.com/ykILlqv.png)

----

![](https://i.imgur.com/lA8g59U.png)

----

![](https://i.imgur.com/FakUoeP.png)


---

### References
- https://homepages.cwi.nl/~rdewolf/qcnotes.pdf
- Quantum Computation and Quantum Information, Michael Nielsen, Isaac Chuang
- https://qiskit.org/textbook/preface.html

---