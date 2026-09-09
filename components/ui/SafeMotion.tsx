"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * Filter out Framer Motion animation and gesture props
 * so that standard DOM elements (div, h1, p, etc.) don't receive unrecognized attributes during SSR/pre-mount.
 */
export function filterMotionProps<T extends Record<string, any>>(props: T): Record<string, any> {
  const {
    whileInView,
    whileHover,
    whileTap,
    whileFocus,
    whileDrag,
    initial,
    animate,
    exit,
    transition,
    variants,
    viewport,
    onAnimationStart,
    onAnimationComplete,
    onUpdate,
    onDrag,
    onDragStart,
    onDragEnd,
    layout,
    layoutId,
    transformTemplate,
    custom,
    inherit,
    staticContext,
    ...cleanProps
  } = props;
  return cleanProps;
}

export function useSafeMotion() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const MotionDiv = React.useMemo(() => {
    if (mounted) return motion.div;
    const Fallback = React.forwardRef<HTMLDivElement, any>((props, ref) => (
      <div ref={ref} {...filterMotionProps(props)} />
    ));
    Fallback.displayName = "SafeMotionDivFallback";
    return Fallback;
  }, [mounted]);

  const MotionH1 = React.useMemo(() => {
    if (mounted) return motion.h1;
    const Fallback = React.forwardRef<HTMLHeadingElement, any>((props, ref) => (
      <h1 ref={ref} {...filterMotionProps(props)} />
    ));
    Fallback.displayName = "SafeMotionH1Fallback";
    return Fallback;
  }, [mounted]);

  const MotionP = React.useMemo(() => {
    if (mounted) return motion.p;
    const Fallback = React.forwardRef<HTMLParagraphElement, any>((props, ref) => (
      <p ref={ref} {...filterMotionProps(props)} />
    ));
    Fallback.displayName = "SafeMotionPFallback";
    return Fallback;
  }, [mounted]);

  return { mounted, MotionDiv, MotionH1, MotionP };
}
