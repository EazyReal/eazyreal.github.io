# Paper List, 2020 Summer

[Syntax-aware NLI/QA, 2020-07-24, ver-dev](/gpFhe0RWTbiuYn-NmdnRPA?view)

[Artical/Talks, 2020 Summer](/9CRGW7DBQ1C05GDSJobjHQ)

## 9/18
- Time2Vec: Learning a Vector Representation of Time

## 9/15
- Overcoming the Lexical Overlap Bias Using Predicate-Argument
- Structures

furtue: predict dependency as loss

## 913
- CGC-Net: Cell Graph Convolutional Network for Grading of Colorectal Cancer Histology Images


## 831
- Cross-lingual Short-text Matching with Deep Learning
- GATED GRAPH SEQUENCE NEURAL NETWORKS
- Strategies for Pre-training Graph Neural Networks
- Compositional Language Continual Learning
- Quantum Algorithms for Deep Convolutional Neural Networks
- LambdaNet: Probabilistic Type Inference using Graph Neural Networks
- Solving Arithmetic Word Problems Automatically Using Transformer and Unambiguous Representations
- Evaluating Compositionality in Sentence Embeddings

## 826
- GraphSAINT: GRAPH SAMPLING BASED INDUCTIVE LEARNING METHOD
- Heterogeneous Graph Transformer for Graph-to-Sequence Learning (for coding)
    - GCN + attention for each relation
    - attention addictive is better
    - transofrmer block
    - dense connectivity
    - output take all layers

## 823
- A hybrid classical-quantum workflow for natural language processing
- Adversarially Regularized Graph Autoencoder for Graph Embedding

## 821
- GNNExplainer: Generating Explanations for Graph Neural Networks
- ASAP: Adaptive Structure Aware Pooling for Learning Hierarchical Graph Representations
    - can use this 

## 820 - Quantum NLP Paper
- Mathematical Foundations for a Compositional Distributional Model of Meaning
- Prior Disambiguation of Word Tensors for Constructing Sentence Vectors
- quantum algorithms for computational natural language 
- Quantum models of cognition and decision
- Mathematical Structures of Language


## 818
- SGAT: Sparse Graph Attention Networks
    - use L0 norm for large scale GAT
    - "sparsify" the edge set
- Variational Pretraining for Semi-supervised Text Classification
    - VAMPIRE, sentence embedding
    - ACL 2019, by AI2

## 817
- Modeling Relational Data with Graph Convolutional Networks
- Deep Graph Matching Consensus
    - ICLR2020
    - related work is rich 
- SimGNN: A Neural Network Approach to Fast Graph Similarity Computation
- Cross-lingual Knowledge Graph Alignment via Graph Matching Neural Network
- https://zhuanlan.zhihu.com/p/57289737
    - neural network math properties
- DYNAMIC COATTENTION NETWORKS FOR QUESTION ANSWERING

## 815 
- Neural machine translation by jointly learning to align and translate
    - additive attention from
    - attention is all you need did not mention the exp result for additive...
- Measuring the Algorithmic Efficiency of Neural Networks
- Knowledge Enhanced Attention for Robust Natural Language Inference
    - breaking NLI
    - similar to KIM 
    - add attention score when have relation, and add to different heads for eacch relation
- Semantic sentence matching with densely-connected recurrent and co-attentive information
- Knowledge Enhanced Attention for Robust Natural Language Inference
    - most see


## 814, Experiment Experience
- Really Paying Attention: A BERT+BiDAF Ensemble Model for Question-Answering
    - glove + attention v.s. fine tune tranformer
    - the power of batchsize + large epoch
- Enhancing BiDAF with BERT Embeddings, and Exploring ...
    - bidaf < bert + bidaf < bert finetune
- Machine comprehension using match-lstm and answer pointer
    - past QA
- Learning Natural Language Inference with LSTM
    - past NLI, mLSTM
    - lstm encodings + attention matching + lstm aggregation take last output
    - the difference to ESIM seems to be no local cmp (only concat) + no pool
- An Enhanced ESIM Model for Sentence Pair Matching with Self-Attention
    - esim before local cmp do self att 
## 813, GSN further
- Hierarchical Graph Matching Networks for Deep Graph Similarity Learning
- Hypergraph Attention Networks for Multimodal Learning
- funcGNN: A Graph Neural Network Approach to Program Similarity
- Detecting Code Clones with Graph Neural Networkand Flow-Augmented Abstract Syntax Tree
- DyNet: The Dynamic Neural Network Toolkit

## 813
- Relational inductive biases, deep learning, and graph network
    - must see 
- Graph Matching Networks for Learning the Similarity of Graph Structured Objects
    - similar to short text matching
- A Multi-Type Multi-Span Network for Reading Comprehension that Requires Discrete Reasoning
    - for DROP, multi task on BERT
    - QP vector (from last 4 hiddens) may be useful
- Dynamic Re-read Network for STS
    - match lstm
