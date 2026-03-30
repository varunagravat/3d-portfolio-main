import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { CONFIG } from "@/config";
import {
  FONT_BEBAS_NEUE,
  FONT_BLACK_OPS_ONE,
  FONT_EL_MESSIRI,
  FONT_GRAVITAS_ONE,
  FONT_MONTSERRAT,
  FONT_POPPINS,
  FONT_WALLPOET,
} from "@/constant/font";
import { env } from "@/env";
import CustomCursor from "@/components/custom-cursor";
import MeshBackground from "@/components/mesh-background";

import "./globals.css";

export const metadata: Metadata = {
  title: "Varun Agravat - Portfolio",
  description: `${CONFIG.name.first.concat(
    " ",
    CONFIG.name.last,
  )}'s 3D theme Portfolio`,
  openGraph: {
    title: "Varun Agravat - Portfolio",
    description: `${CONFIG.name.first.concat(
      " ",
      CONFIG.name.last,
    )}'s 3D theme Portfolio`,
    url: env.NEXT_PUBLIC_APP_URL,
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Varun Agravat - Portfolio",
      },
    ],
  },
  twitter: {
    title: "Varun Agravat - Portfolio",
    description: `${CONFIG.name.first.concat(
      " ",
      CONFIG.name.last,
    )}'s 3D theme Portfolio`,
    images: [`${env.NEXT_PUBLIC_APP_URL}/og-image.webp`],
    card: "summary_large_image",
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
