import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import SiteHeader from "@/components/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

// Display face for the name in the masthead (downloaded from dafont).
const inARush = localFont({
  src: "./fonts/InARush-Regular.otf",
  variable: "--font-in-a-rush",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} ${inARush.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <div className="flex min-h-screen flex-col px-7 py-12 sm:px-12 sm:py-16 lg:px-20">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