- Is Graph Structure Necessary for Multi-hop Reasoning?
- Gated Self-Matching Networks for Reading Comprehension and Question Answerin
- Hierarchical Graph Network for Multi-hop Question Answering
    - hotpot rank 1
    - handcraft graph + bi-att(text) + HGN(graph, by edgetype GAT) + gated attention representation from text + graph => ok
- Answering while Summarizing: Multi-task Learning for Multi-hop QA with Evidence Extraction
    - QFC, no BERT, word+cahrCNN+wordnet feature+num embedding
- Dynamically Fused Graph Network for Multi-hop Reasoning
- Ask Me Anything: Dynamic Memory Networks for Natural Language Processing
- Neural Module Networks for Reasoning over Text
- Deep Compositional Question Answering with Neural Module Networks
    - accurate unlexicalized parsing
- Neuro-symbolic representation learning on biological knowledge graphs
- Numeric Transformer - Albert
- QANet: Combining Local Convolution with Global Self-Attention for Reading Comprehension
- SA-Net on xxBERT
    - not found!?
- Dynamic Coattention Networks For Question Answering (DCN)
- https://plmsmile.github.io/2018/03/25/33-attention-summary/#%E5%A4%9A%E5%B1%82attention
- https://plmsmile.github.io/


## Survey 812
- https://plmsmile.github.io/2018/03/25/33-attention-summary/#%E9%94%AE%E5%80%BC%E5%AF%B9%E6%B3%A8%E6%84%8F%E5%8A%9B
    - attentions
- Bilateral Multi-Perspective Matching for Natural Language Sentences
    - BiMPM
    - word + char LSTM
        - use char lstm embedding(almost all models have char-level embedding making wordpiece more promising)
    - contextualized with biLSTM
    - multiperspective matching (f) = many projection + consine similarity
    - many f for 1. last lstm of another 2. attentive pool 3. max similarity 4. f than maxpool
    - use last time steps of bilstm in aggregation layer
- Learning beyond datasets: Knowledge Graph Augmented Neural Networks for Natural language Processing


## Linguist
Acquisition of Quantifiers
https://www.annualreviews.org/doi/10.1146/annurev-linguistics-011516-033930

## Fancy 
- new, interesting, but unrelated for now
    - Overestimation of Syntactic Representation in Neural Language Models
    - Quasi-Recurrent Neural Networks
    - Contextual Word Representations: A Contextual Introduction (for demo to newbies)
    - SupSup: Supermasks in Superposition
    - Hopfield Networks is All You Need 
    - TransCoder: Unsupervised Translation of Programming Languages
        - p 2 tree 2 h?
- good classic NLI
    - Knowledge Enhanced Attention for Robust Natural Language Inference
    - Bilateral Multi-Perspective Matching for Natural Language Sentences
        - biMPM, bi-MPM
        - multi-way to match each token to another sentence
            - (max similarity, attention weighted sum, last lstm, all + maxpool)
        - multi-perspective consine similarity
    - Compare, Compress and Propagate: Enhancing Neural Architectures with Alignment Factorization for Natural Language Inference
        - CAFE, FM feature extraction
    - Neural Natural Language Inference Models Enhanced with External Knowledge
        - KIM for improving ESIM by AIC components (attention, local inference information, pooling)
        - attetnion: scalar, local: relation embedding, pooling : attention pooling with a
        - wordnet embedding, evaluate ESIM+KIM on SNLI, MNLI, breaking NLI
    - biAtt Layer in BiDAF
    - natural language inference over interaction space
        - embedding
            - + syntatic embedding(POS+exact match)
        - self attention layer
            - att is $\vec{w}  [a;b;a \odot b]$, this guy has similar thoughts to mine
        - interaction later
            - produce p*h*d feature by p*d h*d => p*h*d
        - feature extraction layer by DenseNet
        - https://www.cnblogs.com/databingo/p/9311892.html
        - https://github.com/YichenGong/Densely-Interactive-Inference-Network

- promising network
    - CGC : Crystal Graph Convolutional Neural Networks for an Accurate and Interpretable Prediction of Material Properties
    - GGCN : 

## Knowlege NLI section
- CosqenNet
    - early
- KCI-TEN
    - new, attentive
- KIM
    - co-attention + WordNet knowledge
- KES
    - + graph embedding readout (concept net graph)
- KGAnet: a knowledge graph attention network for enhancing natural language inference
    - add kowledge embedding before downstream task
    - word-net subgraph (1 hop neighbor)
    - KE is calculated by a mechanism similar to graph attention(relatoin importance + FNN attention)
    - IEEE NCA 2020
- Learning beyond datasets: Knowledge Graph Augmented Neural Networks for Natural language Processing
    - NAACL 2018
- KagNet: Knowledge-Aware Graph Networks for Commonsense Reasoning
    - EMNLP-IJCNLP 2019
- KGAT: Knowledge Graph Attention Network forRecommendation
    - KDD 2019 research track

## For better writing
- Inherent Disagreements in Human Textual Inferences
- https://arxiv.org/pdf/1907.11932.pdf
    - exp and formulation
- https://dl.acm.org/doi/pdf/10.1145/3357384.3358071
    - module part
