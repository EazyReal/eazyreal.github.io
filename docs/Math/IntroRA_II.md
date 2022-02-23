---
title: Introduction to Analysis II
author: Maxwill
tags:
    - note
    - Analysis
    - Math
    - NYCU
---

# Introduction to Analysis II

Notes for Introduction to Analysis II.
The screenshots are from the lecture notes of [Prof. MC Li](https://www.math.nctu.edu.tw/faculty/faculty_content.php?S_ID=14&SC_ID=1).


[TOC]

## week 1-1 (3/3/2020)

### Reimann Intergral
#### partition and refinement
* refinement = add points to partition
* definition of Reimann sum ($U_f(P), L_f(P), R_f(P)$)
    * show  $L_f(P) \le L_f(Q)$ and $U_f(P) \ge U_f(Q)$
    * hint : $Q = P \cup (Q-P)$ 
* Reimann intergral
* Reimann intergrability 
:::info
Proof of Prop. 31.3

31.3.1
since f is $bounded$, by the $completeness$ of $R$,
$m_i \le f(x_i) \le M_i$ are all well defined.


31.3.2

:::

## Week 1-2

### Reimann Intergrability
* http://home.iitk.ac.in/~psraj/mth101/lecture_notes/lecture15-16.pdf
* inf and suf and reimann intergral definition
![](https://i.imgur.com/6cBS3AF.png =30%x)
### refinement
![](https://i.imgur.com/XYx6J5Y.png)
Note: proof of equivalence part use the property of inf and sup 
![](https://i.imgur.com/U8VwsNN.png =80%x)
![](https://i.imgur.com/7CYSkNE.png =80%x)

### boundedness and monotonicity => integrability
* P = $\{a=x_0<x_1<...<x_n=b\}$ where $x_i = a+i\frac{b-a}{n}$
* $U_f(P) - L_f(P) = \frac{b-a}{n}[f(b)-f(a)]$
* Q.E.D
* end of class

## Week 1-3(3/5/2020)

### part 1 (pdf 32)
### Theorem 32.4 : **continuity** on a **closed** interval => **integrability**
* closed and bounded on $R$ $\implies$ compact
* teacher hint : **continuity and compact** relation
* [review: compact - f(cont.) -> compact](https://proofwiki.org/wiki/Continuous_Image_of_Compact_Space_is_Compact)
    * not used here
* Theorem 11.3 says [f is continuous on a compact space then it is uniformly continuous](https://math.stackexchange.com/questions/110573/continuous-mapping-on-a-compact-metric-space-is-uniformly-continuous)
* $f$ is $uniformly\ continuous$ on $[a, b]$
* the left is trivial
* let P be a partition with $|x_{i+1}-x_i|\lt\delta$
* then $M_i-m_i \le \epsilon\ \forall i$ by uniform continuouity
* (actually) $\forall \epsilon\ \exists \delta$
* then $U_f(P) - L_f(P) = \sum (M_i-m_i)*(x_i-x_{i-1})$
* $\le \epsilon \sum (x_i-x_{i-1})$
* $= \epsilon (b-a)$
* then for more formal proof replace $\epsilon$ with $\frac{\epsilon}{3*(b-a)}$
* $Q.E.D.$


### Theorem 32.5 (**the Intergrability Theorem**)
* $If\ f\ :\ [a, b]\rightarrow\mathbb{R}\ be\  continous\ at\ all\ except\ finite\ many\ points\ in\ [a,b]$
* $then\ f\ is\ Reimann\ integrable\ on\ [a,b]$
* proof:
* key idea : remove not continous points
* let M, m be global $suf$ $inf$
* reduce to $((M-m)+(b-a))*\epsilon$
<!--
* {not continous points} finite => exist M, m
-->

* To review, when will $Min, Max$ exist
    * compact in $\mathbb{R}$, closed and bounded
    * idea : proof $I$ bounded + $sup/inf \in I$?

### Definition 32.6 (content zero and measure zero)
* see pdf definition
* show $\{\frac{1}{n}\mid n\in\mathbb{N}\}$ is content zero
    * only finite elements out of $epsilon$ range
* show Q is measure zero
    * show that length of ${\bigcup^{\infty}_{0}}I_i$ is finite(by $\epsilon(1+\frac{1}{2}+\frac{1}{4}+...)$ trick

### Theorem 32.7 (contious except content zero implies integrability)
* similar method with 32.5
* sketch of proof
* try to remove the points like we did in Theorem 32.5
* use definition of content zero
* show $[a,b]-{\bigcup^{k}_{0}}I_i$ is compact by removing boundary of $I_i$

### Theorem 32.8 (the Riemann-Lebesgue theorem in one variable: Lebesgue’s criterion for Riemann-integrability)
* mentioned, will cover if have time
* Theorem 32.9 : my guess by substraction and 32.5
* Theorem 33.1 (the fundamental theorem of calculus) 


## Week 2-1(03/10/2020)

### Theorem 33.1 (the fundamental theorem of calculus)
* part1
* proof sketch:
    * Riemann integrable $\implies$ **bounded** on $[a,b]$
    * $\exists M > 0 \ni |f(t)| \le M \forall t \in (a,b)$
    * then uniform continuity on $[a, b]$ is trivial
        * $\forall x,y \in [a,b] \ni |x-y|<\delta$
        * $|\int_{a}^{x}f(t)dt - \int_{a}^{y}f(t)dt| \le M*\delta$
        * $\epsilon - \delta$ trick, M is constant
    * def of **f continuous**
    * $for\ x \in [a,b] \ni x > x_0$
    * **express** $f(x_0)$ as $f(x_0)\frac{\int_{x0}^{x}1dt}{x-x_0} = \frac{\int_{x0}^{x}f(x_0)dt}{x-x_0}$
    * we have $\frac{\int_{a}^{x}f(t)dt - \int_{a}^{x0}f(t)dt}{x-x_0} - f(x_0) = \frac{\int_{a}^{x}f(t)dt - \int_{a}^{x0}f(t)dt}{x-x_0} - \frac{\int_{x0}^{x}f(x_0)dt}{x-x_0}$
    * thus if $x \in [a,b] \ni x_0<x<x_0+\delta$
    * then $|\frac{\int_{a}^{x}f(t)dt - \int_{a}^{x0}f(t)dt}{x-x_0} - \frac{\int_{x0}^{x}f(x_0)dt}{x-x_0}| = |\frac{\int_{x_0}^{x}f(t)-f(x_0)dt}{x-x_0}| \le \frac{\int_{x_0}^{x}|f(t)-f(x_0)|dt}{|x-x_0|}$
    * since f is continuous
    * $\frac{\int_{x_0}^{x}|f(t)-f(x_0)|dt}{|x-x_0|} < \frac{\int_{x_0}^{x} \epsilon dt}{x-x_0} = \epsilon$
    * $x < x_0$ case can be done similarly
    * above proves $$\frac{d}{dt}(\int_{a}^{x}f(t)dt)\mid_{x=x_0} = f(x_0)\ \forall x_0\ at\ which\ f\ is\ continous$$
* part2 : $\int_{a}^{b}f(t)dt = F(b)-F(a)$
* proof sketch:
    * by def $\forall \epsilon \exists\ partition\ P \ni U_f(P)-L_f(P) < \epsilon$ 
    * make a **refinement Q of P to exlude finite indifferentiable points** 
    * apply **MVT**(mean value theorem) to intervals
        * $F(b)-F(a) = \sum F(x_i)-F(x_{i-1})$
        * = $\sum F^{'}(t_i)(x_i-x_{i-1})$
        * = $\sum f(t_i)(x_i-x_{i-1})$
    * $L_f(Q) \le F(b)-F(a) \le U_f(Q)$
    * $L_f(P) \le \int_{a}^{b}f(t)dt \le U_f(P)$
    * then $|\int_{a}^{b}f(t)dt-(F(b)-F(a))| < \epsilon$

## Week 2-2 
* pass
![](https://i.imgur.com/U1vzhH7.png)

### the Generalized Mean Value Theorem for Integrals
### Integration by parts

### advanced practice problem

## Week 2-3(2020/3/12)

### Several variables

* rectangle
    * def is similar with 2d rectangle partition
* for general bounded region
    * for such S, use rectangle "disk" $D\supseteq S$ + characteristic function $\chi_S(x, y)$
    * def characteristic function $\chi_S(x, y) : \mathbb{R}^2 \rightarrow \{0,1\}$
    * then can define $\iint_SfdA = \iint_D(f_{\chi _S})dA$
* fact : $S1 \cup S2$ is Reimann intergrable doesnt $\implies$ $S1\ and\ S2$ are
    * consider s1 + s2 = 0

### Jordan Measurable sets and Riemann Intergrability

#### content zero and Jordan measurable sets
![](https://i.imgur.com/NSEzLYX.png)
##### content zero
* bounded and $\subset \mathbb{R}^k$
* if for any $\epsilon$ > 0 there exists a **finite** collection of k-dimensional rectangular boxes $D_1, D_2, ..., D_n \ni Z \subseteq \cup_{i=1}^{n}D_i$ and $\sum volume(D_i)<\epsilon$
##### ! Jordan measurable
* A bounded set $S \subset \mathbb{R}$
* $\mathbb{\delta} S$ is content zero

##### Case study
consider $\mathbb{Q}$ / [Cantor Set](https://en.wikipedia.org/wiki/Cantor_set) / Fat Cantor Set / set bounded by Sierpinski Curve
all of them are not Jordan measurable

#### continuity except content zero implies Riemann integrability on a rectangle

#### sufficient conditions for content zero

* set relationship
    * subset => ok
    * finite union => ok
    * countable union => content X, measure V
* let $f : (a,b)\rightarrow \mathbb{R}^2\ be\ C^1\ function$
* $f([c,d])$ is content zero when $[c,d] \in (a,b)$
::: info
$C^1 \implies M = max\{|f'(x)| \mid x \in [c,d]\}$ exists
let $\epsilon>0$, Take $n \in \mathbb{N} \ni \frac{?}{n} \lt \epsilon$
partition [c, d] to n equal-length parts
let $f = (f_1,f_2)$, by MVT to $f_1$ and $f_2$
$|f_k(x)-f_k(x_i)| \le M*(x_{i}-x) \forall x \in [x_{i-1}, x]$
$|f_k(x)-f_k(x_i)| \le M*\frac{d-c}{n}$
Hence $f([x_{i-1},x_i])$ is contained in the rectangle $D_i$ centered at $\vec{f(x_i)}$ with side length $\frac{2M(d-c)}{n}$
then volume of cover is $(\frac{2M(d-c)}{n})^2*n \lt \epsilon$
:::

* case for $C^0$ not holds
    * [Peano Curve](https://en.wikipedia.org/wiki/Peano_Curve) : $C^0(\mathbb{R}, \mathbb{R}^2)$
    * [Cantor function](https://en.wikipedia.org/wiki/Cantor_function) restrictedto the Cantor set of measure zero

##### sufficient conditions for Riemann integrability on a bounded region

##### zero Riemann integral and its corollaries

##### Inter and Outer Areas

![](https://i.imgur.com/iIgKVu3.png)

## HW1

### Reference
* [Intergrability Critiriens](https://www.math.cuhk.edu.hk/course_builder/1415/math2060b/Notes%202%20Riemann%20Integration%202015.pdf)

### My part - Theorem 32.7 - Continuity except content zero -> intergrability

:::info
proof:
by the definition of content zero 
proof by content zero intergral = 0
not the cutting technique
$\int_{[a,b]}f = \int_{S}f + \int_{S^{'}}f$
where $S^{'}$ is the content zero part
proof each part of S' is intergrable and sum of them abs <= 0 , hint : use $max(|M|, |m|)\epsilon$
=> $\int_{[a,b]}f$ is well defined
Q.E.D.
:::

:::spoiler
the picture solution is not that correct
should deal with closed interval more carefully
and use $max(|M|, |m|)\epsilon$ to proof eq 0
![](https://i.imgur.com/59KlAbY.jpg)
:::

## Week 3-1

### Practice Class 

### ! 35.4 sufficient conditions for Riemann integrability on a bounded region

* union of 2 content zero is content zero
* the discontinuous parts are $\delta S$ and $Z$ so $D$ is still intergrable

### 35.5 zero Reimann intergral
content zero and f bounded => intergrable and intergral = 0

- end of class

## Week 3-2

### Inner Area and Outer Area
* concept : lattice 

### !Theorem 33.3 norm Partition can bound difference to U, L, R
* will be useful for future proof
* $\forall \epsilon >0 \exists \delta > 0$ s.t. if  P is a partition with $norm( P ) < \delta$,  $max\{|\int_a^bf(x)dx - R_f(P)|, \int_a^bf(x)dx - U_f(P)|, \int_a^bf(x)dx - L_f(P)|\} < \epsilon$
* proof sketch(U part)
    * by theorem 32.1 equivalent condition for Riemann integrability
    * => get a partition $Q$ s.t. $U-L < \frac{\epsilon}{2}$ 
    * let the norm-limited partition be $P$
    * $\lambda$ for $P$ can be generated from $\epsilon$ and $|Q|$
    * key
        * refer to P's refinement $P\cup Q$, and the fact that $|Q|$ is finitely given by $\epsilon$
        * see $P\cup Q$ as $Q$ injected to $P$
    * make $\delta$ bounded by $\frac{\epsilon}{4*M*|Q|}$(teacher's version) or $\frac{\epsilon}{2*(M-m)*|Q|}$
    * $U_f(P) - U_f(P\cup Q) \le (M-m)\delta*|Q|$
    * $U_f(P) \le U_f(P\cup Q) + \frac{\epsilon}{2}$
    * $U_f(P) \le \int_a^bf(x)dx + \frac{\epsilon}{2} + \frac{\epsilon}{2}$
        * by choice of $Q$ and $P\cup Q$ is refinement
    * $U_f(P) \ge \int_a^bf(x)dx - \epsilon$ by definition of intergral
    * $|\int_a^bf(x)dx - U_f(P)| \le \epsilon$ 

## Week 3-2

### MVTs
![](https://i.imgur.com/zNbWjKm.png)

#### Theorem 36.1

* proof sketch:
    * f is continuouson S and S compact
    * Extreme Value Theorem => Max and Min Exists
        * i.e. $\exists p, q \in S \ni f(p) = sup, f(q) = inf$
        * https://en.wikipedia.org/wiki/Extreme_value_theorem
        * see the generalized version 
    * $mg(x) \le f(x)g(x) \le Mg(x)$
    * since both f and g are continuous on S and S is Jordan measurable
    * so $m\int_Sg(x)d^kx \le \int_S f(x)g(x)d^kx \le M\int_Sg(x)d^kx)$
    * if $\int_Sg(x)d^kx = 0$ always hold, take any $c \in S$
    * else by corollary 10.4 (IVT for several variables)
    * S is connected, f is continous on S
    * $m \le \frac{\int_S f(x)g(x)d^kx}{\int_S g(x)d^kx} \le M$

### Iterated Intergral and Funini's Theorem

#### definition of iterated intergrals


## Week 4-1
IIS meeting => not attended

## Week 4-2

### Change of Valriables

### Lebesgue's Criterion for integrablility(go back)

* [link](http://www.math.ncku.edu.tw/~rchen/Advanced%20Calculus/Lebesgue%20Criterion%20for%20Riemann%20Integrability.pdf)

::: success
- definition of oscillation of f of an interval/at a point x
    - $\omega f(I) = sup\{|f(a)-f(b)|:a,b\in I\}$
    - $\omega _f(x) = inf\{\omega f(B(x, \delta)):\delta>0\}$
- trivial to see $\omega _f(x)=0$ when f is continuous
    - exercise
:::

::: info
(integrable => measure 0 discontinuous points)
- let discontinuous set be $D$
- let $N(\alpha) = \{x\in[a,b] : \omega f(x) \ge \alpha\}$
- since $D = \cup_{k=1}^{\infty}N(\frac{1}{k})$
    - the left is to proof $N(\alpha)$ is $measure\ zero$
- then by integrability for $\alpha$ exist partition that $diff \le \alpha\epsilon/2$
![](https://i.imgur.com/5DlGYZQ.png =60%x)
- done by definition of $N(\alpha)$
    - can show $len(N(\alpha)) \lt \epsilon$
(integrable <= measure 0 discontinuous points)
- let discontinuous set be D
- let $\epsilon = len(D)$
- let 
- devide into two parts
    - E, $\omega f(J) >= \epsilon$
        - still measure zero by subset
        - compact by closed and bounded
    - K = [a, b]\E, $\omega f(J) < \epsilon$
        - compact
- both part is compact
    - => has finite subcover
- by $len(E) < \epsilon$ and $\omega f(K) < \epsilon$
![](https://i.imgur.com/zeZxLUa.png)

:::

## Week 4-3 (X)

## Week 5-1 5-2

### Change of Variables

### Theorem 39.1
![](https://i.imgur.com/3idDY1q.png =70%x)
- part2 proof
    - $\forall\ \bar{x} \in S,\ \exists\ r > 0 \ni B_r(\bar{x}) \subset S$
    - $h_i = (0, ... ,|h_i|, ...0)$ s.t. $h_i < r$
    - for each $y \in T$, $f(x, y)$ is $C^1$, apply MVT
        - $\exists t_i \ni f(\bar{x}+h, y) - f(\bar{x},y) = \nabla f(\bar{x}+t_ih,y)h$
    - uniform continuity of $\frac{\partial f(x, y)}{\partial x_i}$ on $\bar{B_r(\bar{x})} \times T$

### 39.2
- proof, apply chain rule directly, y is i.d. variable, view as constant

### 39.3 the bounded convergence theorem(wait, graduate level class content)

### 39.4
- apply 39.3

### ch 40, 41 Improper Itergral
- Type 1 : infinity
- Type 2 : undefined
- tests:
    - comparison test
![](https://i.imgur.com/UQXMxzG.png)
![](https://i.imgur.com/jdqFMnp.png)


---

## The course turn online

---

## Week 9 - 2020/4/28 TA class

### proof of 42.1
- [link](http://mathsci.kaist.ac.kr/~kdryul/files/articles/Dirichlet's%20Test%20for%20Improper%20Integrals.pdf)
    - MVT-2 of integral

## Patition to 2 part need theorem

---

## Week 12(2020/5/20) - Self study for exam 2

---

## Ch40. - Inproper Integral I (S is not bounded)
- Inproper Integral I (S is not bounded)
    - comparison test
    - 40.2 proof sketch:
        - two part(g>=f and limitied)
    - 40.3 use definition of limit
    - poly functions
        - 
        - by direct calculation
- Care:
    - condition, >0

## Ch 41. - Inproper Integral II (f(S) is not bounded)
- Inproper Integral II (f(S) is not bounded)
    - silmilar to 40
- Care:
    - different conclusion on $cx^{-p}$ at x -> 0

## Ch 42. - Dirichlet's test / Absolute convergence / Cauchy principle value
- 42.1 Dirichlet's test for improper integral
    - bounded and decay to 0
- 42.2 Define improper integral to Complex number
    - absolute convergence for C
        - $\sqrt{Re^2 + Im^2}$
- 42.3 Absolute convergence implies convergence
    - counter example for opposite direction
        - sinx/x
- 42.4 Cauchy principle value (P.V.) definition
    - $+- \infty$
    - $|f(x->c)| = \infty$ and want $[a,c) \cup (c,b]$
- 42.5 how to use
    - If improper integral is convergent, P.V. = its value
    - It's possible that improper integral is convergent but P.V. is not
- 42.6 
    - Let a < 0 < b and f ∶ [a,b] → R be continuous on [a,b] and differentiable at 0,
    - then P.V.∫baf(x)/xdx exists

## Ch 43. - Improper Integral on $R^k$
- 43.1 Limit indeppendent of choice of $K_n$
    - may converge or diverge(only has case $+\infty$)
- 43.2 Definition
    - 43.1 shows 43.2 well-defined
![](https://i.imgur.com/xaAs1HX.png)
- 43.3 Higher order 1/|x|^p
![](https://i.imgur.com/VBbz03e.png)
- evaluation of function with no anti-derirative by higher dimension improper intergral + fubini

---

## Ch 44. -  Lebesgue measure / Lebesgue measurable (Definition)(Key!)
- Key: cut in range not domain
- Key: Preimage, Tiled
- Key: closed/open/general/for Rk
- Key: Countable(seq of)
- See as a extension of Jordan measurable
- Jordan measurable - Reimann Integrability <=> Lebesgue measurable - Lebesgue Integrability
- Review of Jorndan Measurable
![](https://i.imgur.com/OEDjgwm.png)

### Lebesgue measurable but not Jordan measurable

### Review of Jorndan Measurable
![](https://i.imgur.com/WQN4jye.png)
- Note: Riemann-Lebesgue Theorem

## Ch 45. - Lebesgue Integral
- define on function
    - if for all integral I, pre-image(I) is L.M.
- continous => f is lebesgue measurable
- (similar to ) bounded convergence theorem ($\forall x, f(x) = lim f_i(x)$)
![](https://i.imgur.com/hJ90RE4.png)

### 45.5.2 Comment is important for complete understanding
- https://drive.google.com/file/d/1-YLPdabFXtcVg3-nxqRzJbtVwzWPYGEN/view
    - around 45:00

### banach tarski paradox(supplement)
- search => related to A.C. (Axiom of Choice)


## Ch 46. - Riemann-Stieltjes integral
- Noun: finer(is improvement of)
- Key Concept: S(f, g, P) 
- EQ criterien (similar to R.I.)
- cases (Step function, Bounded Variant)
- intergrant f , inegrator g, partition P, dummy variable x


---

## Ch 47-48

### Arc Length / Work
- C1 curve (vector-valued function)
- dr = dg'(t), ds = d|g'(x)|

### Line Integral / Work
 - real function $f : U \supset C \to R~and~C1 curve C$
     - $U~open$
     - $C\subset U\subset R^k$
     - $f:U \to R continous$
 - vector function f
 - field f
     - use dot product

### differential form (a way to write work??)
- Q


### Rectifiable (48.4)
- contious, not necissarily injective
- define on C1 curve, Reiemann similar sum + sup
- proof
![](https://i.imgur.com/PI0uwXg.png)
https://drive.google.com/file/d/1UzJXLamXOVOZJ_bJlGczmPjAc9w7DhLi/view
![](https://i.imgur.com/lx2MbRa.png)


---

## Review of FTC
![](https://i.imgur.com/ndXNlkq.png)

---

## Ch 49. - Green's theorem(2D proj.)
- regular region
    - is its interior's closure
        - i.e. remove single point
- simple closed curve
- piecewise smooth boundary with positive orientation(D on the left)
### Use Green's to proof corollaries
- $e^{i\pi}$ rotation or (-b, a) of g => (-Q, P)
### convervative filed
- g is C2
- gradient of g is f
- results

### proof of greens (Case)
https://drive.google.com/file/d/1N1tIY2vqZo4K9mbXG6-wf6WlJKmjP_aP/view?pli=1

## Ch 50-51. - Surface Area and Surface Integral

### Area
- D->E
- cross dg(x,y)dx dg(x,y)dy (D1)
- special case of g(x,y) = (x,y,h(x))

### Integral
- integral>
    - f: D->E->Real

### Vector-valued
- orientation of E
- n
- physic meaning : flux


## Ch 52. - Vector derivatives
- gradient
    - apply for each dimension
- curl 
    - cross
- divergence
    - dot
- laplace
- propositions

## Ch 53. Gauss' Divergence Theorem
- jordan measurable for low to high dimension
- remark: divergence can be given a phiysic meaning by small ball and divergence theorem


## Ch 54. Stroke's Theorem
- cosistent positive orientatio
- Right Hand Princile
![](https://i.imgur.com/zFgbnGs.png)

## Ch 55-56. Higher Dimension
- skip

---

## Week 12 - Exam 2

---

## Week 15 - for exam 3

---

## Week 15 - Series
- https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf

### Definition of Convergence
- definition is always important

#### Cauchy Criterien
- a nice eq form

#### linearity of c. series

### Absolute convergence(a.c.) and a+, a-
- introduce a+, a-

#### Comparison Test / Ratio Test / Root Test (for a.c.)
- comparison
- ratio/root is to compare to geometric seq

#### Raabe’s test

#### Test Conclusion
![](https://i.imgur.com/KF15MPc.png)

### Conditional convergence c.c.

#### Alternating sequence
- convergence to 0 if
    - decreasing
    - alternating
    - a_n to 0 b

#### Dirichlet’s test
- bi be a bounded above complex sery
- ai be a decrease to 0 sery
- aibi is c.

#### Abel’s test
- bi be a c. sery
- ai be a decrease to 0 sery
- aibi is c.

### Rearrangement
- definition
    - bijection of indices
- magic!
- Note: Q, the statement that not abs convegent is not formal
    - i.e. why $a^+, a^-$, one diverge another dont => diverge

#### Rearrangement of a.c. series
- prove by $sup(\sigma^{-1}(\{1...n\}))$ exist as m
- use this + cauchy

#### Rearrangement of c.c. series
- any sum

### Double Series!!!
- define absolute convergence of double series
    - by an ordering is a.c.
- if a.c.(an ordering is )
    - a.c. <=> all ordering is a.c.
    - a.c. <=> iterated sum is a.c. 
- if not a.c. ( a+, a- discussion)
    - $a+ = \infty, a- \lt \infty$
        - diverge to $\infty$ 
    - $a+ = \infty, a- = \infty$
        - various ordering can converge to any real number
            - my proof(by expand to 1 d, use + - part to make S(if cannot => c.), and $\sigma^{-1}$ can find k to dominate 0,0 to N,N)

#### Product of a.c. series is a.c.

#### Cauchy Product
- ai, bi c. to A, B
- if one of ai, bi is a.c.
    - Cauchy product is c. with sum AB
- else 
    - Cauchy product may d.

---

## Week 15 - Sequence of functions

### pt. uni. uni cauchy.


### eq def of uni. conv

### uni + cont. => target cont.
- lim f uni and all fn cont. => cont.
- cont. [] for all delta for above => () f cont.


### Weierstrass approximation 
- cont. has poly seq uni. approx
- http://www.math.univ-toulouse.fr/~lassere/pdf/2012INPsuitesD1bis.pdf

### Dini's
- for each x , fx is bounded monotone
- x to lim f x is well defined and cont.
- then lim f is uni approx

## Sery of function
- pt.
- abs.
- uni.
![](https://i.imgur.com/lRaCqXj.png)

### cauchy for uni conv


### condition of swapping
- limit and int/de
    - R.I. uni.
    - fn pt. C1, fn' uni.
- seri
    -  same

### Hint of final 
- one mutant one time proof (1/2)

abel
![](https://i.imgur.com/maE42u0.png)

 Arzela-Ascoli theorem, the Heine-Borel theorem for functional spaces
 
 S compact 
 C0
 F closed bounded uni equconti