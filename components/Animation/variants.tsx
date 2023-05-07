export const ease = [0.6, 0.05, -0.01, 0.9];

export const nameVariant = {
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

export const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    delayChildren: 0.5,
  },
};