- Right for the Wrong Reasons: Diagnosing Syntactic Heuristics in Natural Language Inference
    - prior and statistic learner

## Survey 0811
- Not All Claims are Created Equal: Choosing the Right Approach to Assess Your Hypotheses
    - not done
- Transformers as Soft Reasoners over Language
    - transformers have ability to reason over soft rules multihop
- Improving Transformer Models by Reordering their Sublayers
    - reorder self-att and ff layers, ff layers later better in most cases
- A Mixture of h − 1 Heads is Better than h Head
    - multihead + gate, GF iterative training with G is 1/5 of F's frequency
- pair2vec: Compositional Word-Pair Embeddings for Cross-Sentence Inference
    - pair2vec 
- Bi-Directional Attention Flow for Machine Comprehension
    - QA version ESIM
    - embedding = char cnn + glove + bilstm
    - matching = Q2C+C2Q+Origin Context (Since doing QA, want to model context)
        - Q2C is a $h_c = 0.84h_c$ where 0.84 is the max softmax value for the column
            - this is strange to me(a gate for how important the word is?)
    - prediction
    - https://zhuanlan.zhihu.com/p/106080204
- Crystal Graph Convolutional Neural Networks for an Accurate and Interpretable Prediction of Material Properties
- Correlating neural and symbolic representations of language
- Natural Language Inference with Monotonicity
    - non neural in 2019...
    - https://nlp.stanford.edu/~wcmac/downloads/fracas.xml
    - fracas dataset
- Inoculation by Fine-Tuning: A Method for Analyzing Challenge Datasets
    - improtant for claiming evaluation
- Inherent Disagreements in Human Textual Inferences
    - for better writing
    - another view of metric
- Probing Natural Language Inference Models through Semantic Fragments
- Investigating BERT’s Knowledge of Language: Five Analysis Methods with NPIs
- Do Neural Models Learn Systematicity of Monotonicity Inference in Natural Language?
- Fine-tuning BERT for Joint Entity and Relation Extraction in Chinese Medical Text
    - use BERT 6 layers + masked BERT 6 layers to do MED Text
- 繁體中文依存句法頗析器, 李彥璇, 學店
- Glyce: Glyph-vectors for Chinese Character Representations
    - https://zhuanlan.zhihu.com/p/55967737
    - glyph + CNN + charvector => BERT => tasks
    - use glyph for improving word embedding
- CAFE: Compare, Compress and Propagate: Enhancing Neural Architectures with Alignment Factorization for Natural Language Inference
    - Highway Network On WordEmbedding > FN (they do not use bilstm)
    - cross attention + Factorization Machine for alignment extention
        - get scalars extentions
        - intra + cross(inter)
    - exhance highwayed WE with  "cross/intra att FM on concat+sub+mul"
    - lstm(not bi)
    - meanmaxpool + fnn
    - ablation and exp shows that fm > fnn, sum pool > mean pool
    - exp uses MNLI extra annotation for error analysis
    - FN is a good higher order intra dimention checker 
- Higher-Order Factorization Machines
    - https://zhuanlan.zhihu.com/p/50426292

## Semantic Role Labeling
- Semantic Role Labeling with Associated Memory Network
- Simple BERT Models for Relation Extraction and Semantic Role Labeling


## Semantic Parse
- Unsupervised Semantic Parsing
    - markov logic 
- Semantic Parsing Via Paraphrasing
    - sent -> utter -> logic form
    - ACL 2014
- Transforming Dependency Structures to Logical Forms for Semantic Parsing
    - TACL 2016
- Quantifier Words and Their Multi-functional(?) Parts*
    - linguistists
- Deep Graph Translation
    - GT-GAN
- A Survey on Semantic Parsing
- TRANX: A Transition-based Neural Abstract Syntax Parser for Semantic Parsing and Code Generation
- Simpler but More Accurate Semantic Dependency Parsing
- Learning Structured Natural Language Representations for Semantic Parsing
- Learning Semantic Parsers from Denotations with Latent Structured Alignments and Abstract Programs
- Second-Order Semantic Dependency Parsing with End-to-End Neural Networks
- Complex Question Decomposition for Semantic Parsing
    - todo
- Graph-to-Tree Neural Networks for Learning Structured Input-Output Translation with Applications to Semantic Parsing and Math Word Problem

## Generative Model
- InfoGAN: Interpretable Representation Learning by Information Maximizing Generative Adversarial Nets
    - GAN + c(meaningful dimension code) reconstructor
- VAE-GAN
- Bi-GAM, ALI
- domain adversarial network
- feature disentanglement
- Improving Variational Inference with Inverse Autoregressive Flow
- Glow: Generative Flow with Invertible 1×1 Convolutions

## Generative Family
- Auto-Encoding Variational Bayes
- Generative Adversarial Nets
    - NIPS, 2014
- NICE: Non-linear Independent Components Estimation

