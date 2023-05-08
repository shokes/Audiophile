import { motion } from 'framer-motion';

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn' }}
    >
      {children}
    </motion.div>
  );
};
