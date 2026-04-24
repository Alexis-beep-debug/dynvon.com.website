"use client";

import { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const needsRedrawRef = useRef(true);

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

      // Center of viewport — grid fades out near center, visible at edges
      const cx = w / 2;
      const cy = h / 2;
      const maxDist = Math.sqrt(cx * cx + cy * cy);

      for (let x = gridSize; x < w; x += gridSize) {
        for (let y = gridSize; y < h; y += gridSize) {
          // Distance from viewport center (0 = center, 1 = corner)
          const dcx = x - cx;
          const dcy = y - cy;
          const centerDist = Math.sqrt(dcx * dcx + dcy * dcy) / maxDist;
          // Edge factor: 0 at center, 1 at edges/corners
          const edgeFactor = Math.pow(Math.max(0, centerDist - 0.2) / 0.8, 1.5);

          // Mouse influence
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseInfluence = Math.max(0, 1 - dist / radius);

          // Only show dots where edgeFactor or mouseInfluence is significant
          const visibility = Math.max(edgeFactor, mouseInfluence * 0.7);
          if (visibility < 0.02) continue;

          const opacity = visibility * (0.12 + mouseInfluence * 0.35);
          const size = 0.8 + edgeFactor * 0.5 + mouseInfluence * 2.5;

          if (mouseInfluence > 0) {
            const r = 79 - mouseInfluence * 10;
            const g = 70 - mouseInfluence * 10;
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

      // Grid lines only near mouse and only at edges
      if (mx > 0 && my > 0) {
        for (let x = gridSize; x < w; x += gridSize) {
          for (let y = gridSize; y < h; y += gridSize) {
            const dx = x - mx;
            const dy = y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const mouseInfluence = Math.max(0, 1 - dist / radius);

            if (mouseInfluence > 0.1) {
              ctx.strokeStyle = `rgba(79, 70, 229, ${mouseInfluence * 0.1})`;
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

      if (needsRedrawRef.current) {
        needsRedrawRef.current = false;
        animationId = requestAnimationFrame(draw);
      }
    }

    function scheduleRedraw() {
      if (!needsRedrawRef.current) {
        needsRedrawRef.current = true;
        animationId = requestAnimationFrame(draw);
      }
    }

    // Track mouse globally on window, not on canvas
    function handleMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      scheduleRedraw();
    }

    function handleTouchMove(e: TouchEvent) {
      const touch = e.touches[0];
      if (touch) {
        mouseRef.current = { x: touch.clientX, y: touch.clientY };
        scheduleRedraw();
      }
    }

    function handleMouseLeave() {
      mouseRef.current = { x: -1000, y: -1000 };
      scheduleRedraw();
    }

    function handleResize() {
      resize();
      scheduleRedraw();
    }

    handleResize();
    needsRedrawRef.current = true;
    draw();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseLeave);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseLeave);
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
