import { ModelInputProvider } from "@/provider/model-input";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { DemoResultProvider } from "@/provider/demo-result";

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
          "bg-primary-dark",
          "tracking-wider"
        )}
      >
        <Toaster
          position="bottom-left"
        />
        <ModelInputProvider>
          <DemoResultProvider>
            {children}
          </DemoResultProvider>
        </ModelInputProvider>
      </body>
    </html>
  );
}
