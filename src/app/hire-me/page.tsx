"use client";

import { motion } from "framer-motion";
import { FaChevronLeft, FaPaperPlane, FaBriefcase, FaCode, FaRocket } from "react-icons/fa";
import { CONFIG } from "@/config";
import LinkNext from "next/link";

const HireMePage = () => {
    return (
        <main className="min-h-screen bg-transparent dk-safe-layout py-20 px-4">
            <div className="grid max-w-6xl mx-auto z-10 relative">
                {/* Back Link */}
                <LinkNext
                    href="/"
                    className="flex items-center gap-2 text-accent2 hover:text-primary transition-colors mb-12 w-fit group"
                >
                    <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Portfolio</span>
                </LinkNext>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 dk-gradient-text leading-tight">
                            Hire Me — <br /> Freelance Android & <br /> Flutter Developer.
                        </h1>
                        <p className="text-xl text-accent2 mb-10 leading-relaxed max-w-lg">
                            I help startups and businesses build high-performance mobile and web applications.
                            With expertise in Android, Flutter, and Modern Web, I turn your ideas into scalable products.
                        </p>

                        <div className="space-y-8 mb-12">
                            {[
                                {
                                    icon: <FaCode className="text-2xl" />,
                                    title: "Custom App Development",
                                    desc: "Native Android (Kotlin/Java) & Cross-platform (Flutter/React Native)."
                                },
                                {
                                    icon: <FaRocket className="text-2xl" />,
                                    title: "Performance Optimization",
                                    desc: "Making your existing apps faster, smoother, and more reliable."
                                },
                                {
                                    icon: <FaBriefcase className="text-2xl" />,
                                    title: "Technical Consulting",
                                    desc: "Strategic advice on architecture, tech stack, and scalability."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-accent mb-1">{item.title}</h3>
                                        <p className="text-accent2">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form (Professional UI) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-primary/5"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-accent">Work Inquiry</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-accent2 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 rounded-2xl border border-gray shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-accent2 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-6 py-4 rounded-2xl border border-gray shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white/50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-accent2 ml-1">Project Briefly</label>
                                <textarea
                                    placeholder="Tell me about your project or goal..."
                                    rows={4}
                                    className="w-full px-6 py-4 rounded-2xl border border-gray shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white/50 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 text-white font-bold text-lg rounded-2xl dk-gradient-btn flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-xl shadow-primary/20"
                            >
                                <FaPaperPlane />
                                Send Proposal
                            </button>
                        </form>

                        <div className="mt-10 pt-10 border-t border-gray text-center">
                            <p className="text-accent2 mb-4 italic">Or reach out directly at</p>
                            <a
                                href={`mailto:${CONFIG.email}`}
                                className="text-2xl font-bold text-primary hover:underline"
                            >
                                {CONFIG.email}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default HireMePage;
