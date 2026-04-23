"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

  const y = useTransform(scrollYProgress, [0, 1], [offset, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
};

export default ParallaxAnimator;
