import { Variants, Transition } from "framer-motion";

export const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  type: "spring" | "tween" | "inertia" = "tween",
  delay: number = 0,
  duration: number = 0.8
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      } as Transition,
    },
  };
};

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const plateVariants: Variants = {
  hidden: {
    x: "120%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
};

export const headerVariants: Variants = {
  hidden: {
    padding: "84px 0 84px 0",
    background: "transparent",
  },
  show: {
    padding: "14px 0 14px 0",
    background: "rgba(0,0,0,0.92)",
    transition: {
      type: "spring",
    },
  },
};

export const navVariants: Variants = {
  hidden: {
    clipPath: "circle(5.8% at 50% 0)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: "circle(130% at 50% 0)",
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};
