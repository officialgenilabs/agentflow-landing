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
  title: "AgentFlow AI — AI WhatsApp Sales Agent for SA Real Estate | Gen I Labs",
  description:
    "AgentFlow AI responds to every WhatsApp enquiry and Property24 lead email in under 60 seconds — qualifying, matching listings, and booking viewings automatically.",
  openGraph: {
    title: "AgentFlow AI — Your AI Sales Agent for Real Estate",
    description:
      "Respond to every lead in 47 seconds. Qualify, match, and book viewings automatically.",
    type: "website",
    locale: "en_ZA",
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
