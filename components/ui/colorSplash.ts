"use client";

import confetti from "canvas-confetti";

/**
 * Triggers a vibrant, colorful paint splash / confetti burst effect
 * origin: optional { x: number, y: number } in screen pixels or (0-1) coordinates, or click MouseEvent/HTMLElement
 */
export function triggerColorSplash(
  target?: MouseEvent | React.MouseEvent | HTMLElement | { x: number; y: number } | null
) {
  if (typeof window === "undefined") return;

  let originX = 0.5;
  let originY = 0.1; // Default top near navbar

  if (target) {
    if ("clientX" in target && "clientY" in target) {
      // MouseEvent
      originX = Math.min(Math.max(target.clientX / window.innerWidth, 0), 1);
      originY = Math.min(Math.max(target.clientY / window.innerHeight, 0), 1);
    } else if (target instanceof HTMLElement) {
      // HTMLElement
      const rect = target.getBoundingClientRect();
      originX = Math.min(Math.max((rect.left + rect.width / 2) / window.innerWidth, 0), 1);
      originY = Math.min(Math.max((rect.top + rect.height / 2) / window.innerHeight, 0), 1);
    } else if ("x" in target && "y" in target) {
      originX = target.x > 1 ? target.x / window.innerWidth : target.x;
      originY = target.y > 1 ? target.y / window.innerHeight : target.y;
    }
  }

  // Festive, vibrant Bangladeshi & brand-inspired paint splash color palette
  const splashColors = [
    "#9D224D", // Brand Deep Crimson / Magenta
    "#FF2A6D", // Electric Rose / Holi Pink
    "#00D2FF", // Electric Cyan / Blue
    "#10B981", // Emerald Green
    "#FBBF24", // Vibrant Golden Yellow
    "#A855F7", // Bright Violet / Purple
    "#FF7849", // Vivid Orange / Sunset
    "#F43F5E", // Rich Coral Red
  ];

  // 1. Initial High-Velocity Paint Splash Burst
  confetti({
    particleCount: 45,
    spread: 80,
    origin: { x: originX, y: originY },
    colors: splashColors,
    startVelocity: 28,
    decay: 0.92,
    gravity: 0.9,
    scalar: 1.1,
    ticks: 160,
    shapes: ["circle", "square"],
    disableForReducedMotion: true,
  });

  // 2. Secondary Wider Droplet Spray (short delay)
  setTimeout(() => {
    confetti({
      particleCount: 30,
      spread: 120,
      origin: { x: originX, y: originY },
      colors: splashColors,
      startVelocity: 20,
      decay: 0.94,
      gravity: 1.1,
      scalar: 0.8,
      ticks: 180,
      shapes: ["circle"],
      disableForReducedMotion: true,
    });
  }, 60);

  // 3. Delicate Micro-Sparkle Glitter Spray
  setTimeout(() => {
    confetti({
      particleCount: 20,
      spread: 150,
      origin: { x: originX, y: originY },
      colors: ["#FFFFFF", "#FDE047", "#F472B6", "#67E8F9", "#A7F3D0"],
      startVelocity: 15,
      decay: 0.9,
      gravity: 0.7,
      scalar: 0.6,
      ticks: 140,
      shapes: ["circle"],
      disableForReducedMotion: true,
    });
  }, 120);
}
