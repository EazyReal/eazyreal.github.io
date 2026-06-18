import type { Link, RichText } from "./siteContent";
import {
  links,
  vmaxHomepageSummary,
  vmaxLead,
  vmaxMetric,
  vmaxOss,
  vmaxSystem,
} from "./siteContent";

export type TimelineKind = "work" | "education";

export type TimelineImage = {
  src: string;
  alt: string;
};

export type TimelineItem = {
  id: string;
  kind: TimelineKind;
  title: string;
  organization: string;
  location: string;
  period: string;
  homepageSummary: string;
  shortLabel?: string;
  summary: RichText;
  details: RichText[];
  links?: Link[];
  image?: TimelineImage;
  initials?: string;
};

export const experienceTimeline: TimelineItem[] = [
  {
    id: "vmax-ai",
    kind: "work",
    title: "Founding Member of Technical Staff",
    organization: "Vmax AI",
    location: "San Francisco, CA",
    period: "Mar 2026 - Present",
    homepageSummary: vmaxHomepageSummary,
    summary: vmaxLead,
    details: [vmaxSystem, vmaxMetric, vmaxOss],
    links: [links.vmax, links.slime, links.harbor],
    image: {
      src: "/img/experience/vmax.png",
      alt: "Vmax AI logo",
    },
  },
  {
    id: "meta-mrs",
    kind: "work",
    title: "Research Engineer, MRS",
    organization: "Meta",
    location: "Sunnyvale, CA",
    period: "Feb 2025 - Mar 2026",
    shortLabel: "Meta",
    homepageSummary:
      "Meta Recommendation System; LLM and large-scale recommendation systems for ads.",
    summary: [
      "Worked on MRS (Meta Recommendation System), including LLMs for ads recommendation and large-scale user-ad interaction modeling.",
    ],
    details: [
      [
        "Built billion-parameter autoregressive models for user-ad interaction, improving normalized entropy by 0.07% and earning an org-wide EngEx shoutout as a 0-to-1 use of a new internal ML framework.",
      ],
      [
        "Built an evaluation pipeline for LLM-based CTR prediction, reducing iteration time from hours to minutes and improving AUC from 0.51 to 0.61.",
      ],
      [
        "Ranked as the #1 code contributor in an org of around 40 engineers as a new hire, then was promoted within 9 months.",
      ],
    ],
    image: {
      src: "/img/experience/meta.svg",
      alt: "Meta logo",
    },
  },
  {
    id: "tesla-autopilot",
    kind: "work",
    title: "Autopilot Software Engineering Intern",
    organization: "Tesla",
    location: "Palo Alto, CA",
    period: "May 2024 - Aug 2024",
    shortLabel: "Tesla Autopilot",
    homepageSummary:
      "Autopilot systems, build tooling, IPC interfaces, and open-source fixed-containers contribution.",
    summary: [
      "Worked on Autopilot systems infrastructure across build tooling, model-system interfaces, and C++ libraries.",
    ],
    details: [
      [
        "Built scripts to refactor internal dependencies and reduce related CI time by around 50%.",
      ],
      [
        "Built a high-performance C API for IPC that decouples ML models from Autopilot systems, plus supporting C++ reflection-library work.",
      ],
      [
        "Contributed to Tesla Autopilot's open-source fixed-containers library.",
      ],
    ],
    links: [
      {
        href: "https://github.com/teslamotors/fixed-containers/pull/147",
        label: "fixed-containers PR",
      },
    ],
    image: {
      src: "/img/experience/tesla.svg",
      alt: "Tesla logo",
    },
  },
  {
    id: "georgia-tech",
    kind: "education",
    title: "M.S. Computer Science",
    organization: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    period: "Aug 2023 - Dec 2024",
    shortLabel: "Georgia Tech",
    homepageSummary:
      "4.0 GPA; advanced ML, generative modeling, reinforcement learning, algorithms, and systems.",
    summary: [
      "4.0 GPA with coursework across advanced ML, generative modeling, reinforcement learning, algorithms, and systems.",
    ],
    details: [
      [
        "Teaching assistant for Blockchain and Cryptocurrencies and Machine Learning.",
      ],
      [
        "Coursework included Deep Reinforcement Learning, Deep Learning for Text, Advanced Algorithms and Uncertainty, Efficient ML, Programming Language Design, Brain-Inspired ML, and Information Security.",
      ],
    ],
    image: {
      src: "/img/experience/gatech.jpg",
      alt: "Georgia Tech logo",
    },
  },
  {
    id: "btq",
    kind: "work",
    title: "Research Engineer",
    organization: "BTQ",
    location: "Taipei, Taiwan",
    period: "Aug 2022 - Aug 2023",
    homepageSummary:
      "Post-quantum cryptography, signature aggregation, zkSNARK recursion, and protocol security.",
    summary: [
      "Worked on post-quantum cryptography, signature aggregation, zkSNARK recursion, and blockchain protocol security.",
    ],
    details: [
      [
        "Identified a critical vulnerability in a signature aggregation protocol and prevented a signature-forgery path.",
      ],
      [
        "Built a Rust signature aggregation protocol with around 400x verification speedup.",
      ],
      [
        "Implemented Falcon verifier logic as templated arithmetic graphs and recursively verified it with Plonky2.",
      ],
    ],
    links: [{ href: "https://www.btq.com/", label: "BTQ" }],
    image: {
      src: "/img/experience/btq.svg",
      alt: "BTQ logo",
    },
  },
  {
    id: "kronos-research",
    kind: "work",
    title: "Quantitative Research Intern",
    organization: "Kronos Research",
    location: "Taipei, Taiwan",
    period: "Jun 2022 - Aug 2022",
    shortLabel: "Kronos Research",
    homepageSummary:
      "Quant research; best intern assessment score from hundreds of applicants.",
    summary: [
      "Selected with the best intern assessment score from hundreds of applicants and worked on market microstructure research.",
    ],
    details: [
      [
        "Built order-tracking tooling to study execution slippage.",
      ],
      [
        "Developed an alpha signal that improved R2 by 42.4% when combined with existing signals.",
      ],
    ],
    links: [{ href: "https://kronosresearch.com/", label: "Kronos Research" }],
    image: {
      src: "/img/experience/kronos.png",
      alt: "Kronos Research logo",
    },
  },
  {
    id: "sudo-research-labs",
    kind: "work",
    title: "R&D Intern",
    organization: "Sudo Research Labs",
    location: "Taipei, Taiwan",
    period: "Mar 2022 - Jun 2022",
    homepageSummary:
      "Blockchain protocol research, DeFi risk review, consensus, L2, and cross-chain systems.",
    summary: [
      "Worked on blockchain protocol research across DeFi risk, consensus, L2, and cross-chain systems.",
    ],
    details: [
      [
        "Reviewed DeFi and protocol risks, helping prevent millions of dollars of potential investment losses.",
      ],
      [
        "Contributed open-source documentation to Arbitrum, Polygon Bor, and decentralized-thoughts.",
      ],
    ],
    initials: "SR",
  },
  {
    id: "nycu",
    kind: "education",
    title: "B.S. Computer Science and Applied Mathematics",
    organization: "National Yang Ming Chiao Tung University",
    location: "Hsinchu, Taiwan",
    period: "Sep 2018 - Jun 2021",
    shortLabel: "NYCU",
    homepageSummary:
      "CS and applied math; Presidential Award top 5%; A+ in proof-heavy theory courses.",
    summary: [
      "Studied computer science and applied mathematics at a top Taiwan CS program, with Presidential Award top-5% performance.",
    ],
    details: [
      [
        "A+ performance in theory-heavy courses including Advanced Algorithms, Advanced Linear Algebra, Quantum Information and Computation, and Theoretical Aspects of Modern Cryptography.",
      ],
    ],
    image: {
      src: "/img/experience/nycu.png",
      alt: "National Yang Ming Chiao Tung University logo",
    },
  },
  {
    id: "academia-sinica",
    kind: "work",
    title: "Research Intern",
    organization: "Institute of Information Science, Academia Sinica",
    location: "Taipei, Taiwan",
    period: "Jul 2020 - Sep 2020",
    homepageSummary:
      "GNN and cross-attention models for natural-language inference.",
    summary: [
      "Worked on graph neural networks and cross-attention models for natural-language inference.",
    ],
    details: [
      [
        "Represented dependency graphs as matching structure and implemented AllenNLP-compatible model components.",
      ],
    ],
    image: {
      src: "/img/experience/iis.jpg",
      alt: "Institute of Information Science, Academia Sinica logo",
    },
  },
];

export const workTimeline = experienceTimeline.filter((item) => item.kind === "work");

export const educationTimeline = experienceTimeline.filter((item) => item.kind === "education");

const getTimelineItem = (id: string) => {
  const item = experienceTimeline.find((timelineItem) => timelineItem.id === id);
  if (!item) {
    throw new Error(`Missing homepage institution timeline item: ${id}`);
  }
  return item;
};

const timelineTextLink = (id: string): RichText[number] => {
  const item = getTimelineItem(id);
  return {
    href: `${links.experience.href}#${item.id}`,
    text: item.shortLabel ?? item.organization,
  };
};

export const homepageAffiliationParagraph: RichText = [
  "Previously, I worked on core functions in leading technical spaces: ads recommendation at ",
  timelineTextLink("meta-mrs"),
  ", self-driving systems at ",
  timelineTextLink("tesla-autopilot"),
  ", and trading research at ",
  timelineTextLink("kronos-research"),
  ". I studied CS/math at ",
  timelineTextLink("georgia-tech"),
  " and ",
  timelineTextLink("nycu"),
  ".",
];
