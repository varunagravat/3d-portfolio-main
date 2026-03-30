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
    github: "https://github.com/VarunAgravat",
    linkedin: "https://www.linkedin.com/in/varun-agravat",
    instagram: "https://www.instagram.com/",
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
    TECH_STACK.firebase,
    TECH_STACK.sqlite,
    TECH_STACK.mysql,
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
      image: "/projects/3d-portfolio.webp", // Placeholder
      techStack: [
        TECH_STACK.kotlin,
        TECH_STACK.java,
        TECH_STACK.firebase,
        TECH_STACK.androidstudio,
      ],
      urls: {
        demo: "https://docs.google.com/document/d/1hPtAMuQPaBMEKaDMNoOuNmXSlXEKt4pOvtoXt-4Fv0M/edit?usp=sharing",
      },
      category: "Mobile App",
    },
    {
      title: "Application Delivery Excellence",
      summary:
        "Delivered 15+ Android applications exceeding deployment timelines by 20% at Upswing Techno Labs.",
      image: "/projects/3d-portfolio.webp", // Placeholder
      techStack: [
        TECH_STACK.androidstudio,
        TECH_STACK.java,
        TECH_STACK.kotlin,
      ],
      urls: {
        demo: "#",
      },
      category: "Professional Milestone",
    },
    {
      title: "Performance Boost Module",
      summary:
        "Enhanced app performance, boosting user satisfaction scores by 25% through optimized resource management and background processing.",
      image: "/projects/3d-portfolio.webp", // Placeholder
      techStack: [
        TECH_STACK.sqlite,
        TECH_STACK.firebase,
        TECH_STACK.androidstudio,
      ],
      urls: {
        demo: "#",
      },
      category: "Engineering",
    },
    {
      title: "UI Design Streamlining System",
      summary:
        "Designed handset-specific UI solutions for Tablets, PCs, and mobile phones, cutting development time by 3 weeks per project.",
      image: "/projects/3d-portfolio.webp", // Placeholder
      techStack: [
        TECH_STACK.androidstudio,
        TECH_STACK.kotlin,
      ],
      urls: {
        demo: "#",
      },
      category: "UI/UX",
    },
  ],
} satisfies Config;
