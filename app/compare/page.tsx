import type { Metadata } from "next";
import { CompareTool } from "./compare-tool";

export const metadata: Metadata = { title:"Compare Watches — H3nry Watch Lab", description:"Compare watch quality, value, movement, finishing, heritage and liquidity." };
export default function ComparePage() { return <main><section className="page-intro shell"><p className="eyebrow">Head-to-head / 02</p><h1>Compare the<br /><em>signal.</em></h1><p>Two watches. Six dimensions. One clear view of what your money is actually buying.</p></section><CompareTool /></main>; }
