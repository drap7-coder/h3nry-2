import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("ships the Biome Atlas Value Frontier experience", async () => {
  const source = await readFile(new URL("app/frontier-explorer.tsx", root), "utf8");
  assert.match(source, /Mine the market/);
  assert.match(source, /THE BLUE FRONTIER/);
  assert.match(source, /h3nry-watch-lab-logo\.png/);
  assert.match(source, /The Value Frontier/);
  assert.match(source, /type="range"/);
  assert.match(source, /accessible data table/);
  assert.match(source, /aria-live="polite"/);
});

test("has no disposable starter preview", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  const manifest = JSON.parse(await readFile(new URL("package.json", root), "utf8"));
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.equal(manifest.dependencies["react-loading-skeleton"], undefined);
});

test("separates the lab into focused product routes", async () => {
  const nav = await readFile(new URL("app/site-nav.tsx", root), "utf8");
  const home = await readFile(new URL("app/page.tsx", root), "utf8");
  const collection = await readFile(new URL("app/collection/collection-manager.tsx", root), "utf8");
  const compare = await readFile(new URL("app/compare/compare-tool.tsx", root), "utf8");
  assert.match(nav, /\/collection/);
  assert.match(nav, /\/compare/);
  assert.match(nav, /\/watches/);
  assert.match(nav, /\/value/);
  assert.match(home, /A lab, not a landing page/);
  assert.match(collection, /localStorage/);
  assert.match(compare, /Lab readout/);
});

test("uses real watch photography in the shared catalog", async () => {
  const data = await readFile(new URL("app/watch-data.ts", root), "utf8");
  assert.match(data, /rolex-gmt-pepsi\.jpg/);
  assert.match(data, /omega-speedmaster\.jpg/);
  assert.match(data, /tudor-bb58\.jpg/);
});