## NLI ref
- critics
    - Stress-Testing Neural Models of Natural Language Inference with Multiply-Quantified Sentences
        - cscl 2018
    - Right for the Wrong Reasons: Diagnosing Syntactic Heuristics in Natural Language Inference
        - ACL2019
    - Language Models as Knowledge Bases?
        - EMNLP2019
    - Testing the Generalization Power of Neural Network Models across NLI Benchmarks
        - fail to generalize to SICK
- dataset
    - Attack on BERT (adversial), tool = OpenAttack
        - Is BERT Really Robust? A Strong Baseline for Natural Language Attack on Text Classification and Entailment
            - quick and drastic
            - TextFOOLER
        - Word-level Textual Adversarial Attacking as Combinatorial Optimization
            - PSO
        - Generating Natural Language Adversarial Examples
            - genetic
    - new dataset generation
        - HELP: A Dataset for Identifying Shortcomings of Neural Models in Monotonicity Reasoning
            - the introduction is good as well
        - https://github.com/atticusg/MultiplyQuantifiedData
            - multiple quantifier data
            - Stress-Testing Neural Models of Natural Language Inference with Multiply-Quantified Sentences
        - Right for the Wrong Reasons: Diagnosing Syntactic Heuristics in Natural Language Inference
            - HANS, attack bad heristic and inductive bias
            - Lexical overlap, Subsequence, Constituent (tested on AllenNLP)
            - and point out negation problem
            - related works is worth seeing
        - Breaking NLI Systems with Sentences that Require Simple Lexical Inferences(for if use KG)
        - Probing Natural Language Inference Models through Semantic Fragments
            - quantifier, logic...
        - Enhancing Natural Language Inference Using New and Expanded Training DataSets and New Learning Models
            - switching, entities
        - Are Natural Language Inference Models IMPPRESsive? Learning IMPlicature and PRESupposition
            - quant?, TBS
        - Do Neural Models Learn Systematicity of Monotonicity Inference in Natural Language?
            - monotonicity
        - Adversarial NLI: A New Benchmark for Natural Language Understanding
    - other
        - e-SNLI
            - explainable SNLI
- baselines 
    - ESIM, InferSent, DeIsTe, DecompAtt
    - BERT, ...
- recent paper that success in NLI
    - AAAI20
        - Infusing Knowledge into the Textual Entailment Task Using Graph Convolutional Networks
            - text cls concat graph cls
            - graph is obtained by one-hop neighbors + page rank
            - graph is encoded by R-GCN
            - graph is readout by weighted sum
            - result is not so promising
                - i think need text graph interaction
        - Is BERT Really Robust?
- Encoder-Matching-Classifier for nerual models
    - Decomp-Att
- Improve Encoder/Matching
    - (DeIsTe) End-Task Oriented Textual Entailment via Deep Explorations of Inter-Sentence Interactions
    - gated pooling from Dr.Su's student
    - ESIM
    - (SemBERT) Semantics-aware BERT for Language Understanding (SOTA NLI)
- KG incorporation
    - CosqenNet
    - KCI-TEN
    - KIM
    - KES (new KIM)
- logic NLI
    - Logical Inferences with Comparatives and Generalized Quantifiers
- explainable: 
    - NILE : Natural Language Inference with Faithful Natural Language  explanations
- very early NLI at 2015
    - Reasoning about entailment with neural attention
    - LSTM premise -> hypothesis + hypothesis attention

## Word Embeddings
- Deep contextualized word representations (ELMo)
- Learning Compositionality Functions on Word Embeddings for Modelling Attribute Meaning in Adjective-Noun Phrases
    - TODO, EACL2017
- word2ket: Space-efficient Word Embeddings inspired by Quantum Entanglement
    - WTF
- Understanding Composition of Word Embeddings via Tensor Decomposition
    - 2019 ICLR, Truck Decomposition of tensor 
- Incorporating Syntactic and Semantic Information in Word Embeddings using Graph Convolutional Networks
    - ACL2019, SynGCN and SemGCN
- Word Embedding via tensor factorization
    - 2017, math, CP decomposition of tensor(generalized SVD)
- Word Embedding-based Antonym Detection using Thesauri and Distributional Information
    - train embedding with loss function for syn/ant/correlation
    - 2015
- Learning Word Vectors with Linear Constraints: A Matrix Factorization Approach
    - linear constraint
    - 2018?
- WordNet Embeddings
    - for better catching word sense
    - 2018

## Important
- Logical Inferences with Comparatives and Generalized Quantifiers
    - text -> CCG -> semamtic parse -> solver
    - test on MED and 
- Neural Module Networks for Reasoning over Text
- Neural Symbolic Reader: Scalable Integration of Distributed and Symbolic Representations for Reading Comprehension
    - todo
- Are Transformers universal approximators of sequence-to-sequence functions?
    - theoratical guarantees of tranformers
    - the paper shows bilinear attention and separatable convelution are universal too
        - pay less attention with lightweight and dynamic convolutions
        - https://www.dazhuanlan.com/2019/10/01/5d92e12b440a3/
- Big Bird: Transformers for Longer Sequences
- Tree-Structured Attention with Hierarchical Accumulation
    - moju's suggestion
