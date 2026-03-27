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
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw grid dots
      for (let x = gridSize; x < w; x += gridSize) {
        for (let y = gridSize; y < h; y += gridSize) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / radius);

          // Base opacity + mouse influence
          const opacity = 0.06 + influence * 0.35;
          const size = 1 + influence * 2.5;

          // Color shift near mouse
          if (influence > 0) {
            const r = 99 + influence * 30;
            const g = 102 + influence * 50;
            const b = 241;
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          } else {
            ctx.fillStyle = `rgba(140, 150, 200, ${opacity})`;
          }

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw grid lines near mouse
      if (mx > 0 && my > 0) {
        ctx.strokeStyle = `rgba(99, 102, 241, 0.04)`;
        ctx.lineWidth = 0.5;

        for (let x = gridSize; x < w; x += gridSize) {
          for (let y = gridSize; y < h; y += gridSize) {
            const dx = x - mx;
            const dy = y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const influence = Math.max(0, 1 - dist / radius);

            if (influence > 0.1) {
              ctx.strokeStyle = `rgba(99, 102, 241, ${influence * 0.08})`;

              // Horizontal line segment
              if (x + gridSize < w) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + gridSize, y);
                ctx.stroke();
              }

              // Vertical line segment
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

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }

    function handleMouseLeave() {
      mouseRef.current = { x: -1000, y: -1000 };
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.9 }}
    />
  );
}
