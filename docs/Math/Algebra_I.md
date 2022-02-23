---
title: Algebra I
author: Maxwill
lastUpdated: 2020/12/31
tags:
    - note
    - "2020"
    - Algebra
    - Math
    - NYCU
---


# Algebra I

---

http://math.ntnu.edu.tw/~li/algebra-html/
https://www.youtube.com/watch?v=8qkfW35AqrQ&ab_channel=ProfessorMacauley

## Preliminary and Basic Definition

01 Set.pdf

02 Equivalence Relations.pdf

03 Roots of unity.pdf

04 Binary Operations.pdf

05 Isomorphic Binary Structures.pdf

06 Strucutre Properties.pdf

07 Groups.pdf

## Elementary properties

08 Elementary Properties of Groups.pdf

09 Groups of small orders.pdf

10 Multiplicative group modulo n.pdf

11 Subgroups.pdf

## Cyclic Groups (Zn, Z)

12 Cyclic Subgroup.pdf

13 Cyclic Groups.pdf

- 14 Subgroups of Cyclic Groups.pdf
    - is cyclic(remember?)

## Permutation and Dihedral Groups
- 15 Group of Permutation.pdf

- 16 Cycle notations.pdf

- 17 Symmetry group of n-gons.pdf
    - obit - stablizer to be more understood

- 19 Transpositions.pdf
    - construction
        - adjacent -> non-adjacent
            - $(i, i + k) = (i + k, i + k − 1)(i, i + k − 1)(i + k, i + k − 1)$
        - non-adjacent -> cyclic
            - $(a_1, a_2,..., a_n) = (a_1, a_n)(a_1, a_{n−1}). . .(a_1, a_2)$
    - inversions
    - Even/Odd permutations
    - Sign representations
        - Determinant
    - Alternation Group

## Cosets / Cayley Theorem / Lagrange Theorem

### Key
- Cancellation
    - existance of inversion!!!!!

### Notes
- 18 Cayley Theorem.pdf
    - group are subgroup of $S_{|G|}$
    - pf: see g as permutation and verify
