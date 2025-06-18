import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Outfit, Ovo } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "../components/featuresComponent/wayHouse/LayoutWrapper" 

// Fonts setup (same as you already did)
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const interFont = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HuloFinance",
  description:
    "HuloFinance is an innovative online banking platform designed for modern financial management. It offers seamless, secure, and fast banking experiences...",
  viewport: "width=device-width, initial-scale=1",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${interFont.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
