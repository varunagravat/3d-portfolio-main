"use client";

import React, { useEffect, useRef } from "react";

const MeshBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0, radius: 150 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 80;
        const connectionDistance = 150;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            baseX: number;
            baseY: number;

            constructor(width: number, height: number) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.baseX = this.x;
                this.baseY = this.y;
                this.size = Math.random() * 2 + 1;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = "rgba(162, 147, 255, 0.5)"; // primary color
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }

            update(width: number, height: number) {
                // Move randomly
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off walls
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                const dx = mouse.current.x - this.x;
                const dy = mouse.current.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.current.radius) {
                    const force = (mouse.current.radius - distance) / mouse.current.radius;
                    const directionX = dx / distance;
                    const directionY = dy / distance;
                    this.x -= directionX * force * 2;
                    this.y -= directionY * force * 2;
                }
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const drawLines = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = 1 - distance / connectionDistance;
                        ctx.strokeStyle = `rgba(162, 147, 255, ${opacity * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update(canvas.width, canvas.height);
                p.draw();
            });
            drawLines();
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        handleResize();
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none bg-white"
        />
    );
};

export default MeshBackground;
