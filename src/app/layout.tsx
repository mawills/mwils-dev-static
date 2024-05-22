import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const font = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mwills.dev",
  description: "Portfolio website for Software Engineer Matthew Wills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
