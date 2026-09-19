import assert from "node:assert/strict";
import http from "node:http";
import https from "node:https";

const base = process.argv[2] || "http://localhost:3000";
const canonicalOrigin = "https://golddigi.com";
const sitemapResponse = await fetch(`${base}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert(urls.length >= 5, "Expected the core pages and Bhiwadi page");
assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap URLs");
assert(!urls.some((url) => url.includes("/admin")));
const titles = new Set();

for (const url of urls) {
  assert.equal(new URL(url).origin, canonicalOrigin);
  const path = new URL(url).pathname;
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: one H1`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert(canonical, `${path}: canonical exists`);
  assert.equal(new URL(canonical).href, new URL(url).href, `${path}: canonical`);
  assert(!/name="robots" content="[^"]*noindex/.test(html), `${path}: indexable`);
  assert(/name="description" content="[^"]+"/.test(html), `${path}: description`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title && !titles.has(title), `${path}: unique title`);
  titles.add(title);
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)];
  assert.equal(scripts.length, 1, `${path}: JSON-LD`);
  const graph = JSON.parse(scripts[0][1])["@graph"];
  assert(graph.some((item) => item["@type"] === "Organization"));
  if (["/websites", "/websites/bhiwadi", "/google-business-profile", "/ai-automations"].includes(path)) {
    assert(graph.some((item) => item["@type"] === "Service"));
  }
  if (path === "/ai-automations") {
    for (const phrase of ["A new message in Gmail", "n8n collects the details", "Reach opted-in customers"]) {
      assert(html.includes(phrase), `Workflow missing from initial HTML: ${phrase}`);
    }
  }
  console.log(`PASS ${path}: rendered content, metadata and structured data`);
}

const admin = await (await fetch(`${base}/admin`)).text();
assert(/name="robots" content="noindex, nofollow"/.test(admin));
assert.equal((await fetch(`${base}/seo-check-missing-page`)).status, 404);
const robots = await (await fetch(`${base}/robots.txt`)).text();
assert(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));

// Native HTTP lets the local server see the production Host header.
const target = new URL("/websites/bhiwadi?source=test", base);
const transport = target.protocol === "https:" ? https : http;
await new Promise((resolve, reject) => {
  const request = transport.get(target, { headers: { Host: "www.golddigi.com" } }, (response) => {
    response.resume();
    try {
      assert.equal(response.statusCode, 308);
      assert.equal(response.headers.location, `${canonicalOrigin}/websites/bhiwadi?source=test`);
      resolve();
    } catch (error) { reject(error); }
  });
  request.on("error", reject);
  request.setTimeout(10000, () => request.destroy(new Error("Redirect check timed out")));
});
console.log("PASS sitemap, robots, admin noindex, missing-page 404 and canonical host redirect");
