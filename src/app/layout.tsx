import type { Metadata } from "next";
import { Anton, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display-google",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body-google",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nandarangla.com"),
  title: "Nandarang | Restaurant & Bar in Koreatown Los Angeles",
  description: "Welcome to Nandarang Restaurant & Bar. Since 1988, we have been serving the finest traditional Korean cuisine and fusion dishes in the heart of Koreatown, Los Angeles. Pair your meal with our rotating beers, spirits, soju, and mixologist-crafted cocktails.",
  keywords: "Nandarang, Korean Restaurant LA, Koreatown Bar, Korean Fusion, Los Angeles Korean Food, Koreatown Restaurant, Soju, Tap Beers LA",
  applicationName: "Nandarang Restaurant & Bar",
  authors: [{ name: "Nandarang Restaurant & Bar" }],
  creator: "Nandarang Restaurant & Bar",
  publisher: "Nandarang Restaurant & Bar",
  category: "restaurant",
  icons: {
    icon: "/nandarang-favicon.png",
    shortcut: "/nandarang-favicon.png",
    apple: "/nandarang-favicon.png",
  },
  openGraph: {
    title: "Nandarang | Restaurant & Bar in Koreatown Los Angeles",
    description: "Serving authentic traditional Korean cuisine & innovative fusion dishes since 1988. Enjoy a full bar of craft beers, soju, sake, and handcrafted cocktails.",
    url: "https://nandarangla.com",
    siteName: "Nandarang Restaurant & Bar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/kimchi-fried-rice.jpg",
        width: 1200,
        height: 630,
        alt: "Nandarang Restaurant & Bar in Koreatown Los Angeles",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandarang | Restaurant & Bar in Koreatown Los Angeles",
    description: "Since 1988, a family-owned institution serving authentic traditional Korean cuisine and cocktails in Koreatown.",
    images: ["/kimchi-fried-rice.jpg"],
  },
  alternates: {
    canonical: "https://nandarangla.com",
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
      className={`${anton.variable} ${sourceSans3.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Skip to main content for screen readers accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
