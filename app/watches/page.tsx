import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { catalog, formatMoney } from "../watch-data";

export const metadata: Metadata = { title:"Watch Index — H3nry Watch Lab", description:"Browse real watch photography, market prices and H3nry value signals." };

export default function WatchesPage() {
  return <main><section className="page-intro shell"><p className="eyebrow">Reference library / 03</p><h1>The watch<br /><em>index.</em></h1><p>Real objects, consistent metrics and an independent read on market value.</p></section><section className="index-grid shell">{catalog.map((watch,index) => <article className="index-card" key={watch.id}><div className="index-image"><Image src={watch.image} alt={`${watch.maker} ${watch.model}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div><div className="index-copy"><span>0{index+1} / {watch.category}</span><p>{watch.maker} · {watch.reference}</p><h2>{watch.model}</h2><dl><div><dt>Market</dt><dd>{formatMoney(watch.price)}</dd></div><div><dt>Quality</dt><dd>{watch.quality}</dd></div><div><dt>Value</dt><dd>{watch.value}</dd></div></dl><Link href="/compare">Compare ↗</Link></div></article>)}</section></main>;
}
