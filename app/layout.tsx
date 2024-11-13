import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ENG-IL",
  description: "Learn English Easy",
  openGraph: {
    images: [
      {
        url: "https://eng-il.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "ENG-IL - Learn English Easy",
      },
    ],
  },
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
