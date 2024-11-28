import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OutfitAI",
  description: "Outfit object detector",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          `${inter.className} antialiased`,
          "px-40",
          "bg-primary-dark"
        )}
      >
        {children}
      </body>
    </html>
  );
}
