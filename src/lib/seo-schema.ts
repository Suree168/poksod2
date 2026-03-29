const SITE_URL = "https://www.poksod.com";

type BreadcrumbInput = {
  name: string;
  path: string;
};

const normalizePath = (path: string) => {
  if (!path.startsWith("/")) {
    return `/${path}`;
  }
  return path;
};

export const toAbsoluteUrl = (path: string) => {
  if (path === "/") {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${normalizePath(path)}`;
};

export const buildBreadcrumbSchema = (items: BreadcrumbInput[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path),
  })),
});

export const buildWebPageSchema = ({
  name,
  path,
  description,
}: {
  name: string;
  path: string;
  description?: string;
}) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url: toAbsoluteUrl(path),
    inLanguage: "th-TH",
  };

  if (description) {
    schema.description = description;
  }

  return schema;
};
