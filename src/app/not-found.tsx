"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative">
            <div className="z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                    }}
                    className="text-[150px] md:text-[250px] font-extrabold leading-none dk-gradient-text drop-shadow-[0_20px_50px_rgba(162,147,255,0.3)]"
                >
                    404
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-lg mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-accent mb-6">
                        Oops! Page Not Found.
                    </h2>
                    <p className="text-xl text-accent2 mb-10">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-lg rounded-2xl dk-gradient-btn hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
                    >
                        <FaHome className="text-xl" />
                        Back to Home
                    </Link>
                </motion.div>
            </div>

            {/* Decorative 3D-like floaters specifically for 404 */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/20 rounded-3xl blur-[2px] z-0 hidden md:block"
            />
            <motion.div
                animate={{
                    y: [0, 40, 0],
                    rotate: [0, -15, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-[2px] z-0 hidden md:block"
            />
        </main>
    );
}