- Recursive Neural Networks Can Learn Logical Semantics
    - 2015, must read, Tree-NN, Tree-NTN(a technique but impractical if direct use)
    - single logic lexican / logic sentence(1-12) / single quantifier / SICK
    - SICK dataset is solved? (similar to SNLI, but BERT fail to generalize to it when train on MNLI)
- Right for the Wrong Reasons: Diagnosing Syntactic Heuristics in Natural Language Inference
    - the HANS dataset
    - Lexical overlap, Subsequence, Constituent
- Relational Graph Attention Networks 
    - RGAT-general
    - aspect entity rooted tree
    - Relation attention(absed on realtion embedding only) + Normal GAT
- (KIM) Neural Natural Language Inference Models Enhanced with External Knowledge
- (R-GAT) Relational Graph Attention Network for Aspect-based Sentiment Analysis
    - ACL2020, improve dep-GAT by consider relation type
    - Inside contain many Graph ASAB works
- (InferSent) Supervised Learning of Universal Sentence Representations from Natural Language Inference Data
    - FB, EMNLP 2017
    - SentEncoder (without cross attention)
- (2020 AAAI entailment)  **Infusing Knowledge into the Textual Entailment Task Using Graph Convolutional Networks**
    - 2020 AAAI entailment 2/2
- (Attack on BERT) **Is BERT Really Robust? A Strong Baseline for Natural Language Attack on Text Classification and Entailment**
    - MIT, 2020 AAAI entailment 1/2
    - for cls: TextCNN, TextLSTM, BERT
    - for entailment : InferSent, ESIM, BERT
- Tree-to-tree Neural Networks for Program Translation
    - 2018, UC Berkley, Program Translation
- HGT > HGAT > TextGCN > GAN
- (HetGT) **Heterogeneous Graph Transformer**
    - SOTA?
    - reasonable math, done
    - project to K, Q, V by type of node
    - Attention : $K_{\tau(s)}W_{\phi(e)}Q_{\tau(t)}^T \times \frac{ \mu_{<\tau(s), \phi(e), \tau(t)>}}{d_h}$
    - Message : $H(s) P_{\tau(s)}^i  V_{\phi(e)}$, $P$ is a projection to head space, $V$ is projection to value space by edge type
    - Aggregation: the weight sum $\hat{H}$ is then passed through a linear projection $A_{\tau(t)}$ follow by activation(relu)
    - Add and Norm (Residual Layer)
- (GaAN) GaAN: Gated Attention Networks for Learning on Large and Spatiotemporal Graphs
    - gated GAT, with multihead KQV attention + gated head aggregator
- (HGAT) Heterogeneous Graph Attention Networks for Semi-supervised Short Text Classification
    - HGAT, can be for Heterogeneous attention
    - type for nodes, dual attention 
- (HAN) Heterogeneous Graph Attention Network
    - node and meta path attention on hete graphs
- Language Modeling with Gated Convolutional Networks
    - first Gated GCN?
- Encoding Sentences with Graph Convolutional Networks for Semantic Role Labeling
    - GGCN for SRL
- HOW POWERFUL ARE GRAPH NEURAL NETWORKS?
    - stanford + MIT
    - discuss the power of different models
    - for our task, the node meaning and node structure embedding is more important
- SG-Net
    - linking
- (KCI-TEN) Knowledge-aware Textual Entailment with Graph Attention Network
- (KnowBERT) Knowledge Enhanced Contextual Word Representations
- (label attention) Rethinking Self-Attention: An Interpretable Self-Attentive Encoder-Decoder Parser
- (Decomp-Att) A Decomposable Attention Model for Natural Language Inference
- (MT-DNN) Multi-Task Deep Neural Networks for Natural Language Understanding
- A Primer in BERTology: What we know about how BERT works
    - to know what to improve
- (more robust inference) Probing Natural Language Inference Models through Semantic Fragments
- SentiBERT: A Transferable Transformer-Based Architecture for Compositional Sentiment Semantics
    - utilizing constituent tree parse result and tree-attention for node classification
- (PRPN) Neural Language Modeling by Jointly Learning Syntax and Lexicon
- Tree Transformer: Integrating Tree Structures into Self-Attention
- (FOL fusion, neuron style)Augmenting Neural Networks with First-order Logic
- (FOL fusion, loss style)Integrating Deep Learning with Logic Fusion for Information Extraction
- ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators
    - https://zhuanlan.zhihu.com/p/89763176
    - GAN for NLP(decriminator for medium level MLM model)
- Attention Models in Graphs: A Survey
- Aspect-based Sentiment Classification with Aspect-specific Graph Convolutional Networks
- A Dependency Syntactic Knowledge Augmented Interactive Architectur for End-to-End Aspect-based Sentiment Analysis
- ON THE TURING COMPLETENESS OF MODERN NEURAL NETWORK ARCHITECTURES
    - (for why or why not to change attention)
