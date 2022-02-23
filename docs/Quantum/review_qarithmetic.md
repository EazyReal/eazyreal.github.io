---
title: "Review: Quantum arithmetic with the Quantum Fourier Transform"
tags:
    - review
    - quantum
    - QFT
head: quantum
author: Maxwill
lastUpdated: 2021/04/07
---

$$
%latex macro
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Formatting
%\renewcommand{\scriptsize}[2][12pt]{\fontsize{#2}{#1}}
\renewcommand{\scriptsize}[1]{\small{#1}}
% Quantum
\newcommand{\<}{\langle}
\renewcommand{\>}{\rangle}
\newcommand{\ket}[1]{\left|#1\right\rangle}
\newcommand{\bra}[1]{\left\langle#1\right|}
%
% Equations
\newcommand{\be}{\begin{equation}}
\newcommand{\ee}{\end{equation}}
\newcommand{\bea}{\begin{eqnarray}}
\newcommand{\eea}{\end{eqnarray}}
%
%
\newcommand{\cond}[1]{\left\{\begin{array}{l@{~~~}l}#1\end{array}\right.}
\newcommand{\qph}[1]{quant-ph/#1}
%
% Probability 
\newcommand\symProb{\mathop{\mathrm{Pr}}\limits}
\newcommand\symExpec{\mathop{\mathrm{E}}\limits}
\def\prob#1#2{\symProb_{#1}\left[ #2 \right]}
\def\expec#1#2{\symExpec_{#1}\left[ #2 \right]}
% letter styling
% greal letter
\newcommand{\fg}{\mathfrak{g}}
\newcommand{\f}{\mathfrak}
\newcommand{\b}{\mathbb}
\newcommand{\t}{\text}
\newcommand{\aa}{\alpha}
\newcommand{\bb}{\beta}
\newcommand{\cc}{\gamma}
\newcommand{\DD}{\Delta}
%
% additional operators
\DeclareMathOperator{\e}{e}
\DeclareMathOperator{\ad}{ad}
\DeclareMathOperator{\span}{span}
\DeclareMathOperator{\dim}{dim}
\DeclareMathOperator{\tr}{tr}
%
% quantum gates
\DeclareMathOperator{\CZ}{C\!Z}
\DeclareMathOperator{\QFT}{Q\!F\!T}
$$

# Review: Quantum arithmetic with the Quantum Fourier Transform

## Original Paper
- https://arxiv.org/pdf/1411.5949.pdf

## Prerequisition 
- Quantum Fourier Transform
- (Optional) Phase estimation 

## Short Summary
- Quantum Fourier Transform Based
	- $+, \times$
		- signed integer, non-modular integer
	- $\sum a_xx$
		- controlled version gives the inner product of two data vectors
- $\ket{x}\ket{y} \overset{\QFT}{\to} \ket{x}\ket{\phi(y)} \overset{\CZ}{\to} \ket{x}\ket{\phi(x+y)} \overset{\QFT^{-1}}{\to} \ket{x}\ket{x+y}$

## List of Techniques
- QFT

## Conclusion 
Arithmetic that can be implemented and its complexity.
> here $n$ is the $\log M$ where $M$ is the maximum number, and $N$ is the number of numbers

| Name                    | Exact Formula                 | Circuit Complexity |
| ----------------------- | ----------------------------- | ------------------ |
| Qudit Addition Mod D    | $\ket{x+y \pmod d}_d$         | $O(n^2)$           |
| Qudit Addition          | $\ket{x+y}_d$                 | $O(n^2)$           |
| Addition                | $\ket{x+y}$                   | $O(n^2)$           |
| (Constant) Weighted Sum | $\ket{\sum_{m=1}^{N} a_mx_m}$ | $O(Nn^2)$          |
| Multiplication          | $\ket{ab}$                    | $O(n^3)$           |
| Controlled Weighted Sum (Inner Product) | $\ket{\sum_{m=1}^{N} a_mx_m}$ | $O(Nn^3)$          |


## Detailed Notes

### The Quantum Fourier Transform and distributed phase encoding
- ${Q\!F\!T}\ket{x}=\frac{1}{\sqrt{d}} \sum_{k=0}^{d-1} e^{i \frac{ 2 \pi x k }{d}}\ket{k}$
- ${I\!Q\!F\!T}\ket{k}=\frac{1}{\sqrt{d}} \sum_{x=0}^{d-1} e^{-i\frac{2 \pi x k }{d}}\ket{x}$

### Adder (Qudits)

#### Generalized CZ Gate
- $\CZ^F|x\>|y\>=\e^{\frac{i 2\pi}{Fd}xy}$
	- $d$ is the dimension of the quantum system (qu**d**it)

#### Modular Addition $\ket{x+y \pmod d}$

\begin{equation}
\QFT^\dagger_2\CZ_{12}\QFT_2|x\>|y\>=|x\>|x+y \pmod d\>
\end{equation}

encodes number $y$ into the phase basis
\begin{equation}
\ket{x}\ket{y} \stackrel{{\scriptsize{QFT}}_2}{\longrightarrow} \frac{1}{\sqrt{d}} \sum_{k=0}^{d-1} e^{i\frac{ 2 \pi y k }{d}}\ket{x}\ket{k}
\end{equation}

The phase gate introduces a phase shift that is equivalent to a modulo $d$ addition in that basis
\begin{equation}
\frac{1}{\sqrt{d}} \sum_{k=0}^{d-1} e^{i\frac{ 2 \pi y k }{d}} \ket{x}\ket{k}\stackrel{\scriptsize{\CZ}}{\longrightarrow}\frac{1}{\sqrt{d}} \sum_{k=0}^{d-1} e^{i\frac{ 2 \pi y k }{d}}  e^{i\frac{ 2 \pi x k }{d}} \ket{x}\ket{k}.  
\end{equation}

Finally, the inverse QFT takes the result back into the computational basis with 
\begin{equation}
\begin{split}
\frac{1}{\sqrt{d}} \sum_{k=0}^{d-1} e^{i\frac{2\pi (x+y) k }{d}} \ket{x}\ket{k}
\stackrel{{\scriptsize{IQFT}}_2}{\longrightarrow} \frac{1}{d}\sum_{k,l=0}^{d-1} e^{i\frac{ 2 \pi (x+y) k }{d}} e^{-i\frac{ 2 \pi  k l }{d}}  \ket{x}\ket{l} \\ = \ket{x}\ket{x+y\pmod d}.  
\end{split}
\end{equation}

#### Adding More Integers Together (With More Quidits)
\begin{equation}
{I\!Q\!F\!T}_N\cdot   C\!Z_{1,N}  \cdots C\!Z_{N-2,N} \cdot  C\!Z_{N-1,N}\cdot   {\!Q\!F\!T}_N \ket{x_1}\ket{x_2}\ldots\ket{x_{N-1}}\ket{x_N} =\\
\ket{x_1}\ket{x_2}\ldots\ket{x_{N-1}}\ket{x_1+x_2+\ldots+ x_N\pmod d}.
\end{equation}

#### Non-Modular Addition
\begin{equation}
C\!Z \ket{x}_d\ket{y}_{2d-1}=e^{i\frac{ 2 \pi x y}{2d-1}}\ket{x}_d\ket{y}_{2d-1}.
\end{equation}
- To sum $N$ numbers, $d'=Nd-N+1$ is required
- Signed addition for numbers up to $d/2$
	- positive $x<d/2$ into states $\ket{x}$
	- negative numbers $-x$ into states $\ket{d-x}$
		- negative numbers are associated to negative phases

----

### Adder (Qubit) (Draper's circuit)
- Consider the addition of numbers encoded in $n$ qubits. 
$a = a_12^{n-1}+a_22^{n-2} + \ldots + a_n2^0$ 
$\ket{a}\ket{a_1}\otimes\ket{a_2}\otimes \ldots \otimes \ket{a_n}$

#### Draper's circuit
- Evolving $\ket{a}$ into $\ket{\phi(a)}$
\begin{equation}
\ket{\phi(a)}={Q\!F\!T}\ket{a}=\frac{1}{\sqrt{N}} \sum_{k=0}^{N-1} e^{i\frac{ 2 \pi a k }{N}}\ket{k},
\end{equation}
- To take $\ket{\phi(a)}$ into $\ket{\phi(a+b)}$. To perform the addition, the circuit decomposes the $C\!Z$ gates to the following. These gates are controlled by the $n$ qubits that represent the number $b$. The combined effect of all the gates is to introduce a total phase $e^{2\pi i b k\over N}$ for each state $\ket{k}$,
\begin{equation}
R_l = \left[
\begin{array}{cc} 
1 & 0 \\
0 & e^{2\pi i \over 2^l}
\end{array}
\right].
\end{equation}

#### Non-modular adder
$\ket{a} = \ket{0}\ket{a_1}\ket{a_2}\ldots\ket{a_n}$. 

#### Remaining Q
- exact circuit
	- add in fourier basis?

----

### Mean

\begin{equation}
\begin{split}
{I\!Q\!F\!T}_{N+1} \left(\prod_{m=1}^{N} C\!Z_{m,N+1}^N \right) {Q\!F\!T}_{N+1}\ket{x_1}\ket{x_2}\ldots\ket{x_N}\ket{0}=\\  \ket{x_1}\ket{x_2}\ldots\ket{x_N}\left|\frac{1}{N}\sum_{m=1}^{N} x_m\pmod d\right \rangle,
\end{split}
\end{equation}
- In general, the result is not an integer.
	- Sol1: fixed point representation, $\log_2(Nd)$ qubits we recover the correct mean value
	- Sol2: phase estimation quantum algorithms
		- for $d=2^m$, give the best possible $m$-bit approximation to any arbitray phase $\phi$ between 0 and 1 in a term $e^{i2\pi \phi}$ with a probability of, at least, $4/\pi^2$, which can be improved at the cost of a larger circuit \cite{CEM98}. 

----

### (Constant) Weighted Sum
\begin{equation}
\begin{split}
{I\!Q\!F\!T}_{N+1} \left(\prod_{m=1}^{N} C\!Z_{m,N+1}^{\frac{1}{a_m}} \right) {Q\!F\!T}_{N+1}\ket{x_1}\ket{x_2}\ldots\ket{x_N}\ket{0}=\\  \ket{x_1}\ket{x_2}\ldots\ket{x_N}\left|\sum_{m=1}^{N} a_mx_m\pmod d\right \rangle,
\end{split}
\end{equation}
- In general, the result is not an integer.
	- Sol1: fixed point representation, $\log_2(Nd)$ qubits we recover the correct mean value
	- Sol2: phase estimation quantum algorithms
		- for $d=2^m$, give the best possible $m$-bit approximation to any arbitray phase $\phi$ between 0 and 1 in a term $e^{i2\pi \phi}$ with a probability of, at least, $4/\pi^2$, which can be improved at the cost of a larger circuit \cite{CEM98}. 
- Also, the values in range may be bigger
	- Sol: Ancillary bit

#### Multiplication by a constant 
\begin{equation}
(b_{1}2^{n-1}\cdot b_{2}2^{n-2}\cdots b_{n-1}2^{1}\cdot  b_n 2^0)x=\sum_{m=1}^{n} b_{m}2^{n-m} x,
\end{equation}

----

### QFT Multiplier

![](https://i.imgur.com/VTqQlS7.png)


$2^m\Sigma$ takes $\ket{a}\ket{\phi(0)}$ to $\ket{a}\ket{\phi(0+a)}$
Apply for all $m$
\begin{equation}
\ket{\phi(0+b_n2^0a + b_{n-1}2^1a + \ldots + b_22^{n-2}a + b_12^{n-1}a)} = \ket{\phi(0+ab)} = \ket{\phi(ab)}. 
\end{equation}

The key to compute the product $a\cdot b$  is to select the proper conditional phase rotation gates to implement each QFT adder block.

After computing the QFT of $0$, we obtain the output state
\begin{equation}
{Q\!F\!T}\ket{0}=\frac{1}{\sqrt{2^{2n}}} \sum_{k=0}^{2^{2n}-1} e^{i\frac{ 2 \pi 0 k }{2^{2n}}}\ket{k} = \ket{\phi(0)},
\end{equation}
where $k = k_12^{2n-1}+k_22^{2n-2} +  \ldots + k_{2n}2^0 = \sum\limits_{s=1}^{2n}k_s 2^{2n-s}$. In order to take $\ket{\phi(0)}$ to $\ket{\phi(0+b_j2^{n-j}a)}$, we need to use phase rotation gates controlled by $b_j$ and by each $a_i$, chosen so that they apply a phase rotation
\begin{equation}
e^{i\frac{ 2 \pi (a_i 2^{n-i}b_j2^{n-j}) k_s2^{2n-s}}{2^{2n}}} = e^{i\frac{ 2 \pi a_i b_j k_s }{2^{i+j+s-2n}}}.
\end{equation}
Therefore, we select conditional rotation gates of the form $R_l = R_{i+j+s-2n}$, where $i+j+s-2n>0$, to implement the QFT adder block controlled by $b_j$. 

The size of ancillary 0 can be chosen freely to avoid modular.

----

### Controlled Weighted Sum
\begin{equation}
\sum\limits_{m=1}^{N}a_mx_m
\end{equation}
- $a_m$ can be in superposition
- implementation
\begin{equation}
\ket{a_1}\ket{x_1}\ket{a_2}\ket{x_2}\otimes \cdots \otimes \ket{a_{N}}\ket{x_{N}}\ket{\phi(0+a_1x_1+a_2x_2+\ldots+a_{N}x_{N})}.
\end{equation}
![](https://i.imgur.com/7dUsHMr.png)
![](https://i.imgur.com/1NEGBYR.png)
- this gives inner product!


