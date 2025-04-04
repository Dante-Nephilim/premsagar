import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "600",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prem Sagar | NIT Delhi | Full Stack Developer",
  description: "Prem Sagar, NIT Delhi, Award winning W3 Certified Full Stack developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
