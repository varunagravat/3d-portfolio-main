import {
  SiExpo,
  SiExpress,
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiKotlin,
  SiAndroidstudio,
  SiFirebase,
  SiGooglemaps,
  SiMysql,
  SiSqlite,
  SiCplusplus,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

/**
 * Register your tech stack used in your projects here.
 * Make sure the key is the same as the one used in the project config.
 */
export const TECH_STACK = {
  nextjs: {
    name: "Next JS",
    icon: <SiNextdotjs />,
    color: "text-gray-900",
    siteUrl: "https://nextjs.org/",
  },
  laravel: {
    name: "Laravel",
    icon: <SiLaravel />,
    color: "text-red-500",
    siteUrl: "https://laravel.com/",
  },
  expo: {
    name: "Expo",
    icon: <SiExpo />,
    color: "text-black",
    siteUrl: "https://expo.dev/",
  },
  prisma: {
    name: "Prisma",
    icon: <SiPrisma />,
    color: "text-neutral-800",
    siteUrl: "https://www.prisma.io/",
  },
  expressjs: {
    name: "Express JS",
    icon: <SiExpress />,
    color: "text-black",
    siteUrl: "https://expressjs.com/",
  },
  javascript: {
    name: "Javascript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    siteUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  reactjs: {
    name: "React JS",
    icon: <SiReact />,
    color: "text-blue-500",
    siteUrl: "https://reactjs.org/",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-500",
    siteUrl: "https://tailwindcss.com/",
  },
  reactnative: {
    name: "React Native",
    icon: <TbBrandReactNative />,
    color: "text-blue-500",
    siteUrl: "https://reactnative.dev/",
  },
  typescript: {
    name: "Typescript",
    icon: <SiTypescript />,
    color: "text-blue-600",
    siteUrl: "https://www.typescriptlang.org/",
  },
  kotlin: {
    name: "Kotlin",
    icon: <SiKotlin />,
    color: "text-purple-600",
    siteUrl: "https://kotlinlang.org/",
  },
  androidstudio: {
    name: "Android Studio",
    icon: <SiAndroidstudio />,
    color: "text-green-600",
    siteUrl: "https://developer.android.com/studio",
  },
  firebase: {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "text-yellow-500",
    siteUrl: "https://firebase.google.com/",
  },
  java: {
    name: "Java",
    icon: <FaJava />,
    color: "text-red-600",
    siteUrl: "https://www.java.com/",
  },
  cpp: {
    name: "C++",
    icon: <SiCplusplus />,
    color: "text-blue-700",
    siteUrl: "https://isocpp.org/",
  },
  mysql: {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-800",
    siteUrl: "https://www.mysql.com/",
  },
  sqlite: {
    name: "SQLite",
    icon: <SiSqlite />,
    color: "text-blue-400",
    siteUrl: "https://www.sqlite.org/",
  },
} satisfies Record<string, TechStack>;
