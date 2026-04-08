import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 dark:bg-[#0a0a0f] dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
