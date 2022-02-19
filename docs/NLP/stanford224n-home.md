# Stanford CS224n NLP with DL

see also:  
http://web.stanford.edu/class/cs224n/index.html#coursework  
https://www.youtube.com/channel/UC_48v322owNVtORXuMeRmpA  
online version:  
https://hackmd.io/dceXdnaYRXutrMWnu1asrg  

[TOC]

## Part 1, 2 - Word Embeddings
- [Stanford CS224n NLP with DL - Word Embeddings](/0fm8AkwlS_CtiSO9rSQpxQ)

## Part 3 - Neural Network
- [Stanford CS224n NLP with DL - NN review](/BO3_P7V_TKySS_5LiTkamA)

### Supplement Paper - Natural Language Processing (Almost) from Scratch
- [Paper Survey:  Natural Language Processing (Almost) from Scratch](/WntbDPQAThutBw2u_-1IgQ)

### 2020/4/12 self studies
[BERT Note](/1kzPJvV-Tc--F_YSg5s1Dw)
[NLP Resources](/1kzPJvV-Tc--F_YSg5s1Dw)

## Part 4 - Backpropagation
- Skipped

## Part 5 - Dependency Parsing
- http://web.stanford.edu/class/cs224n/readings/cs224n-2019-notes04-dependencyparsing.pdf
- Paper: "A Fast and Accurate
Dependency Parser using Neural Networks."
- Key:
    - Dependency Parse 
        - relations of words as tree
        - more semantic?
    - The Greedy Machine
        - (sigma, beta, A)
            - stack, buffer, known arc
        - left arc, right arc, push
    - How to use NN to learn
        - POS+embedding+.. => predict action of greedy machine


## Part 6, 7 - LM and RNN, Advanced RNN
- [Stanford CS224n NLP with DL - LM and RNN, Advanced RNN](/Ycu_ze76STC095xJJM5TWA)

## Part 8 - MT, seq2seq, attension
- [Stanford CS224n NLP with DL - MT, seq2seq, attension](/b63btW1MQviXnlDkYecpWQ)

## Part 9 - Final Project Suggestion, Also good for any research
http://web.stanford.edu/class/cs224n/readings/cs224n-2019-notes06-NMT_seq2seq_attention.pdf

## Part 10 - QA
- http://web.stanford.edu/class/cs224n/slides/cs224n-2020-lecture10-QA.pdf
- this is the slide part
- Task 
    - SQuaD
- History
- SOTA
    - now is ALBERT!(my favorist BERT variant)
- Details and advices on building and trainning model

### QA lecture note addition
- Dynamic Memory Network
    - chinese explanation
        - https://zhuanlan.zhihu.com/p/30030487
    - Q-encoding, P-encoding, Episodic Memory Module, Answer Module(GRU decode)
    - not clear about the Episodic Memory part
        - do t time, use (t-1)-th memory and Q do attention?
- Dynamic Coattention Network
    - mentioned
    - https://zhuanlan.zhihu.com/p/27151397
    - attention to coattention?