- (ESIM) Enhanced LSTM for Natural Language Inference
    - LSTM or Tree-LSTM for encoding
    - matching mechanism by vector similarity
    - better local judgement by using LSTM (access to context)
    - max pool + avg pool for aggregation
### deeper
- Dependency Graph Enhanced Dual-transformer Structure for Aspect-based Sentiment Classification
    - must see
    - biaffine attention guidiance
        - this can be used as the interaction model for NLP
        - this is quite similar to decomp-Att
        - but inside each layer
- Document Modeling with Graph Attention Networks for Multi-grained Machine Reading Comprehension
- Graph-to-Tree Learning for Solving Math Word Problems
- Heterogeneous Graph Neural Networks for Extractive Document Summarization
- Heterogeneous Graph Transformer for Graph-to-Sequence Learning
- Integrating Semantic and Structural Information with Graph Convolutional Network for Controversy Detection
- Neural Graph Matching Networks for Chinese Short Text Matching
    - must see
- Specializing Word Embeddings (for Parsing) by Information Bottleneck
    - EMNLP19, best paper, information bottleneck, VIB method
    - a better POS tag 
    - $L_{IB} = − I(Y;T) + \beta I(X;T)$
- AWE: Asymmetric Word Embedding for Textual Entailment
    - End-Task Oriented Textual Entailment via Deep Explorations of Inter-Sentence Interactions

## QA
- GEAR: Graph-based Evidence Aggregating and Reasoning for Fact Verification
    - FEVER
    - sentence threshold
    - sentence pair cls generation 
    - graph attention between
    - aggregation
- Hierarchical Graph Network for Multi-hop Question Answering
- Retrospective Reader for Machine Reading Comprehension
    - sketch reading + intense varifivation

## Special / Quality Work
- Neural CRF Model for Sentence Alignment in Text Simplification
- Autoencoding Pixies: Amortised Variational Inference with Graph Convolutions for Functional Distributional Semantics
    - functional expression of word...
- Evidence-Aware Inferential Text Generation with Vector Quantised Variational AutoEncoder
    - not related, but interesting to see VQ technique in 2020
- Adaptive Compression of Word Embeddings
    - WE compression
## Queue
- ON THE TURING COMPLETENESS OF MODERN NEURAL NETWORK ARCHITECTURES
- Neural Graph Matching Networks for Chinese Short Text Matching
- Dependency Graph Enhanced Dual-transformer Structure for Aspect-based Sentiment Classification
- Memory Tranformer
- PRPN
- DG-SpanBERT
- TUPE:重新思考语言预训练中的位置编码
- 当BERT遇上知识图谱
- Rethinking Self-Attention: An Interpretable Self-Attentive Encoder-Decoder Parser
- K-ADAPTER: Infusing Knowledge into Pre-Trained Models with Adapters
- Graph-to-Tree Learning for Solving Math Word Problems
- Heterogeneous Graph Neural Networks for Extractive Document Summarization
- Heterogeneous Graph Transformer for Graph-to-Sequence Learning
- Learning to Ask More: Semi-Autoregressive Sequential Question Generation under Dual-Graph Interaction
- Relational Graph Attention Network for Aspect-based Sentiment Analysis

## FOL
- Augmenting Neural Networks with First-order Logic
- Integrating Deep Learning with Logic Fusion for Information Extraction

## Position Embedding
- Transformer with Untied Positional Encoding
- (RPR) Self-Attention with Relative Position Representations
- Position-aware Attention and Supervised Data Improve Slot Filling
    - positional "attention"

## KG/Knowledge Related
- KGANet
- KGAT: Knowledge Graph Attention Network for Recommendation
- KagNet: Knowledge-Aware Graph Networks for Commonsense Reasoning
- ERNIE: Enhanced Language Representation with Informative Entities
    - KG + BERT
- KnowBERT - Knowledge Enhanced Contextual Word Representations
    - https://arxiv.org/pdf/1909.04164.pdf
    - https://blog.csdn.net/BigPig_LittleTail/article/details/104511432
- Knowledge-aware Textual Entailment with Graph Attention Network
- Improving Natural Language Inference Using External Knowledge in the Science Questions Domain
    - ConSeqNet
- K-ADAPTER: Infusing Knowledge into Pre-Trained Models with Adapters
- K-BERT: Enabling Language Representation with Knowledge Graph

## Mem
- Neural Semantic Encoders
- Memory Transformer

## GNN
- (HetGNN) Heterogeneous Graph Neural Networks
- Semantic Graphs for Generating Deep Questions
    - Hotpot QA SOTA
- GCAN: Graph-aware Co-Attention Networks for Explainable Fake News Detection on Social Media
    - NCKU, taiwan, ACL2020
- Syntax-Aware Aspect Level Sentiment Classification with Graph Attention Networks
    - Dep-GAT
- Knowledge-aware Textual Entailment with Graph Attention Network
- Graph-to-Sequence Learning using Gated Graph Neural Networks
    - contain dependency graph for translation
