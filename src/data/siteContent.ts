// Shared source of truth for homepage, projects, open source, and site links.
export type RichTextPart =
  | string
  | { href: string; text: string }
  | { strong: string };

export type RichText = RichTextPart[];

type Link = {
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
  latestContentUpdate: "2026-06-18",
  name: "Maxwill Lin",
  technicalDescription:
    "Technical writing, notes, and project documentation by Maxwill Lin.",
};

const pageHrefs = {
  coursework: "/writing/coursework/",
  home: "/",
  oss: "/oss/",
  projects: "/projects/",
  writing: "/writing/",
  writingTags: "/writing/tags/",
};

export const links = {
  home: { href: pageHrefs.home, label: "Home" },
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
  x: { href: "https://twitter.com/tensorfi", label: "X" },
  vmax: { href: "https://vmax.ai/", label: "Vmax" },
  slime: { href: `${pageHrefs.oss}#slime`, label: "slime" },
  harbor: { href: `${pageHrefs.oss}#harbor`, label: "Harbor" },
};

export const pageMeta = {
  coursework: {
    title: links.coursework.label,
    lastUpdated: siteMeta.latestContentUpdate,
    tags: ["writing", "coursework"],
  },
  home: {
    title: siteMeta.name,
    heading: false,
    lastUpdated: siteMeta.latestContentUpdate,
    tags: ["home"],
  },
  oss: {
    title: "Open Source Contributions",
    lastUpdated: siteMeta.latestContentUpdate,
    tags: ["engineering", "oss"],
  },
  projects: {
    title: links.projects.label,
    lastUpdated: siteMeta.latestContentUpdate,
    tags: ["engineering"],
  },
  writing: {
    title: links.writing.label,
    lastUpdated: siteMeta.latestContentUpdate,
    tags: ["writing"],
  },
  writingTags: {
    title: "Writing Tags",
    heading: links.writingTags.label,
    lastUpdated: siteMeta.latestContentUpdate,
    tags: ["writing", "tags"],
  },
};

export const siteNavLinks = [links.home, links.projects, links.oss, links.writing];

export const socialLinks = [links.github, links.linkedin, links.resume, links.x];

export const profile = {
  name: siteMeta.name,
  photo: {
    src: "/img/profile.jpg",
    alt: siteMeta.name,
  },
  education: [
    {
      degree: "M.S. Computer Science",
      school: "Georgia Institute of Technology",
      note: "Algorithms & Generative ML",
    },
    {
      degree: "B.S. Computer Science & Applied Mathematics",
      school: "National Yang Ming Chiao Tung University",
      note: "Theoretical CS & Mathematics (Top-2 CS program in Taiwan)",
    },
  ],
  web3Addresses: [
    "0xb1B6356EA9E2f3Bf9867d6Ac1c1Bfd2cB1553Abb",
    "ytlin.eth",
    "maxwill.sol",
  ],
};

const vmaxLead: RichText = [
  "I am the first technical hire at ",
  { href: links.vmax.href, text: links.vmax.label },
  ", where we are building automation for RL, starting from RL environments.",
];

const vmaxSystem: RichText = [
  "I designed and built the core training system end-to-end: configuration system that makes experiments agent legible and reproducible, RL infrastructure orchestrating hundreds of GPUs, self-improving software-engineering task generators, and a rollout framework running agents in Harbor tasks on thousands of concurrent sandboxes.",
];

const vmaxOss: RichText = [
  "I am a contributor to ",
  { href: links.slime.href, text: links.slime.label },
  " and ",
  { href: links.harbor.href, text: links.harbor.label },
  ", covering RL training logic, agent integrations, and sandbox runtime fixes.",
];

const vmaxMetric: RichText = [
  "The system improved an open-source SWE-bench Pro base model by ",
  { strong: "+50% relative" },
  " under a constrained context window using synthetic tasks.",
];

export const currentWork = {
  heading: "Current Work",
  paragraphs: [vmaxLead, vmaxSystem, vmaxOss],
};

export const professionalRoles = [
  "Vmax - RL infrastructure and self-improving task generation",
  "Meta - MRS (Meta Recommendation System)",
  "Tesla Autopilot - Autopilot systems",
  "BTQ - Post Quantum Cryptography & Blockchain protocols",
  "Kronos Research - Quantitative research",
];

export const facts: RichText[] = [
  [
    "Top ",
    { strong: "0.56%" },
    " of a ",
    { strong: "96,000+" },
    " registrant field in ",
    { strong: "Google Code Jam 2020" },
  ],
  [
    "Won ",
    { strong: "~USD 9k" },
    " prize in ",
    { strong: "ETHGlobal Paris" },
    " (1,400 participants, 321 projects)",
  ],
  [
    "Enjoyed challenging myself with theoretical CS/math courses, including quantum computation, quantum machine learning, advanced algorithms, intractable problems, advanced linear algebra, and algebra.",
  ],
];

export const personal = {
  origin: "I grew up in Taipei, Taiwan (Mandarin name: 林彥彤 / Yan-Tong Lin).",
  hobbies: [
    "Poker",
    "Competitive multiplayer games",
    "Health & fitness",
    "Guitar & piano",
  ],
  hobbyLinks: [
    {
      href: "https://youtu.be/XmpmadFYGOk",
      label: 'My "Fight" acoustic guitar cover',
    },
    {
      href: "https://youtu.be/MSYaon4zNsc?si=ac7TzA_bLDmVUMfR",
      label: "Hosted by Antalpha Hacker House during ETH CC in Paris",
    },
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
    id: "rl-infrastructure-and-self-improving-task-generation",
    title: "RL infrastructure and self-improving task generation",
    paragraphs: [
      vmaxLead,
      vmaxSystem,
      vmaxMetric,
      [
        "I also have merged PRs in ",
        { href: links.oss.href, text: "slime and Harbor" },
        ", the open-source systems behind this work.",
      ],
    ],
  },
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
    id: "slime",
    name: "slime",
    contributions: [
      {
        href: "https://github.com/THUDM/slime/pull/2067",
        title: "CISPO advantage estimator",
        description:
          "added the MiniMax-M1 CISPO estimator at slime's policy-loss seam, with tests for surrogate value and gradient routing.",
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
