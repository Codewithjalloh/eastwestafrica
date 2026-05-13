import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const UI = path.join(ROOT, "eastwest_africa_ui");

const routes = [
  {
    slug: "page",
    outDir: path.join(ROOT, "app"),
    outFile: "page.tsx",
    html: path.join(UI, "eastwest_africa_home", "code.html"),
  },
  {
    slug: "our-story",
    outDir: path.join(ROOT, "app", "our-story"),
    outFile: "page.tsx",
    html: path.join(UI, "eastwest_africa_our_story", "code.html"),
  },
  {
    slug: "investment-opportunities",
    outDir: path.join(ROOT, "app", "investment-opportunities"),
    outFile: "page.tsx",
    html: path.join(UI, "investment_opportunities", "code.html"),
  },
  {
    slug: "market-insights-intelligence",
    outDir: path.join(ROOT, "app", "market-insights-intelligence"),
    outFile: "page.tsx",
    html: path.join(UI, "market_insights_intelligence", "code.html"),
  },
  {
    slug: "strategic-partnerships",
    outDir: path.join(ROOT, "app", "strategic-partnerships"),
    outFile: "page.tsx",
    html: path.join(UI, "strategic_partnerships", "code.html"),
  },
  {
    slug: "events-networking-hub",
    outDir: path.join(ROOT, "app", "events-networking-hub"),
    outFile: "page.tsx",
    html: path.join(UI, "events_networking_hub", "code.html"),
  },
  {
    slug: "sector-analysis-mining-resources",
    outDir: path.join(ROOT, "app", "sector-analysis-mining-resources"),
    outFile: "page.tsx",
    html: path.join(UI, "sector_analysis_mining_resources", "code.html"),
  },
  {
    slug: "contact-support",
    outDir: path.join(ROOT, "app", "contact-support"),
    outFile: "page.tsx",
    html: path.join(UI, "contact_support", "code.html"),
  },
];

function extractBody(html) {
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!m) throw new Error("No <body> found");
  return m[1];
}

function htmlToJsxFragment(inner) {
  let s = inner;
  s = s.replace(/\bclass=/g, "className=");
  s = s.replace(/<!--([\s\S]*?)-->/g, (_, c) => `{/*${c.replace(/\/\*/g, "").replace(/\*\//g, "")}*/}`);
  s = s.replace(/<br\s*>/gi, "<br />");
  s = s.replace(/<br\/>/gi, "<br />");
  s = s.replace(/\sstyle=""/g, "");
  s = s.replace(/<img([^>]*?)\s*\/>/gi, "<img$1 />");
  s = s.replace(/<img([^>]*?)>/gi, (full, attrs) => {
    if (/\/\s*>$/.test(full)) return full;
    return `<img${attrs} />`;
  });
  s = s.replace(/\sdata-alt="[^"]*"/g, "");
  s = s.replace(/\sdata-location="[^"]*"/g, "");
  s = s.replace(/\brows="(\d+)"/g, "rows={$1}");
  s = s.replace(
    /style="font-variation-settings: 'FILL' 1;"/g,
    `style={{ fontVariationSettings: "'FILL' 1" }}`,
  );

  const hrefReplacements = [
    ['href="#">About Us</a>', 'href="/our-story">About Us</a>'],
    ['href="#">Contact Support</a>', 'href="/contact-support">Contact Support</a>'],
    ['href="#">Opportunities</a>', 'href="/investment-opportunities">Opportunities</a>'],
    ['href="#">Insights</a>', 'href="/market-insights-intelligence">Insights</a>'],
    ['href="#">Services</a>', 'href="/strategic-partnerships">Services</a>'],
    ['href="#">Events</a>', 'href="/events-networking-hub">Events</a>'],
    ['href="#">Sectors</a>', 'href="/sector-analysis-mining-resources">Sectors</a>'],
    ['href="#">About</a>', 'href="/our-story">About</a>'],
    ['href="#">VIEW ALL SECTORS', 'href="/sector-analysis-mining-resources">VIEW ALL SECTORS'],
  ];
  for (const [from, to] of hrefReplacements) {
    s = s.split(from).join(to);
  }

  s = s.replace(
    /(<(?:div|span|nav)[^>]*font-headline-sm[^>]*font-bold[^>]*(?:text-primary[^>]*|text-primary dark:text-primary-fixed[^>]*)>)\s*EastWest Africa\s*(<\/(?:div|span)>)/g,
    '<a href="/" className="contents"><span className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">EastWest Africa</span></a>',
  );
  s = s.replace(
    /(<span[^>]*font-headline-sm[^>]*font-bold[^>]*text-primary dark:text-primary-fixed[^>]*>)\s*EastWest Africa\s*(<\/span>)/g,
    '<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">EastWest Africa</a>',
  );

  s = s.replace(
    /<a([^>]*className="[^"]*") href="#">VIEW ALL SECTORS <span/g,
    '<a$1 href="/sector-analysis-mining-resources">VIEW ALL SECTORS <span',
  );

  return s.trim();
}

for (const r of routes) {
  const raw = fs.readFileSync(r.html, "utf8");
  const body = extractBody(raw);
  const jsx = htmlToJsxFragment(body);
  const out = `export default function Page() {
  return (
<>
${jsx}
</>
  );
}
`;
  fs.mkdirSync(r.outDir, { recursive: true });
  fs.writeFileSync(path.join(r.outDir, r.outFile), out, "utf8");
  console.log("wrote", path.relative(ROOT, path.join(r.outDir, r.outFile)));
}
