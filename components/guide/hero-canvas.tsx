"use client";

import { useEffect, useRef } from "react";

type Variant = "botw" | "totk";

/**
 * Canvas hero backdrop, recolored to the site's forest/teal/gold palette.
 * - "botw": layered ridges, a low sun, a shrine, and a Sheikah tower glyph.
 * - "totk": floating sky islands, a descending light shaft, ridges, and a
 *   Zonai emblem — evoking the sky / surface / Depths layers.
 * DPR-capped, redrawn on resize, null-guarded for SSR/teardown.
 */
export function HeroCanvas({ variant = "botw" }: { variant?: Variant }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (w === 0 || h === 0) return;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const sky = ctx.createLinearGradient(0, 0, 0, h);
      if (variant === "totk") {
        sky.addColorStop(0, "#cfe0d4");
        sky.addColorStop(0.42, "#dcd5a2");
        sky.addColorStop(1, "#1f3e30");
      } else {
        sky.addColorStop(0, "#bcd6cf");
        sky.addColorStop(0.4, "#d8d6a4");
        sky.addColorStop(1, "#2c5240");
      }
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      // Low sun.
      ctx.fillStyle = "rgba(217, 164, 65, 0.92)";
      ctx.beginPath();
      ctx.arc(w * 0.76, h * 0.2, Math.max(58, w * 0.055), 0, Math.PI * 2);
      ctx.fill();

      const ridge = (points: number[][], color: string) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, h);
        points.forEach(([x, y]) => ctx.lineTo(w * x, h * y));
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fill();
      };

      ridge(
        [[0, 0.58], [0.11, 0.46], [0.22, 0.56], [0.35, 0.35], [0.48, 0.58], [0.61, 0.42], [0.76, 0.55], [0.88, 0.4], [1, 0.54]],
        "rgba(95, 123, 60, 0.5)",
      );
      ridge(
        [[0, 0.68], [0.12, 0.57], [0.25, 0.66], [0.42, 0.49], [0.56, 0.68], [0.7, 0.54], [0.84, 0.67], [1, 0.5]],
        "rgba(36, 75, 53, 0.82)",
      );
      ridge(
        [[0, 0.84], [0.16, 0.71], [0.28, 0.79], [0.43, 0.66], [0.58, 0.82], [0.74, 0.67], [0.9, 0.78], [1, 0.7]],
        "rgba(17, 27, 23, 0.95)",
      );

      if (variant === "totk") {
        // A floating sky island: rocky underside + flat grassy top + gold rim.
        const island = (cx: number, cy: number, rw: number) => {
          const rh = rw * 1.15;
          ctx.fillStyle = "rgba(20, 34, 27, 0.82)";
          ctx.beginPath();
          ctx.moveTo(cx - rw, cy);
          ctx.lineTo(cx - rw * 0.34, cy + rh);
          ctx.lineTo(cx + rw * 0.2, cy + rh * 0.78);
          ctx.lineTo(cx + rw, cy);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = "rgba(95, 123, 60, 0.9)";
          ctx.beginPath();
          ctx.ellipse(cx, cy, rw, rw * 0.3, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "rgba(217, 164, 65, 0.5)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(cx, cy, rw, rw * 0.3, 0, 0, Math.PI * 2);
          ctx.stroke();
        };

        const mainX = w * 0.66;
        const mainY = h * 0.3;
        const mainR = Math.max(52, w * 0.05);

        // Descending light shaft beneath the main island (the dive to surface).
        const shaft = ctx.createLinearGradient(0, mainY, 0, h * 0.78);
        shaft.addColorStop(0, "rgba(242, 226, 168, 0.5)");
        shaft.addColorStop(1, "rgba(242, 226, 168, 0)");
        ctx.fillStyle = shaft;
        ctx.beginPath();
        ctx.moveTo(mainX - mainR * 0.5, mainY);
        ctx.lineTo(mainX + mainR * 0.5, mainY);
        ctx.lineTo(mainX + mainR * 1.1, h * 0.78);
        ctx.lineTo(mainX - mainR * 1.1, h * 0.78);
        ctx.closePath();
        ctx.fill();

        island(w * 0.3, h * 0.24, mainR * 0.66);
        island(w * 0.86, h * 0.16, mainR * 0.5);
        island(mainX, mainY, mainR);

        // Zonai emblem: a ring with three inner spokes and a gold core.
        const zx = w * 0.78;
        const zy = h * 0.62;
        const zr = 26;
        ctx.strokeStyle = "rgba(46, 122, 110, 0.85)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(zx, zy, zr, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 3;
        for (let a = 0; a < 3; a += 1) {
          const ang = (a / 3) * Math.PI * 2 - Math.PI / 2;
          ctx.beginPath();
          ctx.moveTo(zx, zy);
          ctx.lineTo(zx + Math.cos(ang) * zr, zy + Math.sin(ang) * zr);
          ctx.stroke();
        }
        ctx.fillStyle = "rgba(217, 164, 65, 0.95)";
        ctx.beginPath();
        ctx.arc(zx, zy, 6, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Shrine silhouette.
        ctx.fillStyle = "rgba(17, 27, 23, 0.62)";
        const cx = w * 0.68;
        const cy = h * 0.53;
        ctx.fillRect(cx - 18, cy - 112, 36, 112);
        ctx.beginPath();
        ctx.moveTo(cx - 44, cy - 112);
        ctx.lineTo(cx, cy - 168);
        ctx.lineTo(cx + 44, cy - 112);
        ctx.closePath();
        ctx.fill();
        ctx.fillRect(cx - 86, cy - 82, 172, 84);
        ctx.fillRect(cx - 112, cy - 42, 224, 42);

        // Sheikah tower glyph.
        ctx.strokeStyle = "rgba(247, 249, 239, 0.74)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        const sx = w * 0.78;
        const sy = h * 0.64;
        ctx.moveTo(sx, sy - 150);
        ctx.lineTo(sx, sy + 46);
        ctx.moveTo(sx - 34, sy - 78);
        ctx.lineTo(sx + 34, sy - 78);
        ctx.stroke();
        ctx.fillStyle = "rgba(217, 164, 65, 0.95)";
        ctx.beginPath();
        ctx.arc(sx, sy - 78, 9, 0, Math.PI * 2);
        ctx.fill();
      }

      // Scattered stars (deterministic, no Math.random for stable renders).
      for (let i = 0; i < 42; i += 1) {
        const x = (i * 97) % w;
        const y = h * (0.24 + ((i * 37) % 44) / 100);
        const r = 1 + ((i * 11) % 4);
        ctx.fillStyle = `rgba(247, 249, 239, ${0.2 + (i % 5) * 0.08})`;
        ctx.fillRect(x, y, r, r);
      }
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [variant]);

  return <canvas aria-hidden="true" className="bw-hero-canvas" ref={canvasRef} />;
}
