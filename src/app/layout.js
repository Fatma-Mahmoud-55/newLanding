import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./../compnents/Header"
import Footer from "./../compnents/Footer"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "finc",
  description: "Invest smarter. Stress less. Be a fincr.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "finc",
    description: "Invest smarter. Stress less. Be a fincr.",
    url: "https://finc.me", 
    siteName: "finc",
    images: [
      {
        url: "/iphonee.png",
        width: 1200,
        height: 630,
        alt: "Finc - Invest Smarter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "finc",
    description: "Invest smarter. Stress less. Be a fincr.",
    images: ["/iphonee.png"], 
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning={true}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}