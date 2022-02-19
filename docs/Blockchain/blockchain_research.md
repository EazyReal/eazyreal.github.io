---
title: Blockchain Resources
tags:
    - research
    - blockchain
    - NTU
---

# Blockchain Resources

- [Research Space](/aMKXpWTCT9ajoup2ZWGX_A)

https://ieeexplore.ieee.org/search/searchresult.jsp?action=search&newsearch=true&matchBoolean=true&queryText=(%22Full%20Text%20.AND.%20Metadata%22:blockchain)%20AND%20(%22All%20Metadata%22:ISIT)
tree sharding?
https://medium.com/encode-club/encode-hack-avalanche-workshop-2-video-slides-784175a68fb


https://arxiv.org/pdf/2110.04371.pdf

## Current Tasks
- Classes are good, maybe read first!
- Protocols
    - Polyshard
    - Prism Revisit
- Chains
    - Arbitrum
    - Avax-C
    - ETH 2.0
    - Polkadot
    - Near
- Primitives
    - BFTs
    - Code Computings
    - Cryptography
        - hash
        - multisig
        - VRF
        - VDF
        - ZK-SNARK

## Prioritized
- Sharding
    - Polyshard
    - Arbitrum
    - Fraud Proof
    - ETH 2.0
- Avalanche
- Scaling Blockchains Without Giving up Decentralization and Security 
- Fantom (Lachesis: Scalable Asynchronous BFT on DAG Streams)
- Solana (X)
- Keeping Authorities “Honest or Bust” with Decentralized Witness Cosigning
    - Byzcoin use this to reduce $O(n^2)$ PBFT to $O(n)$ by multisigning
        - Harmony claim to use BSL multisig to increase security
    - https://www.youtube.com/watch?v=rJhfH7Xn6ko
