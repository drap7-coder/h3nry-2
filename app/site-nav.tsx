"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/", "Lab"],
  ["/value", "Value Frontier"],
  ["/watches", "Watch Index"],
  ["/collection", "Collection"],
  ["/compare", "Compare"],
];

export function SiteNav() {
  const pathname = usePathname();
  return <header className="site-nav"><div className="nav shell">
    <Link className="brand image-logo-brand" href="/" aria-label="H3nry Watch Lab home"><Image src="/h3nry-watch-lab-logo.png" width={58} height={58} priority alt="H3nry Watch Lab block-built watch logo" /></Link>
    <nav className="nav-links" aria-label="Primary navigation">{links.map(([href,label]) => <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>)}</nav>
    <Link className="collection-button nav-method" href="/methodology">Method <span>↗</span></Link>
  </div></header>;
}
