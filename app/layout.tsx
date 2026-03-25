import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentFlow by Gen I Labs",
  description:
    "A premium real estate operations install that helps teams reduce lead chaos, tighten follow-up, and run a cleaner pipeline."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
