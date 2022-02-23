---
title: Algebra II
author: Maxwill
lastUpdated: 2021/03/04
tags:
    - note
    - "2021"
    - Algebra
    - Math
    - NYCU
---

# Algebra II

## 2021/2/22 - Recap and Roadmap for this semester

### Recap (Some missing)
- Group
    - cyclic
    - abelien
        - product of cyclic
    - non-abelian
        - Sn/An/Dn/Q
- Ring 
    - Integral Domain (No zero divisor)
        - Field
    - Field Extension (with multiplicative inverse)
        - finite/algebraic/transcendental
        - introduction to Galois($F_{P^k}$)

### Roadmap
Hilight: CRT, RSA,UFD, GF, FTA

- Group
    - group action
        - Cauchy Theorem 
        - Burnside's Lemma
    - product of two subgroups
    - existence of normal subgroup
    - Sylow Theorems
        - existence of subgroup of certain size
        - when it will be normal
        - proof corollary: $A_5$ is the smallest simple group
            - Note: simple group := group w/o normal subgroup
- Ring
    - $Z/nZ$
        - Chinese Remainder Theorem
            - RSA
    - non-communative ring
        - quaternion algebra and 3D rotation
    - 3 Integral Domain
        - PID
        - UFD
            - Fermat's Last Theorem, case n=3
        - ED
- Field
    - Galois Theory
        - Finite
        - Infinite
        - i.e. study field extension with group
        - applications
            - Foundamental Theorem of Algebra
            - Solving equation by Radical
            - Three Greek Geometric Problems

----

## 2021/2/25 - Group Action, Stabilizer and Orbit

### Group Action
- Definition
    - $*:G\times X \to X$, $G$ is a group, $X$ is a set
    - $*(g, x) \text{ write as } gx$
    - satisfy
        - $*(e,x)=x \forall x$
        - $*(g_2, *(g_1, x)) = *(g_2g_1,x)$
    - another point of view
        - $\rho:G\to S_X$ s.t. $*(g,x)=\rho(g)(x)$
        - group homomorphism $G \to S_X$
- Remarks
    - think of its kernel!
- Examples
    - Group Action of $G$ on $X=G$
        1. left multiplication
            - $\rho:G\to S_G, \rho(g)(x)=gx$
        2. conjugate 
            - $\rho:G\to Aut(G), \rho(g)(x)=gxg^{-1}$
    - Group Action of $G$ on $X=G/H$
        - left multiplication
            - $ker_{\rho}=\bigcap_{x\in G}xHx^{-1}=\text{the largest normal subgroup contained in H}$
- Additional Property
    - faithful
        - $e \text{ is the only element in G that } ex = x \forall x \in X$
    - transitive
        - $\forall x_1, x_2, \exists g\in G \ni x_1=gx_2$

### Stabilizer and Orbit
- Definition
    - $G_x = \{g \in G :~gx=x \text{ for some }g\}$
    - $G_X = \{x \in X :~gx_0=x \text{ for some }g\}$ for some $x_0$
        - defined by eq. class induced partition
- Thm.
    - $|G_X| = [G:G_x]$
        - proof by isomorphism
- Thm. - the theorem of fixed subset of p-groups
    - $|X| \equiv |X^G| \mod p$ when $G$ is p-group
        - $X^G = \bigcap_g X^g$, $X^g=\{x\in X: gx=x\}$

### Applications of "theorem of fixed subset of p-groups"
- Lemma - group of order $p$ is cyclic ($Z_p$)
    - pf: Lagrange
- Thm. - p-group has non-trivial $Z(G)$
- Class Equation
- Thm. - group of order $p^2$ is abelian
    - PBC, suppose not, $Z(G), G/Z(G) \cong Z_p$
- Thm. - Cauchy thm.
    - suppose $p| |G|$, $G$ has an element of order $p$ 
    - pf sketch
        - $X = \{(g_1,g_2,...,g_p) : g_1...g_p=e\}$
        - $P = <(1,2,...,p)>~\subset S_p$ 
        - $X^P$ has non-trivial element, but it can only be in the form of $(g,g,g...,g)$


### Burnsides, application and $H\wedge N$