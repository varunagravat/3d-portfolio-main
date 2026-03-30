"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaSyncAlt, FaHome } from "react-icons/fa";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative">
            <div className="z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[120px] md:text-[200px] font-extrabold leading-none text-red-400 drop-shadow-[0_20px_50px_rgba(248,113,113,0.3)]"
                >
                    500
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-accent mb-6">
                        Something went wrong!
                    </h2>
                    <p className="text-xl text-accent2 mb-10 px-4">
                        An unexpected error occurred. Don&apos;t worry, it&apos;s not you, it&apos;s us.
                        We&apos;re working on getting it fixed.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            onClick={() => reset()}
                            className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-primary text-primary font-bold text-lg rounded-2xl hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
                        >
                            <FaSyncAlt className="text-xl" />
                            Try Again
                        </button>
                        <Link
                            href="/"
                            className="flex items-center gap-3 px-10 py-4 text-white font-bold text-lg rounded-2xl dk-gradient-btn hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
                        >
                            <FaHome className="text-xl" />
                            Go Home
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Warning background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-red-500/5 rounded-full blur-[120px] z-0" />
        </main>
    );
}
