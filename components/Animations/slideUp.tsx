import React from 'react';
import { motion } from 'framer-motion';
import { AnimationControls } from 'framer-motion';

export const ease = [0.6, 0.05, -0.01, 0.9];

const nameVariant = {
  initial: {
    y: 70,
  },
  animate: {
    y: 0,
    transition: {
      ease: ease,
      duration: 0.8,
    },
  },
};
const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    delayChildren: 0.5,
  },
};

const SlideUp = ({
  children,
  animate,
}: {
  children: React.ReactNode;
  animate: string | AnimationControls;
}) => {
  return (
    <motion.div
      variants={containerVariant}
      initial='initial'
      animate={animate}
      className='relative'
    >
      <div className='relative'>
        <div className='overflow-y-hidden'>
          <motion.div variants={nameVariant}>{children}</motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SlideUp;
