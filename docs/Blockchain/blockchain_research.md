---
title: Blockchain Resources
tags:
    - research
    - blockchain
    - NTU
lastUpdated: 2022/2/24
---

# Blockchain Resources
- Block is for batch processing txs.
- Chain is for determining the unique total ordering.
- Blocktree (forking) is inevitable in the presence of asynchrony.
- Consensus is to
    - (non-triviality) decide when fork
    - (security) ensure the choice will not change in the future
    - (liveness) ensure new tx comes in 
- Sharding is to 
    - avoid full replication of storage and computation 
    - allow XCMP
- To achieve sharding in a uniconsensus scheme
    - data availability
    - data integrity
    - shard liveness

## TOC
[TOC]

## TMP
- Scaling Blockchains Without Giving up Decentralization and Security 
- [DispersedLedger: High-Throughput Byzantine Consensus
on Variable Bandwidth Networks
](https://arxiv.org/pdf/2110.04371.pdf)
- [Trifecta: the Blockchain Trilemma Solved](http://pramodv.ece.illinois.edu/pubs/Whitepaper2019-9.pdf)


## Links
- [Research Space](/aMKXpWTCT9ajoup2ZWGX_A)
- [Blockchain Resources (Archived)](/Hy9fnYCJRl6rhaGI6j0qCg)
- [Search on ISIT](https://ieeexplore.ieee.org/search/searchresult.jsp?action=search&newsearch=true&matchBoolean=true&queryText=(%22Full%20Text%20.AND.%20Metadata%22:blockchain)%20AND%20(%22All%20Metadata%22:ISIT))

## Ideas
- Arbitrage based fixed interest protocol (game theory)
- Tree shard (leveled consensus)
- Adding concurrency to smart contracts (prism: consensus is not the bottlenet)
- Blockchain+
    - Network Topology 
        - potentially network coding problem
    - Privacy
        - zk-SNARK learning
- Proof or Disproof
    - Can we seal POS blocks?
    - Can we encode computing program to computing result (one-way)?
    - Can we provide tx order fairness with game theory? 

## Todo
- Blockchain Classes
- Chains
    - [x] Arbitrum
    - [ ] AVAX-C
    - [ ] Casper(eth2.0)
    - [ ] GRANDPA(polkadot)
    - [ ] Nightshade(near)
    - [ ] OHIE
- Primitives
    - BFTs
    - Data Availability Oracle
    - State Commitment (Fraud Proof)
    - Free2Shard
    - Code Computings
    - Cryptography
        - hash, multisig, VRF, VDF, ZK-SNARK
- Sharding
    - Polyshard
    - [ ] Free2Shard
        -  [ ] Separating Agreement from Execution for Byzantine Fault Tolerant Services
        -  [ ] Lazyledger

## Courses
- https://cs.nyu.edu/~mishra/
- https://ethresear.ch/
- https://courses.grainger.illinois.edu/ece598pv/sp2021/
- https://web.stanford.edu/class/archive/ee/ee374/ee374.1206/
- https://cs251.stanford.edu/syllabus.html

## Entries and Must-Reads
- Survey Entry
    - Free2Shard
- SOTA Consensus (Lasted Updated 2022/2/24)
    - Prism: Deconstructing the Blockchain to Approach Physical Limits, 2019
        - structured DAG based POW blockchain, physical limit
    - Scalable and Probabilistic Leaderless BFT Consensus through Metastability
        - Snow Consensus Family
    - HotStuff: BFT Consensus in the Lens of Blockchain
        - Partial-sync, Linear, Responsive leader-based BFT based on 3-chain confirmation rule
- Uniconsensus Sharding
    - Free2Shard, 2020
        - Also a good survey
- Data Availability
    - Fraud and Data Availability Proof
    - Coded Merkled Tree
    - Coded Interleaving Tree
- Layer 2
    - Arbitrum (State Commitment)
- Longest Chain Analysis
    - Bitcoin Backbone
    - Nakamoto Always Win
    - Rethinking Large-Scale Consensus

---

## Network Model
- Randomized Gossip Algorithms, https://web.stanford.edu/~boyd/papers/pdf/gossip.pdf
- How Efficient Can Gossip Be? (On the Cost of Resilient Information Exchange)
- [Consensus in the Presence of Partial Synchrony, 1988](https://groups.csail.mit.edu/tds/papers/Lynch/jacm88.pdf) 
    - this paper defines partial sync with GST or unkown $\Delta$
        - https://decentralizedthoughts.github.io/2019-06-01-2019-5-31-models/
    - On the minimal synchronism needed for distributed consensus, 1987
    - Impossibility of distributed consensus with one faulty process, 1985 (i.e. the FLP impossibility)
![](https://i.imgur.com/AXZU10j.png)



---

## Primitives, Utils, Analysis

### Nakamoto Analysis
- [The Bitcoin Backbone Protocol: Analysis and Applications](https://eprint.iacr.org/2014/765.pdf), 2015
- Liveness and Consistency of Bitcoin and Prism lockchains: The Non-lockstep Synchronous Case
- A Rational Protocol Treatment of 51% Attacks, 2021
- Everything is a Race and Nakamoto Always Wins, 2020
- Rethinking Large-Scale Consensus, 2020

### Privacy
- [Manta: a Plug and Play Private DeFi Stack](https://eprint.iacr.org/2021/743.pdf)
- [Grin --- MimbleWimble](https://medium.com/@brandonarvanaghi/grin-transactions-explained-step-by-step-fdceb905a853)

### Cryptography Primitives
- Keeping Authorities “Honest or Bust” with Decentralized Witness Cosigning
    - Byzcoin use this to reduce $O(n^2)$ PBFT communication complexity to $O(n)$ by multisigning
    - Harmony claim to use BSL multisig to increase security
- [JMT (Jellyfish Merkle Tree)](https://diem-developers-components.netlify.app/papers/jellyfish-merkle-tree/2021-01-14.pdf)
- CMT (Coded Merkle Tree)
- CIT (Coded Interleaving Tree)

### Tx Order Fairness
- Order-Fair Consensus in the Permissionless Setting



---

## Sharding 

### General
- Free2Shard: Adaptive-adversary-resistant sharding via Dynamic Self Allocation (T0)
- [Trifecta: the Blockchain Trilemma Solved](http://pramodv.ece.illinois.edu/pubs/Whitepaper2019-9.pdf)
- [Polkadot](https://medium.com/polkadot-network/grandpa-block-finality-in-polkadot-an-introduction-part-1-d08a24a021b5)
- OHIE: Blockchain Scaling Made Simple
- Zilliqa (computation sharding)
- [RapidChain: Scaling Blockchain via Full Sharding](https://eprint.iacr.org/2018/460.pdf)
- [Elrond: A Highly Scalable Public Blockchain via Adaptive State Sharding
and Secure Proof of Stake
](https://elrond.com/assets/files/elrond-whitepaper.pdf)

### ECC 
- Lagrange Coded Computing: Optimal Design for Resiliency, Security, and Privacy
- PolyShard: Coded Sharding Achieves Linearly Scaling Efficiency and Security Simultaneously
- Scalable Network-Coded PBFT Consensus Algorithm
- Low Latency Cross-Shard Transactions in Coded Blockchain
- Dynamic Distributed Storage for Blockchains
- On the information theory of clustering, registration, and blockchains

### XCMP
- State of the art: Cross Chain Communications
- [Connext Docs, XCMP trillema](https://docs.connext.network/Integration/SystemOverview/connextvsxyz)
    - proxy lite client!

### Near
- [open problem](https://medium.com/nearprotocol/unsolved-problems-in-blockchain-sharding-2327d6517f43)
- [near consensus](https://near.org/papers/nightshade/#nightshade)

### Fraud and Data Availability Proof
- Coded Merkle Tree: Solving Data Availability Attacks in Blockchains
- [Fraud and Data Availability Proofs: Maximising Light Client Security and Scaling Blockchains with Dishonest Majorities](https://arxiv.org/pdf/1809.09044.pdf)
- Overcoming Data Availability Attacks in Blockchain Systems: LDPC Code Design for Coded Merkle Tree
- CIT

### State Commitment

---

## Consensus

### BFT
- Separating Agreement from Execution for Byzantine Fault Tolerant Services (T1)
- Communication complexity of byzantine agreement, revisited
- TaiJi: Longest Chain Availability with BFT Fast Confirmation
- Breaking the O(n2) bit barrier: scalable byzantine agreement with an adaptive adversary
- [HotStuff: BFT Consensus with Linearity and Responsiveness, 2020](https://dl.acm.org/doi/pdf/10.1145/3293611.3331591)
    - [HotStuff: BFT Consensus in the Lens of Blockchain, 2019](https://arxiv.org/pdf/1803.05069.pdf)
    - [HotStuff the Linear, Optimal-Resilience, One-Message BFT Devil](https://dahliamalkhi.files.wordpress.com/2018/03/hot-stuff-arxiv2018.pdf)
    - [ZK-TLV 0x09 - Ittai Abraham - The HotStuff approach to BFT (Part 3)](https://www.youtube.com/watch?v=ONobI3X70Rc&ab_channel=ZeroKnowledge)
- [The Honey Badger of BFT Protocols, 2016](https://eprint.iacr.org/2016/199.pdf)
- LinSBFT: Linear-Communication One-Step BFT Protocol for Public Blockchains
- ByzCoin 
    - Enhancing Bitcoin Security and Performance with Strong Consistency via Collective Signing
    - Cosi + bitcoin-NG
- Casper the Friendly Finality Gadget
    - https://www.youtube.com/watch?v=S262StTwkmo&ab_channel=NEAR
- [from streamlet to hotstuff](https://courses.grainger.illinois.edu/ece598pv/sp2021/lectureslides2021/ECE_598_PV_course_notes14_v2.pdf)
- Leaderless Byzantine Fault Tolerant Consensus
    - O(nlogn), Good Preli
- [Consensus in the Presence of Partial Synchrony, 1988](https://groups.csail.mit.edu/tds/papers/Lynch/jacm88.pdf) 


### Dags
- [HGraph](https://www.swirlds.com/downloads/SWIRLDS-TR-2016-01.pdf)
- [Conflux](https://arxiv.org/pdf/1805.03870.pdf)
- IOTA paper (Tangle)
- [Fantom](https://arxiv.org/pdf/1810.10360.pdf) (Lachesis Consensus)
- Prism: Deconstructing the Blockchain to Approach Physical Limits

### Snow
- [Avalanche](https://assets.website-files.com/5d80307810123f5ffbb34d6e/6009805681b416f34dcae012_Avalanche%20Consensus%20Whitepaper.pdf) (Snowflake Consensus)
- [ ] Blizzard: a Distributed Consensus Protocol for Mobile Devices (2 Layer Avalanche?)
- [ ] Asynchronous Epidemic Algorithms for Consistency in Large-scale Systems (A PhD thesis)


### Solana
- https://medium.com/solana-labs/tower-bft-solanas-high-performance-implementation-of-pbft-464725911e79
- https://docs.solana.com/cluster/overview
- https://solana.com/solana-whitepaper.pdf

---

## Sybil Resistance

### POS
- Securing Proof-of-Stake Nakamoto Consensus Under Bandwidth Constraint
- Babylon: Reusing Bitcoin Mining to Enhance Proof-of-Stake Security

---

## Layer 2

### Side Chain

### Rollup
- Arbitrum

### Side Channel
- [Lightening Sidechain](https://www.bitcoinlightning.com/wp-content/uploads/2018/03/lightning-network-paper.pdf)
- High Throughput Cryptocurrency Routing in Payment Channel Networks

---

## Permissioned Blockchain
- Hotstuff
- IBM Hyperledger Frabic

---

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
- [Layer 2 Blockchain Scaling: a Survey](https://arxiv.org/pdf/2107.10881.pdf)
- Review of Techniques for Privacy-Preserving Blockchain Systems