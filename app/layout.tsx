import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { navItems } from "@/data";

import { Inter, Lora, JetBrains_Mono } from "next/font/google";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} min-h-screen antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey="teacher-portfolio-theme"
        >
          <NavBar navItems={navItems} />
          <main className="mx-auto max-w-6xl px-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
