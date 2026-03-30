import { ASSETS } from "../constant/assets";
import { TECH_STACK } from "../constant/tech-stack";

/**
 * Configuration
 *
 * Modify the information below to customize your portfolio
 */

export const CONFIG = {
  name: {
    first: "Varun",
    last: "Agravat",
  },
  email: "varunagravat82786@gmail.com",
  role: "Sr. Application Developer",
  location: "Rajkot, Gujarat, India",
  socials: {
    github: "https://github.com/varunagravat/",
    linkedin: "https://www.linkedin.com/in/varun-agravat-85a4a91b2/",
    instagram: "https://www.instagram.com/varun__agravat/",
    dribbble: "https://dribbble.com/",
  },
  quotes: {
    text: "Building innovative Android solutions with a focus on performance, scalability, and seamless user experiences. Passionate about turning complex problems into elegant mobile applications.",
    author: "Varun Agravat",
  },
  techStacks: [
    TECH_STACK.kotlin,
    TECH_STACK.androidstudio,
    TECH_STACK.java,
    TECH_STACK.flutter,
    TECH_STACK.jetpackcompose,
    TECH_STACK.firebase,
    TECH_STACK.sqlite,
    TECH_STACK.mysql,
    TECH_STACK.laravel,
    TECH_STACK.cpp,
    TECH_STACK.javascript,
    TECH_STACK.reactjs,
    TECH_STACK.nextjs,
  ],
  resume: {
    fileName: "VarunAgravatResume.pdf",
    downloadUrl: "/files/VarunAgravatResume.pdf",
  },
  projects: [
    {
      title: "Neaben (Android Platform)",
      summary:
        "A location-based app linking users to Ghanaian businesses. Developed listings, geo-search, and reviews using Kotlin, Java, Retrofit, and Google Maps API.",
      image: ASSETS.home.myLatestProject.rocket,
      techStack: [
        TECH_STACK.kotlin,
        TECH_STACK.java,
        TECH_STACK.firebase,
        TECH_STACK.androidstudio,
      ],
      urls: {
        demo: "https://docs.google.com/document/d/1hPtAMuQPaBMEKaDMNoOuNmXSlXEKt4pOvtoXt-4Fv0M/edit?usp=sharing",
        github: "https://github.com/varunagravat/",
      },
      category: "Mobile App",
    },
    {
      title: "Application Delivery Excellence",
      summary:
        "Delivered 15+ Android applications exceeding deployment timelines by 20% at Upswing Techno Labs.",
      image: ASSETS.home.myLatestProject.suitcase,
      techStack: [
        TECH_STACK.androidstudio,
        TECH_STACK.java,
        TECH_STACK.kotlin,
      ],
      urls: {
        demo: "#",
        github: "#",
      },
      category: "Professional Milestone",
    },
    {
      title: "Performance Boost Module",
      summary:
        "Enhanced app performance, boosting user satisfaction scores by 25% through optimized resource management and background processing.",
      image: ASSETS.decoratives.bulb,
      techStack: [
        TECH_STACK.sqlite,
        TECH_STACK.firebase,
        TECH_STACK.androidstudio,
      ],
      urls: {
        demo: "#",
        github: "#",
      },
      category: "Engineering",
    },
    {
      title: "UI Design Streamlining System",
      summary:
        "Designed handset-specific UI solutions for Tablets, PCs, and mobile phones, cutting development time by 3 weeks per project.",
      image: ASSETS.decoratives.paintKit,
      techStack: [
        TECH_STACK.androidstudio,
        TECH_STACK.kotlin,
      ],
      urls: {
        demo: "#",
        github: "#",
      },
      category: "UI/UX",
    },
    {
      title: "Cloud Sync Engine",
      summary: "Real-time data synchronization system for multi-device cross-platform applications.",
      image: ASSETS.decoratives.zigZag,
      techStack: [TECH_STACK.firebase, TECH_STACK.kotlin],
      urls: { demo: "#", github: "#" },
      category: "Infrastructure",
    },
    {
      title: "Customer Support Portal",
      summary: "Unified dashboard for managing customer inquiries and ticket resolution workflow.",
      image: ASSETS.decoratives.teaCup,
      techStack: [TECH_STACK.reactjs, TECH_STACK.nextjs],
      urls: { demo: "#", github: "#" },
      category: "Web App",
    },
    {
      title: "Social Connect API",
      summary: "Secure and scalable API for integrating social media features into mobile apps.",
      image: ASSETS.decoratives.heart,
      techStack: [TECH_STACK.javascript, TECH_STACK.firebase],
      urls: { demo: "#", github: "#" },
      category: "Backend",
    },
    {
      title: "Security Shield Pro",
      summary: "Advanced security layer for encrypting sensitive user data and preventing unauthorized access.",
      image: ASSETS.decoratives.twistedTorus,
      techStack: [TECH_STACK.java, TECH_STACK.cpp],
      urls: { demo: "#", github: "#" },
      category: "Security",
    },
  ],
} satisfies Config;
