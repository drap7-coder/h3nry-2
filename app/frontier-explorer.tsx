"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Watch = {
  id: string;
  maker: string;
  model: string;
  category: "Dive" | "Field" | "Dress" | "Chronograph";
  price: number;
  quality: number;
  value: number;
  x: number;
  owned?: boolean;
  movement: string;
  caseSize: string;
  reserve: string;
  confidence: string;
  note: string;
  traits: string[];
};

const watches: Watch[] = [
  { id: "cw", maker: "Christopher Ward", model: "The Twelve", category: "Dress", price: 1295, quality: 82, value: 94, x: 13, owned: true, movement: "Sellita SW200-1", caseSize: "40 mm", reserve: "38 hours", confidence: "High", note: "Integrated-bracelet finishing that punches far above its market tier.", traits: ["Finishing", "Bracelet", "Architecture"] },
  { id: "prx", maker: "Tissot", model: "PRX Powermatic 80", category: "Dress", price: 775, quality: 69, value: 91, x: 7, movement: "Powermatic 80", caseSize: "40 mm", reserve: "80 hours", confidence: "High", note: "A democratic entry point to sharp, integrated sports-watch design.", traits: ["Accessible", "Power reserve", "Design"] },
  { id: "bb58", maker: "Tudor", model: "Black Bay 58", category: "Dive", price: 4100, quality: 88, value: 87, x: 39, owned: true, movement: "MT5402", caseSize: "39 mm", reserve: "70 hours", confidence: "High", note: "Balanced proportions, in-house caliber and unusually resilient secondary demand.", traits: ["Proportions", "Caliber", "Liquidity"] },
  { id: "zulu", maker: "Longines", model: "Spirit Zulu Time", category: "Field", price: 3150, quality: 83, value: 88, x: 32, movement: "L844.4", caseSize: "39 mm", reserve: "72 hours", confidence: "Medium", note: "A true travel complication with chronometer credentials and strong detailing.", traits: ["GMT", "Chronometer", "Dial"] },
  { id: "speedy", maker: "Omega", model: "Speedmaster Moonwatch", category: "Chronograph", price: 7000, quality: 93, value: 84, x: 58, owned: true, movement: "3861 Co-Axial", caseSize: "42 mm", reserve: "50 hours", confidence: "High", note: "A benchmark chronograph whose story, serviceability and design remain unusually durable.", traits: ["Heritage", "Movement", "Icon"] },
  { id: "santos", maker: "Cartier", model: "Santos de Cartier", category: "Dress", price: 7750, quality: 91, value: 77, x: 62, movement: "1847 MC", caseSize: "39.8 mm", reserve: "42 hours", confidence: "High", note: "A rare design icon that moves fluently between formal and everyday wear.", traits: ["Design", "Versatility", "Heritage"] },
  { id: "snowflake", maker: "Grand Seiko", model: "Snowflake", category: "Dress", price: 6600, quality: 95, value: 86, x: 54, movement: "9R65 Spring Drive", caseSize: "41 mm", reserve: "72 hours", confidence: "High", note: "Exceptional dial craft and finishing anchored by a singular movement technology.", traits: ["Dial craft", "Spring Drive", "Finishing"] },
  { id: "zenith", maker: "Zenith", model: "Chronomaster Sport", category: "Chronograph", price: 11600, quality: 96, value: 73, x: 75, movement: "El Primero 3600", caseSize: "41 mm", reserve: "60 hours", confidence: "Medium", note: "High-frequency mechanical theater with genuine manufacture credibility.", traits: ["High beat", "Chronograph", "Manufacture"] },
  { id: "gmt", maker: "Rolex", model: "GMT-Master II", category: "Field", price: 11100, quality: 97, value: 70, x: 73, movement: "3285", caseSize: "40 mm", reserve: "70 hours", confidence: "High", note: "Peerless liquidity and recognition, though the market premium compresses pure value.", traits: ["Liquidity", "GMT", "Recognition"] },
  { id: "prospex", maker: "Seiko", model: "Prospex SPB143", category: "Dive", price: 1200, quality: 75, value: 89, x: 12, movement: "6R35", caseSize: "40.5 mm", reserve: "70 hours", confidence: "Medium", note: "A character-rich modern diver with a direct line to Seiko's historic language.", traits: ["Tool watch", "Heritage", "Wearability"] },
];

