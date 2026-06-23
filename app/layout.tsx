import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gen I Labs — AI Business Infrastructure for Lead Operations",
  description:
    "Gen I Labs builds AI-powered business infrastructure. AgentFlow AI helps real estate teams seal lead leaks with governed capture, routing, approvals, and audit-ready follow-up.",
  openGraph: {
    title: "Gen I Labs — Seal the leaks. Protect the pipeline.",
    description:
      "AgentFlow AI is the lead operations layer for real estate teams that need every lead captured, qualified, routed, governed, and moved forward.",
    type: "website",
    locale: "en_ZA",
    url: "https://www.genilabs.co.za",
    siteName: "Gen I Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen I Labs — Seal the leaks. Protect the pipeline.",
    description:
      "AI-powered business infrastructure and AgentFlow AI, the lead operations layer for real estate teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
