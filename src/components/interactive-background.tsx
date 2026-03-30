"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo } from "react";

const InteractiveBackground = () => {
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springConfig = { damping: 50, stiffness: 200 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            mouseX.set((clientX / innerWidth) - 0.5);
            mouseY.set((clientY / innerHeight) - 0.5);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Parallax Layers
    const layer1X = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
    const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

    const layer2X = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
    const layer2Y = useTransform(smoothY, [-0.5, 0.5], [-50, 50]);

    const layer3X = useTransform(smoothX, [-0.5, 0.5], [-100, 100]);
    const layer3Y = useTransform(smoothY, [-0.5, 0.5], [-100, 100]);

    // Random particles for 3 layers
    const particles = useMemo(() => {
        return Array.from({ length: 45 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            layer: i % 3 + 1, // 1, 2, or 3
            opacity: Math.random() * 0.2 + 0.1,
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-white">
            {/* Background Blobs (Soft) */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-primary/5 rounded-full blur-[120px]"
                style={{ x: layer1X, y: layer1Y }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-secondary/5 rounded-full blur-[120px]"
                style={{ x: layer1X, y: layer1Y }}
            />

            {/* Grid Pattern */}
            <motion.div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
                    backgroundSize: "60px 60px",
                    x: layer1X,
                    y: layer1Y,
                }}
            />

            {/* Layered Particles */}
            {[1, 2, 3].map((layerNum) => (
                <motion.div
                    key={layerNum}
                    className="absolute inset-0"
                    style={{
                        x: layerNum === 1 ? layer1X : layerNum === 2 ? layer2X : layer3X,
                        y: layerNum === 1 ? layer1Y : layerNum === 2 ? layer2Y : layer3Y,
                    }}
                >
                    {particles
                        .filter((p) => p.layer === layerNum)
                        .map((p) => (
                            <div
                                key={p.id}
                                className="absolute rounded-full bg-primary/20"
                                style={{
                                    left: `${p.x}%`,
                                    top: `${p.y}%`,
                                    width: p.size,
                                    height: p.size,
                                    opacity: p.opacity,
                                }}
                            />
                        ))}
                </motion.div>
            ))}
        </div>
    );
};

export default InteractiveBackground;
