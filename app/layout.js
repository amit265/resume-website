import "./globals.css";
import Script from "next/script";
import { JsonLd } from "../components/json-ld";
import { gaMeasurementId, siteConfig, siteUrl } from "../lib/site-config";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Amit Kumar",
    "React Native Developer",
    "Mobile App Developer",
    "Firebase developer",
    "React Native India",
    "LLM mobile integration",
  ],
  authors: [{ name: "Amit Kumar" }],
  creator: "Amit Kumar",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/assets/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Amit Kumar profile photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/assets/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
