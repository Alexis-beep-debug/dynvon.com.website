"use client";

import { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const gridSize = 40;
    const radius = 180;

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let x = gridSize; x < w; x += gridSize) {
        for (let y = gridSize; y < h; y += gridSize) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / radius);

          const opacity = 0.1 + influence * 0.4;
          const size = 1 + influence * 2.5;

          if (influence > 0) {
            const r = 79 - influence * 10;
            const g = 70 - influence * 10;
            const b = 229;
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          } else {
            ctx.fillStyle = `rgba(160, 165, 190, ${opacity})`;
          }

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (mx > 0 && my > 0) {
        for (let x = gridSize; x < w; x += gridSize) {
          for (let y = gridSize; y < h; y += gridSize) {
            const dx = x - mx;
            const dy = y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const influence = Math.max(0, 1 - dist / radius);

            if (influence > 0.1) {
              ctx.strokeStyle = `rgba(79, 70, 229, ${influence * 0.12})`;
              ctx.lineWidth = 0.5;

              if (x + gridSize < w) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + gridSize, y);
                ctx.stroke();
              }
              if (y + gridSize < h) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, y + gridSize);
                ctx.stroke();
              }
            }
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    // Track mouse globally on window, not on canvas
    function handleMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function handleMouseLeave() {
      mouseRef.current = { x: -1000, y: -1000 };
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
