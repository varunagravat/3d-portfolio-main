"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-xl">
            <div className="relative">
                {/* Animated Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-24 h-24 border-4 border-secondary/20 border-b-secondary rounded-full scale-75"
                />

                {/* Pulsing Center Icon/Text */}
                <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center font-bold text-primary text-sm"
                >
                    LOADING
                </motion.div>
            </div>
        </div>
    );
}
