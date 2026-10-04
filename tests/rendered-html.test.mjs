import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("ships the Biome Atlas Value Frontier experience", async () => {
  const source = await readFile(new URL("app/frontier-explorer.tsx", root), "utf8");
  assert.match(source, /Ownership · Market · Alternatives · Value/);
  assert.match(source, /className="red-three">3/);
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
