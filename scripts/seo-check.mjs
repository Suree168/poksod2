import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const readUtf8 = (relativePath) => {
  const filePath = path.join(root, relativePath);
  return fs.readFileSync(filePath, "utf8");
};

const checks = [];

const addCheck = (name, pass, details = "") => {
  checks.push({ name, pass, details });
};

const containsAll = (text, tokens) => tokens.every((token) => text.includes(token));

const routePages = [
  { file: "src/pages/Index.tsx", path: "/" },
  { file: "src/pages/Pokdeng2Bai.tsx", path: "/pokdeng-2-bai" },
  { file: "src/pages/Promotions.tsx", path: "/promotions" },
  { file: "src/pages/Blog.tsx", path: "/blog" },
  { file: "src/pages/Reviews.tsx", path: "/reviews" },
  { file: "src/pages/About.tsx", path: "/about" },
];

try {
  const sitemap = readUtf8("public/sitemap.xml");
  const expectedSitemapUrls = [
    "https://www.poksod.com/",
    "https://www.poksod.com/pokdeng-2-bai",
    "https://www.poksod.com/promotions",
    "https://www.poksod.com/blog",
    "https://www.poksod.com/reviews",
    "https://www.poksod.com/about",
  ];

  addCheck(
    "Sitemap includes all key routes",
    containsAll(sitemap, expectedSitemapUrls),
    "Check public/sitemap.xml URLs"
  );
} catch (error) {
  addCheck("Sitemap readable", false, String(error));
}

try {
  const indexHtml = readUtf8("index.html");

  addCheck(
    "index.html has WebSite SearchAction",
    containsAll(indexHtml, ['"@type": "WebSite"', '"@type": "SearchAction"']),
    "Check WebSite/SearchAction JSON-LD"
  );

  addCheck(
    "index.html has Organization and FAQPage",
    containsAll(indexHtml, ['"@type": "Organization"', '"@type": "FAQPage"']),
    "Check structured data blocks"
  );
} catch (error) {
  addCheck("index.html readable", false, String(error));
}

for (const page of routePages) {
  try {
    const content = readUtf8(page.file);

    addCheck(
      `${page.file} uses usePageSeo with path ${page.path}`,
      content.includes("usePageSeo(") && content.includes(`path: "${page.path}"`),
      "Missing usePageSeo or wrong path"
    );

    addCheck(
      `${page.file} renders JsonLd`,
      content.includes("<JsonLd"),
      "Missing JsonLd component usage"
    );

    addCheck(
      `${page.file} includes WebPage schema builder`,
      content.includes("buildWebPageSchema"),
      "Missing buildWebPageSchema usage"
    );

    addCheck(
      `${page.file} includes Breadcrumb schema builder`,
      content.includes("buildBreadcrumbSchema"),
      "Missing buildBreadcrumbSchema usage"
    );
  } catch (error) {
    addCheck(`${page.file} readable`, false, String(error));
  }
}

const failed = checks.filter((item) => !item.pass);
const passed = checks.length - failed.length;

console.log(`\nSEO Check Results: ${passed}/${checks.length} passed\n`);

for (const item of checks) {
  const symbol = item.pass ? "PASS" : "FAIL";
  const line = `${symbol} ${item.name}`;
  if (item.pass) {
    console.log(line);
  } else {
    console.error(`${line}${item.details ? ` -> ${item.details}` : ""}`);
  }
}

if (failed.length > 0) {
  process.exitCode = 1;
}
