export type CatalogWatch = {
  id: string;
  maker: string;
  model: string;
  reference: string;
  category: "Dive" | "Travel" | "Chronograph" | "Dress";
  price: number;
  quality: number;
  value: number;
  movement: number;
  finishing: number;
  heritage: number;
  liquidity: number;
  image: string;
};

export const catalog: CatalogWatch[] = [
  { id:"rolex-gmt", maker:"Rolex", model:"GMT-Master II ‘Pepsi’", reference:"126710BLRO", category:"Travel", price:18900, quality:97, value:72, movement:94, finishing:92, heritage:100, liquidity:99, image:"/watches/rolex-gmt-pepsi.jpg" },
  { id:"rolex-sub", maker:"Rolex", model:"Submariner Date", reference:"126610LN", category:"Dive", price:13900, quality:96, value:75, movement:94, finishing:91, heritage:100, liquidity:99, image:"/watches/rolex-sub-date.jpg" },
  { id:"omega-speedmaster", maker:"Omega", model:"Speedmaster Moonwatch", reference:"310.30.42.50.01.002", category:"Chronograph", price:7000, quality:93, value:86, movement:95, finishing:88, heritage:100, liquidity:89, image:"/watches/omega-speedmaster.jpg" },
  { id:"tudor-bb58", maker:"Tudor", model:"Black Bay Fifty-Eight", reference:"M79030N", category:"Dive", price:4100, quality:88, value:91, movement:89, finishing:84, heritage:87, liquidity:88, image:"/watches/tudor-bb58.jpg" },
  { id:"grand-seiko", maker:"Grand Seiko", model:"Shunbun", reference:"SBGA413", category:"Dress", price:6600, quality:96, value:89, movement:98, finishing:99, heritage:86, liquidity:73, image:"/watches/grand-seiko-sbga413.jpg" },
  { id:"omega-seamaster", maker:"Omega", model:"Seamaster 300", reference:"234.30.41.21.01.001", category:"Dive", price:7100, quality:92, value:84, movement:94, finishing:90, heritage:94, liquidity:82, image:"/watches/omega-seamaster-300.jpg" },
  { id:"seiko-speedtimer", maker:"Seiko", model:"Prospex Speedtimer", reference:"SSC813", category:"Chronograph", price:675, quality:77, value:94, movement:74, finishing:76, heritage:88, liquidity:72, image:"/watches/seiko-prospex-speedtimer.jpg" },
  { id:"hamilton-intra", maker:"Hamilton", model:"Intra-Matic Auto Chrono", reference:"H38416711", category:"Chronograph", price:2345, quality:82, value:88, movement:84, finishing:80, heritage:87, liquidity:68, image:"/watches/hamilton-intra-matic.jpg" },
  { id:"jlc-reverso", maker:"Jaeger-LeCoultre", model:"Reverso Classic", reference:"Q3858522", category:"Dress", price:10900, quality:97, value:79, movement:98, finishing:98, heritage:99, liquidity:75, image:"/watches/jlc-reverso.jpg" },
];

export function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", { style:"currency", currency:"USD", maximumFractionDigits:0 }).format(value);
}
