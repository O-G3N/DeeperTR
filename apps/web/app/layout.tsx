import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeeperTR Web",
  description: "Next.js App Router frontend"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
