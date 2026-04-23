import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../assets/style/scss/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Montra Therapy | Clinical Rigor and Trust",
  description: "Empowering independence through impactful care at home. Montra Therapy provides comprehensive care tailored to you, supporting NDIS, Aged Care, Medicare, and Private patients.",
  keywords: ["Montra Therapy", "home care", "NDIS", "aged care", "therapy", "clinical rigor"],
  icons: {
    icon: "/file.svg",
    shortcut: "/file.svg",
    apple: "/file.svg",
  },
  openGraph: {
    title: "Montra Therapy",
    description: "Empowering independence through impactful care at home.",
    url: "https://montratherapy.com",
    siteName: "Montra Therapy",
    images: [
      {
        url: "/file.svg",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
