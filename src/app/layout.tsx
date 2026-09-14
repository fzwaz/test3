import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://risknox.ai"),
  title: {
    default: "Risknox | Cybersecurity, Attack Surface Management & GRC Compliance",
    template: "%s | Risknox",
  },
  description: "Get audit-ready and secure your attack surface with Risknox. Continuous monitoring, risk quantification, ISO 27001, SOC 2, and DPDPA compliance.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Risknox",
    title: "Risknox | Cyber risk, answered.",
    description: "Continuous attack surface monitoring, risk quantification, and audit-ready GRC — ISO 27001, SOC 2, DPDPA and more.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Risknox — Cyber risk, answered.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Risknox | Cyber risk, answered.",
    description: "Continuous attack surface monitoring, risk quantification, and audit-ready GRC.",
    images: ["/opengraph-image"],
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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-black text-slate-100 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