const categories = ["All", "Dive", "Field", "Dress", "Chronograph"] as const;

function money(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export function FrontierExplorer() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [maxPrice, setMaxPrice] = useState(12000);
  const [ownedOnly, setOwnedOnly] = useState(false);
  const [selectedId, setSelectedId] = useState("cw");
  const [tableOpen, setTableOpen] = useState(false);
  const [savedIds, setSavedIds] = useState<Set<string>>(() => new Set());

  const visible = useMemo(() => watches.filter((watch) =>
    (category === "All" || watch.category === category) && watch.price <= maxPrice && (!ownedOnly || watch.owned)
  ), [category, maxPrice, ownedOnly]);

  const selected = visible.find((watch) => watch.id === selectedId) ?? visible[0] ?? watches[0];
  const portfolio = watches.filter((watch) => watch.owned);
  const portfolioValue = portfolio.reduce((total, watch) => total + watch.price, 0);

  return (
    <main>
      <section className="atlas-hero" id="top">
        <div className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">The modern watch field guide / Signal 2.0</p>
            <h1>Mine the market.<br /><em>Find the frontier.</em></h1>
            <p className="lede">Explore where enduring quality meets real-world value. Every watch is mapped from movement, finishing, heritage, scarcity and verified market signals.</p>
            <div className="hero-actions"><a className="primary-action" href="#frontier">Explore the frontier <span aria-hidden="true">↘</span></a><span className="live-signal"><i /> Atlas live</span></div>
          </div>
          <div className="hero-artifact" aria-label="H3nry blue block-built dive watch">
            <div className="artifact-grid" aria-hidden="true" />
            <div className="artifact-cube cube-one" aria-hidden="true" /><div className="artifact-cube cube-two" aria-hidden="true" /><div className="artifact-cube cube-three" aria-hidden="true" />
            <div className="artifact-image"><Image src="/h3nry-watch-lab-logo.png" width={1254} height={1254} priority alt="Blue block-built H3nry dive watch surrounded by floating cubes" /></div>
            <div className="artifact-label"><span>Field object / 001</span><strong>THE BLUE FRONTIER</strong></div>
            <div className="artifact-coordinates">40.7128° N<br />74.0060° W</div>
          </div>
        </div>
      </section>

      <section className="portfolio-strip" aria-label="Portfolio summary">
        <div className="shell stat-grid">
          <div><span>Portfolio signal</span><strong>STRONG</strong></div>
          <div><span>Tracked value</span><strong>{money(portfolioValue)}</strong></div>
          <div><span>Owned pieces</span><strong>{portfolio.length.toString().padStart(2, "0")}</strong></div>
          <div><span>Best value score</span><strong>{Math.max(...portfolio.map((w) => w.value))}/100</strong></div>
        </div>
      </section>

      <section id="frontier" className="frontier-section">
        <div className="shell section-heading"><div><p className="eyebrow">Live discovery map / 01</p><h2>The Value Frontier</h2></div><p>Quality climbs upward. Price moves east. The most compelling discoveries sit above the frontier line.</p></div>
        <div className="filter-bar">
          <div className="shell filters">
            <fieldset><legend>Terrain</legend><div className="segment-control">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</div></fieldset>
            <label className="price-control"><span>Ceiling <b>{money(maxPrice)}</b></span><input type="range" min="1000" max="12000" step="500" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} /></label>
            <label className="owned-toggle"><input type="checkbox" checked={ownedOnly} onChange={(event) => setOwnedOnly(event.target.checked)} /><span aria-hidden="true" /> Owned only</label>
          </div>
        </div>

        <div className="shell workspace">
          <div className="plot-card">
            <div className="plot-meta"><span>QUALITY SCORE ↑</span><span>{visible.length} SIGNALS FOUND</span></div>
            <div className="plot" role="group" aria-label="Interactive value frontier chart">
              <div className="zone zone-value"><span>HIGH VALUE BIOME</span></div><div className="zone zone-prestige"><span>PRESTIGE RIDGE</span></div>
              <div className="frontier-line"><span>VALUE FRONTIER</span></div>
              {[20,40,60,80].map((n) => <span className="y-label" key={n} style={{ bottom: `${n}%` }}>{n}</span>)}
              {visible.map((watch) => <button key={watch.id} className={`plot-point ${selected.id === watch.id ? "selected" : ""} ${watch.owned ? "owned" : ""}`} style={{ left: `${watch.x}%`, bottom: `${watch.quality - 28}%` }} onClick={() => setSelectedId(watch.id)} aria-label={`Select ${watch.maker} ${watch.model}, quality ${watch.quality}, price ${money(watch.price)}`}><span /></button>)}
              {visible.length === 0 ? <p className="empty-state">No signals in this terrain. Raise the ceiling or broaden the filter.</p> : null}
              <div className="x-axis"><span>$1K</span><span>$4K</span><span>$8K</span><span>$12K+</span></div>
            </div>
            <button className="table-toggle" onClick={() => setTableOpen(!tableOpen)} aria-expanded={tableOpen}>{tableOpen ? "Hide" : "Show"} accessible data table <span aria-hidden="true">{tableOpen ? "−" : "+"}</span></button>
            {tableOpen ? <div className="table-wrap"><table><caption>Visible Value Frontier watches</caption><thead><tr><th>Watch</th><th>Category</th><th>Price</th><th>Quality</th><th>Value</th></tr></thead><tbody>{visible.map((watch) => <tr key={watch.id}><td>{watch.maker} {watch.model}</td><td>{watch.category}</td><td>{money(watch.price)}</td><td>{watch.quality}</td><td>{watch.value}</td></tr>)}</tbody></table></div> : null}
          </div>

          <aside className="field-notes" aria-live="polite">
            <div className="note-top"><p>Field notes / selected</p><span className="diamond" aria-hidden="true" /></div>
            <p className="watch-maker">{selected.maker}</p><h3>{selected.model}</h3><p className="watch-note">{selected.note}</p>
            <div className="score-block"><div><span>Value signal</span><strong>{selected.value}</strong><small>/100</small></div><div className="signal-bars" aria-label={`Value score ${selected.value} out of 100`}>{[1,2,3,4,5].map((n) => <i key={n} className={n <= Math.round(selected.value / 20) ? "filled" : ""} />)}</div></div>
            <dl><div><dt>Market price</dt><dd>{money(selected.price)}</dd></div><div><dt>Movement</dt><dd>{selected.movement}</dd></div><div><dt>Case</dt><dd>{selected.caseSize}</dd></div><div><dt>Reserve</dt><dd>{selected.reserve}</dd></div><div><dt>Signal confidence</dt><dd>{selected.confidence}</dd></div></dl>
            <div className="traits">{selected.traits.map((trait) => <span key={trait}>{trait}</span>)}</div>
            <button className="save-button" aria-pressed={savedIds.has(selected.id)} onClick={() => setSavedIds((current) => { const next = new Set(current); if (next.has(selected.id)) next.delete(selected.id); else next.add(selected.id); return next; })}>{savedIds.has(selected.id) ? "Saved to shortlist" : "Save to shortlist"} <span aria-hidden="true">{savedIds.has(selected.id) ? "✓" : "＋"}</span></button>
          </aside>
        </div>
      </section>

      <section id="shortlist" className="shortlist shell">
        <div className="section-heading"><div><p className="eyebrow">Promising ground / 02</p><h2>Shortlist discoveries</h2></div><p>Four places where the signal is especially clear right now.</p></div>
        <div className="watch-grid">{watches.slice(0,4).map((watch, index) => <button className="watch-card" key={watch.id} onClick={() => { setSelectedId(watch.id); document.getElementById("frontier")?.scrollIntoView({ behavior: "smooth" }); }}><span className="card-index">0{index + 1}</span><span className={`watch-glyph glyph-${index + 1}`} aria-hidden="true"><i /></span><span className="card-maker">{watch.maker}</span><strong>{watch.model}</strong><span className="card-bottom"><span>{money(watch.price)}</span><span>VALUE {watch.value}</span></span></button>)}</div>
      </section>

      <section id="method" className="method"><div className="shell method-grid"><div><p className="eyebrow light">How the map is made / 03</p><h2>Signal, not hype.</h2></div><div className="method-steps"><article><span>01</span><h3>Measure the object</h3><p>Movement, construction, finishing and functional integrity establish the quality baseline.</p></article><article><span>02</span><h3>Read the market</h3><p>Observed prices, depth, volatility and service risk ground the score in reality.</p></article><article><span>03</span><h3>Map the frontier</h3><p>We surface the pieces delivering the most enduring substance per dollar.</p></article></div></div></section>

    </main>
  );
}
