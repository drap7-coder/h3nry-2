import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title:"Methodology — H3nry Watch Lab", description:"How H3nry evaluates watch quality and market value." };

const factors = [
  ["Movement","Architecture, reliability, regulation, serviceability and technical distinction."],
  ["Finishing","Case, dial, hands, bracelet and movement execution at the object level."],
  ["Heritage","Design continuity, historical consequence and cultural staying power."],
  ["Liquidity","Depth of demand, bid/ask behavior, volatility and ease of resale."],
];

export default function MethodologyPage() { return <main><section className="page-intro shell"><p className="eyebrow">Transparent scoring / 04</p><h1>Signal,<br /><em>not hype.</em></h1><p>H3nry separates the quality of the object from the temperature of the market, then shows where those two realities diverge.</p></section><section className="method-page shell"><div className="method-equation"><span>OBJECT QUALITY</span><b>÷</b><span>MARKET PRICE</span><b>=</b><strong>VALUE SIGNAL</strong></div><div className="factor-grid">{factors.map(([title,copy],index) => <article key={title}><span>0{index+1}</span><h2>{title}</h2><p>{copy}</p></article>)}</div><div className="method-note"><h2>What the score is—and isn&apos;t.</h2><p>It is a structured research signal, not a promise of investment return. Prices move, condition varies, and personal meaning cannot be reduced to a number. The score helps you ask better questions.</p><Link className="primary-action" href="/value">Open the frontier <span>↗</span></Link></div></section></main>; }
