"use client";

import React, { useEffect, useRef } from "react";

const GLOW_SIZE = 180;

export default function MouseGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (glowRef.current) {
                glowRef.current.style.left = `${e.clientX - GLOW_SIZE / 2}px`;
                glowRef.current.style.top = `${e.clientY - GLOW_SIZE / 2}px`;
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={glowRef}
            style={{
                position: "fixed",
                pointerEvents: "none",
                width: GLOW_SIZE,
                height: GLOW_SIZE,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(0,0,0,0) 70%)",
                filter: "blur(30px)",
                zIndex: 9999,
                transition: "left 0.08s linear, top 0.08s linear",
                mixBlendMode: "lighten",
            }}
        />
    );
}
