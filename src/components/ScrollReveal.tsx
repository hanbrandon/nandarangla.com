"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "simpleFade";
  delay?: number;
  duration?: number;
  distance?: number;
}

export default function ScrollReveal({
  children,
  variant = "fadeInUp",
  delay = 0,
  duration = 0.6,
  distance = 30,
  ...props
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (variant) {
      case "fadeInUp":
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 }
        };
      case "fadeInDown":
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 }
        };
      case "fadeInLeft":
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 }
        };
      case "fadeInRight":
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 }
        };
      case "zoomIn":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 }
        };
      case "simpleFade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px 0px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 1, 0.5, 1] as const // Custom smooth cubic-bezier transition
      }}
      variants={getVariants()}
      {...props}
    >
      {children}
    </motion.div>
  );
}
