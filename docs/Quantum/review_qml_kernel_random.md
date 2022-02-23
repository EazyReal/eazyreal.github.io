---
title: "Review: Learning with Optimized Random Features: Exponential Speedup by Quantum Machine Learning without Sparsity and Low-Rank Assumptions"
tags:
    - review
    - quantum
    - QFT
head: quantum
author: Maxwill
lastUpdated: 2021/04/08
---

$$
\newcommand{\fg}{\mathfrak{g}}
\newcommand{\f}{\mathfrak}
\newcommand{\b}{\mathbb}
\newcommand{\t}{\text}
~
\newcommand{\>}{\rangle}
\newcommand{\<}{\Langle}
~
\newcommand{\aa}{\alpha}
\newcommand{\bb}{\beta}
\newcommand{\kk}{\kappa}
\newcommand{\cc}{\gamma}
\newcommand{\DD}{\Delta}
\newcommand{\ee}{\epsilon}
$$


# Review: Learning with Optimized Random Features: Exponential Speedup by Quantum Machine Learning without Sparsity and Low-Rank Assumptions
- 2021/3/29
- https://www.youtube.com/watch?v=m7LMRoTl0qo&ab_channel=NCTSPhysicsDivision
- https://arxiv.org/abs/2004.10756

### Supervised Learning
- Model
- Generalization Error
- Kernel
    - Traslation Invariant
        - $\kk(x,x') = \tilde{\kk}(|x-x'|)$ for some $\tilde{\kk}$

### Feature Expansion
- Feature Function 
    - $\varphi(v,x) : V\times X\to \b{R}$
- Approx $f$ using superposition of feature functions
    - sample $M$ feature functions
    - optimized with $N$ data
-  Random Feature Expansion
    -  data-independent ($d\tau$)
    -  data dependent ($q^*_{\ee}(v)d\tau(v)$)
        -  but this requires $O(e^D)$ time sampling 
- Key Ingredients (**QRAM, QFT, QSVT**)
    - input model
        - $d\rho(x)=q^{\rho}(x)dx$
        - a $\log N$-depth binary tree embeds the input data information
            - borrow from "Quantum Recommendation Systems(2016)"
        - use $q^\rho(x)$ embedded into a diagonal op. $\tilde{q}$
            - blackbox quantum state preparation(2002)
            - $|0\> \to \sum_x \sqrt{\hat q^\rho(x)} |x\>$
                - note that Frobenius norm of $\sqrt{\hat{q}}$ is 1
                    - important for complexity analysis
    - implementation of a Hermitian Operator
        - **block encoding** with **QSVT**
    - construction of  $\tilde\Sigma_\epsilon^{-\frac 1 2}$ (Key speedup)
        - make use of sparcity in Fourier basis 
            - the kernel function is **translation invariant**
                - **circuilar structure**

