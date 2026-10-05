"use client";

import Image from "next/image";
import { useMemo, useState, useSyncExternalStore } from "react";
import { catalog, formatMoney } from "../watch-data";

type OwnedWatch = { id:string; watchId:string; paid:number; acquired:string };
const storageKey = "h3nry-collection-v1";
const collectionEvent = "h3nry-collection-change";

function subscribe(callback:() => void) {
  window.addEventListener("storage",callback);
  window.addEventListener(collectionEvent,callback);
  return () => { window.removeEventListener("storage",callback); window.removeEventListener(collectionEvent,callback); };
}
function getSnapshot() { return localStorage.getItem(storageKey) ?? "[]"; }
function saveItems(items:OwnedWatch[]) { localStorage.setItem(storageKey,JSON.stringify(items)); window.dispatchEvent(new Event(collectionEvent)); }

export function CollectionManager() {
  const serialized = useSyncExternalStore(subscribe,getSnapshot,() => "[]");
  const items = useMemo<OwnedWatch[]>(() => { try { return JSON.parse(serialized); } catch { return []; } },[serialized]);
  const [watchId,setWatchId] = useState(catalog[0].id);
  const [paid,setPaid] = useState("");
  const [acquired,setAcquired] = useState("");
  const totals = useMemo(() => items.reduce((result,item) => { const watch = catalog.find((candidate) => candidate.id === item.watchId); result.market += watch?.price ?? 0; result.cost += item.paid; return result; },{market:0,cost:0}),[items]);

  function addWatch(event:React.FormEvent) {
    event.preventDefault();
    if (items.some((item) => item.watchId === watchId)) return;
    saveItems([...items,{id:crypto.randomUUID(),watchId,paid:Number(paid) || 0,acquired}]);
    setPaid(""); setAcquired("");
  }

  return <div className="collection-layout shell">
    <form className="collection-form" onSubmit={addWatch}><p className="eyebrow light">Add an object</p><h2>Log a watch</h2><label>Watch<select value={watchId} onChange={(e) => setWatchId(e.target.value)}>{catalog.map((watch) => <option value={watch.id} key={watch.id}>{watch.maker} — {watch.model}</option>)}</select></label><label>Purchase price<input type="number" min="0" step="1" placeholder="6500" value={paid} onChange={(e) => setPaid(e.target.value)} /></label><label>Acquired<input type="date" value={acquired} onChange={(e) => setAcquired(e.target.value)} /></label><button type="submit">Add to collection <span>＋</span></button><small>Your collection is stored privately in this browser for now.</small></form>
    <div className="collection-workspace"><div className="collection-stats"><div><span>Market value</span><strong>{formatMoney(totals.market)}</strong></div><div><span>Cost basis</span><strong>{formatMoney(totals.cost)}</strong></div><div><span>Position</span><strong className={totals.market - totals.cost >= 0 ? "positive" : "negative"}>{totals.cost ? formatMoney(totals.market - totals.cost) : "—"}</strong></div></div>
      {items.length === 0 ? <div className="collection-empty"><span>□</span><h3>Your watch box is empty.</h3><p>Choose a watch on the left to start tracking your collection.</p></div> : <div className="owned-grid">{items.map((item) => { const watch = catalog.find((candidate) => candidate.id === item.watchId)!; return <article className="owned-card" key={item.id}><div className="owned-image"><Image src={watch.image} alt={`${watch.maker} ${watch.model}`} fill sizes="(max-width: 700px) 100vw, 34vw" /></div><div className="owned-copy"><span>{watch.maker} · {watch.reference}</span><h3>{watch.model}</h3><dl><div><dt>Market</dt><dd>{formatMoney(watch.price)}</dd></div><div><dt>Paid</dt><dd>{item.paid ? formatMoney(item.paid) : "Not entered"}</dd></div><div><dt>Value score</dt><dd>{watch.value}/100</dd></div></dl><button onClick={() => saveItems(items.filter((candidate) => candidate.id !== item.id))}>Remove</button></div></article>; })}</div>}
    </div>
  </div>;
}
