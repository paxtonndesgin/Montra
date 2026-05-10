"use client";

import { motion, useAnimation, Variants } from 'framer-motion';
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const getHiddenState = () => {
    switch (type) {
      case 'slideLeft': return { opacity: 0, x: xOffset };
      case 'slideRight': return { opacity: 0, x: -xOffset };
      case 'scaleUp': return { opacity: 0, scale: 0.8 };
      case 'fade': return { opacity: 0 };
      case 'slideUp':
      default: return { opacity: 0, y: yOffset };
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
        ease: "easeOut",
        duration: duration,
        delay: delay,
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimator;
