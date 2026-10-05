import type { Metadata } from "next";
import { FrontierExplorer } from "../frontier-explorer";

export const metadata: Metadata = { title:"Value Frontier — H3nry Watch Lab", description:"Map watch quality against market price and find the frontier." };

export default function ValuePage() { return <FrontierExplorer />; }
