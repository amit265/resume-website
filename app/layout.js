import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "../components/theme-provider";
import { Inter, Geist_Mono } from "next/font/google";
import { JsonLd } from "../components/json-ld";
import { gaMeasurementId, siteConfig, siteUrl } from "../lib/site-config";
import { FloatingContact } from "../components/floating-contact";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

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
    "Independent Android Developer India",
    "React Native product engineer",
    "Firebase Realtime Database",
    "Destya Studio Developer",
    "BPSC to React Native",
    "Cross-Platform Mobile Engineer",
    "Expo Developer",
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
        url: "/assets/og-image.png",
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
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png?v=3",
    shortcut: "/favicon.png?v=3",
    apple: "/favicon.png?v=3",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-accent/30 selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <JsonLd />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}');
            `}
          </Script>
          {children}
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
