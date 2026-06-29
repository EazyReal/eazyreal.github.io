// Shared source of truth for homepage, projects, open source, and site links.
export type RichTextPart =
  | string
  | { href: string; text: string }
  | { strong: string };

export type RichText = RichTextPart[];

export type Link = {
  href: string;
  label: string;
};

type Project = {
  id: string;
  title: string;
  paragraphs: RichText[];
  links?: Link[];
};

export type ExternalWritingItem = Link & {
  kind: "coursework" | "essay" | "report" | "tutorial";
  description: string;
  lastUpdated?: string;
  tags: string[];
};

type CourseworkGroup = {
  title: string;
  description: string;
  links: Link[];
};

export type PageMeta = {
  title: string;
  heading?: string | false;
  description?: string;
  lastUpdated?: string;
  tags?: string[];
};

export const siteMeta = {
  author: "Maxwill Lin",
  description: "Maxwill's personal website.",
  name: "Maxwill Lin",
  technicalDescription:
    "Technical writing, notes, and project documentation by Maxwill Lin.",
};

const pageHrefs = {
  coursework: "/writing/coursework/",
  experience: "/experience/",
  home: "/",
  oss: "/oss/",
  projects: "/projects/",
  socials: "/socials/",
  writing: "/writing/",
  writingTags: "/writing/tags/",
};

export const links = {
  home: { href: pageHrefs.home, label: "Home" },
  experience: { href: pageHrefs.experience, label: "Experience" },
  projects: { href: pageHrefs.projects, label: "Projects" },
  oss: { href: pageHrefs.oss, label: "Open Source" },
  writing: { href: pageHrefs.writing, label: "Writing" },
  writingTags: { href: pageHrefs.writingTags, label: "Tags" },
  coursework: { href: pageHrefs.coursework, label: "Theoretical coursework" },
  github: { href: "https://github.com/EazyReal", label: "GitHub" },
  linkedin: { href: "https://www.linkedin.com/in/maxwilllin/", label: "LinkedIn" },
  resume: {
    href: "https://drive.google.com/file/d/1iBTJaVHiqBjrJ9jxYKth7Zv-mOVhbsf0/view",
    label: "Resume",
  },
  socials: { href: pageHrefs.socials, label: "Socials" },
  x: { href: "https://twitter.com/tensorfi", label: "X" },
  vmax: { href: "https://vmax.ai/", label: "Vmax" },
  slime: { href: `${pageHrefs.oss}#slime`, label: "slime" },
  harbor: { href: `${pageHrefs.oss}#harbor`, label: "Harbor" },
  areal: { href: `${pageHrefs.oss}#areal`, label: "AReaL" },
  verl: { href: `${pageHrefs.oss}#verl`, label: "verl" },
  sglang: { href: `${pageHrefs.oss}#sglang`, label: "SGLang" },
  vllm: { href: `${pageHrefs.oss}#vllm`, label: "vLLM" },
  primeRl: { href: `${pageHrefs.oss}#prime-rl`, label: "Prime-RL" },
};

const pageLastUpdated = {
  coursework: "2026-06-18",
  experience: "2026-06-18",
  home: "2026-06-26",
  oss: "2026-06-29",
  projects: "2026-06-17",
  socials: "2026-06-18",
  writing: "2026-06-18",
  writingTags: "2026-06-18",
} as const;

export const pageMeta = {
  coursework: {
    title: links.coursework.label,
    lastUpdated: pageLastUpdated.coursework,
    tags: ["writing", "coursework"],
  },
  home: {
    title: siteMeta.name,
    heading: false,
    lastUpdated: pageLastUpdated.home,
    tags: ["home"],
  },
  experience: {
    title: "Experience & Education",
    lastUpdated: pageLastUpdated.experience,
    tags: ["experience", "education"],
  },
  oss: {
    title: "Open Source Contributions",
    lastUpdated: pageLastUpdated.oss,
    tags: ["engineering", "oss"],
  },
  projects: {
    title: links.projects.label,
    lastUpdated: pageLastUpdated.projects,
    tags: ["engineering"],
  },
  socials: {
    title: links.socials.label,
    lastUpdated: pageLastUpdated.socials,
    tags: ["socials", "identity"],
  },
  writing: {
    title: links.writing.label,
    lastUpdated: pageLastUpdated.writing,
    tags: ["writing"],
  },
  writingTags: {
    title: "Writing Tags",
    heading: links.writingTags.label,
    lastUpdated: pageLastUpdated.writingTags,
    tags: ["writing", "tags"],
  },
};

export const siteNavLinks = [links.home, links.experience, links.projects, links.oss, links.writing];

export const socialLinks = [links.github, links.linkedin, links.resume, links.x, links.socials];

