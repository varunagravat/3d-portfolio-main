import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import {
  FONT_BEBAS_NEUE,
  FONT_BLACK_OPS_ONE,
  FONT_EL_MESSIRI,
  FONT_GRAVITAS_ONE,
  FONT_MONTSERRAT,
  FONT_POPPINS,
  FONT_WALLPOET,
} from "@/constant/font";
import CustomCursor from "@/components/custom-cursor";
import MeshBackground from "@/components/mesh-background";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Varun Agravat | Freelance Android & Flutter Developer",
    template: "%s | Varun Agravat",
  },
  description:
    "Hire Varun Agravat, a professional Freelance Android & Flutter Developer with 5+ years of experience. Expert in Kotlin, Jetpack Compose, Laravel, and React.",
  keywords: [
    "Freelance Android Developer",
    "Hire Android Developer",
    "Flutter Developer India",
    "Kotlin Expert",
    "Jetpack Compose Developer",
    "Laravel Developer",
    "React Developer",
    "Varun Agravat",
    "Mobile App Consultant",
  ],
  authors: [{ name: "Varun Agravat" }],
  creator: "Varun Agravat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://varunagravat.com",
    title: "Varun Agravat | Freelance Android & Flutter Developer",
    description: "Expert mobile app development services for startups and businesses.",
    siteName: "Varun Agravat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun Agravat | Freelance Android & Flutter Developer",
    description: "Expert mobile app development services.",
    creator: "@varunagravat",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FONT_MONTSERRAT.variable} ${FONT_POPPINS.variable} ${FONT_BEBAS_NEUE.variable} ${FONT_EL_MESSIRI.variable} ${FONT_WALLPOET.variable} ${FONT_BLACK_OPS_ONE.variable} ${FONT_GRAVITAS_ONE.variable} antialiased`}
      >
        <MeshBackground />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
