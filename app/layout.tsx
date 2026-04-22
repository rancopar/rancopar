import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const SITE_URL = "https://rancopar.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RanCoPar — Ran Coding Partner | Web Development Kerala",
    template: "%s | RanCoPar",
  },
  description:
    "RanCoPar is a web development partnership based in Kerala, India. We build fast, clean web applications, admin systems, and SaaS products. Founded by Raihana, Adhil, and Nisamudheen.",
  keywords: [
    "RanCoPar", "Ran Coding Partner", "web development Kerala",
    "web developer Kerala", "Next.js developer Kerala",
    "software development Kerala India", "web application development",
    "Firebase developer India", "React developer Kerala",
    "full stack developer Kerala", "Kozhikode web developer", "rancopar.com",
  ],
  authors: [{ name: "RanCoPar", url: SITE_URL }],
  creator: "RanCoPar",
  publisher: "RanCoPar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "RanCoPar",
    title: "RanCoPar — Ran Coding Partner | Web Development Kerala",
    description:
      "A web development partnership based in Kerala. We build fast, clean web applications, admin systems, and digital products that last.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RanCoPar — Ran Coding Partner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RanCoPar — Ran Coding Partner | Web Development Kerala",
    description:
      "A web development partnership based in Kerala. We build fast, clean web applications, admin systems, and digital products that last.",
    images: ["/og-image.png"],
    creator: "@rancopar",
    site: "@rancopar",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