export const profile = {
  name: siteMeta.name,
  motto: "Make things as simple as possible, but not simpler.",
  about: [
    [
      "I develop algorithms and infrastructure for ",
      { strong: "recursive self-improvement" },
      ", especially around generative models, reinforcement learning, and software-engineering agents. Across research, engineering, business, and prioritization, I try to quotient out accidental detail, preserve the invariant, then build from there.",
    ],
    [
      "That is also how I think about ",
      { href: "/genai_first_principles/", text: "GenAI from first principles" },
      ".",
    ],
  ],
  photo: {
    src: "/img/profile.jpg",
    alt: siteMeta.name,
  },
  web3Addresses: [
    "0xb1B6356EA9E2f3Bf9867d6Ac1c1Bfd2cB1553Abb",
    "ytlin.eth",
    "maxwill.sol",
  ],
};

export const vmaxLead: RichText = [
  "I am the first technical hire at ",
  { href: links.vmax.href, text: links.vmax.label },
  ", where we are building automation for RL, starting from RL environments.",
];

export const vmaxSystem: RichText = [
  "I developed the core training system end-to-end: configuration system that makes experiments agent legible and reproducible, RL infrastructure orchestrating hundreds of GPUs, self-improving software-engineering task generators, and a rollout framework running agents in Harbor tasks on thousands of concurrent sandboxes.",
];

export const vmaxOss: RichText = [
  "I am a contributor to ",
  { href: links.slime.href, text: links.slime.label },
  " and ",
  { href: links.harbor.href, text: links.harbor.label },
  ", covering RL training logic, agent integrations, and sandbox runtime fixes.",
];

export const vmaxMetric: RichText = [
  "The system improved an open-source SWE-bench Pro base model by ",
  { strong: "+50% relative" },
  " under a constrained context window using synthetic tasks.",
];

export const vmaxHomepageSummary =
  "first technical hire building RL infrastructure that orchestrates hundreds of GPUs, self-improving task generators, and thousands of concurrent sandboxes.";

export const homepageHighlights: RichText[] = [
  [
    "Merged upstream work in ",
    { href: links.areal.href, text: links.areal.label },
    ", ",
    { href: links.verl.href, text: links.verl.label },
    ", ",
    { href: links.vllm.href, text: links.vllm.label },
    ", ",
    { href: links.sglang.href, text: links.sglang.label },
    ", ",
    { href: links.primeRl.href, text: links.primeRl.label },
    ", ",
    { href: links.slime.href, text: links.slime.label },
    ", and ",
    { href: links.harbor.href, text: links.harbor.label },
    " across RL training, agent infrastructure, and LLM serving correctness.",
  ],
  [
    "Ranked top ",
    { strong: "0.56%" },
    " among ",
    { strong: "96,000+" },
    " registrants in ",
    { strong: "Google Code Jam 2020" },
    ".",
  ],
  [
    { strong: "4.0/4.0" },
    " at Georgia Tech; ",
    { strong: "A+" },
    " in Advanced Algorithms, Advanced Linear Algebra, Quantum Information and Computation, and Theoretical Aspects of Modern Cryptography.",
  ],
  [
    { href: `${pageHrefs.projects}#zkalpha`, text: "zkAlpha" },
    " won ",
    { strong: "~US$9k" },
    " across 7 prizes at ",
    { strong: "ETHGlobal Paris" },
    " (1,400 participants, 321 projects).",
  ],
];

export const personal = {
  paragraphs: [
    ["I grew up in Taipei, Taiwan (Mandarin name: 林彥彤 / Yan-Tong Lin)."],
    [
      "Outside work I have been spending more time on poker, health and fitness, competitive multiplayer games, guitar, and piano. A few traces: ",
      {
        href: "https://youtu.be/XmpmadFYGOk",
        text: '"Fight" acoustic guitar cover',
      },
      " and an ",
      {
        href: "https://youtu.be/MSYaon4zNsc?si=ac7TzA_bLDmVUMfR",
        text: "ETH CC Paris hacker house",
      },
      ".",
    ],
  ],
};

export const selectedWritingItems: ExternalWritingItem[] = [
  {
    href: links.coursework.href,
    label: links.coursework.label,
    kind: "coursework",
    description:
      "Graduate-level and theoretical work across cryptography, quantum computation, blockchain protocols, and mathematics.",
    lastUpdated: pageMeta.coursework.lastUpdated,
    tags: ["theory", "cryptography", "quantum", "blockchain", "math"],
  },
  {
    href: "https://hackmd.io/9Hw3BAv8RhecludOcMEsvw",
    label: "Treap Tutorial",
    kind: "tutorial",
    description: "Competitive programming teaching material for the NCTU PCCA winter camp.",
    lastUpdated: "2020-01-19",
    tags: ["algorithms", "data structures", "competitive programming"],
  },
];

