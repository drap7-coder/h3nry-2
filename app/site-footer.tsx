import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return <footer className="footer shell"><Link className="brand image-logo-brand footer-logo" href="/"><Image src="/h3nry-watch-lab-logo.png" width={86} height={86} alt="H3nry Watch Lab block-built watch logo" /></Link><p>Independent watch intelligence.<br />Built for the curious.</p><Link href="/methodology">Read the method ↗</Link></footer>;
}
