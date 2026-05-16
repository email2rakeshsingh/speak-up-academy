import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: "Speak-Up English Online Academy",
    template: "%s | Speak-Up English Online Academy"
  },
  description:
    "Live Zoom spoken English and communication classes for working professionals, software employees, freshers, and job seekers.",
  keywords: [
    "Spoken English classes online",
    "Communication classes for working professionals",
    "English speaking course for software employees",
    "Online communication academy",
    "Interview communication training"
  ],
  openGraph: {
    title: "Speak-Up English Online Academy",
    description:
      "Transform your English and your career with live online communication training.",
    type: "website",
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
