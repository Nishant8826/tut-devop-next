'use client';

import { motion } from 'framer-motion';
import React from 'react';

// WHAT: Animation wrapper for page transitions.
// WHY: Adds smooth entry/exit animations to enhance the "premium" feel.
// HOW: Using Framer Motion's motion.div.
// IMPACT: Creates a dynamic and polished user experience.

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -20 },
};

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'tween', ease: 'linear', duration: 0.4 }}
      className="flex-grow"
    >
      {children}
    </motion.main>
  );
}
