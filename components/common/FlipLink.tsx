'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FlipLinkProps {
  children: string;
  duration?: number;
  stagger?: number;
  className?: string;
}

const FlipLink = ({
  children,
  duration = 0.4,
  stagger = 0.05,
  className = '',
}: FlipLinkProps) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={cn('relative block overflow-hidden font-bold', className)}
      style={{
        lineHeight: 1,
      }}
    >
      <div>
        {children.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' },
            }}
            transition={{
              duration,
              ease: 'easeInOut',
              delay: stagger * index,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { y: '100%' },
              hovered: { y: 0 },
            }}
            transition={{
              duration,
              ease: 'easeInOut',
              delay: stagger * index,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default FlipLink;
