"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface DustTextProps {
  text: string;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

export default function DustText({ text, className = "" }: DustTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Mouse tracking
  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    prevX: -9999,
    prevY: -9999,
    vx: 0,
    vy: 0,
    speed: 0,
    isHovered: false,
    radius: 70,
  });

  const [dimensions, setDimensions] = useState({ width: 850, height: 58 });

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const width = Math.max(Math.floor(rect.width), 320);
    const height = width < 640 ? 40 : width < 800 ? 50 : 58;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    setDimensions({ width, height });

    // Offscreen canvas for sampling
    const offscreen = document.createElement("canvas");
    offscreen.width = width;
    offscreen.height = height;
    const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
    if (!offCtx) return;

    let fontSize = 48;
    if (width < 450) {
      fontSize = 28;
    } else if (width < 640) {
      fontSize = 32;
    } else if (width < 800) {
      fontSize = 40;
    }

    offCtx.fillStyle = "#ffffff";
    offCtx.font = `800 ${fontSize}px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    offCtx.textAlign = "left";
    offCtx.textBaseline = "middle";

    const startX = 2;
    const startY = height / 2; // Centered tightly in canvas

    offCtx.fillText(text, startX, startY);

    const imgData = offCtx.getImageData(0, 0, width, height);
    const data = imgData.data;

    // High density sampling (step = 1.15) for crisp, solid typography at rest
    const step = width < 640 ? 1.3 : 1.15;
    const particles: Particle[] = [];

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const px = Math.floor(x);
        const py = Math.floor(y);
        const index = (py * width + px) * 4;
        const alpha = data[index + 3];

        if (alpha > 45) {
          particles.push({
            x: x,
            y: y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
            size: Math.random() > 0.82 ? 1.25 : 0.95,
            alpha: Math.min(alpha / 255, 0.95),
          });
        }
      }
    }

    particlesRef.current = particles;
  }, [text]);

  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(initParticles);
    } else {
      initParticles();
    }

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initParticles, 100);
    };

    window.addEventListener("resize", handleResize);

    // ResizeObserver for container
    const container = containerRef.current;
    let observer: ResizeObserver | null = null;
    if (container && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => {
        handleResize();
      });
      observer.observe(container);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      if (observer) observer.disconnect();
    };
  }, [initParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let active = true;

    const render = () => {
      if (!active) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = dimensions.width;
      const height = dimensions.height;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const radius = mouse.radius;
      const radiusSq = radius * radius;

      // Mouse velocity damping
      mouse.vx *= 0.85;
      mouse.vy *= 0.85;
      mouse.speed = Math.hypot(mouse.vx, mouse.vy);

      // Physics constants: organic, fluid dispersion with smooth spring return
      const spring = 0.048;
      const friction = 0.86;
      const forceStrength = 3.8;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Interaction with mouse cursor
        if (mouse.isHovered && mouse.x !== -9999) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < radiusSq) {
            const dist = Math.sqrt(distSq);
            // Smooth non-linear cubic falloff
            const norm = 1 - dist / radius;
            const factor = norm * norm;
            const angle = Math.atan2(dy, dx);

            // 1. Radial repulsion away from cursor
            p.vx -= Math.cos(angle) * factor * forceStrength;
            p.vy -= Math.sin(angle) * factor * forceStrength;

            // 2. Aerodynamic cursor wake / fluid drag from mouse sweep
            p.vx += mouse.vx * factor * 0.45;
            p.vy += mouse.vy * factor * 0.45;

            // 3. Organic swirl along cursor path
            const swirl = 0.25 * factor;
            p.vx += (-dy / (dist + 0.1)) * swirl * (mouse.speed * 0.3 + 1);
            p.vy += (dx / (dist + 0.1)) * swirl * (mouse.speed * 0.3 + 1);
          }
        }

        // Return force towards resting origin
        const homeDx = p.originX - p.x;
        const homeDy = p.originY - p.y;

        p.vx += homeDx * spring;
        p.vy += homeDy * spring;

        p.vx *= friction;
        p.vy *= friction;

        p.x += p.vx;
        p.y += p.vy;

        // Snap tightly to origin only when BOTH displacement and velocity have settled
        const settledDistSq = (p.originX - p.x) * (p.originX - p.x) + (p.originY - p.y) * (p.originY - p.y);
        if (settledDistSq < 0.04 && Math.abs(p.vx) < 0.02 && Math.abs(p.vy) < 0.02) {
          p.x = p.originX;
          p.y = p.originY;
          p.vx = 0;
          p.vy = 0;
        }

        // Render particle
        ctx.fillStyle = `rgba(244, 244, 245, ${p.alpha})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      ctx.restore();
      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    // Global window pointer tracking for seamless cursor transitions
    const handleGlobalPointerMove = (e: PointerEvent) => {
      const cvs = canvasRef.current;
      if (!cvs) return;

      const rect = cvs.getBoundingClientRect();
      const margin = 35; // Allow responsive hover buffer around the text

      if (
        e.clientX >= rect.left - margin &&
        e.clientX <= rect.right + margin &&
        e.clientY >= rect.top - margin &&
        e.clientY <= rect.bottom + margin
      ) {
        const newX = e.clientX - rect.left;
        const newY = e.clientY - rect.top;

        const mouse = mouseRef.current;
        if (mouse.prevX !== -9999) {
          mouse.vx = newX - mouse.prevX;
          mouse.vy = newY - mouse.prevY;
        }

        mouse.prevX = newX;
        mouse.prevY = newY;
        mouse.x = newX;
        mouse.y = newY;
        mouse.isHovered = true;
      } else {
        const mouse = mouseRef.current;
        if (mouse.isHovered) {
          mouse.isHovered = false;
          mouse.x = -9999;
          mouse.y = -9999;
          mouse.prevX = -9999;
          mouse.prevY = -9999;
          mouse.vx = 0;
          mouse.vy = 0;
        }
      }
    };

    window.addEventListener("pointermove", handleGlobalPointerMove, { passive: true });

    return () => {
      active = false;
      window.removeEventListener("pointermove", handleGlobalPointerMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className={`relative z-20 select-none w-full ${className}`}
    >
      <h1 className="sr-only">{text}</h1>

      <canvas
        ref={canvasRef}
        className="cursor-crosshair block w-full touch-none relative z-20"
        title="Interactive Dust Effect — Hover or swipe across letters"
        style={{
          filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.08))",
        }}
      />
    </div>
  );
}
