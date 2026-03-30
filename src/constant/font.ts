import { Montserrat, Poppins, Bebas_Neue, El_Messiri, Wallpoet, Black_Ops_One, Gravitas_One } from "next/font/google";
import localFont from "next/font/local";

export const FONT_MONTSERRAT = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const FONT_POPPINS = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const FONT_SUARTE = localFont({
  src: "../assets/fonts/suarte/Suarte Free.ttf",
  display: "swap",
});

export const FONT_BEBAS_NEUE = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const FONT_EL_MESSIRI = El_Messiri({
  variable: "--font-el-messiri",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const FONT_WALLPOET = Wallpoet({
  variable: "--font-wallpoet",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const FONT_BLACK_OPS_ONE = Black_Ops_One({
  variable: "--font-black-ops-one",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const FONT_GRAVITAS_ONE = Gravitas_One({
  variable: "--font-gravitas-one",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
