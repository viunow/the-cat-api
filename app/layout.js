import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ogImage from "../public/og.jpg";

const SITE_URL = "https://the-cat-api.vercel.app/";

export async function generateMetadata() {
  return {
    title: "The Cat API Web",
    description: "for those who like cats",
    alternates: {
      canonical: SITE_URL,
    },
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: "The Cat API Web",
      description: "for those who like cats",
      url: SITE_URL,
      siteName: "The Cat API Web",
      images: ogImage.src,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
