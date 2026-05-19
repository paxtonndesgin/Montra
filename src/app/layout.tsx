import type { Metadata } from "next";
import LogoMain from "@/assets/images/logo/logo.svg";
import "../assets/style/scss/globals.scss";

const logoUrl = typeof LogoMain === "string" ? LogoMain : LogoMain.src;

export const metadata: Metadata = {
  metadataBase: new URL("https://montratherapy.com.au"),
  title: "Montra Therapy | Clinical Rigor and Trust",
  description: "Empowering independence through impactful care at home. Montra Therapy provides comprehensive care tailored to you, supporting NDIS, Aged Care, Medicare, and Private patients.",
  keywords: ["Montra Therapy", "home care", "NDIS", "aged care", "therapy", "clinical rigor"],
  icons: {
    icon: logoUrl,
    shortcut: logoUrl,
    apple: logoUrl,
  },
  openGraph: {
    title: "Montra Therapy",
    description: "Empowering independence through impactful care at home.",
    url: "https://montratherapy.com.au",
    siteName: "Montra Therapy",
    images: [
      {
        url: logoUrl,
        width: 512,
        height: 512,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QueryProvider from "@/providers/QueryProvider";
import SiteLoadingGate from "@/components/SiteLoadingGate";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="siteBody">
        <QueryProvider>
          <SiteLoadingGate />
          <Header />
          <div className="siteContent">
            {children}
          </div>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
