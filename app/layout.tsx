import type { Metadata } from "next";
import {Inter , Geist_Mono } from "next/font/google";
import "./globals.css";

// Neon imports (version-dependent)
import { NeonAuthProviders } from "@/providers/neon-auth-ui-provider";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Threadley",
  description: "A Reddit Clone built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <NeonAuthProviders>
             {children}
        </NeonAuthProviders>
       
      </body>
    </html>
  );
}