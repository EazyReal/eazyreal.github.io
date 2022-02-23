---
title: "Quantum Information Theory: CHSH Game"
tags:
    - talk
    - quantum
    - QIT
head: quantum
author: Maxwill
lastUpdated: 2021/06/16
---

$$
%2020/12/19 latex macro from Exponential Algorithmic Speedup with Quantum %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Definitions
\newcommand{\<}{\langle}
\renewcommand{\>}{\rangle}
%
\newcommand{\be}{\begin{equation}}
\newcommand{\ee}{\end{equation}}
\newcommand{\bea}{\begin{eqnarray}}
\newcommand{\eea}{\end{eqnarray}}
%
\newcommand{\cond}[1]{\left\{\begin{array}{l@{~~~}l}#1\end{array}\right.}
\newcommand{\qph}[1]{quant-ph/#1}
%
\newcommand{\BPP}{{\mathrm{BPP}}}
\newcommand{\BQP}{{\mathrm{BQP}}}
\newcommand{\ent}{{\textsc{entrance}}}
\newcommand{\exit}{{\textsc{exit}}}
\renewcommand{\root}{{\textsc{root}}}
%
\renewcommand{\d}{{\mathrm{d}}}
\newcommand{\sech}{\mathop{\mathrm{sech}}\nolimits}
\newcommand{\Ai}{\mathop{\mathrm{Ai}}\nolimits}
\newcommand{\poly}{\mathop{\mathrm{poly}}\nolimits}
\newcommand{\col}{\mathop{\mathrm{col}}\nolimits}
%
\newcommand\symProb{\mathop{\mathrm{Pr}}\displaylimits}
\newcommand\symExpec{\mathop{\mathrm{E}}\displaylimits}
\def\prob#1#2{\symProb_{#1}\left[ #2 \right]}
\def\expec#1#2{\symExpec_{#1}\left[ #2 \right]}
$$

## Quantum Information Theory: CHSH Game

##### NYCU CS, Yan-Tong Lin

---

## Postulates of QM (Quick Review)
- States of Systems are Unit Vectors in Hilbert Spaces
- Evolutions are linear transforms on the Hilbert space
- Measurements are Collections of Operators
- Composition of Systems is like doing tensor product

----

### Quantum State and Qubit

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
    - a [reference](https://ocw.mit.edu/courses/physics/8-04-quantum-physics-i-spring-2013/lecture-notes/MIT8_04S13_Lec01.pdf) to why we think so
</div>

Note:
This is a talk that is good for trying to understand superposition. https://ocw.mit.edu/courses/physics/8-04-quantum-physics-i-spring-2013/lecture-notes/MIT8_04S13_Lec01.pdf

----

### Measurement

<div class="small">

- $|\psi\rangle = \alpha|0\rangle + \beta |1\rangle \ni \alpha, \beta \in \mathbb{C}$
- when we try to "measure" the state
- $Pr(M(|\psi\rangle) \to |0\rangle) = |\alpha|^2$ 
- $|\psi\rangle=\sum a_i |i\rangle \implies \sum |a_i|^2 =1$
    - normalization
</div>

Note:
This is just measurement in computational basis, not general measurement
A set of operators satisfying certain conditions can do

----


### Unitary Evolution

<div class="small">

- norm perservation is required
- $\langle Ux, Uy \rangle = \langle x, y \rangle \implies UU^{\dagger}=I$

</div>

----

### Entanglement

<div class="small">

- we can get states that have spooky behaviors
- $|00\rangle + |11\rangle$
    - the measurement result to the first bit must be the same as the second bit
    - Today's aim is to demo the power of entanglement 
</div>

---

## The CHSH Game
- Desciption
- Best Classical Deterministic Strategy
- Best Private Random Variable Strategy
- Best Shared Random Variable Strategy
- Strategy using Entanglement

----

### Description
![](https://i.imgur.com/qcF0JcK.png)

- maximize $P(a\oplus b= s\wedge t|s,t)$
<!--

mermaid
graph LR
subgraph Earth
    a Alice x
end
subgraph Mars
    b Bob y
end

-->


Note:
- Alice and Bob
    - given $a, b$ i.i.d. uniform
    - produce $x, y$ without communication
    - can use policy $\pi$

----

### Best Classical Deterministic Strategy
- $a_0 \oplus b_0 = 0$
- $a_0 \oplus b_1 = 0$
- $a_1 \oplus b_0 = 0$
- $a_1 \oplus b_1 = 1$
- cannot satisfy all, atmost 3 out of 4

----

### Best Private Random Variable Strategy
- allow $Alice(s, \text{her coin})$
- discuss for each outcome of their coins
    - $\sum_{xy\in\{0,1\}^2} P_{xy}P_{\pi_{xy}}(a\oplus b= s\wedge t|s,t)$
        - note: independence of $x,y$ and $s,t$
    - each is deterministic so is at most $\frac34$ 

Note:
correct me if i am wrong

----

### Best Shared Random Variable Strategy
- allow $Alice(s, \text{their coin})$
- discuss for each outcome of their coin

----

### Strategy using Quantum Entanglement
![](https://i.imgur.com/P78amLA.png)
- success prob = $cos(\frac\pi8)^2$ for each case

---

### Remarks
- Conclusion
    - There can be something that differs the two framework fundamentally!
- Please think of what is not given in this talk but potentially important
- What questions do you want to ask?

---

## Reference FYI

<div class="small">

- some lecture notes
    - http://web.stanford.edu/~oas/SI/QM/notes/SIQMWeek3.pdf
    - http://theory.caltech.edu/~preskill/ph229/notes/chap4.pdf
- [Non-locality and Communication Complexity, A Review Paper](https://homepages.cwi.nl/~rdewolf/publ/qc/BCMW09-arxiv.pdf)
- [MIT OCW - Quantum Physics I](https://ocw.mit.edu/courses/physics/8-04-quantum-physics-i-spring-2013/)
- [MIT OCW - Quantum Computation, Shor](https://ocw.mit.edu/courses/mathematics/18-435j-quantum-computation-fall-2003/index.htm)
- [QCQI, Neilson and Chuang](https://www.amazon.com/Quantum-Computation-Information-10th-Anniversary/dp/1107002176)
- [QIP 2021 Tutorial on Quantum Algorithms](https://www.youtube.com/watch?v=M0e5gkf7QSQ&ab_channel=MunichCenterforQuantumScience%26Technology)
    - An amazing talk but not so newbie-friendly
    - inluding linking quantum to representation theory (solving HSP with QFT)
    

</div>