import { motion } from 'framer-motion';
import { Fragment } from 'react';

const FadeOneBy = ({ text }: { text: string | undefined }) => {
  const characters = text?.split('');

  return (
    <Fragment>
      {characters?.map((character, index) => {
        if (character === ' ') {
          return <span key={index} className='inline-block w-3' />;
        }

        return (
          <motion.span
            key={index}
            className='inline-block'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
          >
            {character}
          </motion.span>
        );
      })}
    </Fragment>
  );
};

export default FadeOneBy;
