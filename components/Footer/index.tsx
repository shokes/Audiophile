import React from 'react';
import Navigation from '../Navigation';
import Typography from '../Typography';

const Footer = () => {
  return (
    <div className='  text-white bg-black mx-auto mt-[50px]'>
      <div className='max-w-[1110px] mx-auto '>
        <Navigation />
        <div className='opacity-50 w-[540px]'>
          <Typography as='xsmall' weight='font-medium'>
            Audiophile is an all in one stop to fulfill your audio needs. Were a
            small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our
            demo facility - we’re open 7 days a week.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