- (Tree LSTM) Improved Semantic Representations From Tree-Structured Long Short-Term Memory Networks
- (GAT) Graph attention networks
- Improving Natural Language Inference Using External Knowledge in the Science Questions Domain
- Gated Graph Convolutional Recurrent Neural Networks(GGCN)
- Graph Transformer Networks(GTN)
- SentiBERT: A Transferable Transformer-Based Architecture for Compositional Sentiment Semantics
    - utilizing constituent tree parse result and tree-attention for node classification
- Graph Neural Networks: A Review of Methods and Applications
- (DGA) descriminativ graph autoencoder (?)
- Aspect-based Sentiment Classification with Aspect-specific Graph Convolutional Networks
    - Dep-GCN
    - Aspect-aware Attention
- Graph-to-Tree Neural Networks for Learning Structured Input-Output Translation with Applications to Semantic Parsing and Math Word Problem
- Improved Semantic Representations From Tree-Structured Long Short-Term Memory Networks
    - Tree-LSTM
### ACL 2020 graph
- Dependency Graph Enhanced Dual-transformer Structure for Aspect-based Sentiment Classification
- AMR Parsing via Graph-Sequence Iterative Inference
- Document Modeling with Graph Attention Networks for Multi-grained Machine Reading Comprehension
- Graph-to-Tree Learning for Solving Math Word Problems
- Heterogeneous Graph Neural Networks for Extractive Document Summarization
- Heterogeneous Graph Transformer for Graph-to-Sequence Learning
- Integrating Semantic and Structural Information with Graph Convolutional Network for Controversy Detection
- Learning to Ask More: Semi-Autoregressive Sequential Question Generation under Dual-Graph Interaction
- Relational Graph Attention Network for Aspect-based Sentiment Analysis
- Entity-Aware Dependency-Based Deep Graph Attention Network for Comparative Preference Classification
- Neural Graph Matching Networks for Chinese Short Text Matching
- Attention Models in Graphs: A Survey

## Parser(Dependency or Constituent)
- Deep Biaffine Attention for Neural Dependency Parsing
- Multi-level Biaffine Attention for Semantic Dependency Parsing
- Self-attentive Biaffine Dependency Parsing
- Rethinking Self-Attention: An Interpretable Self-Attentive Encoder-Decoder Parser
- Constituency Parsing with a Self-Attentive Encoder
- Neural Constituency Parsing of Speech Transcripts
- Cross-lingual Dependency Parsing with Unlabeled Auxiliary Languages
- (Parser used In dep-GAT) A Fast and Accurate Dependency Parser using Neural Networks
- (PRPN) Neural Language Modeling by Jointly Learning Syntax and Lexicon
- Tree Transformer: Integrating Tree Structures into Self-Attention
- Deep Semantic Role Labeling: What Works and What’s Next
- Penman: An Open-Source Library and Tool for AMR Graphs
    - AMR grapher

## BERTology
- Investigating BERT’s Knowledge of Language: Five Analysis Methods with NPIs
- A Primer in BERTology: What we know about how BERT works
- Are Sixteen Heads Really Better than One?

## Other (Hierachical / Creative / Foundation)
- Deep Ensembles: A Loss Landscape Perspective 
- Reformer: The Efficient Transformer
    - TL;DR, local sensitive hashing + reversibility for transformer layer
    - imporve efficiency (time and mem) 
- A structured self-attentive sentence embedding
    - 2D Word Embedding?
- Syntax Aware LSTM model for Semantic Role Labeling
    - dependency graph + biLSTM
    - cont.
        - Jointly Extracting Event Triggers and Arguments by Dependency-Bridge RNN and Tensor-Based Argument Interaction
- Universal Transformers
- Rethinking Self-Attention: An Interpretable Self-Attentive Encoder-Decoder Parser
- Self-Adaptive Hierarchical Sentence Model
- Graph based Translation Memory for Neural Machine Translation
    - key : Translation Memory
- (Decomp-Att) A Decomposable Attention Model for Natural Language Inference
- (MT-DNN) Multi-Task Deep Neural Networks for Natural Language Understanding
- (more robust inference?) Probing Natural Language Inference Models through Semantic Fragments
- (teacher bert, student bert?) Squeeze BERT
- (PRPN) Neural Language Modeling by Jointly Learning Syntax and Lexicon
- Swish: a Self-Gated Activation Function
- Tree Transformer: Integrating Tree Structures into Self-Attention
- Deep Semantic Role Labeling: What Works and What’s Next
- similar to baseline - BERT for Evidence Retrieval and Claim Verification
- SQUAD 2.0 (2018 ACL best) - Know What You Don't Know: Unanswerable Questions for SQuAD
- ALBERT: A LITE BERT FOR SELF-SUPERVISED LEARNING OF LANGUAGE REPRESENTATIONS
- K-ADAPTER: Infusing Knowledge into Pre-Trained Models with Adapters
- (relation extraction :  TACRED 3rd)Efficient long-distance relation extraction with DG-SpanBERT
    -  TACRED is an unsolved dataset
    -  Dependency + GCN after spanBERT concat spanBERT for prediction
        -  mine for MNLI should work
