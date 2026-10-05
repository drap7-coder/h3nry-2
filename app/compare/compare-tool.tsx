"use client";

import Image from "next/image";
import { useState } from "react";
import { catalog, formatMoney } from "../watch-data";

const metrics = [["Quality","quality"],["Value","value"],["Movement","movement"],["Finishing","finishing"],["Heritage","heritage"],["Liquidity","liquidity"]] as const;

export function CompareTool() {
  const [leftId,setLeftId] = useState(catalog[2].id); const [rightId,setRightId] = useState(catalog[3].id);
  const left = catalog.find((watch) => watch.id === leftId)!; const right = catalog.find((watch) => watch.id === rightId)!;
  return <div className="compare-shell shell">
    <div className="compare-selectors"><label>Watch A<select value={leftId} onChange={(e) => setLeftId(e.target.value)}>{catalog.map((watch) => <option key={watch.id} value={watch.id} disabled={watch.id === rightId}>{watch.maker} — {watch.model}</option>)}</select></label><span>×</span><label>Watch B<select value={rightId} onChange={(e) => setRightId(e.target.value)}>{catalog.map((watch) => <option key={watch.id} value={watch.id} disabled={watch.id === leftId}>{watch.maker} — {watch.model}</option>)}</select></label></div>
    <div className="compare-head">{[left,right].map((watch) => <article key={watch.id}><div><Image src={watch.image} alt={`${watch.maker} ${watch.model}`} fill sizes="50vw" /></div><span>{watch.maker} · {watch.reference}</span><h2>{watch.model}</h2><strong>{formatMoney(watch.price)}</strong></article>)}</div>
    <div className="compare-metrics">{metrics.map(([label,key]) => { const l=left[key]; const r=right[key]; return <div className="metric-row" key={key}><strong className={l>r?"winner":""}>{l}</strong><div><span>{label}</span><i><b style={{width:`${l/2}%`}} /><b className="right-bar" style={{width:`${r/2}%`}} /></i></div><strong className={r>l?"winner":""}>{r}</strong></div>; })}</div>
    <div className="compare-verdict"><p className="eyebrow light">Lab readout</p><h3>{left.value > right.value ? left.model : right.model} leads on pure value.</h3><p>{left.quality > right.quality ? left.model : right.model} has the higher aggregate quality signal. The better choice still depends on which traits matter most to you.</p></div>
  </div>;
}
