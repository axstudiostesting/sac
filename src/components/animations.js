// utils/animations.js

// Framer Motion animations for consistent animation patterns across the app

export const fadeInUp = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInDown = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInLeft = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInRight = {
  hidden: {
    x: 30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scaleIn = {
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export const popIn = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const slideUp = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const slideInLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const slideInRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Card hover animations
export const cardHover = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const iconHover = {
  hover: {
    rotate: 10,
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
};

// Button animations
export const buttonTap = {
  tap: {
    scale: 0.95,
  },
};

export const buttonHover = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

// Stagger children with custom delay
export const createStaggerVariants = (staggerDelay = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

// Use this for sequential item animations
export const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Text reveal animation
export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Section entrance animation
export const sectionEntrance = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// Hero section animation
export const heroEntrance = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

// For logos/marquee animations
export const infiniteScroll = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

// Mobile menu animations
export const mobileMenuVariants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Modal animations
export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

// Tooltip animations
export const tooltipVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// Loader/spinner animation
export const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: "linear",
    },
  },
};

// Progress bar animation
export const progressVariants = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

// Common animation configurations for reusable use
export const animationConfig = {
  viewport: {
    once: true,
    amount: 0.1,
    margin: "-100px",
  },
  initial: "hidden",
  whileInView: "visible",
};

// Quick access presets
export const presets = {
  fadeUp: {
    variants: fadeInUp,
    ...animationConfig,
  },
  fadeDown: {
    variants: fadeInDown,
    ...animationConfig,
  },
  fadeLeft: {
    variants: fadeInLeft,
    ...animationConfig,
  },
  fadeRight: {
    variants: fadeInRight,
    ...animationConfig,
  },
  scale: {
    variants: scaleIn,
    ...animationConfig,
  },
  pop: {
    variants: popIn,
    ...animationConfig,
  },
};

export default {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  containerVariants,
  staggerContainer,
  popIn,
  slideUp,
  slideInLeft,
  slideInRight,
  cardHover,
  iconHover,
  buttonTap,
  buttonHover,
  createStaggerVariants,
  listItemVariants,
  textReveal,
  sectionEntrance,
  heroEntrance,
  infiniteScroll,
  mobileMenuVariants,
  modalVariants,
  tooltipVariants,
  spinnerVariants,
  progressVariants,
  animationConfig,
  presets,
};