![](https://i.imgur.com/S3r4B4u.png)


- 20 Cosets.pdf
    - coset properties are important
    - what can do with the notation (by definition is obvious)
        - $(ab)H = a(bH) \not = aHbH$
        - $aH^2 = aH$
![](https://i.imgur.com/lg2nkAO.png)
:::spoiler
![](https://i.imgur.com/sK841y1.png)
:::

21 Theorem of Lagrange.pdf
(the lemma is actually more useful)
![](https://i.imgur.com/zGHZUKi.png)


22 Applications of Theorem of Lagrange.pdf

## Structure of Finitely Generated Abelian Groups

23 Diret Product.pdf

24 Finitely Generated Abelian Groups.pdf

25 Determine the Strucutres of Abelian Groups.pdf

## Normal Subgroup

### Overview
- Kernel of Homomorphism 
    - must important concept (can ignore in preimage)
    - $gN = Ng = \phi^{-1}(\{\phi(g)\})$
- Definition
- Properties
- Index 2 (bipartition)
- Quotient Group
    - well defined by $aHbH = abHH$
- First Isomorphism Thoerem
    - by def is obvious

### Detail
- 26 Homomorphism.pdf
    - definition (non-trivial => not all to e)
    - examples
        - evaluate homo
    - isomorphisms
    - ker?
- 27 Kernel of Homomorphism.pdf
    - Key, **by homomorphism and identity**, all soubld be = obvious and trivial
    - what maps to $a \in G$ by homomorphism $\phi :G \to G^{\prime}$ is $aH = Ha$ where $H = ker(\phi)$
![](https://i.imgur.com/BbX32IJ.png)
:::spoiler
![](https://i.imgur.com/m5OGyke.png)
:::

- 28 Normal Subgroups.pdf
    - definition
        - $gN = Ng ~\forall g \in G$
        - explicitly note that does not means each element is the same
            - (consider dihedral)
        - ![](https://i.imgur.com/PdDPB11.png)

    - proposition: subgroup of index 2 (partition is binary)
        - ![](https://i.imgur.com/aqUSTad.png)
    - properties
        -  ![](https://i.imgur.com/GbnJvQ0.png)
        -  pf:
            -  ![](https://i.imgur.com/O3YsObe.png)
    -  quotient group
        -  set of cosets with well-defined op
            -  requires normal to let $aHbH$ be $abH$
        -  $(G/N, ∗)$ is a group, called the quotient group of $G$ by $N$
    -  ![](https://i.imgur.com/hCRFB0g.png)
        -  my comment: the recall that here should be "by definition"
    -  **First Isomorphism Theorem**
        -  ![](https://i.imgur.com/y3O2uQi.png)
        -  G/N is group since N is ker(h) thus normal
        -  example of application
            -  ![](https://i.imgur.com/VecHXlI.png)

- 29 Quotient Group Computation.pdf
    - want to calc with familiar iso groups
        - ![](https://i.imgur.com/I9OlqhI.png)
        - pf: by FIT
    - elementary divisor theorem
        - pf: TB understood
        - view basis as linear comb of original
        - relation matrix
            - $(a_{ij})n, m$ (n: basis as l.c., m: basis of kernel)
        - ![](https://i.imgur.com/73LMP1c.png)
        - usage
            - ![](https://i.imgur.com/cpw5s4t.png)




--- 

## Exam 1 (97/105)
2020/11/5
linearity's power(range) 
- wrong at 
    - show $A_4 \not = D_6$
        - no order-6 element in A4
        - -8 in total
- TB more discussed
    - [ ] orbit-stablizer theorem
    - [ ] proof of the foundamental theorem of finitely generated abelian groups
    - [ ] classification of finite groups
    - [ ] elementary divisor theorem

---

## Normal+

### invariant through homomorphism
- note that N to G $\iff$ $\phi(N)$ to $\phi(G)$


### Center $Z(G)$
- $\{x \in G \mid xg=gx~~\forall g \in G\}$

### Commutator Subgroup $[G, G]$
- $\{a^{-1}b^{-1}ab \mid a, b \in G\}$

### Theorem
:::success
$[G, G]\triangleleft G$.
$G/N$ (s.t. $N\triangleleft G$) is abelian  $\iff [G, G] < N$.
:::


:::info
1.$[G,G]\triangleleft G$ by checking criterion $g^{-1}Ng \in N$
2.
$G/N$ is abelian
$\iff (aN)(bN)=(bN)(aN)$ for all $a,b$
$\iff abNN=baNN$ for all $a,b$ (N normal)
$\iff [G, G] < N$
2. actually obvious by the meaning of quotient is "see as same"
:::

### Normal Core
- recall: normal iff invariant under all conjunctions ($g^{-1}Ng=N$)
- consider $\bigcap_{g \in G}g^{-1}Hg$ for some subgroup $H$
    - invariant under conjunction
    - still subgroup of $G$ and of course $H$ by intersection
    - cell this the normal core of $H$
    - which is the largest normal subgroup in $H$

![](https://i.imgur.com/nAfyrrT.png)


---

## Graph Automorphisms and Caley Graphs

### Group of Graph Automorphisms
- $G = (V, E)$
- definition of $Aut(G)$ (a group under composition)
    - $\{f: V \to V \mid (x, y) \in E \implies (f(x), f(y)) \in E \}$

### Caley Graph
- A graph given by $(G, S)$
    - $G$ is a group
    - generating set $S \ni s \in S \implies s^{-1} \in S$
    - $(a, b) \in E \text{ if } as = b \text{ for some } s \in S$

### A Theorem
![](https://i.imgur.com/uysFQRT.png)

---

## Ring and Field

### Key
- additional structure for ring
    - unity
        - unit
    - commutation

### Note
- Ring 
    - Abelian Group
        - $(R, +)$
    - Multiplication
        - associative, $(ab)c = a(bc)$
    - Distribution Law
        - $(a+b)c = ac + bc$
- Ring Properties
    - $0 \cdot a = 0$
    - $a(-b) = -ab$
    - these are proven by distribution law
- **Ring+**
    - commutative 
        - multiplication satisfies $ab = ba$
    - with unity
        - multiplication idendity
        - i.e. $\exists e \ni ae = e \forall a \in R$
    - unit (defined if ring is with unity)
        - element that has inverse 
        - property: the set of units form a group
    - division ring (skew field)
        - every element is unit
    - field 
        - commutative division ring
- subring is easy to check as subgroup
- homomorphism and isomorphism is defined as usual
- example
    - $\mathbb{C} \cong \{ (a, b, -b, a) \mid a, b \in \mathbb{R}\}$ (matrix``)

---

## Integral Domain

### Key
- **cancellation law** of multiplication $\iff$ **no zero divisors**

### Notes
- motivation
    - solution to $ab = 0$ is not necessarily $a = 0$ or $b=0$
- divisors of zero
    - def:
        - $a \not = 0 \in \mathbb{R} \ni \exists b \not = 0, ab=0$
    - examples
- **cancellation law** of multiplication $\iff$ **no zero divisors**
    - hint: distibution law for the non-trivial direction
- notation $\frac ba$
    - used when
        - a is a unit (has inverse)
        - R is commutative
- definition
    - commutative ring
    - with unity $1 \not = 0$
    - no zero divisors
- example
    - direct product is always not integral domain
- fields and integral domains
    - fields are integral domains
        - $0 = ab = a^{-1}ab = b$
    - finite integral domains are fields
        - pf: hint cancellation law
            - by cancellation, and list all elements in $D$
            - consider left product of an element a 
            - by cancellation, all elements distinct + cardinality same
            - => must be one only $a_i$ s.t. $aa_i = 1$
        - if infinite?
            - cannot use the arguement of distinct and number of elements are the same

---

## Characteristic of a ring
- definition
    - the least positive integer s.t. $n \cdot a = 0~\forall a\in R$
    - if no such $n$, let it be 0
- examples
    - $\mathbb{Z}$ is of characteristic $0$
    - $\mathbb Z_n$ is of characteristic $n$
- theorem: check $1$ if R is ring with unity $1$
    - be careful that $n$ is not in $R$ here
    - $n\cdot a = a+a+a+a \dots = a(1+1+\dots+1) = a(n \cdot 1) = 0$
- theorem: let R be ring with unity if characteristic $n$, $\langle 1 \rangle \cong \mathbb{Z}/n\mathbb{Z}$
- QA:
    - how to show $(m \cdot 1) \cdot (n \cdot 1) = (m \cdot n) \cdot 1$
    - distribution law + counting

---

## Field of Quotient
- extend (infinite) integral domain $D$ to a field $F$
    - recall the definition carefully
    - i.e. we want inverse for all elements
- add $a^{-1}$ denoted as $\frac{1}{a}$ and their multiplication and addition
- $(a,b), (c,d)$ should be consider same if $ad=bc$ (think as inverse)
- so define a equivalent relation
- Now $D$ is (isomorphic to) a subdomain of $F$
- one can show such F is the smallest field containing $D$ (up to iso) 

---

## Ring of Polynomials
![](https://i.imgur.com/PQ8naSF.png)
![](https://i.imgur.com/n1KgWgP.png)
![](https://i.imgur.com/pOC0kTP.png)


---

## Ring of Polynomials II

### The First Ring Isomorphism Theorem
- http://math.ntnu.edu.tw/~li/algebra-html/node66.html

### Ring Extension
![](https://i.imgur.com/sAm90wn.png)
![](https://i.imgur.com/UGNv4WT.png)


---

## Polynomial 

### Division Algorithm of Polynomials
- given $f(x), g(x)$
- $f(x) = g(x)q(x) + r(x)$ for some **unique** $q, r$ with  $deg(r) \lt deg(g)$
- proof hint:
    - by considering the set $S = \{ f(x)-g(x)s(x) \mid  s(x) \in \mathbb{F}[x] \}$
    - consider r(x) tp be an element with miminal degree in $S$
    - make use of $\mathbb{F}$ has inverse
- division algorithm holds for integral domain if leading term of $g$ is invertible 

### Zeros of Polynomials
- definition
    - $a \in \mathbb{F} \ni f(a) = 0$
- theorem
    - $f(a) = 0 \iff x − a$ is a factor of $f(x)$
    - proof hint
        - division algorithm
- theorem
    - A nonzero polynomial $f(x) \in \mathbb{F}[x]$ of degree $n$ can have at most $n$ distinct zeros in $\mathbb F$.
    - proof hint
        - by induction
        - care require fields are integral domains thus have no zero divisors
        - self thinking problem
            - multiplicity of zero and at most $n$ zeros up to multiplicity
- theorem 
    - $G$ be a finite subgroup of the multiplicative group $F^{\times}$ then $G$ is cyclic
    - proof hint
        - the fundamental theorem for finitely generated abelian groups
        - a subgroup $H$ of $G$ isomorphic to only once (by taking power to $e_{i}$?)
        - then has to be distinct else $x^p=1$ has $p^2$ solutions
    - proof
        - ![](https://i.imgur.com/P4VXmcD.png)
- (supplement) Wilson's Theorem
    - $(p-1)!=-1 \mod p$
    - pf:
        - by inverse, and $x^2=1 \iff x=\pm1$
    - corallary: $x^p-p = \prod_i (x-i)$


### Irreducible Polynomials
- definition
    - if $f(x) = g(x)h(x)$ for some $g, h \ni deg(g) < deg(f)$ and $deg(h)<deg(f)$, $f(x)$ is reducible
    - otherwise, $f$ is irreducible (over $\mathbb F$ if $g, h$ are restricted in $\mathbb{F}[x]$)
    - equivelant definitions (0-deg functions are all units of $\mathbb F[x]$)
- if of degree 2 or 3
    - $f$ must has a zero since $2 = 1+1$, $3 = 1+2 = 1+1+1$ 
    - remark: $4 = 2+2$


### Gauss's Lemma
- note: calculations
![](https://i.imgur.com/rn48H8Z.png)
- example
    - factorize $x^4+1$ over $\mathbb{Q}$ and $\mathbb{Z}_3$
    - hint:
        - assume $x^4 + 1 = (x^2+ax+b)(x^2+cx+d)$ and start with $bd =1$

### Proof of Gauss's Lemma
- content of $f$
    - $\mathrm {Con}(f) = gcd(a_0, a_1, \dots, a_n)$
- $f$ primitive := $\mathrm {Con}(f) = 1$
- lemma
    - $\mathrm {Con}(g) = \mathrm {Con}(h) = 1 \implies \mathrm {Con}(gh) = 1$
    - pf hint: by mod p = 0 and no zero divisors
- proof:
    - assume $\mathrm {Con}(f) = 1$ is ok (diff is constant) 
    - assume $f(x) = ag(x) \cdot bh(x)$ where $\mathrm {Con}(g) = \mathrm {Con}(h) = 1$
    - show $ab = \frac r s = 1$
    - $s\mathrm {Con}(f) = \mathrm {Con}(sf) = \mathrm {Con}(rgh) = r\mathrm {Con}(gh) = r$
- corollary
    - irreducible over $\mathbb{Z} \iff$ irreducible over $\mathbb{Q}$
    - zero of f is of form $\frac b c \ni b \mid a_0, c\mid a_n$

----

### Factorization Modulo a Prime
- reduction over $m$ is a homomorphism
- mod m irreducible $\implies$ irreducible
    - not true for another direction
    - hint: homomorphism

### Eisenstein criterion (!!)
- $f(x) \in \mathbb{Z}[x]$, $p$ is a prime
- if 
    - $a_n \not = 0 \mod p$
    - $a_i = 0 \mod p ~ \forall i <n$
    - $a_0 \not = 0 \mod p^2$
- then
    - $f(x)$ is not reducible over $\mathbb{Q}$
- pf hint
    - claim the $\mod p$  conditions give that $\bar{f}=\bar{g}\bar{h}$ where $\bar{f}, \bar{g}, \bar{h}$ are in the form $\{a,b,c\}_kx^k$
    - then $a_0 \not = 0 \mod p^2 \implies \bot$
    - pf of claim
        -  let $r$ be the least integer s.t. $b_r \not = 0 \mod p$
        -  $s$ be that for $h(x)$
        -  then $a_{r+s} = \sum_{i=0}^{r+s}b_ic_{r+s-i} = b_rc_s \not = 0 \mod p$

### Cyclotomic Polynomials
- $\phi_p(x) = \sum_{i=0}^{p-1}x^{i} = \frac{x^p-1}{x-1}$ is reducible over $\mathbb{Q}$
    - pf hint
        - binomial expand $\phi_p(x+1)$
            - this step needs a lemma, pf?
        - constant term = $p$
        - Eisenstein Criterion
- $\phi_p(x)$ is called p-th cyclotomic polynomial
- The zeros of it are precisely the p-th roots of unity, except for 1.
- In general, n-th cyclotomic polynomial is 
    - $\begin{align*} \phi_n(x) = \prod_{gcd(k,n)=1}(x-\zeta_n^k) = \prod_{a \in \mathbb{C} \mid ord(a)=n}(x-a) \end{align*}$
    - where $\zeta_n^k=e^{\frac{2\pi i k}{n}}$
- ![](https://i.imgur.com/joFskV5.png =70%x)
- self thinking
    - show $\phi_n(x)$ is always a integer polynomial.

### GCD, Unique Factorization Theorem of F[x]
- CD of polys (trivial definition)
- GCD is unique up to units
- $af+bg=h$
- lemma: suppose $f=gh$, $p$ irreducible in $F[x]$ and $p|f$, then $p|g$ or $p|h$
    - pf by construction with $af+bg=1$
- Unique Factorization Theorem (statement is intuitive)
    - existence by induction
    - uniqueness by lemma + cancellation law of integral domain (remain Q?)

----

### Polynomial Ring Modulo A Polynomial
- def: Ring of Residue Classes
    - intuitive
    - ![](https://i.imgur.com/tjApiIZ.png)
- thm: poly $f$ is irreducible $\iff$ $\mathbb{F}_f[x]$ is a field
    - hint:
        - to the left, suppose $f = gh$, no zero divisor by fields are I.R.s
        - to the right, suppose $f$ is irreducible, by gcd argument construct inverse for all $g$
- thm: $F_f[x] \cong \frac{F[x]}{f(x)F[x]}$
    - pf: the 1st ring homomorphism(remain Q?)

---

### Field Extension
- $E$ is called a field extension of $F$ if $F \le E$
- if $E=F(\alpha)$ for some $\alpha \in E$ then $E$ is called a simple extension of $F$
    - note:
        - $F[a] := \{f(a)\}$
        - $F(a) := \{f(a)/g(a)\}$
- def:
    - **algebraic or transcendental** over $F$?
    - exist $f(x)\in F[x] \ni f(\alpha)=0$?
- thm:
    - transcendental evaluation is a isomorphism from $F[x] \to F[\alpha]$
    - proof is trivial

### Irreducible poly for $\alpha$ over $F$
- def:
    - $I_{\alpha} = \{f(x) \in F[x] \mid f(\alpha)=0 \}$
    - $p_\alpha$ be a non-zero poly in $I_\alpha$ with minimal degree
- thm: $p_\alpha(x)$ is irreducible
    - pf: let $p=gh$, then $g(\alpha)=0$ or $h(\alpha) = 0$
- thm: $I_{\alpha} = p_{\alpha}(x)F[x]$
    - pf: exercise
        - my guess, division algorithm
- $Irr(\alpha, F)$, the irreducible polynomial for $\alpha$ over $F$, the unique monic irreducible poly $p(x) \in I_{\alpha}$ 
- $deg(\alpha, F)$, the degree of $\alpha$ over $F$ $:=deg(Irr(\alpha, F))$

----

### Basis of Extension Fields
- keys
    - by $Irr(\alpha, F)$, GCD, Division
- thm:
    - let $E=F(\alpha)$ be a simple algebraic extension of $F$, $F(\alpha) = F[\alpha]$
    - pf hint:
        - find "inverse" of $g(\alpha)$ by GCD of $Irr(\alpha, F), g$
- thm:
    - $\forall \beta \in F[\alpha], \beta$ can be written  in $F^{deg(Irr(\alpha, F))}[\alpha]$
    - pf hint: division algorithm
- do some examples
    - find solution of fraction by GCD algo, or observation
- recap vector space
- thm:
    - $F[\alpha]$ is a vector space with a basis $\{1, \alpha, ..., \alpha^{n-1}\}$
    - for the case $\alpha$ is transcendental, $n=\infty$

----

### Algebraic Extension
![](https://i.imgur.com/Nkk3Z8g.png)
- thm: finite extensions are algebraic extensions
    - pf hint: $\{1, \alpha, \alpha^2 \dots, \alpha^n \}$ linear dependent => has non all zero...
- thm: $[K:F] = [K:E][E:F]$
    - pf hint: by def, expand twice
    - apps
        - ![](https://i.imgur.com/y0vyi1B.png)

----

### Algebraic Closure and Constructions of Field Extension
- Thm: let $E$ be a finite extension of $F$, if $\alpha, \beta$ are algebraic over $F$, so is $\alpha+\beta$ and $\frac\alpha\beta$
    - pf: 
        - its suffice to show $F(\alpha, \beta) = F(\alpha)(\beta)$ is a finite extension of $F$, which is obvious
        - then $[F(\alpha,\beta):F] = [F(\alpha,\beta):F(\beta)][F(\beta)):F]$
        - we then know they are algebraic (finite=>algebraic)
        - key: 2 step extension
- def:
    - Algebraic Closure of F in E
        - $\bar{F}_E=\{\alpha \in E \mid \alpha\text{ is algebraic over }F\}$
        - is a subfield of E
    - pf of is a field, by the above thm
- def:
    - Algebraically Closed
        - every non-constant polynomial in $F[x]$ has a zero in $F$
        - remark: so every poly is split in such F
- def:
    - An algebraic closure $\bar F$ of a field $F$
        - an algebraic extension of $F$ that is algebraically closed.
        - remark: the maximal field one may obtain by algebraic means
    - ex:
        - $\mathbb{C}$ to $\mathbb{R}$
        - $\bar{\mathbb{Q}}$ to $\mathbb{Q}$
-  pf of $\bar{\mathbb{Q}}$ to $\mathbb{Q}$
![](https://i.imgur.com/5OS3j4L.png)
![](https://i.imgur.com/spWPwyI.png)
- thm: every field has algebraic closure
- ![Uploading file..._838r8zhjm]()

### Construction of (Algebraic) Field Extension (the two ways)
- quotient field
    - ![](https://i.imgur.com/xSHGPmb.png)
    - ![](https://i.imgur.com/mF1ZmUn.png)
    - ![](https://i.imgur.com/b3aQpZh.png)
- a bigger field's subfield
- comparison
    - ![](https://i.imgur.com/S9OGPAc.png)

---

## Finite Field 
https://jupiter.math.nctu.edu.tw/~weng/courses/alg_2007/Algebra%202006-2/Handout-Section33.pdf
http://math.ntnu.edu.tw/~li/galois-html/galois.pdf
go through the exercise in winter vacation !
- propositions
    - ![](https://i.imgur.com/RSai3qM.png)
    - 1 is shown
    - 2 is trivial (hint: assume $p=rs$)
    - 3, 4 is direct proof (must contain $n \cdot 1_F$, for Q, $(n\cdot 1_F) (m \cdot 1_F)^{-1}$) 
- thm: finite field orders are $p^n$
    - by proposition 3
- how to explicitly construct a finite field of certain order?
    - ![](https://i.imgur.com/DCDwAhT.png)
- $GF(p^n)$ and $\phi_n(x)$
- ![](https://i.imgur.com/Djspej3.png)

---


## My Note for the scope of final exam 

### About field extension and finite field($F_{p^n}$)
- algebraic extension and basis
    - deg(irr)
    - finite <=> algebraic
    - deg of extension
        - $n!$ by $f$ to $f/(x-\omega)$
        - $m \mid n$
- finite field assumptions
    - group of unit of field is cyclic
    - $char(F) = p$ or $0$
    - F is (iso to) extension of $Z_p$ if $char(F) = p$
        - and 0
- Link $Z_p(\beta)$ to $F_{p^n}$ (unique!)
    - by $x^{p^n}-x$
    - proof iff
        - cardinality if group of unit + in closure => by order arguement is zero of the function
        - zeros of the function => 
        - ![](https://i.imgur.com/8CN06P2.png)
    - show existence by derivative and no repeated root
    - uniqueness 
- Cyclotomic polynomials over finite fields
    - ![](https://i.imgur.com/C6vjjE1.png)
- Factorization of $x^{p^n}-x$
    - ![](https://i.imgur.com/nNZ9vrW.png)

## problem type
- extension basis calculation
    - get inverse
    - represent zero of other poly
    - matrix correspondence
- definition and implications
- show $\phi_k(x)$ is irr. over $Z_p$
    - by argument that
        - $ord(\alpha)=k$
        - want $\alpha$ generate extension of full degree over p 
        - $\alpha \in F_{p^k}$ but not in divisors
- uniqueness of finite field
- matrix fields and their group of unities' structure
    - use finitely generated subgroup + order argument
    - final : (a, b, 0 a) => $Z_p \times Z_{p-1}$


---


## Review
- Group
    - group structures
        - cyclic
        - commutative
        - cardinality
    - cyclic groups
        - $Z, Z_N$
    - finitely generated abelian group
        - $\prod Z_{{p_i}^{e_i}} Z^n$
    - non-abelian group
        - $S_n, A_n, D_n, Q_8$
    - subgroup
        - coset
            - Lagrange Thm
        - normal subgroup
            - as kernel of group homomorphism
            - induce quotient group
    - simple group
        - 5 classes + 27 special case
    - group action
        - burnside's lemma
            - $|X/G| = \frac{1}{|G|}\sum_{g \in G}|X^g|.\,$
        - sylow theorem (next semester)
            - existence of $p$-subgroups
            - criterion for normalness of $p$-subgroups
        - the isomorphism theorems
            - first (this semester)
- Ring
    - commutative (this semester)
        - integral domain
            - field 
        - (not this semester)
    - non-commutative (not in this semester)
        - Matrix Ring
- Field
    - extension
        - all fields are extensions of $Z_p, Z$
    - finite field, $char(F) = p$
        -  $F_{p^n}$ is universal
            -  final will be a problem to contruct $|F| = 25, a+b\alpha$
        -  how to construct such fields
            -  find deg=n, Z_p pily
    - infinite field, $char(F) = 0$

----

### next semester
- group
    - isomorphism theorems
- ring (commutative)
    - integral domain 
        - PID
        - UFD
            - Fermat's Last Theorem
                - a showcase of "algebraic number thoery"
        - ED
    - ideals
    - CRT
    - Fermat's Little Theorem
    - RSA
        - CRT + Fermat's Little Theorem Application
- ring (non-commutative)
    - quaternion
- Golais Theory
    - study the group of symmetries of a field extension
    - when an extension is Golais(include all zeros of a poly) => a bijection between subfields and subgroups
        - solving poly eq by radical