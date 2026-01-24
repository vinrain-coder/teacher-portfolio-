import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vincent Ombogo | Junior Secondary Science Teacher",
    template: "%s | Vincent Ombogo",
  },
  description:
    "Junior Secondary School Science Teacher at Kisii Comprehensive School. Specialized in Integrated Science, Biology and Agriculture under the CBC curriculum.",
  keywords: [
    "Junior Secondary Teacher",
    "CBC Teacher",
    "Science Teacher Kenya",
    "Integrated Science",
    "Biology Teacher",
    "Agriculture Teacher",
    "Kisii Teachers",
  ],
  authors: [{ name: "Vincent Ombogo" }],
  creator: "Vincent Ombogo",
  metadataBase: new URL("https://your-domain.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          min-h-screen
          bg-background
          font-sans
          antialiased
        `}
      >
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
