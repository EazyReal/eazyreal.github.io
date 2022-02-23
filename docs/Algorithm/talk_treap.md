---

title: Treap presentation for NCTU PCCA wintercamp 2020
description : "my first md/latex/draw.io slides from scratch"
tags:
    - talk
    - "2020"
    - PCCA
    - CPsite
    - algorithm
    - data structure
author: Maxwill
lastUpdated: 2020/01/19
updatehistory : "add to cpsite at 2020/2/27"

slideOptions:  
  theme: sky
  transition: slide
  hash : true
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

<style>
body {
    font-size: 0.85em;
}
</style>

# Treap

![](https://i.imgur.com/se9payR.png)

---

## Overview
- [**What** is Treap?](#/Definition)
- [**Why** use Treap?](#/Usage)
- [**How** to implement Treap?](#/Implementation)
- [PBDS and Rope](#/PBDS-and-Rope)
- [Advanced Topics](#/Advanced-Topics)
- [Samples](#/Samples)

Note:
- Cover Advanced Topics if time available 


---

## Definition

- tree + heap
- tree for data
- heap for **shape**
- balanced on average if priority is assigned randomly

----

### Binary Search Tree

<div class="small">

- data structure for binaray search
- $\mathrm{left child < parent < right child \quad \forall nodes}$
- insert, delete, search for element 
- $O(\text{height})$
- problem : degenerate(退化)

</div>

![](https://i.imgur.com/lJXx8QV.png)



----

### degenerate BST
<div class="small">

- this tree is inserted  with in the order of 
  [5, 6, 7, 8, 9]
- degenerate to linked list, $O(\text{height}) = O(n)$

</div>

![](https://i.imgur.com/uVk5fD4.png =30%x)


----

### Heap
- $\mathrm{parent > children \quad \forall nodes}$
![](https://i.imgur.com/2dNL8pK.png)

----

### Treap
<div class="small">

- a node consists of key and priority
- key : tree
    - $\mathrm{key_{left\ child} < key_{parent} < key_{right\ child} \quad\forall nodes}$
- priority : heap
    - $\mathrm{priority_{parent} > priority_{children} \quad\forall\ nodes}$
    
</div>

![](https://i.imgur.com/sLSqGvz.png)


----

### Balance Property

<div class="small">

- <span> Observation : root is inserted before children in BST<!-- .element: class="fragment" data-fragment-index="1" --></span> 
- <span> $\mathrm{priority_{parent} > priority_{children} \quad \forall nodes}$ <!-- .element: class="fragment" data-fragment-index="2" --></span>
- <span> View as a BST whose insertion order is decided by priorities(larger-> earlier)<!-- .element: class="fragment" data-fragment-index="3" --></span>
- <span>why balance? <!-- .element: class="fragment" data-fragment-index="4" --></span>
- <span> priority is given randomly $\implies$ is balanced on average<!-- .element: class="fragment" data-fragment-index="5" --></span>

</div>

Note:
- a single proof for balance property
- insertion is decided by piority, larger priority -> inserted earlier
- emphasize priority decide insertion order if view tree as final tree
- randomized BST
- size as probability weight implementation
    - when merge, $\Pr(a ~\text{as root}) = \frac{\text{size}(a)}{\text{size}(a)+\text{size}(b)}$
    - more `rand()` calls but use less memory

---

## Usage
- Easy to code balanced BST
- Merge / Split operation
- Implicit Treap
- Serve as powerful interval tree(線段樹)
- Free to add additional features!
- Implementation details will be cover later

Note:
- interval tree? segment tree? 名稱緣由
- Should give a sense that treap is strong
- talk about merge/split a little
- details should be cover in implementation

----

### Implicit Treap 
- idea : index as key
- blanced array
- text-editor (rope)

![](https://i.imgur.com/se9payR.png)

Note:
- when implement, record size instead of index
- interval information maintain

----

### Treap as interval tree

<div class="small">

- implicit treap with extra information
- interval(subtree) min/max/sum
- interval fold  with *associative law* (結合律)
  $G(S,*)~\text{s.t.}~\forall a, b, c\in S,\ a*b*c\ =\ (a*b)*c\ =\ a*(b*c)$
- lazy mark (support nterval update)
- more!
    - delete interval
    - insert interval

</div>

Note:
- talk about concept of merge and split
- cover details and code later

----

### Interval Treap

![](https://i.imgur.com/yrFpWod.png)

Note:
- Each point is array value itself and record the interval information of its subtree

---

## Implementation

<div class="small">

- Merge-split Treap
- Treap Node
    - pri, key (or size), val
    - (optional) lazy mark
- Basic Operations
    - merge, split
    - insert, delete (combine merge and split to achieve)
    - pull, push (for interval tree)

</div>

Note:(can mention a little)
- We use merge-split treap most of the time
- advantages:
    - easy to code (~iterval tree)
    - more powerful (merge and split supported)
- downsides:
    - constant bigger than rotate treap

----

### Treap Node Code
``` cpp
struct Node
{
  int pri, key, sz, val;
  Node *lc, *rc;
  Node(){};
  //syntax sugar
  Node(int val, int key) :pri(rand()), key(key), sz(1), val(val), mark(0) {};
  Node(int val) :pri(rand()), sz(1), val(val), mark(0) {};
}
```

<div class="small">

- hint : without ```srand(time(NULL))``` sometimes get TLE
- Node means subTreap

</div>

Note:
- if no srand, rand() result is predictible by problem setter
- and problem setter can 搞你
- Node in merge-split Treap can be seen as subtree rooted at that Node 

----

### Basic Operations

<div class="small">

- merge
    - merge treap A and treap B
    - $\text{key}_a < \text{key}_b \quad \forall a \in A,\ b \in B$ 
- split
    - split treap C to treap A and treap B by key value **k**
    - $\text{key}_a \leqslant k < \text{key}_b \quad \forall a \in A,\ b \in B$ 
- inverse operations, both are $O(\log(n))$ in expectation
- merge + split combinations

</div>

----

#### Merge
- priority大的當根, 剩下交給子樹處理
![](https://i.imgur.com/yiPBAi2.png)


----

![](https://i.imgur.com/I1hEKoe.png)

----

![](https://i.imgur.com/P1sMtmW.png)



----

![](https://i.imgur.com/easQ86C.png)


----

- 很清楚的是$O(\log(n))$
- 注意到左右永不混雜

![](https://i.imgur.com/Wfb5fSq.png)

----

#### Merge
<div class="small">

- merge trees rooted at a and b, return merged tree root
- $\text{key}_a < \text{key}_b \quad \forall a \in A, b \in B$ 
- <span>implicit treap?<!-- .element: class="fragment" data-fragment-index="1" --></span>
- <span>No Change, why?<!-- .element: class="fragment" data-fragment-index="2" --></span>

</div>

```cpp
Node* merge(Node* a, Node* b) //key a < key b
{
    if (!a) return b; //base case
    if (!b) return a;
    if(a−>pri > b−>pri)//pri a bigger => a as root
    {
        a−>r = merge(a−>r, b); //key b bigger => merge b and rc of a
        return a;
    }
    //b as root
    b−>l = merge(a, b−>l); //key a smaller => merge a and lc of b
    return b;
}
```
Note:
- Merge preserve BST order, so when still work on implicit key

----

#### Split
- split treap C to treap A and treap B by key value **k**
- 如果當前的根的key $\leq$ k
- 根及左子樹都屬於A, 右邊再討論
- 遞迴右邊的結果要接回根當前根的右邊
![](https://i.imgur.com/f92jQxv.png)

----

![](https://i.imgur.com/pljVxbF.png)

----

![](https://i.imgur.com/2QEVgnP.png)

----

![](https://i.imgur.com/w8vUy0B.png)

----

![](https://i.imgur.com/L3ZiwTH.png)

----

![](https://i.imgur.com/yFe5akE.png)

----

#### Split
- split treap C to treap A and treap B by key value **k**
- $\text{key}_a \leqslant k < \text{key}_b \quad \forall a \in A,\ b \in B$ 
- Q : why heap property still holds
```cpp
void split(Node* c, int k, Node*& a, Node*& b) 
{
  if (!c) a = b = nullptr; //base case
  else if (c−>key <= k)
  { //key of c is smaller than k =>
    a = c;
    split(c−>r, k, a−>r, b);
  }
  else
  {
    b = c;
    split(c−>l, k, a, b−>l);
  }
}
```

Note:
- result will store in a, b (passed by reference)
- Answer of Q : because all nodes' children are deeper than themself 
- No need to judge priority!!

----

#### Split - Implicit Treap

- <span>implicit treap?<!-- .element: class="fragment" data-fragment-index="1" --></span>
- <span>record size and change k while cutting<!-- .element: class="fragment" data-fragment-index="2" --></span>
![](https://i.imgur.com/AJXzqCj.png)


Note:
- try to code yourself


----

#### Insert

- Insert(C, x) 
- Split(C, x, A, B)
- Merge(Merge(A, x), B)
- get AxB
- <span>insert interval?<!-- .element: class="fragment" data-fragment-index="1" --></span>

![](https://i.imgur.com/sRiLDd1.png)

Note:
- interval(as treap) is nothing special 

----

#### Delete

- Delete(C, x) 
- Split(C, <x, A, B), Split(C, x, D, E) 
- Merge(A, E)
- get A(no x)E
- <span>delete interval?<!-- .element: class="fragment" data-fragment-index="1" --></span><span>...delete "single x"?<!-- .element: class="fragment" data-fragment-index="2" --></span>

![](https://i.imgur.com/c6ktc0N.png =50%x)


Note:
- Answer to delete a single x : D = find(C, x), D = Merge(D->lc, D->rc)

----

#### For Interval Treap
- very similar to interval tree
- check validity of information!
- write push and pull function for clarity
    - push (down)
        - before use subtrees
        - 根處理好了剩下「推」給子樹處理
    - pull (up)
        - when merge subtrees
        - 子樹處理好的資訊「拉」上來

Note:
- 叫pull up的時候資訊一定要是對的
- 叫push dpwn的時候自己要處理好

----

#### Example (POJ 3580 Super Memo)
```cpp
void add_(Node *&root, int l, int r, int x)
{
  Node *a, *b, *c, *d;
  split(root, r, a, b); //a = [1, r]
  split(a, l-1, c, d); //d = [l, r]
  d->addv += x;
  root = merge(merge(c, d), b);
}
```

```cpp
Node *merge(Node *a, Node *b) //key a < key b
{
  if(!a) return b;
  if(!b) return a;
  if(a->pri > b->pri)
  {
    push(a);
    a->rc = merge(a->rc, b);
    pull(a);
    return a;
  }
  push(b);
  b->lc = merge(a, b->lc);
  pull(b);
  return b;
}
```

<!-- for practic, wont be on screen -->

```cpp
void push(Node *a)
{
  if(!a) return;
  if(a->rev)
  {
    swap(a->lc, a->rc);
    if(a->lc) a->lc->rev ^= 1;
    if(a->rc) a->rc->rev ^= 1;
    a->rev = false;
  }
  if(a->addv != 0)
  {
    a->val += a->addv;
    a->minv += a->addv;
    if(a->lc) a->lc->addv += a->addv;
    if(a->rc) a->rc->addv += a->addv;
    a->addv = 0;
  }
  return;
}
```

```cpp
void pull(Node *a)
{
  a->sz = sz(a->lc) + sz(a->rc) + 1;
  a->minv = a->val;
  //key : push children before pull (maintain inside) or consider addv lazy mark
  if(a->lc) a->minv = min(a->minv, a->lc->minv + a->lc->addv);
  if(a->rc) a->minv = min(a->minv, a->rc->minv + a->rc->addv);
}
```

Note:
- From my AC code
- 21277193	maxwill	3580	Accepted	6140K	1532MS	G++	4975B	2020-01-29 13:41:32

---

## PBDS and Rope
- pbds BST : binary search tree
- rope : text editor, implicit BST
- 如果必須實作, ICPC 可以帶模板
  但是要夠熟悉賽場上才容易寫得出來變化題

``` cpp
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
using namespace __gnu_pbds;
#include <ext/rope>
using namespace __gnu_cxx;

typedef tree<int,null_type,less<int>,rb_tree_tag,
tree_order_statistics_node_update> ordered_set;
```
Note:
- pbds is strong, if only need basic treap op (find kth), pbds/rope is enough
- ICPC 是可以帶模板的, 但是要夠熟悉賽場上才容易寫得出來變化題
- quick introduction and jump to details


----

### pbds BST example
- support find_by_order and order_of_key

``` cpp
ordered_set X;
X.insert(1);
X.insert(2);
X.insert(4);
X.insert(8);
X.insert(16);

cout<<*X.find_by_order(1)<<endl; // 2
cout<<*X.find_by_order(2)<<endl; // 4
cout<<*X.find_by_order(4)<<endl; // 16
cout<<(end(X)==X.find_by_order(6))<<endl; // true

cout<<X.order_of_key(-5)<<endl;  // 0
cout<<X.order_of_key(1)<<endl;   // 0
cout<<X.order_of_key(3)<<endl;   // 2
cout<<X.order_of_key(400)<<endl; // 5
```

----

### rope example
- text-editor-like
``` cpp
typedef rope<char> crope; //crope = rope<char>
rope<int> rp, a, b, c;
rp[x];
rp.at(x);
rp.length();
rp.size();
rp.push_back(x);
rp.insert(pos, x);  //insert x at position pos
rp.erase(pos, x);   //erase x elements from pos
rp.replace(pos, x); //from position pos replace with x
rp.substr(pos, x);  //rp[pos:pos+x]
rp.copy(pos, x, s); //from position pos to pos+x replace with s
a = b + c; //concat
```
- bulit-in Copy-on-Write
``` cpp
rope<int> *his[100000];
his[i] = new rope<int> (*his[i - 1]);
```


---

## Advanced Topics
<div class="small">

- handle duplication (multi-set)
- Copy-on-Write (可持久化)
    - history of tree (just like git)
    - concept : only copy what need to be copied
    - $O(\log(n))$ new nodes per patch 
    - example : ASK(version, kth, l, r) + Update + Online
    
</div>

---

## Samples
- [POJ 3580 SuperMemo](http://poj.org/problem?id=3580)
- [UVa 12538 Version Controlled IDE](https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=3983)

----

### POJ 3580 SuperMemo
<div class="small">

- Operations:
    - ADD x y D
    - REVERSE x y
    - REVOLVE x y T
    - INSERT x P
    - DELETE x
    - MIN x y
- Implicit Treap -> AC
- Good practice problem for interval operations
- Think : how to SUM x y

</div>

Note:
- SUM x, y => care ADD lazy mark (interval val += interval size*addv)
- sample solution?


----

### UVa 12538 Version Controlled IDE
<div class="small">

- Operatons:
     - Start with empty string
     - insert interval to position x
     - delete interval
- Rope + Copy-on-Write = AC!
- Challenge:
    - treap
    - what if add operation like reverse(rope and treap)

</div>

---

### Conclusion

- Treap is a powerful data structure in competitive programming
- However, many problems that can be solved by Treap have alternatives
- Get familiar with this powerful tool and strengthen your mind

Note:
- https://codeforces.com/contest/847/problem/D
- Treap/BIT/greedy/fastest O(n)

---

## Reference
- [Google](https://www.google.com)
- [2016建中校隊培訓講義 by hansonyu123](https://tioj.ck.tp.edu.tw/uploads/attachment/5/35/9.pdf)
- PCCA winter camp 廖俊杰(aaaaajack) Treap note
- https://cp-algorithms.com/data_structures/treap.html
- [C++ PBDS](https://codeforces.com/blog/entry/11080)
- [C++ rope](http://www.martinbroadhurst.com/stl/Rope.html)
- [Markdown slide tutorial](https://hackmd.io/slide-example?both)
- [Original Treap pictures with draw.io](https://www.draw.io/)
- [Latex symbol list](https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols)

---

## Thanks All