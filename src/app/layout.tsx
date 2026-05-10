import type { Metadata } from "next";
import "../assets/style/scss/globals.scss";

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

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QueryProvider from "@/providers/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div style={{ flexGrow: 1, paddingTop: '80px' }}>
          <QueryProvider>
            {children}
          </QueryProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
