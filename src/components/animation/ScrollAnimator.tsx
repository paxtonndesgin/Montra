"use client";

import { motion, useAnimation, useReducedMotion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export type AnimationType = 'slideUp' | 'slideLeft' | 'slideRight' | 'fade' | 'scaleUp';

interface ScrollAnimatorProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  type?: AnimationType;
}

const ScrollAnimator: React.FC<ScrollAnimatorProps> = ({ 
  children, 
  className,
  delay = 0,
  duration = 0.5,
  yOffset = 30,
  xOffset = 30,
  type = 'slideUp'
}) => {
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: '0px 0px -12% 0px',
  });

  useEffect(() => {
    if (prefersReducedMotion || inView) {
      controls.start('visible');
    }
  }, [controls, inView, prefersReducedMotion]);

  const animationDelay = prefersReducedMotion ? 0 : Math.min(delay, 0.12);
  const animationDuration = prefersReducedMotion ? 0 : Math.min(duration, 0.38);
  const resolvedYOffset = prefersReducedMotion ? 0 : Math.min(yOffset, 18);
  const resolvedXOffset = prefersReducedMotion ? 0 : Math.min(xOffset, 18);

  const getHiddenState = () => {
    switch (type) {
      case 'slideLeft': return { opacity: 0, x: resolvedXOffset };
      case 'slideRight': return { opacity: 0, x: -resolvedXOffset };
      case 'scaleUp': return { opacity: 0, scale: 0.8 };
      case 'fade': return { opacity: 0 };
      case 'slideUp':
      default: return { opacity: 0, y: resolvedYOffset };
    }
  };

  const getVisibleState = () => {
    switch (type) {
      case 'slideLeft':
      case 'slideRight': return { opacity: 1, x: 0 };
      case 'scaleUp': return { opacity: 1, scale: 1 };
      case 'fade': return { opacity: 1 };
      case 'slideUp':
      default: return { opacity: 1, y: 0 };
    }
  };

  const variants: Variants = {
    hidden: getHiddenState(),
    visible: { 
      ...getVisibleState(),
      transition: {
        type: "tween",
        ease: [0.22, 1, 0.36, 1],
        duration: animationDuration,
        delay: animationDelay,
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={prefersReducedMotion ? false : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimator;
