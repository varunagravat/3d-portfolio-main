"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHoverStart = () => setIsHovered(true);
        const handleHoverEnd = () => setIsHovered(false);

        window.addEventListener("mousemove", moveCursor);

        const interactiveElements = document.querySelectorAll(
            'button, a, input, [role="button"], .cursor-pointer',
        );

        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart);
                el.removeEventListener("mouseleave", handleHoverEnd);
            });
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <style jsx global>{`
        body {
          cursor: none !important;
        }
        a, button, [role="button"], .cursor-pointer {
          cursor: none !important;
        }
      `}</style>

            {/* Outer Circle (Trailing) */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-primary/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: "-50%",
                    y: "-50%",
                }}
                animate={{
                    scale: isHovered ? 1.8 : 1,
                    backgroundColor: isHovered ? "rgba(var(--primary-rgb), 0.1)" : "transparent",
                }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
            />

            {/* Inner Dot (Instant) */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: "-50%",
                    y: "-50%",
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                }}
            />
        </>
    );
};

export default CustomCursor;