-  (History BiDAF) Bidirectional Attention Flow for Machine Comprehension
- A Generative Model for Joint Natural Language Understanding and Generation
    - conceptual, ACL2020
    - shared latent variable for NLU and NLG in dialogue systems
- A Graph Auto-encoder Model of Derivational Morphology
    - ACL2020
    - todo MWF
- ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators
    - https://zhuanlan.zhihu.com/p/89763176
    - GAN for NLP(decriminator for medium level MLM model)
- Understanding the difficulty of training deep feedforward neural networks
    - initialization of weight (xavier init)

## Clearly Done
- R-GAT
- HetGAT
- HetGraphTransformer
- SynGCN and SemGCN
- KCI-TEN
- ESIM
- (dep-GAT) Syntax-Aware Aspect Level Sentiment Classification with Graph Attention Networks
- (Decomp-Att) A Decomposable Attention Model for Natural Language Inference
    - attention method for soft allignment
- SentiBERT: A Transferable Transformer-Based Architecture for Compositional Sentiment Semantics
    - utilizing constituent tree parse result and tree-attention for node classification
- SemBert
- similar to baseline - BERT for Evidence Retrieval and Claim Verification
- attention is all you need
- BERT

## Near Done
- Graph2Tree - left=decoder
- KnowBERT - Knowledge Enhanced Contextual Word Representations
- Knowledge-aware Textual Entailment with Graph Attention Network
- Universal Transformers
- Improving Natural Language Inference Using External Knowledge in the Science Questions Domain




## details

### (Decomp-Att) A Decomposable Attention Model for Natural Language Inference
- word vector, $h, p$
- (optional)intral-sentence attention
- generate "cross soft aligned vector" by cross (decomposable) attention
    - $e_{i,j} = F(p_i)^tF(h_j)$, cross attention weight
    - $h_{a}, p_{a}$ is weighted sum of $h, p$ reps. to cross attention
- $v1 = G(h_a; p), v2 = G(p_a; h)$
- aggregate $v1, v2$ by sum to $s1, s2$
- $pred = FNN(s1,s2)$
- performance 200D - SNLI 86.8 Accuracy
    - problem, completely ignore sentence order...

### (KG+NLI) Knowledge-aware Textual Entailment with Graph Attention Network
![](https://i.imgur.com/g2j6yeW.png)
- Improving Natural Language Inference Using External Knowledge in the Science Questions Domain
    - similar to previous

### (bertology) A Primer in BERTology: What we know about how BERT works(!)

#### some observations
1. [SEP] as no op
2. many homogeneous heads
3. fine tune tend to attend [SEP]
4. cross-lingual information(from both mBERT and BERT)
    5. prove it is not because of shared word piece

#### fine-tune tech
1. using a weighted representation of all layers instead of the final layer output

### Graph Attention Networks(GAT)
- Q: why this kind of attention
    - multihead useless in bert 
    - ffn is more expressive?
    - i would like FNN(|h;g;h*g|)!


### similar to baseline - BERT for Evidence Retrieval and Claim Verification
https://arxiv.org/abs/1910.02655
- the main diff in SER
    - pair(pos+negative) training
    - HNS(hard negative sampling)
- entailment by simple bert score + and/or

### GNN(graph nn)
Graph Neural Networks: A Review of Methods and Applications
https://arxiv.org/abs/1812.08434

#### terms
- diffusion process
- spectral method
- manifolds
- contraction mapping
- what's the matter with DE?

#### higher order techniques
- locality, shared params, multilayer
- gate mechanism, attention mechanism and skip connection

#### introduction
- motivation - generalized CNN
    - locality, shared params, multilayer
    - from Euclidean to non-euclidean
- success in repr. learning and word embedding
    - random walk + n-gram model
    - DeepWalk, LINE, etc.
    - drawbacks: no shared params, # of param grows linear to # of node, not dynamic

#### overview
![](https://i.imgur.com/scjOKc6.png =50%x)

#### My qs:
- hyoer graphs?

### SNLI SOTA Paper(Sem-BERT) - Semantics-aware BERT for Language Understanding
main idea: combining BERT with SRL information
a deeper look: SRL perspectives integration => semantics integration (to BERT embedding)
https://zhuanlan.zhihu.com/p/81887324

#### Model
(sematic label to vector)Semantic role "label" embedding(to vector)
(global information)bi-LSTM
(perspectives integration) concat (different labeling) and feed forward to get final 
(bert side to word level) token to work by CNN
(semantics integration) concat bert + sem



#### Q
- will 1 entry of feature be less impactive than several entries
    - i.e. 1 bit contribution < multi bit?

![](https://i.imgur.com/QdVEnj8.png)

### ALBERT(2019) - ALBERT: A LITE BERT FOR SELF-SUPERVISED LEARNING OF LANGUAGE REPRESENTATIONS
main idea : smaller W embedding(un-contextualized) + shared params between layers + SOP(sentence order prediction) => liter and more compact BERT
1. Factorized embedding parameterization
2. Cross-layer parameter sharing
3. Inter-sentence coherence loss(SOP)