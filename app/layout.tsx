import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const SITE_URL = "https://ramimetry.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rami Metry — Senior Web Developer | Fintech Specialist",
    template: "%s · Rami Metry",
  },
  description:
    "Senior Web Developer with 4+ years building production-grade fintech platforms — digital wallets, reconciliation systems, and multi-tenant payment gateways. React, Next.js, TypeScript, Node.js.",
  keywords: [
    "Rami Metry",
    "Senior Web Developer",
    "Frontend Architect",
    "Fintech Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web3",
    "Lebanon Developer",
    "Digital Wallet",
    "Payment Gateway",
  ],
  authors: [{ name: "Rami Metry", url: SITE_URL }],
  creator: "Rami Metry",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Rami Metry",
    title: "Rami Metry — Senior Web Developer | Fintech Specialist",
    description:
      "Senior Web Developer building production-grade fintech platforms — digital wallets, reconciliation systems, and multi-tenant payment gateways.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rami Metry — Senior Web Developer | Fintech Specialist",
    description:
      "Senior Web Developer building production-grade fintech platforms — digital wallets, reconciliation systems, and multi-tenant payment gateways.",
    creator: "@ramimetry",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Runs before React hydration to set the theme class and avoid a flash.
// Default = light. Only goes dark if the user explicitly chose dark previously.
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rami Metry",
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  jobTitle: "Senior Web Developer",
  description:
    "Senior Web Developer specializing in fintech platforms — digital wallets, reconciliation systems, and multi-tenant payment gateways.",
  email: "ramimetry2018@gmail.com",
  telephone: "+96171935698",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Qattine",
    addressCountry: "LB",
  },
  sameAs: [
    "https://github.com/RamiMetry",
    "https://www.linkedin.com/in/rami-metry-",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Fintech",
    "Digital Wallets",
    "Payment Gateways",
    "Web3",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Arab Open University",
  },
  knowsLanguage: ["Arabic", "English", "French"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 dark:bg-[#0a0a0f] dark:text-slate-100">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
