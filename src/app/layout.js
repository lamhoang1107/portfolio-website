import { Mona_Sans } from "next/font/google";
import "./globals.scss";


const MonaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Hoàng Lam",
  description: "Hoàng Lam's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={MonaSans.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
