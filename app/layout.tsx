import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ENG-IL",
  description: "Learn English Easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#021f25" />
      <meta name="msapplication-navbutton-color" content="#021f25" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#021f25" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
