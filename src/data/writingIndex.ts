import { externalWritingItems } from "./siteContent";

type MarkdownFrontmatter = {
  title?: string;
  description?: string;
  tags?: string[];
  kind?: string;
  section?: string;
  lastUpdated?: string;
  featured?: boolean;
};

type MarkdownModule = {
  frontmatter?: MarkdownFrontmatter;
  url?: string;
};

export type WritingTag = {
  label: string;
  slug: string;
  href: string;
};

export type WritingEntry = {
  href: string;
  title: string;
  description?: string;
  kind: string;
  section: string;
  sectionSlug: string;
  tags: WritingTag[];
  lastUpdated?: string;
  featured: boolean;
  source: "internal" | "external";
};

export type WritingFacet = {
  label: string;
  slug: string;
  href: string;
  count: number;
  entries: WritingEntry[];
};

const internalPageModules = import.meta.glob("../pages/**/*.md", {
  eager: true,
}) as Record<string, MarkdownModule>;

const excludedRoutes = new Set(["/tags/"]);
const preferredSectionOrder = [
  "genai",
  "nlp",
  "quantum",
  "math",
  "algorithm",
  "blockchain",
];

const kindTags = [
  "essay",
  "tutorial",
  "coursework",
  "report",
  "review",
  "talk",
  "research",
  "guide",
  "note",
];

const tagAliases = new Map([
  ["algorithms", "algorithm"],
  ["data-structures", "data-structure"],
  ["quantum-computing", "quantum"],
]);

const tagLabels = new Map([
  ["algorithm", "Algorithms"],
  ["blockchain", "Blockchain"],
  ["cryptography", "Cryptography"],
  ["data-structure", "Data Structures"],
  ["genai", "GenAI"],
  ["llm", "LLM"],
  ["math", "Math"],
  ["nlp", "NLP"],
  ["quantum", "Quantum"],
  ["rl", "RL"],
]);

const nonTopicTagSlugs = new Set([
  ...kindTags,
  "2020",
  "2021",
  "nycu",
  "nthu",
  "ntu",
  "pcca",
  "cpsite",
]);

const primaryTopicTagOrder = [
  "genai",
  "llm",
  "rl",
  "nlp",
  "quantum",
  "math",
  "algorithm",
  "cryptography",
  "blockchain",
  "data-structure",
  "linear-algebra",
];

export const slugify = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const tagHref = (tag: string) => `/writing/tags/${slugify(tag)}/`;

const canonicalTag = (tag: string) => {
  const slug = tagAliases.get(slugify(tag)) ?? slugify(tag);

  return {
    label: tagLabels.get(slug) ?? tag.trim(),
    slug,
    href: `/writing/tags/${slug}/`,
  };
};

const uniqueBySlug = (tags: string[]) => {
  const bySlug = new Map<string, WritingTag>();

  tags
    .map((tag) => canonicalTag(tag.trim()))
    .filter(Boolean)
    .forEach((tag) => {
      if (!tag.slug || bySlug.has(tag.slug)) {
        return;
      }

      bySlug.set(tag.slug, tag);
    });

  return [...bySlug.values()];
};

const pathToRoute = (path: string) => {
  const route = path
    .replace("../pages/", "")
    .replace(/\.mdx?$/, "")
    .replace(/\/index$/, "");

  return `/${route}/`;
};

const pathToSection = (path: string, frontmatter: MarkdownFrontmatter) => {
  if (frontmatter.section) {
    return frontmatter.section;
  }

  const relativePath = path.replace("../pages/", "");
  const [section] = relativePath.split("/");

  return relativePath.includes("/") ? section : "Writing";
};

const inferKind = (frontmatter: MarkdownFrontmatter) => {
  if (frontmatter.kind) {
    return frontmatter.kind;
  }

  const frontmatterTags = frontmatter.tags ?? [];
  const tagKinds = frontmatterTags.map((tag) => tag.toLowerCase());

  return kindTags.find((kind) => tagKinds.includes(kind)) ?? "note";
};

