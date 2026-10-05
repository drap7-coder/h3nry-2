import Image from "next/image";
import Link from "next/link";
import { catalog, formatMoney } from "./watch-data";

const pathways = [
  { n:"01", href:"/collection", title:"Build your collection", copy:"Add what you own, record cost basis, and see the value of your watch box." },
  { n:"02", href:"/compare", title:"Compare watches", copy:"Put craftsmanship, heritage, liquidity and price side-by-side before you buy." },
  { n:"03", href:"/value", title:"Explore the frontier", copy:"Map market price against intrinsic watch quality to find exceptional value." },
];

export default function Home() {
  return <main>
    <section className="atlas-hero home-hero" id="top"><div className="hero shell">
      <div className="hero-copy"><p className="eyebrow">H3nry Watch Lab / Independent intelligence</p><h1>Mine the market.<br /><em>Find your watch.</em></h1><p className="lede">One place to understand the watches you own, compare the ones you want, and discover where real quality outruns price.</p><div className="hero-actions"><Link className="primary-action" href="/collection">Build my collection <span>↘</span></Link><span className="live-signal"><i /> Lab online</span></div></div>
      <div className="hero-artifact" aria-label="H3nry blue block-built dive watch"><div className="artifact-grid" aria-hidden="true" /><div className="artifact-cube cube-one" aria-hidden="true" /><div className="artifact-cube cube-two" aria-hidden="true" /><div className="artifact-cube cube-three" aria-hidden="true" /><div className="artifact-image"><Image src="/h3nry-watch-lab-logo.png" width={1254} height={1254} priority alt="Blue block-built H3nry dive watch surrounded by floating cubes" /></div><div className="artifact-label"><span>Field object / 001</span><strong>THE BLUE FRONTIER</strong></div><div className="artifact-coordinates">40.7128° N<br />74.0060° W</div></div>
    </div></section>

    <section className="pathways shell" aria-labelledby="lab-tools"><div className="section-heading"><div><p className="eyebrow">Choose your path / 01</p><h2 id="lab-tools">A lab, not a landing page.</h2></div><p>Each tool has its own workspace, so your collection, research and comparisons stay focused.</p></div><div className="pathway-grid">{pathways.map((item) => <Link className="pathway-card" href={item.href} key={item.href}><span>{item.n}</span><h3>{item.title}</h3><p>{item.copy}</p><b>Open tool ↗</b></Link>)}</div></section>

    <section className="photo-feature"><div className="shell"><div className="section-heading"><div><p className="eyebrow light">From the watch index / 02</p><h2>Real watches.<br />Real signals.</h2></div><Link className="text-link light" href="/watches">Browse all watches ↗</Link></div><div className="photo-row">{catalog.slice(0,3).map((watch) => <article className="photo-card" key={watch.id}><div className="photo-frame"><Image src={watch.image} alt={`${watch.maker} ${watch.model}`} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div><span>{watch.maker} · {watch.reference}</span><h3>{watch.model}</h3><p>{formatMoney(watch.price)} <b>VALUE {watch.value}</b></p></div></article>)}</div></div></section>
  </main>;
}
