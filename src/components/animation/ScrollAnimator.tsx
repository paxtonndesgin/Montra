"use client";

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface ScrollAnimatorProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

const ScrollAnimator: React.FC<ScrollAnimatorProps> = ({ 
  children, 
  className,
  delay = 0,
  duration = 0.5,
  yOffset = 50
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

  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: 'easeOut'
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