export const courseworkGroups: CourseworkGroup[] = [
  {
    title: "Modern cryptography",
    description:
      "Theoretical Aspects of Modern Cryptography coursework and proof-heavy problem sets.",
    links: [
      {
        href: "https://hackmd.io/@csie-tamc/SJTFrm3RF",
        label: "Theoretical Aspects of Modern Cryptography",
      },
      {
        href: "https://drive.google.com/drive/folders/1JMRcIRK0sLPSBOarRPpKHDL0CKYHuZmM",
        label: "Modern Cryptography Problem Set Solutions",
      },
    ],
  },
  {
    title: "Quantum computation",
    description:
      "Quantum computation and quantum information work, including algorithmic speedup by quantum walks.",
    links: [
      {
        href: "https://github.com/EazyReal/QCQI2020fall/blob/main/QCQI_final__Textual_Version_.pdf",
        label: "Exponential Algorithmic Speedup by Quantum Walk",
      },
    ],
  },
  {
    title: "Blockchain protocols",
    description:
      "Consensus and protocol-design work from blockchain coursework and reports.",
    links: [
      {
        href: "https://drive.google.com/file/d/1oQRTnn2oglmHK-RhmQoIf_v1ZSk6LV_D/view",
        label: "Bestchain Protocols and Improvements",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "zkalpha",
    title: "zkAlpha",
    paragraphs: [
      [
        "zkAlpha connects quant traders and liquidity providers w/o revealing the strategy through the use of zkSNARKs. I was responsible for the protocol design, smart contract pseudocode, and zero-knowledge circuits. My teammates contributed to frontend, smart contract development based on pseudocode, and demo. The project won 7 prizes (including Filecoin grand prize and 1inch 2nd place) and ~USD 9k in total out of 1400 attendees and 321 projects.",
      ],
    ],
    links: [
      { href: "https://ethglobal.com/showcase/zkalpha-twwtg", label: "hackathon link" },
      {
        href: "https://docs.google.com/presentation/d/1I3GCcc1bKEILhntgQ1V5M-rADx4QY-NAddNTX6CT41I/",
        label: "presentation",
      },
    ],
  },
  {
    id: "bulk-mint-nfts",
    title: "Bulk Mint NFTs",
    paragraphs: [
      [
        "I identified a smart contract weakness that allowed multiple NFTs to be minted in ",
        {
          href: "https://polygonscan.com/tx/0x539c2077b724e71b370a9ea5bc6aaa626fdfcfa16377437b8a5d513687147916",
          text: "one transaction",
        },
        ", bypassing a one-per-account restriction. I reported it to the company and used the proof of concept only with permission.",
      ],
    ],
    links: [{ href: "https://github.com/EazyReal/BulkMintNFTs", label: "github" }],
  },
  {
    id: "qiskit-alcom-provider",
    title: "Qiskit ALCom Provider",
    paragraphs: [
      [
        "We integrated a new quantum simulator to the Qiskit Aer library and won the Best Presentation Award of ",
        {
          href: "https://github.com/qiskit-community/qiskit-hackathon-taiwan-20/issues/17",
          text: "NTU-IBMQ 2020 QCamp",
        },
        ".",
      ],
    ],
    links: [{ href: "https://github.com/EazyReal/NTU-IBMQ-QCamp2020", label: "github" }],
  },
  {
    id: "eazynogo",
    title: "EazyNoGo",
    paragraphs: [
      [
        "I programmed a NoGo AI based on Monte Carlo Tree Search with Rapid Action Value Estimation in C++. This is the individual study project in the 2019 fall semester at ",
        { href: "https://cgilab.nctu.edu.tw/", text: "NCTU CGI lab" },
        " advised by Dr.I-Chen Wu.",
      ],
    ],
    links: [{ href: "https://github.com/EazyReal/EazyNoGo", label: "github" }],
  },
];

export const ossGroups = [
  {
    id: "areal",
    name: "AReaL",
    contributions: [
      {
        href: "https://github.com/areal-project/AReaL/pull/1412",
        title: "CISPO policy loss",
        description:
          "added the MiniMax-M1 CISPO clipped importance-sampling policy-gradient loss to AReaL's PPO path.",
      },
      {
        href: "https://github.com/areal-project/AReaL/pull/1429",
        title: "vLLM generation request parity",
        description:
          "forwarded frequency penalties and stop conditions through the vLLM generation backend.",
      },
      {
        href: "https://github.com/areal-project/AReaL/pull/1430",
        title: "Reward scoring failure guard",
        description:
          "guarded a CLEVR reward function against scoring failures instead of letting one bad sample break evaluation.",
      },
      {
        href: "https://github.com/areal-project/AReaL/pull/1436",
        title: "Robust free-port selection",
        description:
          "fixed free-port discovery so out-of-range exclusions do not block valid worker ports.",
      },
    ],
  },
  {
    id: "verl",
    name: "verl",
    contributions: [
      {
        href: "https://github.com/verl-project/verl/pull/6806",
        title: "Rollout importance-sampling metrics",
        description:
          "computed sequence-level high/low rollout importance-sampling fractions from raw weights instead of clamped weights.",
      },
    ],
  },
  {
    id: "vllm",
    name: "vLLM",
    contributions: [
      {
        href: "https://github.com/vllm-project/vllm/pull/46314",
        title: "seed_oss streaming parser support",
        description:
          "ported seed_oss to the streaming parser engine as a Qwen3 subclass for frontend parsing.",
      },
      {
        href: "https://github.com/vllm-project/vllm/pull/46525",
        title: "Anthropic empty-completion compatibility",
        description:
          "returned an explicit content block for empty Anthropic completions instead of an invalid response shape.",
      },
      {
        href: "https://github.com/vllm-project/vllm/pull/46308",
        title: "Non-ASCII tool-call argument emission",
        description:
          "kept non-ASCII tool-call arguments readable instead of escaping them as Unicode codepoints.",
      },
      {
        href: "https://github.com/vllm-project/vllm/pull/46313",
        title: "Matryoshka embedding dimension validation",
        description:
          "rejected oversized Matryoshka embedding dimensions instead of silently returning hidden-size vectors.",
      },
    ],
  },
  {
    id: "sglang",
    name: "SGLang",
    contributions: [
      {
        href: "https://github.com/sgl-project/sglang/pull/28802",
        title: "Stop-string precedence under speculative decoding",
        description:
          "fixed stop-string trimming when EOS and a stop string are accepted in the same decode step.",
      },
    ],
  },
  {
    id: "prime-rl",
    name: "Prime-RL",
    contributions: [
      {
        href: "https://github.com/PrimeIntellect-ai/prime-rl/pull/2844",
        title: "Gemma 4 VLM dispatch and softcapping",
        description:
          "registered Gemma 4 as a vision-language model and preserved nested logit softcapping during training.",
      },
    ],
  },
  {
    id: "slime",
    name: "slime",
    contributions: [
      {
        href: "https://github.com/THUDM/slime/pull/2135",
        title: "Gemma4 dense and MoE support",
        description:
          "added slime-native Gemma4 model, conversion, loss-mask, script, doc, and test support for dense and MoE checkpoints.",
      },
      {
        href: "https://github.com/THUDM/slime/pull/2134",
        title: "Empty colocated weight bucket handling",
        description:
          "fixed raw weight sync when uneven tensor chunks leave a tensor-parallel rank with no local Hugging Face tensors.",
      },
      {
        href: "https://github.com/THUDM/slime/pull/2067",
        title: "CISPO policy loss",
        description:
          "added the MiniMax-M1 CISPO clipped importance-sampling policy-gradient loss at slime's policy-loss seam, with tests for surrogate value and gradient routing.",
      },
      {
        href: "https://github.com/THUDM/slime/pull/2096",
        title: "Dr.GRPO docs reference cleanup",
        description: "removed a dangling custom-reducer example reference from the Dr.GRPO docs.",
      },
    ],
  },
  {
    id: "harbor",
    name: "Harbor",
    contributions: [
      {
        href: "https://github.com/harbor-framework/harbor/pull/1965",
        title: "dspy.RLM agent",
        description: "added a host-side agent with a sandbox tool bridge and deterministic tests.",
      },
      {
        href: "https://github.com/harbor-framework/harbor/pull/1966",
        title: "Scoped trial log streaming",
        description: "added structured live stdout/stderr callbacks for long-running trials.",
      },
      {
        href: "https://github.com/harbor-framework/harbor/pull/1968",
        title: "mini-swe-agent credential env handling",
        description: "fixed host-side credential and API-base resolution from configured agent env.",
      },
      {
        href: "https://github.com/harbor-framework/harbor/pull/1967",
        title: "Agent env propagation",
        description: "propagated configured agent environment variables through every agent load path.",
      },
      {
        href: "https://github.com/harbor-framework/harbor/pull/1969",
        title: "Sandbox env secret reuse",
        description: "reused environment secrets consistently across Modal sandbox operations.",
      },
      {
        href: "https://github.com/harbor-framework/harbor/pull/1039",
        title: "Agent install fix",
        description: "fixed install scripts when uv's env file is absent.",
      },
      {
        href: "https://github.com/harbor-framework/harbor/pull/1964",
        title: "Adapter docs fix",
        description: "aligned adapter README filenames with the validator contract.",
      },
    ],
  },
];
