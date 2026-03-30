"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import MotionWrapper from "@/components/motion-wrapper";
import SectionHeader from "@/components/section-header";
import { CONFIG } from "@/config";
import { ASSETS } from "@/constant/assets";

const tabs = [
  {
    name: "Project",
    image: ASSETS.home.myLatestProject.suitcase,
    data: [...CONFIG.projects],
  },
  {
    name: "More",
    image: ASSETS.home.myLatestProject.rocket,
    data: [],
  },
];

const MyLatestProjectSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get("tab");
    if (tab && parseInt(tab, 10) < tabs.length - 1) {
      setActiveTab(parseInt(tab, 10));
    }
  }, []);

  return (
    <section ref={ref} className="dk-safe-x-padding dk-section-distance">
      <SectionHeader
        title="My Latest Project"
        description="Take a look at something I've worked on, such as a case study, real project, and more."
        inViewport={inView}
        className="text-center"
        animate
      />
      <div className="mt-[50px] h-full">
        <div className="flex flex-col items-center justify-center md:items-start md:flex-row gap-9">
          {/* tabs */}
          <div className="flex flex-row md:flex-col bg-gray p-3 md:p-[26px] rounded-2xl md:rounded-[25px] gap-x-3 md:gap-x-0 gap-y-[26px]">
            {tabs.map((tab, index) => (
              <MotionWrapper
                as="button"
                key={index.toString()}
                className={`relative ${activeTab === index ? "dk-gradient-bg" : "bg-white"
                  } w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-2xl md:rounded-[25px] flex justify-center items-center shadow-xl overflow-hidden cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onClick={() => {
                  if (index === tabs.length - 1) {
                    router.push("/project");
                    return;
                  }
                  setActiveTab(index);
                  window.history.pushState({}, "", `?tab=${index}`);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={tab.image}
                  alt={`${tab.name} tab icon`}
                  width={100}
                  height={100}
                  style={{ height: "auto" }}
                />
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 bg-gray/10 backdrop-blur-sm rounded-2xl md:rounded-[25px] hover:opacity-100 md:text-2xl">
                  <p
                    className={`${activeTab === index ? "text-white" : "text-accent"
                      } font-bold transition-colors duration-75 ease-in-out`}
                  >
                    {tab.name}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
          {/* content */}
          <div className="overflow-hidden">
            <div className="bg-white/5 backdrop-blur-[30px] border border-white/20 rounded-[50px] p-10 md:p-14 w-full h-[650px] overflow-y-auto shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden group/container">
              {/* Subtle background flourishes */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-y-14 gap-x-10 relative z-10">
                {tabs.map((tab, tabIndex) => {
                  const iconGradients = [
                    "from-[#5496FF] to-[#0052CC]",       // Blue
                    "from-[#A293FF] to-[#6E59FF]",       // Purple
                    "from-[#FF8A65] to-[#E64A19]",       // Orange
                    "from-[#4BFDB9] to-[#00C853]",       // Emerald
                    "from-[#FFD54F] to-[#FFA000]",       // Amber
                    "from-[#4DD0E1] to-[#0097A7]",       // Cyan
                    "from-[#81C784] to-[#388E3C]",       // Green
                    "from-[#F06292] to-[#C2185B]"        // Rose
                  ];

                  return tab.data.map((item, dataIndex) =>
                    activeTab === tabIndex && (
                      <div key={dataIndex.toString()} className="flex flex-col items-center gap-5 group">
                        <MotionWrapper
                          className="relative w-[90px] h-[90px] sm:w-[115px] sm:h-[115px] md:w-[140px] md:h-[140px] cursor-pointer"
                          initial={{ opacity: 0, scale: 0.5, y: 20 }}
                          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                          transition={{
                            type: "spring",
                            damping: 15,
                            stiffness: 150,
                            delay: dataIndex * 0.05,
                          }}
                          whileHover={{ scale: 1.12, y: -10 }}
                          whileTap={{ scale: 0.92 }}
                        >
                          {/* Main App Icon Card */}
                          <div className={`w-full h-full bg-linear-to-br ${iconGradients[dataIndex % iconGradients.length]} rounded-[28px] sm:rounded-[34px] md:rounded-[42px] shadow-[0_10px_25px_rgba(0,0,0,0.15)] flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]`}>

                            {/* Inner Highlight/Glow */}
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            {/* 3D Asset */}
                            <Image
                              className="object-contain w-[65%] h-[65%] drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:scale-115 group-hover:rotate-6"
                              src={item.image}
                              alt={`${item.title} project image`}
                              width={150}
                              height={150}
                              priority
                            />

                            {/* Glossy Overlay (Apple Style) */}
                            <div className="absolute top-0 left-0 w-full h-[55%] bg-linear-to-b from-white/25 to-transparent rounded-t-[42px] pointer-events-none opacity-60" />

                            {/* Minimal Hover Controls */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                              {item?.urls?.demo && (
                                <Link
                                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-white/40 transition-all hover:scale-110 shadow-lg"
                                  href={item.urls.demo}
                                  target="_blank"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <IoMdOpen className="text-xl md:text-2xl" />
                                </Link>
                              )}
                              {item?.urls?.github && (
                                <Link
                                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-white/40 transition-all hover:scale-110 shadow-lg"
                                  href={item.urls.github}
                                  target="_blank"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <BsGithub className="text-xl md:text-2xl" />
                                </Link>
                              )}
                            </div>
                          </div>
                        </MotionWrapper>

                        {/* Improved App Label */}
                        <div className="text-center w-full px-2">
                          <h4 className="text-[12px] sm:text-[14px] md:text-[15px] font-bold text-accent tracking-tighter leading-[1.2] line-clamp-1 group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h4>
                          <span className="inline-block mt-1 text-[9px] sm:text-[10px] uppercase font-heavy tracking-[2px] opacity-40 text-accent group-hover:opacity-60 transition-opacity">
                            {item.category || "App"}
                          </span>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyLatestProjectSection;
