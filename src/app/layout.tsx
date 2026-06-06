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
  title: "Nandarang Korean Restaurant & Bar | Koreatown LA Late Night Dining",
  description: "Nandarang is a Korean restaurant and bar in Koreatown Los Angeles serving Korean food, fusion dishes, soju, cocktails, draft beer, daily happy hour, and late-night dining until 2 AM.",
  keywords: "Nandarang, Korean restaurant Koreatown LA, Korean bar Los Angeles, Koreatown late night food, Korean fusion restaurant LA, soju bar Koreatown, happy hour Koreatown, Korean fried chicken Los Angeles, Korean restaurant near Wilshire Los Angeles",
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
    title: "Nandarang Korean Restaurant & Bar | Koreatown LA",
    description: "Koreatown LA Korean food, fusion dishes, happy hour, soju, cocktails, draft beer, and late-night dining until 2 AM.",
    url: "https://nandarangla.com",
    siteName: "Nandarang Restaurant & Bar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nandarang Restaurant & Bar in Koreatown Los Angeles",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandarang Korean Restaurant & Bar | Koreatown LA",
    description: "Korean food, soju, cocktails, happy hour, and late-night dining in Koreatown Los Angeles.",
    images: ["/og-image.png"],
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
