import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ENG-IL",
  description: "Learn English Easy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eng-il.vercel.app",
    title: "ENG-IL - Learn English Easy",
    description: "An easy way to learn English.",
    images: [
      {
        url: "https://eng-il.vercel.app/og.jpg", // Change to JPG format
        width: 1200,
        height: 630,
        alt: "ENG-IL - Learn English Easy",
        type: "image/jpeg", // Update the type to 'image/jpeg'
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENG-IL - Learn English Easy",
    description: "An easy way to learn English.",
    images: ["https://eng-il.vercel.app/og.jpg"], // Also change here
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