const compareLastUpdated = (left?: string, right?: string) => {
  if (!left && !right) {
    return 0;
  }
  if (!left) {
    return 1;
  }
  if (!right) {
    return -1;
  }
  return right.localeCompare(left);
};

const sortEntries = (entries: WritingEntry[]) =>
  [...entries].sort((left, right) => {
    if (left.featured !== right.featured) {
      return left.featured ? -1 : 1;
    }

    const dateSort = compareLastUpdated(left.lastUpdated, right.lastUpdated);
    if (dateSort !== 0) {
      return dateSort;
    }

    return left.title.localeCompare(right.title);
  });

const internalWritingEntries = Object.entries(internalPageModules)
  .map(([path, mod]) => {
    const frontmatter = mod.frontmatter ?? {};
    const href = mod.url ?? pathToRoute(path);

    if (excludedRoutes.has(href)) {
      return null;
    }

    const section = pathToSection(path, frontmatter);
    const rawTags = [...(frontmatter.tags ?? [])];

    if (!rawTags.some((tag) => slugify(tag) === slugify(section))) {
      rawTags.push(section);
    }

    return {
      href,
      title: frontmatter.title ?? path.replace("../pages/", "").replace(/\.md$/, ""),
      description: frontmatter.description,
      kind: inferKind(frontmatter),
      section,
      sectionSlug: slugify(section),
      tags: uniqueBySlug(rawTags),
      lastUpdated: frontmatter.lastUpdated,
      featured: Boolean(frontmatter.featured),
      source: "internal",
    } satisfies WritingEntry;
  })
  .filter((entry): entry is WritingEntry => Boolean(entry));

export const externalWritingEntries: WritingEntry[] = externalWritingItems.map(
  (item) => ({
    href: item.href,
    title: item.label,
    description: item.description,
    kind: item.kind,
    section: "External",
    sectionSlug: "external",
    tags: uniqueBySlug(item.tags),
    featured: false,
    source: "external",
  }),
);

export const writingEntries = sortEntries([
  ...internalWritingEntries,
  ...externalWritingEntries,
]);

export const internalWriting = sortEntries(internalWritingEntries);

export const areaFacets: WritingFacet[] = [...new Set(internalWriting.map((entry) => entry.section))]
  .map((section) => {
    const entries = internalWriting.filter((entry) => entry.section === section);

    return {
      label: section,
      slug: slugify(section),
      href: `/writing/${slugify(section)}/`,
      count: entries.length,
      entries,
    };
  })
  .sort((left, right) => {
    const leftOrder = preferredSectionOrder.indexOf(left.slug);
    const rightOrder = preferredSectionOrder.indexOf(right.slug);

    if (leftOrder !== -1 || rightOrder !== -1) {
      return (leftOrder === -1 ? Number.POSITIVE_INFINITY : leftOrder) -
        (rightOrder === -1 ? Number.POSITIVE_INFINITY : rightOrder);
    }

    return left.label.localeCompare(right.label);
  });

export const tagFacets: WritingFacet[] = [
  ...new Map(
    writingEntries.flatMap((entry) =>
      entry.tags.map((tag) => [
        tag.slug,
        {
          label: tag.label,
          slug: tag.slug,
          href: tag.href,
          count: 0,
          entries: [],
        } satisfies WritingFacet,
      ]),
    ),
  ).values(),
]
  .map((tag) => {
    const entries = writingEntries.filter((entry) =>
      entry.tags.some((entryTag) => entryTag.slug === tag.slug),
    );

    return {
      ...tag,
      count: entries.length,
      entries,
    };
  })
  .sort((left, right) => {
    if (left.count !== right.count) {
      return right.count - left.count;
    }

    return left.label.localeCompare(right.label);
  });

export const isTopicTag = (tag: WritingTag | WritingFacet) =>
  !nonTopicTagSlugs.has(tag.slug);

export const topicTagFacets = tagFacets.filter(isTopicTag);

export const primaryTagFacets = primaryTopicTagOrder
  .map((slug) => tagFacets.find((tag) => tag.slug === slug))
  .filter((tag): tag is WritingFacet => Boolean(tag));
