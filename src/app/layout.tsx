import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vignesh Madineni — CS Undergrad & Systems Engineer",
  description:
    "CS undergrad building malware-analysis tooling, deep-learning systems, and full-stack products.",
  keywords: [
    "Vignesh Madineni",
    "Portfolio",
    "Malware Analysis",
    "Reverse Engineering",
    "RustDB",
    "PyTorch",
    "VIT Bhopal",
    "Deep Learning",
  ],
  authors: [{ name: "Vignesh Madineni" }],
  openGraph: {
    title: "Vignesh Madineni — CS Undergrad & Systems Engineer",
    description:
      "CS undergrad building malware-analysis tooling, deep-learning systems, and full-stack products.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0a] text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
