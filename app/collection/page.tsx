import type { Metadata } from "next";
import { CollectionManager } from "./collection-manager";

export const metadata: Metadata = { title:"My Collection — H3nry Watch Lab", description:"Track your watch collection, cost basis and estimated market value." };
export default function CollectionPage() { return <main><section className="page-intro shell"><p className="eyebrow">Private watch box / 01</p><h1>Build your<br /><em>collection.</em></h1><p>Add what you own, record what you paid, and see your watch box as a portfolio of objects—not a spreadsheet of SKUs.</p></section><CollectionManager /></main>; }
