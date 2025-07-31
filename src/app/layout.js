import { Mona_Sans } from "next/font/google";
import "./globals.scss";


const MonaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Hoàng Lam",
  description: "Welcome to Hoàng Lam's personal portfolio website",
  keywords: "portfolio, Hoàng Lam, web developer, nextjs, frontend, fullstack, backend, nodejs",
  openGraph: {
    title: "Hoàng Lam - Portfolio",
    url: "https://hoanglam.portfolio.showtech.cloud//",
    image: "https://hoanglam.portfolio.showtech.cloud/og-image.png",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={MonaSans.variable}>
            <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <title>{metadata.title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
