"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxAnimatorProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

const ParallaxAnimator: React.FC<ParallaxAnimatorProps> = ({
  children,
  className,
  offset = 80,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 25%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], [offset, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.6], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
};

export default ParallaxAnimator;