- [DispersedLedger: High-Throughput Byzantine Consensus
on Variable Bandwidth Networks
](https://arxiv.org/pdf/2110.04371.pdf)

## Model
- Randomized Gossip Algorithms, https://web.stanford.edu/~boyd/papers/pdf/gossip.pdf
- How Efficient Can Gossip Be? (On the Cost of Resilient Information Exchange)
- (A)Synchronous, GST https://decentralizedthoughts.github.io/2019-06-01-2019-5-31-models/

## Sharding
- Scalable Network-Coded PBFT Consensus Algorithm
- PolyShard: Coded Sharding Achieves Linearly Scaling Efficiency and Security Simultaneously
- Low Latency Cross-Shard Transactions in Coded Blockchain
- [Trifecta: the Blockchain TriLemma Solved](http://pramodv.ece.illinois.edu/pubs/Whitepaper2019-9.pdf)
- [Polkadot](https://medium.com/polkadot-network/grandpa-block-finality-in-polkadot-an-introduction-part-1-d08a24a021b5)
- OHIE: Blockchain Scaling Made Simple

### Coded Computing
- Lagrange Coded Computing: Optimal Design for Resiliency, Security, and Privacy

### Near
- [open problem](https://medium.com/nearprotocol/unsolved-problems-in-blockchain-sharding-2327d6517f43)
- [near consensus](https://near.org/papers/nightshade/#nightshade)


## ISIT
- Scalable Network-Coded PBFT Consensus Algorithm
- PolyShard: Coded Sharding Achieves Linearly Scaling Efficiency and Security Simultaneously
- Low Latency Cross-Shard Transactions in Coded Blockchain
- Dynamic Distributed Storage for Blockchains

### Coded Computing
- Lagrange Coded Computing: Optimal Design for Resiliency, Security, and Privacy

https://cs.nyu.edu/~mishra/COURSES/09.HPGP/scribe4

## New
- State of the art: Cross Chain Communications
- On the information theory of clustering, registration, and blockchains


## Courses, Links
- https://ethresear.ch/
- https://courses.grainger.illinois.edu/ece598pv/sp2021/
    - privacy
- http://web.stanford.edu/class/ee374/
    - prism

## Surveys
- A Survey of State-of-the-Art on Blockchains: Theories, Modelings, and Tools
- Scaling Blockchains: A Comprehensive Survey
- From blockchain consensus back to Byzantine consensus
- SoK: Sharding on Blockchain
- SoK: Diving into DAG-based Blockchain Systems
- SoK: Understanding BFT Consensus in the Age of Blockchains (Best)
- [SoK: Communication Across Distributed Ledgers](https://eprint.iacr.org/2019/1128.pdf)
- Deconstructing Blockchains: A Comprehensive Survey on Consensus, Membership and Structure
- A Survey of Distributed Consensus Protocols for Blockchain Networks
- Solutions to Scalability of Blockchain: A Survey
- L2 https://arxiv.org/pdf/2107.10881.pdf
- Review of Techniques for Privacy-Preserving Blockchain Systems

## Top Conference
- A Rational Protocol Treatment of 51% Attacks, iacr2021
    - game theory result that mitigates 51% attack
- Manta, iacr
    - NI-ZK Minting + AMM

---

## Bitcoin Backbone
- [The Bitcoin Backbone Protocol: Analysis and Applications](https://eprint.iacr.org/2014/765.pdf)
- Liveness and Consistency of Bitcoin and Prism lockchains: The Non-lockstep Synchronous Case

---

## PBFT
- Breaking the O(n2) bit barrier: scalable byzantine agreement with an adaptive adversary
- **Hot-Stuff** the Linear, Optimal-Resilience, One-Message BFT Devil
    - Linear msg, partial sync,  BFT
    - https://www.youtube.com/watch?v=ONobI3X70Rc&ab_channel=ZeroKnowledge
- LinSBFT: Linear-Communication One-Step BFT Protocol for Public Blockchains
- ByzCoin 
    - Enhancing Bitcoin Security and Performance with Strong Consistency via Collective Signing
    - Cosi + bitcoin-NG
- Casper the Friendly Finality Gadget
    - https://www.youtube.com/watch?v=S262StTwkmo&ab_channel=NEAR
- [from streamlet to hotstuff](https://courses.grainger.illinois.edu/ece598pv/sp2021/lectureslides2021/ECE_598_PV_course_notes14_v2.pdf)
- Leaderless Byzantine Fault Tolerant Consensus
    - O(nlogn), Good Preli

---

## Privacy
- [Manta: a Plug and Play Private DeFi Stack](https://eprint.iacr.org/2021/743.pdf)

---

## Efficiency


### SOTA protocols
- [Trifecta: the Blockchain TriLemma Solved](http://pramodv.ece.illinois.edu/pubs/Whitepaper2019-9.pdf)
    - https://www.youtube.com/watch?v=cvrrZrQYg_g&ab_channel=UWECEmedia
    - Prism: Deconstructing the Blockchain to Approach Physical Limits
    - Coded Merkle Tree: Solving Data Availability Attacks in Blockchains
    - Overcoming Data Availability Attacks in Blockchain Systems: LDPC Code Design for Coded Merkle Tree
Debarnab Mitra, Student Member, IEEE, Lev Tauz, Stud.
- Solana (Adhoc, POH + TowerBFT)
    - https://medium.com/solana-labs/tower-bft-solanas-high-performance-implementation-of-pbft-464725911e79
    - https://docs.solana.com/cluster/overview
    - https://solana.com/solana-whitepaper.pdf
- [Avalanche](https://assets.website-files.com/5d80307810123f5ffbb34d6e/6009805681b416f34dcae012_Avalanche%20Consensus%20Whitepaper.pdf) (Snowflake Consensus)
- [Fantom](https://arxiv.org/pdf/1810.10360.pdf) (Lachesis Consensus)
- IOTA paper (Tangle)

### Dags
- [HGraph](https://www.swirlds.com/downloads/SWIRLDS-TR-2016-01.pdf)
- [Conflux](https://arxiv.org/pdf/1805.03870.pdf)


### L2
- [Lightening Sidechain](https://www.bitcoinlightning.com/wp-content/uploads/2018/03/lightning-network-paper.pdf)
- High Throughput Cryptocurrency Routing in Payment Channel Networks

### Old Sharding
- Zilliqa (comp sharding, X)
- [RapidChain: Scaling Blockchain via Full Sharding](https://eprint.iacr.org/2018/460.pdf)
- [Elrond: A Highly Scalable Public Blockchain via Adaptive State Sharding
and Secure Proof of Stake
](https://elrond.com/assets/files/elrond-whitepaper.pdf)

---

## Video Resources
- [Distributed Systems Fundamentals: Berkley Course](https://www.youtube.com/watch?v=BF1pLZASX8s&list=PLZvgWu86XaWkpnQa6-OA7DG6ilM_RnxhW&index=4&ab_channel=BlockchainatBerkeleyX)
- [Scaling Blockchain: Berkley Course](https://www.youtube.com/watch?v=h2PcWelrSro&list=PLZvgWu86XaWnJTCJuiRhxlLaw1S3EwNF6&index=1&ab_channel=BlockchainatBerkeleyX)
- [Trust without Trust: Distributed Systems & Consensus](https://www.youtube.com/watch?v=KhBNWlQHwFg&list=PLSONl1AVlZNXUhgIrfgI6E3ayShvKI-o6&index=6&ab_channel=BlockchainatBerkeley)


## Decentralized Clustering
Decentralized Clustering on Compressed Data without Prior Knowledge of the Number of Clusters
https://www.imsc.res.in/~meena/papers/kmeans.pdf (Clustering = minimize $\sum_X \min_C d(x,c)$ is NP-hard (even for 2-d, k=2))
A local search approximation algorithm for k-means clustering
Exact and Approximation Algorithms for Clustering
Clustering using simulated annealing with probabilistic redistribution
https://hal.archives-ouvertes.fr/hal-00915822/document
- data processor
    - Decentralized K-means using randomized Gossip protocols for clustering large datasets
    - Fault tolerant decentralised K-Means clustering for asynchronous large-scale networks 
    - Epidemic K-Means Clustering