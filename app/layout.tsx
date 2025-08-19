import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Lato, Playfair_Display } from "next/font/google";

import { Header } from "@/components/header";

import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: {
    default: "Bistro Cafe",
    template: "%s - Bistro Cafe",
  },
  description:
    "Bistro Cafe — a cozy spot for coffee lovers, fresh pastries, and warm gatherings. Discover the perfect blend of taste, comfort, and atmosphere in the heart of the city.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
